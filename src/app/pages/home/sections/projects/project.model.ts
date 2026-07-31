export interface ProjectLinks {
  readonly github?: string;
  readonly demo?: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly links: ProjectLinks;
  readonly image?: string;
}

export const PROJECTS_DATA: readonly Project[] = [
  {
    id: 'zeiss-recommendation-assistant',
    title: 'ZEISS Recommendation Assistant',
    description:
      'Ferramenta web de auxílio à tomada de decisão óptica para profissionais de saúde ocular, simplificando a recomendação de lentes de alta precisão.',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Clean Architecture'],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
  },
  {
    id: 'fleet-management-system',
    title: 'Fleet Management System',
    description:
      'Plataforma de gestão e rastreamento de frotas com monitoramento de veículos em tempo real, relatórios de telemetria e análise de rotas.',
    technologies: ['Angular', 'TypeScript', 'REST API', 'RxJS', 'Signals'],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
  },
  {
    id: 'spring-boot-ecommerce-api',
    title: 'Spring Boot E-Commerce API',
    description:
      'API RESTful robusta para e-commerce cobrindo catálogo de produtos, controle de estoque, gerenciamento de pedidos e autenticação JWT.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Docker'],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
  },
  {
    id: 'anime-weather-platform',
    title: 'Anime Weather Platform',
    description:
      'Aplicação web interativa que combina dados meteorológicos em tempo real de APIs públicas com temas visuais dinâmicos inspirados em animes.',
    technologies: ['TypeScript', 'Angular', 'REST API', 'SCSS', 'i18n'],
    links: {
      github: 'https://github.com/DevYuriVieira',
    },
  },
];
