import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { I18nService } from '@core';
import { RevealDirective } from '@shared';
import { Container, Heading, Section, Text } from '@ui';
import { getAiData } from './ai-experience.data';
import { AiNodeDetail } from './ai-experience.model';
import { AiNodeModal } from './ai-node-modal';
import { NeuralCanvas } from './neural-canvas';

@Component({
  selector: 'app-ai-experience',
  standalone: true,
  imports: [Section, Container, Heading, Text, RevealDirective, NeuralCanvas, AiNodeModal],
  templateUrl: './ai-experience.html',
  styleUrl: './ai-experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiExperienceSection {
  private readonly i18n = inject(I18nService);

  readonly data = computed(() => getAiData(this.i18n.currentLang()));
  readonly selectedNodeDetail = signal<AiNodeDetail | null>(null);

  /** Labels for hardcoded template strings */
  readonly labels = computed(() =>
    this.i18n.currentLang() === 'en'
      ? {
          ariaLabel: 'Artificial Intelligence & Automation',
          zoomToolbarAriaLabel: '3D Zoom Controls',
          zoomInTitle: 'Zoom in',
          zoomInAriaLabel: 'Zoom in on the 3D viewer',
          zoomOutTitle: 'Zoom out',
          zoomOutAriaLabel: 'Zoom out of the 3D viewer',
          zoomLevelTitle: 'Zoom Level',
          resetTitle: 'Reset initial view',
          resetAriaLabel: 'Reset 3D initial view',
          zoomFocusLabel: 'Overview',
          zoomFocusInLabel: 'Focus Zoom',
          zoomFocusTitle: 'Toggle Focus Zoom mode',
          canvasHint: '🔍 Scroll the mouse wheel or use the buttons to Zoom',
        }
      : {
          ariaLabel: 'Inteligência Artificial & Automação',
          zoomToolbarAriaLabel: 'Controles de Zoom 3D',
          zoomInTitle: 'Aumentar zoom',
          zoomInAriaLabel: 'Aumentar zoom do visualizador 3D',
          zoomOutTitle: 'Reduzir zoom',
          zoomOutAriaLabel: 'Reduzir zoom do visualizador 3D',
          zoomLevelTitle: 'Nível de Zoom',
          resetTitle: 'Redefinir vista inicial',
          resetAriaLabel: 'Redefinir vista inicial do 3D',
          zoomFocusLabel: 'Visão Geral',
          zoomFocusInLabel: 'Zoom Foco',
          zoomFocusTitle: 'Alternar modo Zoom Foco',
          canvasHint: '🔍 Role o scroll do mouse ou use os botões para dar Zoom',
        }
  );

  onNodeSelect(nodeName: string): void {
    const detail = this.data().nodeDetails[nodeName];
    if (detail) {
      this.selectedNodeDetail.set(detail);
    }
  }

  closeModal(): void {
    this.selectedNodeDetail.set(null);
  }
}
