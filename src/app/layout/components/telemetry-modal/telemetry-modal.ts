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

