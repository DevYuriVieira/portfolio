import { ChangeDetectionStrategy, Component, ViewChild, computed, inject, signal } from '@angular/core';
import { I18nService, SupportedLang } from '@core';
import { RevealDirective } from '@shared';
import { Container, Heading, Section, Text } from '@ui';
import { getAiData } from './ai-experience.data';
import { AiNodeDetail } from './ai-experience.model';
import { AiNodeModal } from './ai-node-modal';
import { CAPABILITY_NODES, CapabilityName, NeuralCanvas } from './neural-canvas';

const FEATURE_TO_NODE: readonly CapabilityName[] = [
  'EXECUTION',
  'OBSERVE',
  'REASONING',
  'HUMAN JUDGMENT',
];

interface AiExperienceLabels {
  readonly ariaLabel: string;
  readonly zoomToolbarAriaLabel: string;
  readonly zoomInTitle: string;
  readonly zoomInAriaLabel: string;
  readonly zoomOutTitle: string;
  readonly zoomOutAriaLabel: string;
  readonly zoomLevelTitle: string;
  readonly resetTitle: string;
  readonly resetAriaLabel: string;
  readonly zoomFocusLabel: string;
  readonly zoomFocusInLabel: string;
  readonly zoomFocusTitle: string;
  readonly canvasHint: string;
}

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

  @ViewChild('neuralCanvas') neuralCanvas?: NeuralCanvas;

  readonly capabilityNodes = CAPABILITY_NODES;
  readonly currentLang = computed(() => this.i18n.currentLang());
  readonly data = computed(() => getAiData(this.i18n.currentLang()));
  readonly selectedNodeDetail = signal<AiNodeDetail | null>(null);
  readonly activeFeatureIndex = signal<number>(0);

  selectFeature(index: number): void {
    this.activeFeatureIndex.set(index);
    const nodeName = FEATURE_TO_NODE[index];
    if (nodeName) {
      this.neuralCanvas?.focusNodeByName(nodeName);
    }
  }

  private readonly labelsI18n: Record<SupportedLang, AiExperienceLabels> = {
    en: {
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
      canvasHint: 'Drag to orbit · Ctrl+Scroll or buttons to zoom',
    },
    'pt-BR': {
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
      canvasHint: 'Arraste para girar · Ctrl+Scroll ou botões para zoom',
    },
    es: {
      ariaLabel: 'Ingeniería de Software Potenciada por IA',
      zoomToolbarAriaLabel: 'Controles 3D',
      zoomInTitle: 'Acercar',
      zoomInAriaLabel: 'Acercar el visor 3D',
      zoomOutTitle: 'Alejar',
      zoomOutAriaLabel: 'Alejar el visor 3D',
      zoomLevelTitle: 'Nivel de Zoom',
      resetTitle: 'Restablecer vista',
      resetAriaLabel: 'Restablecer vista 3D',
      zoomFocusLabel: 'Vista General',
      zoomFocusInLabel: 'Enfoque Macro',
      zoomFocusTitle: 'Alternar modo Enfoque Macro',
      canvasHint: 'Arrastra para orbitar · Ctrl+Scroll o botones para zoom',
    },
  };

  readonly labels = computed<AiExperienceLabels>(() =>
    this.labelsI18n[this.i18n.currentLang()] ?? this.labelsI18n['pt-BR']
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
