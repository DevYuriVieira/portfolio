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
import {
  ADR_MODAL_LABELS,
  AdrModalLabels,
  AdrRecord,
  PORTFOLIO_ADRS_I18N,
} from './adr-modal.data';

@Component({
  selector: 'app-adr-modal',
  standalone: true,
  imports: [],
  templateUrl: './adr-modal.html',
  styleUrl: './adr-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdrModal {
  private readonly i18n = inject(I18nService);

  @Output() close = new EventEmitter<void>();

  readonly activeAdrId = signal<string>('adr-001');
  readonly searchTerm = signal<string>('');
  readonly copied = signal<boolean>(false);

  readonly currentLang = this.i18n.currentLang;

  readonly labels = computed<AdrModalLabels>(() => {
    return ADR_MODAL_LABELS[this.currentLang()] ?? ADR_MODAL_LABELS['pt-BR'];
  });

  readonly adrs = computed<readonly AdrRecord[]>(() => {
    return PORTFOLIO_ADRS_I18N[this.currentLang()] ?? PORTFOLIO_ADRS_I18N['pt-BR'];
  });

  readonly filteredAdrs = computed<readonly AdrRecord[]>(() => {
    const list = this.adrs();
    const term = this.searchTerm().trim().toLowerCase();
    if (!term) {
      return list;
    }
    return list.filter(
      (adr) =>
        adr.code.toLowerCase().includes(term) ||
        adr.title.toLowerCase().includes(term) ||
        adr.category.toLowerCase().includes(term) ||
        adr.context.toLowerCase().includes(term),
    );
  });

  readonly activeAdr = computed<AdrRecord>(() => {
    const list = this.adrs();
    const found = list.find((a) => a.id === this.activeAdrId());
    return found ?? list[0];
  });

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close.emit();
  }

  selectAdr(id: string): void {
    this.activeAdrId.set(id);
  }

  updateSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

  async copyCurrentAdr(): Promise<void> {
    const adr = this.activeAdr();
    const l = this.labels();
    const content = [
      `# ${adr.code}: ${adr.title}`,
      `Status: ${adr.statusLabel} | ${l.dateLabel} ${adr.date}`,
      `${l.decidersLabel} ${adr.deciders}`,
      `${l.categoryLabel} ${adr.category}`,
      '',
      `## ${l.section1Title}`,
      adr.context,
      '',
      `## ${l.section2Title}`,
      adr.decision,
      '',
      `## ${l.section3Title}`,
      `### ${l.positiveTitle}`,
      ...adr.consequences.positive.map((p) => `- ${p}`),
      `### ${l.negativeTitle}`,
      ...adr.consequences.negative.map((n) => `- ${n}`),
      '',
      `## ${l.section4Title}`,
      ...adr.alternatives.map((a) => `- ${a}`),
    ].join('\n');

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(content);
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2500);
      }
    } catch {}
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('adr-modal-backdrop')) {
      this.close.emit();
    }
  }
}
