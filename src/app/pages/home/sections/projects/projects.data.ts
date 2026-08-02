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
        'Plataforma web corporativa e MVP desenvolvido em parceria com o ZEISS Group para digitalizar, padronizar e otimizar o atendimento técnico e a recomendação de lentes em óticas.',
      context:
        'MVP corporativo desenvolvido em parceria com o ZEISS Group durante a Residência Serratec. Atuação em equipe ágil no desenvolvimento frontend em React, integração de IA e automação de fluxos de atendimento em óticas.',
      problem:
        'Entrada manual de receitas oftalmológicas complexas, recomendações de lentes dependentes do conhecimento individual de cada vendedor, tempo elevado de atendimento e falta de métricas de conversão e desempenho por loja.',
      solution:
        'Plataforma web integrada com OCR e pipeline de IA (n8n/RAG) para leitura automatizada de receitas, validação prévia de dados clínicos, recomendação personalizada de lentes ZEISS com base nos hábitos do paciente, gestão do ciclo de venda e dashboards de inteligência comercial em tempo real.',
      development:
        'Desenvolvimento em equipe ágil composta por 11 desenvolvedores, Product Owner e Scrum Master. Atuação direta na criação da interface em React com TypeScript, componentização modular, integração de pipelines de IA (n8n/RAG) e consumo de APIs backend com controle de acesso por perfil (RBAC).',
      architectureDecisions: [
        'Leitura automatizada de receitas médicas via OCR integrado a pipeline de IA com n8n e RAG',
        'Validação prévia dos dados clínicos extraídos com interface de confirmação antes do processamento',
        'Motor de recomendação que cruza especificações clínicas da receita com perfil de uso e hábitos do paciente',
        'Gestão de todo o ciclo de atendimento, da recomendação até a confirmação ou cancelamento da venda',
        'Dashboards analíticos com indicadores de conversão, produtos mais recomendados e desempenho de filiais',
        'Autenticação segura JWT com Controle de Acesso por Perfis (RBAC) e módulos de gestão administrativa',
      ],
      highlights: [
        'Leitura automatizada de receitas com OCR e IA (n8n / RAG)',
        'Recomendação inteligente de lentes por perfil clínico e hábitos',
        'Dashboards comerciais e métricas de conversão em tempo real',
        'Autenticação JWT e Controle de Acesso por Perfis (RBAC)',
        'Desenvolvimento Full Stack com React, Spring Boot e PostgreSQL',
      ],
      technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'n8n', 'OCR', 'RAG / IA'],
      results:
        'Redução significativa no tempo de interpretação de receitas, eliminação de inconsistências na recomendação técnica, diminuição de erros de preenchimento e geração de inteligência de negócio em tempo real para a ZEISS.',
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
        'Estruturar um serviço backend centralizado para gerenciar autenticação de usuários, permissões de acesso por perfil, catálogo de produtos e fluxo seguro de processamento de pedidos.',
      solution:
        'API RESTful desenvolvida em Java 17 e Spring Boot 3 que disponibiliza endpoints HTTP para controle de acesso stateless via JWT com Spring Security, gestão de categorias, produtos e processamento de pedidos.',
      development:
        'Projeto colaborativo desenvolvido utilizando arquitetura em camadas (Controller, Service, Repository, DTOs), isolando responsabilidades de negócio da persistência.',
      architectureDecisions: [
        'Arquitetura em camadas (Controller, Service, Repository, DTOs) garantindo a separação estrita de responsabilidades',
        'Autenticação e autorização stateless baseadas em JSON Web Tokens (JWT) com Spring Security 6',
        'Mapeamento objeto-relacional com JPA / Hibernate e persistência em banco PostgreSQL',
        'Documentação interativa da API baseada em contratos OpenAPI 3 via Swagger UI',
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
        'Publicação de um serviço backend seguro e documentado, estabelecendo padronização de respostas RESTful e controle rigoroso de autorizações sensíveis.',
      links: {
        github: 'https://github.com/DevYuriVieira/ecommerce-serratec-api',
      },
    },
    {
      id: 'aurora-growth-platform',
      title: 'Aurora | Plataforma de Evolução Pessoal',
      category: 'Mobile React Native',
      featured: true,
      contextTag: 'App Mobile React Native / Expo',
      collaboration: 'Projeto colaborativo (6 desenvolvedores - Projeto Final Multiplataformas Serratec)',
      description:
        'Aplicativo mobile em React Native/Expo SDK 54 para acompanhamento de metas pessoais, mentorias e comunidades, com 3 padrões de navegação, formulários Zod e recursos nativos.',
      context:
        'Aplicativo mobile multiplataforma autoral desenvolvido como projeto final da Residência Serratec para gestão de desenvolvimento pessoal.',
      problem:
        'Oferecer uma experiência mobile intuitiva e centralizada para acompanhamento de metas pessoais, mentorias e comunidades com validação rigorosa de formulários, geolocalização e persistência local.',
      solution:
        'Aplicativo mobile React Native/Expo SDK 54 combinando 3 padrões de navegação (Drawer, Stack, Tabs), validação declarativa com React Hook Form + Zod, recursos nativos de câmera/geolocalização e check-in via QR Code.',
      development:
        'Desenvolvimento colaborativo utilizando TypeScript, AsyncStorage para persistência local, Expo Secure Store para credenciais e React Navigation.',
      architectureDecisions: [
        'Combinação de 3 padrões de navegação em um só aplicativo (Drawer, Stack e Tabs) via React Navigation',
        'Validação defensiva de formulários integrando React Hook Form com esquemas Zod',
        'Acesso a recursos nativos do dispositivo: câmera, galeria, geolocalização (Expo Location) e scanner de QR Code',
        'Persistência de sessão local via AsyncStorage e armazenamento de dados sensíveis via Expo Secure Store',
      ],
      highlights: [
        'App React Native / Expo SDK 54',
        'Três padrões de navegação integrados (Drawer, Stack, Tabs)',
        'Validação de formulários com React Hook Form + Zod',
        'Geolocalização, Câmera nativa e Leitor QR Code',
        'Persistência local com AsyncStorage e Expo Secure Store',
      ],
      technologies: ['React Native', 'Expo SDK 54', 'TypeScript', 'React Navigation', 'Zod', 'AsyncStorage'],
      results:
        'Entrega do aplicativo multiplataforma como projeto final aprovado com 100% de conformidade técnica, integrando hardware nativo e validação defensiva.',
      links: {
        github: 'https://github.com/DevYuriVieira/aurora-growth-platform',
      },
    },
    {
      id: 'playstation-evolution-timeline',
      title: 'PlayStation Evolution Timeline',
      category: 'Frontend React & Motion',
      featured: true,
      contextTag: 'App em Produção (Vercel)',
      collaboration: 'Projeto pessoal',
      description:
        'Timeline interativa cobrindo 30 anos de hardware da PlayStation (PS1 ao PS5 Pro), construída com Framer Motion em TypeScript e publicada no Vercel com CI/CD.',
      context:
        'Aplicação web em produção no Vercel desenvolvida para praticar animação, motion design e arquitetura de componentes em TypeScript com tipagem estrita.',
      problem:
        'Apresentar 30 anos de evolução de hardware e especificações técnicas da linha PlayStation (PS1 ao PS5 Pro) através de uma experiência interativa, fluida e responsiva sem gargalos de animação.',
      solution:
        'Timeline interativa construída em React, Vite e TypeScript, animada declarativamente com Framer Motion e com pipeline de deploy contínuo (CI/CD) integrado no Vercel.',
      development:
        'Projeto autoral desenvolvido com React, Vite e TypeScript, mantendo 100% de estabilidade e sem erros em produção desde o lançamento.',
      architectureDecisions: [
        'Componentização declarativa em React com TypeScript para tipagem estrita de dados de hardware',
        'Motion design avançado de alta performance com animações parametrizadas via Framer Motion',
        'Deploy automático e contínuo (CI/CD) integrado ao repositório GitHub via Vercel',
        'Design 100% responsivo otimizado para navegação mobile e desktop',
      ],
      highlights: [
        'Aplicação em Produção no Vercel',
        'Timeline cobrindo 30 anos de consoles PlayStation',
        'Motion design avançado com Framer Motion',
        'Deploy automático CI/CD a cada commit na main',
        'Arquitetura em TypeScript com tipagem estrita',
      ],
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Vite', 'Vercel CI/CD'],
      results:
        'Aplicação publicada no Vercel com 100% de estabilidade desde o lançamento, demonstrando capacidade técnica em motion design e esteira automatizada de publicação.',
      links: {
        github: 'https://github.com/DevYuriVieira',
        demo: 'https://playstation-evolution-timeline.vercel.app',
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
        'Cruzamento em tempo real de variáveis atmosféricas locais com catálogos culturais e modelos de inteligência artificial para gerar recomendações contextualizadas dinamicamente.',
      solution:
        'Plataforma web que obtém o clima local do usuário via OpenWeather API, consome catálogos culturais via Jikan API e gera sugestões personalizadas através do Google Gemini AI SDK.',
      development:
        'Projeto desenvolvido em Pair Programming utilizando React, consumo de APIs REST e integração com a API do Google Gemini AI.',
      architectureDecisions: [
        'Consumo assíncrono de APIs externas (OpenWeather API para clima e Jikan API para dados de animes)',
        'Integração contextual com o Google Gemini AI SDK utilizando Engenharia de Prompts estruturada para JSON',
        'Desenvolvimento do frontend em React, TypeScript e Vite com componentes glassmorphism reutilizáveis',
        'Tratamento defensivo de requisições assíncronas com estados de loading e fallbacks de reconexão',
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
        'Aplicação publicada e funcional com inteligência artificial integrada, validando fluxos assíncronos compostos e consumo otimizado de LLMs via SDK.',
      links: {
        github: 'https://github.com/DevYuriVieira/anime-weather-platform',
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
        'Construir um ecossistema de e-commerce completo com controle de produtos, autenticação, carrinho, checkout e processamento assíncrono de pagamentos resiliente a requisições duplicadas.',
      solution:
        'Aplicação web full-stack autoral em Python e Django com arquitetura MVT, ORM relacional no PostgreSQL, painel administrativo customizado e tratamento idempotente de Webhooks.',
      development:
        'Projeto pessoal desenvolvido utilizando Django, PostgreSQL e APIs REST, priorizando organização modular de código e reutilização.',
      architectureDecisions: [
        'Arquitetura MVT organizada em módulos independentes (sub-apps Django) para isolar domínios',
        'Processamento de pagamentos com Webhooks idempotentes e transações atômicas no banco de dados',
        'Painel administrativo nativo altamente customizado com Django Admin para controle operacional',
        'Camada frontend em Vanilla JS com gerenciador de estado próprio e proteção ativa contra CSRF/XSS',
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
        'Entrega de uma aplicação full-stack pronta para produção com processamento transacional seguro de eventos e controle administrativo de catálogo.',
      links: {
        github: 'https://github.com/DevYuriVieira/django-ecommerce',
      },
    },
    {
      id: 'payroll-system-java',
      title: 'Sistema de Folha de Pagamento',
      category: 'Backend Java',
      featured: false,
      contextTag: 'Backend Java / Arquitetura MVC+DAO',
      collaboration: 'Projeto colaborativo (4 desenvolvedores - Projeto Final POO Serratec)',
      description:
        'Sistema backend em Java 17 para cálculo automatizado de INSS e IRRF conforme a legislação brasileira, utilizando JDBC puro sem ORM em arquitetura em camadas MVC + DAO.',
      context:
        'Sistema backend de alta precisão financeira desenvolvido de forma colaborativa como projeto final da disciplina de Programação Orientada a Objetos da Residência Serratec.',
      problem:
        'Processar dados de funcionários e realizar cálculos tributários/previdenciários complexos (INSS e IRRF) com precisão financeira exata sem o uso de frameworks ORM.',
      solution:
        'Sistema backend em Java 17 com arquitetura em camadas MVC + DAO e persistência JDBC pura no PostgreSQL, calculando INSS/IRRF conforme tabelas oficiais.',
      development:
        'Desenvolvimento em equipe ágil aplicando BigDecimal em todos os cálculos financeiros, padrão Singleton no gerenciador de conexões e exceções customizadas de domínio.',
      architectureDecisions: [
        'Arquitetura em camadas MVC + DAO sem frameworks ORM para reforçar conceitos fundamentais de SQL e POO',
        'Utilização de BigDecimal em todas as operações tributárias para evitar imprecisões de ponto flutuante',
        'Gerenciador de conexão com banco relacional baseado no padrão de projeto Singleton',
        'Leitura automatizada e parsing defensivo de arquivos CSV com exceções de domínio customizadas',
      ],
      highlights: [
        'Cálculo automático de INSS e IRRF conforme legislação',
        'Precisão financeira exata com BigDecimal',
        'Arquitetura em camadas MVC + DAO sem ORM',
        'Persistência relacional via JDBC puro no PostgreSQL',
        'Leitura automatizada de arquivos CSV e Singleton Pattern',
      ],
      technologies: ['Java 17', 'PostgreSQL', 'JDBC', 'MVC', 'DAO', 'BigDecimal'],
      results:
        'Sistema backend de alta confiabilidade tributária testado e funcional, garantindo precisão monetária de centavos em folhas de pagamento em massa.',
      links: {
        github: 'https://github.com/DevYuriVieira/payroll-system-java',
      },
    },
    {
      id: 'fleet-management-system',
      title: 'Fleet Management System',
      category: 'Aplicação Frontend',
      featured: false,
      contextTag: 'Frontend Operacional Logístico',
      collaboration: 'Projeto colaborativo',
      description:
        'Aplicação web para gestão operacional de frotas logísticas, permitindo acompanhamento de veículos e condutores.',
      context:
        'Aplicação web para gestão operacional de frotas logísticas desenvolvida colaborativamente com foco em usabilidade e controle de ativos.',
      problem:
        'Operadores logísticos necessitavam de uma interface centralizada para monitorar status de veículos, condutores e disponibilidade de frotas sem recarregar a página.',
      solution:
        'Painel operacional Single Page Application (SPA) em React e TypeScript com filtragem dinâmica por conservação, formulários de motoristas e indicadores visuais.',
      development:
        'Projeto colaborativo utilizando React, TypeScript, Styled Components e arquitetura baseada em componentes reutilizáveis.',
      architectureDecisions: [
        'Construção de SPA reativa em React com TypeScript para validação de esquemas de frota',
        'Estilização modular e temas escopados utilizando a biblioteca Styled Components',
        'Roteamento declarativo cliente-side entre visões de frota e formulários com React Router',
        'Componentização modular reutilizável focada em performance e usabilidade operacional',
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
        'Painel operacional publicado no Vercel com navegação fluida em tempo real e gerenciamento eficiente de estados da frota.',
      links: {
        github: 'https://github.com/DevYuriVieira/fleet-management-system',
        demo: 'https://fleet-management-system-chi.vercel.app/',
      },
    },
    {
      id: 'hogwarts-interactive-hub',
      title: 'Hogwarts Interactive Hub',
      category: 'Arquitetura Frontend',
      featured: false,
      contextTag: 'Frontend Vanilla JS',
      collaboration: 'Projeto pessoal',
      description:
        'Single Page Application inspirada no universo Harry Potter construída sem frameworks para demonstrar domínio completo das APIs nativas do navegador.',
      context:
        'Single Page Application inspirada no universo Harry Potter construída sem frameworks para demonstrar domínio completo das APIs nativas do navegador.',
      problem:
        'Demonstrar domínio avançado de APIs nativas do navegador construindo uma SPA rica e temática sem utilizar nenhum framework como React ou Angular.',
      solution:
        'Single Page Application interativa inspirada no universo Harry Potter desenvolvida exclusivamente em Vanilla JS com ES Modules e um roteador SPA autoral.',
      development:
        'Projeto pessoal desenvolvido exclusivamente com Vanilla JavaScript utilizando ES Modules, renderização dinâmica e roteador SPA próprio.',
      architectureDecisions: [
        'Roteador SPA autoral desenvolvido do zero em Vanilla JavaScript',
        'Arquitetura modular orientada a ES Modules com manipulação nativa do DOM',
        'Carregamento assíncrono de elementos visuais com a API Intersection Observer',
        'Gerenciamento de tema dinâmico (Lumos/Nox) persistido no LocalStorage',
      ],
      highlights: [
        'SPA Router próprio sem frameworks',
        'Arquitetura modular baseada em ES Modules',
        'Renderização dinâmica de componentes no DOM',
        'Carregamento assíncrono com Intersection Observer',
        'Alternância de tema com Sistema Lumos/Nox',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'ES Modules', 'LocalStorage'],
      results:
        'Aplicação interativa publicada no GitHub Pages demonstrando domínio absoluto do ecossistema JavaScript Vanilla e controle direto da DOM API.',
      links: {
        github: 'https://github.com/DevYuriVieira/Hogwarts-Interactive-Hub',
        demo: 'https://devyurivieira.github.io/Hogwarts-Interactive-Hub/',
      },
    },
    {
      id: 'kuro-seafood-ecommerce',
      title: 'Kuro Seafood E-Commerce',
      category: 'Frontend E-commerce',
      featured: false,
      contextTag: 'E-Commerce Frontend',
      collaboration: 'Projeto colaborativo (4 desenvolvedores)',
      description:
        'E-commerce frontend para venda de pescados premium simulando uma experiência completa de compra sem backend tradicional.',
      context:
        'E-commerce frontend para venda de pescados premium simulando uma experiência completa de compra sem backend tradicional.',
      problem:
        'Simular uma experiência completa de e-commerce de produtos marítimos premium no navegador sem dependência de um servidor backend tradicional.',
      solution:
        'Interface de e-commerce com catálogo responsivo, carrinho de compras cliente-side, checkout simulado via MockAPI e busca automática de CEP via ViaCEP API.',
      development:
        'Projeto colaborativo com quatro desenvolvedores utilizando Vanilla JavaScript, arquitetura modular e persistência client-side.',
      architectureDecisions: [
        'Persistência local do carrinho de compras e preferências do usuário utilizando LocalStorage',
        'Simulação de serviço backend assíncrono para CRUD de produtos utilizando MockAPI',
        'Integração assíncrona com a ViaCEP API para autocompletar endereços de entrega',
        'Estruturação visual com Bootstrap e CSS3 seguindo abordagem Mobile First',
      ],
      highlights: [
        'Painel administrativo para gerenciamento de produtos (CRUD)',
        'Carrinho de compras persistente via LocalStorage',
        'Simulação de backend assíncrono com MockAPI',
        'Busca automática de endereço via ViaCEP API',
        'Design responsivo estruturado em Mobile First',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Bootstrap', 'LocalStorage', 'REST APIs'],
      results:
        'Plataforma de e-commerce client-side publicada no Vercel simulando com fidelidade a jornada de compra completa de um cliente final.',
      links: {
        github: 'https://github.com/DevYuriVieira/kuro-seafood-ecommerce',
        demo: 'https://kuro-seafood-ecommerce.vercel.app/',
      },
    },
    {
      id: 'modern-fighter-jets',
      title: 'Modern Fighter Jets',
      category: 'Frontend React',
      featured: false,
      contextTag: 'Frontend React Interativo',
      collaboration: 'Projeto pessoal',
      description:
        'Aplicação React criada para explorar arquitetura de componentes e experiências interativas através de um catálogo moderno de aeronaves militares.',
      context:
        'Aplicação React criada para explorar arquitetura de componentes e experiências interativas através de um catálogo moderno de aeronaves militares.',
      problem:
        'Criar uma experiência imersiva e responsiva para consulta de especificações técnicas de aeronaves militares utilizando arquitetura de componentes moderna.',
      solution:
        'Catálogo interativo em React e Styled Components com filtros por país, navegação declarativa com React Router e galeria de dados técnicos.',
      development:
        'Projeto pessoal desenvolvido utilizando React, Styled Components e React Router seguindo arquitetura baseada em componentes reutilizáveis.',
      architectureDecisions: [
        'Arquitetura baseada em componentes reutilizáveis em React com transmissão limpa de props',
        'Estilização escopada e dinâmica utilizando Styled Components',
        'Roteamento cliente-side declarativo para detalhes de aeronaves via React Router',
        'Gerenciamento de estado local com React Hooks para filtragem em tempo real',
      ],
      highlights: [
        'Componentização reutilizável em React',
        'Comunicação entre componentes via Props',
        'Gerenciamento de estado com React Hooks',
        'Navegação declarativa com React Router',
        'Estilização modular com Styled Components',
      ],
      technologies: ['React', 'JavaScript', 'React Router', 'Styled Components', 'Vite'],
      results:
        'Aplicação web publicada no Vercel com carregamento instantâneo via Vite e visualização adaptativa para telas mobile e desktop.',
      links: {
        github: 'https://github.com/DevYuriVieira/modern-fighter-jets',
        demo: 'https://modern-fighter-jets.vercel.app/',
      },
    },
    {
      id: 'dental-clinic-db',
      title: 'Dental Clinic Management System',
      category: 'Banco de Dados Relacional',
      featured: false,
      contextTag: 'Modelagem de Banco de Dados',
      collaboration: 'Projeto colaborativo (6 desenvolvedores)',
      description:
        'Projeto de modelagem e implementação de banco de dados para gestão de clínicas odontológicas com foco em consistência e desempenho.',
      context:
        'Projeto de modelagem e implementação de banco de dados para gestão de clínicas odontológicas com foco em consistência e desempenho.',
      problem:
        'Estruturar o modelo relacional de uma clínica odontológica com consultas complexas, garantindo integridade referencial e normalização até a 3ª Forma Normal (3FN).',
      solution:
        'Projeto completo de banco de dados em PostgreSQL englobando modelo conceitual (DER), modelo lógico relacional, restrições de integridade, índices e views analíticas.',
      development:
        'Projeto colaborativo com seis desenvolvedores abrangendo levantamento de requisitos, modelagem conceitual, modelagem lógica e implementação em PostgreSQL.',
      architectureDecisions: [
        'Modelagem conceitual e lógica detalhada garantindo normalização rigorosa até a 3FN',
        'Criação de restrições (Constraints), chaves primárias/estrangeiras e regras de validação DDL',
        'Criação de índices para otimização de buscas em tabelas de consultas e prontuários',
        'Desenvolvimento de Views analíticas em SQL para relatórios de faturamento e agendamentos',
      ],
      highlights: [
        'Modelagem Conceitual de Dados (DER)',
        'Modelo Lógico Relacional',
        'Normalização de dados até a 3ª Forma Normal (3FN)',
        'Garantia de Integridade Referencial e Constraints',
        'Otimização de performance com Índices',
        'Criação de Views e consultas analíticas em SQL',
      ],
      technologies: ['PostgreSQL', 'SQL', 'DDL', 'DML', 'DQL'],
      results:
        'Esquema de banco de dados PostgreSQL validado e otimizado para alta consistência e resposta rápida em consultas relacionais complexas.',
      links: {
        github: 'https://github.com/DevYuriVieira/dentacare-management-system',
      },
    },
    {
      id: 'interactive-auth-ui',
      title: 'Interactive Authentication UI',
      category: 'Frontend React',
      featured: false,
      contextTag: 'UX Engineering & Motion',
      collaboration: 'Projeto pessoal',
      description:
        'Protótipo de autenticação focado em UX Engineering utilizando personagens interativos que respondem dinamicamente às ações do usuário.',
      context:
        'Protótipo de autenticação focado em UX Engineering utilizando personagens interativos que respondem dinamicamente às ações do usuário.',
      problem:
        'Transformar telas tradicionais de login em experiências dinâmicas e envolventes que aumentem a retenção do usuário através de UX Engineering.',
      solution:
        'Protótipo de autenticação reativo em React com personagens interativos que acompanham o movimento do cursor e reagem ao foco e digitação nos campos.',
      development:
        'Projeto pessoal desenvolvido em React utilizando componentes reutilizáveis, CSS Modules e gerenciamento de estados para controlar animações em tempo real.',
      architectureDecisions: [
        'Rastreamento em tempo real da posição do cursor para animação dos elementos visuais dos personagens',
        'Gerenciamento de estados em React para alternar expressões faciais conforme o status dos inputs',
        'Estilização escopada e isolada utilizando CSS Modules com suporte a Dark Mode',
        'Navegação entre fluxos de login e recuperação de senha com React Router',
      ],
      highlights: [
        'Rastreamento do cursor para animação dinâmica dos olhos',
        'Personagens reativos com estados animados',
        'Estilização escopada com CSS Modules',
        'Suporte a Dark Mode e alternância de temas',
        'Navegação entre fluxos com React Router',
      ],
      technologies: ['React', 'Vite', 'CSS Modules', 'React Router'],
      results:
        'Protótipo de UX publicado no Vercel demonstrando técnicas avançadas de interação com a interface e engenharia de experiência do usuário.',
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
        'Corporate web platform and MVP developed in partnership with the ZEISS Group to digitize, standardize, and optimize technical service and lens recommendations in optical stores.',
      context:
        'Corporate MVP developed in partnership with the ZEISS Group during the Serratec Residency. Worked in an agile team on React frontend development, AI pipeline integration, and sales workflow automation.',
      problem:
        'Manual entry of complex ophthalmic prescriptions, lens recommendations dependent on individual seller knowledge, high customer processing time, and lack of performance metrics to track store conversion.',
      solution:
        'Web platform featuring automated prescription extraction via OCR integrated with an AI pipeline (n8n/RAG), clinical data validation, habit-based ZEISS lens recommendations, end-to-end sales lifecycle tracking, and real-time business intelligence dashboards.',
      development:
        'Agile team development with 11 software engineers, Product Owner, and Scrum Master. Direct involvement in React and TypeScript UI construction, AI pipeline integration (n8n/RAG), modular component architecture, and RBAC-protected REST API consumption.',
      architectureDecisions: [
        'Automated prescription extraction via OCR integrated into an AI pipeline using n8n and RAG',
        'Pre-processing clinical data validation interface for accuracy before recommendation execution',
        'Recommendation engine matching ophthalmic metrics with patient lifestyle habits and preferences',
        'End-to-end sales workflow management from lens recommendation to order confirmation',
        'Analytics dashboards with conversion indicators, top recommended products, and branch performance',
        'JWT authentication, Role-Based Access Control (RBAC), and administrative management modules',
      ],
      highlights: [
        'Automated prescription OCR & AI Pipeline (n8n / RAG)',
        'Smart ZEISS lens recommendation matching clinical & habit data',
        'Real-time conversion & commercial analytics dashboards',
        'JWT Authentication & Role-Based Access Control (RBAC)',
        'Full Stack architecture with React, Spring Boot & PostgreSQL',
      ],
      technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'n8n', 'OCR', 'RAG / AI'],
      results:
        'Significant reduction in prescription processing time, elimination of technical recommendation inconsistencies, reduced manual entry errors, and real-time commercial intelligence for store performance tracking.',
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
        'Structure a centralized backend service to manage user authentication, role-based access permissions, product catalog, and secure order processing workflows.',
      solution:
        'RESTful API built with Java 17 and Spring Boot 3 providing HTTP endpoints for stateless JWT access control with Spring Security, category management, products, and order processing.',
      development:
        'Collaborative project developed using layered architecture (Controller, Service, Repository, DTOs), isolating business responsibilities from persistence.',
      architectureDecisions: [
        'Layered architecture (Controller, Service, Repository, DTOs) ensuring strict separation of concerns',
        'Stateless authentication and authorization based on JSON Web Tokens (JWT) with Spring Security 6',
        'Object-relational mapping with JPA / Hibernate and PostgreSQL database persistence',
        'Interactive API documentation based on OpenAPI 3 contracts via Swagger UI',
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
        'Publication of a secure and documented backend service, establishing RESTful response standardization and strict control of sensitive authorizations.',
      links: {
        github: 'https://github.com/DevYuriVieira/ecommerce-serratec-api',
      },
    },
    {
      id: 'aurora-growth-platform',
      title: 'Aurora | Personal Growth Platform',
      category: 'Mobile React Native',
      featured: true,
      contextTag: 'Mobile App React Native / Expo',
      collaboration: 'Collaborative project (6 developers - Serratec Multiplatform Final Project)',
      description:
        'Mobile app built with React Native/Expo SDK 54 for tracking personal goals, mentorships, and communities with 3 navigation patterns, Zod forms, and native features.',
      context:
        'Multiplatform mobile app developed as the final project for the Serratec Residency focused on personal development management.',
      problem:
        'Provide an intuitive, centralized mobile experience for tracking personal goals, mentorships, and communities with strict form validation, geolocation, and local persistence.',
      solution:
        'React Native/Expo SDK 54 mobile app combining protected routes (Context API), declarative validation with React Hook Form + Zod, native camera/geolocation features, and QR Code check-ins.',
      development:
        'Collaborative development using TypeScript, AsyncStorage for local storage, Expo Secure Store for credentials, and React Navigation.',
      architectureDecisions: [
        'Combination of 3 navigation patterns in a single app (Drawer, Stack, and Tabs) via React Navigation',
        'Defensive form validation combining React Hook Form with Zod schemas',
        'Access to native device APIs (Camera, Gallery, Expo Location, and QR Code Scanner)',
        'Local session persistence via AsyncStorage and sensitive data storage via Expo Secure Store',
      ],
      highlights: [
        'React Native / Expo SDK 54 mobile app',
        'Three integrated navigation patterns (Drawer, Stack, Tabs)',
        'Form validation with React Hook Form + Zod',
        'Geolocation, native camera, and QR Code reader',
        'Local persistence with AsyncStorage and Expo Secure Store',
      ],
      technologies: ['React Native', 'Expo SDK 54', 'TypeScript', 'React Navigation', 'Zod', 'AsyncStorage'],
      results:
        'Delivery of the final multiplatform project with 100% technical compliance, native hardware integration, and defensive validation.',
      links: {
        github: 'https://github.com/DevYuriVieira/aurora-growth-platform',
      },
    },
    {
      id: 'playstation-evolution-timeline',
      title: 'PlayStation Evolution Timeline',
      category: 'Frontend React & Motion',
      featured: true,
      contextTag: 'Production App (Vercel)',
      collaboration: 'Personal project',
      description:
        'Interactive timeline covering 30 years of PlayStation hardware (PS1 to PS5 Pro), built with Framer Motion in TypeScript and published on Vercel with CI/CD.',
      context:
        'Web app in production on Vercel built to practice animation, motion design, and strictly typed TypeScript component architecture.',
      problem:
        'Present 30 years of hardware evolution and technical specifications across the PlayStation lineup through an interactive, fluid, and responsive experience without animation bottlenecks.',
      solution:
        'Interactive timeline built with React, Vite, and TypeScript, declaratively animated with Framer Motion and continuously deployed (CI/CD) on Vercel.',
      development:
        'Authorial project built with React, Vite, and TypeScript, maintaining 100% stability and zero production errors since launch.',
      architectureDecisions: [
        'Declarative componentization in React with TypeScript for strict hardware data typing',
        'High-performance motion design with parameterized animations via Framer Motion',
        'Automated continuous deployment (CI/CD) integrated with GitHub repository via Vercel',
        '100% responsive design optimized for mobile and desktop navigation',
      ],
      highlights: [
        'Production app live on Vercel',
        'Timeline covering 30 years of PlayStation consoles',
        'Advanced motion design with Framer Motion',
        'Automated CI/CD deployment on main branch commits',
        'Strictly typed TypeScript architecture',
      ],
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Vite', 'Vercel CI/CD'],
      results:
        'Published and stable Vercel application with zero downtime, demonstrating technical proficiency in motion design and automated release pipelines.',
      links: {
        github: 'https://github.com/DevYuriVieira',
        demo: 'https://playstation-evolution-timeline.vercel.app',
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
        'Web application developed in Pair Programming format to integrate weather data and cultural APIs powered by artificial intelligence.',
      problem:
        'Real-time matching of local weather variables with cultural catalogs and artificial intelligence models to generate dynamic contextualized recommendations.',
      solution:
        'Web platform that fetches the user\'s local weather via OpenWeather API, consumes cultural catalogs via Jikan API, and generates personalized suggestions via Google Gemini AI SDK.',
      development:
        'Pair Programming project using React, REST API consumption, and Google Gemini AI SDK integration.',
      architectureDecisions: [
        'Asynchronous consumption of external APIs (OpenWeather API for weather, Jikan API for anime data)',
        'Contextual integration with Google Gemini AI SDK using Prompt Engineering structured for JSON',
        'Frontend development in React, TypeScript, and Vite with reusable glassmorphism components',
        'Defensive handling of async requests with loading states and reconnection fallbacks',
      ],
      highlights: [
        'Technical recommendations via Google Gemini AI',
        'Real-time weather data via OpenWeather API',
        'Cultural data consumption via Jikan API',
        'Prompt Engineering for JSON format responses',
        'Async state management with React Hooks',
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'OpenWeather', 'Jikan API', 'Google Gemini AI'],
      results:
        'Published and functional web application with integrated artificial intelligence, validating composite async workflows and SDK-based LLM consumption.',
      links: {
        github: 'https://github.com/DevYuriVieira/anime-weather-platform',
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
        'E-commerce system applying the Django ecosystem with authentication, admin dashboard, and event processing.',
      context:
        'Authorial web e-commerce app built to apply the Python ecosystem and MVT pattern to full-stack development.',
      problem:
        'Build a complete e-commerce ecosystem with product management, authentication, cart, checkout, and asynchronous payment processing resilient to duplicate requests.',
      solution:
        'Authorial full-stack Python/Django web app with MVT architecture, relational ORM on PostgreSQL, custom admin panel, and idempotent Webhook processing.',
      development:
        'Personal project built using Django, PostgreSQL, and REST APIs, prioritizing modular code organization and reusability.',
      architectureDecisions: [
        'MVT architecture organized into independent modules (Django sub-apps) to isolate domain concerns',
        'Payment processing with idempotent Webhooks and atomic database transactions',
        'Highly customized native admin dashboard with Django Admin for operational control',
        'Frontend layer in Vanilla JS with custom state manager and active CSRF/XSS protection',
      ],
      highlights: [
        'Efficient object-relational mapping with Django ORM',
        'Native admin panel customized with Django Admin',
        'Relational data persistence with PostgreSQL',
        'Creation and consumption of REST APIs',
        'Secure and idempotent Webhook processing',
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'REST API', 'Webhooks'],
      results:
        'Delivery of a production-ready full-stack application featuring secure transactional event handling and administrative catalog management.',
      links: {
        github: 'https://github.com/DevYuriVieira/django-ecommerce',
      },
    },
    {
      id: 'payroll-system-java',
      title: 'Payroll System',
      category: 'Backend Java',
      featured: false,
      contextTag: 'Backend Java / MVC+DAO',
      collaboration: 'Collaborative project (4 developers - Serratec OOP Final Project)',
      description:
        'Java 17 backend system for automated INSS and IRRF calculation according to Brazilian tax law, using pure JDBC without ORM in a layered MVC + DAO architecture.',
      context:
        'High-precision financial backend system built collaboratively as the final project for the Serratec Residency Object-Oriented Programming module.',
      problem:
        'Process employee data and execute complex tax/pension calculations (INSS and IRRF) with exact financial precision without relying on ORM frameworks.',
      solution:
        'Java 17 backend system with layered MVC + DAO architecture and pure JDBC persistence on PostgreSQL, calculating INSS/IRRF per official rate tables.',
      development:
        'Agile team development applying BigDecimal across all financial calculations, Singleton pattern for database connection management, and custom domain exceptions.',
      architectureDecisions: [
        'Layered MVC + DAO architecture built without ORM frameworks to reinforce core SQL and OOP principles',
        'Use of BigDecimal across all tax operations to prevent floating-point inaccuracies',
        'Database connection manager based on the Singleton design pattern',
        'Automated reading and defensive parsing of CSV files with custom domain exceptions',
      ],
      highlights: [
        'Automated INSS and IRRF calculations per legislation',
        'Exact financial precision with BigDecimal',
        'Layered MVC + DAO architecture without ORM',
        'Relational persistence via pure JDBC on PostgreSQL',
        'Automated CSV file parsing & Singleton Pattern',
      ],
      technologies: ['Java 17', 'PostgreSQL', 'JDBC', 'MVC', 'DAO', 'BigDecimal'],
      results:
        'Tested and functional tax-compliant backend system ensuring cent-exact accuracy across bulk payroll processing.',
      links: {
        github: 'https://github.com/DevYuriVieira/payroll-system-java',
      },
    },
    {
      id: 'fleet-management-system',
      title: 'Fleet Management System',
      category: 'Frontend Application',
      featured: false,
      contextTag: 'Logistics Operations Frontend',
      collaboration: 'Collaborative project',
      description:
        'Web application for logistics fleet operations management, enabling real-time vehicle and driver tracking.',
      context:
        'Web application for logistics fleet operational management developed collaboratively with focus on usability and asset tracking.',
      problem:
        'Logistics operators needed a centralized dashboard to monitor vehicle statuses, driver registrations, and fleet availability without page reloads.',
      solution:
        'Single Page Application (SPA) operational dashboard built with React and TypeScript featuring dynamic filtering, driver forms, and status indicators.',
      development:
        'Collaborative project using React, TypeScript, Styled Components, and component-driven architecture.',
      architectureDecisions: [
        'Reactive SPA built with React and TypeScript for fleet schema validation',
        'Modular styling and scoped themes using Styled Components',
        'Declarative client-side routing between fleet views and forms with React Router',
        'Reusable modular componentization focused on performance and operational usability',
      ],
      highlights: [
        'Highly reusable componentization in React',
        'Static typing with TypeScript',
        'Modular styling with Styled Components',
        'Declarative routing with React Router',
        'Modular organization and responsive interface',
      ],
      technologies: ['React', 'TypeScript', 'Styled Components', 'Vite'],
      results:
        'Operational dashboard published on Vercel delivering fluid real-time navigation and efficient fleet state management.',
      links: {
        github: 'https://github.com/DevYuriVieira/fleet-management-system',
        demo: 'https://fleet-management-system-chi.vercel.app/',
      },
    },
    {
      id: 'hogwarts-interactive-hub',
      title: 'Hogwarts Interactive Hub',
      category: 'Frontend SPA Architecture',
      featured: false,
      contextTag: 'Vanilla JS Frontend',
      collaboration: 'Personal project',
      description:
        'Single Page Application inspired by the Harry Potter universe built without frameworks to demonstrate complete mastery of native browser APIs.',
      context:
        'Single Page Application inspired by the Harry Potter universe built without frameworks to demonstrate complete mastery of native browser APIs.',
      problem:
        'Demonstrate advanced mastery of native browser APIs by constructing a feature-rich thematic SPA without using frameworks like React or Angular.',
      solution:
        'Interactive Harry Potter universe SPA developed exclusively in Vanilla JS with ES Modules and a custom client-side router.',
      development:
        'Personal project developed exclusively with Vanilla JavaScript using ES Modules, dynamic rendering, and a custom SPA router.',
      architectureDecisions: [
        'Custom SPA router built from scratch in Vanilla JavaScript',
        'Modular architecture driven by ES Modules with direct DOM manipulation',
        'Asynchronous visual element loading using Intersection Observer API',
        'Dynamic theme switcher (Lumos/Nox) persisted in LocalStorage',
      ],
      highlights: [
        'Custom SPA Router without frameworks',
        'Modular architecture based on ES Modules',
        'Dynamic DOM component rendering',
        'Asynchronous loading with Intersection Observer',
        'Theme switching with Lumos/Nox system',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'ES Modules', 'LocalStorage'],
      results:
        'Interactive application published on GitHub Pages proving complete mastery of Vanilla JavaScript ecosystem and native DOM APIs.',
      links: {
        github: 'https://github.com/DevYuriVieira/Hogwarts-Interactive-Hub',
        demo: 'https://devyurivieira.github.io/Hogwarts-Interactive-Hub/',
      },
    },
    {
      id: 'kuro-seafood-ecommerce',
      title: 'Kuro Seafood E-Commerce',
      category: 'Frontend E-commerce',
      featured: false,
      contextTag: 'E-Commerce Frontend',
      collaboration: 'Collaborative project (4 developers)',
      description:
        'Frontend e-commerce for premium seafood sales simulating a complete purchasing experience without a traditional backend.',
      context:
        'Frontend e-commerce for premium seafood sales simulating a complete purchasing experience without a traditional backend.',
      problem:
        'Simulate a full premium seafood e-commerce purchasing experience inside the browser without relying on a traditional backend server.',
      solution:
        'E-commerce interface featuring responsive catalog, client-side cart, MockAPI checkout simulation, and automatic ZIP lookup via ViaCEP API.',
      development:
        'Collaborative project with 4 developers using Vanilla JavaScript, modular architecture, and client-side persistence.',
      architectureDecisions: [
        'Local shopping cart and user preference persistence using LocalStorage',
        'Asynchronous backend simulation for product CRUD operations via MockAPI',
        'Async integration with ViaCEP API for auto-completing delivery addresses',
        'Visual structure with Bootstrap and CSS3 following a Mobile First approach',
      ],
      highlights: [
        'Admin dashboard for product management (CRUD)',
        'Persistent shopping cart via LocalStorage',
        'Async backend simulation with MockAPI',
        'Automatic address lookup via ViaCEP API',
        'Responsive Mobile-First design',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Bootstrap', 'LocalStorage', 'REST APIs'],
      results:
        'Client-side e-commerce platform published on Vercel faithfully reproducing the end-to-end customer buying journey.',
      links: {
        github: 'https://github.com/DevYuriVieira/kuro-seafood-ecommerce',
        demo: 'https://kuro-seafood-ecommerce.vercel.app/',
      },
    },
    {
      id: 'modern-fighter-jets',
      title: 'Modern Fighter Jets',
      category: 'Frontend React',
      featured: false,
      contextTag: 'Interactive React Frontend',
      collaboration: 'Personal project',
      description:
        'React application built to explore component architecture and interactive experiences through a modern military aircraft catalog.',
      context:
        'React application built to explore component architecture and interactive experiences through a modern military aircraft catalog.',
      problem:
        'Create an immersive and responsive experience for looking up military aircraft technical specifications using modern component architecture.',
      solution:
        'Interactive catalog built with React and Styled Components featuring country filtering, React Router navigation, and tech data gallery.',
      development:
        'Personal project built using React, Styled Components, and React Router following reusable component architecture.',
      architectureDecisions: [
        'Reusable component architecture in React with clean props passing',
        'Dynamic scoped styling using Styled Components',
        'Declarative client-side routing for aircraft details via React Router',
        'Local state management with React Hooks for real-time filtering',
      ],
      highlights: [
        'Reusable componentization in React',
        'Component communication via Props',
        'State management with React Hooks',
        'Declarative routing with React Router',
        'Modular styling with Styled Components',
      ],
      technologies: ['React', 'JavaScript', 'React Router', 'Styled Components', 'Vite'],
      results:
        'Web app published on Vercel with instant Vite loading and adaptive layout across mobile and desktop screens.',
      links: {
        github: 'https://github.com/DevYuriVieira/modern-fighter-jets',
        demo: 'https://modern-fighter-jets.vercel.app/',
      },
    },
    {
      id: 'dental-clinic-db',
      title: 'Dental Clinic Management System',
      category: 'Relational Database',
      featured: false,
      contextTag: 'Database Modeling',
      collaboration: 'Collaborative project (6 developers)',
      description:
        'Database modeling and implementation project for dental clinic management focused on consistency and performance.',
      context:
        'Database modeling and implementation project for dental clinic management focused on consistency and performance.',
      problem:
        'Structure the relational model of a dental clinic with complex queries, ensuring referential integrity and normalization up to 3rd Normal Form (3FN).',
      solution:
        'Complete PostgreSQL database project encompassing conceptual ERD, logical relational model, integrity constraints, indexes, and analytical views.',
      development:
        'Collaborative project with 6 developers covering requirement analysis, conceptual modeling, logical modeling, and PostgreSQL implementation.',
      architectureDecisions: [
        'Detailed conceptual and logical modeling guaranteeing strict 3FN normalization',
        'Creation of DDL constraints, primary/foreign keys, and validation rules',
        'Index creation for search optimization in appointment and record tables',
        'Development of analytical SQL Views for billing and appointment reports',
      ],
      highlights: [
        'Conceptual Data Modeling (ERD)',
        'Logical Relational Model',
        'Data normalization up to 3rd Normal Form (3FN)',
        'Referential integrity enforcement & Constraints',
        'Performance optimization with Indexes',
        'SQL Views and analytical queries',
      ],
      technologies: ['PostgreSQL', 'SQL', 'DDL', 'DML', 'DQL'],
      results:
        'Validated and optimized PostgreSQL database schema delivering high consistency and fast response across complex relational queries.',
      links: {
        github: 'https://github.com/DevYuriVieira/dentacare-management-system',
      },
    },
    {
      id: 'interactive-auth-ui',
      title: 'Interactive Authentication UI',
      category: 'Frontend React',
      featured: false,
      contextTag: 'UX Engineering & Motion',
      collaboration: 'Personal project',
      description:
        'Authentication prototype focused on UX Engineering using interactive characters that dynamically react to user actions.',
      context:
        'Authentication prototype focused on UX Engineering using interactive characters that dynamically react to user actions.',
      problem:
        'Transform traditional login screens into dynamic, engaging experiences that increase user retention through UX Engineering.',
      solution:
        'Reactive React authentication prototype featuring interactive characters that track cursor movement and respond to field focus and typing.',
      development:
        'Personal project built in React using reusable components, CSS Modules, and state management for real-time animations.',
      architectureDecisions: [
        'Real-time cursor position tracking for character visual element animations',
        'React state management to toggle character facial expressions based on input statuses',
        'Scoped and isolated styling using CSS Modules with Dark Mode support',
        'Flow navigation between login and password recovery with React Router',
      ],
      highlights: [
        'Cursor tracking for dynamic eye animation',
        'Reactive characters with animated states',
        'Scoped styling with CSS Modules',
        'Dark Mode support and theme toggle',
        'Flow navigation with React Router',
      ],
      technologies: ['React', 'Vite', 'CSS Modules', 'React Router'],
      results:
        'UX prototype published on Vercel demonstrating advanced interface interaction techniques and user experience engineering.',
      links: {
        github: 'https://github.com/DevYuriVieira/UXwebsite',
      },
    },
  ],
};

// Backward-compatible exports
export const PROJECTS_DATA: readonly Project[] = PROJECTS_I18N['pt-BR'];

export function getProjectsData(lang: SupportedLang): readonly Project[] {
  return PROJECTS_I18N[lang];
}
