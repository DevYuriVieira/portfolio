export interface ExecutiveSummaryRow {
  readonly area: string;
  readonly implementation: string;
}

export interface BoundedContextItem {
  readonly name: string;
  readonly title: string;
  readonly invariants: readonly string[];
}

export interface FailureScenarioRow {
  readonly scenario: string;
  readonly behavior: string;
  readonly guarantee: string;
}

export interface CapacityBenchmarkRow {
  readonly workload: string;
  readonly concurrency: string;
  readonly requests: string;
  readonly throughput: string;
  readonly p50: string;
  readonly p90: string;
  readonly p95: string;
  readonly max: string;
  readonly errors: string;
  readonly persistence: string;
  readonly verdict: string;
}

export interface AdrRow {
  readonly code: string;
  readonly title: string;
  readonly status: string;
  readonly focus: string;
}

export interface RunbookRow {
  readonly name: string;
  readonly trigger: string;
  readonly mitigation: string;
}

export interface SloRow {
  readonly service: string;
  readonly sli: string;
  readonly target: string;
  readonly budget: string;
  readonly burnAlert: string;
}

export interface EndpointItem {
  readonly method: 'GET' | 'POST' | 'DELETE' | 'PUT';
  readonly route: string;
  readonly purpose: string;
  readonly success: string;
}

export interface EndpointCategory {
  readonly category: string;
  readonly roles: string;
  readonly endpoints: readonly EndpointItem[];
}

export interface SyntheticUserRow {
  readonly user: string;
  readonly roles: string;
  readonly scope: string;
}

export interface FleetOpsModalI18n {
  readonly modalTitle: string;
  readonly modalEyebrow: string;
  readonly modalSubtitle: string;
  readonly githubUrl: string;
  readonly closeBtn: string;
  readonly closeAria: string;
  readonly copyMarkdown: string;
  readonly copiedMarkdown: string;
  readonly downloadMarkdown: string;
  readonly tabs: {
    readonly overview: string;
    readonly outbox: string;
    readonly messaging: string;
    readonly security: string;
    readonly benchmarks: string;
    readonly readme: string;
  };
  readonly badges: readonly { label: string; color?: 'green' | 'blue' | 'purple' | 'amber' }[];
  readonly executiveSummary: readonly ExecutiveSummaryRow[];
  readonly domainContexts: readonly BoundedContextItem[];
  readonly failureScenarios: readonly FailureScenarioRow[];
  readonly benchmarks: readonly CapacityBenchmarkRow[];
  readonly adrs: readonly AdrRow[];
  readonly runbooks: readonly RunbookRow[];
  readonly slos: readonly SloRow[];
  readonly endpointCategories: readonly EndpointCategory[];
  readonly syntheticUsers: readonly SyntheticUserRow[];
}

