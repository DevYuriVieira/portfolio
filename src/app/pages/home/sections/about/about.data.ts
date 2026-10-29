import { SupportedLang } from '@core';
import { AboutBlock, EngineeringPrinciple } from './about.model';

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
      'Minha trajetória na tecnologia une a visão analítica da Engenharia de Produção ao rigor prático do desenvolvimento de software full-stack.',
    journeyTitle: 'Trajetória & Foco',
    howIWorkTitle: 'Como Trabalho',
    howIWorkDescription:
      'Decisões e práticas de engenharia que guiam meu desenvolvimento no dia a dia.',
    blocks: [
      {
        id: 'how-i-build',
        label: 'Diferencial Estratégico',
        text: 'Minha formação em Engenharia de Produção mudou minha forma de resolver problemas: antes de escrever código, mapeio o fluxo de trabalho real para identificar onde está o gargalo. Essa visão sistêmica, apoiada em Lean, PDCA e análise de causa raiz, elimina retrabalho e garante que eu entregue software que resolve o problema certo.',
      },
      {
        id: 'who-i-am',
        label: 'Atuação Profissional',
        text: 'Atuo como Engenheiro de Software Full-Stack e Freelancer no desenvolvimento de soluções e arquiteturas de alta performance com Java (Spring Boot), .NET/C#, TypeScript (React, Angular e React Native) e integrações com IA. Também atuei como Instrutor de Programação no SENAI/FAETEC, onde lecionei lógica de programação com JavaScript, POO em Java com Spring Boot, PostgreSQL e criação de APIs RESTful para turmas em formação técnica.',
      },
      {
        id: 'systemic-differentiator',
        label: 'Formação & Prática',
        text: 'Sou pós-graduado em Engenharia de Software e acumulo mais de 900 horas de residência técnica (Serratec e UECE), onde desenvolvi APIs REST de produção, aplicativos mobile com React Native e pipelines de integração com Spring Boot. No dia a dia, priorizo código limpo, tipagem estrita e testes automatizados.',
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
      'My journey in technology combines the analytical mindset of Production Engineering with the practical rigor of full-stack software development.',
    journeyTitle: 'Journey & Focus',
    howIWorkTitle: 'How I Work',
    howIWorkDescription:
      'Engineering practices and principles that guide my daily software development.',
    blocks: [
      {
        id: 'how-i-build',
        label: 'Strategic Differentiator',
        text: 'My Production Engineering background shaped how I solve problems: before writing code, I map out the real workflow to pinpoint the actual bottleneck. That systems-thinking mindset, grounded in Lean, PDCA, and root cause analysis, eliminates rework and ensures I deliver software that solves the right problem.',
      },
      {
        id: 'who-i-am',
        label: 'Professional Practice',
        text: 'I work as a Full-Stack Software Engineer and Freelancer building high-performance solutions and architectures with Java (Spring Boot), .NET/C#, TypeScript (React, Angular, and React Native), and AI integrations. I also served as a Programming Instructor at SENAI/FAETEC, where I taught programming logic with JavaScript, OOP in Java with Spring Boot, PostgreSQL, and RESTful APIs to technical training cohorts.',
      },
      {
        id: 'systemic-differentiator',
        label: 'Education & Practice',
        text: 'I hold a postgraduate degree in Software Engineering with 900+ hours of technical residency (Serratec & UECE), where I built and delivered production-grade REST APIs, React Native mobile apps, and Spring Boot integration pipelines. I prioritize clean code, strict typing, and automated testing.',
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
      'Mi trayectoria en tecnología une la visión analítica de la Ingeniería de Producción con el rigor práctico del desarrollo de software full-stack.',
    journeyTitle: 'Trayectoria & Enfoque',
    howIWorkTitle: 'Cómo Trabajo',
    howIWorkDescription:
      'Decisiones y prácticas de ingeniería que guían mi desarrollo en el día a día.',
    blocks: [
      {
        id: 'how-i-build',
        label: 'Diferencial Estratégico',
        text: 'Mi formación en Ingeniería de Producción cambió mi forma de resolver problemas: antes de escribir código, mapeo el flujo de trabajo real para identificar dónde está el cuello de botella. Esa visión sistémica, basada en Lean, PDCA y análisis de causa raíz, elimina retrabajo y asegura que entregue software que resuelve el problema correcto.',
      },
      {
        id: 'who-i-am',
        label: 'Práctica Profesional',
        text: 'Me desempeño como Ingeniero de Software Full-Stack y Freelancer en el desarrollo de soluciones y arquitecturas de alto rendimiento con Java (Spring Boot), .NET/C#, TypeScript (React, Angular y React Native) e integraciones con IA. También actué como Instructor de Programación en SENAI/FAETEC, donde dicté clases de lógica de programación con JavaScript, POO en Java con Spring Boot, PostgreSQL y APIs RESTful para grupos de formación técnica.',
      },
      {
        id: 'systemic-differentiator',
        label: 'Formación & Práctica',
        text: 'Soy posgraduado en Ingeniería de Software y cuento con más de 900 horas de residencia técnica (Serratec y UECE), donde desarrollé APIs REST de producción, aplicaciones mobile con React Native y pipelines de integración con Spring Boot. Priorizo código limpio, tipado estricto y pruebas automatizadas.',
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

export const ABOUT_PARAGRAPHS: readonly string[] = ABOUT_I18N['pt-BR'].blocks.map(
  (b) => b.text
) as readonly string[];

export const ABOUT_BLOCKS: readonly AboutBlock[] = ABOUT_I18N['pt-BR'].blocks;

export const ENGINEERING_PRINCIPLES: readonly EngineeringPrinciple[] =
  ABOUT_I18N['pt-BR'].principles;

export function getAboutData(lang: SupportedLang): AboutI18n {
  return ABOUT_I18N[lang];
}
