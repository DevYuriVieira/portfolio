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
      'Sistema corporativo desenvolvido durante a Residência Serratec em parceria com a ZEISS para apoiar especialistas comerciais na recomendação inteligente de soluções conforme as necessidades dos clientes.',
    context:
      'Sistema corporativo desenvolvido durante a Residência Serratec em parceria com a ZEISS para apoiar especialistas comerciais na recomendação inteligente de soluções conforme as necessidades dos clientes.',
    development:
      'Projeto profissional confidencial desenvolvido em equipe ágil com 11 desenvolvedores, Product Owner e Scrum Master. Atuei no desenvolvimento frontend e na integração entre serviços, respeitando regras de negócio proprietárias da empresa.',
    highlights: [
      'Assistente inteligente de recomendação',
      'Desenvolvimento Full Stack com React e Spring Boot',
      'Banco de dados relacional PostgreSQL',
      'Integrações automatizadas com n8n',
      'Desenvolvimento em metodologia Scrum',
      'Regras de negócio confidenciais',
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
      'API REST para plataforma de e-commerce responsável pela autenticação, gerenciamento de produtos, categorias e fluxo de compras.',
    context:
      'API REST para plataforma de e-commerce responsável pela autenticação, gerenciamento de produtos, categorias e fluxo de compras.',
    development:
      'Projeto colaborativo desenvolvido utilizando arquitetura em camadas, Spring Boot e Spring Security seguindo boas práticas REST.',
    highlights: [
      'Autenticação e autorização via JWT',
      'Spring Security para controle de acesso',
      'Mapeamento e persistência com JPA/Hibernate',
      'Banco de dados relacional PostgreSQL',
      'Documentação interativa com Swagger/OpenAPI',
      'Endpoints REST para produtos, categorias, pedidos e usuários',
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
      'Sistema completo de e-commerce desenvolvido para explorar o ecossistema Django com autenticação, administração e integração entre frontend e backend.',
    context:
      'Sistema completo de e-commerce desenvolvido para explorar o ecossistema Django com autenticação, administração e integração entre frontend e backend.',
    development:
      'Projeto pessoal desenvolvido utilizando Django, PostgreSQL e APIs REST, priorizando organização do código, reutilização e arquitetura escalável.',
    highlights: [
      'Mapeamento objeto-relacional com Django ORM',
      'Painel administrativo nativo com Django Admin',
      'Persistência de dados com PostgreSQL',
      'Criação e consumo de REST APIs',
      'Processamento seguro e idempotente de Webhooks',
      'Organização em apps reutilizáveis',
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
      'Sistema web para gestão operacional de frotas, permitindo acompanhamento de veículos, motoristas e indicadores de operação.',
    context:
      'Sistema web para gestão operacional de frotas, permitindo acompanhamento de veículos, motoristas e indicadores de operação.',
    development:
      'Projeto colaborativo utilizando React, TypeScript, Styled Components e arquitetura baseada em componentes reutilizáveis.',
    highlights: [
      'Componentização reutilizável em React',
      'Tipagem estática com TypeScript',
      'Estilização com Styled Components',
      'Navegação declarativa com React Router',
      'Organização modular e interface responsiva',
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
      'Aplicação que integra dados meteorológicos e informações de animes utilizando APIs públicas e inteligência artificial para recomendações contextualizadas.',
    context:
      'Aplicação que integra dados meteorológicos e informações de animes utilizando APIs públicas e inteligência artificial para recomendações contextualizadas.',
    development:
      'Projeto desenvolvido em Pair Programming utilizando React, consumo de APIs REST e integração com Google Gemini AI.',
    highlights: [
      'Recomendações inteligentes via Google Gemini AI',
      'Dados climáticos via OpenWeather API',
      'Consumo de dados de animes via Jikan API',
      'Engenharia de Prompts para contexto preciso',
      'Gerenciamento de estado com React Hooks',
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
      'Sistema backend para processamento automatizado de folha de pagamento desenvolvido como projeto final de Programação Orientada a Objetos.',
    context:
      'Sistema backend para processamento automatizado de folha de pagamento desenvolvido como projeto final de Programação Orientada a Objetos.',
    development:
      'Projeto colaborativo com quatro desenvolvedores utilizando arquitetura MVC + DAO, persistência JDBC e processamento de arquivos CSV.',
    highlights: [
      'Cálculo automático de INSS',
      'Cálculo automático de IRRF',
      'BigDecimal para precisão financeira',
      'Arquitetura em camadas com MVC + DAO',
      'Persistência de dados relacional via JDBC',
      'Leitura e processamento automatizado de arquivos CSV',
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
      'Single Page Application inspirada no universo Harry Potter construída sem frameworks para demonstrar domínio completo das APIs nativas do navegador.',
    context:
      'Single Page Application inspirada no universo Harry Potter construída sem frameworks para demonstrar domínio completo das APIs nativas do navegador.',
    development:
      'Projeto pessoal desenvolvido exclusivamente com Vanilla JavaScript utilizando ES Modules, renderização dinâmica e roteador SPA próprio.',
    highlights: [
      'SPA Router próprio sem frameworks',
      'Arquitetura modular baseada em ES Modules',
      'Renderização dinâmica de componentes no DOM',
      'Carregamento assíncrono com Intersection Observer',
      'Alternância de tema com Sistema Lumos/Nox',
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
      'E-commerce frontend para venda de pescados premium simulando uma experiência completa de compra sem backend tradicional.',
    context:
      'E-commerce frontend para venda de pescados premium simulando uma experiência completa de compra sem backend tradicional.',
    development:
      'Projeto colaborativo com quatro desenvolvedores utilizando Vanilla JavaScript, arquitetura modular e persistência client-side.',
    highlights: [
      'Painel administrativo para gerenciamento de produtos (CRUD)',
      'Carrinho de compras persistente via LocalStorage',
      'Simulação de backend assíncrono com MockAPI',
      'Busca automática de endereço via ViaCEP API',
      'Design responsivo estruturado em Mobile First',
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
      'Aplicação React criada para explorar arquitetura de componentes e experiências interativas através de um catálogo moderno de aeronaves militares.',
    context:
      'Aplicação React criada para explorar arquitetura de componentes e experiências interativas através de um catálogo moderno de aeronaves militares.',
    development:
      'Projeto pessoal desenvolvido utilizando React, Styled Components e React Router seguindo arquitetura baseada em componentes reutilizáveis.',
    highlights: [
      'Componentização reutilizável em React',
      'Comunicação entre componentes via Props',
      'Gerenciamento de estado com React Hooks',
      'Navegação declarativa com React Router',
      'Estilização modular com Styled Components',
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
      'Projeto de modelagem e implementação de banco de dados para gestão de clínicas odontológicas com foco em consistência e desempenho.',
    context:
      'Projeto de modelagem e implementação de banco de dados para gestão de clínicas odontológicas com foco em consistência e desempenho.',
    development:
      'Projeto colaborativo com seis desenvolvedores abrangendo levantamento de requisitos, modelagem conceitual, modelagem lógica e implementação em PostgreSQL.',
    highlights: [
      'Modelagem Conceitual de Dados (DER)',
      'Modelo Lógico Relacional',
      'Normalização de dados até a 3ª Forma Normal (3FN)',
      'Garantia de Integridade Referencial e Constraints',
      'Otimização de performance com Índices',
      'Criação de Views e consultas analíticas em SQL',
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
      'Protótipo de autenticação focado em UX Engineering utilizando personagens interativos que respondem dinamicamente às ações do usuário.',
    context:
      'Protótipo de autenticação focado em UX Engineering utilizando personagens interativos que respondem dinamicamente às ações do usuário.',
    development:
      'Projeto pessoal desenvolvido em React utilizando componentes reutilizáveis, CSS Modules e gerenciamento de estados para controlar animações em tempo real.',
    highlights: [
      'Rastreamento do cursor para animação dinâmica dos olhos',
      'Personagens reativos com estados animados',
      'Estilização escopada com CSS Modules',
      'Suporte a Dark Mode e alternância de temas',
      'Navegação entre fluxos com React Router',
    ],
    technologies: ['React', 'Vite', 'CSS Modules', 'React Router'],
    links: {
      github: 'https://github.com/DevYuriVieira/UXwebsite',
    },
  },
];
