import { ExperienceSectionData, TimelineMilestone } from './experience.model';

export const EXPERIENCE_SECTION_DATA: ExperienceSectionData = {
  eyebrow: '02 // TRAJETÓRIA PROFISSIONAL',
  title: 'Evolução Contínua em Engenharia',
  description:
    'Uma jornada construída a partir do raciocínio sistêmico da Engenharia de Produção até o desenvolvimento de software de alta performance.',
  ariaLabel: 'Trajetória profissional e acadêmica',
};

export const EXPERIENCE_MILESTONES: readonly TimelineMilestone[] = [
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
];
