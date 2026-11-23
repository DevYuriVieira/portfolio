import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Output,
  computed,
  inject,
  signal,
} from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { I18nService, TelemetryService, TelemetryTab } from '@core';
import {
  TELEMETRY_MODAL_LABELS,
  TelemetryModalLabels,
} from './telemetry-modal.data';

@Component({
  selector: 'app-telemetry-modal',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './telemetry-modal.html',
  styleUrl: './telemetry-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TelemetryModal {
  private readonly i18n = inject(I18nService);
  readonly telemetry = inject(TelemetryService);

  @Output() close = new EventEmitter<void>();

  readonly copied = signal<boolean>(false);
  readonly resetNotice = signal<boolean>(false);

  readonly currentLang = this.i18n.currentLang;

  readonly labels = computed<TelemetryModalLabels>(() => {
    return (
      TELEMETRY_MODAL_LABELS[this.currentLang()] ??
      TELEMETRY_MODAL_LABELS['pt-BR']
    );
  });

  readonly totalConversions = computed<number>(() => {
    return (
      this.telemetry.totalCvDownloads() + this.telemetry.whatsappClicks()
    );
  });

  readonly fullstackPercent = computed<number>(() => {
    const total = this.telemetry.totalCvDownloads();
    if (total === 0) return 0;
    return Math.round(
      (this.telemetry.cvDownloadsByTrack().fullstack / total) * 100
    );
  });

  readonly backendPercent = computed<number>(() => {
    const total = this.telemetry.totalCvDownloads();
    if (total === 0) return 0;
    return Math.round(
      (this.telemetry.cvDownloadsByTrack().backend / total) * 100
    );
  });

  readonly frontendPercent = computed<number>(() => {
    const total = this.telemetry.totalCvDownloads();
    if (total === 0) return 0;
    return Math.round(
      (this.telemetry.cvDownloadsByTrack().frontend / total) * 100
    );
  });

  readonly healthScore = computed<number>(() => {
    const rating = this.telemetry.rating();
    if (rating === 'optimal') return 99;
    if (rating === 'good') return 88;
    return 65;
  });

  readonly lcpStatus = computed<'optimal' | 'good' | 'degraded'>(() => {
    const v = this.telemetry.lcp();
    if (v === null || v <= 2500) return 'optimal';
    return v <= 4000 ? 'good' : 'degraded';
  });

  readonly clsStatus = computed<'optimal' | 'good' | 'degraded'>(() => {
    const v = this.telemetry.cls();
    if (v <= 0.1) return 'optimal';
    return v <= 0.25 ? 'good' : 'degraded';
  });

  readonly inpStatus = computed<'optimal' | 'good' | 'degraded'>(() => {
    const v = this.telemetry.inp();
    if (v === null || v <= 200) return 'optimal';
    return v <= 500 ? 'good' : 'degraded';
  });

  readonly ttfbStatus = computed<'optimal' | 'good' | 'degraded'>(() => {
    const v = this.telemetry.ttfb();
    if (v === null || v <= 800) return 'optimal';
    return v <= 1800 ? 'good' : 'degraded';
  });

  readonly longTasksStatus = computed<'optimal' | 'good' | 'degraded'>(() => {
    const v = this.telemetry.longTasks();
    if (v === 0) return 'optimal';
    return v <= 3 ? 'good' : 'degraded';
  });

  readonly lcpBarPercent = computed<number>(() => {
    const v = this.telemetry.lcp();
    return v === null ? 0 : Math.min(100, Math.max(4, Math.round((v / 4000) * 100)));
  });

  readonly clsBarPercent = computed<number>(() => {
    const v = this.telemetry.cls();
    return v === 0 ? 4 : Math.min(100, Math.max(4, Math.round((v / 0.25) * 100)));
  });

  readonly inpBarPercent = computed<number>(() => {
    const v = this.telemetry.inp();
    return v === null ? 0 : Math.min(100, Math.max(4, Math.round((v / 500) * 100)));
  });

  readonly ttfbBarPercent = computed<number>(() => {
    const v = this.telemetry.ttfb();
    return v === null ? 0 : Math.min(100, Math.max(4, Math.round((v / 1800) * 100)));
  });

  readonly memoryBarPercent = computed<number>(() => {
    const v = this.telemetry.memoryMb();
    return v === null ? 0 : Math.min(100, Math.max(4, Math.round((v / 150) * 100)));
  });

  readonly longTasksBarPercent = computed<number>(() => {
    const v = this.telemetry.longTasks();
    return v === 0 ? 4 : Math.min(100, Math.round((v / 10) * 100));
  });

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (target?.classList.contains('telemetry-modal-backdrop')) {
      this.close.emit();
    }
  }

  selectTab(tab: TelemetryTab): void {
    this.telemetry.setTab(tab);
  }

  resampleMemory(): void {
    this.telemetry.sampleMemory();
  }

  simulateEvent(
    type: 'cv_fullstack' | 'cv_backend' | 'cv_frontend' | 'whatsapp'
  ): void {
    this.telemetry.simulateEvent(type);
  }

  async copyDiagnostics(): Promise<void> {
    try {
      const json = this.telemetry.exportSnapshotJson();
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(json);
      }
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2500);
    } catch {
      this.copied.set(false);
    }
  }

  resetSession(): void {
    this.telemetry.resetSession();
    this.resetNotice.set(true);
    setTimeout(() => this.resetNotice.set(false), 3000);
  }
}

