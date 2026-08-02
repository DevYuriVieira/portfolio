import { SupportedLang } from '@core';
import { Project } from './project.model';

const PROJECTS_I18N: Record<SupportedLang, readonly Project[]> = {
  'pt-BR': [
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
  ],
  en: [
    {
      id: 'zeiss-recommendation-assistant',
      title: 'ZEISS Recommendation Assistant',
      category: 'Professional Project (Confidential)',
      featured: true,
      contextTag: 'Corporate Project (NDA)',
      collaboration: 'Collaborative project (11 developers + PO + Scrum Master)',
      client: 'ZEISS Group',
      confidential: true,
      description:
        'Corporate web assistant built to support sales specialists in technical recommendation of catalog solutions.',
      context:
        'Corporate system developed during the Serratec Residency in partnership with the ZEISS Group. Worked in an agile team of 11 developers as a frontend developer and service integration.',
      problem:
        'Sales specialists needed a structured workflow to consult and recommend catalog solutions according to each client\'s specifications, reducing manual research time.',
      solution:
        'Technical recommendation web assistant that receives user-supplied parameters, executes defined business rules, and indicates the appropriate product combinations.',
      development:
        'Development in an agile team with 11 developers, Product Owner, and Scrum Master. I worked on frontend interface implementation in React, componentization, and backend service consumption.',
      architectureDecisions: [
        'Frontend built with React and TypeScript for declarative componentization and data typing',
        'Backend built with Java and Spring Boot with PostgreSQL relational database persistence',
        'Data flow automation and auxiliary service integration using n8n',
        'Work organized in weekly sprints following Scrum methodology',
      ],
      highlights: [
        'Intelligent technical recommendation assistant',
        'Full Stack development with React and Spring Boot',
        'PostgreSQL relational database',
        'Automated workflow integrations via n8n',
        'Scrum-based development with a multidisciplinary team',
      ],
      technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'n8n'],
      results:
        'Delivery of a functional corporate system respecting confidentiality agreements (NDA). Consolidated multidisciplinary teamwork practices and API consumption in an agile environment.',
      links: {},
    },
    {
      id: 'spring-boot-ecommerce-api',
      title: 'Spring Boot E-Commerce API',
      category: 'Backend Java',
      featured: true,
      contextTag: 'Backend Java / REST API',
      collaboration: 'Collaborative project',
      description:
        'RESTful API for an e-commerce ecosystem responsible for product management, access control, and purchase flow.',
      context:
        'RESTful API for an e-commerce ecosystem developed collaboratively during the Serratec Residency technical training.',
      problem:
        'Structure a centralized backend service to manage user authentication, access permissions, product catalog, and order processing flow.',
      solution:
        'Backend API built with Java 17 and Spring Boot 3 providing HTTP endpoints for role-based access control, category management, products, and orders.',
      development:
        'Collaborative project developed using layered architecture (Controller, Service, Repository, DTOs), isolating business responsibilities from persistence.',
      architectureDecisions: [
        'Layered architecture (Controller, Service, Repository, DTOs) ensuring separation of concerns',
        'Stateless authentication and authorization based on JSON Web Tokens (JWT) with Spring Security',
        'Object-relational mapping with JPA / Hibernate and PostgreSQL persistence',
        'API documentation with OpenAPI 3 contracts and interactive Swagger UI interface',
      ],
      highlights: [
        'JWT authentication and authorization',
        'Spring Security for role-based access control (RBAC)',
        'JPA/Hibernate mapping and persistence with PostgreSQL',
        'Interactive documentation with Swagger/OpenAPI',
        'RESTful endpoints for products, categories, orders, and users',
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
        'Published a tested and documented backend service. Deepened secure access control and standardized RESTful responses.',
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
      collaboration: 'Personal project',
      description:
        'E-commerce system leveraging the Django ecosystem with authentication, admin panel, and event processing.',
      context:
        'Original e-commerce web application developed to apply the Python ecosystem and MVT pattern in full-stack development.',
      problem:
        'Build a standalone e-commerce platform with catalog management, customer authentication, and admin panel without relying on additional external services.',
      solution:
        'Complete e-commerce system with product browsing, shopping cart, checkout, and admin area for inventory and user management.',
      development:
        'Personal project developed using Django, PostgreSQL, and REST APIs, prioritizing modular code organization and reusability.',
      architectureDecisions: [
        'MVT architecture structured in independent modules (Django sub-apps) for each application domain',
        'Data mapping and structured relational queries through Django ORM with PostgreSQL database',
        'Payment notification handling via Webhooks with data validation',
        'Customized admin panel using Django Admin for operational control of products and users',
      ],
      highlights: [
        'Efficient object-relational mapping with Django ORM',
        'Customized native admin panel with Django Admin',
        'Relational data persistence with PostgreSQL',
        'REST API creation and consumption',
        'Secure and idempotent Webhook processing',
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'REST API', 'Webhooks'],
      results:
        'Delivered a full-stack application ready for local and server execution. Practical mastery of the HTTP request cycle in Python and secure Webhook consumption.',
      links: {
        github: 'https://github.com/DevYuriVieira/django-ecommerce',
      },
    },
    {
      id: 'fleet-management-system',
      title: 'Fleet Management System',
      category: 'Frontend Application',
      featured: true,
      contextTag: 'Operational Frontend Application',
      collaboration: 'Collaborative project',
      description:
        'Web application for operational fleet management enabling vehicle and driver tracking.',
      context:
        'Web application for operational logistics fleet management developed collaboratively with a focus on usability and asset control.',
      problem:
        'Logistics operators needed a centralized interface to monitor vehicle status, driver registration, and fleet availability without refreshing the page.',
      solution:
        'Operational dashboard as a Single Page Application (SPA) with real-time fleet visualization, maintenance status filters, driver registration, and visual indicators.',
      development:
        'Collaborative project using React, TypeScript, Styled Components, and reusable component-based architecture.',
      architectureDecisions: [
        'Interface built with React and TypeScript for type validation in fleet data models',
        'Modular styling and scoped themes using the Styled Components library',
        'Declarative internal routing between fleet views and forms using React Router',
        'Local component state management to optimize interface re-renders',
      ],
      highlights: [
        'Highly reusable React componentization',
        'Static typing with TypeScript',
        'Modular styling with Styled Components',
        'Declarative navigation with React Router',
        'Modular organization and responsive interface',
      ],
      technologies: ['React', 'TypeScript', 'Styled Components', 'Vite'],
      results:
        'Implemented a responsive and functional dashboard. Enhanced React componentization and frontend code organization.',
      links: {
        github: 'https://github.com/DevYuriVieira/fleet-management-system',
        demo: 'https://fleet-management-system-chi.vercel.app/',
      },
    },
    {
      id: 'anime-weather-platform',
      title: 'Anime Weather Platform',
      category: 'Frontend + APIs + AI',
      featured: true,
      contextTag: 'Frontend & AI Integration',
      collaboration: 'Collaborative project (Pair Programming)',
      description:
        'Web application integrating real-time weather data and anime APIs using AI for dynamic recommendations.',
      context:
        'Web application developed in Pair Programming format to integrate weather data and AI-powered cultural APIs.',
      problem:
        'Combine real-time weather information and external catalogs in a single interface, generating contextualized suggestions via language model.',
      solution:
        'Web platform that captures user location, consumes current temperature, and generates personalized anime suggestions adjusted to weather conditions via Google Gemini AI.',
      development:
        'Project developed in Pair Programming using React, REST API consumption, and Google Gemini AI API integration.',
      architectureDecisions: [
        'Asynchronous external API consumption (OpenWeather API for weather and Jikan API for anime data)',
        'Google Gemini API integration with structured Prompt Engineering for JSON responses',
        'Frontend development with React, TypeScript, and Vite for fast module loading',
        'Defensive handling of async requests with loading states and connection failure fallback',
      ],
      highlights: [
        'Technical recommendations via Google Gemini AI',
        'Real-time weather data via OpenWeather API',
        'Cultural data consumption via Jikan API',
        'Prompt Engineering for JSON-formatted responses',
        'Asynchronous state management with React Hooks',
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'OpenWeather', 'Jikan API', 'Google Gemini AI'],
      results:
        'Published and functional application with AI integration via API. Validated composed async flows and Pair Programming practices.',
      links: {
        github: 'https://github.com/DevYuriVieira/anime-weather-platform',
      },
    },
    {
      id: 'payroll-system-java',
      title: 'Payroll System',
      category: 'Backend Java',
      contextTag: 'Backend Java',
      collaboration: 'Collaborative project (4 developers)',
      description:
        'Backend system for automated payroll processing developed as a final Object-Oriented Programming project.',
      context:
        'Backend system for automated payroll processing developed as a final Object-Oriented Programming project.',
      development:
        'Collaborative project with four developers using MVC + DAO architecture, JDBC persistence, and CSV file processing.',
      highlights: [
        'Automatic INSS (social security) calculation',
        'Automatic IRRF (income tax) calculation',
        'BigDecimal for financial precision',
        'Layered architecture with MVC + DAO',
        'Relational data persistence via JDBC',
        'Automated CSV file reading and processing',
      ],
      technologies: ['Java 17', 'PostgreSQL', 'JDBC', 'MVC', 'DAO'],
      links: {
        github: 'https://github.com/DevYuriVieira/payroll-system-java',
      },
    },
    {
      id: 'hogwarts-interactive-hub',
      title: 'Hogwarts Interactive Hub',
      category: 'Frontend Architecture',
      contextTag: 'Frontend SPA Architecture',
      collaboration: 'Personal project',
      description:
        'Single Page Application inspired by the Harry Potter universe built without frameworks to demonstrate complete mastery of native browser APIs.',
      context:
        'Single Page Application inspired by the Harry Potter universe built without frameworks to demonstrate complete mastery of native browser APIs.',
      development:
        'Personal project developed exclusively with Vanilla JavaScript using ES Modules, dynamic rendering, and a custom SPA router.',
      highlights: [
        'Custom SPA Router without frameworks',
        'Modular architecture based on ES Modules',
        'Dynamic DOM component rendering',
        'Lazy loading with Intersection Observer',
        'Theme switching with Lumos/Nox System',
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
      collaboration: 'Collaborative project (4 developers)',
      description:
        'Frontend e-commerce for premium seafood sales simulating a complete shopping experience without a traditional backend.',
      context:
        'Frontend e-commerce for premium seafood sales simulating a complete shopping experience without a traditional backend.',
      development:
        'Collaborative project with four developers using Vanilla JavaScript, modular architecture, and client-side persistence.',
      highlights: [
        'Admin panel for product management (CRUD)',
        'Persistent shopping cart via LocalStorage',
        'Asynchronous backend simulation with MockAPI',
        'Automatic address lookup via ViaCEP API',
        'Responsive design structured with Mobile First',
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
      collaboration: 'Personal project',
      description:
        'React application created to explore component architecture and interactive experiences through a modern military aircraft catalog.',
      context:
        'React application created to explore component architecture and interactive experiences through a modern military aircraft catalog.',
      development:
        'Personal project developed using React, Styled Components, and React Router following reusable component-based architecture.',
      highlights: [
        'Reusable React componentization',
        'Component communication via Props',
        'State management with React Hooks',
        'Declarative navigation with React Router',
        'Modular styling with Styled Components',
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
      category: 'Relational Database',
      contextTag: 'Relational Database',
      collaboration: 'Collaborative project (6 developers)',
      description:
        'Database modeling and implementation project for dental clinic management focusing on consistency and performance.',
      context:
        'Database modeling and implementation project for dental clinic management focusing on consistency and performance.',
      development:
        'Collaborative project with six developers covering requirements gathering, conceptual modeling, logical modeling, and PostgreSQL implementation.',
      highlights: [
        'Conceptual Data Modeling (ERD)',
        'Logical Relational Model',
        'Data normalization up to 3rd Normal Form (3NF)',
        'Referential Integrity and Constraints enforcement',
        'Performance optimization with Indexes',
        'View creation and analytical SQL queries',
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
      collaboration: 'Personal project',
      description:
        'Authentication prototype focused on UX Engineering using interactive characters that dynamically respond to user actions.',
      context:
        'Authentication prototype focused on UX Engineering using interactive characters that dynamically respond to user actions.',
      development:
        'Personal project developed in React using reusable components, CSS Modules, and state management for real-time animation control.',
      highlights: [
        'Cursor tracking for dynamic eye animation',
        'Reactive characters with animated states',
        'Scoped styling with CSS Modules',
        'Dark Mode support and theme switching',
        'Flow navigation with React Router',
      ],
      technologies: ['React', 'Vite', 'CSS Modules', 'React Router'],
      links: {
        github: 'https://github.com/DevYuriVieira/UXwebsite',
      },
    },
  ],
};

// Backward-compatible export
export const PROJECTS_DATA: readonly Project[] = PROJECTS_I18N['pt-BR'];

export function getProjectsData(lang: SupportedLang): readonly Project[] {
  return PROJECTS_I18N[lang];
}
