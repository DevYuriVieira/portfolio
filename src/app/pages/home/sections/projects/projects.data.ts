import { Project } from './project.model';

export const PROJECTS_DATA: readonly Project[] = [
  {
    id: 'zeiss-recommendation-assistant',
    title: 'ZEISS Recommendation Assistant',
    description:
      'Projeto full-stack desenvolvido para cliente real durante a Residência Serratec, integrando frontend React, backend Spring Boot, banco PostgreSQL e automações com n8n. Detalhes específicos do produto são restritos por confidencialidade.',
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'n8n'],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
  },
  {
    id: 'fleet-management-system',
    title: 'Fleet Management System',
    description:
      'Aplicação web para gerenciamento de frota desenvolvida com React e TypeScript, utilizando arquitetura componentizada, interface responsiva e organização baseada em boas práticas de frontend.',
    technologies: ['React', 'TypeScript', 'Vite', 'Styled Components'],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
  },
  {
    id: 'spring-boot-ecommerce-api',
    title: 'Spring Boot E-Commerce API',
    description:
      'API REST completa de e-commerce desenvolvida com Spring Boot, implementando autenticação e autorização com Spring Security, persistência com JPA/Hibernate, documentação Swagger/OpenAPI, integração ViaCEP e notificações por e-mail.',
    technologies: ['Java 17', 'Spring Boot 3', 'Spring Security', 'PostgreSQL', 'JPA/Hibernate', 'Swagger/OpenAPI', 'ViaCEP', 'Spring Mail'],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
  },
  {
    id: 'anime-weather-platform',
    title: 'Anime Weather Platform',
    description:
      'Plataforma React que integra dados meteorológicos, informações de animes e inteligência artificial para gerar recomendações personalizadas combinando clima e preferências do usuário.',
    technologies: ['React', 'TypeScript', 'Vite', 'OpenWeather API', 'Jikan API', 'Google Gemini SDK'],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
  },
  {
    id: 'playstation-evolution-timeline',
    title: 'PlayStation Evolution Timeline',
    description:
      'Timeline interativa cobrindo 30 anos da história do PlayStation, com animações utilizando Framer Motion, tipagem estrita em TypeScript e deploy automatizado via Vercel integrado ao GitHub.',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Vite', 'Vercel', 'GitHub CI/CD'],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
  },
  {
    id: 'aurora-plataforma-evolucao',
    title: 'Aurora — Plataforma de Evolução Pessoal',
    description:
      'Aplicativo mobile desenvolvido em React Native com autenticação persistida, CRUD de metas, navegação avançada, validação de formulários e integração com recursos nativos do dispositivo.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'React Navigation', 'Context API', 'AsyncStorage', 'Zod'],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
  },
  {
    id: 'django-ecommerce',
    title: 'Django Full-Stack E-commerce',
    description:
      'Plataforma full-stack de e-commerce desenvolvida com Django, incluindo autenticação, carrinho, pedidos, cupons, API REST e processamento de webhooks com segurança e consistência transacional.',
    technologies: ['Python', 'Django', 'SQLite', 'JavaScript', 'REST API', 'Webhooks'],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
  },
];
