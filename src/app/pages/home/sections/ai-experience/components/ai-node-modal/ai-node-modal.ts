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
import { I18nService, SupportedLang } from '@core';
import { Button, Heading, Text } from '@ui';
import { AiNodeDetail } from '../../ai-experience.model';

interface AiNodeModalLabels {
  readonly practicalApps: string;
  readonly techTools: string;
  readonly closeBtn: string;
  readonly closeAriaLabel: string;
  readonly modalCloseAriaLabel: string;
}

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

  private readonly modalLabelsI18n: Record<SupportedLang, AiNodeModalLabels> = {
    en: {
      practicalApps: 'Practical Applications & Impact',
      techTools: 'Technologies & Tools',
      closeBtn: 'Close',
      closeAriaLabel: 'Close details modal',
      modalCloseAriaLabel: 'Close modal',
    },
    'pt-BR': {
      practicalApps: 'Aplicações Práticas & Impacto',
      techTools: 'Tecnologias & Ferramentas',
      closeBtn: 'Fechar',
      closeAriaLabel: 'Fechar modal de detalhes',
      modalCloseAriaLabel: 'Fechar modal',
    },
    es: {
      practicalApps: 'Aplicaciones Prácticas & Impacto',
      techTools: 'Tecnologías & Herramientas',
      closeBtn: 'Cerrar',
      closeAriaLabel: 'Cerrar modal de detalles',
      modalCloseAriaLabel: 'Cerrar modal',
    },
  };

  readonly labels = computed<AiNodeModalLabels>(() =>
    this.modalLabelsI18n[this.i18n.currentLang()] ?? this.modalLabelsI18n['pt-BR']
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
