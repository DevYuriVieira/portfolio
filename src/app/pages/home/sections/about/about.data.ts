import { SupportedLang } from '@core';
import { AboutBlock, EngineeringPrinciple } from './about.model';

/** Structured i18n content for the About section */

interface AboutI18n {
  eyebrow: string;
  title: string;
  intro: string;
  journeyTitle: string;
  howIWorkTitle: string;
  howIWorkDescription: string;
  currentlyTitle: string;
  currentlyText: string;
  blocks: readonly AboutBlock[];
  principles: readonly EngineeringPrinciple[];
}

const ABOUT_I18N: Record<SupportedLang, AboutI18n> = {
  'pt-BR': {
    eyebrow: 'Sobre mim',
    title: 'Engenharia de Software & Visão Sistêmica',
    intro:
      'Desenvolvimento full-stack orientado a código limpo, arquitetura modular e qualidade.',
    journeyTitle: 'Trajetória & Foco',
    howIWorkTitle: 'Como Trabalho',
    howIWorkDescription:
      'Princípios de engenharia que guiam minhas decisões técnicas, arquitetura e atuação em equipe.',
    currentlyTitle: 'Atualmente',
    currentlyText:
      'Com mais de 910 horas de formação prática em desenvolvimento de software (Serratec e UECE), pós-graduação em Engenharia de Software e inglês avançado (C1/C2 Wizard, proficiência ativa B2+), sigo construindo sistemas full-stack de alta performance focados em qualidade e manutenibilidade.',
    blocks: [
      {
        id: 'who-i-am',
        label: 'Atuação Profissional',
        text: 'Sou Engenheiro de Software Full-Stack especializado em Java (Spring Boot) e React, com forte atuação em Python (Django), TypeScript e PostgreSQL. Minha experiência abrange desde a criação de interfaces responsivas e com design system até a modelagem de APIs REST, autenticação com Spring Security e automações com IA.',
      },
      {
        id: 'how-i-build',
        label: 'Filosofia de Engenharia',
        text: 'Priorizo clareza, manutenibilidade e boas práticas de engenharia em cada projeto. Trabalho com tipagem estática, testes automatizados e arquitetura modular, garantindo que o código seja previsível, organizado e fácil de manter no longo prazo.',
      },
      {
        id: 'systemic-differentiator',
        label: 'Visão Sistêmica',
        text: 'Minha formação em Engenharia de Produção agrega uma perspectiva analítica ao ciclo de desenvolvimento. Essa bagagem me auxilia na compreensão clara de requisitos, no mapeamento de fluxos e na otimização de processos antes da implementação.',
      },
    ],
    principles: [
      {
        id: 'clean-architecture',
        title: 'Arquitetura Limpa & Intenção',
        description:
          'Pensar na arquitetura antes da implementação e compreender a fundo o problema antes de decidir como construí-lo.',
      },
      {
        id: 'communication-first',
        title: 'Comunicação em Primeiro Lugar',
        description:
          'Comunicação clara e transparente como habilidade técnica fundamental. Problemas complexos são resolvidos mais rápido através do alinhamento.',
      },
      {
        id: 'systems-thinking',
        title: 'Visão Sistêmica & Processos',
        description:
          'Mapeamento de fluxos, análise de causa raiz e otimização do início ao fim, enxergando o software como um sistema de produção completo.',
      },
      {
        id: 'maintainability',
        title: 'Código Legível & Manutenível',
        description:
          'Priorizar código limpo, sustentável e fácil de entender por outros desenvolvedores. Código inteligível sempre vence no longo prazo.',
      },
      {
        id: 'value-delivery',
        title: 'Entregas de Valor & Compromisso',
        description:
          'Compreender os objetivos do negócio antes de propor soluções, respeitar prazos e entregar mais valor do que o originalmente solicitado.',
      },
      {
        id: 'simplicity-scalability',
        title: 'Simplicidade & Escalabilidade',
        description:
          'Valorizar soluções simples, performáticas e escaláveis, evitando complexidade desnecessária ou abstrações prematuras.',
      },
    ],
  },
  en: {
    eyebrow: 'About me',
    title: 'Software Engineering & Systems Thinking',
    intro:
      'Full-stack development driven by clean code, modular architecture, and quality.',
    journeyTitle: 'Journey & Focus',
    howIWorkTitle: 'How I Work',
    howIWorkDescription:
      'Engineering principles that guide my technical decisions, architecture, and teamwork.',
    currentlyTitle: 'Currently',
    currentlyText:
      'With over 910 hours of practical software engineering training (Serratec & UECE), postgraduate studies in Software Engineering, and advanced English (Wizard C1/C2, B2+ active proficiency), I continue to build high-performance full-stack applications focused on quality and maintainability.',
    blocks: [
      {
        id: 'who-i-am',
        label: 'Professional Practice',
        text: 'I am a Full-Stack Software Engineer specialized in Java (Spring Boot) and React, with solid expertise in Python (Django), TypeScript, and PostgreSQL. My work spans from building responsive design system interfaces to modeling REST APIs, Spring Security authentication, and AI automation.',
      },
      {
        id: 'how-i-build',
        label: 'Engineering Philosophy',
        text: 'I prioritize clarity, maintainability, and engineering best practices in every project. I work with static typing, automated testing, and modular architecture, ensuring code that is predictable, organized, and easy to maintain long-term.',
      },
      {
        id: 'systemic-differentiator',
        label: 'Systems Thinking',
        text: 'My background in Production Engineering brings an analytical perspective to the development lifecycle. This expertise helps me clearly understand requirements, map workflows, and optimize processes before implementation.',
      },
    ],
    principles: [
      {
        id: 'clean-architecture',
        title: 'Clean Architecture & Intent',
        description:
          'Think about architecture before implementation and deeply understand the problem before deciding how to build it.',
      },
      {
        id: 'communication-first',
        title: 'Communication First',
        description:
          'Clear and transparent communication as a core technical skill. Complex problems are solved faster through alignment.',
      },
      {
        id: 'systems-thinking',
        title: 'Systems Thinking & Processes',
        description:
          'Workflow mapping, root cause analysis, and end-to-end optimization, seeing software as a complete production system.',
      },
      {
        id: 'maintainability',
        title: 'Readable & Maintainable Code',
        description:
          'Prioritize clean, sustainable code that is easy for other developers to understand. Intelligible code always wins in the long run.',
      },
      {
        id: 'value-delivery',
        title: 'Value Delivery & Commitment',
        description:
          'Understand business objectives before proposing solutions, respect deadlines, and deliver more value than originally requested.',
      },
      {
        id: 'simplicity-scalability',
        title: 'Simplicity & Scalability',
        description:
          'Value simple, performant, and scalable solutions, avoiding unnecessary complexity or premature abstractions.',
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
