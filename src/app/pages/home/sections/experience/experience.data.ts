import { SupportedLang } from '@core';
import {
  CertificationItem,
  CurrentFocusData,
  ExperienceSectionData,
  TimelineMilestone,
} from './experience.model';

interface ExperienceI18n {
  sectionData: ExperienceSectionData;
  milestones: readonly TimelineMilestone[];
  currentFocus: CurrentFocusData;
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
          'Capacitação prática em trilhas de conhecimento focadas em Programação Orientada a Objetos (POO) em Java, Banco de Dados MySQL e Estruturas de Dados.',
      },
      {
        id: 'serratec-residency',
        year: '2026',
        title: 'Residência TIC/Software Serratec Full-Stack (790h)',
        subtitle: 'Serratec · Imersão em Disciplinas Progressivas',
        description:
          'Residência imersiva em desenvolvimento de software com 790 horas em disciplinas de Lógica, Banco de Dados, POO em Java, APIs RESTful com Spring Boot, React, React Native, metodologias ágeis e entrega de projeto final corporativo.',
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
    currentFocus: {
      statusBadge: 'EM APRENDIZADO ATIVO & EXPANSÃO',
      title: 'Foco Atual & Aprendizado Ativo',
      subtitle:
        'Aprofundamento prático em tecnologias estratégicas para construção de arquiteturas escaláveis, resilientes e orientadas a microsserviços.',
      items: [
        {
          id: 'docker-containerization',
          tech: 'Docker & Containerização',
          category: 'DevOps & Infraestrutura',
          description:
            'Padronização de ambientes isolados, empacotamento de aplicações multi-container via Docker Compose e preparação para implantação em nuvem.',
        },
        {
          id: 'aws-cloud',
          tech: 'AWS & Cloud Services',
          category: 'Arquitetura Cloud',
          description:
            'Estudo prático dos principais serviços AWS (EC2, S3, IAM, CloudFront e RDS) com foco em implantação serverless e infraestrutura segura.',
        },
        {
          id: 'csharp-dotnet',
          tech: 'C# / .NET 10',
          category: 'Backend Enterprise',
          description:
            'Expansão da versatilidade backend em ecossistema Microsoft, desenvolvendo APIs RESTful de alta performance com C# 13, ASP.NET Core e Entity Framework Core.',
        },
        {
          id: 'nosql-databases',
          tech: 'NoSQL & Cache (MongoDB / Redis)',
          category: 'Persistência & Alta Vazão',
          description:
            'Modelagem de documentos com MongoDB e estratégias de cache em memória com Redis para otimização de consultas e redução de latência.',
        },
        {
          id: 'automated-testing',
          tech: 'Testes Automatizados & E2E (Cypress / Playwright / Selenium / Vitest / JUnit 5)',
          category: 'Qualidade & CI/CD',
          description:
            'Construção de suítes completas de testes unitários, integração e E2E com Cypress, Playwright, Selenium, Vitest e JUnit 5 para garantir zero regressão em esteiras de integração contínua (CI/CD).',
        },
      ],
    },
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
          'Practical training in knowledge tracks focused on Object-Oriented Programming (OOP) in Java, MySQL Databases, and Data Structures.',
      },
      {
        id: 'serratec-residency',
        year: '2026',
        title: 'Serratec ICT/Software Full-Stack Residency (790h)',
        subtitle: 'Serratec · Progressive Disciplines Immersion',
        description:
          'Immersive 790-hour software development residency spanning progressive coursework in Logic, Databases, OOP Java, RESTful APIs with Spring Boot, React, React Native, agile practices, and corporate final project delivery.',
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
    currentFocus: {
      statusBadge: 'ACTIVE LEARNING & EVOLUTION',
      title: 'Current Focus & Active Learning',
      subtitle:
        'Hands-on specialization in key engineering technologies to build scalable, resilient, and microservices-oriented architectures.',
      items: [
        {
          id: 'docker-containerization',
          tech: 'Docker & Containerization',
          category: 'DevOps & Infrastructure',
          description:
            'Standardizing isolated environments, multi-container orchestration with Docker Compose, and cloud deployment readiness.',
        },
        {
          id: 'aws-cloud',
          tech: 'AWS & Cloud Services',
          category: 'Cloud Architecture',
          description:
            'Hands-on exploration of core AWS services (EC2, S3, IAM, CloudFront, RDS) focused on serverless deployments and secure cloud infrastructure.',
        },
        {
          id: 'csharp-dotnet',
          tech: 'C# / .NET 10',
          category: 'Enterprise Backend',
          description:
            'Expanding backend versatility into Microsoft ecosystems, building high-performance REST APIs with C# 13, ASP.NET Core, and Entity Framework Core.',
        },
        {
          id: 'nosql-databases',
          tech: 'NoSQL & Caching (MongoDB / Redis)',
          category: 'Persistence & High Throughput',
          description:
            'Document modeling with MongoDB and in-memory caching strategies with Redis for query optimization and low-latency data access.',
        },
        {
          id: 'automated-testing',
          tech: 'Automated & E2E Testing (Cypress / Playwright / Selenium / Vitest / JUnit 5)',
          category: 'Quality & CI/CD',
          description:
            'Building complete unit, integration, and E2E testing suites using Cypress, Playwright, Selenium, Vitest, and JUnit 5 to ensure zero-regression continuous delivery (CI/CD) pipelines.',
        },
      ],
    },
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
