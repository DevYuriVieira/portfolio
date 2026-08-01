import { Project } from './project.model';

export const PROJECTS_DATA: readonly Project[] = [
  {
    id: 'zeiss-recommendation-assistant',
    title: 'ZEISS Recommendation Assistant',
    description:
      'Aplicação web desenvolvida durante a Residência TIC Serratec para o Grupo ZEISS, auxiliando vendedores, óticas e gestores na recomendação de lentes através de fluxos assistidos por inteligência artificial.',
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'n8n'],
    links: {},
    confidential: true,
    category: 'Projeto Profissional Confidencial',
    client: 'ZEISS Group',
    highlights: [
      'Recomendação assistida por IA',
      'Preenchimento estruturado de prescrições',
      'Apoio à decisão no processo comercial',
      'Fluxos de atendimento otimizados',
    ],
  },
  {
    id: 'fleet-management-system',
    title: 'Fleet Management System',
    description:
      'Aplicação web para gerenciamento de frota corporativa desenvolvida com React e TypeScript, aplicando arquitetura modular em componentes, interface responsiva e organização baseada em boas práticas de engenharia de software.',
    technologies: ['React', 'TypeScript', 'Styled Components', 'Vite'],
    links: {
      github: 'https://github.com/DevYuriVieira/fleet-management-system',
    },
    confidential: false,
    category: 'Frontend Application',
  },
  {
    id: 'spring-boot-ecommerce-api',
    title: 'Spring Boot E-Commerce API',
    description:
      'API RESTful completa de e-commerce desenvolvida durante a Residência Serratec, implementando autenticação e autorização com Spring Security, DTOs, Bean Validation, persistência JPA/Hibernate e documentação Swagger/OpenAPI.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'PostgreSQL',
      'JPA/Hibernate',
      'Swagger/OpenAPI',
    ],
    links: {
      github: 'https://github.com/DevYuriVieira/ecommerce-serratec-api',
    },
    confidential: false,
    category: 'Backend / REST API',
  },
  {
    id: 'django-ecommerce',
    title: 'Django Full-Stack E-Commerce',
    description:
      'Plataforma full-stack de e-commerce em Python/Django com autenticação de usuários, carrinho de compras, fluxo de pedidos, gerenciamento de cupons e integração de REST API.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'REST API'],
    links: {
      github: 'https://github.com/DevYuriVieira/django-ecommerce',
    },
    confidential: false,
    category: 'Full Stack Application',
  },
  {
    id: 'playstation-evolution-timeline',
    title: 'PlayStation Evolution Timeline',
    description:
      'Timeline interativa cobrindo os 30 anos da marca PlayStation, com animações fluidas utilizando Framer Motion, tipagem estrita TypeScript e pipeline automatizado de deploy via Vercel.',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Vite', 'Vercel'],
    links: {
      github: 'https://github.com/DevYuriVieira/playstation-evolution-timeline',
      demo: 'https://playstation-evolution-timeline.vercel.app',
    },
    confidential: false,
    category: 'Creative Frontend Experience',
  },
  {
    id: 'anime-weather-platform',
    title: 'Anime Weather Platform',
    description:
      'Plataforma web que integra dados meteorológicos em tempo real, dados de animes e inteligência artificial (Google Gemini) para gerar recomendações personalizadas combinando clima atual e preferências do usuário.',
    technologies: ['React', 'TypeScript', 'Vite', 'OpenWeather API', 'Jikan API', 'Google Gemini AI'],
    links: {
      github: 'https://github.com/DevYuriVieira/anime-weather-platform',
    },
    confidential: false,
    category: 'Frontend + API Integration + AI',
  },
  {
    id: 'aurora-plataforma-evolucao',
    title: 'Aurora — Plataforma de Evolução Pessoal',
    description:
      'Aplicativo mobile desenvolvido em React Native e Expo com autenticação persistida, CRUD de metas, validação de dados com Zod, navegação avançada e armazenamento nativo seguro.',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'React Navigation',
      'Zod',
      'AsyncStorage',
    ],
    links: {
      github: 'https://github.com/DevYuriVieira/aurora-mobile',
    },
    confidential: false,
    category: 'Mobile Application',
  },
];

