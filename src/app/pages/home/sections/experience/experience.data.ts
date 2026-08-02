import { SupportedLang } from '@core';
import { ExperienceSectionData, TimelineMilestone } from './experience.model';

interface ExperienceI18n {
  sectionData: ExperienceSectionData;
  milestones: readonly TimelineMilestone[];
}

const EXPERIENCE_I18N: Record<SupportedLang, ExperienceI18n> = {
  'pt-BR': {
    sectionData: {
      eyebrow: '02 // TRAJETÓRIA PROFISSIONAL',
      title: 'Evolução Contínua em Engenharia',
      description:
        'Uma jornada construída a partir do raciocínio sistêmico da Engenharia de Produção até o desenvolvimento de software de alta performance.',
      ariaLabel: 'Trajetória profissional e acadêmica',
    },
    milestones: [
      {
        id: 'production-engineering-degree',
        year: '2017 – 2022',
        title: 'Bacharelado em Engenharia de Produção',
        subtitle: 'Formação Acadêmica de Base',
        description:
          'Desenvolvimento de visão sistêmica, otimização de processos, análise de causa raiz, pensamento enxuto (Lean) e metodologia PDCA para resolução de problemas complexos.',
      },
      {
        id: 'software-engineering-postgrad',
        year: '2024 – Presente',
        title: 'Pós-Graduação em Engenharia de Software',
        subtitle: 'Especialização Técnica',
        description:
          'Aprofundamento em arquitetura de software, padrões de projeto, desenvolvimento web moderno, qualidade de código e ciclo de vida de aplicações.',
      },
      {
        id: 'uece-tic-residency',
        year: '2025',
        title: 'Residência TIC 12 — UECE',
        subtitle: 'Formação em Engenharia de Software',
        description:
          'Programa de 120 horas na Universidade Estadual do Ceará focado em Programação Orientada a Objetos (POO) em Java 11, Banco de Dados MySQL e Estrutura de Dados.',
      },
      {
        id: 'personal-projects',
        year: '2025 – 2026',
        title: 'Projetos Pessoais & Casos de Estudo',
        subtitle: 'Desenvolvimento Prático',
        description:
          'Desenvolvimento de aplicações web completas focando em React, Django, TypeScript, Java, Spring Boot e construção de APIs REST.',
      },
      {
        id: 'serratec-residency',
        year: '2026',
        title: 'Residência TIC Serratec Full-Stack',
        subtitle: 'Imersão em Engenharia de Software',
        description:
          'Residência imersiva em desenvolvimento de software com 790 horas abrangendo Java, Spring Boot, React, React Native, metodologias ágeis e projetos em equipe.',
      },
    ],
  },
  en: {
    sectionData: {
      eyebrow: '02 // PROFESSIONAL JOURNEY',
      title: 'Continuous Growth in Engineering',
      description:
        'A journey built from Production Engineering systems thinking to high-performance software development.',
      ariaLabel: 'Professional and academic journey',
    },
    milestones: [
      {
        id: 'production-engineering-degree',
        year: '2017 – 2022',
        title: "Bachelor's in Production Engineering",
        subtitle: 'Core Academic Foundation',
        description:
          'Developed systems thinking, process optimization, root cause analysis, Lean thinking, and PDCA methodology for solving complex problems.',
      },
      {
        id: 'software-engineering-postgrad',
        year: '2024 – Present',
        title: 'Postgraduate in Software Engineering',
        subtitle: 'Technical Specialization',
        description:
          'Deepened expertise in software architecture, design patterns, modern web development, code quality, and application lifecycle.',
      },
      {
        id: 'uece-tic-residency',
        year: '2025',
        title: 'ICT Residency 12 — UECE',
        subtitle: 'Software Engineering Training',
        description:
          '120-hour program at the State University of Ceará focused on Object-Oriented Programming (OOP) in Java 11, MySQL Databases, and Data Structures.',
      },
      {
        id: 'personal-projects',
        year: '2025 – 2026',
        title: 'Personal Projects & Case Studies',
        subtitle: 'Hands-On Development',
        description:
          'Built complete web applications focusing on React, Django, TypeScript, Java, Spring Boot, and REST API development.',
      },
      {
        id: 'serratec-residency',
        year: '2026',
        title: 'Serratec ICT Full-Stack Residency',
        subtitle: 'Software Engineering Immersion',
        description:
          'Immersive 790-hour software development residency covering Java, Spring Boot, React, React Native, agile methodologies, and team-based projects.',
      },
    ],
  },
};

// Backward-compatible exports
export const EXPERIENCE_SECTION_DATA: ExperienceSectionData =
  EXPERIENCE_I18N['pt-BR'].sectionData;

export const EXPERIENCE_MILESTONES: readonly TimelineMilestone[] =
  EXPERIENCE_I18N['pt-BR'].milestones;

export function getExperienceData(lang: SupportedLang): ExperienceI18n {
  return EXPERIENCE_I18N[lang];
}
