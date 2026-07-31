import { ExperienceSectionData, TimelineMilestone } from './experience.model';

export const EXPERIENCE_SECTION_DATA: ExperienceSectionData = {
  eyebrow: 'Trajetória',
  title: 'Experiência & Formação',
  description:
    'Marcos da minha evolução acadêmica e profissional, unindo a visão sistêmica da engenharia de produção ao desenvolvimento de software.',
  ariaLabel: 'Linha do tempo de experiência e formação',
};

export const EXPERIENCE_MILESTONES: readonly TimelineMilestone[] = [
  {
    id: 'prod-eng-start',
    year: '2017',
    title: 'Início da Graduação em Engenharia de Produção',
    subtitle: 'Formação Acadêmica',
    description:
      'Início da jornada na engenharia. Aprendizado em visão sistêmica, otimização de processos, Lean Thinking, PDCA e resolução estruturada de problemas.',
  },
  {
    id: 'prod-eng-degree',
    year: '2022',
    title: 'Conclusão do Bacharelado em Engenharia de Produção',
    subtitle: 'Graduação Concluída',
    description:
      'Conclusão da graduação, consolidando a capacidade de analisar sistemas complexos, identificar gargalos, estruturar fluxos e aplicar melhoria contínua.',
  },
  {
    id: 'software-eng-postgrad',
    year: '2024',
    title: 'Pós-Graduação em Engenharia de Software',
    subtitle: 'Especialização',
    description:
      'Início da especialização focada em arquitetura de software, padrões de projeto, desenvolvimento moderno e práticas sustentáveis de código.',
  },
  {
    id: 'personal-projects',
    year: '2025',
    title: 'Projetos Pessoais & Prática Full Stack',
    subtitle: 'Desenvolvimento Prático',
    description:
      'Desenvolvimento de aplicações web completas focando em React, Django, TypeScript, Java, Spring Boot e construção de APIs REST.',
  },
  {
    id: 'uece-tic-residency',
    year: '2025',
    title: 'Residência TIC 12 — UECE',
    subtitle: 'Formação em Software',
    description:
      'Programa intensivo de 120 horas em desenvolvimento de software e tecnologias web na Universidade Estadual do Ceará.',
  },
  {
    id: 'serratec-residency',
    year: '2026',
    title: 'Residência TIC Serratec Full-Stack',
    subtitle: 'Imersão em Engenharia de Software',
    description:
      'Residência imersiva em desenvolvimento de software com 790 horas abrangendo Java, Spring Boot, React, React Native, metodologias ágeis e projetos em equipe.',
  },
  {
    id: 'today-opportunities',
    year: 'Hoje',
    title: 'Em busca de novas oportunidades',
    subtitle: 'Engenheiro de Software Júnior',
    description:
      'Aprendizado contínuo, evolução em arquitetura e desenvolvimento Full Stack, pronto para colaborar em projetos desafiadores e de alto impacto.',
  },
];
