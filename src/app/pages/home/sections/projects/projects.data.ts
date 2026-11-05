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
        'Plataforma web corporativa desenvolvida em parceria com o ZEISS Group para digitalizar e otimizar a recomendação técnica de lentes em lojas ZEISS Vision Center e óticas parceiras credenciadas.',
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
        'Extração automatizada de prescrições via OCR e pipeline de IA (n8n / RAG)',
        'Interface de validação clínica assistida para conferência prévia dos parâmetros óticos',
        'Motor de recomendação personalizada alinhando especificações clínicas aos hábitos do paciente',
        'Dashboards analíticos de inteligência comercial com dados de conversão e desempenho por filial',
        'Autenticação JWT com Controle de Acesso por Perfis (RBAC)',
        'Arquitetura corporativa com React, Spring Boot 4 e PostgreSQL (Projeto sob NDA)',
      ],
      technologies: [
        'React',
        'TypeScript',
        'Java',
        'Spring Boot 4',
        'PostgreSQL',
        'n8n',
        'OCR',
        'RAG / IA',
      ],
      results:
        'Padronização do processo de recomendação técnica de lentes nas ópticas parceiras; transição do fluxo manual de prescrições para captura automatizada via OCR com etapa de confirmação humana; geração de inteligência comercial com visibilidade em tempo real sobre produtos mais recomendados e demanda por região para o ZEISS Group.',
      links: {},
    },
    {
      id: 'fleetops-api',
      title: 'FleetOps API',
      category: 'Backend Distribuído (.NET 10)',
      featured: true,
      contextTag: 'Estudo Arquitetural & Referência',
      collaboration: 'Projeto autoral de referência técnica',
      description:
        'Motor backend distribuído e orientado a eventos para gestão de frotas e logística em .NET 10 (C# 14), demonstrando Clean Architecture, Transactional Outbox, RabbitMQ, PostgreSQL 18 e Keycloak OIDC com 300 testes automatizados.',
      context:
        'Projeto de estudo e referência técnica para resolver desafios críticos de sistemas distribuídos: prevenção de dual-write hazard, semântica de entrega at-least-once com consumidor idempotente e concorrência defensiva.',
      problem:
        'Prevenção de inconsistência entre banco relacional e mensageria (dual-write hazard), duplicação de processamento por falhas de rede transitórias e contenção de locks em workers de polling concorrentes.',
      solution:
        'Arquitetura orientada a eventos com Transactional Outbox e FOR UPDATE SKIP LOCKED no PostgreSQL 18, mensageria com Publisher Confirms no RabbitMQ (DLX/TTL/DLQ), concorrência otimista via xmin, rastreamento distribuído W3C com OpenTelemetry/Jaeger e autenticação OIDC via Keycloak (RS256/JWKS).',
      development:
        'Desenvolvimento baseado em Clean Architecture e DDD em 5 contextos delimitados (Veículos, Motoristas, Entregas, Rotas e Manutenção), implementação de worker resiliente com RabbitMQ.Client 7.2.2 e suíte de 300 testes automatizados.',
      architectureDecisions: [
        'Transactional Outbox Pattern integrado ao DbContext.SaveChangesAsync eliminando dual-write hazard',
        'Concorrência multi-worker via PostgreSQL FOR UPDATE SKIP LOCKED sem espera de locks',
        'Concorrência otimista física via coluna de sistema PostgreSQL xmin (MVCC)',
        'Consumidor idempotente com chave MessageId e semântica Bounded At-Least-Once',
        'Topologia resiliente RabbitMQ com Filas TTL de Retry (10s, 30s, 90s) e Dead-Letter Queue (DLQ)',
        'Rastreamento distribuído ponta a ponta W3C traceparent (HTTP → Outbox → RabbitMQ → Consumidor) no Jaeger',
        'Resource Server OAuth 2.0 / OIDC com Keycloak, validação assimétrica RS256 e descoberta JWKS dinâmica',
        'Rate Limiting Fixed Window em memória (RFC 9457 / HTTP 429) e métricas System.Diagnostics.Metrics',
      ],
      highlights: [
        '300 testes automatizados (166 unitários + 134 integração, concorrência e injeção de falhas)',
        'Clean Architecture + DDD com isolamento estrito em 5 contextos delimitados',
        'PostgreSQL 18 com índices parciais únicos e integridade referencial estrita',
        'RabbitMQ 3.x com Async API e Publisher Confirms habilitado',
        'OpenTelemetry .NET + Jaeger UI com visualização causal de latência',
        'Capacidade transacional empírica de 278 RPS em escritas ACID de domínio (k6 P2)',
      ],
      technologies: [
        'C# 14',
        '.NET 10',
        'ASP.NET Core',
        'PostgreSQL 18',
        'EF Core 10',
        'RabbitMQ',
        'Docker Compose',
        'OpenTelemetry',
        'Keycloak OIDC',
        'xUnit (300 Testes)',
      ],
      results:
        '300 testes automatizados aprovados (0 falhas); throughput sustentado de 278 RPS em escritas ACID de domínio no PostgreSQL; recuperação em < 15ms sob spikes; zero perda de eventos sob queda do RabbitMQ e revisão arquitetural verificada.',
      links: {
        github: 'https://github.com/DevYuriVieira/fleetops-api',
      },
    },
    {
      id: 'spring-boot-ecommerce-api',
      title: 'Spring Boot E-Commerce API',
      category: 'Backend Java',
      featured: true,
      contextTag: 'Backend Java / REST API',
      collaboration: 'Projeto colaborativo (5 desenvolvedores - Residência Serratec)',
      description:
        'API RESTful de e-commerce desenvolvida em equipe com Java 17, Spring Boot 3 e PostgreSQL, com envio automatizado de e-mails, integração ViaCEP, totalização de pedidos N:N e documentação OpenAPI 3.',
      context:
        'Projeto final da disciplina de Desenvolvimento de API Restful da Residência em TIC/Software Serratec 2026.1 (Turma 36 Nova Friburgo), desenvolvido em equipe de 5 integrantes (Emanuel Valinhos, Nícolas Oliveira, Nívea D\'Avila, Victor Lima e Yuri Vieira).',
      problem:
        'Construir um ecossistema backend de e-commerce com validação cadastral rigorosa, amarração obrigatória de produtos a categorias, relacionamento N:N entre produtos e pedidos com totalização dinâmica, consumo de serviço postal externo e notificações por e-mail.',
      solution:
        'Arquitetura em camadas (Controller, Service, Repository, Entity, DTO) em Spring Boot com Spring Data JPA/Hibernate, PostgreSQL, segurança com Spring Security, envio transacional de e-mails via JavaMail, integração com ViaCEP, tratamento global de exceções via @ControllerAdvice e Swagger UI.',
      development:
        'Atuação no desenho de entidades e relacionamentos N:N (Produto-Pedido), integração da API do ViaCEP para autopreenchimento de endereços, implementação de serviços de e-mail com JavaMail, validações defensivas com Bean Validation (@NotNull, @Size) e documentação interativa com Springdoc OpenAPI.',
      architectureDecisions: [
        'Arquitetura em camadas desacopladas (Controller, Service, Repository, Entity) garantindo alta coesão e isolamento de regras de negócio',
        'Mapeamento objeto-relacional N:N (Muitos-para-Muitos) entre Pedidos e Produtos com persistência transacional em PostgreSQL via Spring Data JPA',
        'Integração assíncrona/síncrona com API externa do ViaCEP para consulta e preenchimento automático de CEP no cadastro de clientes',
        'Disparo automatizado de e-mails transacionais via Spring Boot Starter Mail (JavaMail) a cada inserção ou atualização de cliente',
        'Tratamento centralizado de exceções com classe anotada com @ControllerAdvice e exceptions de domínio semânticas',
        'Validação defensiva de dados de entrada via Bean Validation e controle de status de pedidos gerenciado via Enums',
        'Documentação viva e interativa de todos os endpoints via Springdoc OpenAPI UI (Swagger v2.8.16)',
      ],
      highlights: [
        'API RESTful em Java 17 e Spring Boot 3 com PostgreSQL',
        'Relacionamento N:N entre Pedidos e Produtos com totalização automática',
        'Integração com serviço externo ViaCEP para consulta de CEP',
        'Envio de e-mails transacionais com Spring Mail (JavaMail)',
        'Tratamento global de exceções com @ControllerAdvice',
        'Validação estrita de dados com Bean Validation e Enums',
        'Documentação interativa com Swagger UI / OpenAPI 3',
        'Projeto colaborativo em equipe de 5 devs (Residência Serratec 2026.1)',
      ],
      technologies: [
        'Java 17',
        'Spring Boot 3',
        'Spring Data JPA',
        'Spring Security',
        'PostgreSQL',
        'Bean Validation',
        'JavaMail',
        'ViaCEP API',
        'Swagger/OpenAPI',
        'Maven',
        'Lombok',
      ],
      summaryProblem: 'Gerenciamento de e-commerce com validação cadastral, integração ViaCEP e disparo de e-mails',
      summarySolution: 'API RESTful em Java 17 e Spring Boot com JPA/Hibernate, Spring Security e JavaMail',
      summaryArch: 'Camadas desacopladas, relação N:N produto-pedido, @ControllerAdvice e Swagger OpenAPI 3',
      summaryResults: 'Preenchimento automático via ViaCEP, totalização de pedidos e e-mails transacionais',
      results:
        'Processamento consistente de pedidos com totalização dinâmica de itens e controle de status via Enum; autopreenchimento de endereços via integração ViaCEP; confirmações automáticas disparadas por e-mail para clientes; cobertura de documentação OpenAPI 3 interativa via Swagger UI.',
      links: {
        github: 'https://github.com/DevYuriVieira/ecommerce-serratec-api',
      },
    },

    {
      id: 'work-fitness',
      title: 'Work-Fitness | Plataforma Comercial & Consultoria',
      category: 'Plataforma Comercial (Freelance)',
      featured: true,
      contextTag: 'Projeto Comercial em Produção',
      collaboration: 'Projeto freelance autoral sob medida',
      client: 'Vinicius Santos (Personal Trainer)',
      description:
        'Plataforma web comercial e motor de avaliação biomecânica desenvolvida sob medida para o personal trainer Vinicius Santos (Arena Complexo Esportivo, Nova Friburgo - RJ), combinando cálculo de composição corporal (IMC OMS, gordura Deurenberg 1991, TMB Mifflin-St Jeor), Clean Architecture desacoplada, acessibilidade WCAG 2.1 AA com VLibras, nota 100/100 no Lighthouse e conversão estruturada para WhatsApp com tags UTM.',
      context:
        'Solução comercial desenvolvida como engenheiro freelancer para o personal trainer Vinicius Santos (formado pela UCB em 2008 e atuante há mais de 15 anos na Arena Complexo Esportivo em Nova Friburgo - RJ), substituindo formulários e planilhas manuais por um fluxo automatizado de captação de leads qualificados com diagnóstico corporal instantâneo.',
      problem:
        'Lentidão em redes móveis com SPAs pesadas provocando desistência de leads antes do clique; contatos desqualificados no WhatsApp sem informações prévias de dores articulares ou rotina física; ausência de critérios de acessibilidade em sites do setor fitness, violando a Lei Brasileira de Inclusão (LBI nº 13.146/2015).',
      solution:
        'Aplicação web em Vanilla TypeScript 5.7 e Vite 6 estruturada em Clean Architecture com desacoplamento estrito entre o núcleo matemático (src/core/ - sem DOM) e a camada visual (src/modules/). Motor biomecânico com equações clínicas (OMS, Deurenberg, Mifflin-St Jeor), conversão com disparo sincronizado em 3 canais (GA4, GTM, Meta Pixel), mensagem pré-formatada no WhatsApp preservando tags UTM, suíte assistiva WCAG 2.1 AA com VLibras, PWA offline com Service Worker e esteira com 170 testes unitários no Vitest e 47 specs E2E no Playwright em 26 viewports.',
      development:
        'Desenvolvimento full-cycle como engenheiro freelancer: desenho da Clean Architecture com núcleo desacoplado, implementação de algoritmos antropométricos em TypeScript puro, arquitetura CSS modular em tokens, suíte assistiva WCAG 2.1 AA (Live Announcer, Leitura Biônica, filtros SVG para daltonismo e fix de Shadow DOM no VLibras), validação em 26 viewports e esteira com 170 testes no Vitest e 47 specs no Playwright.',
      architectureDecisions: [
        'Clean Architecture com isolamento absoluto do núcleo matemático (src/core/ - zero DOM), viabilizando testes unitários puros em microssegundos (ADR-002)',
        'Vanilla TypeScript 5.7 e Vite 6 em vez de frameworks SPA pesados, eliminando taxa de hidratação com bundle de 32.46 kB JS (11.34 kB gzipped) (ADR-001)',
        'Arquitetura CSS modular orientada a tokens em src/styles/ com cascata canônica determinística em main.css e zero runtime de CSS-in-JS (ADR-003)',
        'Motor biomecânico baseado nas equações de Deurenberg (1991) para gordura corporal por idade/sexo, Mifflin-St Jeor para TMB e faixas da OMS para IMC (ADR-004)',
        'Engenharia de conversão multicanal síncrona (GA4, GTM e Meta Pixel) com montagem de mensagem pronta no WhatsApp e preservação de tags UTM (ADR-005)',
        'Suíte de acessibilidade universal WCAG 2.1 AA / Senac com Leitura Biônica, filtros SVG de daltonismo, máscara/régua focal, Live Announcer e VLibras (ADR-006)',
        'Matriz de responsividade rigorosa validada em 26 formatos de tela (de dobráveis estreitos de 280px a ultrawide 32:9 de 5120px) sem corte lateral (ADR-007)',
        'Pílula flutuante de conversão com sincronização dinâmica para ocultar o botão flutuante de WhatsApp via body.has-sticky-bar (ADR-012)',
        'Esteira quádrupla de testes: 170 testes unitários Vitest (20 suítes em < 5s), 47 specs Playwright em 26 viewports, Cypress e carga k6 (ADR-009)',
        'Conteinerização multi-stage imutável (Node 22 Alpine builder + Nginx 1.27 Alpine runtime) com compressão gzip e headers de segurança (ADR-011)',
      ],
      highlights: [
        'Nota perfeita 100/100 nas 4 categorias do Google Lighthouse (Performance, Acessibilidade, Boas Práticas e SEO)',
        '170 testes unitários no Vitest (20 suítes) + 47 specs E2E no Playwright em 26 viewports com 100% de aprovação',
        'Bundle compilado ultraleve de apenas 32.46 kB JS (11.34 kB gzipped) e zero overhead de hidratação',
        'Métricas Core Web Vitals de elite: LCP < 0.8s, CLS = 0.00 e INP < 16ms (P98)',
        'Motor biomecânico com equações clínicas (IMC OMS, gordura Deurenberg 1991, TMB Mifflin-St Jeor)',
        'Suíte de acessibilidade WCAG 2.1 AA com Leitura Biônica, filtros SVG de daltonismo e VLibras sem layout shift',
        'Telemetria multicanal em 3 canais simultâneos (GA4, GTM, Meta Pixel) com retenção de UTM no WhatsApp',
        'PWA Offline com Service Worker nativo e avisos de conectividade via toasts',
        'Conteinerização Docker Compose com imagem multi-stage Nginx Alpine na porta 5500',
      ],
      technologies: [
        'TypeScript',
        'Vite',
        'Clean Architecture',
        'Vitest (170 Testes)',
        'Playwright',
        'Docker',
        'Nginx Alpine',
        'PWA Offline',
        'Google Analytics 4',
        'Meta Pixel',
      ],
      summaryProblem: 'Leads dispersos no WhatsApp, ausência de triagem física prévia e lentidão de builders SPA em redes móveis',
      summarySolution: 'Vanilla TypeScript 5.7 e Vite 6 em Clean Architecture com motor biomecânico desacoplado da interface',
      summaryArch: 'Núcleo matemático puro (OMS/Deurenberg/Mifflin), CSS modular em tokens e suíte WCAG 2.1 AA com VLibras',
      summaryResults: '100/100 Lighthouse, 170 testes Vitest, 47 specs Playwright em 26 telas e bundle de 32 kB',
      results:
        'Plataforma comercial em produção com nota máxima cravada de 100/100 em todas as 4 categorias do Google Lighthouse (LCP < 0.8s, CLS = 0.00, INP < 16ms e bundle de 32 kB); aumento substancial na taxa de conversão de novos alunos para o treinador Vinicius Santos, entregando leads qualificados com queixas articulares e histórico físico direto no WhatsApp; 170 testes automatizados garantindo zero regressões.',
      links: {
        github: 'https://github.com/DevYuriVieira/Work-Fitness',
        demo: 'https://viniciusantos.vercel.app/',
        demoLabel: 'Ver em Produção',
      },
    },
    {
      id: 'farmflow',
      title: 'FarmFlow | Plataforma Agroindustrial & Mobile Precision',
      category: 'Full-Stack Agroindustrial (Mobile & API)',
      featured: true,
      contextTag: 'Mobile Offline-First & API Distribuída',
      collaboration: 'Projeto autoral de arquitetura distribuída',
      description:
        'Plataforma de precisão agrícola e operações críticas de campo combinando aplicativo mobile Offline-First em React Native (Expo SDK 54, React 19) e motor backend distribuído de alta concorrência em Java 21 LTS (Spring Boot 4.1.1, Virtual Threads, RabbitMQ, PostgreSQL 17 particionado) para operações remotas de campo, conformidade regulatória MAPA com assinatura digital SHA-256 e telemetria IoT de pivôs e silos.',
      context:
        'Solução de engenharia desenvolvida para resolver os desafios críticos do agronegócio em campo: conectividade nula ou intermitente, necessidade de assinatura digital em caderno de defensivos para auditoria do MAPA e telemetria contínua de pivôs de irrigação e sensores termométricos de grãos.',
      problem:
        'Gargalo de conexão em áreas rurais remotas provocando perda de apontamentos de pulverização, divergência de estoques químicos, multas pelo MAPA por falha em dossiês e falta de visibilidade em tempo real sobre maquinário e sensores de silos.',
      solution:
        'Arquitetura integrada ponta a ponta: frontend mobile Offline-First com fila transacional FIFO de mutações e reconciliação assíncrona; backend distribuído em Java 21 com Virtual Threads, Transactional Outbox Pattern e FOR UPDATE SKIP LOCKED no RabbitMQ, PostgreSQL 17 com particionamento temporal declarativo e RLS fail-closed, além de 549+ testes automatizados (411 no backend + 138 no mobile).',
      architectureDecisions: [
        'Frontend Mobile Offline-First com fila FIFO transacional em AsyncStorage e reconciliação determinística com netinfo',
        'Módulo regulatório do MAPA com geração de caderno de aplicação e assinatura digital em Canvas com hash SHA-256',
        'Backend em Java 21 LTS com Virtual Threads e Spring Boot 4.1.1 sustentando 2.450 req/s em testes de carga k6',
        'Transactional Outbox Pattern com RabbitMQ (CloudEvents v1.0, DLX, TTL, Dead Letter Queue) e FOR UPDATE SKIP LOCKED',
        'PostgreSQL 17 com Particionamento Temporal Declarativo, índices BRIN e Fail-Closed Row Level Security (RLS)',
        'Sagas distribuídas orquestradas com locks consultivos (pg_try_advisory_xact_lock) e rastreamento W3C traceparent OpenTelemetry',
        'Autenticação Keycloak 26.1 OIDC com proteção contra enumeração IDOR (HTTP 404 em vez de 403) e biometria mobile',
        'Suíte massiva de 549+ testes automatizados (411 no backend com 100 Virtual Threads e 138 no mobile em 26 suítes Jest)',
      ],
      highlights: [
        '549+ testes automatizados (411 testes no Backend Java + 138 testes no Mobile)',
        'Mobile Offline-First em React Native (Expo 54, React 19) com fila FIFO',
        'Backend Java 21 LTS com Virtual Threads sustentando 2.450 req/s (k6)',
        'Transactional Outbox com RabbitMQ e CloudEvents v1.0',
        'PostgreSQL 17 com particionamento temporal e Row Level Security (RLS)',
        'Caderno regulatório MAPA com assinatura digital canvas SHA-256',
        'Telemetria IoT de pivôs de irrigação central e silos graneleiros',
        'Rastreamento distribuído ponta a ponta W3C com OpenTelemetry',
      ],
      technologies: [
        'React Native',
        'Expo SDK 54',
        'Java 21 LTS',
        'Spring Boot 4',
        'Virtual Threads',
        'PostgreSQL 17',
        'RabbitMQ',
        'Offline-First',
        'IoT Telemetry',
        'Docker Compose',
        'Keycloak OIDC',
        'OpenTelemetry',
      ],
      summaryProblem: 'Gargalos de conectividade rural, perdas de apontamento e descompasso de estoque e maquinário',
      summarySolution: 'Arquitetura com Virtual Threads (Java 21), Transactional Outbox, RabbitMQ e PostgreSQL 17',
      summaryArch: 'Saga coreografada, SKIP LOCKED, RLS fail-closed, índices BRIN e CloudEvents v1.0',
      summaryResults: '2.450 req/s em k6, 549+ testes automatizados (411 na API + 138 no mobile) e poda em 0,026ms',
      results:
        'Sincronização 100% resiliente de dados de campo em áreas sem conectividade via fila FIFO; conformidade regulatória estrita com exigências de defensivos do MAPA; capacidade de alta vazão no backend de 2.450 req/s com zero erros 5xx; 549+ testes automatizados garantindo qualidade total entre cliente mobile e API.',
      links: {
        github: 'https://github.com/DevYuriVieira/farmflow-mobile',
        backendGithub: 'https://github.com/DevYuriVieira/farmflow-backend',
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
        'Aplicativo mobile em React Native (Expo SDK 54, React Navigation 7) para evolução pessoal, profissional e comunitária, combinando autenticação com sessão protegida, gamificação por XP e níveis, CRUD de metas com progresso, feed com fallback local e check-in em mentorias via QR Code.',
      context:
        'Projeto final da disciplina de Desenvolvimento Multiplataforma da Residência em TIC/Software Serratec 2026.1 (Turma 36 Nova Friburgo), desenvolvido em equipe de 6 integrantes como ecossistema nativo para iOS e Android focado na jornada de autodesenvolvimento.',
      problem:
        'Fragmentação no acompanhamento de metas diárias, falta de engajamento em rotinas de crescimento pessoal, ausência de validação de presença em mentorias e necessidade de conciliar consumo de APIs com fallback de armazenamento local offline.',
      solution:
        'Arquitetura mobile reativa em React Native 0.81 e Expo SDK 54 com TypeScript 5.9, integrando navegação híbrida tripartite (Drawer, Stack, Tabs via React Navigation 7), motor de gamificação com cálculo de XP/níveis/conquistas, validação estrita com React Hook Form + Zod, consumo de APIs (MockAPI/REST) com fallback local em db.json e AsyncStorage, e acesso nativo a Câmera, Galeria, GPS e QR Code.',
      development:
        'Atuação em equipe de 6 desenvolvedores no desenho de rotas (index, auth.routes, app.routes), gerenciamento de estado global via AuthContext, criação de formulários tipados com Zod e Hook Form, implementação do feed da comunidade com fallback de cache local, fluxo de check-in de mentorias com leitor nativo de QR Code e segurança de credenciais com Expo Secure Store.',
      architectureDecisions: [
        'Navegação híbrida tripartite integrando Drawer, Bottom Tabs e Stack Navigation no React Navigation 7',
        'Motor de gamificação cliente-side com saudação dinâmica por horário, acúmulo de XP, níveis e cards de conquistas',
        'Validação defensiva de formulários combinando React Hook Form com esquemas Zod estritos',
        'Estratégia de dados híbrida com consumo de APIs REST/MockAPI e fallback local tolerante a falhas (db.json e AsyncStorage)',
        'Check-in de presença em eventos e mentorias via leitor e gerador nativo de QR Code',
        'Integração nativa com periféricos via Expo Image Picker (Câmera/Galeria), Expo Location (GPS) e Expo Secure Store',
        'Gerenciamento de sessão persistente e rotas autenticadas controladas centralizadamente pelo AuthContext',
      ],
      highlights: [
        'App Mobile React Native (0.81.5) com Expo SDK 54 e TypeScript 5.9',
        'Navegação híbrida tripartite (Drawer, Bottom Tabs e Stack)',
        'Gamificação com saudação por horário, cálculo de XP, Níveis e Conquistas',
        'Módulo completo de Metas com CRUD e acompanhamento de progresso',
        'Feed da comunidade com fallback local e integração com APIs remotas',
        'Inscrição em mentorias com confirmação de presença por QR Code nativo',
        'Acesso a Câmera, Galeria, GPS, AsyncStorage e Expo Secure Store',
        'Validação robusta de formulários com React Hook Form + Zod',
      ],
      technologies: [
        'React Native',
        'Expo SDK 54',
        'TypeScript',
        'React Navigation 7',
        'React Hook Form',
        'Zod',
        'Axios',
        'AsyncStorage',
        'Expo Secure Store',
        'Expo Image Picker',
        'QR Code Scanner',
      ],
      summaryProblem: 'Fragmentação no acompanhamento de metas, presença em mentorias e falta de engajamento em rotinas de evolução',
      summarySolution: 'App mobile em React Native e Expo SDK 54 com navegação híbrida, gamificação por XP e check-in por QR Code',
      summaryArch: 'Drawer/Tabs/Stack no React Navigation 7, validação Zod + Hook Form, AuthContext e Expo Secure Store',
      summaryResults: 'Gamificação com níveis/conquistas, CRUD de metas com progresso, fallback offline e check-in por QR Code',
      results:
        'Experiência fluida de navegação em iOS e Android com 3 fluxos híbridos coordenados; alta retenção e motivação através do sistema de níveis e XP; processo ágil de credenciamento em mentorias por leitura instantânea de QR Code; e segurança de credenciais com criptografia nativa no Expo Secure Store.',
      links: {
        github: 'https://github.com/DevYuriVieira/aurora-growth-platform',
      },
    },
    {
      id: 'django-ecommerce',
      title: 'Django Full-Stack E-Commerce',
      category: 'Full Stack Python/Django',
      featured: true,
      contextTag: 'Full-Stack Python (Service Layer & Webhooks)',
      collaboration: 'Projeto autoral de referência técnica',
      description:
        'Plataforma de e-commerce full-stack construída com Django 5.x e JavaScript puro (ES6+), implementando fluxo de pagamento assíncrono via webhook idempotente, arquitetura com Service Layer sem DRF, transações atômicas e renderização nativa baseada em HTML5 <template>.',
      context:
        'Projeto autoral desenvolvido para simular uma arquitetura de produção real de e-commerce, explorando desacoplamento de regras de negócio no backend através do padrão Service Layer e um frontend modular ultraleve sem overhead de frameworks SPA.',
      problem:
        'Implementar um fluxo de checkout e pagamentos resiliente prevenindo cobranças duplicadas em requisições concorrentes (webhooks idempotentes), eliminando problemas de lentidão de N+1 queries no ORM e manipulando a DOM com segurança sem a carga de frameworks pesados.',
      solution:
        'Arquitetura desacoplada utilizando Django como API (sem DRF para controle total da camada HTTP), padrão Service Layer para isolamento de regras de negócio, controle transacional com transaction.atomic, consultas otimizadas com prefetch_related, simulação de webhook de pagamento assíncrono (transição pending -> paid), e frontend modular em Vanilla JS com templates HTML5 e manipulação segura via textContent.',
      development:
        'Desenvolvimento full-stack autoral cobrindo modelagem relacional de pedidos, cupons de desconto com regras de negócio e favoritos; endpoints REST versionados em JSON; lógica de webhook idempotente para proteção contra reenvios; gerenciamento de estado cliente-side centralizado; e estratégia de debounce na busca.',
      architectureDecisions: [
        'Padrão Service Layer no Django para isolamento completo da lógica de domínio e desacoplamento das Views',
        'Processamento assíncrono idempotente de Webhooks de pagamento (transição de status pending -> paid) com transações atômicas',
        'Otimização de performance no ORM com prefetch_related eliminando gargalos de N+1 queries no catálogo e pedidos',
        'Frontend modular em JavaScript puro com componentização via <template> nativo do HTML5 e manipulação segura com textContent (XSS zero)',
        'Controle de acesso por API REST versionada com proteção CSRF rigorosa e gerenciamento de estado cliente-side customizado',
        'Eliminação deliberada do Django REST Framework para controle minucioso do ciclo de vida das requisições HTTP',
      ],
      highlights: [
        'Service Layer & Transações Atômicas (transaction.atomic) no Django',
        'Processamento assíncrono idempotente via Webhook de pagamento (pending -> paid)',
        'Otimização de consultas ORM com prefetch_related (Zero N+1 queries)',
        'Frontend modular em JavaScript puro com <template> HTML5 e textContent',
        'API REST versionada com respostas em JSON sem dependência do DRF',
        'Sistema dinâmico de carrinho lateral, cupons de desconto e lista de favoritos',
        'Proteção nativa rigorosa contra ataques CSRF e injeção XSS',
        'Estratégia de debounce para redução de requisições de busca desnecessárias',
      ],
      technologies: [
        'Python 3.11+',
        'Django 5.x',
        'SQLite',
        'Vanilla JS (ES6+)',
        'HTML5 <template>',
        'CSS3 Modern',
        'REST API Versionada',
        'Webhooks Idempotentes',
        'Service Layer',
      ],
      summaryProblem: 'Cobranças duplicadas em pagamentos concorrentes, gargalos de N+1 queries e overhead de frameworks SPA',
      summarySolution: 'E-commerce full-stack em Django 5 e Vanilla JS com Service Layer desacoplada e webhook idempotente',
      summaryArch: 'Transações atômicas, prefetch_related, API sem DRF, renderização com <template> e debounce na busca',
      summaryResults: 'Transição pending -> paid sem duplicidade, zero N+1 no ORM, proteção CSRF/XSS e zero overhead de bundle',
      results:
        'Processamento assíncrono idempotente de Webhooks de pagamento zerando cobranças duplicadas; eliminação total de N+1 queries através de prefetch_related; arquitetura frontend em JavaScript puro com zero overhead de frameworks e manipulação estritamente segura da DOM via <template> e textContent.',
      links: {
        github: 'https://github.com/DevYuriVieira/liquor-store-django',
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
      summaryProblem: 'Processamento em lote de funcionários via CSV e cálculo progressivo de INSS/IRRF',
      summarySolution: 'Arquitetura em camadas MVC e DAO em Java 17 puro com persistência JDBC no PostgreSQL',
      summaryArch: 'Padrões Singleton e DAO, precisão com BigDecimal e exceções customizadas de domínio',
      summaryResults: 'Cálculo tributário de alta precisão sem imprecisão financeira e dupla persistência (BD e CSV)',
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
      id: 'anime-weather-platform',
      title: 'Anime Weather Platform',
      category: 'Frontend + APIs + IA',
      featured: false,
      contextTag: 'Frontend & Integração com IA',
      collaboration: 'Projeto colaborativo (Pair Programming - Yuri Vieira & Micaela Paes)',
      description:
        'Sistema de orquestração frontend que combina análise climática em tempo real (OpenWeather API), motor de recomendação atmosférica de animes (Jikan API / MyAnimeList), temas adaptativos ao clima via CSS Modules e assistente contextual com Google Gemini AI.',
      context:
        'Plataforma desenvolvida em Pair Programming por Yuri Vieira e Micaela Paes durante a Residência Serratec, projetada para explorar a orquestração assíncrona de múltiplas APIs REST combinadas com IA generativa contextual.',
      problem:
        'Orquestrar fluxos de dados heterogêneos em tempo real (geolocalização, condições meteorológicas e catálogo cultural), mapeando atmosferas climáticas em humores e gêneros com temas dinâmicos e assistente de IA sem bloquear a interface.',
      solution:
        'Aplicação React 18 e Vite com arquitetura em camadas e pipeline lógico multicamada (Clima → Humor → Gênero de Anime), integrando OpenWeather API, Jikan API e Google Gemini SDK via Engenharia de Prompts, estilização com CSS Modules e Glassmorphism adaptativo ao tempo, autenticação simulada com rotas protegidas e ambiente imersivo Lofi.',
      development:
        'Desenvolvimento em pair programming cobrindo o motor de mapeamento meteorológico-cultural, integração com o SDK do Google Gemini para respostas contextuais e chatbot de humor climático, isolamento de estilos com CSS Modules, gerenciamento de estado global no React e tratamento defensivo com fallbacks de reconexão de APIs.',
      architectureDecisions: [
        'Pipeline lógico multicamada mapeando Clima → Humor Atmosférico → Gênero de Anime (Ex: Céu Limpo → Slice of Life, Chuva → Drama, Tempestade → Ação/Psicológico)',
        'Orquestração assíncrona consumindo dados meteorológicos da OpenWeather API e catálogo do MyAnimeList via Jikan API',
        'Assistente de clima contextualizado via Google Gemini SDK considerando cidade, temperatura, condição atmosférica e animes sugeridos',
        'Interface visual adaptativa com temas que reagem dinamicamente ao clima ao vivo via React Global State e CSS Modules isolados',
        'Design imersivo combinando estética Glassmorphism, microinterações e ambientação sonora Lofi',
        'Módulo de autenticação simulada demonstrando proteção de rotas, validação de campos e fluxo de redirecionamento',
      ],
      highlights: [
        'Pipeline de recomendação atmosférica: Clima → Humor → Gênero',
        'Assistente contextual com Google Gemini SDK',
        'Orquestração de APIs: OpenWeather + Jikan API (MyAnimeList)',
        'Temas adaptativos em tempo real baseados nas condições climáticas',
        'Estilização modular e isolada com CSS Modules e Glassmorphism',
        'Experiência imersiva com ambiente sonoro Lofi integrado',
        'Fluxo de autenticação simulada com rotas protegidas',
        'Projeto colaborativo em Pair Programming (Yuri Vieira & Micaela Paes)',
      ],
      technologies: [
        'React 18',
        'Vite',
        'OpenWeather API',
        'Jikan API',
        'Google Gemini SDK',
        'CSS Modules',
        'JavaScript ES6+',
        'Glassmorphism',
      ],
      summaryProblem: 'Desafio de orquestrar dados climáticos em tempo real com acervo de animes e IA generativa contextual',
      summarySolution: 'Frontend React e Vite orquestrando OpenWeather, Jikan API e Google Gemini com pipeline Clima → Humor → Gênero',
      summaryArch: 'Pipeline multicamada, CSS Modules com temas adaptativos ao clima, Glassmorphism e rotas protegidas',
      summaryResults: 'Recomendações atmosféricas em tempo real, assistente com IA contextualizada e interface imersiva adaptativa',
      results:
        'Orquestração precisa de múltiplas APIs externas com renderização fluida; mapeamento determinístico de clima em humores e recomendações; assistente com Google Gemini capaz de contextualizar recomendações com base no clima da cidade do usuário; e temas dinâmicos adaptados ao vivo.',
      links: {
        github: 'https://github.com/DevYuriVieira/anime-weather-platform',
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
      summaryProblem: 'Simulação de e-commerce de produção sem backend tradicional',
      summarySolution: 'Arquitetura MPA em Vanilla JS com estado cliente em LocalStorage',
      summaryArch: 'Separação modular por funcionalidade e integração assíncrona (ViaCEP/MockAPI)',
      summaryResults: 'Zero overhead de frameworks, frete dinâmico e regras de atacado automatizadas',
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
      technologies: [
        'PostgreSQL 16+',
        'SQL Avançado',
        'DDL',
        'DML',
        'DQL',
        'Database Indexing',
        'SQL Views',
      ],
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
        'Corporate web platform developed in partnership with the ZEISS Group to digitize, standardize, and optimize technical service and lens recommendations across ZEISS Vision Center stores and authorized partner optical clinics.',
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
        'Extracción automatizada de prescripciones vía OCR y pipeline de IA (n8n / RAG)',
        'Interfaz de validación clínica asistida para comprobación previa de parámetros ópticos',
        'Motor de recomendación personalizada combinando especificaciones clínicas y hábitos del paciente',
        'Dashboards analíticos de inteligencia comercial con métricas de conversión y rendimiento por sucursal',
        'Autenticación JWT y Control de Acceso Basado en Roles (RBAC)',
        'Arquitectura corporativa con React, Spring Boot 4 y PostgreSQL (Proyecto bajo NDA)',
      ],
      technologies: [
        'React',
        'TypeScript',
        'Java',
        'Spring Boot 4',
        'PostgreSQL',
        'n8n',
        'OCR',
        'RAG / AI',
      ],
      results:
        'Estandarización del proceso de recomendación técnica de lentes en ópticas asociadas; transición de la captura manual de prescripciones a la lectura automatizada por OCR con etapa de confirmación humana; generación de inteligencia comercial con visibilidad en tiempo real de productos más recomendados y demanda por región para ZEISS Group.',
      links: {},
    },
    {
      id: 'fleetops-api',
      title: 'FleetOps API',
      category: 'Distributed Backend (.NET 10)',
      featured: true,
      contextTag: 'Architectural Study & Reference',
      collaboration: 'Authorial technical reference project',
      description:
        'Distributed, event-driven fleet operations REST API backend engine built with .NET 10 (C# 14) demonstrating Clean Architecture, Transactional Outbox, RabbitMQ, PostgreSQL 18, and Keycloak OIDC with 300 automated tests.',
      context:
        'Architectural reference study designed to solve core distributed systems challenges: dual-write hazard elimination, at-least-once delivery with idempotent consumers, and defensive concurrency control.',
      problem:
        'Preventing state drift between relational persistence and message brokers (dual-write hazard), avoiding duplicate side-effects from transient network retries, and eliminating lock contention across concurrent workers.',
      solution:
        'Event-driven architecture with Transactional Outbox and FOR UPDATE SKIP LOCKED on PostgreSQL 18, RabbitMQ with Publisher Confirms (DLX/TTL/DLQ topology), optimistic concurrency via xmin, end-to-end W3C distributed tracing with OpenTelemetry/Jaeger, and OIDC auth via Keycloak (RS256/JWKS).',
      development:
        'Built with Clean Architecture and DDD across 5 Bounded Contexts (Vehicles, Drivers, Deliveries, Routes, Maintenance), resilient worker pipeline with RabbitMQ.Client 7.2.2, and 300 automated tests.',
      architectureDecisions: [
        'Transactional Outbox Pattern integrated into DbContext.SaveChangesAsync eliminating dual-write hazard',
        'Multi-worker concurrency via PostgreSQL FOR UPDATE SKIP LOCKED without lock waiting',
        'Physical optimistic concurrency control via PostgreSQL system column xmin (MVCC)',
        'Idempotent consumer deduplication via MessageId PK with Bounded At-Least-Once semantics',
        'Resilient RabbitMQ messaging topology with staged TTL Retry Queues (10s, 30s, 90s) and DLQ',
        'End-to-end W3C traceparent propagation (HTTP → Outbox → RabbitMQ → Consumer) to Jaeger',
        'OAuth 2.0 / OIDC Resource Server with Keycloak, asymmetric RS256 validation, and dynamic JWKS discovery',
        'In-memory Fixed Window Rate Limiting (RFC 9457 / HTTP 429) and bounded telemetry cardinality',
      ],
      highlights: [
        '300 automated tests (166 unit + 134 integration, outbox concurrency, and fault injection)',
        'Clean Architecture + DDD with strict layer isolation across 5 Bounded Contexts',
        'PostgreSQL 18 with partial unique indexes and strict referential integrity',
        'RabbitMQ 3.x with Async API and Publisher Confirms enabled',
        'OpenTelemetry .NET + Jaeger UI with causal latency waterfall visualization',
        'Empirical domain transactional capacity of 278 RPS under ACID writes (k6 P2)',
      ],
      technologies: [
        'C# 14',
        '.NET 10',
        'ASP.NET Core',
        'PostgreSQL 18',
        'EF Core 10',
        'RabbitMQ',
        'Docker Compose',
        'OpenTelemetry',
        'Keycloak OIDC',
        'xUnit (300 Tests)',
      ],
      results:
        '300 passing automated tests (0 failures); sustained 278 RPS throughput under domain ACID writes in PostgreSQL; recovery in < 15ms after traffic spikes; zero event loss during RabbitMQ outages, and verified quality gate.',
      links: {
        github: 'https://github.com/DevYuriVieira/fleetops-api',
      },
    },
    {
      id: 'spring-boot-ecommerce-api',
      title: 'Spring Boot E-Commerce API',
      category: 'Backend Java',
      featured: true,
      contextTag: 'Backend Java / REST API',
      collaboration: 'Collaborative project (5 developers - Serratec Residency)',
      description:
        'E-commerce RESTful API built in a team using Java 17, Spring Boot 3, and PostgreSQL, featuring automated transactional emails, ViaCEP logistics integration, N:N order total calculation, and interactive OpenAPI 3 documentation.',
      context:
        'Final evaluation project for the Restful API Development course at Serratec ICT Residency 2026.1 (Class 36 Nova Friburgo), developed in a 5-developer team (Emanuel Valinhos, Nícolas Oliveira, Nívea D\'Avila, Victor Lima, Yuri Vieira).',
      problem:
        'Build a robust e-commerce backend with strict entity validation, required product-category association, N:N relationship between products and orders with dynamic total computation, external postal service consumption, and automated email alerts.',
      solution:
        'Layered architecture (Controller, Service, Repository, Entity, DTO) in Spring Boot with Spring Data JPA/Hibernate, PostgreSQL, security with Spring Security, transactional emails with JavaMail, ViaCEP REST integration, global @ControllerAdvice exception handling, and Swagger UI.',
      development:
        'Collaborative development covering N:N entity modeling (Product-Order), external ViaCEP REST API consumption for automatic address lookup, email notification services with JavaMail, defensive Bean Validation (@NotNull, @Size), and interactive API documentation with Springdoc OpenAPI.',
      architectureDecisions: [
        'Decoupled layered architecture (Controller, Service, Repository, Entity) ensuring high cohesion and business logic isolation',
        'Object-relational N:N (Many-to-Many) mapping between Orders and Products with transactional PostgreSQL persistence via Spring Data JPA',
        'External ViaCEP REST API integration for automated zip code lookup and address population during customer registration',
        'Automated transactional email dispatch via Spring Boot Starter Mail (JavaMail) on customer creation and updates',
        'Centralized global exception handling via @ControllerAdvice with semantic domain exceptions',
        'Defensive input validation with Bean Validation and order lifecycle state tracking managed via Enums',
        'Live interactive endpoint documentation via Springdoc OpenAPI UI (Swagger v2.8.16)',
      ],
      highlights: [
        'RESTful API in Java 17 & Spring Boot 3 with PostgreSQL',
        'N:N Orders-Products relationship with automated price total calculation',
        'External ViaCEP REST API integration for address lookup',
        'Transactional customer emails via Spring Mail (JavaMail)',
        'Global exception handling with @ControllerAdvice',
        'Strict input validation with Bean Validation & Enums',
        'Interactive API documentation with Swagger UI / OpenAPI 3',
        'Collaborative 5-developer team project (Serratec Residency 2026.1)',
      ],
      technologies: [
        'Java 17',
        'Spring Boot 3',
        'Spring Data JPA',
        'Spring Security',
        'PostgreSQL',
        'Bean Validation',
        'JavaMail',
        'ViaCEP API',
        'Swagger/OpenAPI',
        'Maven',
        'Lombok',
      ],
      summaryProblem: 'E-commerce management with entity validation, ViaCEP integration, and automated emails',
      summarySolution: 'RESTful API in Java 17 and Spring Boot with JPA/Hibernate, Spring Security, and JavaMail',
      summaryArch: 'Decoupled layers, N:N product-order model, global @ControllerAdvice, and Swagger OpenAPI 3',
      summaryResults: 'Automated postal lookup via ViaCEP, order total calculation, and transactional emails',
      results:
        'Consistent order processing with dynamic item total calculation and Enum status lifecycle; automated address lookup via ViaCEP integration; automated customer notification emails; full interactive OpenAPI 3 documentation coverage via Swagger UI.',
      links: {
        github: 'https://github.com/DevYuriVieira/ecommerce-serratec-api',
      },
    },

    {
      id: 'work-fitness',
      title: 'Work-Fitness | Commercial Platform & Consulting',
      category: 'Commercial Platform (Freelance)',
      featured: true,
      contextTag: 'Production Commercial Project',
      collaboration: 'Bespoke freelance client project',
      client: 'Vinicius Santos (Personal Trainer)',
      description:
        'Commercial web platform and biomechanical assessment engine built for personal trainer Vinicius Santos (Arena Sports Complex, Nova Friburgo - RJ), combining clinical body composition formulas (WHO BMI, Deurenberg 1991 body fat, Mifflin-St Jeor BMR), Clean Architecture, full WCAG 2.1 AA accessibility with VLibras, a perfect 100/100 Lighthouse audit, and structured UTM-preserved WhatsApp lead generation.',
      context:
        'Commercial solution engineered as a freelance software engineer for personal trainer Vinicius Santos (physical education graduate from UCB in 2008 with 15+ years of continuous coaching at Arena Sports Complex in Nova Friburgo - RJ), replacing manual spreadsheets with an automated qualification pipeline and instant body diagnostics.',
      problem:
        'Sluggish mobile browsing from heavy SPA bundles causing bounce before call-to-action clicks; unqualified inquiries on WhatsApp lacking joint injury history or training background; and severe accessibility gaps across fitness websites violating inclusion laws.',
      solution:
        'High-performance TypeScript 5.7 and Vite 6 web application built with Clean Architecture, strictly decoupling the mathematical calculation core (src/core/ - zero DOM) from UI modules (src/modules/). Biomechanical engine with clinical equations (WHO, Deurenberg, Mifflin-St Jeor), synchronized 3-channel telemetry (GA4, GTM, Meta Pixel), pre-formatted WhatsApp drafts retaining UTM tags, WCAG 2.1 AA assistive suite with VLibras, offline PWA caching, and a test pipeline with 170 Vitest unit tests and 47 Playwright E2E specs across 26 viewports.',
      development:
        'Full-cycle freelance software engineering: Clean Architecture design with a decoupled pure domain core, implementation of anthropometric algorithms in pure TypeScript, token-driven modular CSS architecture, WCAG 2.1 AA assistive suite (Live Announcer, Bionic Reading, SVG colorblind filters, and VLibras Shadow DOM fix), 26-viewport responsive validation, and an automated testing pipeline featuring 170 Vitest tests and 47 Playwright specs.',
      architectureDecisions: [
        'Strict Clean Architecture isolating scientific formulas (src/core/ - zero DOM, zero browser globals), enabling microsecond unit testing (ADR-002)',
        'Vanilla TypeScript 5.7 and Vite 6 over SPA frameworks, completely eliminating hydration tax with an ultralight 32.46 kB JS bundle (11.34 kB gzipped) (ADR-001)',
        'Token-driven modular CSS architecture in src/styles/ with canonical deterministic cascade in main.css and zero CSS-in-JS runtime (ADR-003)',
        'Biomechanical engine grounded in Deurenberg (1991) body fat formulas adjusted for age/sex, Mifflin-St Jeor BMR, and WHO BMI categories (ADR-004)',
        'Synchronous multi-channel conversion telemetry (GA4, GTM, Meta Pixel) with automated WhatsApp drafts and strict UTM preservation (ADR-005)',
        'Universal WCAG 2.1 AA / Senac-grade assistive suite featuring Bionic Reading, SVG colorblind filters, focal reading guide, Live Announcer, and VLibras (ADR-006)',
        'Rigorous responsive matrix verified across 26 device viewports (from 280px narrow foldables to 5120px 32:9 ultrawides) with zero overflow (ADR-007)',
        'Floating conversion pill with synchronized FAB fade-out via body.has-sticky-bar eliminating screen crowding and misclicks (ADR-012)',
        'Quad-layer test pipeline: 170 Vitest unit tests (20 suites in < 5s), 47 Playwright E2E specs across 26 viewports, Cypress, and k6 stress tests (ADR-009)',
        'Immutable multi-stage Docker containerization (Node 22 Alpine builder + Nginx 1.27 Alpine runtime) with gzip and security headers (ADR-011)',
      ],
      highlights: [
        'Perfect 100/100 across all 4 Google Lighthouse production audits (Performance, A11y, Best Practices, SEO)',
        '170 Vitest unit tests (20 suites) + 47 Playwright E2E specs across 26 viewports with 100% pass rate',
        'Ultra-lightweight minified bundle of just 32.46 kB JS (11.34 kB gzipped) and zero hydration overhead',
        'Elite Core Web Vitals: LCP < 0.8s, CLS = 0.00, and INP < 16ms (P98)',
        'Biomechanical assessment engine with clinical formulas (WHO BMI, Deurenberg body fat, Mifflin-St Jeor BMR)',
        'Universal WCAG 2.1 AA accessibility & zero-layout-shift VLibras integration',
        'Synchronized 3-channel conversion tracking (GA4, GTM, Meta Pixel) with UTM retention in WhatsApp',
        'PWA Offline readiness with native Service Worker caching and network state toast alerts',
        'Docker Compose containerization with multi-stage Nginx Alpine image on port 5500',
      ],
      technologies: [
        'TypeScript',
        'Vite',
        'Clean Architecture',
        'Vitest (170 Tests)',
        'Playwright',
        'Docker',
        'Nginx Alpine',
        'PWA Offline',
        'Google Analytics 4',
        'Meta Pixel',
      ],
      summaryProblem: 'Scattered WhatsApp leads, lack of preliminary joint screening, and sluggish mobile SPA builders',
      summarySolution: 'Vanilla TypeScript 5.7 and Vite 6 with Clean Architecture isolating biomechanical formulas from UI',
      summaryArch: 'Pure math core (WHO/Deurenberg/Mifflin), token-driven modular CSS, and WCAG 2.1 AA with VLibras',
      summaryResults: '100/100 Lighthouse, 170 Vitest unit tests, 47 Playwright specs across 26 viewports, and 32 kB bundle',
      results:
        'Production commercial platform scoring a perfect 100/100 across all Google Lighthouse categories (LCP < 0.8s, CLS = 0.00, INP < 16ms, and 32 kB minified bundle); substantial surge in qualified leads delivered directly to trainer Vinicius Santos\'s WhatsApp with joint history and physical background; 170 automated tests guaranteeing zero regressions.',
      links: {
        github: 'https://github.com/DevYuriVieira/Work-Fitness',
        demo: 'https://viniciusantos.vercel.app/',
        demoLabel: 'Live in Production',
      },
    },
    {
      id: 'farmflow',
      title: 'FarmFlow | Precision Agriculture & Mobile Engine',
      category: 'Full-Stack Agro-Industrial (Mobile & API)',
      featured: true,
      contextTag: 'Offline-First Mobile & Distributed API',
      collaboration: 'Authorial distributed systems project',
      description:
        'Precision agriculture platform and critical field operations combining an offline-first mobile application in React Native (Expo SDK 54, React 19) and a high-concurrency distributed backend engine in Java 21 LTS (Spring Boot 4.1.1, Virtual Threads, RabbitMQ, partitioned PostgreSQL 17) for remote field operations, MAPA spray regulatory compliance with SHA-256 digital signatures, and IoT pivot/silo telemetry.',
      context:
        'Engineered to overcome connectivity constraints in remote agricultural operations, enabling farm operators and agronomists to perform spray logging, regulatory dossier compliance, and IoT sensor monitoring without internet access.',
      problem:
        'Connectivity dead-zones in remote agricultural areas causing data loss, chemical inventory mismatches, heavy MAPA regulatory fines due to unsigned spray logs, and lack of real-time asset telemetry.',
      solution:
        'End-to-end integrated architecture: Offline-First mobile frontend with transactional FIFO mutation queue and asynchronous reconciliation; distributed Java 21 backend with Virtual Threads, Transactional Outbox Pattern with FOR UPDATE SKIP LOCKED over RabbitMQ, PostgreSQL 17 with declarative range time-series partitioning and fail-closed RLS, backed by 549+ automated tests (411 on backend + 138 on mobile).',
      architectureDecisions: [
        'Offline-First mobile architecture with transactional FIFO mutation queue in AsyncStorage guaranteeing deterministic replay upon reconnection',
        'MAPA regulatory compliance module with technical dossier generation and SHA-256 hashed canvas digital signatures',
        'Java 21 LTS backend with Virtual Threads and Spring Boot 4.1.1 sustaining 2,450 req/s in k6 load tests',
        'Transactional Outbox Pattern with RabbitMQ (CloudEvents v1.0, DLX, TTL, Dead Letter Queue) and FOR UPDATE SKIP LOCKED',
        'PostgreSQL 17 with Declarative Range Partitioning, BRIN indexes, and Fail-Closed Row Level Security (RLS)',
        'Distributed choreographed sagas with advisory locks (pg_try_advisory_xact_lock) and W3C traceparent OpenTelemetry tracing',
        'Keycloak 26.1 OIDC authentication with IDOR protection (HTTP 404 instead of 403) and mobile biometrics',
        'Massive 549+ automated test suite (411 backend tests under 100 Virtual Threads and 138 mobile tests across 26 Jest suites)',
      ],
      highlights: [
        '549+ automated tests (411 Java Backend tests + 138 Mobile tests)',
        'Offline-First mobile client in React Native (Expo 54, React 19) with FIFO sync',
        'Java 21 LTS backend with Virtual Threads sustaining 2,450 req/s (k6)',
        'Transactional Outbox with RabbitMQ and CloudEvents v1.0',
        'PostgreSQL 17 with time-series partitioning and Row Level Security (RLS)',
        'MAPA regulatory spray dossier with SHA-256 digital signatures',
        'IoT telemetry for central irrigation pivots and grain silos',
        'End-to-end W3C distributed tracing with OpenTelemetry',
      ],
      technologies: [
        'React Native',
        'Expo SDK 54',
        'Java 21 LTS',
        'Spring Boot 4',
        'Virtual Threads',
        'PostgreSQL 17',
        'RabbitMQ',
        'Offline-First',
        'IoT Telemetry',
        'Docker Compose',
        'Keycloak OIDC',
        'OpenTelemetry',
      ],
      summaryProblem: 'Rural connectivity bottlenecks, lost field logs, and stock/fleet state desynchronization',
      summarySolution: 'Event-driven engine with Java 21 Virtual Threads, Transactional Outbox, RabbitMQ, and PostgreSQL 17',
      summaryArch: 'Choreographed saga, SKIP LOCKED, fail-closed RLS, BRIN indexing, and CloudEvents v1.0',
      summaryResults: '2,450 req/s under k6, 549+ automated tests (411 in API + 138 in mobile), and pruning in 0.026ms',
      results:
        '100% resilient data synchronization for field operations in zero-connectivity zones via FIFO queue; strict regulatory compliance with MAPA agrochemical application guidelines; high-throughput backend capacity of 2,450 req/s with zero 5xx errors; 549+ automated tests ensuring end-to-end stability.',
      links: {
        github: 'https://github.com/DevYuriVieira/farmflow-mobile',
        backendGithub: 'https://github.com/DevYuriVieira/farmflow-backend',
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
        'React Native mobile application (Expo SDK 54, React Navigation 7) for personal, professional, and community growth, combining protected authentication sessions, XP/level gamification, goal tracking CRUD with progress bars, community feeds with offline fallback, and QR Code mentorship check-ins.',
      context:
        'Serratec Residency Multiplatform Development final project (Class 36 Nova Friburgo), engineered in a 6-developer agile team to deliver a fluid self-evolution mobile ecosystem for iOS and Android under the motto "Your journey to a new beginning".',
      problem:
        'Scattered daily goal tracking, lack of motivation in habit-building routines, manual attendance tracking in group mentorships, and the need to unify remote API consumption with resilient offline local fallback.',
      solution:
        'Reactive mobile architecture built on React Native 0.81 and Expo SDK 54 with TypeScript 5.9, featuring tripartite hybrid navigation (Drawer, Bottom Tabs, Stack via React Navigation 7), client-side gamification (XP/levels/achievements), defensive validation via React Hook Form + Zod, API consumption (MockAPI/REST) with fallback to db.json/AsyncStorage, and native Camera, Gallery, GPS, and QR Code access.',
      development:
        'Collaborated in a 6-developer team designing application route structures (index, auth.routes, app.routes), global session state management through AuthContext, typed validation schemas with Zod and Hook Form, community feed implementation with local caching fallback, QR Code check-in integration, and credential hardening via Expo Secure Store.',
      architectureDecisions: [
        'Tripartite hybrid navigation architecture combining Drawer, Bottom Tabs, and Stack via React Navigation 7',
        'Client-side gamification engine with time-of-day greetings, dynamic XP tracking, levels, and achievement cards',
        'Defensive form validation pairing React Hook Form with strict Zod validation schemas',
        'Hybrid data layer orchestrating REST/MockAPI calls with resilient local fallback (db.json and AsyncStorage)',
        'Event attendance check-in powered by native device QR Code scanning and generation',
        'Native device integration via Expo Image Picker (Camera/Gallery), Expo Location (GPS), and Expo Secure Store',
        'Centralized session persistence and authenticated route guards managed via AuthContext',
      ],
      highlights: [
        'React Native (0.81.5) with Expo SDK 54 and TypeScript 5.9',
        'Tripartite hybrid navigation (Drawer, Bottom Tabs, and Stack)',
        'Gamification engine with time-aware greetings, XP calculations, Levels, and Badges',
        'Full Goals module with CRUD operations and visual progress indicators',
        'Community feed with local cache fallback and remote API integration',
        'Mentorship enrollment with native QR Code attendance verification',
        'Native Camera, Gallery, GPS, AsyncStorage, and Expo Secure Store access',
        'Defensive form validation with React Hook Form + Zod',
      ],
      technologies: [
        'React Native',
        'Expo SDK 54',
        'TypeScript',
        'React Navigation 7',
        'React Hook Form',
        'Zod',
        'Axios',
        'AsyncStorage',
        'Expo Secure Store',
        'Expo Image Picker',
        'QR Code Scanner',
      ],
      summaryProblem: 'Scattered goal tracking, manual mentorship check-ins, and low user engagement in self-growth routines',
      summarySolution: 'React Native & Expo SDK 54 mobile app with hybrid navigation, XP gamification, and native QR Code check-ins',
      summaryArch: 'React Navigation 7 (Drawer/Tabs/Stack), Zod + Hook Form validation, AuthContext, and Expo Secure Store',
      summaryResults: 'XP levels & badges, goal CRUD with visual progress, offline fallback feed, and instant QR Code validation',
      results:
        'Fluid navigation across 3 coordinated hybrid flows (Drawer, Stack, Tabs); high user motivation and retention driven by XP and level progression; frictionless mentorship check-ins via instant QR Code scanning; and fortified credential security backed by native device encryption in Expo Secure Store.',
      links: {
        github: 'https://github.com/DevYuriVieira/aurora-growth-platform',
      },
    },
    {
      id: 'django-ecommerce',
      title: 'Django Full-Stack E-Commerce',
      category: 'Full Stack Python/Django',
      featured: true,
      contextTag: 'Full-Stack Python (Service Layer & Webhooks)',
      collaboration: 'Authorial technical reference project',
      description:
        'Production-ready full-stack e-commerce platform built with Django 5.x and frameworkless Vanilla JS (ES6+), featuring an asynchronous idempotent payment webhook workflow, Service Layer pattern without DRF, atomic transactions, and native HTML5 <template> modular rendering.',
      context:
        'Authorial web application engineered to simulate real-world e-commerce production architecture, focusing on backend service decoupling through the Service Layer pattern without DRF overhead and lightweight frontend state management using native browser APIs.',
      problem:
        'Implement a resilient checkout and payment workflow, preventing duplicate concurrent transaction processing (idempotent webhooks), eliminating N+1 ORM query bottlenecks, and manipulating the DOM securely without SPA framework bloat.',
      solution:
        'Decoupled architecture using Django as an API (DRF-free for complete HTTP lifecycle control), Service Layer pattern isolating business logic, transaction.atomic database consistency, prefetch_related query optimizations, simulated asynchronous payment webhooks (pending -> paid status transitions), and a modular Vanilla JS frontend using native HTML5 templates and safe textContent rendering.',
      development:
        'Solo full-stack engineering covering relational modeling (orders, discount coupons, favorites), versioned JSON REST endpoints without DRF dependencies, idempotent webhook logic preventing double-processing of payment events, centralized client-side state management, and search debounce optimization.',
      architectureDecisions: [
        'Django Service Layer pattern ensuring clean domain logic isolation decoupled from views',
        'Idempotent asynchronous payment Webhook processing (pending -> paid status transitions) backed by atomic database transactions',
        'ORM query performance optimization with prefetch_related eliminating N+1 query bottlenecks in catalog and order histories',
        'Modular frameworkless Vanilla JS (ES6+) frontend using HTML5 <template> componentization and textContent (zero XSS attack surface)',
        'Versioned REST API with strict CSRF protection and custom centralized client-side state management',
        'Deliberate exclusion of Django REST Framework to retain full granular control over HTTP headers, status codes, and payload lifecycle',
      ],
      highlights: [
        'Django Service Layer & Atomic Transactions (transaction.atomic)',
        'Idempotent async payment Webhook handling (pending -> paid)',
        'ORM query optimization with prefetch_related (Zero N+1 queries)',
        'Modular Vanilla JS frontend with HTML5 <template> and textContent',
        'Versioned REST API endpoints without DRF framework overhead',
        'Dynamic sidebar cart, coupon business rules, and user wishlist',
        'Strict native security against CSRF and cross-site scripting (XSS)',
        'Debounced search queries preventing redundant network roundtrips',
      ],
      technologies: [
        'Python 3.11+',
        'Django 5.x',
        'SQLite',
        'Vanilla JS (ES6+)',
        'HTML5 <template>',
        'CSS3 Modern',
        'Versioned REST API',
        'Idempotent Webhooks',
        'Service Layer',
      ],
      summaryProblem: 'Duplicate charges in concurrent payments, N+1 query bottlenecks, and frontend SPA framework overhead',
      summarySolution: 'Full-stack e-commerce in Django 5 and Vanilla JS with decoupled Service Layer and idempotent webhooks',
      summaryArch: 'Atomic transactions, prefetch_related, DRF-free API, HTML5 <template> rendering, and search debounce',
      summaryResults: 'Idempotent pending -> paid transitions, zero N+1 queries, strict CSRF/XSS defense, and zero bundle bloat',
      results:
        'Idempotent asynchronous payment Webhook processing eliminating double charges under concurrent requests; complete N+1 query elimination via prefetch_related; lightweight Vanilla JS frontend architecture delivering zero framework overhead and safe DOM manipulation via native <template> and textContent.',
      links: {
        github: 'https://github.com/DevYuriVieira/liquor-store-django',
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
      summaryProblem: 'Automated batch processing of employees via CSV and progressive INSS/IRRF tax calculation',
      summarySolution: 'Layered MVC and DAO architecture in pure Java 17 with JDBC persistence on PostgreSQL',
      summaryArch: 'Singleton and DAO patterns, exact precision with BigDecimal, and domain exception handling',
      summaryResults: 'High-precision tax calculation eliminating floating-point errors with dual persistence (DB and CSV)',
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
      id: 'anime-weather-platform',
      title: 'Anime Weather Platform',
      category: 'Frontend + APIs + IA',
      featured: false,
      contextTag: 'Frontend & AI Integration',
      collaboration: 'Collaborative project (Pair Programming - Yuri Vieira & Micaela Paes)',
      description:
        'Frontend orchestration system combining real-time meteorological intelligence (OpenWeather API), atmospheric anime recommendation engine (Jikan API / MyAnimeList), live weather-adaptive themes via CSS Modules, and contextual AI interaction with Google Gemini.',
      context:
        'Engineered in Pair Programming by Yuri Vieira and Micaela Paes during the Serratec Residency, designed to explore multi-layered API orchestration combined with generative contextual artificial intelligence.',
      problem:
        'Orchestrating disparate real-time external data streams (geolocated weather, cultural catalog, and generative AI) into a responsive, atmospheric user experience with adaptive themes without blocking interface interactivity.',
      solution:
        'Layered React 18 & Vite architecture implementing a multi-tiered pipeline (Weather → Mood → Anime Genre), orchestrating OpenWeather, Jikan API, and Google Gemini SDK via Prompt Engineering, CSS Modules with live adaptive weather themes, Glassmorphism aesthetics, simulated authentication with protected routes, and an ambient Lofi player.',
      development:
        'Pair programming delivery covering the meteorological-to-genre recommendation engine, Google Gemini SDK prompt engineering for structured contextual responses and weather puns, CSS Modules style isolation, global state management in React, and defensive error fallbacks for API reconnection.',
      architectureDecisions: [
        'Multi-layer logic pipeline mapping Weather → Atmospheric Mood → Anime Genre (e.g. Clear → Slice of Life, Rain → Drama/Mystery, Storm → Action/Psychological)',
        'Asynchronous orchestration consuming live weather from OpenWeather API and curated titles from MyAnimeList via Jikan API',
        'Context-aware AI weather assistant via Google Gemini SDK synthesizing responses from city, live temperature, atmospheric mood, and curated anime',
        'State-driven adaptive UI reacting to live weather conditions using React Global State and isolated CSS Modules',
        'Immersive sensory experience combining Glassmorphism visual design, micro-interactions, and optional ambient Lofi audio',
        'Simulated authentication module demonstrating protected routes, input validation, and redirect navigation flows',
      ],
      highlights: [
        'Atmospheric recommendation pipeline: Weather → Mood → Genre',
        'Context-aware AI assistant powered by Google Gemini SDK',
        'Multi-API orchestration: OpenWeather + Jikan API (MyAnimeList)',
        'Live weather-driven adaptive themes and Glassmorphism styling',
        'Component styling isolation using modular CSS Modules',
        'Immersive UX featuring an optional ambient Lofi music player',
        'Structured simulated authentication with protected route guards',
        'Pair programming collaborative delivery (Yuri Vieira & Micaela Paes)',
      ],
      technologies: [
        'React 18',
        'Vite',
        'OpenWeather API',
        'Jikan API',
        'Google Gemini SDK',
        'CSS Modules',
        'JavaScript ES6+',
        'Glassmorphism',
      ],
      summaryProblem: 'Challenge of orchestrating live weather data, anime cultural catalog, and contextual generative AI',
      summarySolution: 'React & Vite frontend orchestrating OpenWeather, Jikan API, and Google Gemini via a Weather → Mood → Genre pipeline',
      summaryArch: 'Multi-layer logic pipeline, adaptive CSS Modules matching live weather, Glassmorphism, and route guards',
      summaryResults: 'Real-time atmospheric recommendations, contextual AI weather assistant, and adaptive ambient UI',
      results:
        'Seamless multi-API orchestration delivering fluid rendering; deterministic meteorological mapping into moods and anime genres; context-aware AI assistant capable of tailoring discussions to the user\'s local climate; and real-time adaptive UI theming.',
      links: {
        github: 'https://github.com/DevYuriVieira/anime-weather-platform',
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
      summaryProblem: 'Production-grade e-commerce emulation without traditional backend',
      summarySolution: 'Vanilla JS MPA architecture with client state in LocalStorage',
      summaryArch: 'Feature-modular architecture and async API integration (ViaCEP/MockAPI)',
      summaryResults: 'Zero framework overhead, dynamic logistics, and automated wholesale rules',
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
      technologies: [
        'PostgreSQL 16+',
        'Advanced SQL',
        'DDL',
        'DML',
        'DQL',
        'Database Indexing',
        'SQL Views',
      ],
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
      collaboration: 'Authorial technical reference project',
      description:
        'Cutting-edge, reactive authentication interface engineered with React 19 and Vite 7, featuring 4 animated characters that respond dynamically to user interactions via real-time trigonometric mouse tracking, context-sensitive mouth animations, and gesture feedback.',
      context:
        'Authorial UX Engineering prototype exploring advanced interaction patterns in React, real-time cursor angle trigonometry for pupil positioning, and state-driven animations linked to form lifecycle events.',
      problem:
        'Transform static, uninspiring authentication forms into delightful, engaging user experiences that provide immediate visual feedback during focus, password typing, and validation failures without sacrificing performance.',
      solution:
        'Single Page Application in React 19 and Vite 7 featuring React Router v7 and CSS Modules, incorporating 4 geometric characters (rectangle, box, semicircle, and cylinder) across 6 behavioral states (idle, typing, closed, side, surprise, submit), trigonometric mouse tracking via Math.cos/sin, Dark/Light theme switching with CSS Variables, and responsive scaling down to 320px.',
      development:
        'Solo full-cycle delivery: mathematical implementation of pupil vector tracking based on cursor coordinates, character reaction state machine in React, CSS keyframe animations (shake-tilt on validation error), iOS zoom prevention (16px base font size), and modular architecture spanning SignIn, SignUp, and ForgotPassword pages.',
      architectureDecisions: [
        'Real-time trigonometric pupil vector tracking using Math.cos and Math.sin to translate pupils smoothly within a 5px radius',
        'State-driven behavioral reaction machine with 6 discrete character states (idle, typing, closed, side, surprise, submit)',
        'Oscillatory tilt-shake keyframe animation (-8° to -2°) paired with 36px wide white eyes triggered on form validation failure',
        'Component composition using React 19 and CSS Modules to ensure zero style leakage across character shapes, eyes, and form controls',
        'Design token system supporting smooth Dark and Light theme transitions powered by native CSS Custom Properties',
        'Client-side SPA routing across SignIn, SignUp, and ForgotPassword flows managed via React Router 7',
        'Mobile-first responsive architecture with proportional character scaling (Desktop, Tablet 768px, Mobile 480px, Tiny 320px)',
      ],
      highlights: [
        '4 state-driven animated characters (rectangle, box, semicircle, cylinder)',
        'Real-time mouse-tracking eye system with trigonometric pupil positioning',
        '6 contextual reaction states: idle, typing, closed, side, surprise, submit',
        'Tilt-shake keyframe animation providing playful validation error feedback',
        'Dark and Light theme toggle powered by native CSS Variables',
        'Complete SPA authentication flows: SignIn, SignUp, ForgotPassword in React Router 7',
        'Modern architecture built with React 19, Vite 7, and scoped CSS Modules',
        'Responsive layout validated down to 320px with >= 44px touch targets',
      ],
      technologies: [
        'React 19',
        'Vite 7',
        'React Router 7',
        'CSS Modules',
        'CSS Variables',
        'JavaScript ES6+',
        'Trigonometric Math',
        'Dark / Light Mode',
      ],
      summaryProblem: 'Static, uninspiring authentication forms lacking dynamic visual feedback and user engagement',
      summarySolution: 'Reactive React 19 and Vite 7 interface featuring 4 animated characters with real-time eye tracking',
      summaryArch: 'Real-time trigonometric pupil vector math (cos/sin), CSS Modules with theme tokens, and React Router v7',
      summaryResults: '6 state-driven reactions (idle/typing/closed/side/surprise/submit), tilt-shake validation, and Dark Mode',
      results:
        'Engaging, highly responsive authentication experience with real-time eye tracking running at 60 FPS via lightweight client-side trigonometry; 100% CSS encapsulation through CSS Modules; and seamless transitions between Dark and Light modes.',
      links: {
        github: 'https://github.com/DevYuriVieira/kinetic-auth-ux-showcase',
        demo: 'https://kinetic-auth-ux-showcase.vercel.app/',
      },
    },
  ],
  es: [
    {
      id: 'zeiss-recommendation-assistant',
      title: 'ZEISS Recommendation Assistant',
      category: 'Proyecto Profesional (Confidencial)',
      featured: true,
      contextTag: 'Proyecto Corporativo (NDA)',
      collaboration: 'Proyecto colaborativo (11 desarrolladores + PO + Scrum Master)',
      client: 'ZEISS Group',
      confidential: true,
      description:
        'Plataforma web corporativa desarrollada en asociación con el ZEISS Group para digitalizar, estandarizar y optimizar la recomendación técnica de lentes en tiendas ZEISS Vision Center y ópticas asociadas autorizadas.',
      context:
        'MVP corporativo desarrollado en asociación con el ZEISS Group durante la Residencia Serratec. Trabajo en equipo ágil en desarrollo frontend React, integración de pipeline de IA y automatización de flujo de ventas.',
      problem:
        'Ingreso manual de prescripciones oftalmológicas complejas, recomendaciones de lentes dependientes del conocimiento individual del vendedor, alto tiempo de atención al cliente y falta de métricas de rendimiento.',
      solution:
        'Plataforma web con extracción automática de prescripciones vía OCR integrada con pipeline de IA (n8n/RAG), validación de datos clínicos, recomendaciones de lentes ZEISS basadas en hábitos, seguimiento del ciclo de vida de ventas y dashboards de inteligencia comercial en tiempo real.',
      development:
        'Desarrollo en equipo ágil con 11 ingenieros de software, Product Owner y Scrum Master. Participación directa en construcción de UI React/TypeScript, integración de pipeline de IA (n8n/RAG), arquitectura de componentes modulares y consumo de API REST protegida con RBAC.',
      architectureDecisions: [
        'Extracción automatizada de prescripciones vía OCR integrada en pipeline de IA con n8n y RAG',
        'Interfaz de validación de datos clínicos previa al procesamiento para garantizar precisión',
        'Motor de recomendación que combina métricas oftalmológicas con hábitos y preferencias del paciente',
        'Gestión del flujo de ventas de extremo a extremo, desde la recomendación hasta la confirmación del pedido',
        'Dashboards analíticos con indicadores de conversión, productos más recomendados y rendimiento por sucursal',
        'Autenticación JWT, Control de Acceso Basado en Roles (RBAC) y módulos de gestión administrativa',
      ],
      highlights: [
        'OCR automatizado de prescripciones & Pipeline de IA (n8n / RAG)',
        'Recomendación inteligente de lentes ZEISS por datos clínicos y hábitos',
        'Dashboards de analítica comercial y conversión en tiempo real',
        'Autenticación JWT & Control de Acceso Basado en Roles (RBAC)',
        'Arquitectura Full Stack con React, Spring Boot 4 & PostgreSQL',
      ],
      technologies: [
        'React',
        'TypeScript',
        'Java',
        'Spring Boot 4',
        'PostgreSQL',
        'n8n',
        'OCR',
        'RAG / IA',
      ],
      results:
        'Estandarización de recomendaciones técnicas de lentes; lectura automatizada de prescripciones vía OCR eliminando errores de ingreso manual; generación de inteligencia comercial en tiempo real para ZEISS con dashboards de conversión y ranking de productos.',
      links: {},
    },
    {
      id: 'fleetops-api',
      title: 'FleetOps API',
      category: 'Backend Distribuido (.NET 10)',
      featured: true,
      contextTag: 'Estudio Arquitectural & Referencia',
      collaboration: 'Proyecto autoral de referencia técnica',
      description:
        'Motor backend distribuido y orientado a eventos para gestión de flotas y logística en .NET 10 (C# 14), demostrando Clean Architecture, Transactional Outbox, RabbitMQ, PostgreSQL 18 y Keycloak OIDC con 300 pruebas automatizadas.',
      context:
        'Proyecto de estudio y referencia técnica para resolver desafíos críticos de sistemas distribuidos: prevención de dual-write hazard, semántica de entrega at-least-once con consumidor idempotente y concurrencia defensiva.',
      problem:
        'Prevención de inconsistencias entre base de datos relacional y mensajería (dual-write hazard), duplicación por fallas de red transitorias y contención de bloqueos en trabajadores concurrentes.',
      solution:
        'Arquitectura orientada a eventos con Transactional Outbox y FOR UPDATE SKIP LOCKED en PostgreSQL 18, mensajería con Publisher Confirms en RabbitMQ (DLX/TTL/DLQ), concurrencia optimista vía xmin, trazabilidad distribuida W3C con OpenTelemetry/Jaeger y autenticación OIDC vía Keycloak (RS256/JWKS).',
      development:
        'Desarrollo basado en Clean Architecture y DDD en 5 contextos delimitados (Vehículos, Conductores, Entregas, Rutas y Mantenimiento), implementación de worker resiliente con RabbitMQ.Client 7.2.2 y suite de 300 pruebas automatizadas.',
      architectureDecisions: [
        'Transactional Outbox Pattern integrado en DbContext.SaveChangesAsync eliminando dual-write hazard',
        'Concurrencia multi-worker vía PostgreSQL FOR UPDATE SKIP LOCKED sin espera de bloqueos',
        'Concurrencia optimista física vía columna de sistema PostgreSQL xmin (MVCC)',
        'Consumidor idempotente con clave MessageId y semántica Bounded At-Least-Once',
        'Topología resiliente RabbitMQ con Colas TTL de Reintento (10s, 30s, 90s) y Dead-Letter Queue (DLQ)',
        'Trazabilidad distribuida continua W3C traceparent (HTTP → Outbox → RabbitMQ → Consumidor) en Jaeger',
        'Resource Server OAuth 2.0 / OIDC con Keycloak, validación asimétrica RS256 y descubrimiento JWKS dinámico',
        'Rate Limiting Fixed Window en memoria (RFC 9457 / HTTP 429) y métricas con cardinalidad delimitada',
      ],
      highlights: [
        '300 pruebas automatizadas (166 unitarias + 134 integración, concurrencia e inyección de fallas)',
        'Clean Architecture + DDD con aislamiento estricto en 5 contextos delimitados',
        'PostgreSQL 18 con índices parciales únicos e integridad referencial estricta',
        'RabbitMQ 3.x con Async API e Publisher Confirms habilitado',
        'OpenTelemetry .NET + Jaeger UI con visualización causal de latencia',
        'Capacidad transaccional empírica de 278 RPS en escrituras ACID de dominio (k6 P2)',
      ],
      technologies: [
        'C# 14',
        '.NET 10',
        'ASP.NET Core',
        'PostgreSQL 18',
        'EF Core 10',
        'RabbitMQ',
        'Docker Compose',
        'OpenTelemetry',
        'Keycloak OIDC',
        'xUnit (300 Pruebas)',
      ],
      results:
        '300 pruebas automatizadas aprobadas (0 fallas); rendimiento sostenido de 278 RPS en escrituras ACID de dominio en PostgreSQL; recuperación en < 15ms bajo picos de tráfico; cero pérdida de eventos bajo caída de RabbitMQ y revisión arquitectural verificada.',
      links: {
        github: 'https://github.com/DevYuriVieira/fleetops-api',
      },
    },
    {
      id: 'spring-boot-ecommerce-api',
      title: 'Spring Boot E-Commerce API',
      category: 'Backend Java',
      featured: true,
      contextTag: 'Backend Java / REST API',
      collaboration: 'Proyecto colaborativo (5 desarrolladores - Residencia Serratec)',
      description:
        'API RESTful de e-commerce construida en equipo con Java 17, Spring Boot 3 y PostgreSQL, con envío automatizado de correos electrónicos, integración ViaCEP, totalización de pedidos N:N y documentación OpenAPI 3.',
      context:
        'Proyecto final de la disciplina de Desarrollo de API Restful de la Residencia en TIC/Software Serratec 2026.1 (Turma 36 Nova Friburgo), desarrollado en equipo de 5 integrantes (Emanuel Valinhos, Nícolas Oliveira, Nívea D\'Avila, Victor Lima y Yuri Vieira).',
      problem:
        'Construir un ecosistema backend de e-commerce con validación catastral rigurosa, asociación obligatoria de productos a categorías, relación N:N entre productos y pedidos con cálculo dinámico del total, consumo de servicio postal externo y notificaciones por correo.',
      solution:
        'Arquitectura en capas (Controller, Service, Repository, Entity, DTO) en Spring Boot con Spring Data JPA/Hibernate, PostgreSQL, seguridad con Spring Security, envío transaccional de correos vía JavaMail, integración con ViaCEP, manejo global de excepciones con @ControllerAdvice y Swagger UI.',
      development:
        'Trabajo colaborativo en modelado de entidades y relaciones N:N (Producto-Pedido), integración de la API de ViaCEP para llenado automático de direcciones, implementación de servicios de correo con JavaMail, validaciones defensivas con Bean Validation (@NotNull, @Size) y documentación con Springdoc OpenAPI.',
      architectureDecisions: [
        'Arquitectura en capas desacopladas (Controller, Service, Repository, Entity) garantizando alta cohesión y aislamiento de reglas de negocio',
        'Mapeo objeto-relacional N:N (Muchos a Muchos) entre Pedidos y Productos con persistencia transaccional en PostgreSQL vía Spring Data JPA',
        'Integración con la API externa de ViaCEP para consulta y llenado automático de código postal en el registro de clientes',
        'Envío automatizado de correos transaccionales vía Spring Boot Starter Mail (JavaMail) en cada inserción o modificación de cliente',
        'Manejo centralizado de excepciones con clase anotada con @ControllerAdvice y excepciones de dominio semánticas',
        'Validación defensiva de datos de entrada vía Bean Validation y control de estados de pedidos mediante Enums',
        'Documentación interactiva de todos los endpoints vía Springdoc OpenAPI UI (Swagger v2.8.16)',
      ],
      highlights: [
        'API RESTful en Java 17 y Spring Boot 3 con PostgreSQL',
        'Relación N:N entre Pedidos y Productos con totalización automática',
        'Integración con servicio externo ViaCEP para consulta de código postal',
        'Envío de correos transaccionales con Spring Mail (JavaMail)',
        'Manejo global de excepciones con @ControllerAdvice',
        'Validación estricta de datos con Bean Validation y Enums',
        'Documentación interactiva con Swagger UI / OpenAPI 3',
        'Proyecto colaborativo de 5 desarrolladores (Residencia Serratec 2026.1)',
      ],
      technologies: [
        'Java 17',
        'Spring Boot 3',
        'Spring Data JPA',
        'Spring Security',
        'PostgreSQL',
        'Bean Validation',
        'JavaMail',
        'ViaCEP API',
        'Swagger/OpenAPI',
        'Maven',
        'Lombok',
      ],
      summaryProblem: 'Gestión de e-commerce con validación catastral, integración ViaCEP y envío de e-mails',
      summarySolution: 'API RESTful en Java 17 y Spring Boot con JPA/Hibernate, Spring Security y JavaMail',
      summaryArch: 'Capas desacopladas, relación N:N producto-pedido, @ControllerAdvice y Swagger OpenAPI 3',
      summaryResults: 'Relleno automático vía ViaCEP, totalización de pedidos y e-mails transaccionales',
      results:
        'Procesamiento consistente de pedidos con totalización dinámica de ítems y ciclo de vida de estados vía Enum; llenado automático de direcciones vía integración ViaCEP; confirmaciones automáticas enviadas por correo a clientes; cobertura completa de documentación OpenAPI 3 interactiva vía Swagger UI.',
      links: { github: 'https://github.com/DevYuriVieira/ecommerce-serratec-api' },
    },

    {
      id: 'work-fitness',
      title: 'Work-Fitness | Plataforma Comercial & Consultoría',
      category: 'Plataforma Comercial (Freelance)',
      featured: true,
      contextTag: 'Proyecto Comercial en Producción',
      collaboration: 'Proyecto freelance a medida',
      client: 'Vinicius Santos (Personal Trainer)',
      description:
        'Plataforma web comercial y motor de evaluación biomecánica desarrollada a medida para el entrenador Vinicius Santos (Arena Complejo Deportivo, Nova Friburgo - RJ), combinando cálculo de composición corporal (IMC OMS, grasa Deurenberg 1991, TMB Mifflin-St Jeor), Clean Architecture, accesibilidad WCAG 2.1 AA con VLibras, nota 100/100 en Lighthouse y conversión estructurada para WhatsApp con tags UTM.',
      context:
        'Solución comercial desarrollada como ingeniero freelance para el entrenador Vinicius Santos (licenciado en Educación Física por la UCB en 2008 con más de 15 años de trayectoria en el Arena Complejo Deportivo en Nova Friburgo - RJ), sustituyendo planillas manuales por un flujo automatizado de captación de leads calificados y diagnóstico corporal instantáneo.',
      problem:
        'Lentitud en redes móviles con SPAs pesadas provocando fuga de usuarios antes del clic; contactos descalificados en WhatsApp sin antecedentes de dolores articulares o rutina física; y falta de criterios de accesibilidad en sitios del sector fitness, incumpliendo normativas de inclusión.',
      solution:
        'Aplicación web en Vanilla TypeScript 5.7 y Vite 6 estructurada en Clean Architecture, desacoplando el núcleo de cálculo matemático (src/core/ - sin DOM) de la interfaz (src/modules/). Motor biomecánico con fórmulas clínicas (OMS, Deurenberg, Mifflin-St Jeor), telemetría sincronizada en 3 canales (GA4, GTM, Meta Pixel), mensajes formateados en WhatsApp con tags UTM, suite asistiva WCAG 2.1 AA con VLibras, PWA offline con Service Worker y pipeline con 170 pruebas unitarias en Vitest y 47 specs E2E en Playwright en 26 viewports.',
      development:
        'Desarrollo full-cycle como ingeniero freelance: diseño de Clean Architecture con núcleo de cálculo desacoplado, implementación de algoritmos antropométricos en TypeScript puro, arquitectura CSS modular en tokens, suite asistiva WCAG 2.1 AA (Live Announcer, Lectura Biónica, filtros SVG de daltonismo y fix de Shadow DOM en VLibras), validación en 26 viewports y pipeline con 170 pruebas en Vitest y 47 specs en Playwright.',
      architectureDecisions: [
        'Clean Architecture con aislamiento absoluto del núcleo matemático (src/core/ - zero DOM, zero browser globals), facilitando pruebas unitarias en microsegundos (ADR-002)',
        'Vanilla TypeScript 5.7 y Vite 6 frente a frameworks SPA, eliminando sobrecostes de hidratación con bundle de 32.46 kB JS (11.34 kB gzipped) (ADR-001)',
        'Arquitectura CSS modular orientada a tokens en src/styles/ con cascada canónica en main.css y cero runtime de CSS-in-JS (ADR-003)',
        'Motor biomecánico fundamentado en ecuaciones de Deurenberg (1991) para grasa corporal por edad/sexo, Mifflin-St Jeor para TMB e IMC según la OMS (ADR-004)',
        'Ingeniería de conversión multicanal síncrona (GA4, GTM, Meta Pixel) con generación de mensajes en WhatsApp y conservación de parámetros UTM (ADR-005)',
        'Suite de accesibilidad universal WCAG 2.1 AA / Senac con Lectura Biónica, filtros SVG de daltonismo, máscara/regla focal, Live Announcer y VLibras (ADR-006)',
        'Matriz de responsividad validada en 26 formatos de pantalla (desde plegables de 280px hasta monitores ultrawide 32:9 de 5120px) sin desbordamiento (ADR-007)',
        'Píldora flotante de conversión con sincronización dinámica para ocultar el botón flotante de WhatsApp vía body.has-sticky-bar (ADR-012)',
        'Pipeline cuádruple de calidad: 170 pruebas unitarias en Vitest (20 suites en < 5s), 47 specs en Playwright en 26 viewports, Cypress y k6 (ADR-009)',
        'Contenedor multi-stage inmutable (Node 22 Alpine builder + Nginx 1.27 Alpine runtime) con compresión gzip y cabeceras estrictas de seguridad (ADR-011)',
      ],
      highlights: [
        'Nota perfecta 100/100 en las 4 categorías de Google Lighthouse (Performance, Accesibilidad, Buenas Prácticas y SEO)',
        '170 pruebas unitarias en Vitest (20 suites) + 47 specs E2E en Playwright en 26 viewports con 100% de aprobación',
        'Bundle compilado ultraligero de apenas 32.46 kB JS (11.34 kB gzipped) y cero retraso de hidratación',
        'Métricas Core Web Vitals de élite: LCP < 0.8s, CLS = 0.00 e INP < 16ms (P98)',
        'Motor biomecánico con fórmulas clínicas (IMC OMS, grasa Deurenberg 1991, TMB Mifflin-St Jeor)',
        'Accesibilidad universal WCAG 2.1 AA y VLibras integrado sin saltos visuales de layout',
        'Telemetría de conversión en 3 canales simultáneos (GA4, GTM, Meta Pixel) con retención de UTM en WhatsApp',
        'PWA Offline con Service Worker nativo y alertas de conectividad vía toasts',
        'Contenedor Docker Compose con imagen multi-stage Nginx Alpine en el puerto 5500',
      ],
      technologies: [
        'TypeScript',
        'Vite',
        'Clean Architecture',
        'Vitest (170 Pruebas)',
        'Playwright',
        'Docker',
        'Nginx Alpine',
        'PWA Offline',
        'Google Analytics 4',
        'Meta Pixel',
      ],
      summaryProblem: 'Captación dispersa en WhatsApp, ausencia de triaje biomecánico y lentitud de constructores SPA',
      summarySolution: 'Vanilla TypeScript 5.7 y Vite 6 en Clean Architecture aislando fórmulas biomecánicas de la interfaz',
      summaryArch: 'Núcleo matemático puro (OMS/Deurenberg/Mifflin), CSS modular en tokens y suite WCAG 2.1 AA con VLibras',
      summaryResults: '100/100 Lighthouse, 170 pruebas Vitest, 47 specs Playwright en 26 pantallas y bundle de 32 kB',
      results:
        'Plataforma comercial en producción con nota máxima de 100/100 en todas las categorías de Google Lighthouse (LCP < 0.8s, CLS = 0.00, INP < 16ms y bundle de 32 kB); aumento sustancial en la tasa de conversión de nuevos alumnos para el entrenador Vinicius Santos, entregando leads calificados con historial articular directo en WhatsApp; 170 pruebas automatizadas garantizando cero regresiones.',
      links: {
        github: 'https://github.com/DevYuriVieira/Work-Fitness',
        demo: 'https://viniciusantos.vercel.app/',
        demoLabel: 'Ver en Producción',
      },
    },
    {
      id: 'farmflow',
      title: 'FarmFlow | Plataforma Agroindustrial & Mobile Precision',
      category: 'Full-Stack Agroindustrial (Mobile & API)',
      featured: true,
      contextTag: 'Mobile Offline-First & API Distribuida',
      collaboration: 'Proyecto autoral de arquitectura distribuida',
      description:
        'Plataforma de agricultura de precisión y operaciones críticas de campo combinando aplicación móvil Offline-First en React Native (Expo SDK 54, React 19) e motor backend distribuido de alta concurrencia en Java 21 LTS (Spring Boot 4.1.1, Virtual Threads, RabbitMQ, PostgreSQL 17 particionado) para operaciones remotas de campo, cumplimiento normativo del MAPA con firma digital SHA-256 y telemetría IoT de pivotes y silos.',
      context:
        'Solución de ingeniería diseñada para superar los retos del agronegocio: conectividad nula o intermitente en áreas rurales, necesidad de firma digital en cuadernos de campo para auditorías del MAPA y telemetría continua de activos.',
      problem:
        'Operaciones agrícolas críticas en zonas sin señal provocando pérdida de datos de pulverización, desajustes de inventario, multas del MAPA por falta de cuadernos firmados y falta de telemetría de activos.',
      solution:
        'Arquitectura integrada de extremo a extremo: frontend móvil Offline-First con cola transaccional FIFO y sincronización determinista; backend distribuido en Java 21 con Virtual Threads, Transactional Outbox Pattern y FOR UPDATE SKIP LOCKED sobre RabbitMQ, PostgreSQL 17 con particionamiento temporal y RLS fail-closed, respaldado por más de 549 pruebas automatizadas (411 en backend + 138 en móvil).',
      architectureDecisions: [
        'Frontend móvil Offline-First con cola FIFO transaccional en AsyncStorage y reconciliación determinista con netinfo',
        'Módulo regulatorio del MAPA con generación de cuaderno técnico e firma digital en Canvas con hash SHA-256',
        'Backend en Java 21 LTS con Virtual Threads y Spring Boot 4.1.1 soportando 2.450 req/s en pruebas k6',
        'Transactional Outbox Pattern con RabbitMQ (CloudEvents v1.0, DLX, TTL, Dead Letter Queue) y FOR UPDATE SKIP LOCKED',
        'PostgreSQL 17 con Particionamiento Temporal Declarativo, índices BRIN y Fail-Closed Row Level Security (RLS)',
        'Sagas distribuidas orquestadas con locks consultivos (pg_try_advisory_xact_lock) y trazabilidad W3C traceparent OpenTelemetry',
        'Autenticación Keycloak 26.1 OIDC con protección contra enumeración IDOR (HTTP 404 en vez de 403) y biometría móvil',
        'Suite masiva de 549+ pruebas automatizadas (411 en backend con 100 Virtual Threads y 138 en móvil en 26 suites Jest)',
      ],
      highlights: [
        '549+ pruebas automatizadas (411 pruebas en Backend Java + 138 pruebas en Móvil)',
        'Cliente móvil Offline-First en React Native (Expo 54, React 19) con sincronización FIFO',
        'Backend Java 21 LTS con Virtual Threads soportando 2.450 req/s (k6)',
        'Transactional Outbox con RabbitMQ y CloudEvents v1.0',
        'PostgreSQL 17 con particionamiento temporal y Row Level Security (RLS)',
        'Cuaderno regulatorio MAPA con firma digital canvas SHA-256',
        'Telemetría IoT para pivotes de riego central y silos graneleros',
        'Trazabilidad distribuida de extremo a extremo W3C con OpenTelemetry',
      ],
      technologies: [
        'React Native',
        'Expo SDK 54',
        'Java 21 LTS',
        'Spring Boot 4',
        'Virtual Threads',
        'PostgreSQL 17',
        'RabbitMQ',
        'Offline-First',
        'IoT Telemetry',
        'Docker Compose',
        'Keycloak OIDC',
        'OpenTelemetry',
      ],
      summaryProblem: 'Cuellos de botella de conectividad rural, pérdidas de registros y desfasaje de inventario y maquinaria',
      summarySolution: 'Motor event-driven con Java 21 Virtual Threads, Transactional Outbox, RabbitMQ y PostgreSQL 17',
      summaryArch: 'Saga coreografiada, SKIP LOCKED, RLS fail-closed, índices BRIN y CloudEvents v1.0',
      summaryResults: '2.450 req/s bajo k6, 549+ tests automatizados (411 en API + 138 en móvil) y poda en 0,026ms',
      results:
        'Sincronización 100% íntegra de datos de campo en zonas sin señal vía cola FIFO; cumplimiento normativo estricto con exigencias del MAPA; capacidad de alto rendimiento en backend de 2.450 req/s con cero errores 5xx; 549+ pruebas automatizadas garantizando estabilidad total.',
      links: {
        github: 'https://github.com/DevYuriVieira/farmflow-mobile',
        backendGithub: 'https://github.com/DevYuriVieira/farmflow-backend',
      },
    },

    {
      id: 'aurora-growth-platform',
      title: 'Aurora | Plataforma de Crecimiento Personal',
      category: 'Mobile React Native',
      featured: true,
      contextTag: 'App Mobile React Native / Expo',
      collaboration: 'Proyecto colaborativo (6 desarrolladores - Proyecto Final Serratec)',
      description:
        'Aplicación móvil en React Native (Expo SDK 54, React Navigation 7) para crecimiento personal, profesional y comunitario, combinando sesiones autenticadas protegidas, gamificación con XP y niveles, CRUD de metas con progreso visual, feed con fallback local y check-in en mentorías vía QR Code.',
      context:
        'Proyecto final de la disciplina de Desarrollo Multiplataforma de la Residencia Serratec 2026.1 (Clase 36 Nova Friburgo), desarrollado en equipo de 6 integrantes como ecosistema nativo para iOS y Android bajo el lema "Tu viaje hacia un nuevo comienzo".',
      problem:
        'Dispersión en el seguimiento de metas diarias, falta de motivación en rutinas de hábitos, registro manual de asistencia a mentorías y necesidad de conciliar consumo de APIs con fallback de almacenamiento local.',
      solution:
        'Arquitectura móvil reactiva en React Native 0.81 y Expo SDK 54 con TypeScript 5.9, combinando navegación híbrida tripartita (Drawer, Bottom Tabs, Stack vía React Navigation 7), motor de gamificación con XP/niveles/logros, validación estricta con React Hook Form + Zod, consumo de APIs (MockAPI/REST) con respaldo local en db.json y AsyncStorage, y acceso nativo a Cámara, Galería, GPS y QR Code.',
      development:
        'Trabajo en equipo de 6 desarrolladores en el diseño de rutas (index, auth.routes, app.routes), gestión del estado global de sesión mediante AuthContext, tipado y validación de formularios con Zod y Hook Form, feed comunitario con fallback offline, flujo de acreditación con QR Code nativo y seguridad con Expo Secure Store.',
      architectureDecisions: [
        'Navegación híbrida tripartita combinando Drawer, Bottom Tabs y Stack en React Navigation 7',
        'Motor de gamificación en el cliente con saludo dinámico según horario, cómputo de XP, niveles y logros',
        'Validación defensiva de formularios combinando React Hook Form con esquemas Zod estrictos',
        'Capa de datos híbrida orquestando llamadas REST/MockAPI con fallback local tolerante a fallos (db.json y AsyncStorage)',
        'Check-in de asistencia a mentorías impulsado por escaneo y generación nativa de códigos QR',
        'Integración nativa de hardware vía Expo Image Picker (Cámara/Galería), Expo Location (GPS) y Expo Secure Store',
        'Persistencia centralizada de sesión y guardas de rutas autenticadas administradas mediante AuthContext',
      ],
      highlights: [
        'App Mobile React Native (0.81.5) con Expo SDK 54 y TypeScript 5.9',
        'Navegación híbrida tripartita (Drawer, Bottom Tabs y Stack)',
        'Gamificación con saludo por horario, cálculo de XP, Niveles y Logros',
        'Módulo completo de Metas con CRUD y seguimiento de progreso',
        'Feed comunitario con fallback local e integración con APIs remotas',
        'Inscripción en mentorías con verificación de asistencia por QR Code nativo',
        'Acceso a Cámara, Galería, GPS, AsyncStorage y Expo Secure Store',
        'Validación robusta de formularios con React Hook Form + Zod',
      ],
      technologies: [
        'React Native',
        'Expo SDK 54',
        'TypeScript',
        'React Navigation 7',
        'React Hook Form',
        'Zod',
        'Axios',
        'AsyncStorage',
        'Expo Secure Store',
        'Expo Image Picker',
        'QR Code Scanner',
      ],
      summaryProblem: 'Dispersión en el seguimiento de metas, asistencia a mentorías y baja motivación en el desarrollo personal',
      summarySolution: 'App móvil en React Native y Expo SDK 54 con navegación híbrida, gamificación por XP y check-in por QR Code',
      summaryArch: 'React Navigation 7 (Drawer/Tabs/Stack), validación Zod + Hook Form, AuthContext y Expo Secure Store',
      summaryResults: 'Niveles y logros por XP, CRUD de metas con progreso, fallback offline y validación por QR Code',
      results:
        'Experiencia de navegación fluida en iOS y Android con 3 flujos híbridos coordinados; alta retención y motivación mediante progresión por XP y niveles; acreditación ágil en mentorías mediante lectura instantánea de QR Code; y máxima seguridad de credenciales mediante cifrado nativo en Expo Secure Store.',
      links: {
        github: 'https://github.com/DevYuriVieira/aurora-growth-platform',
      },
    },
    {
      id: 'django-ecommerce',
      title: 'Django Full-Stack E-Commerce',
      category: 'Full Stack Python/Django',
      featured: true,
      contextTag: 'Full-Stack Python (Service Layer & Webhooks)',
      collaboration: 'Proyecto autoral de referencia técnica',
      description:
        'Plataforma de e-commerce full-stack construida con Django 5.x y JavaScript vanilla (ES6+), implementando flujo de pago asíncrono con webhook idempotente, arquitectura con Service Layer sin DRF, transacciones atómicas y renderizado nativo basado en HTML5 <template>.',
      context:
        'Proyecto autoral diseñado para simular una arquitectura de producción real de e-commerce, enfocado en el desacoplamiento de reglas de negocio en el backend mediante el patrón Service Layer y gestión de estado frontend ultraligera sin overhead de frameworks SPA.',
      problem:
        'Implementar un flujo de checkout y pagos resiliente, previniendo procesamiento de transacciones duplicadas concurrentes (webhooks idempotentes), eliminando cuellos de botella de consultas N+1 en el ORM y manipulando el DOM con seguridad sin la sobrecarga de frameworks pesados.',
      solution:
        'Arquitectura desacoplada utilizando Django como API (sin DRF para control total del ciclo de vida HTTP), patrón Service Layer para aislamiento de lógica de dominio, control transaccional con transaction.atomic, consultas optimizadas con prefetch_related, simulación de webhook de pago asíncrono (transición pending -> paid) y frontend modular en Vanilla JS con templates HTML5 y manipulación segura vía textContent.',
      development:
        'Desarrollo full-stack autoral cubriendo modelado relacional de pedidos, cupones de descuento con reglas de negocio y favoritos; endpoints REST versionados en JSON; lógica de webhook idempotente para protección contra reenvíos; gestión centralizada de estado del lado del cliente; y estrategia de debounce en la búsqueda.',
      architectureDecisions: [
        'Patrón Service Layer en Django garantizando aislamiento limpio de la lógica de dominio desacoplada de las vistas',
        'Procesamiento asíncrono idempotente de Webhooks de pago (transición de estado pending -> paid) respaldado por transacciones atómicas',
        'Optimización de rendimiento en el ORM con prefetch_related eliminando cuellos de botella de consultas N+1 en catálogo y pedidos',
        'Frontend modular en JavaScript vanilla (ES6+) con componentización mediante <template> nativo de HTML5 y manipulación segura con textContent (cero vector XSS)',
        'Control de acceso por API REST versionada con protección CSRF estricta y gestión de estado del lado del cliente personalizada',
        'Eliminación deliberada de Django REST Framework para un control minucioso del ciclo de vida de las peticiones HTTP',
      ],
      highlights: [
        'Service Layer & Transacciones Atómicas (transaction.atomic) en Django',
        'Procesamiento asíncrono idempotente vía Webhook de pago (pending -> paid)',
        'Optimización de consultas ORM con prefetch_related (Zero consultas N+1)',
        'Frontend modular en JavaScript vanilla con HTML5 <template> y textContent',
        'API REST versionada con respuestas JSON sin sobrecarga de DRF',
        'Carrito dinámico lateral, reglas de negocio para cupones y lista de favoritos',
        'Protección nativa estricta contra ataques CSRF e inyección XSS',
        'Estrategia de debounce para reducción de peticiones de búsqueda innecesarias',
      ],
      technologies: [
        'Python 3.11+',
        'Django 5.x',
        'SQLite',
        'Vanilla JS (ES6+)',
        'HTML5 <template>',
        'CSS3 Modern',
        'REST API Versionada',
        'Webhooks Idempotentes',
        'Service Layer',
      ],
      summaryProblem: 'Cobros duplicados en pagos concurrentes, cuellos de botella N+1 en queries y sobrecoste de frameworks SPA',
      summarySolution: 'E-commerce full-stack en Django 5 y Vanilla JS con Service Layer desacoplada y webhook idempotente',
      summaryArch: 'Transacciones atómicas, prefetch_related, API sin DRF, renderizado con <template> y debounce de búsqueda',
      summaryResults: 'Transición pending -> paid sin duplicidad, cero N+1 en el ORM, protección CSRF/XSS y cero sobrecoste de bundle',
      results:
        'Procesamiento asíncrono idempotente de Webhooks de pago eliminando cobros dobles en peticiones concurrentes; eliminación total de consultas N+1 vía prefetch_related; arquitectura frontend ligera en JavaScript vanilla con cero sobrecarga de frameworks y manipulación estrictamente segura del DOM vía <template> y textContent.',
      links: {
        github: 'https://github.com/DevYuriVieira/liquor-store-django',
      },
    },
    {
      id: 'playstation-evolution-timeline',
      title: 'PlayStation Evolution Timeline',
      category: 'Frontend React & Motion',
      featured: true,
      contextTag: 'App en Producción (Vercel)',
      collaboration: 'Proyecto personal',
      description:
        'Timeline interactiva de 30 años de hardware PlayStation construida en React, TypeScript y Framer Motion, publicada en Vercel con CI/CD.',
      context:
        'Aplicación web en producción creada para dominar animaciones declarativas avanzadas, motion design y componentes TypeScript de alto rendimiento.',
      problem:
        'Renderizar 30 años de especificaciones históricas de hardware con transiciones visuales ricas sin causar caídas de cuadros (FPS) o cuellos de botella.',
      solution:
        'Timeline interactiva construida con React, Vite y TypeScript, animada vía Framer Motion con interpolación de alto rendimiento y pipeline CI/CD automatizado en Vercel.',
      development:
        'Proyecto autoral enfocado en tipado estricto de datos de hardware, estructura de componentes reutilizables y pipeline de despliegue automatizado en Vercel.',
      architectureDecisions: [
        'Tipado estricto de especificaciones históricas de hardware usando interfaces TypeScript',
        'Animaciones declarativas e interpoladas con Framer Motion evitando reflows del DOM',
        'Pipeline de despliegue continuo (CI/CD) automatizado en Vercel activado por commits en main',
        'Layout 100% responsivo para navegación fluida en dispositivos móviles y desktop',
      ],
      highlights: [
        'Aplicación en producción en Vercel',
        '30 años de historia de consolas PlayStation',
        'Motion design avanzado con Framer Motion',
        'Pipeline CI/CD automatizado vía GitHub + Vercel',
        'Arquitectura TypeScript con tipado estricto',
      ],
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Vite', 'Vercel CI/CD'],
      results:
        'Presentación interactiva de 30 años de hardware de consolas en timeline responsiva; renderizado de animaciones declarativas vía Framer Motion sin lag de UI; pipeline CI/CD automatizado en Vercel vinculado a commits de GitHub.',
      links: {
        github: 'https://github.com/DevYuriVieira/playstation-evolution-timeline',
        demo: 'https://playstation-evolution-timeline.vercel.app',
      },
    },
    {
      id: 'payroll-system-java',
      title: 'Sistema de Nómina',
      category: 'Backend Java',
      featured: false,
      contextTag: 'Backend Java / Arquitectura MVC+DAO',
      collaboration: 'Proyecto colaborativo (4 desarrolladores - Residencia Serratec)',
      description:
        'Sistema backend en Java 17 puro (sin ORM) construido en equipo de 4 desarrolladores para procesamiento automatizado de nómina por lotes, cálculo de alícuotas progresivas de INSS e IRRF, persistencia en PostgreSQL vía JDBC y exportación CSV.',
      context:
        'Proyecto final de evaluación de la disciplina de POO en la Residencia TIC Serratec 2026.1, desarrollado en equipo de 4 para simular un motor de cálculo financiero corporativo de RRHH.',
      problem:
        'Procesar archivos CSV por lotes con datos de empleados y dependientes, aplicar validación estricta de reglas de negocio y calcular alícuotas tributarias progresivas (INSS e IRRF) con deducciones por dependiente evitando imprecisiones financieras de punto flotante.',
      solution:
        'Arquitectura en capas en Java 17 puro (MVC + DAO) sin frameworks ORM, persistencia relacional vía JDBC en PostgreSQL, precisión financiera con BigDecimal (RoundingMode.HALF_UP), excepciones de dominio personalizadas y E/S CSV defensiva.',
      development:
        'Trabajo colaborativo en equipo diseñando el modelo UML, implementando abstracciones de acceso a datos (DAO/DAOImpl), lógica de servicio de nómina y excepciones de dominio personalizadas.',
      architectureDecisions: [
        'Arquitectura en capas MVC + DAO en Java 17 puro sin frameworks ORM, garantizando separación limpia de responsabilidades',
        'Uso estricto de BigDecimal con RoundingMode.HALF_UP en todas las operaciones tributarias y salariales',
        'Patrón Singleton aplicado al gestor de conexiones JDBC para optimización de recursos de base de datos',
        'Manejo de excepciones de dominio personalizadas previniendo registros corruptos en la base de datos',
        'Estrategia de persistencia de doble capa: transacciones relacionales en PostgreSQL y exportación automatizada de informes CSV',
      ],
      highlights: [
        'Cálculo automatizado de alícuotas progresivas de INSS & IRRF',
        'Precisión financiera con BigDecimal & RoundingMode.HALF_UP',
        'Arquitectura en capas MVC + DAO en Java 17 (sin frameworks)',
        'Gestor de conexiones JDBC optimizado con Patrón Singleton',
        'Manejo de excepciones de dominio & validación estricta de CPF',
        'Parsing defensivo por lotes y exportación automatizada de informes CSV',
        'Proyecto colaborativo de 4 desarrolladores (Residencia Serratec 2026.1)',
      ],
      technologies: [
        'Java 17',
        'PostgreSQL',
        'JDBC',
        'Arquitectura MVC',
        'Patrón DAO',
        'BigDecimal',
        'Singleton Pattern',
        'E/S CSV',
      ],
      summaryProblem: 'Procesamiento por lotes de empleados vía CSV y cálculo progresivo de INSS/IRRF',
      summarySolution: 'Arquitectura en capas MVC y DAO en Java 17 puro con persistencia JDBC en PostgreSQL',
      summaryArch: 'Patrones Singleton y DAO, precisión con BigDecimal y excepciones de dominio personalizadas',
      summaryResults: 'Cálculo tributario de alta precisión sin imprecisión financiera y doble persistencia (BD y CSV)',
      results:
        'Cálculo automatizado y preciso de alícuotas progresivas de INSS e IRRF conforme legislación laboral; validación en tiempo de ejecución de CPFs y relaciones de dependientes; persistencia transaccional dual en PostgreSQL y generación automatizada de informes CSV.',
      links: { github: 'https://github.com/DevYuriVieira/payroll-system-java' },
    },
    {
      id: 'fleet-management-system',
      title: 'Fleet Management System',
      category: 'Aplicación Frontend',
      featured: false,
      contextTag: 'Frontend Operacional Logístico',
      collaboration: 'Proyecto colaborativo',
      description:
        'Dashboard operacional SPA en React y TypeScript construido para monitoreo de flotas logísticas y conductores en tiempo real.',
      context:
        'Aplicación colaborativa diseñada para optimizar el monitoreo de estados de mantenimiento de vehículos y asignación de conductores.',
      problem:
        'Operadores logísticos requerían una interfaz centralizada y rápida para filtrar vehículos por estado de mantenimiento sin depender de hojas de cálculo dispersas.',
      solution:
        'Single Page Application (SPA) en React y TypeScript con navegación React Router, estilización modular con Styled Components y gestión de estado reactivo para filtrado dinámico.',
      development:
        'Desarrollo de componentes modulares reutilizables, contratos de datos tipados con TypeScript y navegación declarativa del lado del cliente sin recargas de página.',
      architectureDecisions: [
        'Construcción de SPA reactiva en React con TypeScript para validación de esquemas de flota',
        'Estilización modular usando Styled Components',
        'Enrutamiento declarativo del lado del cliente entre formularios y dashboards vía React Router',
        'Arquitectura de componentes modulares enfocada en usabilidad del operador logístico',
      ],
      highlights: [
        'SPA reactiva construida con React y TypeScript',
        'Estilización escopada con Styled Components',
        'Navegación fluida del lado del cliente vía React Router',
        'Filtrado dinámico por estado de vehículo y mantenimiento',
        'Arquitectura de componentes reutilizables',
      ],
      technologies: ['React', 'TypeScript', 'Styled Components', 'Vite'],
      results:
        'Visualización clara y centralizada de operaciones de flota; filtrado instantáneo de vehículos por disponibilidad y estado de mantenimiento; navegación rápida entre vistas operacionales vía React Router.',
      links: {
        github: 'https://github.com/DevYuriVieira/fleet-management-system',
        demo: 'https://fleet-management-system-chi.vercel.app/',
      },
    },
    {
      id: 'anime-weather-platform',
      title: 'Anime Weather Platform',
      category: 'Frontend + APIs + IA',
      featured: false,
      contextTag: 'Frontend & Integración con IA',
      collaboration: 'Proyecto colaborativo (Pair Programming - Yuri Vieira & Micaela Paes)',
      description:
        'Sistema de orquestación frontend que combina inteligencia meteorológica en tiempo real (OpenWeather API), motor de recomendación atmosférica de anime (Jikan API / MyAnimeList), temas adaptativos al clima vía CSS Modules y asistente contextual con Google Gemini AI.',
      context:
        'Plataforma desarrollada en Pair Programming por Yuri Vieira y Micaela Paes durante la Residencia Serratec, diseñada para explorar la orquestación asíncrona de múltiples APIs REST combinadas con inteligencia artificial generativa contextual.',
      problem:
        'Orquestar flujos de datos heterogéneos en tiempo real (geolocalización, clima y catálogo cultural), mapeando estados atmosféricos en géneros de anime con temas dinámicos y asistente de IA sin bloquear la reactividad de la interfaz.',
      solution:
        'Arquitectura por capas en React 18 y Vite con pipeline lógico multicapa (Clima → Estado de Ánimo → Género de Anime), integrando OpenWeather API, Jikan API y Google Gemini SDK mediante Prompt Engineering, CSS Modules con Glassmorphism adaptativo al clima, autenticación simulada con rutas protegidas y ambientación Lofi.',
      development:
        'Desarrollo en pair programming cubriendo el motor de mapeo meteorológico-cultural, integración con el SDK de Google Gemini para respuestas contextuales y juegos de palabras, aislamiento de estilos con CSS Modules, gestión del estado global en React y manejo defensivo de fallbacks de reconexión de APIs.',
      architectureDecisions: [
        'Pipeline lógico multicapa que mapea Clima → Estado Atmosférico → Género de Anime (Ej: Despejado → Slice of Life, Lluvia → Drama/Misterio, Tormenta → Acción/Psicológico)',
        'Orquestación asíncrona consumiendo datos meteorológicos de OpenWeather API y catálogo de MyAnimeList vía Jikan API',
        'Asistente de clima contextualizado vía Google Gemini SDK considerando ciudad, temperatura en vivo, estado del tiempo y animes sugeridos',
        'Interfaz visual adaptativa con temas que reaccionan dinámicamente al clima en vivo mediante React Global State y CSS Modules aislados',
        'Diseño inmersivo combinando estética Glassmorphism, microinteracciones y reproductor ambiental Lofi',
        'Módulo de autenticación simulada demostrando protección de rutas, validación de entradas y flujo de redireccionamiento',
      ],
      highlights: [
        'Pipeline de recomendación atmosférica: Clima → Estado → Género',
        'Asistente contextual con Google Gemini SDK',
        'Orquestación de APIs: OpenWeather + Jikan API (MyAnimeList)',
        'Temas adaptativos en tiempo real según el clima local',
        'Estilos modulares y aislados con CSS Modules y Glassmorphism',
        'Experiencia inmersiva con reproductor ambiental Lofi integrado',
        'Flujo de autenticación simulada con rutas protegidas',
        'Proyecto colaborativo en Pair Programming (Yuri Vieira & Micaela Paes)',
      ],
      technologies: [
        'React 18',
        'Vite',
        'OpenWeather API',
        'Jikan API',
        'Google Gemini SDK',
        'CSS Modules',
        'JavaScript ES6+',
        'Glassmorphism',
      ],
      summaryProblem: 'Desafío de orquestar datos climáticos en tiempo real con catálogo de anime e IA generativa contextual',
      summarySolution: 'Frontend React y Vite orquestando OpenWeather, Jikan API y Google Gemini con pipeline Clima → Estado → Género',
      summaryArch: 'Pipeline multicapa, CSS Modules con temas adaptativos al clima, Glassmorphism y rutas protegidas',
      summaryResults: 'Recomendaciones atmosféricas en tiempo real, asistente de IA contextual y diseño ambiental adaptativo',
      results:
        'Orquestación precisa de múltiples APIs externas con renderizado fluido; mapeo determinista de clima en estados de ánimo y géneros de anime; asistente con Google Gemini contextualizando según el clima de la ciudad del usuario; y temas adaptativos en vivo.',
      links: {
        github: 'https://github.com/DevYuriVieira/anime-weather-platform',
      },
    },
    {
      id: 'hogwarts-interactive-hub',
      title: 'Hogwarts Interactive Hub',
      category: 'Arquitectura Frontend',
      featured: false,
      contextTag: 'Frontend Vanilla JS',
      collaboration: 'Proyecto personal',
      description:
        'Single Page Application inmersiva inspirada en el Wizarding World construida enteramente en JavaScript vanilla (ES6 Modules) sin frameworks.',
      context:
        'Proyecto autoral creado para practicar la construcción de aplicaciones web ricas usando exclusivamente APIs nativas del navegador.',
      problem:
        'Crear una experiencia inmersiva con animaciones interactivas (Sombrero Seleccionador con efecto typewriter y Mapa del Merodeador con pisadas trigonométricas) manteniendo alto rendimiento sin frameworks.',
      solution:
        'Aplicación en JavaScript vanilla con router SPA personalizado sobre History API, componentes ES6 Modules orientados a objetos, manejo de CSS Variables para tema Lumos/Nox y lazy animation vía Intersection Observer.',
      development:
        'Desarrollo de router del lado del cliente autoral, implementación de cálculos trigonométricos para trayectorias de elementos gráficos y gestión de estado local en LocalStorage.',
      architectureDecisions: [
        'Router SPA del lado del cliente sin frameworks construido desde cero manipulando History API nativa',
        'Animaciones interactivas avanzadas con efecto typewriter y cálculos trigonométricos para pisadas del Mapa del Merodeador',
        'Motor de renderizado dinámico del DOM en JavaScript vanilla reemplazando HTML estático con componentes ES6 modulares',
        'Sistema global de temas Lumos/Nox actualizando propiedades CSS personalizadas (:root) con soporte de atajos de teclado',
        'Optimización de rendimiento usando Intersection Observer API para lazy animations y responsividad con CSS clamp()',
      ],
      highlights: [
        'Router SPA autoral sin frameworks sobre History API',
        'Arquitectura modular con ES6 Modules',
        'Animaciones trigonométricas en el Mapa del Merodeador',
        'Ceremonia del Sombrero Seleccionador con efecto Typewriter',
        'Sistema global de temas Lumos/Nox con LocalStorage',
        'Rendimiento nativo & lazy loading con Intersection Observer',
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
        'Navegación entre secciones sin recarga de página y con cero dependencias externas; animaciones matemáticas fluidas; alternancia dinámica de tema persistida en el navegador.',
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
      collaboration: 'Proyecto colaborativo (4 desarrolladores - Residencia Serratec)',
      description:
        'Plataforma e-commerce B2C/B2B de pescados premium con arquitectura Multi-Page (MPA) en JavaScript vanilla (ES6+), carrito offcanvas en LocalStorage y flete vía ViaCEP API.',
      context:
        'Proyecto final de la disciplina de Desarrollo Web Frontend de la Residencia Serratec 2026.1, construido en equipo de 4 desarrolladores.',
      problem:
        'Entregar un recorrido avanzado de e-commerce (búsqueda dinámica, filtrado por categoría, carrito persistente, reglas de mayoreo, flete asíncrono en tiempo real y dashboard CRUD administrativo protegido) sin overhead de frameworks SPA.',
      solution:
        'Arquitectura Multi-Page (MPA) en JavaScript vanilla y Bootstrap 5.3, gestión de estado de carrito offcanvas en LocalStorage, integración REST API no bloqueante con ViaCEP y CRUD de productos con MockAPI.',
      development:
        'Trabajo colaborativo en equipo en diseño de arquitectura frontend, módulos JS aislados por funcionalidad, consumo de APIs no bloqueante con async/await, reglas de descuento mayorista (> R$ 500 o > 5kg) y estilización CSS responsive Mobile-First.',
      architectureDecisions: [
        'Arquitectura Multi-Page (MPA) sin frameworks en JavaScript vanilla (ES6+) para máximo rendimiento',
        'Módulos JS aislados por funcionalidad para separación limpia de responsabilidades',
        'Estado del lado del cliente encapsulado en LocalStorage para carrito offcanvas y sesión de usuario persistentes',
        'Cálculo de flete asíncrono en tiempo real integrando ViaCEP REST API con flujos async/await no bloqueantes',
        'Dashboard administrativo privado con CRUD completo de productos integrado con MockAPI',
        'Reglas dinámicas de precios mayoristas y filtros de catálogo por URL Query Strings',
      ],
      highlights: [
        'E-commerce frontend en JavaScript vanilla (ES6+) & Bootstrap 5.3',
        'Dashboard Admin privado con CRUD completo vía MockAPI',
        'Carrito offcanvas persistente en LocalStorage',
        'Cálculo de flete asíncrono en tiempo real vía ViaCEP API',
        'Reglas automáticas de descuento mayorista (> R$ 500 o > 5kg)',
        'Estructura MPA modular con cero overhead de frameworks',
        'Proyecto colaborativo de 4 desarrolladores (Residencia Serratec 2026.1)',
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
      summaryProblem: 'Simulación de e-commerce de producción sin backend tradicional',
      summarySolution: 'Arquitectura MPA en Vanilla JS con estado cliente en LocalStorage',
      summaryArch: 'Separación modular por funcionalidad e integración asíncrona (ViaCEP/MockAPI)',
      summaryResults: 'Cero overhead de frameworks, flete dinámico y reglas mayoristas automatizadas',
      results:
        'Búsqueda automatizada de direcciones y cálculo de flete en tiempo real vía ViaCEP API; estado de carrito de compras mantenido entre transiciones de página; dashboard administrativo seguro para gestión de catálogo.',
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
      contextTag: 'Frontend React Interactivo',
      collaboration: 'Proyecto personal',
      description:
        'Catálogo técnico interactivo de aeronaves militares construido en React, TypeScript y Styled Components con filtrado dinámico.',
      context:
        'Proyecto autoral construido para practicar componentización modular en React y tipado estricto de objetos técnicos complejos.',
      problem:
        'Presentar especificaciones técnicas detalladas de aeronaves militares en un layout dinámico que permita filtrado instantáneo sin recarga.',
      solution:
        'Catálogo interactivo en React y Styled Components con filtros por país y categoría, rutas declarativas vía React Router y estado con React Hooks.',
      development:
        'Desarrollo autoral usando React, TypeScript y Vite con componentes estrictamente tipados y escopados.',
      architectureDecisions: [
        'Arquitectura de componentes reutilizables en React con paso estricto de props',
        'Estilización escopada y dinámica de componentes usando Styled Components',
        'Enrutamiento declarativo del lado del cliente para vistas de detalle vía React Router',
        'Filtrado en tiempo real gestionado por estado local con React Hooks',
      ],
      highlights: [
        'Componentización limpia y reutilizable en React',
        'Tipado de datos aeronáuticos en TypeScript',
        'Estilización dinámica con Styled Components',
        'Enrutamiento del lado del cliente con React Router',
        'Gestión de estado local con React Hooks',
      ],
      technologies: ['React', 'JavaScript', 'React Router', 'Styled Components', 'Vite'],
      results:
        'Búsqueda y comparación en tiempo real de especificaciones técnicas de aeronaves militares filtradas por país y categoría; layout reactivo impulsado por componentes tipados y escopados.',
      links: {
        github: 'https://github.com/DevYuriVieira/modern-fighter-jets',
        demo: 'https://modern-fighter-jets.vercel.app/',
      },
    },
    {
      id: 'dental-clinic-db',
      title: 'Dental Clinic Management System (DCMS)',
      category: 'Base de Datos Relacional',
      featured: false,
      contextTag: 'Modelado de Base de Datos',
      collaboration: 'Proyecto colaborativo (6 desarrolladores - Proyecto Final de BD Serratec)',
      description:
        'Sistema de base de datos relacional construido en PostgreSQL 16+ durante la Residencia Serratec para gestión de clínicas dentales.',
      context:
        'Proyecto final de BD de la Residencia Serratec construido en equipo de 6 desarrolladores para proveer una base transaccional robusta para aplicaciones dentales.',
      problem:
        'Centralizar agendamiento de citas, historial de procedimientos y registros de dentistas (CRO) con garantías de integridad referencial, previniendo registros inválidos u huérfanos.',
      solution:
        'Modelado normalizado en 3FN en PostgreSQL 16+, integridad referencial con RESTRICT y CASCADE, validaciones DDL vía Regex para CPF, restricciones de horarios y mapeo N:N de procedimientos.',
      development:
        'Trabajo en equipo de 6 desarrolladores cubriendo modelado ERD, escritura de scripts SQL completos (DDL, DML, DQL), optimización estratégica de índices y creación de Views SQL analíticas.',
      architectureDecisions: [
        'Normalización estricta hasta 3ª Forma Normal (3FN) cubriendo entidades como pacientes, dentistas, agendas y citas',
        'Aplicación de reglas de negocio vía DDL: validación de CPF con Regex, restricciones lógicas de fechas y campos únicos',
        'Control estricto de integridad referencial usando reglas RESTRICT (prevención de huérfanos) y CASCADE',
        'Optimización de rendimiento para consultas frecuentes vía índices relacionales y Views SQL analíticas',
      ],
      highlights: [
        'Base de datos relacional PostgreSQL 16+ normalizada en 3FN',
        'Reglas de negocio vía DDL & validación de CPF con Regex',
        'Integridad referencial con RESTRICT y CASCADE',
        'Mapeo N:N de catálogo de procedimientos para citas',
        'Views SQL analíticas & optimización de rendimiento por índices',
      ],
      technologies: [
        'PostgreSQL 16+',
        'SQL Avanzado',
        'DDL',
        'DML',
        'DQL',
        'Database Indexing',
        'SQL Views',
      ],
      results:
        'Estructura relacional normalizada en 3FN en PostgreSQL; eliminación de redundancia de datos clínicos; generación rápida de informes operacionales mediante Views SQL analíticas.',
      links: { github: 'https://github.com/DevYuriVieira/dentacare-management-system' },
    },
    {
      id: 'interactive-auth-ui',
      title: 'Interactive Authentication UI',
      category: 'Frontend React',
      featured: false,
      contextTag: 'UX Engineering & Motion',
      collaboration: 'Proyecto personal de referencia técnica',
      description:
        'Interfaz interactiva de autenticación reactiva desarrollada con React 19 y Vite 7 con 4 personajes animados que reaccionan en tiempo real a las acciones del usuario mediante seguimiento trigonométrico del cursor, animaciones bucales dinámicas y gestos expresivos.',
      context:
        'Prototipo autoral de UX Engineering explorando patrones avanzados de interacción en React, trigonometría en tiempo real para posición de pupilas y animaciones adaptadas al ciclo de vida de los formularios.',
      problem:
        'Transformar formularios monótonos de autenticación en experiencias visuales atractivas que proporcionen retroalimentación inmediata durante el foco, escritura de contraseñas y errores de validación sin sobrecargar el rendimiento.',
      solution:
        'Aplicación SPA en React 19 y Vite 7 con React Router v7 y CSS Modules, incorporando 4 personajes geométricos (rectángulo, caja, semicírculo y cilindro) con 6 estados de reacción (idle, typing, closed, side, surprise, submit), seguimiento del cursor mediante Math.cos/sin, selector de tema Dark/Light con CSS Variables y diseño responsivo adaptado hasta 320px.',
      development:
        'Desarrollo individual completo: implementación del algoritmo trigonométrico de seguimiento ocular basado en coordenadas del ratón, máquina de estados para expresiones de personajes, animaciones CSS con keyframes (oscilación shake-tilt por error de validación), prevención de zoom en iOS (16px) y páginas SignIn, SignUp y ForgotPassword.',
      architectureDecisions: [
        'Cálculo trigonométrico en tiempo real del ángulo del cursor (Math.cos/sin) trasladando suavemente las pupilas dentro de un radio de 5px',
        'Máquina de estados con 6 reacciones conductuales discretas vinculadas a eventos de formulario (idle, typing, closed, side, surprise, submit)',
        'Animación keyframe tilt-shake con rotación oscilatoria (-8° a -2°) y ojos blancos abiertos de 36px activada ante fallos de validación',
        'Composición modular con React 19 y CSS Modules garantizando cero fuga de estilos entre personajes, ojos y controles de formulario',
        'Sistema de tokens de diseño para transiciones fluidas entre temas Dark y Light mediante Custom Properties de CSS',
        'Enrutamiento SPA entre SignIn, SignUp y ForgotPassword administrado con React Router 7',
        'Diseño responsivo mobile-first con escalado proporcional de personajes (Desktop, Tablet 768px, Mobile 480px, Tiny 320px)',
      ],
      highlights: [
        '4 personajes animados con reacciones contextuales (rectángulo, caja, semicírculo, cilindro)',
        'Seguimiento ocular con cálculo de ángulo del ratón en tiempo real',
        '6 reacciones conductuales: idle, typing, closed, side, surprise y submit',
        'Animación tilt-shake para retroalimentación visual de errores de validación',
        'Temas Dark y Light con alternancia mediante variables CSS nativas',
        'Flujos completos de autenticación: SignIn, SignUp y ForgotPassword en React Router 7',
        'Arquitectura moderna con React 19, Vite 7 y estilos aislados con CSS Modules',
        'Diseño responsivo validado desde 320px hasta ultrawide con áreas táctiles >= 44px',
      ],
      technologies: [
        'React 19',
        'Vite 7',
        'React Router 7',
        'CSS Modules',
        'CSS Variables',
        'JavaScript ES6+',
        'Trigonometric Math',
        'Dark / Light Mode',
      ],
      summaryProblem: 'Formularios estáticos de autenticación sin retroalimentación visual atractiva ni interacción dinámica',
      summarySolution: 'Interfaz reactiva en React 19 y Vite 7 con 4 personajes animados y seguimiento ocular del cursor',
      summaryArch: 'Cálculo de vector trigonométrico (cos/sin), CSS Modules con variables de tema y React Router v7',
      summaryResults: '6 estados de reacción (idle/typing/closed/side/surprise/submit), validación con tilt-shake y Dark Mode',
      results:
        'Experiencia de autenticación sumamente inmersiva con retroalimentación gestual y ocular en tiempo real; fluidez total a 60 FPS mediante cálculos trigonométricos ligeros en el cliente; 100% de aislamiento de estilos con CSS Modules; y transición fluida entre temas claro y oscuro.',
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
