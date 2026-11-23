import { SupportedLang } from '@core';
import { CurrentFocusData, ExperienceSectionData, TimelineMilestone } from './experience.model';

interface ExperienceI18n {
  sectionData: ExperienceSectionData;
  milestones: readonly TimelineMilestone[];
  currentFocus: CurrentFocusData;
}

const EXPERIENCE_I18N: Record<SupportedLang, ExperienceI18n> = {
  'pt-BR': {
    sectionData: {
      eyebrow: '02 // TRAJETÓRIA & EVOLUÇÃO',
      title: 'Experiência & Formação em Engenharia',
      description:
        'Atuação prática em engenharia full-stack, sistemas distribuídos e docência técnica, apoiada pela visão sistêmica da Engenharia de Produção e de Software.',
      ariaLabel: 'Trajetória profissional, acadêmica e evolução técnica',
    },
    milestones: [
      {
        id: 'personal-projects',
        year: '2026 – Presente',
        title: 'Engenharia de Software Freelance & Sistemas Distribuídos',
        subtitle: 'Sistemas Comerciais Sob Demanda & Arquiteturas Distribuídas',
        description:
          'Atuação como engenheiro freelancer no desenvolvimento da plataforma comercial Work-Fitness, aplicando Clean Architecture, esteiras CI/CD automatizadas, nota 100/100 no Lighthouse e captação de leads. Em paralelo, concepção e desenvolvimento de projetos autorais de alta complexidade como FarmFlow e FleetOps, explorando mensageria com RabbitMQ, mobile Offline-First e microsserviços distribuídos em Java 21 e .NET 10.',
        tag: 'FREELANCE & ENGENHARIA AUTORAL',
        highlighted: true,
      },
      {
        id: 'senai-faetec-instructor',
        year: 'Ago – Out 2026',
        title: 'Instrutor de Programação Back-End',
        subtitle: 'SENAI / FAETEC · Docência em Formação Técnica',
        description:
          'Docência em Programação cobrindo lógica de programação (JavaScript), bancos de dados relacionais (PostgreSQL/DBeaver), POO em Java e desenvolvimento de APIs RESTful com Spring Boot, além da elaboração de materiais didáticos e mentoria técnica.',
        tag: 'DOCÊNCIA TÉCNICA',
        highlighted: true,
      },
      {
        id: 'serratec-residency',
        year: '2026',
        title: 'Residência TIC/Software Serratec Full-Stack (790h)',
        subtitle: 'Serratec · Imersão em Disciplinas Progressivas',
        description:
          'Residência imersiva em desenvolvimento de software com 790 horas em disciplinas de Lógica, Banco de Dados, POO em Java, APIs RESTful com Spring Boot, React, React Native, metodologias ágeis e entrega de projeto final corporativo em parceria com a Carl Zeiss Vision.',
        tag: 'RESIDÊNCIA IMERSIVA (790H) & ZEISS',
        highlighted: true,
      },
      {
        id: 'senac-python-fullstack',
        year: '2025 – 2026',
        title: 'Programação em Python (168h)',
        subtitle: 'Senac · Imersão em Programação',
        description:
          'Capacitação abrangendo Lógica de Programação, Python (Django) e Frontend Essencial (HTML5, CSS3, JavaScript) com foco na construção de aplicações web funcionais.',
        tag: 'CAPACITAÇÃO TÉCNICA (168H)',
      },
      {
        id: 'uece-tic-residency',
        year: '2025',
        title: 'Residência TIC 12 | UECE (120h)',
        subtitle: 'Universidade Estadual do Ceará · Formação em Trilhas',
        description:
          'Capacitação prática em trilhas de conhecimento focadas em Programação Orientada a Objetos (POO) em Java, Banco de Dados MySQL e Estruturas de Dados.',
        tag: 'RESIDÊNCIA TÉCNICA (120H)',
      },
      {
        id: 'dio-tech-bootcamp',
        year: '2025',
        title: 'Bootcamp Philips Fullstack Developer | You Are You (132h)',
        subtitle: 'Digital Innovation One (DIO) & Philips · Formação Prática',
        description:
          'Trilhas intensivas de aceleração prática cobrindo HTML, CSS, JavaScript, TypeScript, Angular, Java, Spring Boot e Banco de Dados (modelagem relacional e SQL).',
        tag: 'BOOTCAMP PRÁTICO (132H)',
      },
      {
        id: 'senac-frontend-dev',
        year: '2025',
        title: 'Programador Front-end com IA (80h)',
        subtitle: 'Senac · Interfaces Web & React',
        description:
          'Capacitação prática em HTML, CSS, JavaScript e React para criação de interfaces modernas, responsivas e acessíveis, utilizando ferramentas de IA como suporte para desenvolvimento acelerado.',
        tag: 'CAPACITAÇÃO TÉCNICA (80H)',
      },
      {
        id: 'software-engineering-postgrad',
        year: '2024 – 2025',
        title: 'Pós-Graduação em Engenharia de Software',
        subtitle: 'Universidade Estácio · Especialização Técnica',
        description:
          'Aprofundamento em arquitetura de software, padrões de projeto, desenvolvimento web moderno, qualidade de código e ciclo de vida completo de aplicações.',
        tag: 'PÓS-GRADUAÇÃO',
        highlighted: true,
      },
      {
        id: 'production-engineering-degree',
        year: '2017 – 2022',
        title: 'Bacharelado em Engenharia de Produção',
        subtitle: 'Universidade Estácio · Bacharelado',
        description:
          'Desenvolvimento de visão sistêmica, otimização de processos, análise de causa raiz, pensamento enxuto (Lean) e metodologia PDCA para resolução de problemas complexos.',
        tag: 'GRADUAÇÃO',
        highlighted: true,
      },
    ],
    currentFocus: {
      statusBadge: 'APROFUNDAMENTO CONTÍNUO & ESCALA',
      title: 'Aprofundamento Técnico & Arquitetura',
      subtitle:
        'Especialização prática contínua em infraestrutura cloud, mensageria, persistência de alta vazão e qualidade automatizada para sistemas distribuídos.',
      items: [
        {
          id: 'docker-containerization',
          tech: 'Docker & Containerização',
          category: 'DevOps & Infraestrutura',
          description:
            'Padronização de ambientes isolados, empacotamento de aplicações multi-container via Docker Compose e imagens multi-stage prontas para produção.',
        },
        {
          id: 'aws-cloud',
          tech: 'AWS & Cloud Services',
          category: 'Arquitetura Cloud',
          description:
            'Aprofundamento prático nos principais serviços AWS (EC2, S3, IAM, CloudFront e RDS) com foco em infraestrutura segura, observabilidade e custo previsível.',
        },
        {
          id: 'csharp-dotnet',
          tech: 'Ecossistema .NET 10 & Mensageria',
          category: 'Backend Enterprise',
          description:
            'Aprofundamento em arquiteturas orientadas a eventos com C# 14, ASP.NET Core, EF Core, Transactional Outbox, RabbitMQ e OpenTelemetry.',
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
          tech: 'Engenharia de Qualidade & Carga (Playwright / Vitest / xUnit / k6)',
          category: 'Qualidade & CI/CD',
          description:
            'Suítes completas de testes unitários, integração, regressão visual, acessibilidade e testes de carga (k6) integrados em esteiras CI/CD.',
        },
      ],
    },
  },
  en: {
    sectionData: {
      eyebrow: '02 // EXPERIENCE & BACKGROUND',
      title: 'Engineering Experience & Education',
      description:
        'Hands-on delivery across full-stack engineering, distributed systems, and technical instruction, grounded in Production and Software Engineering.',
      ariaLabel: 'Professional journey, academic background, and technical evolution',
    },
    milestones: [
      {
        id: 'personal-projects',
        year: '2026 – Present',
        title: 'Freelance Software Engineering & Distributed Systems',
        subtitle: 'On-Demand Commercial Systems & Distributed Architectures',
        description:
          'Freelance engineering delivery of the Work-Fitness commercial platform, implementing Clean Architecture, automated CI/CD pipelines, a perfect 100/100 Google Lighthouse audit, and lead conversion. In parallel, architecting complex authorial engineering systems including FarmFlow and FleetOps, focusing on event-driven messaging with RabbitMQ, Offline-First mobile sync, and distributed microservices across Java 21 and .NET 10.',
        tag: 'FREELANCE & AUTHORIAL ENGINEERING',
        highlighted: true,
      },
      {
        id: 'senai-faetec-instructor',
        year: 'Aug – Oct 2026',
        title: 'Back-End Programming Instructor',
        subtitle: 'SENAI / FAETEC · Technical Education',
        description:
          'Taught programming logic (JavaScript), relational databases (PostgreSQL/DBeaver), OOP in Java, and RESTful APIs with Spring Boot, alongside authoring technical courseware and providing hands-on engineering mentorship.',
        tag: 'TECHNICAL TEACHING',
        highlighted: true,
      },
      {
        id: 'serratec-residency',
        year: '2026',
        title: 'Serratec ICT/Software Full-Stack Residency (790h)',
        subtitle: 'Serratec · Progressive Disciplines Immersion',
        description:
          'Immersive 790-hour software development residency spanning progressive coursework in Logic, Databases, OOP Java, RESTful APIs with Spring Boot, React, React Native, agile practices, and corporate final project delivery with Carl Zeiss Vision.',
        tag: 'IMMERSIVE RESIDENCY (790H) & ZEISS',
        highlighted: true,
      },
      {
        id: 'senac-python-fullstack',
        year: '2025 – 2026',
        title: 'Python Programming (168h)',
        subtitle: 'Senac · Programming Immersion',
        description:
          'Practical training covering Programming Logic, Python (Django), and Essential Frontend (HTML5, CSS3, JavaScript) focused on building functional web applications.',
        tag: 'TECHNICAL TRAINING (168H)',
      },
      {
        id: 'uece-tic-residency',
        year: '2025',
        title: 'ICT Residency 12 | UECE (120h)',
        subtitle: 'State University of Ceará · Track-Based Program',
        description:
          'Practical training in knowledge tracks focused on Object-Oriented Programming (OOP) in Java, MySQL Databases, and Data Structures.',
        tag: 'TECHNICAL RESIDENCY (120H)',
      },
      {
        id: 'dio-tech-bootcamp',
        year: '2025',
        title: 'Bootcamp Philips Fullstack Developer | You Are You (132h)',
        subtitle: 'Digital Innovation One (DIO) & Philips · Practical Acceleration',
        description:
          'Intensive acceleration tracks covering HTML, CSS, JavaScript, TypeScript, Angular, Java, Spring Boot, and Databases (relational modeling & SQL).',
        tag: 'PRACTICAL BOOTCAMP (132H)',
      },
      {
        id: 'senac-frontend-dev',
        year: '2025',
        title: 'Frontend Developer with AI (80h)',
        subtitle: 'Senac · Web Interfaces & React',
        description:
          'Practical training in HTML, CSS, JavaScript, and React for building modern, responsive, accessible interfaces, leveraging AI tools to accelerate development workflows.',
        tag: 'TECHNICAL TRAINING (80H)',
      },
      {
        id: 'software-engineering-postgrad',
        year: '2024 – 2025',
        title: 'Postgraduate in Software Engineering',
        subtitle: 'Estácio University · Technical Specialization',
        description:
          'Deepened expertise in software architecture, design patterns, modern web development, code quality, and end-to-end application lifecycle.',
        tag: 'POSTGRADUATE',
        highlighted: true,
      },
      {
        id: 'production-engineering-degree',
        year: '2017 – 2022',
        title: "Bachelor's in Production Engineering",
        subtitle: "Estácio University · Bachelor's Degree",
        description:
          'Developed systems thinking, process optimization, root cause analysis, Lean methodology, and PDCA cycle for solving complex problems.',
        tag: "BACHELOR'S DEGREE",
        highlighted: true,
      },
    ],
    currentFocus: {
      statusBadge: 'CONTINUOUS SPECIALIZATION & SCALE',
      title: 'Continuous Specialization & Architecture',
      subtitle:
        'Ongoing hands-on specialization in cloud infrastructure, event-driven messaging, high-throughput persistence, and automated quality engineering.',
      items: [
        {
          id: 'docker-containerization',
          tech: 'Docker & Containerization',
          category: 'DevOps & Infrastructure',
          description:
            'Standardizing isolated environments, multi-container orchestration with Docker Compose, and production-ready multi-stage images.',
        },
        {
          id: 'aws-cloud',
          tech: 'AWS & Cloud Services',
          category: 'Cloud Architecture',
          description:
            'Hands-on depth across core AWS services (EC2, S3, IAM, CloudFront, RDS) focused on secure infrastructure, observability, and predictable cost.',
        },
        {
          id: 'csharp-dotnet',
          tech: '.NET 10 Ecosystem & Messaging',
          category: 'Enterprise Backend',
          description:
            'Advancing event-driven architectures with C# 14, ASP.NET Core, EF Core, Transactional Outbox, RabbitMQ, and OpenTelemetry.',
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
          tech: 'Quality & Load Engineering (Playwright / Vitest / xUnit / k6)',
          category: 'Quality & CI/CD',
          description:
            'End-to-end unit, integration, visual regression, accessibility, and k6 load-testing suites embedded in continuous delivery pipelines.',
        },
      ],
    },
  },
  es: {
    sectionData: {
      eyebrow: '02 // EXPERIENCIA & FORMACIÓN',
      title: 'Experiencia & Formación en Ingeniería',
      description:
        'Práctica real en ingeniería full-stack, sistemas distribuidos y docencia técnica, combinando Ingeniería de Producción e Ingeniería de Software.',
      ariaLabel: 'Trayectoria profesional, formación académica y evolución técnica',
    },
    milestones: [
      {
        id: 'personal-projects',
        year: '2026 – Presente',
        title: 'Ingeniería de Software Freelance & Sistemas Distribuidos',
        subtitle: 'Sistemas Comerciales a Medida & Arquitecturas Distribuidas',
        description:
          'Actuación como ingeniero freelance en el desarrollo de la plataforma comercial Work-Fitness, aplicando Clean Architecture, pipelines CI/CD automatizados, nota 100/100 en Lighthouse y captación de leads. En paralelo, concepción y diseño de proyectos autorales de alta complejidad como FarmFlow y FleetOps, explorando mensajería con RabbitMQ, móvil Offline-First y microservicios distribuidos en Java 21 y .NET 10.',
        tag: 'FREELANCE & INGENIERÍA AUTORAL',
        highlighted: true,
      },
      {
        id: 'senai-faetec-instructor',
        year: 'Ago – Oct 2026',
        title: 'Instructor de Programación Back-End',
        subtitle: 'SENAI / FAETEC · Docencia en Formación Técnica',
        description:
          'Docencia en programación abarcando lógica de programación (JavaScript), bases de datos relacionales (PostgreSQL/DBeaver), POO en Java y desarrollo de APIs RESTful con Spring Boot, junto con la elaboración de material didáctico y mentoría técnica.',
        tag: 'DOCENCIA TÉCNICA',
        highlighted: true,
      },
      {
        id: 'serratec-residency',
        year: '2026',
        title: 'Residencia TIC/Software Serratec Full-Stack (790h)',
        subtitle: 'Serratec · Inmersión en Disciplinas Progresivas',
        description:
          'Residencia inmersiva de 790 horas en desarrollo de software abarcando Lógica, Bases de Datos, POO Java, APIs RESTful con Spring Boot, React, React Native, prácticas ágiles y entrega de proyecto final corporativo junto a Carl Zeiss Vision.',
        tag: 'RESIDENCIA INMERSIVA (790H) & ZEISS',
        highlighted: true,
      },
      {
        id: 'senac-python-fullstack',
        year: '2025 – 2026',
        title: 'Programación en Python (168h)',
        subtitle: 'Senac · Inmersión en Programación',
        description:
          'Capacitación práctica cubriendo Lógica de Programación, Python (Django) y Frontend Esencial (HTML5, CSS3, JavaScript) enfocada en la construcción de aplicaciones web funcionales.',
        tag: 'CAPACITACIÓN TÉCNICA (168H)',
      },
      {
        id: 'uece-tic-residency',
        year: '2025',
        title: 'Residencia TIC 12 | UECE (120h)',
        subtitle: 'Universidad Estatal de Ceará · Programa por Pistas',
        description:
          'Capacitación práctica en pistas de conocimiento enfocadas en Programación Orientada a Objetos (POO) en Java, Bases de Datos MySQL y Estructuras de Datos.',
        tag: 'RESIDENCIA TÉCNICA (120H)',
      },
      {
        id: 'dio-tech-bootcamp',
        year: '2025',
        title: 'Bootcamp Philips Fullstack Developer | You Are You (132h)',
        subtitle: 'Digital Innovation One (DIO) & Philips · Aceleración Práctica',
        description:
          'Pistas intensivas de aceleración cubriendo HTML, CSS, JavaScript, TypeScript, Angular, Java, Spring Boot y Bases de Datos (modelado relacional & SQL).',
        tag: 'BOOTCAMP PRÁCTICO (132H)',
      },
      {
        id: 'senac-frontend-dev',
        year: '2025',
        title: 'Desarrollador Frontend con IA (80h)',
        subtitle: 'Senac · Interfaces Web & React',
        description:
          'Capacitación práctica en HTML, CSS, JavaScript y React para construcción de interfaces modernas, responsivas y accesibles, aprovechando herramientas de IA para acelerar flujos de desarrollo.',
        tag: 'CAPACITACIÓN TÉCNICA (80H)',
      },
      {
        id: 'software-engineering-postgrad',
        year: '2024 – 2025',
        title: 'Posgrado en Ingeniería de Software',
        subtitle: 'Universidad Estácio · Especialización Técnica',
        description:
          'Profundización en arquitectura de software, patrones de diseño, desarrollo web moderno, calidad de código y ciclo de vida completo de aplicaciones.',
        tag: 'POSGRADO',
        highlighted: true,
      },
      {
        id: 'production-engineering-degree',
        year: '2017 – 2022',
        title: 'Licenciatura en Ingeniería de Producción',
        subtitle: 'Universidad Estácio · Licenciatura',
        description:
          'Desarrollo de pensamiento sistémico, optimización de procesos, análisis de causa raíz, metodología Lean y ciclo PDCA para la resolución de problemas complejos.',
        tag: 'GRADUACIÓN',
        highlighted: true,
      },
    ],
    currentFocus: {
      statusBadge: 'ESPECIALIZACIÓN CONTINUA & ESCALA',
      title: 'Profundización Técnica & Arquitectura',
      subtitle:
        'Especialización práctica continua en infraestructura cloud, mensajería orientada a eventos, persistencia de alto rendimiento y calidad automatizada.',
      items: [
        {
          id: 'docker-containerization',
          tech: 'Docker & Containerización',
          category: 'DevOps & Infraestructura',
          description:
            'Estandarización de entornos aislados, orquestación multi-contenedor con Docker Compose e imágenes multi-stage listas para producción.',
        },
        {
          id: 'aws-cloud',
          tech: 'AWS & Cloud Services',
          category: 'Arquitectura Cloud',
          description:
            'Profundización práctica en servicios AWS principales (EC2, S3, IAM, CloudFront, RDS) enfocada en infraestructura segura y observabilidad.',
        },
        {
          id: 'csharp-dotnet',
          tech: 'Ecosistema .NET 10 & Mensajería',
          category: 'Backend Enterprise',
          description:
            'Evolución en arquitecturas orientadas a eventos con C# 14, ASP.NET Core, EF Core, Transactional Outbox, RabbitMQ y OpenTelemetry.',
        },
        {
          id: 'nosql-databases',
          tech: 'NoSQL & Caching (MongoDB / Redis)',
          category: 'Persistencia & Alto Rendimiento',
          description:
            'Modelado de documentos con MongoDB y estrategias de caché en memoria con Redis para optimización de consultas y acceso de baja latencia.',
        },
        {
          id: 'automated-testing',
          tech: 'Ingeniería de Calidad & Carga (Playwright / Vitest / xUnit / k6)',
          category: 'Calidad & CI/CD',
          description:
            'Suites completas de pruebas unitarias, integración, regresión visual, accesibilidad y carga (k6) integradas en pipelines CI/CD.',
        },
      ],
    },
  },
};

export const EXPERIENCE_SECTION_DATA: ExperienceSectionData = EXPERIENCE_I18N['pt-BR'].sectionData;

export const EXPERIENCE_MILESTONES: readonly TimelineMilestone[] =
  EXPERIENCE_I18N['pt-BR'].milestones;

export function getExperienceData(lang: SupportedLang): ExperienceI18n {
  return EXPERIENCE_I18N[lang];
}