export const FLEETOPS_MODAL_DATA: Record<'pt-BR' | 'en', FleetOpsModalI18n> = {
  'pt-BR': {
    modalTitle: 'FleetOps API — Estudo Arquitetural & Referência Técnica',
    modalEyebrow: 'ESTUDO ARQUITETURAL & ENGENHARIA DE SISTEMAS DISTRIBUÍDOS',
    modalSubtitle: 'Fleet & Logistics Backend Engine — Architectural Study & Reference Project (.NET 10)',
    githubUrl: 'https://github.com/DevYuriVieira/fleetops-api',
    closeBtn: 'Fechar',
    closeAria: 'Fechar modal do estudo de caso FleetOps API',
    copyMarkdown: 'Copiar Markdown Completo',
    copiedMarkdown: '✓ Markdown Copiado!',
    downloadMarkdown: 'Baixar Dossiê (.md)',
    tabs: {
      overview: 'Resumo & Arquitetura',
      outbox: 'Outbox & Concorrência',
      messaging: 'RabbitMQ & Resiliência',
      security: 'Segurança OIDC & Tracing',
      benchmarks: '300 Testes & Benchmarks',
      readme: 'Dossiê Completo (README)',
    },
    badges: [
      { label: 'C# 14', color: 'green' },
      { label: '.NET 10.0', color: 'purple' },
      { label: 'ASP.NET Core 10', color: 'purple' },
      { label: 'PostgreSQL 18', color: 'blue' },
      { label: 'EF Core 10', color: 'purple' },
      { label: 'RabbitMQ 3.x', color: 'amber' },
      { label: 'Docker Compose', color: 'blue' },
      { label: 'OpenTelemetry', color: 'green' },
      { label: 'Keycloak OIDC RS256', color: 'blue' },
      { label: '300 Testes Aprovados', color: 'green' },
      { label: 'Quality Gate Verificado', color: 'green' },
    ],
    executiveSummary: [
      { area: 'Arquitetura', implementation: 'Clean Architecture + Domain-Driven Design (DDD) com isolamento estrito' },
      { area: 'Runtime & Framework', implementation: '.NET 10 (C# 14) / ASP.NET Core 10.0.11' },
      { area: 'Persistência de Dados', implementation: 'PostgreSQL 18 (PostgreSQL 18 Alpine no Docker)' },
      { area: 'Mapeamento Objeto-Relacional', implementation: 'Entity Framework Core 10.0.11 + Npgsql 10.0.3' },
      { area: 'Mensageria Assíncrona', implementation: 'RabbitMQ 3.x com RabbitMQ.Client 7.2.2 (Async API)' },
      { area: 'Confiabilidade de Eventos', implementation: 'Transactional Outbox Pattern integrado ao DbContext.SaveChangesAsync' },
      { area: 'Concorrência no Outbox', implementation: 'FOR UPDATE SKIP LOCKED (Workers paralelos selecionam lotes sem aguardar locks)' },
      { area: 'Rastreamento Distribuído', implementation: 'OpenTelemetry .NET + Jaeger (Propagação W3C traceparent de ponta a ponta)' },
      { area: 'Autenticação & Autorização', implementation: 'OpenID Connect (OIDC) / OAuth 2.0 Resource Server via Keycloak (RS256 + JWKS) + RBAC' },
      { area: 'Semântica de Entrega', implementation: 'Bounded At-least-once delivery (retries finitos e Dead-Letter Queue)' },
      { area: 'Idempotência de Consumo', implementation: 'Efeito de negócio único dentro da fronteira transacional auditada (MessageId PK)' },
      { area: 'Controle de Resiliência', implementation: 'Dead-Letter Exchange (DLX), Filas TTL de Retry (10s, 30s, 90s) e DLQ' },
      { area: 'Confirmação de Mensageria', implementation: 'Publisher Confirms habilitado no Outbox Publisher e Consumer' },
      { area: 'Controle de Concorrência', implementation: 'PostgreSQL Unique Constraints + Concorrência Otimista com xmin (xid)' },
      { area: 'Tratamento de Falhas', implementation: 'RFC 9457 ProblemDetails sanitizado com mascaramento total de credenciais e SQL' },
      { area: 'Proteção de Runtime', implementation: 'Rate Limiting Fixed Window (100 req/60s, QueueLimit 0) com RFC 9457 (HTTP 429)' },
      { area: 'Métricas & Observabilidade', implementation: 'System.Diagnostics.Metrics (fleetops.http.*, outbox.*, consumer.*) com cardinalidade delimitada' },
      { area: 'Testes Automatizados', implementation: '300 testes automatizados (166 testes de unidade + 134 testes de integração e falhas)' },
      { area: 'Containerização', implementation: 'Dockerfile multi-stage non-root ($APP_UID) + Docker Compose (API, Postgres, RabbitMQ, Keycloak, Jaeger)' },
      { area: 'Contrato de API & Saúde', implementation: 'OpenAPI 3.1 (/openapi/v1.json), Liveness (/health/live), Readiness (/health/ready), Dependencies' },
      { area: 'Ferramentas de Engenharia', implementation: 'Busca semântica local 100% offline em Python (LanceDB + SentenceTransformers all-MiniLM-L6-v2)' },
      { area: 'Testes de Carga & Automação', implementation: 'k6 em JavaScript (ES6 auth-helper.js com token OIDC Password Grant) + runner PowerShell' },
    ],
    domainContexts: [
      {
        name: 'Veículos (Vehicle)',
        title: 'Gestão de Ativos Operacionais da Frota',
        invariants: [
          'Cadastro com validação estrita de placa (LicensePlate), ano, modelo e capacidade em kg',
          'Associação exclusiva de condutor: o agregado detém CurrentDriverId (emite eventos de desassociação e associação)',
          'Atualização estritamente monotônica não-decrescente de odômetro (Mileage)',
          'Transições seguras para manutenção (SendToMaintenance) e retorno operacional',
        ],
      },
      {
        name: 'Motoristas (Driver)',
        title: 'Operadores e Condutores Homologados',
        invariants: [
          'Garantia de unicidade física de CNH (LicenseNumber) no PostgreSQL',
          'Validação de formato de e-mail corporativo e telefone',
          'Ciclo de estados: Active, Inactive e Suspended (com justificativa auditável)',
          'Total desacoplamento de veículos: Driver não referencia Vehicle',
        ],
      },
      {
        name: 'Entregas (Delivery)',
        title: 'Ordens de Carga e Rastreamento Logístico',
        invariants: [
          'Emissão com código de rastreamento exclusivo (TrackingCode) e endereços de origem/destino',
          'Atribuição conjunta de veículo e motorista com validação prévia de capacidade de carga (WeightKg <= CapacityKg)',
          'Ciclo de vida: Pending → Assigned → InTransit → Delivered ou Cancelled (com motivo)',
        ],
      },
      {
        name: 'Rotas (Route)',
        title: 'Planejamento e Despacho de Itinerários',
        invariants: [
          'Checagem cronológica estrita: PlannedDeparture anterior a EstimatedArrival',
          'Associação e desassociação de entregas compatíveis via coleção nativa uuid[]',
          'Início de trajeto exigindo veículo, condutor e pelo menos uma entrega vinculada',
          'Conclusão com validação de horário real e cancelamento defensivo',
        ],
      },
      {
        name: 'Manutenção (Maintenance)',
        title: 'Ordens de Serviço Mecânico e Custos',
        invariants: [
          'Agendamento de OS (Preventive, Corrective) com índice exclusivo para no máximo uma OS ativa por veículo',
          'Início com timestamp de abertura e encerramento com apropriação de custos (Money com precisão decimal)',
          'Retorno operacional de veículo bloqueado enquanto houver manutenção em andamento',
        ],
      },
    ],
    failureScenarios: [
      { scenario: 'PostgreSQL indisponível na API', behavior: 'Requisição falha de forma segura; /health/ready retorna HTTP 503; zero vazamento de connection string.', guarantee: 'Fail-fast sem corrupção' },
      { scenario: 'RabbitMQ indisponível durante criação', behavior: 'A transação de negócio e a gravação do Outbox comitam normalmente no PostgreSQL.', guarantee: 'Zero impacto no usuário final' },
      { scenario: 'Falha na publicação do Outbox', behavior: 'O OutboxProcessor grava erro e incremento de tentativas na linha do Outbox, reprocessando no ciclo seguinte.', guarantee: 'At-least-once outbox delivery' },
      { scenario: 'Falha no banco durante o consumo', behavior: 'Mensagem roteada para fila TTL de retry (10s → 30s → 90s) preservando integridade.', guarantee: 'Resiliência a falhas transitórias' },
      { scenario: 'Entrega duplicada de mensagem', behavior: 'O consumidor detecta o MessageId previamente registrado e emite ACK sem reexecutar efeitos de negócio.', guarantee: 'Idempotência garantida' },
      { scenario: 'Mensagem com JSON corrompido (Poison)', behavior: 'Detectada no deserializador e roteada imediatamente para a DLQ com motivo documentado.', guarantee: 'Proteção contra travamento de fila' },
      { scenario: 'Queda do servidor pós-commit do consumidor', behavior: 'Ao reiniciar, o broker reentrega a mensagem; a verificação por MessageId impede duplicação e emite o ACK pendente.', guarantee: 'Consistência pós-falha' },
      { scenario: 'Atualização concorrente de mesmo veículo', behavior: 'O PostgreSQL acusa incompatibilidade no xmin; o EF Core dispara concorrência e a API retorna HTTP 409 ProblemDetails.', guarantee: 'Prevenção de lost updates' },
      { scenario: 'Cadastro duplicado de placa/CNH', behavior: 'Restrição de unicidade física (uq_...) barra a operação no banco e a API responde HTTP 409 ProblemDetails.', guarantee: 'Integridade relacional estrita' },
    ],
    benchmarks: [
      { workload: 'RateLimit Burst', concurrency: '10 VUs (10s)', requests: '7.716 reqs', throughput: '759.38 req/s', p50: '1.08 ms', p90: '2.46 ms', p95: '3.32 ms', max: '515.45 ms', errors: '98.70% (HTTP 429)', persistence: '100 veículos', verdict: 'PASS (RFC 9457 / RFC 6585)' },
      { workload: 'Domain Baseline', concurrency: '5 VUs (30s)', requests: '2.596 reqs', throughput: '86.27 req/s', p50: '5.63 ms', p90: '9.88 ms', p95: '11.81 ms', max: '369.81 ms', errors: '0.00%', persistence: '2.595 veículos', verdict: 'PASS (Capacidade Estável)' },
      { workload: 'Domain Sustained', concurrency: '15 VUs (45s)', requests: '12.526 reqs', throughput: '277.83 req/s', p50: '3.88 ms', p90: '43.73 ms', p95: '72.16 ms', max: '200.29 ms', errors: '0.00%', persistence: '12.525 veículos', verdict: 'PASS (Vazão Sustentável)' },
      { workload: 'Domain Spike', concurrency: '5 → 35 → 5 VUs', requests: '3.072 reqs', throughput: '153.16 req/s', p50: '10.12 ms', p90: '260.59 ms', p95: '357.84 ms', max: '1.13 s', errors: '0.00%', persistence: '3.071 veículos', verdict: 'PASS (Recuperação sem Falhas)' },
      { workload: 'Domain Stress', concurrency: '5 → 70 VUs (50s)', requests: '9.921 reqs', throughput: '198.31 req/s', p50: '75.36 ms', p90: '348.10 ms', p95: '392.93 ms', max: '801.66 ms', errors: '0.00%', persistence: '9.920 veículos', verdict: 'PASS (Saturação Observada)' },
    ],
    adrs: [
      { code: 'ADR-001', title: 'Transactional Outbox Pattern for Reliable Event Publishing', status: 'Accepted', focus: 'Dual-write hazard mitigation via PostgreSQL ACID transaction boundary' },
      { code: 'ADR-002', title: 'PostgreSQL Concurrency Control via SKIP LOCKED and xmin', status: 'Accepted', focus: 'Contention-free concurrent worker polling and optimistic row versioning' },
      { code: 'ADR-003', title: 'Direct RabbitMQ.Client Driver Over Heavy Messaging Abstractions', status: 'Accepted', focus: 'Low-level control over Publisher Confirms, ACK ordering, and native topology' },
      { code: 'ADR-004', title: 'PostgreSQL as Sole Persistence and Coordination Engine', status: 'Accepted', focus: 'Dual-source hazard prevention leveraging ACID relational guarantees' },
      { code: 'ADR-005', title: 'End-to-End W3C Trace Context Propagation Across Async Boundaries', status: 'Accepted', focus: 'Continuous distributed tracing HTTP → Outbox → RabbitMQ → Consumer' },
      { code: 'ADR-006', title: 'Bounded At-Least-Once Delivery Semantics', status: 'Accepted', focus: 'Explicit bounded delivery semantics with finite retries, DLQ, and deduplication' },
      { code: 'ADR-007', title: 'Consumer Idempotency and Single Business Effect Boundary', status: 'Accepted', focus: 'Primary-key deduplication within the audited business transaction boundary' },
      { code: 'ADR-008', title: 'Self-Contained JWT Bearer Authentication', status: 'Superseded by ADR-016', focus: 'Superseded by OIDC/Keycloak for Resource Server boundary isolation' },
      { code: 'ADR-009', title: 'Application-Level Rate Limiting Strategy and Gateway Offloading', status: 'Accepted', focus: 'Strict demarcation between in-memory local limits and edge/gateway control' },
      { code: 'ADR-010', title: 'In-Process Fixed Window Rate Limiting with Boundary Demarcation', status: 'Accepted', focus: 'Node-level resource defense with RFC 9457 429 and Retry-After header' },
      { code: 'ADR-011', title: 'Health Check Probing Semantics: Live, Ready, and Degraded Dependencies', status: 'Accepted', focus: 'Decoupled liveness, readiness, and degraded multi-dependency diagnostics' },
      { code: 'ADR-012', title: 'Operational Metrics and Telemetry Cardinality Discipline', status: 'Accepted', focus: 'System.Diagnostics.Metrics with bounded dimensions for Outbox and Consumer' },
      { code: 'ADR-013', title: 'Empirical Performance Baseline via k6', status: 'Accepted', focus: 'Automated reproducible load, sustained, and spike profiles' },
      { code: 'ADR-014', title: 'Service Level Objectives (SLOs) and Error Budget Framework', status: 'Accepted', focus: 'Mathematically grounded SLIs/SLOs covering latency and availability' },
      { code: 'ADR-015', title: 'Capacity Engineering, Domain-Level Workloads, and Performance Boundary', status: 'Accepted', focus: 'Relational domain transaction capacity boundaries and saturation engineering' },
      { code: 'ADR-016', title: 'OpenID Connect / OAuth 2.0 Resource Server with Keycloak & RS256', status: 'Accepted', focus: 'Migration to OIDC, asymmetric RS256 validation, dynamic JWKS discovery' },
    ],
    runbooks: [
      { name: 'Queda do PostgreSQL', trigger: 'Readiness /health/ready responde 503; conexão recusada ou pool esgotado', mitigation: 'Verificar storage/WAL, validar pool de conexões Npgsql, acionar failover para réplica' },
      { name: 'Queda do RabbitMQ', trigger: '/health/dependencies reporta Degraded; acúmulo no Outbox', mitigation: 'O sistema preserva escritas via Outbox; reiniciar broker; drenagem automática na recuperação' },
      { name: 'Acúmulo de Backlog no Outbox', trigger: 'Métrica fleetops.outbox.backlog.count > 500 mensagens', mitigation: 'Inspecionar rede com broker, ajustar tamanho do lote do worker ou escalonar réplicas horizontais' },
      { name: 'Reentregas do Consumidor e DLQ', trigger: 'Métrica fleetops.consumer.messages.failed; profundidade da DLQ > 0', mitigation: 'Inspecionar payload corrompido (poison message), validar schema a jusante, reprocessar ou purgar' },
    ],
    slos: [
      { service: 'Escritas Síncronas da API', sli: 'Respostas HTTP bem-sucedidas (2xx ou 4xx vs 5xx)', target: '≥ 99.9% Disponibilidade', budget: '0.10% (43.2 min downtime)', burnAlert: '2% em 1h; 5% em 6h' },
      { service: 'Latência Síncrona da API', sli: 'Duração de resposta P95 em /api/*', target: '≤ 250 ms (P95)', budget: '5% de amostras excedendo 250 ms', burnAlert: '10% em janela de 15 min' },
      { service: 'Latência de Relay do Outbox', sli: 'Tempo entre occurred_on_utc e ACK de publicação', target: '≤ 5.0 s (P95)', budget: '5% de eventos atrasados além de 5s', burnAlert: 'Backlog > 500 msgs por > 2 min' },
      { service: 'Latência do Consumidor', sli: 'Tempo do despacho até o commit e ACK', target: '≤ 100 ms (P95)', budget: '5% de mensagens excedendo 100 ms', burnAlert: 'Falhas > 10 em 1 minuto' },
    ],
    endpointCategories: [
      {
        category: 'Veículos (/api/vehicles)',
        roles: 'Admin, FleetManager',
        endpoints: [
          { method: 'POST', route: '/api/vehicles', purpose: 'Cadastrar novo veículo na frota', success: '201 Created' },
          { method: 'POST', route: '/api/vehicles/{id}/activate', purpose: 'Ativar veículo inativo', success: '200 OK' },
          { method: 'POST', route: '/api/vehicles/{id}/deactivate', purpose: 'Desativar veículo ativo (desvincula condutor)', success: '200 OK' },
          { method: 'POST', route: '/api/vehicles/{id}/assign-driver', purpose: 'Designar condutor para o veículo', success: '200 OK' },
          { method: 'POST', route: '/api/vehicles/{id}/unassign-driver', purpose: 'Remover condutor do veículo', success: '200 OK' },
          { method: 'POST', route: '/api/vehicles/{id}/mileage', purpose: 'Atualizar odômetro (estritamente não-decrescente)', success: '200 OK' },
          { method: 'POST', route: '/api/vehicles/{id}/send-to-maintenance', purpose: 'Enviar veículo para manutenção', success: '200 OK' },
          { method: 'POST', route: '/api/vehicles/{id}/return-from-maintenance', purpose: 'Retornar veículo da manutenção para ativo', success: '200 OK' },
        ],
      },
      {
        category: 'Motoristas (/api/drivers)',
        roles: 'Admin, FleetManager',
        endpoints: [
          { method: 'POST', route: '/api/drivers', purpose: 'Registrar novo motorista (CNH única)', success: '201 Created' },
          { method: 'POST', route: '/api/drivers/{id}/activate', purpose: 'Ativar motorista', success: '200 OK' },
          { method: 'POST', route: '/api/drivers/{id}/deactivate', purpose: 'Desativar motorista', success: '200 OK' },
          { method: 'POST', route: '/api/drivers/{id}/suspend', purpose: 'Suspender motorista com justificativa auditável', success: '200 OK' },
        ],
      },
      {
        category: 'Entregas (/api/deliveries)',
        roles: 'Admin, FleetManager, Dispatcher',
        endpoints: [
          { method: 'POST', route: '/api/deliveries', purpose: 'Criar nova ordem de entrega com código de rastreio', success: '201 Created' },
          { method: 'POST', route: '/api/deliveries/{id}/assign', purpose: 'Vincular veículo e motorista à entrega', success: '200 OK' },
          { method: 'POST', route: '/api/deliveries/{id}/start', purpose: 'Iniciar transporte da entrega', success: '200 OK' },
          { method: 'POST', route: '/api/deliveries/{id}/complete', purpose: 'Registrar conclusão e entrega ao destinatário', success: '200 OK' },
          { method: 'POST', route: '/api/deliveries/{id}/cancel', purpose: 'Cancelar entrega com justificativa', success: '200 OK' },
        ],
      },
      {
        category: 'Rotas (/api/routes)',
        roles: 'Admin, FleetManager, Dispatcher',
        endpoints: [
          { method: 'POST', route: '/api/routes', purpose: 'Criar itinerário de rota', success: '201 Created' },
          { method: 'POST', route: '/api/routes/{id}/assign', purpose: 'Designar veículo e motorista para a rota', success: '200 OK' },
          { method: 'POST', route: '/api/routes/{id}/deliveries', purpose: 'Incluir entrega compatível na rota (uuid[])', success: '200 OK' },
          { method: 'DELETE', route: '/api/routes/{id}/deliveries/{deliveryId}', purpose: 'Remover entrega da rota', success: '200 OK' },
          { method: 'POST', route: '/api/routes/{id}/start', purpose: 'Iniciar trajeto da rota', success: '200 OK' },
          { method: 'POST', route: '/api/routes/{id}/complete', purpose: 'Concluir trajeto da rota', success: '200 OK' },
          { method: 'POST', route: '/api/routes/{id}/cancel', purpose: 'Cancelar rota com justificativa', success: '200 OK' },
        ],
      },
      {
        category: 'Manutenção (/api/maintenances)',
        roles: 'Admin, FleetManager',
        endpoints: [
          { method: 'POST', route: '/api/maintenances', purpose: 'Agendar manutenção para veículo (índice exclusivo)', success: '201 Created' },
          { method: 'POST', route: '/api/maintenances/{id}/start', purpose: 'Iniciar serviço mecânico', success: '200 OK' },
          { method: 'POST', route: '/api/maintenances/{id}/complete', purpose: 'Finalizar manutenção com registro de custos e disparo Outbox', success: '200 OK' },
          { method: 'POST', route: '/api/maintenances/{id}/cancel', purpose: 'Cancelar ordem de manutenção', success: '200 OK' },
        ],
      },
      {
        category: 'Saúde e Observabilidade',
        roles: '[AllowAnonymous]',
        endpoints: [
          { method: 'GET', route: '/health/live', purpose: 'Liveness Probe (processo ASP.NET Core ativo)', success: '200 OK' },
          { method: 'GET', route: '/health/ready', purpose: 'Readiness Probe (validação de conexão ativa PostgreSQL)', success: '200 OK / 503' },
          { method: 'GET', route: '/health/dependencies', purpose: 'Sonda diagnóstica (inspeção de PostgreSQL e RabbitMQ)', success: '200 OK / 503' },
          { method: 'GET', route: '/openapi/v1.json', purpose: 'Documento OpenAPI 3.1 da API', success: '200 OK' },
        ],
      },
    ],
    syntheticUsers: [
      { user: 'admin@fleetops.local', roles: 'Admin', scope: 'Acesso administrativo irrestrito em todos os recursos' },
      { user: 'manager@fleetops.local', roles: 'FleetManager', scope: 'Gestão de veículos, motoristas e manutenções' },
      { user: 'dispatcher@fleetops.local', roles: 'Dispatcher', scope: 'Gestão logística de entregas e rotas' },
      { user: 'driver@fleetops.local', roles: 'Driver', scope: 'Acesso operacional reservado para condutores' },
      { user: 'multirole@fleetops.local', roles: 'FleetManager, Dispatcher', scope: 'Múltiplas funções operacionais' },
      { user: 'norole@fleetops.local', roles: '(Nenhuma)', scope: 'Autenticado no Keycloak, sem permissão em recursos' },
    ],
  },
  'en': {
    modalTitle: 'FleetOps API — Architectural Study & Reference Project',
    modalEyebrow: 'DISTRIBUTED SYSTEMS ARCHITECTURE & REFERENCE PROJECT',
    modalSubtitle: 'Fleet & Logistics Backend Engine — Architectural Study & Reference Project (.NET 10)',
    githubUrl: 'https://github.com/DevYuriVieira/fleetops-api',
    closeBtn: 'Close',
    closeAria: 'Close FleetOps API case study modal',
    copyMarkdown: 'Copy Full Markdown',
    copiedMarkdown: '✓ Markdown Copied!',
    downloadMarkdown: 'Download Dossier (.md)',
    tabs: {
      overview: 'Summary & Architecture',
      outbox: 'Outbox & Concurrency',
      messaging: 'RabbitMQ & Resilience',
      security: 'OIDC Security & Tracing',
      benchmarks: '300 Tests & Benchmarks',
      readme: 'Complete Dossier (README)',
    },
    badges: [
      { label: 'C# 14', color: 'green' },
      { label: '.NET 10.0', color: 'purple' },
      { label: 'ASP.NET Core 10', color: 'purple' },
      { label: 'PostgreSQL 18', color: 'blue' },
      { label: 'EF Core 10', color: 'purple' },
      { label: 'RabbitMQ 3.x', color: 'amber' },
      { label: 'Docker Compose', color: 'blue' },
      { label: 'OpenTelemetry', color: 'green' },
      { label: 'Keycloak OIDC RS256', color: 'blue' },
      { label: '300 Tests Passing', color: 'green' },
      { label: 'Quality Gate Verified', color: 'green' },
    ],
    executiveSummary: [
      { area: 'Architecture', implementation: 'Clean Architecture + Domain-Driven Design (DDD) with strict layer isolation' },
      { area: 'Runtime & Framework', implementation: '.NET 10 (C# 14) / ASP.NET Core 10.0.11' },
      { area: 'Data Persistence', implementation: 'PostgreSQL 18 (PostgreSQL 18 Alpine in Docker)' },
      { area: 'ORM & Driver', implementation: 'Entity Framework Core 10.0.11 + Npgsql 10.0.3' },
      { area: 'Asynchronous Messaging', implementation: 'RabbitMQ 3.x with RabbitMQ.Client 7.2.2 (Async API)' },
      { area: 'Event Reliability', implementation: 'Transactional Outbox Pattern integrated into DbContext.SaveChangesAsync' },
      { area: 'Outbox Concurrency', implementation: 'FOR UPDATE SKIP LOCKED (Parallel workers select batches without lock waiting)' },
      { area: 'Distributed Tracing', implementation: 'OpenTelemetry .NET + Jaeger (End-to-end W3C traceparent context propagation)' },
      { area: 'Authentication & RBAC', implementation: 'OpenID Connect (OIDC) / OAuth 2.0 Resource Server via Keycloak (RS256 + JWKS) + RBAC' },
      { area: 'Delivery Semantics', implementation: 'Bounded At-least-once delivery (finite retries and Dead-Letter Queue)' },
      { area: 'Consumer Idempotency', implementation: 'Single business effect within audited transaction boundary (MessageId PK)' },
      { area: 'Resilience & Fault Tolerance', implementation: 'Dead-Letter Exchange (DLX), TTL-based Retry Queues (10s, 30s, 90s), and DLQ' },
      { area: 'Message Confirmations', implementation: 'Publisher Confirms enabled on Outbox Publisher and Consumer' },
      { area: 'Concurrency Control', implementation: 'PostgreSQL Unique Constraints + Optimistic Concurrency via xmin (xid)' },
      { area: 'Error Handling', implementation: 'RFC 9457 ProblemDetails sanitized with zero credential, SQL, or stack trace leaks' },
      { area: 'Runtime Protection', implementation: 'Rate Limiting Fixed Window (100 req/60s, QueueLimit 0) with RFC 9457 (HTTP 429)' },
      { area: 'Metrics & Observability', implementation: 'System.Diagnostics.Metrics (fleetops.http.*, outbox.*, consumer.*) with bounded cardinality' },
      { area: 'Automated Testing', implementation: '300 automated tests (166 unit tests + 134 integration and resilience tests)' },
      { area: 'Containerization', implementation: 'Multi-stage Dockerfile running as non-root ($APP_UID) + Docker Compose' },
      { area: 'API Contract & Health', implementation: 'OpenAPI 3.1 (/openapi/v1.json), Liveness (/health/live), Readiness (/health/ready), Dependencies' },
      { area: 'Engineering Tools', implementation: '100% offline local semantic code search in Python (LanceDB + SentenceTransformers)' },
      { area: 'Load Testing & Automation', implementation: 'k6 in JavaScript (ES6 auth-helper.js with Keycloak OIDC Password Grant) + runner' },
    ],
    domainContexts: [
      {
        name: 'Vehicles (Vehicle)',
        title: 'Fleet Operational Asset Management',
        invariants: [
          'Strict plate format validation (LicensePlate), year, model, and payload capacity in kg',
          'Single source of truth for driver: aggregate owns CurrentDriverId (emits assignment/unassignment events)',
          'Monotonically non-decreasing odometer updates (Mileage)',
          'Operational transitions to maintenance (SendToMaintenance) and return',
        ],
      },
      {
        name: 'Drivers (Driver)',
        title: 'Operators and Verified Drivers',
        invariants: [
          'PostgreSQL physical unique index on driver license (LicenseNumber)',
          'Corporate email and telephone format validation',
          'Lifecycle states: Active, Inactive, and Suspended (with recorded reason)',
          'Complete aggregate decoupling: Driver holds no reference to Vehicle',
        ],
      },
      {
        name: 'Deliveries (Delivery)',
        title: 'Shipments and Cargo Tracking',
        invariants: [
          'Creation with unique tracking code (TrackingCode) and origin/destination addresses',
          'Simultaneous vehicle and driver assignment with capacity verification (WeightKg <= CapacityKg)',
          'Lifecycle states: Pending → Assigned → InTransit → Delivered or Cancelled (with reason)',
        ],
      },
      {
        name: 'Routes (Route)',
        title: 'Route Dispatch and Planning',
        invariants: [
          'Strict chronological validation: PlannedDeparture before EstimatedArrival',
          'Association and disassociation of eligible shipments via native uuid[] array',
          'Route dispatch requires assigned vehicle, driver, and at least one linked delivery',
          'Completion with actual arrival timestamp and audited cancellation',
        ],
      },
      {
        name: 'Maintenance (Maintenance)',
        title: 'Mechanical Service Orders & Costs',
        invariants: [
          'OS scheduling (Preventive, Corrective) with partial unique index for max 1 active OS per vehicle',
          'Service commencement timestamp and completion recording monetary repair expenses (Money)',
          'Vehicle reactivation prohibited while active maintenance order is in progress',
        ],
      },
    ],
    failureScenarios: [
      { scenario: 'PostgreSQL down on API request', behavior: 'Fails safely; /health/ready returns HTTP 503; zero connection string leaks.', guarantee: 'Fail-fast, no data corruption' },
      { scenario: 'RabbitMQ down on domain mutation', behavior: 'State and Outbox message commit normally within PostgreSQL.', guarantee: 'Core API uninterrupted' },
      { scenario: 'Outbox publisher failure', behavior: 'OutboxProcessor logs error, increments attempt counter, and retries on next poll.', guarantee: 'At-least-once outbox delivery' },
      { scenario: 'Database down during consumption', behavior: 'Message routed through 10s → 30s → 90s retry schedule.', guarantee: 'Resilience to transient outages' },
      { scenario: 'Duplicate message delivery', behavior: 'Consumer detects existing MessageId and ACKs without re-executing logic.', guarantee: 'Idempotent processing' },
      { scenario: 'Malformed JSON (Poison Message)', behavior: 'Immediately routed to DLQ with reason header; primary queue unblocked.', guarantee: 'Poison message isolation' },
      { scenario: 'Crash after consumer commit before ACK', behavior: 'Redelivered message is skipped idempotently via MessageId and ACKed.', guarantee: 'Post-crash consistency' },
      { scenario: 'Concurrent vehicle updates', behavior: 'PostgreSQL detects xmin mismatch; EF Core throws concurrency exception; HTTP 409.', guarantee: 'Lost-update prevention' },
      { scenario: 'Duplicate license plate or driver license', behavior: 'Unique constraint (uq_...) blocks mutation; mapped to HTTP 409 ProblemDetails.', guarantee: 'Strict relational integrity' },
    ],
    benchmarks: [
      { workload: 'RateLimit Burst', concurrency: '10 VUs (10s)', requests: '7,716 reqs', throughput: '759.38 req/s', p50: '1.08 ms', p90: '2.46 ms', p95: '3.32 ms', max: '515.45 ms', errors: '98.70% (HTTP 429)', persistence: '100 vehicles', verdict: 'PASS (RFC 9457 / RFC 6585)' },
      { workload: 'Domain Baseline', concurrency: '5 VUs (30s)', requests: '2,596 reqs', throughput: '86.27 req/s', p50: '5.63 ms', p90: '9.88 ms', p95: '11.81 ms', max: '369.81 ms', errors: '0.00%', persistence: '2,595 vehicles', verdict: 'PASS (Stable Capacity)' },
      { workload: 'Domain Sustained', concurrency: '15 VUs (45s)', requests: '12,526 reqs', throughput: '277.83 req/s', p50: '3.88 ms', p90: '43.73 ms', p95: '72.16 ms', max: '200.29 ms', errors: '0.00%', persistence: '12,525 vehicles', verdict: 'PASS (Sustainable Throughput)' },
      { workload: 'Domain Spike', concurrency: '5 → 35 → 5 VUs', requests: '3,072 reqs', throughput: '153.16 req/s', p50: '10.12 ms', p90: '260.59 ms', p95: '357.84 ms', max: '1.13 s', errors: '0.00%', persistence: '3,071 vehicles', verdict: 'PASS (Clean Recovery)' },
      { workload: 'Domain Stress', concurrency: '5 → 70 VUs (50s)', requests: '9,921 reqs', throughput: '198.31 req/s', p50: '75.36 ms', p90: '348.10 ms', p95: '392.93 ms', max: '801.66 ms', errors: '0.00%', persistence: '9,920 vehicles', verdict: 'PASS (Observed Saturation)' },
    ],
    adrs: [
      { code: 'ADR-001', title: 'Transactional Outbox Pattern for Reliable Event Publishing', status: 'Accepted', focus: 'Dual-write hazard mitigation via PostgreSQL ACID transaction boundary' },
      { code: 'ADR-002', title: 'PostgreSQL Concurrency Control via SKIP LOCKED and xmin', status: 'Accepted', focus: 'Contention-free concurrent worker polling and optimistic row versioning' },
      { code: 'ADR-003', title: 'Direct RabbitMQ.Client Driver Over Heavy Messaging Abstractions', status: 'Accepted', focus: 'Low-level control over Publisher Confirms, ACK ordering, and native topology' },
      { code: 'ADR-004', title: 'PostgreSQL as Sole Persistence and Coordination Engine', status: 'Accepted', focus: 'Dual-source hazard prevention leveraging ACID relational guarantees' },
      { code: 'ADR-005', title: 'End-to-End W3C Trace Context Propagation Across Async Boundaries', status: 'Accepted', focus: 'Continuous distributed tracing HTTP → Outbox → RabbitMQ → Consumer' },
      { code: 'ADR-006', title: 'Bounded At-Least-Once Delivery Semantics', status: 'Accepted', focus: 'Explicit bounded delivery semantics with finite retries, DLQ, and deduplication' },
      { code: 'ADR-007', title: 'Consumer Idempotency and Single Business Effect Boundary', status: 'Accepted', focus: 'Primary-key deduplication within the audited business transaction boundary' },
      { code: 'ADR-008', title: 'Self-Contained JWT Bearer Authentication', status: 'Superseded by ADR-016', focus: 'Superseded by OIDC/Keycloak for Resource Server boundary isolation' },
      { code: 'ADR-009', title: 'Application-Level Rate Limiting Strategy and Gateway Offloading', status: 'Accepted', focus: 'Strict demarcation between in-memory local limits and edge/gateway control' },
      { code: 'ADR-010', title: 'In-Process Fixed Window Rate Limiting with Boundary Demarcation', status: 'Accepted', focus: 'Node-level resource defense with RFC 9457 429 and Retry-After header' },
      { code: 'ADR-011', title: 'Health Check Probing Semantics: Live, Ready, and Degraded Dependencies', status: 'Accepted', focus: 'Decoupled liveness, readiness, and degraded multi-dependency diagnostics' },
      { code: 'ADR-012', title: 'Operational Metrics and Telemetry Cardinality Discipline', status: 'Accepted', focus: 'System.Diagnostics.Metrics with bounded dimensions for Outbox and Consumer' },
      { code: 'ADR-013', title: 'Empirical Performance Baseline via k6', status: 'Accepted', focus: 'Automated reproducible load, sustained, and spike profiles' },
      { code: 'ADR-014', title: 'Service Level Objectives (SLOs) and Error Budget Framework', status: 'Accepted', focus: 'Mathematically grounded SLIs/SLOs covering latency and availability' },
      { code: 'ADR-015', title: 'Capacity Engineering, Domain-Level Workloads, and Performance Boundary', status: 'Accepted', focus: 'Relational domain transaction capacity boundaries and saturation engineering' },
      { code: 'ADR-016', title: 'OpenID Connect / OAuth 2.0 Resource Server with Keycloak & RS256', status: 'Accepted', focus: 'Migration to OIDC, asymmetric RS256 validation, dynamic JWKS discovery' },
    ],
    runbooks: [
      { name: 'PostgreSQL Outage', trigger: 'Readiness /health/ready returns 503; connection refused or pool exhausted', mitigation: 'Verify storage/WAL, check connection pool, fail over to standby' },
      { name: 'RabbitMQ Outage', trigger: 'Diagnostic /health/dependencies reports Degraded; outbox backlog growth', mitigation: 'System gracefully persists commands; restart broker; outbox drains automatically' },
      { name: 'Outbox Backlog Accumulation', trigger: 'Metric fleetops.outbox.backlog.count > 500 unprocessed records', mitigation: 'Inspect broker network, adjust worker batch size or horizontal worker replicas' },
      { name: 'Consumer Redeliveries & DLQ', trigger: 'Metric fleetops.consumer.messages.failed; DLQ depth > 0', mitigation: 'Inspect poison message payload, verify downstream schema, replay or purge' },
    ],
    slos: [
      { service: 'API Synchronous Writes', sli: 'Successful HTTP responses (2xx or 4xx vs 5xx)', target: '≥ 99.9% Availability', budget: '0.10% (43.2 min downtime)', burnAlert: '2% in 1h; 5% in 6h' },
      { service: 'API Synchronous Latency', sli: 'P95 response duration on /api/*', target: '≤ 250 ms (P95)', budget: '5% tail samples exceeding 250 ms', burnAlert: '10% in 15-min window' },
      { service: 'Outbox Relay Latency', sli: 'Time between occurred_on_utc and broker ACK', target: '≤ 5.0 s (P95)', budget: '5% events delayed beyond 5s', burnAlert: 'Backlog > 500 msgs for > 2 min' },
      { service: 'Consumer Processing Latency', sli: 'Time from consumer dispatch to commit and ACK', target: '≤ 100 ms (P95)', budget: '5% messages delayed beyond 100 ms', burnAlert: 'Failures > 10 in 1 minute' },
    ],
    endpointCategories: [
      {
        category: 'Vehicles (/api/vehicles)',
        roles: 'Admin, FleetManager',
        endpoints: [
          { method: 'POST', route: '/api/vehicles', purpose: 'Register vehicle asset in fleet', success: '201 Created' },
          { method: 'POST', route: '/api/vehicles/{id}/activate', purpose: 'Activate inactive vehicle', success: '200 OK' },
          { method: 'POST', route: '/api/vehicles/{id}/deactivate', purpose: 'Deactivate vehicle (unassigns driver)', success: '200 OK' },
          { method: 'POST', route: '/api/vehicles/{id}/assign-driver', purpose: 'Assign driver to vehicle', success: '200 OK' },
          { method: 'POST', route: '/api/vehicles/{id}/unassign-driver', purpose: 'Remove driver from vehicle', success: '200 OK' },
          { method: 'POST', route: '/api/vehicles/{id}/mileage', purpose: 'Update odometer reading (monotonically non-decreasing)', success: '200 OK' },
          { method: 'POST', route: '/api/vehicles/{id}/send-to-maintenance', purpose: 'Transition vehicle to maintenance', success: '200 OK' },
          { method: 'POST', route: '/api/vehicles/{id}/return-from-maintenance', purpose: 'Return vehicle to active status', success: '200 OK' },
        ],
      },
      {
        category: 'Drivers (/api/drivers)',
        roles: 'Admin, FleetManager',
        endpoints: [
          { method: 'POST', route: '/api/drivers', purpose: 'Register driver with unique license', success: '201 Created' },
          { method: 'POST', route: '/api/drivers/{id}/activate', purpose: 'Activate driver', success: '200 OK' },
          { method: 'POST', route: '/api/drivers/{id}/deactivate', purpose: 'Deactivate driver', success: '200 OK' },
          { method: 'POST', route: '/api/drivers/{id}/suspend', purpose: 'Suspend driver with mandatory reason', success: '200 OK' },
        ],
      },
      {
        category: 'Deliveries (/api/deliveries)',
        roles: 'Admin, FleetManager, Dispatcher',
        endpoints: [
          { method: 'POST', route: '/api/deliveries', purpose: 'Create delivery order with tracking code', success: '201 Created' },
          { method: 'POST', route: '/api/deliveries/{id}/assign', purpose: 'Assign vehicle and driver to delivery', success: '200 OK' },
          { method: 'POST', route: '/api/deliveries/{id}/start', purpose: 'Mark delivery in transit', success: '200 OK' },
          { method: 'POST', route: '/api/deliveries/{id}/complete', purpose: 'Mark delivery delivered', success: '200 OK' },
          { method: 'POST', route: '/api/deliveries/{id}/cancel', purpose: 'Cancel delivery with reason', success: '200 OK' },
        ],
      },
      {
        category: 'Routes (/api/routes)',
        roles: 'Admin, FleetManager, Dispatcher',
        endpoints: [
          { method: 'POST', route: '/api/routes', purpose: 'Plan route itinerary', success: '201 Created' },
          { method: 'POST', route: '/api/routes/{id}/assign', purpose: 'Assign vehicle and driver to route', success: '200 OK' },
          { method: 'POST', route: '/api/routes/{id}/deliveries', purpose: 'Add eligible delivery to route (uuid[])', success: '200 OK' },
          { method: 'DELETE', route: '/api/routes/{id}/deliveries/{deliveryId}', purpose: 'Remove delivery from route', success: '200 OK' },
          { method: 'POST', route: '/api/routes/{id}/start', purpose: 'Start route transit', success: '200 OK' },
          { method: 'POST', route: '/api/routes/{id}/complete', purpose: 'Complete route itinerary', success: '200 OK' },
          { method: 'POST', route: '/api/routes/{id}/cancel', purpose: 'Cancel route with reason', success: '200 OK' },
        ],
      },
      {
        category: 'Maintenance (/api/maintenances)',
        roles: 'Admin, FleetManager',
        endpoints: [
          { method: 'POST', route: '/api/maintenances', purpose: 'Schedule vehicle maintenance (partial unique index)', success: '201 Created' },
          { method: 'POST', route: '/api/maintenances/{id}/start', purpose: 'Start maintenance service', success: '200 OK' },
          { method: 'POST', route: '/api/maintenances/{id}/complete', purpose: 'Complete maintenance with expenses and Outbox dispatch', success: '200 OK' },
          { method: 'POST', route: '/api/maintenances/{id}/cancel', purpose: 'Cancel maintenance order', success: '200 OK' },
        ],
      },
      {
        category: 'Health and Specification',
        roles: '[AllowAnonymous]',
        endpoints: [
          { method: 'GET', route: '/health/live', purpose: 'Liveness probe (process responsive)', success: '200 OK' },
          { method: 'GET', route: '/health/ready', purpose: 'Readiness probe (verifies database connection)', success: '200 OK / 503' },
          { method: 'GET', route: '/health/dependencies', purpose: 'Diagnostic probe (detailed status of PostgreSQL and RabbitMQ)', success: '200 OK / 503' },
          { method: 'GET', route: '/openapi/v1.json', purpose: 'OpenAPI 3.1 specification document', success: '200 OK' },
        ],
      },
    ],
    syntheticUsers: [
      { user: 'admin@fleetops.local', roles: 'Admin', scope: 'Full administrative access across all API resources' },
      { user: 'manager@fleetops.local', roles: 'FleetManager', scope: 'Vehicles, drivers, and maintenance management' },
      { user: 'dispatcher@fleetops.local', roles: 'Dispatcher', scope: 'Deliveries and routes dispatch management' },
      { user: 'driver@fleetops.local', roles: 'Driver', scope: 'Driver operational view' },
      { user: 'multirole@fleetops.local', roles: 'FleetManager, Dispatcher', scope: 'Multi-role fleet and logistics operations' },
      { user: 'norole@fleetops.local', roles: '(None)', scope: 'Authenticated in Keycloak, no resource access' },
    ],
  },
};
