import { Project } from './project.model';

export const PROJECTS_DATA: readonly Project[] = [
  {
    id: 'zeiss-recommendation-assistant',
    title: 'ZEISS Recommendation Assistant',
    category: 'Projeto Profissional (Confidencial)',
    featured: true,
    contextTag: 'Projeto Corporativo (NDA)',
    collaboration: 'Projeto colaborativo (11 desenvolvedores + PO + Scrum Master)',
    client: 'ZEISS Group',
    confidential: true,
    description:
      'Assistente web corporativo desenvolvido para apoiar especialistas comerciais na recomendação técnica de soluções de catálogo.',
    context:
      'Sistema corporativo desenvolvido durante a Residência Serratec em parceria com o ZEISS Group. Atuação em equipe ágil de 11 desenvolvedores no papel de desenvolvedor frontend e integração de serviços.',
    problem:
      'Especialistas comerciais da empresa necessitavam de um fluxo estruturado para consultar e recomendar soluções de catálogo de acordo com as especificações de cada cliente, reduzindo o tempo de pesquisa manual.',
    solution:
      'Assistente web de recomendação técnica que recebe os parâmetros informados pelo usuário, executa as regras de negócio definidas e indica as combinações adequadas de produtos.',
    development:
      'Desenvolvimento em equipe ágil com 11 desenvolvedores, Product Owner e Scrum Master. Atuei na implementação de interfaces frontend em React, componentização e consumo de serviços backend.',
    architectureDecisions: [
      'Frontend desenvolvido em React com TypeScript para componentização declarativa e tipagem de dados',
      'Backend construído em Java com Spring Boot e persistência de dados em banco relacional PostgreSQL',
      'Automação de fluxos de dados e integração entre serviços auxiliares utilizando n8n',
      'Organização do trabalho em sprints semanais seguindo a metodologia Scrum',
    ],
    highlights: [
      'Assistente inteligente de recomendação técnica',
      'Desenvolvimento Full Stack com React e Spring Boot',
      'Banco de dados relacional PostgreSQL',
      'Integrações automatizadas de fluxo via n8n',
      'Desenvolvimento em metodologia Scrum com time multidisciplinar',
    ],
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'n8n'],
    results:
      'Entrega de um sistema corporativo funcional respeitando acordos de confidencialidade (NDA). Consolidação de práticas de trabalho em equipe multidisciplinar e consumo de APIs em ambiente ágil.',
    links: {},
  },
  {
    id: 'spring-boot-ecommerce-api',
    title: 'Spring Boot E-Commerce API',
    category: 'Backend Java',
    featured: true,
    contextTag: 'Backend Java / REST API',
    collaboration: 'Projeto colaborativo',
    description:
      'API RESTful para ecossistema de e-commerce responsável pelo gerenciamento de produtos, controle de acesso e fluxo de compras.',
    context:
      'API RESTful para ecossistema de e-commerce desenvolvida de forma colaborativa durante a formação técnica na Residência Serratec.',
    problem:
      'Estruturar um serviço backend centralizado para gerenciar autenticação de usuários, permissões de acesso, catálogo de produtos e fluxo de processamento de pedidos.',
    solution:
      'API backend desenvolvida em Java 17 e Spring Boot 3 que disponibiliza endpoints HTTP para controle de acesso por perfil, gestão de categorias, produtos e pedidos.',
    development:
      'Projeto colaborativo desenvolvido utilizando arquitetura em camadas (Controller, Service, Repository, DTOs), isolando responsabilidades de negócio da persistência.',
    architectureDecisions: [
      'Arquitetura em camadas (Controller, Service, Repository, DTOs) garantindo a separação de responsabilidades',
      'Autenticação e autorização stateless baseadas em JSON Web Tokens (JWT) com Spring Security',
      'Mapeamento objeto-relacional com JPA / Hibernate e persistência em banco PostgreSQL',
      'Documentação da API com contratos OpenAPI 3 e interface interativa via Swagger UI',
    ],
    highlights: [
      'Autenticação e autorização via JWT',
      'Spring Security para controle de acesso por perfis (RBAC)',
      'Mapeamento e persistência com JPA/Hibernate e PostgreSQL',
      'Documentação interativa com Swagger/OpenAPI',
      'Endpoints RESTful para produtos, categorias, pedidos e usuários',
    ],
    technologies: [
      'Java 17',
      'Spring Boot 3',
      'Spring Security',
      'PostgreSQL',
      'JPA/Hibernate',
      'Swagger/OpenAPI',
    ],
    results:
      'Publicação de um serviço backend testado e documentado. Aprofundamento no controle de acessos sensíveis e padronização de respostas RESTful.',
    links: {
      github: 'https://github.com/DevYuriVieira/ecommerce-serratec-api',
    },
  },
  {
    id: 'django-ecommerce',
    title: 'Django Full-Stack E-Commerce',
    category: 'Full Stack Python/Django',
    featured: true,
    contextTag: 'Full-Stack Python',
    collaboration: 'Projeto pessoal',
    description:
      'Sistema e-commerce que aplica o ecossistema Django com autenticação, painel administrativo e processamento de eventos.',
    context:
      'Aplicação web e-commerce autoral desenvolvida para aplicar o ecossistema Python e o padrão MVT no desenvolvimento full-stack.',
    problem:
      'Construir uma plataforma de comércio eletrônico autônoma com gerenciamento de catálogo, autenticação de clientes e painel administrativo sem depender de serviços externos adicionais.',
    solution:
      'Sistema e-commerce completo com fluxo de navegação de produtos, carrinho de compras, checkout e área administrativa para gerenciamento de estoque e usuários.',
    development:
      'Projeto pessoal desenvolvido utilizando Django, PostgreSQL e APIs REST, priorizando organização modular de código e reutilização.',
    architectureDecisions: [
      'Arquitetura MVT estruturada em módulos independentes (sub-apps Django) para cada domínio da aplicação',
      'Mapeamento de dados e consultas relacionais estruturadas através do Django ORM com banco PostgreSQL',
      'Tratamento de notificações de pagamento via Webhooks com validação de dados',
      'Painel administrativo customizado utilizando Django Admin para controle operacional de produtos e usuários',
    ],
    highlights: [
      'Mapeamento objeto-relacional eficiente com Django ORM',
      'Painel administrativo nativo customizado com Django Admin',
      'Persistência relacional de dados com PostgreSQL',
      'Criação e consumo de REST APIs',
      'Processamento seguro e idempotente de Webhooks',
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'REST API', 'Webhooks'],
    results:
      'Entrega de uma aplicação full-stack pronta para execução local e servidor. Domínio prático do ciclo de requisições HTTP em Python e consumo seguro de Webhooks.',
    links: {
      github: 'https://github.com/DevYuriVieira/django-ecommerce',
    },
  },
  {
    id: 'fleet-management-system',
    title: 'Fleet Management System',
    category: 'Aplicação Frontend',
    featured: true,
    contextTag: 'Aplicação Frontend Operacional',
    collaboration: 'Projeto colaborativo',
    description:
      'Aplicação web para gestão operacional de frotas logísticas, permitindo acompanhamento de veículos e condutores.',
    context:
      'Aplicação web para gestão operacional de frotas logísticas desenvolvida colaborativamente com foco em usabilidade e controle de ativos.',
    problem:
      'Operadores logísticos precisavam de uma interface centralizada para monitorar status de veículos, cadastro de motoristas e disponibilidade de frotas sem atualizar a página.',
    solution:
      'Painel operacional em Single Page Application (SPA) com visualização em tempo real da frota, filtros por estado de conservação, cadastro de condutores e indicadores visuais.',
    development:
      'Projeto colaborativo utilizando React, TypeScript, Styled Components e arquitetura baseada em componentes reutilizáveis.',
    architectureDecisions: [
      'Interface construída com React e TypeScript para validação de tipos nos modelos de dados da frota',
      'Estilização modular e temas escopados utilizando a biblioteca Styled Components',
      'Roteamento interno declarativo entre visões de frota e formulários utilizando React Router',
      'Gerenciamento de estado de componentes locais para otimizar re-renderizações na interface',
    ],
    highlights: [
      'Componentização altamente reutilizável em React',
      'Tipagem estática com TypeScript',
      'Estilização modular com Styled Components',
      'Navegação declarativa com React Router',
      'Organização modular e interface responsiva',
    ],
    technologies: ['React', 'TypeScript', 'Styled Components', 'Vite'],
    results:
      'Implementação de um painel responsivo e funcional. Aprimoramento da componentização em React e organização de código frontend.',
    links: {
      github: 'https://github.com/DevYuriVieira/fleet-management-system',
      demo: 'https://fleet-management-system-chi.vercel.app/',
    },
  },
  {
    id: 'anime-weather-platform',
    title: 'Anime Weather Platform',
    category: 'Frontend + APIs + IA',
    featured: true,
    contextTag: 'Frontend & Integração com IA',
    collaboration: 'Projeto colaborativo (Pair Programming)',
    description:
      'Aplicação web que integra dados meteorológicos em tempo real e APIs de animes utilizando IA para recomendações dinâmicas.',
    context:
      'Aplicação web desenvolvida em formato de Pair Programming para integrar dados meteorológicos e APIs culturais alimentadas por inteligência artificial.',
    problem:
      'Combinar informações meteorológicas em tempo real e catálogos externos em uma única interface, gerando sugestões contextualizadas via modelo de linguagem.',
    solution:
      'Plataforma web que captura a localização do usuário, consome a temperatura atual e gera sugestões personalizadas de animes ajustadas ao clima via Google Gemini AI.',
    development:
      'Projeto desenvolvido em Pair Programming utilizando React, consumo de APIs REST e integração com a API do Google Gemini AI.',
    architectureDecisions: [
      'Consumo assíncrono de APIs externas (OpenWeather API para clima e Jikan API para dados de animes)',
      'Integração com a API do Google Gemini com Engenharia de Prompts estruturada para respostas em JSON',
      'Desenvolvimento do frontend com React, TypeScript e Vite para carregamento rápido de módulos',
      'Tratamento defensivo de requisições assíncronas com estados de carregamento e fallback em caso de falha de conexão',
    ],
    highlights: [
      'Recomendações técnicas via Google Gemini AI',
      'Dados climáticos em tempo real via OpenWeather API',
      'Consumo de dados culturais via Jikan API',
      'Engenharia de Prompts para respostas em formato JSON',
      'Gerenciamento de estado assíncrono com React Hooks',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'OpenWeather', 'Jikan API', 'Google Gemini AI'],
    results:
      'Aplicação publicada e funcional com integração de IA via API. Validação de fluxos assíncronos compostos e prática de Pair Programming.',
    links: {
      github: 'https://github.com/DevYuriVieira/anime-weather-platform',
    },
  },
  {
    id: 'payroll-system-java',
    title: 'Payroll System',
    category: 'Backend Java',
    contextTag: 'Backend Java',
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
    contextTag: 'Arquitetura Frontend SPA',
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
    contextTag: 'Frontend E-commerce',
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
    contextTag: 'Frontend React',
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
    contextTag: 'Banco de Dados Relacional',
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
    contextTag: 'Frontend UX Engineering',
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
