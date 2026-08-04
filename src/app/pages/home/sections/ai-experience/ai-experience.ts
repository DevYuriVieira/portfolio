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

  readonly currentLang = computed(() => this.i18n.currentLang());
  readonly data = computed(() => getAiData(this.i18n.currentLang()));
  readonly selectedNodeDetail = signal<AiNodeDetail | null>(null);

  /** Labels for hardcoded template strings */
  readonly labels = computed(() =>
    this.i18n.currentLang() === 'en'
      ? {
          ariaLabel: 'AI-Augmented Software Engineering',
          zoomToolbarAriaLabel: '3D Controls',
          zoomInTitle: 'Zoom in',
          zoomInAriaLabel: 'Zoom in on the 3D viewer',
          zoomOutTitle: 'Zoom out',
          zoomOutAriaLabel: 'Zoom out of the 3D viewer',
          zoomLevelTitle: 'Zoom Level',
          resetTitle: 'Reset view',
          resetAriaLabel: 'Reset 3D view',
          zoomFocusLabel: 'Overview',
          zoomFocusInLabel: 'Macro Focus',
          zoomFocusTitle: 'Toggle Macro Focus mode',
          canvasHint: '🖱️ Click & drag to orbit (180°) | 🔍 Scroll or buttons to Zoom',
        }
      : {
          ariaLabel: 'Engenharia de Software Amplificada por IA',
          zoomToolbarAriaLabel: 'Controles 3D',
          zoomInTitle: 'Aumentar zoom',
          zoomInAriaLabel: 'Aumentar zoom do visualizador 3D',
          zoomOutTitle: 'Reduzir zoom',
          zoomOutAriaLabel: 'Reduzir zoom do visualizador 3D',
          zoomLevelTitle: 'Nível de Zoom',
          resetTitle: 'Redefinir vista inicial',
          resetAriaLabel: 'Redefinir vista inicial do 3D',
          zoomFocusLabel: 'Visão Geral',
          zoomFocusInLabel: 'Foco Macro',
          zoomFocusTitle: 'Alternar modo Foco Macro',
          canvasHint: '🖱️ Clique e arraste para girar (180°) | 🔍 Scroll ou botões para dar Zoom',
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
