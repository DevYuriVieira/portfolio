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
        title: 'Frontend Engineering',
        description:
          'Construção de aplicações web modernas, performáticas, acessíveis e guiadas por design systems.',
        skills: [
          'Angular',
          'React',
          'TypeScript',
          'HTML5 & CSS/SCSS',
          'Componentização',
          'Design Systems',
          'Acessibilidade WCAG',
          'Performance Web',
        ],
      },
      {
        id: 'backend-apis',
        title: 'Backend & APIs',
        description:
          'Desenvolvimento de serviços backend seguros, organizados e orientados a regras de negócio.',
        skills: [
          'Java',
          'Spring Boot',
          'Python',
          'Django',
          'REST APIs',
          'Autenticação',
          'Regras de Negócio',
          'Arquitetura em Camadas',
        ],
      },
      {
        id: 'data-architecture',
        title: 'Data & Architecture',
        description:
          'Modelagem relacional, persistência de dados e princípios de engenharia para software sustentável.',
        skills: [
          'PostgreSQL',
          'SQL',
          'Modelagem Relacional',
          'ORM (JPA/Hibernate)',
          'DTOs',
          'Clean Code',
          'SOLID',
          'Padrões de Projeto',
        ],
      },
      {
        id: 'quality-practices',
        title: 'Quality & Engineering Practices',
        description:
          'Práticas de engenharia focadas em qualidade, colaboração e evolução contínua do software.',
        skills: [
          'Git/GitHub',
          'Testes Automatizados',
          'Vitest',
          'Code Review',
          'Scrum',
          'Documentação Técnica',
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
        title: 'Frontend Engineering',
        description:
          'Building modern, performant, accessible web applications driven by design systems.',
        skills: [
          'Angular',
          'React',
          'TypeScript',
          'HTML5 & CSS/SCSS',
          'Componentization',
          'Design Systems',
          'WCAG Accessibility',
          'Web Performance',
        ],
      },
      {
        id: 'backend-apis',
        title: 'Backend & APIs',
        description:
          'Building secure, well-organized backend services driven by business rules.',
        skills: [
          'Java',
          'Spring Boot',
          'Python',
          'Django',
          'REST APIs',
          'Authentication',
          'Business Logic',
          'Layered Architecture',
        ],
      },
      {
        id: 'data-architecture',
        title: 'Data & Architecture',
        description:
          'Relational modeling, data persistence, and engineering principles for sustainable software.',
        skills: [
          'PostgreSQL',
          'SQL',
          'Relational Modeling',
          'ORM (JPA/Hibernate)',
          'DTOs',
          'Clean Code',
          'SOLID',
          'Design Patterns',
        ],
      },
      {
        id: 'quality-practices',
        title: 'Quality & Engineering Practices',
        description:
          'Engineering practices focused on quality, collaboration, and continuous software evolution.',
        skills: [
          'Git/GitHub',
          'Automated Testing',
          'Vitest',
          'Code Review',
          'Scrum',
          'Technical Documentation',
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
