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
import { I18nService } from '@core';
import { Heading, Text } from '@ui';
import { FLEETOPS_MODAL_DATA } from './fleetops-modal.data';

export type FleetOpsTab =
  | 'overview'
  | 'outbox'
  | 'messaging'
  | 'security'
  | 'benchmarks'
  | 'readme';

@Component({
  selector: 'app-fleetops-modal',
  standalone: true,
  imports: [Heading, Text],
  templateUrl: './fleetops-modal.html',
  styleUrl: './fleetops-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FleetOpsModal {
  @Output() close = new EventEmitter<void>();

  private readonly i18n = inject(I18nService);

  readonly activeLang = signal<'pt-BR' | 'en'>(
    this.i18n.currentLang() === 'en' ? 'en' : 'pt-BR'
  );
  readonly activeTab = signal<FleetOpsTab>('overview');
  readonly copied = signal<boolean>(false);
  readonly markdownContent = signal<string>('');

  readonly data = computed(() => FLEETOPS_MODAL_DATA[this.activeLang()]);

  setLanguage(lang: 'pt-BR' | 'en'): void {
    this.activeLang.set(lang);
  }

  setTab(tab: FleetOpsTab): void {
    this.activeTab.set(tab);
    if (tab === 'readme' && !this.markdownContent()) {
      void this.loadMarkdown();
    }
  }

  async loadMarkdown(): Promise<string> {
    if (this.markdownContent()) {
      return this.markdownContent();
    }
    try {
      const response = await fetch('docs/fleetops-api-case-study.md');
      if (response.ok) {
        const text = await response.text();
        this.markdownContent.set(text);
        return text;
      }
    } catch {
    }
    return '';
  }

  async copyMarkdown(): Promise<void> {
    try {
      const text = this.markdownContent() || (await this.loadMarkdown());
      if (text) {
        await navigator.clipboard.writeText(text);
      }
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2500);
    } catch {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2500);
    }
  }

  downloadDossier(): void {
    const link = document.createElement('a');
    link.href = 'docs/fleetops-api-case-study.md';
    link.download = 'fleetops-api-case-study.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  onBackdropClick(event: MouseEvent): void {
    if (
      (event.target as HTMLElement).classList.contains('fleetops-modal-backdrop')
    ) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.closeModal();
  }

  closeModal(): void {
    this.close.emit();
  }
}

