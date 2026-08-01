import { Project } from './project.model';

export const PROJECTS_DATA: readonly Project[] = [
  {
    id: 'zeiss-recommendation-assistant',
    title: 'ZEISS Recommendation Assistant',
    category: 'Projeto Profissional (Confidencial)',
    collaboration: 'Projeto colaborativo (11 desenvolvedores + PO + Scrum Master)',
    client: 'ZEISS Group',
    confidential: true,
    description:
      'Solução de software desenvolvida para apoiar a tomada de decisão comercial através de recomendações assistidas e fluxos de informação estruturados.',
    context:
      'Solução de software desenvolvida para apoiar a tomada de decisão comercial através de recomendações assistidas e fluxos de informação estruturados.',
    development:
      'Projeto colaborativo desenvolvido por equipe multidisciplinar de 11 desenvolvedores, com Product Owner, Scrum Master e mentoria técnica. Construído seguindo metodologias ágeis com integração frontend/backend.',
    highlights: [
      'Recomendação assistida por IA',
      'Preenchimento estruturado de prescrições',
      'Apoio à decisão no processo comercial',
      'Fluxos de atendimento otimizados',
    ],
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'n8n'],
    links: {},
  },
  {
    id: 'spring-boot-ecommerce-api',
    title: 'Spring Boot E-Commerce API',
    category: 'Backend Java',
    collaboration: 'Projeto colaborativo',
    description:
      'API RESTful completa de e-commerce desenvolvida durante a Residência Serratec, contemplando autenticação, autorização, gerenciamento de produtos, categorias, clientes e fluxo completo de pedidos.',
    context:
      'API RESTful completa de e-commerce desenvolvida durante a Residência Serratec, contemplando autenticação, autorização, gerenciamento de produtos, categorias, clientes e fluxo completo de pedidos.',
    development:
      'Projeto colaborativo desenvolvido como projeto final da Residência TIC Serratec, aplicando arquitetura em camadas, validação rigorosa de dados e tratamento global de exceções.',
    highlights: [
      'Autenticação & Autorização com Spring Security',
      'Persistência relacional com JPA/Hibernate & PostgreSQL',
      'Validação de dados com Bean Validation & DTOs',
      'Documentação interativa com Swagger/OpenAPI',
      'Tratamento global de exceções e exceções customizadas',
    ],
    technologies: [
      'Java 17',
      'Spring Boot 3',
      'Spring Security',
      'PostgreSQL',
      'JPA/Hibernate',
      'Swagger/OpenAPI',
    ],
    links: {
      github: 'https://github.com/DevYuriVieira/ecommerce-serratec-api',
    },
  },
  {
    id: 'django-ecommerce',
    title: 'Django Full-Stack E-Commerce',
    category: 'Full Stack Python/Django',
    collaboration: 'Projeto pessoal',
    description:
      'Plataforma full-stack de e-commerce em Python/Django com autenticação de usuários, carrinho de compras, fluxo de pedidos, gerenciamento de cupons e integração de REST API.',
    context:
      'Plataforma full-stack de e-commerce em Python/Django com autenticação de usuários, carrinho de compras, fluxo de pedidos, gerenciamento de cupons e integração de REST API.',
    development:
      'Projeto pessoal focado em organização modular de rotas, segurança de sessão, regras de negócio isoladas na camada de serviço (Service Layer) e processamento idempotente de webhooks.',
    highlights: [
      'Camada de Serviços (Service Layer) para regras de negócio',
      'Fluxo de carrinho, cupons e processamento de pedidos',
      'Processamento seguro e idempotente de Webhooks',
      'Autenticação, autorização e gerenciamento de usuários',
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'REST API', 'Webhooks'],
    links: {
      github: 'https://github.com/DevYuriVieira/django-ecommerce',
    },
  },
  {
    id: 'fleet-management-system',
    title: 'Fleet Management System',
    category: 'Aplicação Frontend',
    collaboration: 'Projeto colaborativo',
    description:
      'Sistema web para gestão de frotas com foco em acompanhamento operacional de veículos, motoristas e indicadores.',
    context:
      'Sistema web para gestão de frotas com foco em acompanhamento operacional de veículos, motoristas e indicadores.',
    development:
      'Projeto colaborativo desenvolvido utilizando React e TypeScript com arquitetura baseada em componentes reutilizáveis, Styled Components e organização modular.',
    highlights: [
      'Componentização reutilizável',
      'Styled Components',
      'React Router',
      'Responsividade',
      'Arquitetura organizada',
    ],
    technologies: ['React', 'TypeScript', 'Styled Components', 'Vite'],
    links: {
      github: 'https://github.com/DevYuriVieira/fleet-management-system',
      demo: 'https://fleet-management-system-chi.vercel.app/',
    },
  },
  {
    id: 'anime-weather-platform',
    title: 'Anime Weather Platform',
    category: 'Frontend + APIs + IA',
    collaboration: 'Projeto colaborativo (Pair Programming)',
    description:
      'Aplicação que combina informações meteorológicas com dados de animes através de múltiplas APIs públicas e geração de recomendações utilizando IA.',
    context:
      'Aplicação que combina informações meteorológicas com dados de animes através de múltiplas APIs públicas e geração de recomendações utilizando IA.',
    development:
      'Projeto desenvolvido em Pair Programming integrando OpenWeather API, Jikan API e Google Gemini AI utilizando React.',
    highlights: [
      'Integração de múltiplas APIs',
      'Engenharia de prompts',
      'Consumo assíncrono',
      'Componentização React',
      'Fluxo orientado por estado',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'OpenWeather', 'Jikan API', 'Google Gemini AI'],
    links: {
      github: 'https://github.com/DevYuriVieira/anime-weather-platform',
    },
  },
  {
    id: 'payroll-system-java',
    title: 'Payroll System',
    category: 'Backend Java',
    collaboration: 'Projeto colaborativo (4 desenvolvedores)',
    description:
      'Sistema de folha de pagamento desenvolvido como projeto final de Programação Orientada a Objetos.',
    context:
      'Sistema de folha de pagamento desenvolvido como projeto final de Programação Orientada a Objetos.',
    development:
      'Projeto colaborativo com quatro desenvolvedores utilizando arquitetura MVC + DAO, persistência JDBC e processamento automatizado de arquivos CSV.',
    highlights: [
      'Cálculo automático de INSS e IRRF',
      'BigDecimal para cálculos monetários',
      'JDBC',
      'MVC + DAO',
      'Singleton',
      'Exceções customizadas',
    ],
    technologies: ['Java 17', 'PostgreSQL', 'JDBC', 'MVC', 'DAO'],
    links: {
      github: 'https://github.com/DevYuriVieira/payroll-system-java',
    },
  },
  {
    id: 'hogwarts-interactive-hub',
    title: 'Hogwarts Interactive Hub',
    category: 'Arquitetura Frontend',
    collaboration: 'Projeto pessoal',
    description:
      'SPA inspirada no universo Harry Potter construída sem frameworks para demonstrar domínio das APIs nativas do navegador e arquitetura modular.',
    context:
      'SPA inspirada no universo Harry Potter construída sem frameworks para demonstrar domínio das APIs nativas do navegador e arquitetura modular.',
    development:
      'Aplicação desenvolvida exclusivamente com Vanilla JavaScript utilizando ES Modules, renderização dinâmica e roteador SPA próprio.',
    highlights: [
      'SPA Router próprio',
      'Renderização dinâmica',
      'Intersection Observer',
      'LocalStorage',
      'CSS Variables',
      'ES Modules',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'ES Modules', 'LocalStorage'],
    links: {
      github: 'https://github.com/DevYuriVieira/Hogwarts-Interactive-Hub',
      demo: 'https://devyurivieira.github.io/Hogwarts-Interactive-Hub/',
    },
  },
  {
    id: 'kuro-seafood-ecommerce',
    title: 'Kuro Seafood',
    category: 'Frontend E-commerce',
    collaboration: 'Projeto colaborativo (4 desenvolvedores)',
    description:
      'E-commerce de pescados premium desenvolvido para simular uma aplicação comercial completa utilizando apenas tecnologias frontend.',
    context:
      'E-commerce de pescados premium desenvolvido para simular uma aplicação comercial completa utilizando apenas tecnologias frontend.',
    development:
      'Projeto colaborativo com quatro desenvolvedores construído em Vanilla JavaScript utilizando arquitetura modular, LocalStorage, MockAPI e integração com ViaCEP.',
    highlights: [
      'Dashboard administrativo CRUD',
      'Carrinho persistente',
      'LocalStorage',
      'MockAPI',
      'ViaCEP',
      'Mobile First',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Bootstrap', 'LocalStorage', 'REST APIs'],
    links: {
      github: 'https://github.com/DevYuriVieira/kuro-seafood-ecommerce',
      demo: 'https://kuro-seafood-ecommerce.vercel.app/',
    },
  },
  {
    id: 'modern-fighter-jets',
    title: 'Modern Fighter Jets',
    category: 'Frontend React',
    collaboration: 'Projeto pessoal',
    description:
      'Aplicação React criada para explorar componentização, gerenciamento de estado e interfaces responsivas através de um catálogo interativo de aeronaves.',
    context:
      'Aplicação React criada para explorar componentização, gerenciamento de estado e interfaces responsivas através de um catálogo interativo de aeronaves.',
    development:
      'Projeto desenvolvido utilizando React, React Router e Styled Components com foco em componentes reutilizáveis e arquitetura limpa.',
    highlights: [
      'Componentização reutilizável',
      'Sistema de favoritos',
      'Filtros dinâmicos',
      'React Router',
      'Styled Components',
    ],
    technologies: ['React', 'JavaScript', 'React Router', 'Styled Components', 'Vite'],
    links: {
      github: 'https://github.com/DevYuriVieira/modern-fighter-jets',
      demo: 'https://modern-fighter-jets.vercel.app/',
    },
  },
  {
    id: 'dental-clinic-db',
    title: 'Dental Clinic Management System',
    category: 'Banco de Dados Relacional',
    collaboration: 'Projeto colaborativo (6 desenvolvedores)',
    description:
      'Sistema de banco de dados para gestão de clínicas odontológicas com foco em integridade, normalização e desempenho das consultas.',
    context:
      'Sistema de banco de dados para gestão de clínicas odontológicas com foco em integridade, normalização e desempenho das consultas.',
    development:
      'Projeto colaborativo com seis desenvolvedores modelando todo o banco de dados desde o DER conceitual até a implementação em PostgreSQL.',
    highlights: [
      'Modelagem conceitual e lógica',
      'Normalização',
      'Integridade referencial',
      'Índices',
      'Views',
      'Consultas analíticas',
    ],
    technologies: ['PostgreSQL', 'SQL', 'DDL', 'DML', 'DQL'],
    links: {
      github: 'https://github.com/DevYuriVieira/dentacare-management-system',
    },
  },
  {
    id: 'interactive-auth-ui',
    title: 'Interactive Authentication UI',
    category: 'Frontend React',
    collaboration: 'Projeto pessoal',
    description:
      'Protótipo de interface de autenticação focado em UX interativa através de personagens que respondem às ações do usuário em tempo real.',
    context:
      'Protótipo de interface de autenticação focado em UX interativa através de personagens que respondem às ações do usuário em tempo real.',
    development:
      'Projeto desenvolvido em React utilizando componentes reutilizáveis, CSS Modules e gerenciamento de estado para controlar animações baseadas em eventos.',
    highlights: [
      'Rastreamento do cursor pelos olhos',
      'Estados animados',
      'CSS Modules',
      'Dark Mode',
      'React Router',
      'Componentização',
    ],
    technologies: ['React', 'Vite', 'CSS Modules', 'React Router'],
    links: {
      github: 'https://github.com/DevYuriVieira/UXwebsite',
    },
  },
];
