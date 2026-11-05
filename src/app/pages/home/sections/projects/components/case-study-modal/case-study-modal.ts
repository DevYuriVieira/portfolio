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
import { Heading } from '@ui';
import { Project } from '../../project.model';

interface CaseStudyModalLabels {
  readonly eyebrow: string;
  readonly closeBtn: string;
  readonly closeAria: string;
  readonly modalAria: (title: string) => string;
  readonly techStack: string;
  readonly challenge: string;
  readonly challengeTitle: string;
  readonly solution: string;
  readonly solutionTitle: string;
  readonly archDecisions: string;
  readonly archDecisionsTitle: string;
  readonly results: string;
  readonly resultsTitle: string;
  readonly viewFleetOpsDossier: string;
  readonly viewFarmFlowDossier: string;
  readonly viewArchitecture: string;
}

const LABELS_I18N: Record<SupportedLang, CaseStudyModalLabels> = {
  'pt-BR': {
    eyebrow: 'ESTUDO DE CASO',
    closeBtn: 'Fechar',
    closeAria: 'Fechar modal de estudo de caso',
    modalAria: (title: string) => `Estudo de caso do projeto ${title}`,
    techStack: 'Stack Tecnológica',
    challenge: 'Desafio',
    challengeTitle: 'Problema & Contexto Crítico',
    solution: 'Solução',
    solutionTitle: 'Engenharia & Solução Implementada',
    archDecisions: 'Arquitetura',
    archDecisionsTitle: 'Decisões de Arquitetura & Padrões',
    results: 'Resultados',
    resultsTitle: 'Resultados & Métricas Conquistadas',
    viewFleetOpsDossier: 'Ver Dossiê Completo',
    viewFarmFlowDossier: 'Ver Dossiê Completo',
    viewArchitecture: 'Ver Diagrama de Arquitetura',
  },
  en: {
    eyebrow: 'CASE STUDY',
    closeBtn: 'Close',
    closeAria: 'Close case study modal',
    modalAria: (title: string) => `Case study for ${title}`,
    techStack: 'Technology Stack',
    challenge: 'Challenge',
    challengeTitle: 'Critical Problem & Context',
    solution: 'Solution',
    solutionTitle: 'Engineering & Implemented Solution',
    archDecisions: 'Architecture',
    archDecisionsTitle: 'Architecture Decisions & Patterns',
    results: 'Results',
    resultsTitle: 'Results & Delivered Metrics',
    viewFleetOpsDossier: 'View Full Dossier',
    viewFarmFlowDossier: 'View Full Dossier',
    viewArchitecture: 'View Architecture Diagram',
  },
  es: {
    eyebrow: 'ESTUDIO DE CASO',
    closeBtn: 'Cerrar',
    closeAria: 'Cerrar modal de estudio de caso',
    modalAria: (title: string) => `Estudio de caso del proyecto ${title}`,
    techStack: 'Stack Tecnológico',
    challenge: 'Desafío',
    challengeTitle: 'Problema & Contexto Crítico',
    solution: 'Solución',
    solutionTitle: 'Ingeniería & Solución Implementada',
    archDecisions: 'Arquitectura',
    archDecisionsTitle: 'Decisiones de Arquitectura & Patrones',
    results: 'Resultados',
    resultsTitle: 'Resultados & Métricas Logradas',
    viewFleetOpsDossier: 'Ver Dossier Completo',
    viewFarmFlowDossier: 'Ver Dossier Completo',
    viewArchitecture: 'Ver Diagrama de Arquitectura',
  },
};

@Component({
  selector: 'app-case-study-modal',
  standalone: true,
  imports: [Heading],
  templateUrl: './case-study-modal.html',
  styleUrl: './case-study-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudyModal {
  @Input({ required: true }) project!: Project;

  @Output() close = new EventEmitter<void>();
  @Output() openArchitecture = new EventEmitter<void>();
  @Output() openFleetOps = new EventEmitter<void>();
  @Output() openFarmFlow = new EventEmitter<void>();

  private readonly i18n = inject(I18nService);

  readonly labels = computed(() => {
    const lang = this.i18n.currentLang();
    return LABELS_I18N[lang] ?? LABELS_I18N['pt-BR'];
  });

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeModal();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  closeModal(): void {
    this.close.emit();
  }

  onOpenArchitecture(): void {
    this.closeModal();
    this.openArchitecture.emit();
  }

  onOpenFleetOps(): void {
    this.closeModal();
    this.openFleetOps.emit();
  }

  onOpenFarmFlow(): void {
    this.closeModal();
    this.openFarmFlow.emit();
  }
}

