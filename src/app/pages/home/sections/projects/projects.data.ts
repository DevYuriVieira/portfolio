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
        'Plataforma web corporativa desenvolvida em parceria com o ZEISS Group para digitalizar e otimizar a recomendação técnica de lentes em ópticas.',
      context:
        'MVP corporativo desenvolvido durante a Residência Serratec em parceria direta com o ZEISS Group. Atuação em equipe ágil no desenvolvimento frontend em React, integração de fluxos de IA e automação de recomendação comercial.',
      problem:
        'Entrada manual de receitas oftalmológicas complexas, recomendações de lentes dependentes do conhecimento individual de cada vendedor, tempo elevado de atendimento e ausência de métricas comerciais por filial.',
      solution:
        'Plataforma web integrada com OCR e pipeline de IA (n8n/RAG) para leitura automática de receitas, validação prévia de dados clínicos, recomendação personalizada de lentes ZEISS com base nos hábitos do paciente e dashboards de inteligência de vendas.',
      development:
        'Atuação em equipe ágil (11 desenvolvedores, PO e Scrum Master) na criação da interface em React com TypeScript, componentização modular, consumo de APIs backend com controle de acesso por perfil (RBAC) e suporte à validação do fluxo de prescrição.',
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
        'Padronização da recomendação técnica de lentes nas ópticas parceiras; eliminação do preenchimento manual de prescrições e redução drástica de erros de digitação via OCR; geração de inteligência comercial em tempo real para a ZEISS com métricas de conversão e ranking de produtos.',
      links: {},
    },
    {
      id: 'spring-boot-ecommerce-api',
      title: 'Spring Boot E-Commerce API',
      category: 'Backend Java',
      featured: true,
      contextTag: 'Backend Java / REST API',
      collaboration: 'Projeto colaborativo (Residência Serratec)',
      description:
        'API RESTful de e-commerce construída em Java 17 e Spring Boot 3 com autenticação stateless JWT e controle de acesso baseado em funções (RBAC).',
      context:
        'Serviço backend projetado para garantir alto desacoplamento entre regras de negócio, camada de segurança e persistência relacional de dados.',
      problem:
        'Centralizar em um único serviço a gestão de permissões granulares, controle de estoque simultâneo, validação de pedidos e emissão de tokens de autenticação seguros.',
      solution:
        'API RESTful estruturada em camadas (Controller, Service, Repository, DTOs) com Spring Security 6, persistência relacional via JPA/Hibernate em PostgreSQL e contratos interativos OpenAPI 3.',
      development:
        'Implementação de filtros customizados no Spring Security 6 para validação de JWT, adoção do padrão DTO para blindagem do domínio e mapeamento relacional com tratamento estrito de exceções.',
      architectureDecisions: [
        'Arquitetura em camadas (Controller, Service, Repository, DTOs) garantindo separação limpa de responsabilidades',
        'Autenticação stateless via JSON Web Tokens (JWT) integrada à cadeia de filtros do Spring Security 6',
        'Mapeamento relacional eficiente com JPA/Hibernate no PostgreSQL com consultas otimizadas',
        'Contratos de API documentados e interativos com Swagger UI / OpenAPI 3',
      ],
      highlights: [
        'Autenticação stateless JWT com Spring Security 6',
        'Controle de acesso granular baseado em perfis (RBAC)',
        'Persistência em PostgreSQL com JPA/Hibernate',
        'Documentação interativa com Swagger/OpenAPI 3',
        'Padrão DTO para proteção de entidades de domínio',
      ],
      technologies: [
        'Java 17',
        'Spring Boot 3',
        'Spring Security 6',
        'PostgreSQL',
        'JPA/Hibernate',
        'Swagger/OpenAPI',
      ],
      results:
        'Isolamento completo entre regras de negócio e camada de apresentação via DTOs; controle de acesso por perfil (RBAC) impedindo requisições não autorizadas; contrato de API documentado em OpenAPI 3 para integração simplificada.',
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
      collaboration: 'Projeto colaborativo (6 desenvolvedores - Residência Serratec)',
      description:
        'Aplicativo mobile em React Native e Expo SDK 54 para acompanhamento de metas, gamificação com XP e níveis, presenças em mentorias por QR Code e comunidade.',
      context:
        'Projeto final da disciplina de Desenvolvimento Multiplataforma da Residência Serratec, focado na criação de um ecossistema nativo de desenvolvimento pessoal para iOS e Android.',
      problem:
        'Prover uma experiência mobile integrada que unificasse navegação entre múltiplos fluxos, mecânicas de gamificação reativas, validação de formulários complexos e acesso seguro a periféricos do dispositivo.',
      solution:
        'Arquitetura mobile reativa com React Native e Expo SDK 54, combinando navegação híbrida (Drawer, Stack, Tabs), motor de gamificação por experiência, validação com React Hook Form + Zod, leitor nativo de QR Code e armazenamento seguro via Expo Secure Store.',
      development:
        'Atuação em equipe de 6 desenvolvedores no desenvolvimento de telas em TypeScript, consumo de APIs REST/MockAPI, gerenciamento de estado via React Context (`AuthContext`) e integração de recursos nativos (Câmera, GPS, Armazenamento).',
      architectureDecisions: [
        'Arquitetura de navegação híbrida integrando Drawer, Stack e Tabs via React Navigation',
        'Sistema de gamificação cliente-side com cálculo dinâmico de XP, níveis e conquistas',
        'Validações de formulários combinando React Hook Form com esquemas Zod',
        'Acesso a recursos de hardware via Expo Image Picker (Câmera/Galeria), Expo Location (GPS) e leitor de QR Code',
        'Persistência de sessão com Expo Secure Store e cache local via AsyncStorage',
      ],
      highlights: [
        'App Mobile React Native com Expo SDK 54 e TypeScript',
        'Navegação híbrida integrada (Drawer, Stack e Tabs)',
        'Gamificação completa com XP, Níveis e Conquistas',
        'Inscrição em mentorias com confirmação por QR Code',
        'Acesso nativo a Câmera, Galeria, GPS e Expo Secure Store',
        'Validação de formulários com React Hook Form + Zod',
      ],
      technologies: [
        'React Native',
        'Expo SDK 54',
        'TypeScript',
        'React Navigation',
        'Zod',
        'React Hook Form',
        'Axios',
        'AsyncStorage',
        'Expo Secure Store',
      ],
      results:
        'Experiência de navegação fluida em iOS e Android; mecânica de gamificação por XP incentivando o cumprimento de metas; check-in automatizado em mentorias por leitura nativa de QR Code e credenciais protegidas no armazenamento nativo do dispositivo.',
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
        'Timeline interativa sobre 30 anos de hardware PlayStation desenvolvida em React, TypeScript e Framer Motion, publicada no Vercel com esteira CI/CD.',
      context:
        'Aplicação web em produção criada para explorar conceitos avançados de motion design, interpolação de animações declarativas e arquitetura de componentes em TypeScript.',
      problem:
        'Exibir três décadas de dados de hardware e fichas técnicas com transições visuais ricas e animadas sem gerar queda de taxa de quadros (FPS) ou engasgos no navegador.',
      solution:
        'Interface reativa construída com React, Vite e TypeScript, utilizando Framer Motion para interpolação de elementos no DOM, CSS moderno e deploy automatizado no Vercel.',
      development:
        'Projeto autoral cobrindo a estruturação de interfaces TypeScript para dados de consoles, desenvolvimento de componentes de timeline reutilizáveis e automação da esteira de publicação.',
      architectureDecisions: [
        'Tipagem estrita das especificações históricas de hardware utilizando interfaces TypeScript',
        'Animações declarativas e interpoladas com Framer Motion sem provocar reflows indesejados no DOM',
        'Esteira de deploy contínuo (CI/CD) automatizada no Vercel a cada commit no repositório',
        'Layout responsivo otimizado para navegação fluida em dispositivos móveis e desktops',
      ],
      highlights: [
        'Aplicação em produção no Vercel',
        '30 anos de história de consoles PlayStation',
        'Motion design avançado com Framer Motion',
        'Pipeline CI/CD automatizado via GitHub + Vercel',
        'Arquitetura em TypeScript com tipagem estrita',
      ],
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Vite', 'Vercel CI/CD'],
      results:
        'Navegação imersiva e responsiva por 30 anos de evolução tecnológica dos videogames; animações fluidas a 60 FPS alimentadas por Framer Motion; esteira de entrega contínua ativa e integrada ao GitHub.',
      links: {
        github: 'https://github.com/DevYuriVieira/playstation-evolution-timeline',
        demo: 'https://playstation-evolution-timeline.vercel.app',
      },
    },
    {
      id: 'django-ecommerce',
      title: 'Django Full-Stack E-Commerce',
      category: 'Full Stack Python/Django',
      featured: true,
      contextTag: 'Full-Stack Python (Service Layer & Webhooks)',
      collaboration: 'Projeto pessoal',
      description:
        'Plataforma e-commerce full-stack construída em Django e JavaScript (ES6+), com arquitetura Service Layer, transações atômicas, webhook idempotente de pagamento assíncrono e renderização com HTML5 <template>.',
      context:
        'Projeto autoral desenvolvido para simular uma arquitetura de produção real em e-commerce, explorando desacoplamento de serviços no backend sem DRF e gerenciamento de estado leve no frontend sem frameworks.',
      problem:
        'Implementar um fluxo de checkout e pagamentos resiliente, prevenindo requisições concorrentes duplicadas (webhooks idempotentes), eliminando problemas de performance de N+1 queries e manipulando a DOM com segurança sem o overhead de frameworks SPA.',
      solution:
        'Arquitetura MVT desacoplada com Service Layer no Django, controle transacional atômico (transaction.atomic), otimização de consultas com prefetch_related, webhook de pagamento assíncrono idempotente, frontend modular em JavaScript (ES6+) com <template> nativo (prevenção contra XSS/CSRF) e debounce estratégico.',
      development:
        'Desenvolvimento autoral Full Stack abrangendo a modelagem relacional dos modelos de dados (pedidos, cupons, favoritos), API versionada sem DRF para controle total das respostas HTTP, Service Layer para regras de negócio e módulos JS isolados por funcionalidade.',
      architectureDecisions: [
        'Padrão Service Layer no Django para isolamento completo da lógica de domínio e desacoplamento das Views',
        'Processamento assíncrono idempotente de Webhooks de pagamento (transição de status pending -> paid) com transações atômicas',
        'Otimização de performance no ORM com prefetch_related eliminando gargalos de N+1 queries no catálogo e pedidos',
        'Frontend modular em JavaScript (ES6+) com componentização via <template> nativo do HTML5 e manipulação segura com textContent (XSS zero)',
        'Controle de acesso por API versionada com proteção CSRF rigorosa e gerenciamento de estado cliente-side customizado',
      ],
      highlights: [
        'Service Layer & Transações Atômicas no Django',
        'Processamento assíncrono idempotente via Webhook de pagamento',
        'Otimização de consultas ORM com prefetch_related (Zero N+1)',
        'Frontend modular em JavaScript com HTML5 <template>',
        'API versionada sem DRF para controle HTTP total',
        'Sistema de cupons, favoritos e carrinho dinâmico',
        'Proteção nativa contra CSRF e vulnerabilidades XSS',
      ],
      technologies: [
        'Python',
        'Django',
        'MySQL',
        'JavaScript (ES6+)',
        'HTML5 <template>',
        'REST API',
        'Webhooks Idempotentes',
        'Service Layer',
      ],
      results:
        'Processamento assíncrono idempotente de Webhooks de pagamento zerando cobranças duplicadas; eliminação de N+1 queries com prefetch_related; arquitetura frontend leve em JavaScript nativo com zero overhead de frameworks e manipulação segura do DOM via <template> e textContent.',
      links: {
        github: 'https://github.com/DevYuriVieira/django-ecommerce',
      },
    },
    {
      id: 'anime-weather-platform',
      title: 'Anime Weather Platform',
      category: 'Frontend + APIs + IA',
      featured: false,
      contextTag: 'Frontend & Integração com IA',
      collaboration: 'Projeto colaborativo (Pair Programming)',
      description:
        'Aplicação web reativa que cruza dados climáticos (OpenWeather API) e catálogo de animes (Jikan API) com o Google Gemini AI, exibindo recomendações em JSON e chatbot de trocadilhos.',
      context:
        'Plataforma criada em Pair Programming para explorar a integração entre múltiplas APIs externas REST e SDKs de inteligência artificial generativa.',
      problem:
        'Combinar em tempo real dados de localização geográfica, clima e acervo cultural, alimentando um modelo de linguagem para produzir tanto cards em JSON estruturado quanto diálogos interativos.',
      solution:
        'Aplicação React e TypeScript que detecta o clima local via OpenWeather API, busca animes compatíveis na Jikan API e envia contexto ao Google Gemini AI via Prompt Engineering para montagem da UI e suporte ao chatbot.',
      development:
        'Desenvolvimento em dupla cobrindo gerenciamento de estado assíncrono, renderização dinâmica de dados, tratamento de erros de API e estilo visual glassmorphic.',
      architectureDecisions: [
        'Consumo assíncrono e cruzamento de dados em tempo real da OpenWeather API (clima) e Jikan API (animes)',
        'Integração com SDK do Google Gemini AI unindo Engenharia de Prompts para respostas estruturadas em JSON nos cards e chatbot interativo',
        'Interface responsiva desenvolvida em React, TypeScript e Vite com componentes em estilo glassmorphism',
        'Tratamento defensivo de requisições com indicadores de carregamento e fallbacks de erro',
      ],
      highlights: [
        'Engenharia de Prompts para respostas estruturadas em JSON',
        'Chatbot interativo com Google Gemini AI',
        'Trocadilhos climáticos contextualizados via text content',
        'Dados de clima em tempo real via OpenWeather API',
        'Consumo do catálogo cultural via Jikan API',
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'OpenWeather API', 'Jikan API', 'Google Gemini AI'],
      results:
        'Recomendações culturais personalizadas geradas pelo cruzamento de clima e animes via IA; interface reativa com suporte a chatbot e cards montados dinamicamente via JSON.',
      links: {
        github: 'https://github.com/DevYuriVieira/anime-weather-platform',
      },
    },
    {
      id: 'payroll-system-java',
      title: 'Sistema de Folha de Pagamento',
      category: 'Backend Java',
      featured: false,
      contextTag: 'Backend Java / Arquitetura MVC+DAO',
      collaboration: 'Projeto colaborativo (4 desenvolvedores - Residência Serratec)',
      description:
        'Sistema backend em Java 17 puro (sem ORM) desenvolvido em equipe para processamento automatizado em lote de folha de pagamento, cálculo de alíquotas progressivas de INSS e IRRF, persistência em PostgreSQL via JDBC e exportação CSV.',
      context:
        'Projeto final de avaliação da disciplina de Programação Orientada a Objetos (POO) na Residência em TIC Serratec 2026.1 (Turma 36 Nova Friburgo), desenvolvido em equipe de 4 integrantes (Yuri Vieira, Yasmim Veríssimo, Gabriel Maia e Ícaro Pinheiro) para simular o motor de cálculo financeiro de um sistema corporativo de RH.',
      problem:
        'Processar lotes de arquivos CSV com dados de funcionários e dependentes, efetuar a validação rigorosa de regras de negócio e calcular alíquotas tributárias progressivas (INSS e IRRF) com deduções por dependente, evitando falhas de precisão financeira por ponto flutuante e persistindo os dados com segurança.',
      solution:
        'Arquitetura em camadas em Java 17 puro (MVC + DAO) sem ORM, persistência relacional otimizada via JDBC no PostgreSQL, conexão gerenciada via Singleton (ConexaoBancoDados), precisão financeira com BigDecimal (RoundingMode.HALF_UP), exceções customizadas de domínio (CpfInvalidoException, DependenteSemTitularException, SalarioInvalidoException) e I/O defensivo via CsvReader e CsvWriter.',
      development:
        'Atuação colaborativa na definição do modelo conceitual (DER/UML), implementação da camada de acesso a dados (DAO/DAOImpl), estruturação do serviço de cálculo (CalculoFolhaService), criação de exceções de domínio e validação estrita de CPF e integridade referencial.',
      architectureDecisions: [
        'Arquitetura em camadas MVC + DAO construída em Java 17 puro sem frameworks ORM, garantindo baixo acoplamento e isolamento total das regras de negócio',
        'Utilização estrita da classe BigDecimal com RoundingMode.HALF_UP em operações tributárias e salariais, eliminando erros de arredondamento inerentes ao ponto flutuante',
        'Padrão Singleton aplicado à fábrica de conexões JDBC (ConexaoBancoDados) para otimização de recursos e gerenciamento de instância única',
        'Tratamento de exceções customizadas de domínio (CpfInvalidoException, DependenteSemTitularException, SalarioInvalidoException) impedindo inconsistências no banco',
        'Dupla camada de persistência: gravações relacionais transacionais no PostgreSQL e exportação automatizada de relatórios em arquivos CSV',
      ],
      highlights: [
        'Cálculo automatizado de alíquotas progressivas de INSS e IRRF',
        'Precisão financeira exata com BigDecimal e RoundingMode.HALF_UP',
        'Arquitetura em camadas MVC + DAO em Java 17 (sem ORM)',
        'Gerenciador de conexões JDBC com Padrão Singleton',
        'Exceções customizadas de domínio e validação rigorosa de CPF',
        'Parsing defensivo e exportação automatizada em arquivos CSV',
        'Projeto colaborativo em equipe de 4 devs (Residência Serratec 2026.1)',
      ],
      technologies: [
        'Java 17',
        'PostgreSQL',
        'JDBC',
        'Arquitetura MVC',
        'Padrão DAO',
        'BigDecimal',
        'Singleton Pattern',
        'Leitura/Escrita CSV',
      ],
      results:
        'Cálculo automatizado e preciso de alíquotas progressivas de INSS e IRRF conforme legislação vigente, zerando distorções financeiras via BigDecimal; validação em tempo de execução de CPFs e vínculos de dependentes via exceções customizadas; persistência transacional dupla em PostgreSQL e relatórios CSV gerados automaticamente.',
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
        'Painel operacional SPA em React e TypeScript desenvolvido para monitoramento e gestão de frotas logísticas em tempo real.',
      context:
        'Aplicação desenvolvida para otimizar o acompanhamento do estado de conservação de veículos e alocação de motoristas em uma operação logística.',
      problem:
        'Operadores logísticos demandavam uma interface centralizada e veloz para filtrar veículos por status de manutenção sem depender de planilhas dispersas.',
      solution:
        'Single Page Application (SPA) em React e TypeScript com navegação via React Router, estilização modular em Styled Components e estado reativo para filtragem dinâmica.',
      development:
        'Desenvolvimento de componentes modulares reutilizáveis, contratos de dados tipados com TypeScript e navegação declarativa sem recarregamento da página.',
      architectureDecisions: [
        'Construção de SPA reativa em React com TypeScript para validação de esquemas de frota',
        'Estilização modular utilizando a biblioteca Styled Components',
        'Roteamento declarativo cliente-side entre formulários e painéis via React Router',
        'Componentização modular focada na usabilidade do operador logístico',
      ],
      highlights: [
        'SPA reativa desenvolvida em React e TypeScript',
        'Estilização escopada com Styled Components',
        'Navegação cliente-side sem recarregamento via React Router',
        'Filtros dinâmicos por estado e conservação da frota',
        'Arquitetura de componentes reutilizáveis',
      ],
      technologies: ['React', 'TypeScript', 'Styled Components', 'Vite'],
      results:
        'Visualização clara e centralizada da operação de frota; filtragem instantânea de veículos por disponibilidade e manutenção; navegação rápida entre visualizações operacionais via React Router.',
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
      contextTag: 'Frontend JavaScript Nativo',
      collaboration: 'Projeto pessoal',
      description:
        'Single Page Application imersiva inspirada no universo Wizarding World construída inteiramente em JavaScript nativo (ES6 Modules) sem frameworks.',
      context:
        'Projeto autoral criado para exercitar a construção de aplicações web ricas utilizando exclusivamente APIs nativas do navegador (DOM, History API, Intersection Observer).',
      problem:
        'Criar uma experiência imersiva com animações interativas (Chapéu Seletor com efeito typewriter e Mapa do Maroto com pegadas matemáticas) mantendo alta performance sem frameworks.',
      solution:
        'Aplicação em JavaScript nativo com roteador SPA próprio sobre a History API, componentes orientados a objetos em ES6 Modules, manipulação de CSS Variables para o tema Lumos/Nox e lazy animation via Intersection Observer.',
      development:
        'Desenvolvimento de roteador cliente-side autoral, implementação de cálculos trigonométricos para trajetórias de elementos gráficos e gerenciamento de estado local em LocalStorage.',
      architectureDecisions: [
        'Roteador SPA cliente-side autoral construído do zero manipulando a History API nativa',
        'Animações interativas com efeito typewriter e cálculos trigonométricos para pegadas no Mapa do Maroto',
        'Motor de renderização dinâmica em JavaScript nativo substituindo HTML estático por componentes modulares ES6',
        'Sistema global de temas Lumos/Nox com atualização dinâmica de variáveis CSS (:root) e suporte a atalhos de teclado',
        'Otimização de renderização e performance via Intersection Observer API para lazy animation e responsividade com clamp()',
      ],
      highlights: [
        'Roteador SPA autoral sem frameworks via History API',
        'Arquitetura modular em JavaScript com ES6 Modules',
        'Animações trigonométricas no Mapa do Maroto',
        'Cerimônia do Chapéu Seletor com efeito Typewriter',
        'Sistema global de temas Lumos/Nox com LocalStorage',
        'Performance nativa e lazy loading com Intersection Observer',
      ],
      technologies: [
        'JavaScript (ES6+)',
        'ES6 Modules',
        'HTML5',
        'CSS3',
        'DOM API',
        'History API',
        'Intersection Observer',
        'LocalStorage',
      ],
      results:
        'Navegação entre seções sem recarregamento da página e com zero dependências externas; animações matemáticas fluidas; alternância dinâmica de tema persistida no navegador.',
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
      contextTag: 'Frontend E-commerce (MPA)',
      collaboration: 'Projeto colaborativo (4 desenvolvedores - Residência Serratec)',
      description:
        'Plataforma e-commerce B2C/B2B de pescados premium com arquitetura Multi-Page (MPA) em JavaScript (ES6+), carrinho offcanvas em LocalStorage e frete via ViaCEP API.',
      context:
        'Projeto final da disciplina de Desenvolvimento Web Frontend da Residência Serratec 2026.1 (Turma 36 Nova Friburgo), desenvolvido em equipe de 4 integrantes (Yuri Vieira, Yasmim Veríssimo, Gabriel Maia e Ícaro Pinheiro).',
      problem:
        'Construir um e-commerce com catálogo dinâmico, regras de atacado, carrinho persistente, consulta de frete em tempo real e painel administrativo protegido sem utilizar frameworks SPA.',
      solution:
        'Estrutura Multi-Page (MPA) em JavaScript nativo e Bootstrap 5.3, carrinho offcanvas com estado cliente-side em LocalStorage, integração assíncrona com a ViaCEP REST API e CRUD administrativo com MockAPI.',
      development:
        'Atuação em equipe na divisão de módulos JS reutilizáveis (cart, auth, catalog, admin), consumo de APIs via async/await, regras de desconto automático no atacado (> R$ 500 ou > 5kg) e layout Mobile-First.',
      architectureDecisions: [
        'Arquitetura Multi-Page (MPA) em JavaScript (ES6+) eliminando o overhead de frameworks e garantindo carregamento veloz',
        'Módulos JS isolados por funcionalidade para separação limpa de responsabilidades (cart.js, auth.js, catalogo.js, admin.js, checkout.js)',
        'Persistência de estado cliente-side via LocalStorage para carrinho de compras offcanvas e sessão de usuário',
        'Cálculo logístico assíncrono em tempo real integrando a ViaCEP REST API com fluxos não bloqueantes (async/await)',
        'Painel administrativo privado com CRUD completo de produtos (Create, Read, Update, Delete) integrado à MockAPI',
        'Regras dinâmicas de atacado com descontos automáticos (> R$ 500 ou > 5kg) e filtros dinâmicos por URL Query Strings',
      ],
      highlights: [
        'E-commerce frontend em JavaScript (ES6+) e Bootstrap 5.3',
        'Painel Admin privado com CRUD completo via MockAPI',
        'Carrinho offcanvas persistente em LocalStorage',
        'Cálculo de frete assíncrono via ViaCEP REST API',
        'Regras automáticas de atacado (> R$ 500 ou > 5kg)',
        'Estrutura modular MPA sem overhead de frameworks',
        'Desenvolvimento em equipe de 4 devs (Residência Serratec 2026.1)',
      ],
      technologies: [
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Bootstrap 5.3',
        'ViaCEP API',
        'MockAPI',
        'LocalStorage',
      ],
      results:
        'Cálculo logístico e preenchimento automático de endereço em tempo real via ViaCEP API; carrinho de compras mantido durante a navegação entre páginas; painel administrativo seguro para gestão de produtos.',
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
        'Catálogo técnico interativo de aeronaves militares construído em React, TypeScript e Styled Components com filtragem dinâmica.',
      context:
        'Projeto autoral desenvolvido para praticar componentização modular em React e tipagem estrita de objetos técnicos complexos.',
      problem:
        'Apresentar fichas técnicas detalhadas de aeronaves militares em um layout dinâmico que permita filtragem instantânea sem recarregar a tela.',
      solution:
        'Catálogo interativo em React e Styled Components com filtros por país e categoria, rotas declarativas via React Router e estado com React Hooks.',
      development:
        'Desenvolvimento autoral utilizando React, TypeScript e Vite com componentes estritamente tipados e escopados.',
      architectureDecisions: [
        'Arquitetura de componentes reutilizáveis em React com transmissão estrita de props',
        'Estilização escopada e dinâmica de componentes utilizando Styled Components',
        'Roteamento cliente-side declarativo para visualização de detalhes via React Router',
        'Filtragem em tempo real gerenciada pelo estado local com React Hooks',
      ],
      highlights: [
        'Componentização limpa e reutilizável em React',
        'Tipagem de dados aeronáuticos em TypeScript',
        'Estilização dinâmica com Styled Components',
        'Roteamento cliente-side com React Router',
        'Gerenciamento de estado local com React Hooks',
      ],
      technologies: ['React', 'JavaScript', 'React Router', 'Styled Components', 'Vite'],
      results:
        'Busca e comparação de fichas técnicas de aeronaves militares via filtragem em tempo real por país e categoria; layout reativo alimentado por componentes tipados e escopados.',
      links: {
        github: 'https://github.com/DevYuriVieira/modern-fighter-jets',
        demo: 'https://modern-fighter-jets.vercel.app/',
      },
    },
    {
      id: 'dental-clinic-db',
      title: 'Dental Clinic Management System (DCMS)',
      category: 'Banco de Dados Relacional',
      featured: false,
      contextTag: 'Modelagem de Banco de Dados',
      collaboration: 'Projeto colaborativo (6 desenvolvedores - Residência Serratec)',
      description:
        'Sistema de banco de dados relacional construído em PostgreSQL 16+ durante a Residência Serratec para gestão de clínicas odontológicas.',
      context:
        'Projeto final da disciplina de Banco de Dados da Residência Serratec, desenvolvido em equipe de 6 integrantes para prover uma base transacional consistente para aplicações odontológicas.',
      problem:
        'Centralizar agendamentos, históricos de procedimentos e dados de dentistas (CRO) com integridade referencial e prevenção contra registros órfãos ou inconsistentes.',
      solution:
        'Modelagem relacional normalizada em 3FN no PostgreSQL 16+, integridade referencial com RESTRICT e CASCADE, validações DDL via Regex para CPF e Views analíticas em SQL.',
      development:
        'Atuação em equipe de 6 integrantes na confecção do DER conceitual, escrita dos scripts SQL (DDL, DML, DQL), criação de índices relacionais e elaboração de Views de relatórios.',
      architectureDecisions: [
        'Normalização estrita até a 3ª Forma Normal (3FN) abrangendo entidades como pacientes, dentistas, agendas e consultas',
        'Aplicação de regras de negócio via DDL: validação de CPF com Regex, restrições lógicas de datas e campos Únicos',
        'Controle estrito de integridade referencial utilizando regras RESTRICT (prevenção de órfãos) e CASCADE',
        'Otimização de performance em consultas frequentes por meio de Índices relacionais e Views SQL para relatórios',
      ],
      highlights: [
        'Banco relacional PostgreSQL 16+ normalizado em 3FN',
        'Regras de negócio via DDL e validação de CPF com Regex',
        'Integridade referencial com RESTRICT e CASCADE',
        'Mapeamento N:N entre consultas e catálogo de procedimentos',
        'Views analíticas em SQL e otimização por Índices',
      ],
      technologies: ['PostgreSQL 16+', 'SQL Avançado', 'DDL', 'DML', 'DQL', 'Database Indexing', 'SQL Views'],
      results:
        'Estrutura relacional normalizada em 3FN no PostgreSQL; eliminação de redundância de dados clínicos; emissão ágil de relatórios operacionais por meio de Views analíticas em SQL.',
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
        'Interface de autenticação reativa desenvolvida em React que rastreia o vetor do cursor em tempo real para animar a expressão dos personagens.',
      context:
        'Protótipo autoral de UX Engineering focado no estudo de micro-interações e animações orientadas a eventos de formulário.',
      problem:
        'Transformar formulários estáticos de autenticação em experiências visuais engajadoras que respondam dinamicamente ao comportamento do usuário.',
      solution:
        'Interface em React e CSS Modules com personagens visuais que acompanham a posição do mouse e reagem ao foco e digitação dos inputs.',
      development:
        'Desenvolvimento autoral aplicando cálculo de vetores do cursor do mouse, escopamento de estilos com CSS Modules e suporte a temas claro e escuro (Dark Mode).',
      architectureDecisions: [
        'Cálculo do vetor de posição do cursor em tempo real para controle dos olhos dos personagens',
        'Gerenciamento de estado em React para alternar estados faciais conforme o status de validação',
        'Estilização escopada com CSS Modules garantindo zero vazamento de regras CSS',
        'Navegação suave entre fluxos de login e recuperação de senha via React Router',
      ],
      highlights: [
        'Rastreamento de cursor em tempo real para animação dos olhos',
        'Personagens reativos orientados a estados de formulário',
        'Estilização isolada e modular com CSS Modules',
        'Suporte nativo a temas claros e escuros (Dark Mode)',
        'Navegação entre fluxos de tela com React Router',
      ],
      technologies: ['React', 'Vite', 'CSS Modules', 'React Router'],
      results:
        'Animações reativas no formulário de login acompanhando o vetor do mouse em tempo real; isolamento total de estilos CSS via CSS Modules.',
      links: {
        github: 'https://github.com/DevYuriVieira/kinetic-auth-ux-showcase',
        demo: 'https://kinetic-auth-ux-showcase.vercel.app/',
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
        'Corporate web platform developed in partnership with the ZEISS Group to digitize, standardize, and optimize technical service and lens recommendations in optical stores.',
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
        'Standardization of technical lens recommendations previously reliant on individual seller judgment; automated prescription reading via OCR eliminating manual entry errors; real-time business intelligence generation for ZEISS featuring top-selling lens dashboards, conversion rates, and store performance rankings.',
      links: {},
    },
    {
      id: 'spring-boot-ecommerce-api',
      title: 'Spring Boot E-Commerce API',
      category: 'Backend Java',
      featured: true,
      contextTag: 'Backend Java / REST API',
      collaboration: 'Collaborative project (Serratec Residency)',
      description:
        'E-commerce RESTful API built in Java 17 and Spring Boot 3 featuring JWT authentication and RBAC authorization via Spring Security 6.',
      context:
        'Backend service built during the Serratec Residency, focused on strict decoupling between business logic and database persistence.',
      problem:
        'Centralize granular role-based permissions, concurrent inventory control, product rule validation, and stateless authentication token issuance into a single API.',
      solution:
        'Layered RESTful API (Controller, Service, Repository, DTOs) using Spring Security 6, PostgreSQL relational persistence via JPA/Hibernate, and OpenAPI 3 documentation.',
      development:
        'Applied DTO patterns to isolate the presentation layer from database entities and configured custom JWT security filters.',
      architectureDecisions: [
        'Layered architecture (Controller, Service, Repository, DTOs) ensuring strict separation of concerns',
        'Stateless authentication via JSON Web Tokens (JWT) integrated into Spring Security 6 filter chain',
        'Efficient relational mapping with JPA/Hibernate on PostgreSQL, preventing N+1 queries',
        'Interactive API contracts documented with Swagger UI / OpenAPI 3',
      ],
      highlights: [
        'Stateless JWT authentication with Spring Security 6',
        'Granular Role-Based Access Control (RBAC)',
        'PostgreSQL persistence with JPA/Hibernate',
        'Interactive documentation with Swagger/OpenAPI 3',
        'DTO pattern for domain entity protection',
      ],
      technologies: [
        'Java 17',
        'Spring Boot 3',
        'Spring Security 6',
        'PostgreSQL',
        'JPA/Hibernate',
        'Swagger/OpenAPI',
      ],
      results:
        'Strict decoupling between business rules and presentation layer via DTOs, preventing direct entity exposure; granular role-based access control (RBAC) via Spring Security 6 eliminating unprotected routes; interactive OpenAPI 3 API contract ready for frontend integration.',
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
        'React Native mobile app (Expo SDK 54) built during the Serratec Residency Multiplatform Final Project for goal tracking, XP/level gamification, QR Code mentorships, and community feeds.',
      context:
        'Serratec Residency Multiplatform Development final project, built in a 6-developer team to create a smooth personal evolution experience across iOS and Android.',
      problem:
        'Consolidate hybrid navigation flows, habit gamification, strict form validation, secure session persistence, and native hardware access into a single mobile application without performance bottlenecks.',
      solution:
        'React Native + Expo SDK 54 development combining hybrid navigation (Drawer, Stack, Tabs), gamification (XP/Levels/Achievements), defensive validation via React Hook Form + Zod, API consumption via Axios/MockAPI, session storage with AsyncStorage/Expo Secure Store, and native Camera/QR Code scanning.',
      development:
        'Worked in a 6-developer team building TypeScript UI screens, REST/MockAPI consumption, reactive context architecture (`AuthContext`), client-side state management, and OS native feature integration (Camera, Gallery, GPS).',
      architectureDecisions: [
        'Hybrid navigation architecture combining Drawer, Stack, and Tabs via React Navigation',
        'Client-side gamification engine with dynamic XP, level, and achievement calculations',
        'Defensive form validation pairing React Hook Form with Zod validation schemas',
        'Native device integration via Expo Image Picker (Camera/Gallery), Expo Location (GPS), and QR Code reader',
        'Secure session persistence with Expo Secure Store and local cache via AsyncStorage',
      ],
      highlights: [
        'React Native + Expo SDK 54 with TypeScript',
        'Integrated hybrid navigation (Drawer, Stack, Tabs)',
        'Full gamification system with XP, Levels, and Badges',
        'Mentorship enrollment with native QR Code verification',
        'Native Camera, Gallery, GPS, and Expo Secure Store access',
        'Defensive form validation with React Hook Form + Zod',
      ],
      technologies: [
        'React Native',
        'Expo SDK 54',
        'TypeScript',
        'React Navigation',
        'Zod',
        'React Hook Form',
        'Axios',
        'AsyncStorage',
        'Expo Secure Store',
      ],
      results:
        'Fluid navigation across 3 hybrid flows (Drawer, Stack, Tabs); XP and level gamification engine for goal tracking; defensive form validation using React Hook Form + Zod; native QR Code attendance verification for mentorships alongside secure session storage via Expo Secure Store.',
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
        'Interactive timeline covering 30 years of PlayStation hardware built in React, TypeScript, and Framer Motion, published on Vercel with CI/CD.',
      context:
        'Production web application live on Vercel built to master declarative animations, advanced motion design, and high-performance TypeScript components.',
      problem:
        'Render 30 years of historical hardware specifications and data with rich visual transitions without causing frame drops (FPS) or rendering bottlenecks.',
      solution:
        'Interactive timeline built with React, Vite, and TypeScript, animated via Framer Motion with high-performance interpolation and automated Vercel CI/CD pipeline.',
      development:
        'Authorial project focused on strict hardware data typing, reusable component structure, and automated deployment pipeline on Vercel.',
      architectureDecisions: [
        'Strict typing of historical hardware specs using TypeScript interfaces',
        'Declarative and interpolated animations with Framer Motion avoiding DOM reflows',
        'Automated continuous deployment (CI/CD) pipeline on Vercel triggered by main branch commits',
        '100% responsive layout tailored for smooth navigation across mobile and desktop devices',
      ],
      highlights: [
        'Live production app on Vercel',
        '30 years of PlayStation console history',
        'Advanced motion design with Framer Motion',
        'Automated CI/CD pipeline via GitHub + Vercel',
        'Strictly typed TypeScript architecture',
      ],
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Vite', 'Vercel CI/CD'],
      results:
        'Interactive presentation of 30 years of console hardware in a responsive timeline; declarative animation rendering via Framer Motion without UI lag; automated CI/CD pipeline on Vercel linked to GitHub commits.',
      links: {
        github: 'https://github.com/DevYuriVieira/playstation-evolution-timeline',
        demo: 'https://playstation-evolution-timeline.vercel.app',
      },
    },
    {
      id: 'django-ecommerce',
      title: 'Django Full-Stack E-Commerce',
      category: 'Full Stack Python/Django',
      featured: true,
      contextTag: 'Full-Stack Python (Service Layer & Webhooks)',
      collaboration: 'Personal project',
      description:
        'Full-stack e-commerce platform built with Django and frameworkless Vanilla JS, featuring Service Layer pattern, atomic transactions, idempotent async payment webhooks, versioned API, and HTML5 <template> modular rendering.',
      context:
        'Authorial web application engineered to simulate a production-grade e-commerce architecture, focusing on backend service decoupling without DRF overhead and lightweight frontend state management without JS frameworks.',
      problem:
        'Implement a resilient payment and checkout pipeline, preventing duplicate concurrent transaction processing (idempotent webhooks), eliminating N+1 ORM query performance bottlenecks, and manipulating DOM safely without SPA framework overhead.',
      solution:
        'Decoupled MVT architecture with Django Service Layer, atomic transaction control (transaction.atomic), query optimization via prefetch_related, idempotent payment webhooks (pending -> paid), modular Vanilla JS frontend with native HTML5 <template> (XSS/CSRF security), and strategic debounce.',
      development:
        'End-to-end full-stack development covering relational data modeling (orders, coupons, favorites), custom versioned API endpoints without DRF for total HTTP response control, Service Layer implementation, and feature-isolated JS modules.',
      architectureDecisions: [
        'Django Service Layer pattern ensuring clean domain logic isolation decoupled from views',
        'Idempotent async payment Webhook processing (pending -> paid status transitions) backed by atomic database transactions',
        'ORM query performance optimization with prefetch_related eliminating N+1 query bottlenecks in catalog & order lists',
        'Modular frameworkless Vanilla JS (ES6+) frontend using HTML5 <template> componentization and textContent (zero XSS vector)',
        'Versioned API access control with strict CSRF protection and custom client-side state management',
      ],
      highlights: [
        'Django Service Layer & Atomic Transactions',
        'Idempotent async payment Webhook handling',
        'ORM query optimization with prefetch_related (Zero N+1)',
        'Modular Vanilla JS frontend with HTML5 <template>',
        'Versioned API endpoints without DRF overhead',
        'Dynamic cart, coupon rules, and user wishlist',
        'Strict native protection against CSRF & XSS',
      ],
      technologies: [
        'Python',
        'Django',
        'MySQL',
        'Vanilla JS (ES6+)',
        'HTML5 <template>',
        'REST API',
        'Idempotent Webhooks',
        'Service Layer',
      ],
      results:
        'Idempotent async payment Webhook processing eliminating double charges under concurrent requests; N+1 query elimination via prefetch_related; lightweight Vanilla JS frontend architecture delivering zero framework overhead and safe DOM manipulation via native <template> and textContent.',
      links: {
        github: 'https://github.com/DevYuriVieira/django-ecommerce',
      },
    },
    {
      id: 'anime-weather-platform',
      title: 'Anime Weather Platform',
      category: 'Frontend + APIs + IA',
      featured: false,
      contextTag: 'Frontend & AI Integration',
      collaboration: 'Collaborative project (Pair Programming)',
      description:
        'Reactive web application combining weather data (OpenWeather API) and anime catalog (Jikan API) with Google Gemini AI, integrating structured JSON recommendations and an interactive chatbot generating weather puns.',
      context:
        'Platform built in Pair Programming format to practice asynchronous consumption of composite external APIs and generative AI SDKs.',
      problem:
        'Orchestrate real-time data from multiple external APIs and feed a language model to produce both structured JSON UI responses and interactive chatbot conversations without connection failures.',
      solution:
        'Development of a React and TypeScript interface consuming OpenWeather API for local weather, Jikan API for anime catalog, and Google Gemini AI SDK via Prompt Engineering (returning strict JSON for recommendation cards and interactive textContent for the weather pun chatbot).',
      development:
        'Pair programming development covering async state management, dynamic JSON and text rendering (`textContent`), API reconnection fallbacks, and glassmorphism UI components.',
      architectureDecisions: [
        'Async consumption and real-time cross-referencing of OpenWeather API (weather) and Jikan API (anime catalog)',
        'Integration with Google Gemini AI SDK combining Prompt Engineering for strict JSON cards and an interactive weather pun chatbot',
        'Responsive frontend built with React, TypeScript, and Vite featuring glassmorphism UI',
        'Defensive async request handling with loading states and error fallbacks',
      ],
      highlights: [
        'Prompt Engineering for structured JSON responses',
        'Interactive chatbot powered by Google Gemini AI',
        'Contextual weather puns via text content manipulation',
        'Real-time weather data via OpenWeather API',
        'Anime catalog consumption via Jikan API',
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'OpenWeather API', 'Jikan API', 'Google Gemini AI'],
      results:
        'Contextual recommendations generated by cross-referencing OpenWeather and Jikan API data via Google Gemini AI; integration of structured JSON responses for dynamic UI assembly alongside an interactive weather pun chatbot using text content manipulation (`textContent`); responsive glassmorphism UI.',
      links: {
        github: 'https://github.com/DevYuriVieira/anime-weather-platform',
      },
    },
    {
      id: 'payroll-system-java',
      title: 'Sistema de Folha de Pagamento',
      category: 'Backend Java',
      featured: false,
      contextTag: 'Backend Java / MVC+DAO Architecture',
      collaboration: 'Collaborative project (4 developers - Serratec Residency)',
      description:
        'Pure Java 17 backend system (without ORM) built in a 4-developer team for automated batch payroll processing, progressive INSS and IRRF tax calculation, PostgreSQL persistence via JDBC, and CSV export.',
      context:
        'Final evaluation project for the Object-Oriented Programming (OOP) course at Serratec ICT Residency 2026.1 (Class 36 Nova Friburgo), developed in a 4-developer team (Yuri Vieira, Yasmim Veríssimo, Gabriel Maia, Ícaro Pinheiro) to simulate a corporate HR financial calculation engine.',
      problem:
        'Batch process CSV data files containing employee and dependent records, enforce strict business logic validation, and calculate progressive tax brackets (INSS and IRRF) with dependent deductions while avoiding floating-point financial inaccuracies.',
      solution:
        'Layered architecture in pure Java 17 (MVC + DAO) without ORM frameworks, relational persistence via pure JDBC in PostgreSQL, database connection managed via Singleton pattern (ConexaoBancoDados), financial precision using BigDecimal (RoundingMode.HALF_UP), custom domain exceptions (CpfInvalidoException, DependenteSemTitularException), and defensive CSV I/O (CsvReader, CsvWriter).',
      development:
        'Collaborative team effort designing the domain UML model, implementing data access abstractions (DAO/DAOImpl), building payroll service logic (CalculoFolhaService), creating custom domain exceptions, and enforcing strict CPF validation & referential integrity.',
      architectureDecisions: [
        'Layered MVC + DAO architecture built in pure Java 17 without ORM frameworks, enforcing clean separation of concerns and SQL fundamentals',
        'Strict usage of BigDecimal with RoundingMode.HALF_UP across all tax and salary computations, eliminating floating-point rounding errors',
        'Singleton Pattern applied to the JDBC connection manager (ConexaoBancoDados) to optimize database connection overhead',
        'Custom domain exception handling (CpfInvalidoException, DependenteSemTitularException, SalarioInvalidoException) preventing corrupt database records',
        'Dual-tier persistence strategy: relational database transactions in PostgreSQL combined with automated CSV payroll report export',
      ],
      highlights: [
        'Automated calculation of progressive INSS & IRRF tax brackets',
        'Financial precision using BigDecimal & RoundingMode.HALF_UP',
        'Layered MVC + DAO architecture in Java 17 (frameworkless)',
        'JDBC connection manager optimized with Singleton Pattern',
        'Custom domain exception handling & strict CPF validation',
        'Defensive batch CSV parsing and automated report export',
        'Collaborative 4-developer team project (Serratec Residency 2026.1)',
      ],
      technologies: [
        'Java 17',
        'PostgreSQL',
        'JDBC',
        'MVC Architecture',
        'DAO Pattern',
        'BigDecimal',
        'Singleton Pattern',
        'CSV I/O Parsing',
      ],
      results:
        'Automated, zero-defect calculation of progressive INSS and IRRF tax brackets adhering to official labor legislation; real-time validation of CPFs and dependent relationships using custom domain exceptions; dual-tier transactional persistence in PostgreSQL and automated CSV report generation.',
      links: {
        github: 'https://github.com/DevYuriVieira/payroll-system-java',
      },
    },
    {
      id: 'fleet-management-system',
      title: 'Fleet Management System',
      category: 'Frontend Application',
      featured: false,
      contextTag: 'Logistics Operational Frontend',
      collaboration: 'Collaborative project',
      description:
        'React and TypeScript SPA operational dashboard built to track logistics fleets and drivers in real time.',
      context:
        'Collaborative application designed to optimize monitoring of vehicle maintenance states and driver assignments across a logistics operation.',
      problem:
        'Logistics operators required a centralized, fast interface to filter vehicles by maintenance status without relying on fragmented spreadsheets.',
      solution:
        'Single Page Application (SPA) in React and TypeScript with React Router navigation, Styled Components modular styling, and reactive state management for dynamic filtering.',
      development:
        'Development of modular reusable components, typed data contracts with TypeScript, and declarative client-side navigation without page reloads.',
      architectureDecisions: [
        'Reactive SPA construction in React with TypeScript for fleet schema validation',
        'Modular styling using the Styled Components library',
        'Declarative client-side routing between forms and dashboards via React Router',
        'Modular component architecture focused on logistics operator usability',
      ],
      highlights: [
        'Reactive SPA built with React and TypeScript',
        'Scoped styling with Styled Components',
        'Client-side seamless navigation via React Router',
        'Dynamic filtering by vehicle status and maintenance',
        'Reusable component architecture',
      ],
      technologies: ['React', 'TypeScript', 'Styled Components', 'Vite'],
      results:
        'Clear, centralized visualization of fleet operations; instant vehicle filtering by availability and maintenance status; fast navigation between operational views via React Router.',
      links: {
        github: 'https://github.com/DevYuriVieira/fleet-management-system',
        demo: 'https://fleet-management-system-chi.vercel.app/',
      },
    },
    {
      id: 'hogwarts-interactive-hub',
      title: 'Hogwarts Interactive Hub',
      category: 'Frontend Architecture',
      featured: false,
      contextTag: 'Frontend Vanilla JS',
      collaboration: 'Personal project',
      description:
        'Immersive Single Page Application inspired by the Wizarding World built entirely in Vanilla JavaScript (ES6 Modules) without frameworks.',
      context:
        'Authorial project created to practice building rich web applications using exclusively native browser APIs (DOM, History API, Intersection Observer).',
      problem:
        'Create an immersive experience with interactive animations (Sorting Hat ceremony with typewriter effect and Marauders Map with mathematical footsteps) while maintaining high performance without frameworks.',
      solution:
        'Vanilla JS application with a custom SPA router over History API, object-oriented ES6 Modules components, CSS Variables handling Lumos/Nox theme switching, and lazy animation via Intersection Observer.',
      development:
        'Development of an authorial client-side router, implementation of trigonometric math for graphic element trajectories, and local state management in LocalStorage.',
      architectureDecisions: [
        'Custom frameworkless client-side SPA router built from scratch manipulating native History API',
        'Advanced interactive animations featuring typewriter effects and trigonometric math for Marauder Map footsteps',
        'Dynamic DOM rendering engine in Vanilla JS replacing static HTML with modular ES6 components',
        'Global Lumos/Nox theme switching system updating CSS custom properties (:root) with keyboard shortcut support',
        'Performance & frame rendering optimization using Intersection Observer API for lazy animations and CSS clamp() responsiveness',
      ],
      highlights: [
        'Custom frameworkless SPA router on History API',
        'Modular architecture with ES6 Modules',
        'Trigonometric footstep animations on Marauder Map',
        'Sorting Hat Ceremony with Typewriter effect',
        'Global Lumos/Nox theme system with LocalStorage',
        'Native performance & lazy loading with Intersection Observer',
      ],
      technologies: [
        'Vanilla JS',
        'ES6 Modules',
        'HTML5',
        'CSS3',
        'DOM API',
        'History API',
        'Intersection Observer',
        'LocalStorage',
      ],
      results:
        'Seamless navigation without page reloads and with zero external dependencies; fluid mathematical animations; dynamic theme switching persisted in the browser.',
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
      contextTag: 'Frontend E-commerce (MPA)',
      collaboration: 'Collaborative project (4 developers - Serratec Residency)',
      description:
        'High-end B2C/B2B premium seafood e-commerce platform built with frameworkless Multi-Page Architecture (MPA) in Vanilla JS (ES6+), featuring offcanvas LocalStorage cart, async ViaCEP shipping calculation, and MockAPI Admin CRUD dashboard.',
      context:
        'Final evaluation project for the Front-End Web Development course at Serratec ICT Residency 2026.1 (Class 36 Nova Friburgo), built in a 4-developer team (Yuri Vieira, Yasmim Veríssimo, Gabriel Maia, Ícaro Pinheiro).',
      problem:
        'Deliver an advanced e-commerce user journey (dynamic search & category filtering, persistent cart, wholesale rules, real-time async shipping, and protected administrative CRUD dashboard) without SPA framework overhead.',
      solution:
        'Multi-Page Architecture (MPA) setup in Vanilla JS and Bootstrap 5.3, offcanvas LocalStorage cart state management, non-blocking REST API integration with ViaCEP for shipping, and MockAPI product CRUD.',
      development:
        'Collaborative teamwork on frontend architecture design, building feature-isolated JS modules (cart, auth, catalog, admin, checkout), non-blocking API consumption with async/await, wholesale discount rules (> R$ 500 or > 5kg), and Mobile-First responsive CSS styling.',
      architectureDecisions: [
        'Frameworkless Multi-Page Architecture (MPA) in Vanilla JS (ES6+) eliminating heavy framework abstraction overhead for maximum performance',
        'Feature-isolated JS modules for clean separation of concerns (cart.js, auth.js, catalogo.js, admin.js, checkout.js, dashboard-crud.js)',
        'Encapsulated client-side state in LocalStorage for persistent offcanvas shopping cart, user sessions, and catalog state',
        'Real-time asynchronous shipping calculation integrating ViaCEP REST API using non-blocking async/await flows',
        'Private administrative dashboard with full product CRUD (Create, Read, Update, Delete) integrated with MockAPI',
        'Dynamic wholesale pricing rules (automatic discount > R$500 or > 5kg) and URL Query String catalog filters',
      ],
      highlights: [
        'Frontend e-commerce in Vanilla JS (ES6+) & Bootstrap 5.3',
        'Private Admin dashboard with complete MockAPI CRUD',
        'Persistent offcanvas shopping cart in LocalStorage',
        'Real-time async shipping calculation via ViaCEP API',
        'Automatic wholesale discount rules (> R$ 500 or > 5kg)',
        'Modular MPA structure with zero framework overhead',
        'Collaborative 4-developer team project (Serratec Residency 2026.1)',
      ],
      technologies: [
        'Vanilla JS (ES6+)',
        'HTML5',
        'CSS3',
        'Bootstrap 5.3',
        'ViaCEP API',
        'MockAPI',
        'LocalStorage',
      ],
      results:
        'Automated real-time address lookup and shipping calculation via ViaCEP REST API; offcanvas shopping cart state maintained across page transitions; secure administrative dashboard for catalog management.',
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
        'Interactive military aircraft technical catalog built in React, TypeScript, and Styled Components with dynamic filtering.',
      context:
        'Authorial project built to practice modular componentization in React and strict typing of complex technical objects.',
      problem:
        'Present detailed technical specifications of military aircraft in a dynamic layout allowing instant filtering without reloading.',
      solution:
        'Interactive catalog in React and Styled Components with country and category filters, declarative routes via React Router, and React Hooks state.',
      development:
        'Authorial development using React, TypeScript, and Vite with strictly typed and scoped components.',
      architectureDecisions: [
        'Reusable component architecture in React with strict props passing',
        'Scoped and dynamic component styling using Styled Components',
        'Declarative client-side routing for detail views via React Router',
        'Real-time filtering managed by local state using React Hooks',
      ],
      highlights: [
        'Clean and reusable componentization in React',
        'Aeronautical data typing in TypeScript',
        'Dynamic styling with Styled Components',
        'Client-side routing with React Router',
        'Local state management with React Hooks',
      ],
      technologies: ['React', 'JavaScript', 'React Router', 'Styled Components', 'Vite'],
      results:
        'Real-time technical specification lookup and comparison for military aircraft filtered by country and category; reactive layout powered by typed, scoped components.',
      links: {
        github: 'https://github.com/DevYuriVieira/modern-fighter-jets',
        demo: 'https://modern-fighter-jets.vercel.app/',
      },
    },
    {
      id: 'dental-clinic-db',
      title: 'Dental Clinic Management System (DCMS)',
      category: 'Relational Database',
      featured: false,
      contextTag: 'Database Modeling',
      collaboration: 'Collaborative project (6 developers - Serratec Database Final Project)',
      description:
        'Relational database system built in PostgreSQL 16+ during the Serratec Residency for dental clinic management, featuring database-level business rules and validation.',
      context:
        'Serratec Residency Database final project built in a 6-developer team to provide a robust, high-performance transactional foundation for dental applications.',
      problem:
        'Centralize appointment scheduling, procedure history, and professional dentist records (CRO) with referential integrity guarantees, preventing invalid registrations or orphan records.',
      solution:
        'Normalized 3FN conceptual and logical modeling in PostgreSQL 16+, enforcing referential integrity via RESTRICT and CASCADE, defensive Regex CPF validations, schedule restrictions, and N:N procedure mapping.',
      development:
        'Worked in a 6-developer team covering ERD modeling, writing complete SQL scripts (DDL, DML, DQL), strategic index optimization, and creating analytical SQL Views for clinical reporting.',
      architectureDecisions: [
        'Strict normalization up to 3rd Normal Form (3FN) covering entities such as patients, dentists, schedules, and appointments',
        'Enforcement of business rules via DDL: Regex CPF validation, logical date check constraints, and Unique fields',
        'Strict referential integrity control using RESTRICT rules (orphan prevention) and CASCADE triggers',
        'Performance optimization for frequent queries via relational Indexes and analytical SQL Views for reporting',
      ],
      highlights: [
        'PostgreSQL 16+ relational database normalized in 3FN',
        'Business rules via DDL & Regex CPF validation',
        'Referential integrity with RESTRICT and CASCADE',
        'N:N procedure catalog mapping for appointments',
        'Analytical SQL Views & Index performance optimization',
      ],
      technologies: ['PostgreSQL 16+', 'Advanced SQL', 'DDL', 'DML', 'DQL', 'Database Indexing', 'SQL Views'],
      results:
        '3FN normalized relational structure in PostgreSQL; elimination of clinical data redundancy; fast operational report generation using analytical SQL Views.',
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
        'Reactive authentication interface built in React tracking the cursor vector in real time to animate character expressions.',
      context:
        'Authorial UX Engineering prototype studying micro-interactions and animations driven by form input events.',
      problem:
        'Transform static authentication forms into engaging visual experiences that react dynamically to user behavior.',
      solution:
        'React and CSS Modules interface featuring characters tracking mouse position and reacting to input focus and typing.',
      development:
        'Authorial development applying mouse cursor vector calculations, CSS Modules scoping, and Light/Dark Mode support.',
      architectureDecisions: [
        'Real-time cursor vector position calculation controlling character eye tracking',
        'React state management toggling facial expressions based on input validation status',
        'Scoped styling with CSS Modules ensuring zero CSS rule leakage',
        'Smooth navigation between login and password recovery flows via React Router',
      ],
      highlights: [
        'Real-time cursor tracking for eye animation',
        'Reactive characters driven by form states',
        'Scoped modular styling with CSS Modules',
        'Native Light and Dark Mode support',
        'Screen flow navigation with React Router',
      ],
      technologies: ['React', 'Vite', 'CSS Modules', 'React Router'],
      results:
        'Reactive animations on login form tracking mouse vector in real time; complete CSS style isolation via CSS Modules.',
      links: {
        github: 'https://github.com/DevYuriVieira/kinetic-auth-ux-showcase',
        demo: 'https://kinetic-auth-ux-showcase.vercel.app/',
      },
    },
  ],
};

export const PROJECTS_DATA: readonly Project[] = PROJECTS_I18N['pt-BR'];

export function getProjectsData(lang: SupportedLang): readonly Project[] {
  return PROJECTS_I18N[lang];
}
