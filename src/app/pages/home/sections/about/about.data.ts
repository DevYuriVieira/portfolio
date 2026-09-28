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
        id: 'how-i-build',
        label: 'Diferencial Estratégico',
        text: 'A formação em Engenharia de Produção muda a forma de resolver problemas: antes de escrever código, o foco é mapear o fluxo de trabalho real e identificar onde está o gargalo. Essa visão sistêmica — de quem aplicou Lean, PDCA e análise de causa raiz — elimina retrabalho e entrega software que resolve o problema certo.',
      },
      {
        id: 'who-i-am',
        label: 'Atuação Profissional',
        text: 'Instrutor de Programação Back-End no SENAI/FAETEC, onde ensina Java com Spring Boot, PostgreSQL e APIs RESTful para turmas em formação técnica. Paralelamente, atua como Desenvolvedor Full-Stack em projetos com Java, React, Python (Django) e integrações com IA.',
      },
      {
        id: 'systemic-differentiator',
        label: 'Formação & Prática',
        text: 'Pós-graduado em Engenharia de Software com mais de 900 horas de residência técnica (Serratec e UECE), onde desenvolveu APIs REST de produção, aplicativos mobile com React Native e pipelines de integração com Spring Boot. Prioriza código limpo, tipagem estrita e testes automatizados.',
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
        id: 'how-i-build',
        label: 'Strategic Differentiator',
        text: 'A Production Engineering background changes how problems get solved: before writing code, the focus is on mapping real workflows and finding where the bottleneck actually is. That systems-thinking mindset — built on Lean, PDCA, and root cause analysis — cuts rework and delivers software that solves the right problem.',
      },
      {
        id: 'who-i-am',
        label: 'Professional Practice',
        text: 'Back-End Programming Instructor at SENAI/FAETEC, teaching Java with Spring Boot, PostgreSQL, and RESTful APIs to technical training cohorts. Simultaneously works as a Full-Stack Developer on projects spanning Java, React, Python (Django), and AI integrations.',
      },
      {
        id: 'systemic-differentiator',
        label: 'Education & Practice',
        text: 'Postgraduate in Software Engineering with 900+ hours of technical residency (Serratec & UECE), where production-grade REST APIs, React Native mobile apps, and Spring Boot integration pipelines were built and delivered. Prioritizes clean code, strict typing, and automated testing.',
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
        id: 'how-i-build',
        label: 'Diferencial Estratégico',
        text: 'La formación en Ingeniería de Producción cambia la forma de resolver problemas: antes de escribir código, el foco está en mapear el flujo de trabajo real e identificar dónde está el cuello de botella. Esa visión sistémica — basada en Lean, PDCA y análisis de causa raíz — elimina retrabajo y entrega software que resuelve el problema correcto.',
      },
      {
        id: 'who-i-am',
        label: 'Práctica Profesional',
        text: 'Instructor de Programación Back-End en SENAI/FAETEC, donde enseña Java con Spring Boot, PostgreSQL y APIs RESTful a grupos de formación técnica. Paralelamente, trabaja como Desarrollador Full-Stack en proyectos con Java, React, Python (Django) e integraciones con IA.',
      },
      {
        id: 'systemic-differentiator',
        label: 'Formación & Práctica',
        text: 'Posgrado en Ingeniería de Software con más de 900 horas de residencia técnica (Serratec y UECE), donde se desarrollaron APIs REST de producción, aplicaciones mobile con React Native y pipelines de integración con Spring Boot. Prioriza código limpio, tipado estricto y pruebas automatizadas.',
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
