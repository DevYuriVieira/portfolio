import { SupportedLang } from '@core';
import { CertificationItem, ExperienceSectionData, TimelineMilestone } from './experience.model';

interface ExperienceI18n {
  sectionData: ExperienceSectionData;
  milestones: readonly TimelineMilestone[];
  certifications: readonly CertificationItem[];
}

const EXPERIENCE_I18N: Record<SupportedLang, ExperienceI18n> = {
  'pt-BR': {
    sectionData: {
      eyebrow: '02 // TRAJETÓRIA & CERTIFICAÇÕES',
      title: 'Evolução Contínua em Engenharia',
      description:
        'Uma jornada de aprendizado constante, combinando o raciocínio sistêmico da Engenharia de Produção, formações intensivas práticas (+910h de residências) e certificações técnicas.',
      ariaLabel: 'Trajetória profissional, acadêmica e certificações',
      certificationsTitle: 'Certificações & Credenciais',
      certificationsSubtitle:
        'Qualificações técnicas, programas intensivos de desenvolvimento e certificações em ferramentas de engenharia.',
    },
    milestones: [
      {
        id: 'production-engineering-degree',
        year: '2017 – 2022',
        title: 'Bacharelado em Engenharia de Produção',
        subtitle: 'Universidade Estácio · Formação Acadêmica de Base',
        description:
          'Desenvolvimento de visão sistêmica, otimização de processos, análise de causa raiz, pensamento enxuto (Lean) e metodologia PDCA para resolução de problemas complexos.',
      },
      {
        id: 'software-engineering-postgrad',
        year: '2024 – 2025',
        title: 'Pós-Graduação em Engenharia de Software',
        subtitle: 'Universidade Estácio · Especialização Técnica',
        description:
          'Aprofundamento em arquitetura de software, padrões de projeto, desenvolvimento web moderno, qualidade de código e ciclo de vida completo de aplicações.',
      },
      {
        id: 'uece-tic-residency',
        year: '2025',
        title: 'Residência TIC 12 | UECE (120h)',
        subtitle: 'Universidade Estadual do Ceará · Formação em Trilhas',
        description:
          'Capacitação prática em trilhas de conhecimento focadas em Programação Orientada a Objetos (POO) em Java 11, Banco de Dados MySQL e Estruturas de Dados.',
      },
      {
        id: 'serratec-residency',
        year: '2026',
        title: 'Residência TIC Serratec Full-Stack (790h)',
        subtitle: 'Serratec · Imersão em Disciplinas Progressivas',
        description:
          'Residência imersiva em desenvolvimento de software com 790 horas em disciplinas de Lógica, Banco de Dados, POO em Java, APIs RESTful com Spring Boot 3, React, React Native, metodologias ágeis e entrega de projeto final corporativo.',
      },
      {
        id: 'personal-projects',
        year: '2025 – Presente',
        title: 'Projetos Pessoais & Casos de Estudo',
        subtitle: 'Desenvolvimento Prático Autoral',
        description:
          'Desenvolvimento prático autoral de aplicações web e mobile completas cobrindo React, React Native (Expo), TypeScript, Java (Spring Boot) e Python (Django), utilizando ferramentas de IA como suporte para aceleração de código, testes e documentação.',
      },
    ],
    certifications: [
      {
        id: 'white-belt-lean',
        title: 'White Belt - Lean Six Sigma',
        issuer: 'Frons',
        year: '2024',
        category: 'Processos & Otimização',
        badge: 'Lean Thinking',
      },
      {
        id: 'power-bi-senac',
        title: 'Análise de Dados com Power BI',
        issuer: 'Senac',
        year: '2025',
        category: 'Business Intelligence',
        badge: 'Data & Analytics',
      },
      {
        id: 'english-wizard',
        title: 'Programa de Inglês C1/C2 Concluído (Nível Ativo B2+)',
        issuer: 'Wizard Language School',
        year: '2017 – 2023',
        category: 'Idiomas & Comunicação',
        badge: 'Inglês Avançado',
      },
      {
        id: 'frontend-ai-senac',
        title: 'Desenvolvimento Front-End com Inteligência Artificial',
        issuer: 'Senac',
        year: '2025',
        category: 'Frontend & IA',
        badge: 'Frontend + AI',
      },
      {
        id: 'python-senac',
        title: 'Programação em Python',
        issuer: 'Senac',
        year: '2025 – 2026',
        category: 'Backend & Lógica',
        badge: 'Python',
      },
      {
        id: 'philips-bootcamp-dio',
        title: 'Bootcamp Philips Full-Stack Developer',
        issuer: 'Digital Innovation One (DIO)',
        year: '2025',
        category: 'Full Stack',
        badge: 'Full Stack Web',
      },
      {
        id: 'git-github-dio',
        title: 'Introdução ao Git e GitHub',
        issuer: 'Digital Innovation One (DIO)',
        year: '2025',
        category: 'DevOps & Versionamento',
        badge: 'Git & Workflows',
      },
      {
        id: 'sql-matera',
        title: 'Banco de Dados SQL (Intermediário e Avançado)',
        issuer: 'Instituto Matera',
        year: '2025',
        category: 'Banco de Dados',
        badge: 'SQL & Queries',
      },
      {
        id: 'ai-agents-hashtag',
        title: 'Imersão Agentes de IA',
        issuer: 'Hashtag Treinamentos',
        year: '2026',
        category: 'Inteligência Artificial',
        badge: 'AI Agents',
      },
    ],
  },
  en: {
    sectionData: {
      eyebrow: '02 // JOURNEY & CERTIFICATIONS',
      title: 'Continuous Growth in Engineering',
      description:
        'A continuous learning path combining Production Engineering systems thinking, practical immersion (+910h residencies), and technical certifications.',
      ariaLabel: 'Professional journey, academic background, and certifications',
      certificationsTitle: 'Certifications & Credentials',
      certificationsSubtitle:
        'Technical qualifications, intensive software engineering programs, and tool certifications.',
    },
    milestones: [
      {
        id: 'production-engineering-degree',
        year: '2017 – 2022',
        title: "Bachelor's in Production Engineering",
        subtitle: 'Estácio University · Core Academic Foundation',
        description:
          'Developed systems thinking, process optimization, root cause analysis, Lean methodology, and PDCA cycle for solving complex problems.',
      },
      {
        id: 'software-engineering-postgrad',
        year: '2024 – 2025',
        title: 'Postgraduate in Software Engineering',
        subtitle: 'Estácio University · Technical Specialization',
        description:
          'Deepened expertise in software architecture, design patterns, modern web development, code quality, and end-to-end application lifecycle.',
      },
      {
        id: 'uece-tic-residency',
        year: '2025',
        title: 'ICT Residency 12 | UECE (120h)',
        subtitle: 'State University of Ceará · Track-Based Program',
        description:
          'Practical training in knowledge tracks focused on Object-Oriented Programming (OOP) in Java 11, MySQL Databases, and Data Structures.',
      },
      {
        id: 'serratec-residency',
        year: '2026',
        title: 'Serratec ICT Full-Stack Residency (790h)',
        subtitle: 'Serratec · Progressive Disciplines Immersion',
        description:
          'Immersive 790-hour software development residency spanning progressive coursework in Logic, Databases, OOP Java, RESTful APIs with Spring Boot 3, React, React Native, agile practices, and corporate final project delivery.',
      },
      {
        id: 'personal-projects',
        year: '2025 – Present',
        title: 'Personal Projects & Case Studies',
        subtitle: 'Hands-On Authorial Development',
        description:
          'Hands-on authorial development of full-stack web and mobile applications covering React, React Native (Expo), TypeScript, Java (Spring Boot), and Python (Django), leveraging AI tools for developer assistance, testing, and documentation.',
      },
    ],
    certifications: [
      {
        id: 'white-belt-lean',
        title: 'White Belt - Lean Six Sigma',
        issuer: 'Frons',
        year: '2024',
        category: 'Processes & Optimization',
        badge: 'Lean Thinking',
      },
      {
        id: 'power-bi-senac',
        title: 'Data Analytics with Power BI',
        issuer: 'Senac',
        year: '2025',
        category: 'Business Intelligence',
        badge: 'Data & Analytics',
      },
      {
        id: 'english-wizard',
        title: 'Completed C1/C2 English Program (Active B2+ Advanced)',
        issuer: 'Wizard Language School',
        year: '2017 – 2023',
        category: 'Languages & Communication',
        badge: 'Advanced English',
      },
      {
        id: 'frontend-ai-senac',
        title: 'Front-End Development with Artificial Intelligence',
        issuer: 'Senac',
        year: '2025',
        category: 'Frontend & AI',
        badge: 'Frontend + AI',
      },
      {
        id: 'python-senac',
        title: 'Python Programming',
        issuer: 'Senac',
        year: '2025 – 2026',
        category: 'Backend & Logic',
        badge: 'Python',
      },
      {
        id: 'philips-bootcamp-dio',
        title: 'Philips Full-Stack Developer Bootcamp',
        issuer: 'Digital Innovation One (DIO)',
        year: '2025',
        category: 'Full Stack',
        badge: 'Full Stack Web',
      },
      {
        id: 'git-github-dio',
        title: 'Introduction to Git & GitHub',
        issuer: 'Digital Innovation One (DIO)',
        year: '2025',
        category: 'DevOps & Version Control',
        badge: 'Git & Workflows',
      },
      {
        id: 'sql-matera',
        title: 'SQL Database (Intermediate & Advanced)',
        issuer: 'Instituto Matera',
        year: '2025',
        category: 'Databases',
        badge: 'SQL & Queries',
      },
      {
        id: 'ai-agents-hashtag',
        title: 'AI Agents Immersion',
        issuer: 'Hashtag Treinamentos',
        year: '2026',
        category: 'Artificial Intelligence',
        badge: 'AI Agents',
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
