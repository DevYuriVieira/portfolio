import { SkillCategory, SkillsSectionData } from './skills.model';

export const SKILLS_SECTION_DATA: SkillsSectionData = {
  id: 'skills',
  eyebrow: 'Competências',
  title: 'Habilidades & Engenharia',
  description:
    'Visão consolidada de competências técnicas, fundamentos de engenharia e práticas utilizadas no desenvolvimento de software.',
  ariaLabel: 'Seção de habilidades e engenharia',
};

export const SKILLS_CATEGORIES: readonly SkillCategory[] = [
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
];
