import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  computed,
  inject,
} from '@angular/core';
import { I18nService } from '@core';
import { Button, Heading, Text } from '@ui';
import { AiNodeDetail } from '../../ai-experience.model';

@Component({
  selector: 'app-ai-node-modal',
  standalone: true,
  imports: [Heading, Text, Button],
  templateUrl: './ai-node-modal.html',
  styleUrl: './ai-node-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiNodeModal {
  @Input({ required: true }) nodeDetail!: AiNodeDetail;
  @Output() close = new EventEmitter<void>();

  private readonly i18n = inject(I18nService);

  readonly labels = computed(() =>
    this.i18n.currentLang() === 'en'
      ? {
          practicalApps: 'Practical Applications & Impact',
          techTools: 'Technologies & Tools',
          closeBtn: 'Close',
          closeAriaLabel: 'Close details modal',
          modalCloseAriaLabel: 'Close modal',
        }
      : {
          practicalApps: 'Aplicações Práticas & Impacto',
          techTools: 'Tecnologias & Ferramentas',
          closeBtn: 'Fechar',
          closeAriaLabel: 'Fechar modal de detalhes',
          modalCloseAriaLabel: 'Fechar modal',
        }
  );

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.closeModal();
  }

  closeModal(): void {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('node-modal-backdrop')) {
      this.closeModal();
    }
  }
}
