import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Output,
  computed,
  inject,
} from '@angular/core';
import { I18nService, SupportedLang } from '@core';
import { Button, Heading, Text } from '@ui';

interface PillarItem {
  readonly title: string;
  readonly description: string;
}

interface ArchitectureModalLabels {
  readonly modalTitle: string;
  readonly modalEyebrow: string;
  readonly closeBtn: string;
  readonly closeAriaLabel: string;
  readonly modalCloseAriaLabel: string;
  readonly ndaDisclaimer: string;
  readonly flowTitle: string;
  readonly pillarsTitle: string;
  readonly step1Title: string;
  readonly step1Subtitle: string;
  readonly step1Desc1: string;
  readonly step1Desc2: string;
  readonly step1Desc3: string;
  readonly step2Title: string;
  readonly step2Subtitle: string;
  readonly step2Desc1: string;
  readonly step2Desc2: string;
  readonly step2Desc3: string;
  readonly step3Title: string;
  readonly step3Subtitle: string;
  readonly step3Desc1: string;
  readonly step3Desc2: string;
  readonly step3Desc3: string;
  readonly step4Title: string;
  readonly step4Subtitle: string;
  readonly step4Desc1: string;
  readonly step4Desc2: string;
  readonly step4Desc3: string;
  readonly step5Title: string;
  readonly step5Subtitle: string;
  readonly step5Desc1: string;
  readonly step5Desc2: string;
  readonly step5Desc3: string;
  readonly securityBanner: string;
  readonly pillars: readonly PillarItem[];
}

