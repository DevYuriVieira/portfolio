import { isPlatformBrowser } from '@angular/common';
import {
  DestroyRef,
  Injectable,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from '@angular/core';

export type WebVitalsRating = 'optimal' | 'good' | 'degraded';
export type CvTrackEvent = 'fullstack' | 'backend' | 'frontend';
export type WhatsAppSourceEvent = 'hero' | 'contact';

export interface ConversionSnapshot {
  readonly cvDownloads: Record<CvTrackEvent, number>;
  readonly totalCvDownloads: number;
  readonly whatsappClicks: number;
  readonly lastEvent: string | null;
}

export interface VitalsSnapshot {
  readonly lcp: number | null;
  readonly cls: number;
  readonly inp: number | null;
  readonly ttfb: number | null;
  readonly longTasks: number;
  readonly memoryMb: number | null;
  readonly rating: WebVitalsRating;
}

const ANALYTICS_STORAGE_KEY = 'yv_portfolio_analytics_v1';

interface StoredAnalyticsState {
  cvDownloads: Record<CvTrackEvent, number>;
  whatsappClicks: number;
  lastEvent: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class TelemetryService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  private readonly observers: PerformanceObserver[] = [];

  readonly lcp = signal<number | null>(null);
  readonly cls = signal<number>(0);
  readonly inp = signal<number | null>(null);
  readonly ttfb = signal<number | null>(null);
  readonly longTasks = signal<number>(0);
  readonly memoryMb = signal<number | null>(null);

  readonly cvDownloadsByTrack = signal<Record<CvTrackEvent, number>>({
    fullstack: 0,
    backend: 0,
    frontend: 0,
  });
  readonly whatsappClicks = signal<number>(0);
  readonly lastEvent = signal<string | null>(null);

  readonly totalCvDownloads = computed<number>(() => {
    const counts = this.cvDownloadsByTrack();
    return counts.fullstack + counts.backend + counts.frontend;
  });

  readonly conversions = computed<ConversionSnapshot>(() => ({
    cvDownloads: this.cvDownloadsByTrack(),
    totalCvDownloads: this.totalCvDownloads(),
    whatsappClicks: this.whatsappClicks(),
    lastEvent: this.lastEvent(),
  }));

  readonly rating = computed<WebVitalsRating>(() => {
    const lcpVal = this.lcp();
    const clsVal = this.cls();
    const inpVal = this.inp();

    const isLcpDegraded = lcpVal !== null && lcpVal > 4000;
    const isClsDegraded = clsVal > 0.25;
    const isInpDegraded = inpVal !== null && inpVal > 500;

    if (isLcpDegraded || isClsDegraded || isInpDegraded) {
      return 'degraded';
    }

    const isLcpNeedsImprovement = lcpVal !== null && lcpVal > 2500;
    const isClsNeedsImprovement = clsVal > 0.1;
    const isInpNeedsImprovement = inpVal !== null && inpVal > 200;

    if (isLcpNeedsImprovement || isClsNeedsImprovement || isInpNeedsImprovement) {
      return 'good';
    }

    return 'optimal';
  });

  readonly snapshot = computed<VitalsSnapshot>(() => ({
    lcp: this.lcp(),
    cls: this.cls(),
    inp: this.inp(),
    ttfb: this.ttfb(),
    longTasks: this.longTasks(),
    memoryMb: this.memoryMb(),
    rating: this.rating(),
  }));

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.restoreAnalyticsFromStorage();
    this.initNavigationTiming();
    this.initPerformanceObservers();
    this.sampleMemory();

    this.destroyRef.onDestroy(() => {
      this.disconnectObservers();
    });
  }

  trackCvDownload(track: CvTrackEvent, lang: string): void {
    this.cvDownloadsByTrack.update((prev) => ({
      ...prev,
      [track]: (prev[track] ?? 0) + 1,
    }));
    const eventLabel = `cv_download:${track}:${lang}`;
    this.lastEvent.set(eventLabel);
    this.persistAnalyticsToStorage();
    this.dispatchExternalAnalytics('cv_download', { track, lang });
  }

  trackWhatsAppClick(source: WhatsAppSourceEvent, lang: string): void {
    this.whatsappClicks.update((prev) => prev + 1);
    const eventLabel = `whatsapp_click:${source}:${lang}`;
    this.lastEvent.set(eventLabel);
    this.persistAnalyticsToStorage();
    this.dispatchExternalAnalytics('whatsapp_click', { source, lang });
  }

  private restoreAnalyticsFromStorage(): void {
    try {
      if (typeof localStorage === 'undefined') return;
      const raw = localStorage.getItem(ANALYTICS_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<StoredAnalyticsState>;
      if (parsed && typeof parsed === 'object') {
        if (parsed.cvDownloads && typeof parsed.cvDownloads === 'object') {
          this.cvDownloadsByTrack.set({
            fullstack: Number(parsed.cvDownloads.fullstack) || 0,
            backend: Number(parsed.cvDownloads.backend) || 0,
            frontend: Number(parsed.cvDownloads.frontend) || 0,
          });
        }
        if (typeof parsed.whatsappClicks === 'number') {
          this.whatsappClicks.set(parsed.whatsappClicks);
        }
        if (typeof parsed.lastEvent === 'string') {
          this.lastEvent.set(parsed.lastEvent);
        }
      }
    } catch {}
  }

  private persistAnalyticsToStorage(): void {
    try {
      if (typeof localStorage === 'undefined') return;
      const state: StoredAnalyticsState = {
        cvDownloads: this.cvDownloadsByTrack(),
        whatsappClicks: this.whatsappClicks(),
        lastEvent: this.lastEvent(),
      };
      localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }

  private dispatchExternalAnalytics(eventName: string, payload: Record<string, string>): void {
    if (!isPlatformBrowser(this.platformId) || typeof window === 'undefined') {
      return;
    }

    try {
      const win = window as Window & {
        dataLayer?: Record<string, unknown>[];
      };
      if (Array.isArray(win.dataLayer)) {
        win.dataLayer.push({
          event: eventName,
          ...payload,
          timestamp: Date.now(),
        });
      }

      window.dispatchEvent(
        new CustomEvent('portfolio:analytics', {
          detail: { event: eventName, ...payload, timestamp: Date.now() },
        })
      );
    } catch {}
  }

  private initNavigationTiming(): void {
    if (typeof performance === 'undefined' || !performance.getEntriesByType) {
      return;
    }

    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    if (navEntries.length > 0) {
      const entry = navEntries[0];
      const ttfb = Math.round(entry.responseStart);
      this.ttfb.set(ttfb);
      return;
    }

    if (performance.timing) {
      const ttfb = Math.max(0, performance.timing.responseStart - performance.timing.requestStart);
      this.ttfb.set(ttfb);
    }
  }

  private initPerformanceObservers(): void {
    if (typeof PerformanceObserver === 'undefined') {
      return;
    }

    this.observeLcp();
    this.observeCls();
    this.observeInp();
    this.observeLongTasks();
  }

  private observeLcp(): void {
    try {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length === 0) return;
        const lastEntry = entries[entries.length - 1];
        this.lcp.set(Math.round(lastEntry.startTime));
      });
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
      this.observers.push(observer);
    } catch {}
  }

  private observeCls(): void {
    try {
      let cumulativeScore = 0;
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const shift = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
          if (!shift.hadRecentInput && typeof shift.value === 'number') {
            cumulativeScore += shift.value;
            this.cls.set(Number(cumulativeScore.toFixed(3)));
          }
        }
      });
      observer.observe({ type: 'layout-shift', buffered: true });
      this.observers.push(observer);
    } catch {}
  }

  private observeInp(): void {
    try {
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const duration = Math.round(entry.duration);
          const current = this.inp();
          if (current === null || duration > current) {
            this.inp.set(duration);
          }
        }
      });
      observer.observe({ type: 'first-input', buffered: true });
      this.observers.push(observer);
    } catch {}
  }

  private observeLongTasks(): void {
    try {
      const observer = new PerformanceObserver((entryList) => {
        const count = entryList.getEntries().length;
        this.longTasks.update((total) => total + count);
      });
      observer.observe({ type: 'longtask', buffered: true });
      this.observers.push(observer);
    } catch {}
  }

  private sampleMemory(): void {
    const perf = performance as Performance & {
      memory?: {
        usedJSHeapSize: number;
        totalJSHeapSize: number;
        jsHeapSizeLimit: number;
      };
    };

    if (perf && perf.memory && perf.memory.usedJSHeapSize) {
      const usedMb = Math.round(perf.memory.usedJSHeapSize / (1024 * 1024));
      this.memoryMb.set(usedMb);
    }
  }

  private disconnectObservers(): void {
    for (const observer of this.observers) {
      observer.disconnect();
    }
    this.observers.length = 0;
  }
}
