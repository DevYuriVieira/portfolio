import { SupportedLang } from '@core';
import { SkillCategory, SkillsSectionData } from './skills.model';

interface SkillsI18n {
  sectionData: SkillsSectionData;
  categories: readonly SkillCategory[];
}

const SKILLS_I18N: Record<SupportedLang, SkillsI18n> = {
  'pt-BR': {
    sectionData: {
      id: 'skills',
      eyebrow: 'Competências',
      title: 'Habilidades & Engenharia',
      description:
        'Visão consolidada de competências técnicas, fundamentos de engenharia e práticas utilizadas no desenvolvimento de software.',
      ariaLabel: 'Seção de habilidades e engenharia',
    },
    categories: [
      {
        id: 'frontend-engineering',
        title: 'Frontend & Mobile Engineering',
        description:
          'Construção de aplicações web e mobile modernas, performáticas, acessíveis e guiadas por design systems.',
        skills: [
          'React',
          'React Native (Expo)',
          'TypeScript',
          'Angular',
          'Framer Motion',
          'HTML5 & CSS/SCSS',
          'Componentização',
          'Design Systems',
        ],
      },
      {
        id: 'backend-apis',
        title: 'Backend & APIs RESTful',
        description:
          'Desenvolvimento de serviços backend seguros, escaláveis e orientados a regras de negócio.',
        skills: [
          'Java (Spring Boot)',
          'C# / .NET 10',
          'Spring Security & JWT',
          'Python (Django)',
          'APIs RESTful',
          'Webhooks & OCR',
          'JPA / Hibernate',
          'Bean Validation',
          'Arquitetura em Camadas',
        ],
      },
      {
        id: 'data-architecture',
        title: 'Data & Software Architecture',
        description:
          'Modelagem relacional, persistência de dados, otimização de consultas e princípios de engenharia.',
        skills: [
          'PostgreSQL & SQL',
          'Otimização N+1 Queries',
          'Modelagem Relacional',
          'Clean Architecture',
          'SOLID & Design Patterns',
          'Pattern MVC + DAO',
          'JDBC & Persistence',
          'Swagger / OpenAPI',
        ],
      },
      {
        id: 'quality-practices',
        title: 'Quality & Agile Practices',
        description:
          'Práticas de engenharia focadas em qualidade, controle de versão, agilidade e entrega contínua.',
        skills: [
          'Testes E2E & Automatizados',
          'Cypress & Playwright',
          'Selenium & Vitest',
          'Git / GitHub & Actions',
          'Conventional Commits',
          'Vercel CI/CD & Deploy',
          'Agile / Scrum (Sprints)',
          'Code Review & Pair Programming',
        ],
      },
    ],
  },
  en: {
    sectionData: {
      id: 'skills',
      eyebrow: 'Competencies',
      title: 'Skills & Engineering',
      description:
        'Consolidated view of technical competencies, engineering fundamentals, and practices used in software development.',
      ariaLabel: 'Skills and engineering section',
    },
    categories: [
      {
        id: 'frontend-engineering',
        title: 'Frontend & Mobile Engineering',
        description:
          'Building modern, performant, accessible web and mobile applications driven by design systems.',
        skills: [
          'React',
          'React Native (Expo)',
          'TypeScript',
          'Angular',
          'Framer Motion',
          'HTML5 & CSS/SCSS',
          'Componentization',
          'Design Systems',
        ],
      },
      {
        id: 'backend-apis',
        title: 'Backend & RESTful APIs',
        description:
          'Building secure, scalable backend services driven by business rules.',
        skills: [
          'Java (Spring Boot)',
          'C# / .NET 10',
          'Spring Security & JWT',
          'Python (Django)',
          'RESTful APIs',
          'Webhooks & OCR',
          'JPA / Hibernate',
          'Bean Validation',
          'Layered Architecture',
        ],
      },
      {
        id: 'data-architecture',
        title: 'Data & Software Architecture',
        description:
          'Relational modeling, data persistence, query optimization, and engineering principles.',
        skills: [
          'PostgreSQL & SQL',
          'N+1 Query Optimization',
          'Relational Modeling',
          'Clean Architecture',
          'SOLID & Design Patterns',
          'MVC + DAO Pattern',
          'JDBC & Persistence',
          'Swagger / OpenAPI',
        ],
      },
      {
        id: 'quality-practices',
        title: 'Quality & Agile Practices',
        description:
          'Engineering practices focused on quality, version control, agility, and continuous delivery.',
        skills: [
          'E2E & Automated Testing',
          'Cypress & Playwright',
          'Selenium & Vitest',
          'Git / GitHub & Actions',
          'Conventional Commits',
          'Vercel CI/CD & Deploy',
          'Agile / Scrum (Sprints)',
          'Code Review & Pair Programming',
        ],
      },
    ],
  },
};

// Backward-compatible exports
export const SKILLS_SECTION_DATA: SkillsSectionData = SKILLS_I18N['pt-BR'].sectionData;
export const SKILLS_CATEGORIES: readonly SkillCategory[] = SKILLS_I18N['pt-BR'].categories;

export function getSkillsData(lang: SupportedLang): SkillsI18n {
  return SKILLS_I18N[lang];
}
