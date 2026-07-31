import { SkillCategory, SkillsSectionData } from './skills.model';

export const SKILLS_SECTION_DATA: SkillsSectionData = {
  id: 'skills',
  eyebrow: 'Competências',
  title: 'Habilidades & Engenharia',
  description:
    'Visão de engenharia de sistemas, arquitetura, processos e desenvolvimento full-stack aplicada à construção de software limpo, sustentável e orientado a valor.',
  ariaLabel: 'Seção de habilidades e engenharia',
};

export const SKILLS_CATEGORIES: readonly SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Construção de interfaces modernas, responsivas e focadas na experiência do usuário.',
    skills: [
      'React',
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SCSS',
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Desenvolvimento de APIs robustas, seguras e bem estruturadas.',
    skills: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Python',
      'Django',
      'REST APIs',
      'JPA/Hibernate',
    ],
  },
  {
    id: 'data',
    title: 'Data',
    description: 'Modelagem relacional e otimização de persistência de dados.',
    skills: [
      'PostgreSQL',
      'SQL',
      'Database Modeling',
      'Query Optimization',
    ],
  },
  {
    id: 'engineering-practices',
    title: 'Engineering Practices',
    description: 'Princípios de arquitetura, qualidade de código e mentalidade de engenharia.',
    skills: [
      'Clean Architecture',
      'SOLID',
      'Object-Oriented Programming',
      'API First',
      'Bean Validation',
      'Exception Handling',
      'Conventional Commits',
    ],
  },
  {
    id: 'tools-delivery',
    title: 'Tools & Delivery',
    description: 'Ferramentas de produtividade, automação e metodologias de entrega.',
    skills: [
      'Git/GitHub',
      'Maven',
      'Swagger/OpenAPI',
      'Vercel',
      'CI/CD',
      'Scrum',
    ],
  },
];