@Component({
  selector: 'app-architecture-modal',
  standalone: true,
  imports: [Heading, Text, Button],
  templateUrl: './architecture-modal.html',
  styleUrl: './architecture-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchitectureModal {
  @Output() close = new EventEmitter<void>();

  private readonly i18n = inject(I18nService);

  private readonly labelsI18n: Record<SupportedLang, ArchitectureModalLabels> = {
    'pt-BR': {
      modalTitle: 'ZEISS Recommendation Assistant — Arquitetura de Solução',
      modalEyebrow: '01 // TOPOLOGIA DE ENGENHARIA & PIPELINE (NDA SANITIZED)',
      closeBtn: 'Fechar',
      closeAriaLabel: 'Fechar modal de arquitetura',
      modalCloseAriaLabel: 'Fechar modal',
      ndaDisclaimer:
        'Diagrama sanitizado de alto nível em conformidade com o acordo de confidencialidade (NDA). Ilustra o fluxo de dados, fronteiras de microsserviços e etapas de validação sem expor endpoints proprietários ou dados sensíveis.',
      flowTitle: 'Fluxo Contínuo de Ingestão, Extração e Recomendação',
      pillarsTitle: 'Fundamentos de Engenharia & Confiabilidade',
      step1Title: '1. INGESTÃO',
      step1Subtitle: 'Prescrição Clínica',
      step1Desc1: 'Upload Imagem / PDF',
      step1Desc2: 'Receitas Manuais / Digitais',
      step1Desc3: 'Parâmetros Refrativos',
      step2Title: '2. EXTRAÇÃO & IA',
      step2Subtitle: 'OCR & Orquestração n8n',
      step2Desc1: 'Extração Automatizada',
      step2Desc2: 'Esférico, Cilíndrico e Eixo',
      step2Desc3: 'Webhooks Assíncronos',
      step3Title: '3. VALIDAÇÃO',
      step3Subtitle: 'React & TypeScript',
      step3Desc1: 'Conferência Assistida',
      step3Desc2: 'Human-in-the-Loop',
      step3Desc3: 'Edição pré-processamento',
      step4Title: '4. MOTOR RAG',
      step4Subtitle: 'Catálogo & Regras',
      step4Desc1: 'Hábitos do Paciente',
      step4Desc2: 'Base Técnica de Lentes',
      step4Desc3: 'Recomendação Óptica',
      step5Title: '5. PERSISTÊNCIA',
      step5Subtitle: 'Spring Boot & BD',
      step5Desc1: 'API RESTful & RBAC',
      step5Desc2: 'PostgreSQL Transacional',
      step5Desc3: 'Dashboards por Filial',
      securityBanner:
        'GOVERNANÇA & ISOLAMENTO: Autenticação JWT · RBAC por Perfil · Arquitetura Segura sob NDA',
      pillars: [
        {
          title: 'Validação Human-in-the-Loop',
          description:
            'Nenhuma prescrição é persistida sem conferência assistida por operador na interface React, garantindo tolerância zero a desvios ópticos.',
        },
        {
          title: 'Motor RAG & Cruzamento Clínico',
          description:
            'Algoritmo inteligente que correlaciona os parâmetros da receita com os hábitos de uso do paciente (telas, direção, esportes) para selecionar a lente ideal.',
        },
        {
          title: 'Governança & RBAC Corporativo',
          description:
            'Controle estrito de acesso por perfis (Atendente, Gerente de Filial, Administrador) via tokens JWT integrados ao Spring Security.',
        },
        {
          title: 'Conformidade com NDA',
          description:
            'Design desacoplado e sanitizado, protegendo regras industriais do ZEISS Group e mantendo conformidade total de privacidade.',
        },
      ],
    },
    en: {
      modalTitle: 'ZEISS Recommendation Assistant — Solution Architecture',
      modalEyebrow: '01 // ENGINEERING TOPOLOGY & PIPELINE (NDA SANITIZED)',
      closeBtn: 'Close',
      closeAriaLabel: 'Close architecture modal',
      modalCloseAriaLabel: 'Close modal',
      ndaDisclaimer:
        'Sanitized high-level architectural diagram compliant with non-disclosure agreements (NDA). Illustrates the data flow, microservice boundaries, and validation checkpoints without exposing proprietary endpoints or sensitive client data.',
      flowTitle: 'Continuous Ingestion, Extraction, and Recommendation Pipeline',
      pillarsTitle: 'Core Engineering Pillars & Reliability',
      step1Title: '1. INGESTION',
      step1Subtitle: 'Clinical Prescription',
      step1Desc1: 'Image / PDF Upload',
      step1Desc2: 'Manual / Digital Scans',
      step1Desc3: 'Refractive Parameters',
      step2Title: '2. EXTRACTION & AI',
      step2Subtitle: 'OCR & n8n Orchestration',
      step2Desc1: 'Automated Extraction',
      step2Desc2: 'Sphere, Cylinder & Axis',
      step2Desc3: 'Asynchronous Webhooks',
      step3Title: '3. VALIDATION',
      step3Subtitle: 'React & TypeScript',
      step3Desc1: 'Assisted Review UI',
      step3Desc2: 'Human-in-the-Loop',
      step3Desc3: 'Pre-processing Verification',
      step4Title: '4. RAG ENGINE',
      step4Subtitle: 'Catalog & Rules',
      step4Desc1: 'Patient Lifestyle Habits',
      step4Desc2: 'Optical Knowledge Base',
      step4Desc3: 'Custom Lens Recommender',
      step5Title: '5. PERSISTENCE',
      step5Subtitle: 'Spring Boot & DB',
      step5Desc1: 'RESTful API & RBAC',
      step5Desc2: 'Transactional PostgreSQL',
      step5Desc3: 'Branch Analytics Dashboards',
      securityBanner:
        'GOVERNANCE & ISOLATION: JWT Auth · Role-Based Access Control · Secure Architecture under NDA',
      pillars: [
        {
          title: 'Human-in-the-Loop Validation',
          description:
            'No prescription is persisted without assisted operator confirmation on the React UI, ensuring zero margin for optical deviation.',
        },
        {
          title: 'RAG & Clinical Correlation',
          description:
            'Intelligent matching engine aligning clinical parameters with patient lifestyle habits (screen time, night driving, sports) to recommend optimal lenses.',
        },
        {
          title: 'Enterprise RBAC & Security',
          description:
            'Strict role-based access control (Attendant, Branch Manager, Administrator) powered by JWT tokens in Spring Security.',
        },
        {
          title: 'NDA & Privacy Compliance',
          description:
            'Decoupled and sanitized architecture preserving proprietary ZEISS Group business logic while adhering to corporate data governance.',
        },
      ],
    },
    es: {
      modalTitle: 'ZEISS Recommendation Assistant — Arquitectura de Solución',
      modalEyebrow: '01 // TOPOLOGÍA DE INGENIERÍA & PIPELINE (NDA SANITIZED)',
      closeBtn: 'Cerrar',
      closeAriaLabel: 'Cerrar modal de arquitectura',
      modalCloseAriaLabel: 'Cerrar modal',
      ndaDisclaimer:
        'Diagrama sanitizado de alto nivel en cumplimiento con el acuerdo de confidencialidad (NDA). Ilustra el flujo de datos, límites de microservicios y etapas de validación sin exponer endpoints propietarios ni datos sensibles.',
      flowTitle: 'Flujo Continuo de Ingestión, Extracción y Recomendación',
      pillarsTitle: 'Fundamentos de Ingeniería & Confiabilidad',
      step1Title: '1. INGESTIÓN',
      step1Subtitle: 'Prescripción Clínica',
      step1Desc1: 'Carga de Imagen / PDF',
      step1Desc2: 'Recetas Manuales / Digitales',
      step1Desc3: 'Parámetros Refractivos',
      step2Title: '2. EXTRACCIÓN & IA',
      step2Subtitle: 'OCR & Orquestación n8n',
      step2Desc1: 'Extracción Automatizada',
      step2Desc2: 'Esfera, Cilindro y Eje',
      step2Desc3: 'Webhooks Asíncronos',
      step3Title: '3. VALIDACIÓN',
      step3Subtitle: 'React & TypeScript',
      step3Desc1: 'Revisión Asistida',
      step3Desc2: 'Human-in-the-Loop',
      step3Desc3: 'Edición Previa',
      step4Title: '4. MOTOR RAG',
      step4Subtitle: 'Catálogo & Reglas',
      step4Desc1: 'Hábitos del Paciente',
      step4Desc2: 'Base de Conocimiento Óptico',
      step4Desc3: 'Recomendador de Lentes',
      step5Title: '5. PERSISTENCIA',
      step5Subtitle: 'Spring Boot & BD',
      step5Desc1: 'API RESTful & RBAC',
      step5Desc2: 'PostgreSQL Transaccional',
      step5Desc3: 'Paneles por Sucursal',
      securityBanner:
        'GOBERNANZA & AISLAMIENTO: Autenticación JWT · RBAC por Perfil · Arquitectura Segura bajo NDA',
      pillars: [
        {
          title: 'Validación Human-in-the-Loop',
          description:
            'Ninguna prescripción se almacena sin revisión asistida por un operador en la interfaz React, asegurando tolerancia cero a errores ópticos.',
        },
        {
          title: 'Motor RAG & Reglas Ópticas',
          description:
            'Algoritmo que correlaciona datos de la receta con la rutina del paciente (pantallas, conducción, deportes) para sugerir la lente adecuada.',
        },
        {
          title: 'Gobernanza & RBAC Corporativo',
          description:
            'Control estricto de accesos por roles (Atendente, Gerente de Sucursal, Administrador) vía JWT en Spring Security.',
        },
        {
          title: 'Cumplimiento con NDA',
          description:
            'Diseño desacoplado y sanitizado que protege la lógica comercial del ZEISS Group y garantiza privacidad corporativa.',
        },
      ],
    },
  };

  readonly labels = computed<ArchitectureModalLabels>(
    () => this.labelsI18n[this.i18n.currentLang()] ?? this.labelsI18n['pt-BR']
  );

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.closeModal();
  }

  closeModal(): void {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('arch-modal-backdrop')) {
      this.closeModal();
    }
  }
}
