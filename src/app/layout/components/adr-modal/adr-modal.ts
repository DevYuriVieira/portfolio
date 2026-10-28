import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Output,
  computed,
  signal,
} from '@angular/core';
import { AdrRecord, PORTFOLIO_ADRS } from './adr-modal.data';

@Component({
  selector: 'app-adr-modal',
  standalone: true,
  imports: [],
  templateUrl: './adr-modal.html',
  styleUrl: './adr-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdrModal {
  @Output() close = new EventEmitter<void>();

  readonly adrs = PORTFOLIO_ADRS;
  readonly activeAdrId = signal<string>('adr-001');
  readonly searchTerm = signal<string>('');
  readonly copied = signal<boolean>(false);

  readonly filteredAdrs = computed<readonly AdrRecord[]>(() => {
    const term = this.searchTerm().trim().toLowerCase();
    if (!term) {
      return this.adrs;
    }
    return this.adrs.filter(
      (adr) =>
        adr.code.toLowerCase().includes(term) ||
        adr.title.toLowerCase().includes(term) ||
        adr.category.toLowerCase().includes(term) ||
        adr.context.toLowerCase().includes(term),
    );
  });

  readonly activeAdr = computed<AdrRecord>(() => {
    const found = this.adrs.find((a) => a.id === this.activeAdrId());
    return found ?? this.adrs[0];
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
    const content = [
      `# ${adr.code}: ${adr.title}`,
      `Status: ${adr.status} | Date: ${adr.date}`,
      `Deciders: ${adr.deciders}`,
      `Category: ${adr.category}`,
      '',
      '## Context',
      adr.context,
      '',
      '## Decision',
      adr.decision,
      '',
      '## Consequences',
      '### Positive',
      ...adr.consequences.positive.map((p) => `- ${p}`),
      '### Negative',
      ...adr.consequences.negative.map((n) => `- ${n}`),
      '',
      '## Alternatives Considered',
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
