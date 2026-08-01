import { Project } from './project.model';

export const PROJECTS_DATA: readonly Project[] = [
  {
    id: 'zeiss-recommendation-assistant',
    title: 'ZEISS Recommendation Assistant',
    description:
      'Projeto full-stack corporativo desenvolvido para cliente real (ZEISS) durante a Residência TIC Serratec. Solução orientada a regras de negócio com arquitetura resiliente, integrando frontend React, backend Spring Boot, banco PostgreSQL e automações com n8n.',
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'n8n'],
    links: {},
    confidential: true,
    category: 'Projeto Colaborativo Profissional',
  },
  {
    id: 'fleet-management-system',
    title: 'Fleet Management System',
    description:
      'Aplicação web para gerenciamento de frota corporativa desenvolvida com React e TypeScript, aplicando arquitetura modular em componentes, interface responsiva e organização baseada em boas práticas de engenharia de software.',
    technologies: ['React', 'TypeScript', 'Vite', 'Styled Components'],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
    confidential: false,
    category: 'Projeto Pessoal',
  },
  {
    id: 'spring-boot-ecommerce-api',
    title: 'Spring Boot E-Commerce API',
    description:
      'API RESTful completa de e-commerce desenvolvida durante a Residência Serratec, implementando autenticação e autorização com Spring Security, DTOs, Bean Validation, persistência JPA/Hibernate, documentação Swagger/OpenAPI e integração ViaCEP.',
    technologies: [
      'Java 17',
      'Spring Boot 3',
      'Spring Security',
      'PostgreSQL',
      'JPA/Hibernate',
      'Swagger/OpenAPI',
      'ViaCEP',
      'Spring Mail',
    ],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
    confidential: false,
    category: 'Projeto Colaborativo',
  },
  {
    id: 'anime-weather-platform',
    title: 'Anime Weather Platform',
    description:
      'Plataforma web que integra dados meteorológicos em tempo real, dados de animes e inteligência artificial (Google Gemini) para gerar recomendações personalizadas combinando clima atual e preferências do usuário.',
    technologies: ['React', 'TypeScript', 'Vite', 'OpenWeather API', 'Jikan API', 'Google Gemini SDK'],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
    confidential: false,
    category: 'Projeto Colaborativo',
  },
  {
    id: 'playstation-evolution-timeline',
    title: 'PlayStation Evolution Timeline',
    description:
      'Timeline interativa cobrindo os 30 anos da marca PlayStation, com animações fluidas utilizando Framer Motion, tipagem estrita TypeScript e pipeline automatizado de deploy via Vercel.',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Vite', 'Vercel', 'GitHub CI/CD'],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
    confidential: false,
    category: 'Projeto Pessoal',
  },
  {
    id: 'aurora-plataforma-evolucao',
    title: 'Aurora — Plataforma de Evolução Pessoal',
    description:
      'Aplicativo mobile desenvolvido em React Native e Expo com autenticação persistida, CRUD de metas, validação de dados com Zod, navegação avançada e armazenamento nativo seguro.',
    technologies: [
      'React Native',
      'TypeScript',
      'Expo',
      'React Navigation',
      'Context API',
      'AsyncStorage',
      'Zod',
    ],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
    confidential: false,
    category: 'Projeto Colaborativo',
  },
  {
    id: 'django-ecommerce',
    title: 'Django Full-Stack E-commerce',
    description:
      'Plataforma full-stack de e-commerce em Python/Django com autenticação de usuários, carrinho de compras, fluxo de pedidos, cupons, camada de serviços (Service Layer) e processamento de webhooks.',
    technologies: ['Python', 'Django', 'SQLite', 'JavaScript', 'REST API', 'Webhooks'],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
    confidential: false,
    category: 'Projeto Pessoal',
  },
];
