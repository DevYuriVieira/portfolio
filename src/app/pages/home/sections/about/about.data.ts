import { SupportedLang } from '@core';
import { AboutBlock, EngineeringPrinciple } from './about.model';

/** Structured i18n content for the About section - Balanced, Non-repetitive Copy */

interface AboutI18n {
  eyebrow: string;
  title: string;
  intro: string;
  journeyTitle: string;
  howIWorkTitle: string;
  howIWorkDescription: string;
  blocks: readonly AboutBlock[];
  principles: readonly EngineeringPrinciple[];
}

const ABOUT_I18N: Record<SupportedLang, AboutI18n> = {
  'pt-BR': {
    eyebrow: 'Sobre mim',
    title: 'Engenharia de Software & Visão Sistêmica',
    intro:
      'A trajetória na tecnologia une a visão analítica da Engenharia de Produção ao rigor prático do desenvolvimento de software full-stack.',
    journeyTitle: 'Trajetória & Foco',
    howIWorkTitle: 'Como Trabalho',
    howIWorkDescription:
      'Decisões e práticas de engenharia que guiam o desenvolvimento no dia a dia.',
    blocks: [
      {
        id: 'who-i-am',
        label: 'Atuação Profissional',
        text: 'Atuação focada no ecossistema Java (Spring Boot) e React, complementada por projetos em Python (Django), TypeScript e PostgreSQL. A experiência abrange desde a construção de interfaces responsivas e acessíveis até a modelagem de APIs REST seguras e automações com inteligência artificial.',
      },
      {
        id: 'how-i-build',
        label: 'Engenharia & Processos',
        text: 'A bagagem em Engenharia de Produção traz um diferencial estratégico: enxergar o software como um sistema produtivo. Antes de definir código ou arquitetura, o foco é mapear os fluxos de trabalho e identificar a real necessidade do negócio.',
      },
      {
        id: 'systemic-differentiator',
        label: 'Formação & Prática',
        text: 'Base sólida consolidada em mais de 900 horas de imersão técnica (Residência Serratec e UECE) e pós-graduação em Engenharia de Software, priorizando código limpo, testes e tipagem estrita.',
      },
    ],
    principles: [
      {
        id: 'clean-architecture',
        title: 'Contrato de API e DTOs',
        description:
          'Definição clara de contratos, esquemas e DTOs antes de implementar controladores.',
      },
      {
        id: 'communication-first',
        title: 'Integridade Transacional',
        description:
          'Tratamento de concorrência, idempotência em webhooks e proteção contra dados duplicados.',
      },
      {
        id: 'systems-thinking',
        title: 'Arquitetura Modular',
        description:
          'Separação clara de responsabilidades em camadas (MVT, MVC+DAO) para facilitar a manutenção.',
      },
      {
        id: 'maintainability',
        title: 'Automação Pragmática',
        description:
          'Uso diário de IA e rotinas automatizadas para acelerar análises de logs e refatorações sob validação técnica.',
      },
      {
        id: 'value-delivery',
        title: 'Alinhamento de Equipe',
        description:
          'Comunicação clara de requisitos e alinhamento contínuo para evitar abstrações desnecessárias.',
      },
      {
        id: 'simplicity-scalability',
        title: 'Análise de Causa Raiz',
        description:
          'Aplicação de metodologias como PDCA e 5W2H para resolver a origem técnica dos problemas.',
      },
    ],
  },
  en: {
    eyebrow: 'About me',
    title: 'Software Engineering & Systems Thinking',
    intro:
      'Combining the analytical mindset of Production Engineering with the practical rigor of full-stack software development.',
    journeyTitle: 'Journey & Focus',
    howIWorkTitle: 'How I Work',
    howIWorkDescription:
      'Engineering practices and principles that guide daily software development.',
    blocks: [
      {
        id: 'who-i-am',
        label: 'Professional Practice',
        text: 'Development practice focused on the Java (Spring Boot) and React ecosystem, complemented by projects in Python (Django), TypeScript, and PostgreSQL. Experience spans building responsive web interfaces, secure REST APIs, and AI-driven workflow automations.',
      },
      {
        id: 'how-i-build',
        label: 'Engineering & Processes',
        text: 'A background in Production Engineering adds a strategic advantage: viewing software as an operational production system. Before committing to code or architecture, the focus remains on mapping business workflows and identifying genuine root problems.',
      },
      {
        id: 'systemic-differentiator',
        label: 'Education & Practice',
        text: 'Technical foundation built through 900+ hours of intensive residency programs (Serratec & UECE) alongside postgraduate software engineering studies, emphasizing clean code, automated testing, and strict typing.',
      },
    ],
    principles: [
      {
        id: 'clean-architecture',
        title: 'API Contracts & DTOs',
        description:
          'Clear specification of contracts, schemas, and DTOs prior to controller implementation.',
      },
      {
        id: 'communication-first',
        title: 'Transactional Integrity',
        description:
          'Handling concurrency, webhook idempotency, and safeguarding against data duplication.',
      },
      {
        id: 'systems-thinking',
        title: 'Modular Architecture',
        description:
          'Clean separation of concerns into distinct layers (MVT, MVC+DAO) for long-term maintainability.',
      },
      {
        id: 'maintainability',
        title: 'Pragmatic Automation',
        description:
          'Daily application of AI and automated scripts to speed up log analysis under engineering oversight.',
      },
      {
        id: 'value-delivery',
        title: 'Team Alignment',
        description:
          'Clear communication of technical requirements to eliminate premature complexity.',
      },
      {
        id: 'simplicity-scalability',
        title: 'Root Cause Analysis',
        description:
          'Applying Lean/PDCA methodologies to address technical issues at their core origin.',
      },
    ],
  },
  es: {
    eyebrow: 'Sobre mí',
    title: 'Ingeniería de Software & Visión Sistémica',
    intro:
      'La trayectoria en tecnología une la visión analítica de la Ingeniería de Producción con el rigor práctico del desarrollo de software full-stack.',
    journeyTitle: 'Trayectoria & Enfoque',
    howIWorkTitle: 'Cómo Trabajo',
    howIWorkDescription:
      'Decisiones y prácticas de ingeniería que guían el desarrollo en el día a día.',
    blocks: [
      {
        id: 'who-i-am',
        label: 'Práctica Profesional',
        text: 'Práctica de desarrollo enfocada en el ecosistema Java (Spring Boot) y React, complementada por proyectos en Python (Django), TypeScript y PostgreSQL. La experiencia abarca desde la construcción de interfaces web responsivas hasta APIs REST seguras y automatizaciones impulsadas por IA.',
      },
      {
        id: 'how-i-build',
        label: 'Ingeniería & Procesos',
        text: 'La formación en Ingeniería de Producción aporta una ventaja estratégica: ver el software como un sistema productivo operacional. Antes de escribir código o definir la arquitectura, el enfoque se centra en mapear los flujos de trabajo del negocio e identificar los problemas reales.',
      },
      {
        id: 'systemic-differentiator',
        label: 'Formación & Práctica',
        text: 'Base técnica consolidada a través de más de 900 horas de programas de residencia intensiva (Serratec & UECE) junto con estudios de posgrado en ingeniería de software, enfatizando código limpio, pruebas automatizadas y tipado estricto.',
      },
    ],
    principles: [
      {
        id: 'clean-architecture',
        title: 'Contratos de API & DTOs',
        description:
          'Especificación clara de contratos, esquemas y DTOs antes de la implementación de controladores.',
      },
      {
        id: 'communication-first',
        title: 'Integridad Transaccional',
        description:
          'Manejo de concurrencia, idempotencia en webhooks y protección contra duplicación de datos.',
      },
      {
        id: 'systems-thinking',
        title: 'Arquitectura Modular',
        description:
          'Separación clara de responsabilidades en capas (MVT, MVC+DAO) para mantenibilidad a largo plazo.',
      },
      {
        id: 'maintainability',
        title: 'Automatización Pragmática',
        description:
          'Aplicación diaria de IA y scripts automatizados para acelerar el análisis de logs bajo supervisión de ingeniería.',
      },
      {
        id: 'value-delivery',
        title: 'Alineación de Equipo',
        description:
          'Comunicación clara de requisitos técnicos para eliminar complejidad prematura.',
      },
      {
        id: 'simplicity-scalability',
        title: 'Análisis de Causa Raíz',
        description:
          'Aplicación de metodologías Lean/PDCA para abordar los problemas técnicos en su origen.',
      },
    ],
  },
};
// Backward-compatible exports
export const ABOUT_PARAGRAPHS: readonly string[] = ABOUT_I18N['pt-BR'].blocks.map(
  (b) => b.text
) as readonly string[];

export const ABOUT_BLOCKS: readonly AboutBlock[] = ABOUT_I18N['pt-BR'].blocks;

export const ENGINEERING_PRINCIPLES: readonly EngineeringPrinciple[] =
  ABOUT_I18N['pt-BR'].principles;

export function getAboutData(lang: SupportedLang): AboutI18n {
  return ABOUT_I18N[lang];
}
