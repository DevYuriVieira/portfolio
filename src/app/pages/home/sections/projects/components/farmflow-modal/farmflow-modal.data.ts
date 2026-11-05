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

export interface FarmFlowModalI18n {
  readonly modalTitle: string;
  readonly modalEyebrow: string;
  readonly modalSubtitle: string;
  readonly mobileGithubUrl: string;
  readonly backendGithubUrl: string;
  readonly closeBtn: string;
  readonly closeAria: string;
  readonly copyMarkdown: string;
  readonly copiedMarkdown: string;
  readonly downloadMarkdown: string;
  readonly tabs: {
    readonly overview: string;
    readonly offline: string;
    readonly messaging: string;
    readonly regulatory: string;
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

export const FARMFLOW_MODAL_DATA: Record<'pt-BR' | 'en', FarmFlowModalI18n> = {
  'pt-BR': {
    modalTitle: 'FarmFlow — Dossiê de Engenharia & Arquitetura Distribuída',
    modalEyebrow: 'ESTUDO ARQUITETURAL & ENGENHARIA FULL-STACK DISTRIBUÍDA',
    modalSubtitle:
      'Plataforma de Precisão Agrícola & Operações Críticas de Campo: Mobile Offline-First (React Native, Expo 54) & Backend Distribuído de Alta Concorrência (Java 21, Virtual Threads, RabbitMQ, PostgreSQL 17)',
    mobileGithubUrl: 'https://github.com/DevYuriVieira/farmflow-mobile',
    backendGithubUrl: 'https://github.com/DevYuriVieira/farmflow-backend',
    closeBtn: 'Fechar',
    closeAria: 'Fechar modal do estudo de caso FarmFlow',
    copyMarkdown: 'Copiar Markdown Completo',
    copiedMarkdown: '✓ Markdown Copiado!',
    downloadMarkdown: 'Baixar Dossiê (.md)',
    tabs: {
      overview: 'Resumo & Arquitetura',
      offline: 'Offline-First & Mobile Sync',
      messaging: 'RabbitMQ & Telemetria IoT',
      regulatory: 'Conformidade MAPA & SHA-256',
      benchmarks: '549 Testes & k6 Benchmarks',
      readme: 'Dossiê Completo (README)',
    },
    badges: [
      { label: 'Java 21 LTS', color: 'amber' },
      { label: 'Spring Boot 4.1', color: 'green' },
      { label: 'Virtual Threads', color: 'purple' },
      { label: 'React Native (Expo 54)', color: 'blue' },
      { label: 'PostgreSQL 17 BRIN', color: 'blue' },
      { label: 'RabbitMQ CloudEvents', color: 'amber' },
      { label: 'Keycloak 26.1 OIDC', color: 'purple' },
      { label: 'MAPA SHA-256 Audit', color: 'green' },
      { label: '549 TESTES PASSANDO', color: 'green' },
    ],
    executiveSummary: [
      {
        area: 'Arquitetura Geral',
        implementation:
          'Hexagonal / Clean Architecture no Backend Java e Arquitetura Unidirecional Offline-First no Mobile React Native',
      },
      {
        area: 'Runtime Backend',
        implementation:
          'Java 21 LTS com Virtual Threads nativas no Spring Boot 4.1.1, eliminando bloqueio de threads de SO',
      },
      {
        area: 'Runtime Mobile',
        implementation:
          'React Native (Expo SDK 54, React 19) com persistência local em AsyncStorage e reconciliação determinística',
      },
      {
        area: 'Camada de Persistência',
        implementation:
          'PostgreSQL 17 com Particionamento Temporal Declarativo por safra/mês e índices BRIN para séries temporais de IoT',
      },
      {
        area: 'Confiabilidade de Eventos',
        implementation:
          'Transactional Outbox Pattern com polling atômico via FOR UPDATE SKIP LOCKED na mesma transação de negócio',
      },
      {
        area: 'Mensageria Assíncrona',
        implementation:
          'RabbitMQ 3.x com especificação CloudEvents v1.0, Dead-Letter Exchange (DLX), TTL retries e Dead-Letter Queue (DLQ)',
      },
      {
        area: 'Sincronização Offline',
        implementation:
          'Fila FIFO transacional no cliente mobile com tratamento de conflitos Last-Write-Wins ponderado e idempotência por Idempotency-Key',
      },
      {
        area: 'Regulatório & Auditoria',
        implementation:
          'Módulo de conformidade MAPA com geração de caderno de aplicação de defensivos e assinatura digital canvas com hash SHA-256 inviolável',
      },
      {
        area: 'Telemetria IoT em Tempo Real',
        implementation:
          'Ingestão contínua de telemetria de pivôs centrais (pressão, vazão, ângulo) e silos graneleiros (temperatura, umidade relativa) com detecção de anomalias',
      },
      {
        area: 'Autenticação & Autorização',
        implementation:
          'Keycloak 26.1 OIDC com tokens JWT assimétricos (RS256), biometria mobile (LocalAuthentication) e mitigação de enumeração IDOR (HTTP 404 fail-closed)',
      },
      {
        area: 'Isolamento Multi-Tenant',
        implementation:
          'Row-Level Security (RLS) nativo do PostgreSQL com política fail-closed validando tenant_id injetado na sessão do banco',
      },
      {
        area: 'Sagas Distribuídas',
        implementation:
          'Orquestração de operações críticas agrícolas (despacho de insumos, alocação de maquinário) via locks consultivos pg_try_advisory_xact_lock',
      },
      {
        area: 'Observabilidade & Tracing',
        implementation:
          'OpenTelemetry com propagação contínua de contexto W3C traceparent através da fronteira Mobile → Gateway → Backend → RabbitMQ → Consumer',
      },
      {
        area: 'Capacidade de Carga (k6)',
        implementation:
          '2.450 req/s sustentadas em testes de estresse k6 com latência P95 < 42 ms e zero erros 5xx graças às Virtual Threads nativas do Java 21',
      },
      {
        area: 'Cobertura de Testes',
        implementation:
          '549+ testes automatizados (411 testes no Backend Java com Testcontainers e 100 Virtual Threads concorrentes + 138 testes no Mobile em 26 suítes Jest)',
      },
    ],
    domainContexts: [
      {
        name: 'Lavouras & Parcelas (FarmPlot)',
        title: 'Gestão Territorial, Zoneamento Agrícola e Safras',
        invariants: [
          'Cadastro georreferenciado com polígonos GeoJSON e validação estrita de sobreposição territorial',
          'Histórico de rotação de culturas por safra com controle de carência e fitossanidade',
          'Cálculo automático de área útil versus área de preservação permanente (APP)',
          'Isolamento multi-tenant estrito com RLS por cooperativa/propriedade',
        ],
      },
      {
        name: 'Caderno de Defensivos (PesticideApplication)',
        title: 'Módulo Regulatório e Conformidade com Auditoria do MAPA',
        invariants: [
          'Obrigatoriedade de vínculo com Receituário Agronômico emitido por Responsável Técnico habilitado',
          'Assinatura digital capturada em Canvas mobile com cálculo de hash criptográfico SHA-256 e timestamp UTC imutável',
          'Validação estrita de dose por hectare (DosagePerHectare) conforme bula oficial registrada no MAPA',
          'Bloqueio de colheita enquanto o período de carência do defensivo (WithdrawalPeriodDays) não for cumprido',
        ],
      },
      {
        name: 'Pivôs & Irrigação IoT (IrrigationPivot)',
        title: 'Telemetria, Pressão Hidráulica e Eficiência Hídrica',
        invariants: [
          'Ingestão contínua de telemetria IoT (pressão da motobomba, ângulo do pivô de 0° a 360°, lâmina d’água em mm)',
          'Detecção imediata de anomalia de pressão (queda súbita indicando rompimento ou pico indicando entupimento)',
          'Particionamento temporal mensal no PostgreSQL 17 para retenção de alto volume de séries temporais',
          'Despacho de comandos de parada de emergência via RabbitMQ em menos de 150 ms',
        ],
      },
      {
        name: 'Silos Graneleiros (GrainSilo)',
        title: 'Monitoramento Termométrico, Umidade e Conservação de Grãos',
        invariants: [
          'Matriz termométrica 3D com sensores a cada 2 metros de profundidade da massa de grãos',
          'Disparo automático de aeração preventiva ao detectar gradiente térmico delta > 2.5°C (indicativo de foco de calor / fermentação)',
          'Rastreabilidade total do lote armazenado vinculado à parcela de colheita de origem',
        ],
      },
      {
        name: 'Fila de Mutação Mobile (OfflineSyncQueue)',
        title: 'Consistência Transacional em Áreas Rurais sem Conectividade',
        invariants: [
          'Persistência FIFO em AsyncStorage local antes de qualquer tentativa de transmissão para a API',
          'Associação de Idempotency-Key UUIDv4 gerada no mobile para prevenir execução duplicada no backend',
          'Reconciliação determinística ao detectar retomada de rede celular ou Wi-Fi via NetInfo',
          'Resolução de conflitos baseada em carimbo de tempo auditado e regras de prioridade regulatória',
        ],
      },
    ],
    failureScenarios: [
      {
        scenario: 'Sem Conectividade Celular no Campo',
        behavior:
          'O app React Native armazena todas as aplicações, assinaturas e medições na fila FIFO local; a interface atualiza com otimismo indicando status pendente.',
        guarantee: 'Zero perda de dados em operações offline',
      },
      {
        scenario: 'Falha Temporária da API durante o Sync',
        behavior:
          'O cliente mobile aplica backoff exponencial com jitter (1s, 2s, 5s, 15s) mantendo os registros bloqueados localmente até o ACK do backend.',
        guarantee: 'Entrega garantida sem duplicação',
      },
      {
        scenario: 'PostgreSQL indisponível no Backend',
        behavior:
          'A API responde HTTP 503 com RFC 9457 ProblemDetails; o Circuit Breaker abre e a fila de telemetria segura os dados no RabbitMQ.',
        guarantee: 'Proteção contra corrupção e fail-safe',
      },
      {
        scenario: 'Queda do RabbitMQ durante Ingestão',
        behavior:
          'O Transactional Outbox Pattern grava os eventos de domínio na mesma transação ACID do PostgreSQL; o Dispatcher reenvia após a recuperação do broker.',
        guarantee: 'At-least-once delivery sem dual-write',
      },
      {
        scenario: 'Assinatura MAPA com Hash Divergente',
        behavior:
          'O backend recalcula o hash SHA-256 do payload vetorial recebido do Canvas; se divergir do hash declarado, a aplicação é rejeitada com HTTP 422.',
        guarantee: 'Inviolabilidade forense de auditoria',
      },
      {
        scenario: 'Concorrência em Alocação de Maquinário',
        behavior:
          'Tentativas simultâneas de despachar o mesmo trator/pulverizador são coordenadas por lock consultivo pg_try_advisory_xact_lock; o segundo recebe HTTP 409.',
        guarantee: 'Prevenção absoluta de double-booking',
      },
      {
        scenario: 'Tentativa de Acesso a Dados de Outra Fazenda',
        behavior:
          'A política RLS do PostgreSQL filtra por tenant_id validado via JWT; tentativas de IDOR retornam HTTP 404 sem revelar a existência do registro.',
        guarantee: 'Isolamento estrito multi-tenant (fail-closed)',
      },
      {
        scenario: 'Pico de Telemetria de Pivôs (Rajada IoT)',
        behavior:
          'Virtual Threads no Java 21 processam milhares de conexões I/O concorrentes sem estourar o pool de threads do SO, mantendo latência P95 < 45ms.',
        guarantee: 'Alta densidade de I/O sustentada',
      },
    ],
    benchmarks: [
      {
        workload: 'Virtual Threads vs Platform Threads',
        concurrency: '500 VUs',
        requests: '147.200 reqs',
        throughput: '2.453 req/s',
        p50: '8.12 ms',
        p90: '24.30 ms',
        p95: '41.80 ms',
        max: '182.10 ms',
        errors: '0.00%',
        persistence: '2.450 ops/s no Postgres',
        verdict: 'PASS (Virtual Threads)',
      },
      {
        workload: 'Mobile Offline Sync Burst',
        concurrency: '50 VUs em Lotes',
        requests: '18.500 mutações',
        throughput: '618.20 req/s',
        p50: '12.40 ms',
        p90: '38.10 ms',
        p95: '52.70 ms',
        max: '240.50 ms',
        errors: '0.00%',
        persistence: '18.500 aplicações',
        verdict: 'PASS (Fila FIFO Reconciliada)',
      },
      {
        workload: 'Telemetria IoT Pivôs & Silos',
        concurrency: '100 VUs Contínuas',
        requests: '89.400 telemetrias',
        throughput: '1.490 req/s',
        p50: '4.80 ms',
        p90: '14.20 ms',
        p95: '21.50 ms',
        max: '98.30 ms',
        errors: '0.00%',
        persistence: 'Partições Temporais BRIN',
        verdict: 'PASS (Ingestão Contínua)',
      },
      {
        workload: 'Validação Hash MAPA SHA-256',
        concurrency: '25 VUs',
        requests: '6.250 assinaturas',
        throughput: '312.50 req/s',
        p50: '15.60 ms',
        p90: '32.10 ms',
        p95: '44.80 ms',
        max: '135.20 ms',
        errors: '0.00%',
        persistence: '6.250 cadernos selados',
        verdict: 'PASS (Criptografia Inviolável)',
      },
      {
        workload: 'Tenant Isolation Stress (RLS)',
        concurrency: '80 VUs Multi-Tenant',
        requests: '42.000 consultas',
        throughput: '1.050 req/s',
        p50: '6.20 ms',
        p90: '18.90 ms',
        p95: '28.40 ms',
        max: '112.00 ms',
        errors: '0.00%',
        persistence: 'Zero vazamento cruzado',
        verdict: 'PASS (Isolamento Garantido)',
      },
    ],
    adrs: [
      {
        code: 'ADR-001',
        title: 'Offline-First FIFO Queue Architecture with Local AsyncStorage',
        status: 'Accepted',
        focus: 'Resiliência total a operações de campo em áreas remotas sem sinal celular',
      },
      {
        code: 'ADR-002',
        title: 'Java 21 LTS Virtual Threads for High-Density I/O',
        status: 'Accepted',
        focus: 'Eliminação do overhead de platform threads de SO e sustentação de 2.450 req/s',
      },
      {
        code: 'ADR-003',
        title: 'PostgreSQL 17 Declarative Temporal Partitioning & BRIN Indexes',
        status: 'Accepted',
        focus: 'Particionamento por safra/mês com retenção eficiente de telemetria IoT massiva',
      },
      {
        code: 'ADR-004',
        title: 'Transactional Outbox Pattern with FOR UPDATE SKIP LOCKED Polling',
        status: 'Accepted',
        focus: 'Prevenção de dual-write hazard garantindo publicação at-least-once no RabbitMQ',
      },
      {
        code: 'ADR-005',
        title: 'MAPA Regulatory Digital Signature with SHA-256 Canvas Vector Hashing',
        status: 'Accepted',
        focus: 'Conformidade legal estrita para auditoria de defensivos agrícolas com hash imutável',
      },
      {
        code: 'ADR-006',
        title: 'Transactional Advisory Locks (pg_try_advisory_xact_lock) for Farm Sagas',
        status: 'Accepted',
        focus: 'Coordenação de concorrência sem deadlocks em alocação de maquinário agrícola',
      },
      {
        code: 'ADR-007',
        title: 'Row-Level Security (RLS) Fail-Closed Multi-Tenant Separation',
        status: 'Accepted',
        focus: 'Isolamento rigoroso de dados entre cooperativas e fazendas no nível do banco',
      },
      {
        code: 'ADR-008',
        title: 'CloudEvents v1.0 Specification over RabbitMQ Topic Exchanges',
        status: 'Accepted',
        focus: 'Padronização internacional de eventos de domínio e telemetria agroindustrial',
      },
      {
        code: 'ADR-009',
        title: 'W3C Distributed Trace Context Propagation across Mobile and Backend',
        status: 'Accepted',
        focus: 'Rastreabilidade de ponta a ponta desde o toque mobile até o processamento no broker',
      },
      {
        code: 'ADR-010',
        title: 'Dead-Letter Exchange (DLX) with Progressive Exponential Retries',
        status: 'Accepted',
        focus: 'Resiliência contra falhas transitórias com quarentena em Dead-Letter Queue',
      },
      {
        code: 'ADR-011',
        title: 'IDOR Enumeration Defense via Universal HTTP 404 Fail-Closed Responses',
        status: 'Accepted',
        focus: 'Prevenção de reconhecimento de recursos por agentes maliciosos externos',
      },
      {
        code: 'ADR-012',
        title: 'Local Biometric Authentication for Mobile Field Operators',
        status: 'Accepted',
        focus: 'Segurança operacional no campo com FaceID/Biometria e fallback criptografado',
      },
      {
        code: 'ADR-013',
        title: 'Empirical k6 Load Testing in Virtual Thread Concurrency Scenarios',
        status: 'Accepted',
        focus: 'Validação empírica de capacidade sustentada antes de cada release em produção',
      },
      {
        code: 'ADR-014',
        title: 'Decoupled Silo Thermometry Alert Engine with Delta Anomaly Probing',
        status: 'Accepted',
        focus: 'Disparo de aeração automatizada ao detectar gradiente térmico delta > 2.5°C',
      },
    ],
    runbooks: [
      {
        name: 'Gargalo na Fila de Sincronização Mobile',
        trigger: 'Métrica farmflow.sync.backlog > 1.000 lotes pendentes',
        mitigation:
          'Verificar se há falhas em cascata no gateway, inspecionar taxa de conflitos de versão e escalar workers de reconciliação',
      },
      {
        name: 'Alerta Crítico de Temperatura em Silo',
        trigger: 'Sensor termométrico reporta delta > 3.0°C ou temperatura absoluta > 38°C',
        mitigation:
          'Disparar aeração forçada via RabbitMQ, notificar operador responsável no WhatsApp/Push e registrar ocorrência no livro de safra',
      },
      {
        name: 'Divergência de Assinatura no Caderno MAPA',
        trigger: 'Falha na validação SHA-256 do caderno de aplicação recebido',
        mitigation:
          'Isolar payload na tabela de auditoria suspeita, notificar o Responsável Técnico e solicitar reassinatura com biometria no app',
      },
      {
        name: 'Interrupção na Partição Temporal do PostgreSQL',
        trigger: 'Tentativa de inserção em partição não-provisionada para a nova safra',
        mitigation:
          'Executar script DDL automatizado de provisionamento da partição mensal e ajustar job agendado de pré-criação',
      },
    ],
    slos: [
      {
        service: 'Sincronização de Dados de Campo',
        sli: 'Taxa de mutações mobile reconciliadas com sucesso sem rejeição 5xx',
        target: '≥ 99.95% Sucesso',
        budget: '0.05% de erro admissível',
        burnAlert: '1% em 30 min',
      },
      {
        service: 'Latência da API de Ingestão IoT',
        sli: 'Tempo de resposta P95 dos endpoints de telemetria de pivôs e silos',
        target: '≤ 50 ms (P95)',
        budget: '5% de amostras excedendo 50 ms',
        burnAlert: '10% em janela de 10 min',
      },
      {
        service: 'Validação do Caderno MAPA',
        sli: 'Geração do PDF auditado com selo criptográfico e hash SHA-256',
        target: '≤ 350 ms (P95)',
        budget: '3% de amostras excedendo 350 ms',
        burnAlert: '5% em janela de 1 hora',
      },
      {
        service: 'Disponibilidade Geral do Backend',
        sli: 'Respostas HTTP 2xx/4xx versus 5xx no endpoint de saúde /actuator/health',
        target: '≥ 99.9% Uptime',
        budget: '0.10% (43 min/mês)',
        burnAlert: '2% em 1 hora',
      },
    ],
    endpointCategories: [
      {
        category: 'Mobile Field Operations (Offline Sync)',
        roles: 'ROLE_FIELD_OPERATOR, ROLE_AGRONOMIST',
        endpoints: [
          {
            method: 'POST',
            route: '/api/v1/sync/mutations/batch',
            purpose: 'Reconciliação em lote da fila FIFO de mutações registradas offline',
            success: '200 OK (SyncResultDTO)',
          },
          {
            method: 'GET',
            route: '/api/v1/sync/delta/{farmId}?since={timestamp}',
            purpose: 'Download diferencial de alterações cadastrais para cache local',
            success: '200 OK (FarmDeltaDTO)',
          },
          {
            method: 'POST',
            route: '/api/v1/sync/idempotency/verify',
            purpose: 'Checagem prévia de execução por Idempotency-Key para evitar duplicidade',
            success: '200 OK (StatusDTO)',
          },
        ],
      },
      {
        category: 'MAPA Regulatory & Digital Dossiers',
        roles: 'ROLE_AGRONOMIST, ROLE_AUDITOR',
        endpoints: [
          {
            method: 'POST',
            route: '/api/v1/regulatory/applications',
            purpose: 'Emissão de apontamento de defensivo com assinatura digital em canvas',
            success: '201 Created (ApplicationRecordDTO)',
          },
          {
            method: 'GET',
            route: '/api/v1/regulatory/applications/{id}/audit-dossier',
            purpose: 'Exportação do dossiê auditado em PDF com hash SHA-256 e assinatura',
            success: '200 OK (application/pdf)',
          },
          {
            method: 'POST',
            route: '/api/v1/regulatory/prescriptions/validate',
            purpose: 'Validação de dosagem e período de carência contra o receituário agrônomo',
            success: '200 OK (ValidationResultDTO)',
          },
        ],
      },
      {
        category: 'IoT Telemetry & Pivots Engine',
        roles: 'ROLE_IOT_GATEWAY, ROLE_FARM_MANAGER',
        endpoints: [
          {
            method: 'POST',
            route: '/api/v1/iot/telemetry/pivots/stream',
            purpose: 'Ingestão contínua de telemetria de pivôs centrais de irrigação',
            success: '202 Accepted',
          },
          {
            method: 'POST',
            route: '/api/v1/iot/telemetry/silos/readings',
            purpose: 'Envio de leituras da malha de sensores termométricos de grãos',
            success: '202 Accepted',
          },
          {
            method: 'POST',
            route: '/api/v1/iot/pivots/{id}/emergency-stop',
            purpose: 'Disparo de ordem emergencial de interrupção de pivô via RabbitMQ',
            success: '200 OK (CommandDispatchDTO)',
          },
        ],
      },
    ],
    syntheticUsers: [
      {
        user: 'agr.oliveira@farmflow.agro',
        roles: 'ROLE_AGRONOMIST, ROLE_AUDITOR',
        scope: 'Emissão de receituário, assinatura digital MAPA e auditoria técnica',
      },
      {
        user: 'op.silva@farmflow.agro',
        roles: 'ROLE_FIELD_OPERATOR',
        scope: 'Operação de campo no app mobile, fila FIFO offline e apontamento de insumos',
      },
      {
        user: 'gestor.santos@farmflow.agro',
        roles: 'ROLE_FARM_MANAGER',
        scope: 'Visão executiva de safras, telemetria de pivôs, estoque e alertas de silos',
      },
      {
        user: 'system.gateway@iot.farmflow.agro',
        roles: 'ROLE_IOT_GATEWAY',
        scope: 'Ingestão contínua de telemetria de sensores de campo e maquinário agrícola',
      },
    ],
  },
  en: {
    modalTitle: 'FarmFlow — Engineering Dossier & Distributed Architecture',
    modalEyebrow: 'ARCHITECTURAL STUDY & DISTRIBUTED FULL-STACK ENGINEERING',
    modalSubtitle:
      'Precision Agriculture Platform & Critical Field Operations: Mobile Offline-First (React Native, Expo 54) & High-Concurrency Distributed Backend (Java 21, Virtual Threads, RabbitMQ, PostgreSQL 17)',
    mobileGithubUrl: 'https://github.com/DevYuriVieira/farmflow-mobile',
    backendGithubUrl: 'https://github.com/DevYuriVieira/farmflow-backend',
    closeBtn: 'Close',
    closeAria: 'Close FarmFlow case study modal',
    copyMarkdown: 'Copy Full Markdown',
    copiedMarkdown: '✓ Markdown Copied!',
    downloadMarkdown: 'Download Dossier (.md)',
    tabs: {
      overview: 'Overview & Architecture',
      offline: 'Offline-First & Mobile Sync',
      messaging: 'RabbitMQ & IoT Telemetry',
      regulatory: 'MAPA Compliance & SHA-256',
      benchmarks: '549 Tests & k6 Benchmarks',
      readme: 'Complete Dossier (README)',
    },
    badges: [
      { label: 'Java 21 LTS', color: 'amber' },
      { label: 'Spring Boot 4.1', color: 'green' },
      { label: 'Virtual Threads', color: 'purple' },
      { label: 'React Native (Expo 54)', color: 'blue' },
      { label: 'PostgreSQL 17 BRIN', color: 'blue' },
      { label: 'RabbitMQ CloudEvents', color: 'amber' },
      { label: 'Keycloak 26.1 OIDC', color: 'purple' },
      { label: 'MAPA SHA-256 Audit', color: 'green' },
      { label: '549 TESTS PASSING', color: 'green' },
    ],
    executiveSummary: [
      {
        area: 'Architecture Pattern',
        implementation:
          'Hexagonal / Clean Architecture in Java Backend and Unidirectional Offline-First Client Architecture in React Native',
      },
      {
        area: 'Backend Runtime',
        implementation:
          'Java 21 LTS with Virtual Threads native in Spring Boot 4.1.1, eliminating OS-level thread blocking',
      },
      {
        area: 'Mobile Runtime',
        implementation:
          'React Native (Expo SDK 54, React 19) with local AsyncStorage persistence and deterministic sync reconciliation',
      },
      {
        area: 'Persistence Layer',
        implementation:
          'PostgreSQL 17 with Declarative Temporal Partitioning by harvest/month and BRIN indexes for IoT time series',
      },
      {
        area: 'Event Reliability',
        implementation:
          'Transactional Outbox Pattern with atomic FOR UPDATE SKIP LOCKED polling within the exact business transaction',
      },
      {
        area: 'Asynchronous Messaging',
        implementation:
          'RabbitMQ 3.x with CloudEvents v1.0 specification, Dead-Letter Exchange (DLX), TTL retries, and Dead-Letter Queue (DLQ)',
      },
      {
        area: 'Offline Synchronization',
        implementation:
          'Client-side FIFO transactional queue with weighted Last-Write-Wins conflict resolution and Idempotency-Key deduplication',
      },
      {
        area: 'Regulatory Compliance',
        implementation:
          'MAPA regulatory compliance module with field spray logbook generation and tamper-proof SHA-256 canvas digital signature',
      },
      {
        area: 'Real-Time IoT Telemetry',
        implementation:
          'Continuous ingestion of central pivot irrigation telemetry (pressure, flow, angle) and grain silo thermometrics with anomaly detection',
      },
      {
        area: 'Authentication & RBAC',
        implementation:
          'Keycloak 26.1 OIDC with asymmetric JWT tokens (RS256), mobile biometrics (LocalAuthentication), and IDOR enumeration defense',
      },
      {
        area: 'Multi-Tenant Isolation',
        implementation:
          'Native PostgreSQL Row-Level Security (RLS) with fail-closed policy validating session-injected tenant_id',
      },
      {
        area: 'Distributed Sagas',
        implementation:
          'Coordination of critical agricultural operations (chemical dispatch, machinery allocation) via advisory locks pg_try_advisory_xact_lock',
      },
      {
        area: 'Observability & Tracing',
        implementation:
          'OpenTelemetry with continuous W3C traceparent propagation across Mobile → API Gateway → Backend → RabbitMQ → Consumer',
      },
      {
        area: 'Capacity Testing (k6)',
        implementation:
          '2,450 req/s sustained under k6 stress testing with P95 latency < 42 ms and zero 5xx errors powered by Java 21 Virtual Threads',
      },
      {
        area: 'Test Coverage Rigor',
        implementation:
          '549+ automated tests (411 Java Backend tests with Testcontainers and 100 concurrent Virtual Threads + 138 Mobile tests across 26 Jest suites)',
      },
    ],
    domainContexts: [
      {
        name: 'Farm Plots (FarmPlot)',
        title: 'Geographic Boundaries, Zoning, and Crop Cycles',
        invariants: [
          'Georeferenced registration with GeoJSON boundary polygons and strict overlap prevention',
          'Historical crop rotation per season with phytosanitary withholding control',
          'Automated calculation of usable farmland versus environmental preservation areas (APP)',
          'Strict multi-tenant isolation via Row-Level Security per farm/cooperative',
        ],
      },
      {
        name: 'Pesticide Application (PesticideApplication)',
        title: 'Regulatory Compliance and Official MAPA Audit',
        invariants: [
          'Mandatory linkage with Agronomic Prescription issued by registered Agronomist Engineer',
          'Digital signature captured on mobile Canvas with SHA-256 cryptographic hashing and immutable UTC timestamp',
          'Strict dosage validation per hectare (DosagePerHectare) adhering to official MAPA package inserts',
          'Automated harvest lockout while pesticide withdrawal period (WithdrawalPeriodDays) remains unfulfilled',
        ],
      },
      {
        name: 'Irrigation Pivots (IrrigationPivot)',
        title: 'Hydraulic Telemetry, Pressure Monitoring, and Water Efficiency',
        invariants: [
          'Continuous IoT telemetry ingestion (pump pressure, pivot angle 0° to 360°, water depth in mm)',
          'Immediate pressure anomaly detection (sudden drop indicating rupture, spike indicating blockage)',
          'PostgreSQL 17 declarative monthly partitioning for massive time-series retention',
          'Emergency shutdown command dispatch via RabbitMQ in under 150 ms',
        ],
      },
      {
        name: 'Grain Silos (GrainSilo)',
        title: 'Thermometric Monitoring, Relative Humidity, and Grain Quality',
        invariants: [
          '3D thermometric sensor matrix monitoring grain mass depth every 2 meters',
          'Automated aeration dispatch upon detecting thermal gradient delta > 2.5°C (indicating fermentation hot spot)',
          'Full batch traceability linked back to the source harvesting plot',
        ],
      },
      {
        name: 'Mobile Offline Queue (OfflineSyncQueue)',
        title: 'Transactional Consistency in Connectivity-Deprived Farmlands',
        invariants: [
          'Local FIFO persistence in AsyncStorage prior to any transmission attempt',
          'UUIDv4 Idempotency-Key generated on mobile to prevent duplicate backend execution',
          'Deterministic reconciliation upon detecting network recovery via NetInfo',
          'Conflict resolution based on audited timestamp and regulatory priority rules',
        ],
      },
    ],
    failureScenarios: [
      {
        scenario: 'No Cellular Connectivity in Remote Farmland',
        behavior:
          'The React Native app stores all applications, signatures, and readings in local FIFO queue; UI optimistically updates with pending indicator.',
        guarantee: 'Zero data loss during field operations',
      },
      {
        scenario: 'Transient API Failure during Sync Batch',
        behavior:
          'Mobile client applies exponential backoff with jitter (1s, 2s, 5s, 15s), maintaining local locks until backend ACK is acknowledged.',
        guarantee: 'Guaranteed delivery with zero duplicates',
      },
      {
        scenario: 'PostgreSQL Outage on Backend',
        behavior:
          'API immediately returns HTTP 503 with RFC 9457 ProblemDetails; Circuit Breaker trips and RabbitMQ buffers telemetry streams.',
        guarantee: 'Fail-fast defense without corruption',
      },
      {
        scenario: 'RabbitMQ Broker Outage during Ingestion',
        behavior:
          'Transactional Outbox stores domain events in the same ACID transaction as business data; Dispatcher resumes once broker recovers.',
        guarantee: 'At-least-once delivery with zero dual-write',
      },
      {
        scenario: 'Corrupted MAPA Digital Signature Hash',
        behavior:
          'Backend recalculates SHA-256 hash from canvas vector payload; if hash diverges, submission is rejected with HTTP 422 Unprocessable Entity.',
        guarantee: 'Tamper-proof forensic audit integrity',
      },
      {
        scenario: 'Concurrent Machinery Allocation Conflict',
        behavior:
          'Simultaneous allocation attempts on the same tractor/sprayer are arbitrated via pg_try_advisory_xact_lock; conflicting caller receives HTTP 409.',
        guarantee: 'Absolute double-booking prevention',
      },
      {
        scenario: 'Cross-Tenant Access Probe Attempt',
        behavior:
          'PostgreSQL RLS filters queries by JWT-validated tenant_id; IDOR probes return generic HTTP 404 without leaking existence of target record.',
        guarantee: 'Fail-closed multi-tenant isolation',
      },
      {
        scenario: 'Pivot Telemetry Traffic Surge (IoT Burst)',
        behavior:
          'Java 21 Virtual Threads process thousands of concurrent connections without exhausting OS thread pools, keeping P95 latency < 45 ms.',
        guarantee: 'High-density I/O scalability',
      },
    ],
    benchmarks: [
      {
        workload: 'Virtual Threads vs Platform Threads',
        concurrency: '500 VUs',
        requests: '147,200 reqs',
        throughput: '2,453 req/s',
        p50: '8.12 ms',
        p90: '24.30 ms',
        p95: '41.80 ms',
        max: '182.10 ms',
        errors: '0.00%',
        persistence: '2,450 ops/s in Postgres',
        verdict: 'PASS (Virtual Threads)',
      },
      {
        workload: 'Mobile Offline Sync Burst',
        concurrency: '50 VUs in Batches',
        requests: '18,500 mutations',
        throughput: '618.20 req/s',
        p50: '12.40 ms',
        p90: '38.10 ms',
        p95: '52.70 ms',
        max: '240.50 ms',
        errors: '0.00%',
        persistence: '18,500 applications',
        verdict: 'PASS (Reconciled FIFO Queue)',
      },
      {
        workload: 'IoT Pivot & Silo Telemetry',
        concurrency: '100 Continuous VUs',
        requests: '89,400 telemetry points',
        throughput: '1,490 req/s',
        p50: '4.80 ms',
        p90: '14.20 ms',
        p95: '21.50 ms',
        max: '98.30 ms',
        errors: '0.00%',
        persistence: 'Temporal BRIN Partitions',
        verdict: 'PASS (Continuous Ingestion)',
      },
      {
        workload: 'MAPA SHA-256 Hash Validation',
        concurrency: '25 VUs',
        requests: '6,250 signatures',
        throughput: '312.50 req/s',
        p50: '15.60 ms',
        p90: '32.10 ms',
        p95: '44.80 ms',
        max: '135.20 ms',
        errors: '0.00%',
        persistence: '6,250 sealed dossiers',
        verdict: 'PASS (Tamper-Proof Crypto)',
      },
      {
        workload: 'Tenant Isolation Stress (RLS)',
        concurrency: '80 Multi-Tenant VUs',
        requests: '42,000 queries',
        throughput: '1,050 req/s',
        p50: '6.20 ms',
        p90: '18.90 ms',
        p95: '28.40 ms',
        max: '112.00 ms',
        errors: '0.00%',
        persistence: 'Zero cross-tenant leakage',
        verdict: 'PASS (Guaranteed Isolation)',
      },
    ],
    adrs: [
      {
        code: 'ADR-001',
        title: 'Offline-First FIFO Queue Architecture with Local AsyncStorage',
        status: 'Accepted',
        focus: 'Total resilience during remote farmland operations without cellular connectivity',
      },
      {
        code: 'ADR-002',
        title: 'Java 21 LTS Virtual Threads for High-Density I/O',
        status: 'Accepted',
        focus: 'Elimination of OS thread pool exhaustion and sustained 2,450 req/s throughput',
      },
      {
        code: 'ADR-003',
        title: 'PostgreSQL 17 Declarative Temporal Partitioning & BRIN Indexes',
        status: 'Accepted',
        focus: 'Harvest/monthly partitioning with low-overhead storage for massive IoT data',
      },
      {
        code: 'ADR-004',
        title: 'Transactional Outbox Pattern with FOR UPDATE SKIP LOCKED Polling',
        status: 'Accepted',
        focus: 'Dual-write hazard elimination guaranteeing at-least-once RabbitMQ publication',
      },
      {
        code: 'ADR-005',
        title: 'MAPA Regulatory Digital Signature with SHA-256 Canvas Vector Hashing',
        status: 'Accepted',
        focus: 'Strict regulatory compliance for pesticide field audits with immutable digital seal',
      },
      {
        code: 'ADR-006',
        title: 'Transactional Advisory Locks (pg_try_advisory_xact_lock) for Farm Sagas',
        status: 'Accepted',
        focus: 'Deadlock-free concurrency arbitration across distributed farm machinery allocation',
      },
      {
        code: 'ADR-007',
        title: 'Row-Level Security (RLS) Fail-Closed Multi-Tenant Separation',
        status: 'Accepted',
        focus: 'Database-level strict data segregation between agribusiness cooperatives',
      },
      {
        code: 'ADR-008',
        title: 'CloudEvents v1.0 Specification over RabbitMQ Topic Exchanges',
        status: 'Accepted',
        focus: 'Standardized domain event payloads and agroindustrial telemetry schemas',
      },
      {
        code: 'ADR-009',
        title: 'W3C Distributed Trace Context Propagation across Mobile and Backend',
        status: 'Accepted',
        focus: 'End-to-end traceability from mobile screen tap to asynchronous broker dispatch',
      },
      {
        code: 'ADR-010',
        title: 'Dead-Letter Exchange (DLX) with Progressive Exponential Retries',
        status: 'Accepted',
        focus: 'Resilience against transient downstream outages with automated DLQ quarantine',
      },
      {
        code: 'ADR-011',
        title: 'IDOR Enumeration Defense via Universal HTTP 404 Fail-Closed Responses',
        status: 'Accepted',
        focus: 'Preventing external resource probing by returning 404 instead of 403 on denied tenants',
      },
      {
        code: 'ADR-012',
        title: 'Local Biometric Authentication for Mobile Field Operators',
        status: 'Accepted',
        focus: 'Securing field operations with FaceID/fingerprint and encrypted offline token cache',
      },
      {
        code: 'ADR-013',
        title: 'Empirical k6 Load Testing in Virtual Thread Concurrency Scenarios',
        status: 'Accepted',
        focus: 'Continuous empirical verification of capacity envelopes prior to production deployment',
      },
      {
        code: 'ADR-014',
        title: 'Decoupled Silo Thermometry Alert Engine with Delta Anomaly Probing',
        status: 'Accepted',
        focus: 'Automated aeration actuation upon detecting thermal gradient delta > 2.5°C',
      },
    ],
    runbooks: [
      {
        name: 'Mobile Sync Backlog Congestion',
        trigger: 'Metric farmflow.sync.backlog > 1,000 pending batches',
        mitigation:
          'Verify API gateway error rates, inspect version conflict frequency, and autoscale sync worker instances',
      },
      {
        name: 'Critical Silo Temperature Warning',
        trigger: 'Thermometric sensor reports delta > 3.0°C or absolute temperature > 38°C',
        mitigation:
          'Actuate emergency aeration via RabbitMQ, dispatch push/WhatsApp notifications to farm manager, and log incident in audit trail',
      },
      {
        name: 'MAPA Signature Hash Mismatch',
        trigger: 'SHA-256 validation failure on incoming pesticide application payload',
        mitigation:
          'Quarantine payload in security audit table, alert agronomist of record, and request biometric re-signature',
      },
      {
        name: 'PostgreSQL Temporal Partition Exhaustion',
        trigger: 'Attempted insert into unprovisioned future harvest partition',
        mitigation:
          'Trigger emergency DDL partition creation script and review automated scheduled maintenance cron job',
      },
    ],
    slos: [
      {
        service: 'Field Data Mobile Sync',
        sli: 'Rate of mobile mutations reconciled successfully without 5xx response',
        target: '≥ 99.95% Success Rate',
        budget: '0.05% error budget',
        burnAlert: '1% in 30 min',
      },
      {
        service: 'IoT Telemetry Ingestion Latency',
        sli: 'P95 response duration on pivot and silo telemetry ingestion endpoints',
        target: '≤ 50 ms (P95)',
        budget: '5% of samples exceeding 50 ms',
        burnAlert: '10% in 10 min window',
      },
      {
        service: 'MAPA Regulatory Dossier Generation',
        sli: 'PDF generation duration with embedded SHA-256 cryptographic seal',
        target: '≤ 350 ms (P95)',
        budget: '3% of samples exceeding 350 ms',
        burnAlert: '5% in 1 hour window',
      },
      {
        service: 'Backend API Availability',
        sli: 'HTTP 2xx/4xx versus 5xx ratio measured on /actuator/health endpoint',
        target: '≥ 99.9% Uptime',
        budget: '0.10% (43 min/month)',
        burnAlert: '2% in 1 hour',
      },
    ],
    endpointCategories: [
      {
        category: 'Mobile Field Operations (Offline Sync)',
        roles: 'ROLE_FIELD_OPERATOR, ROLE_AGRONOMIST',
        endpoints: [
          {
            method: 'POST',
            route: '/api/v1/sync/mutations/batch',
            purpose: 'Batch reconciliation of offline FIFO mutation queue from field devices',
            success: '200 OK (SyncResultDTO)',
          },
          {
            method: 'GET',
            route: '/api/v1/sync/delta/{farmId}?since={timestamp}',
            purpose: 'Differential delta download of farm catalog changes for local cache',
            success: '200 OK (FarmDeltaDTO)',
          },
          {
            method: 'POST',
            route: '/api/v1/sync/idempotency/verify',
            purpose: 'Pre-flight idempotency verification to prevent duplicate execution',
            success: '200 OK (StatusDTO)',
          },
        ],
      },
      {
        category: 'MAPA Regulatory & Digital Dossiers',
        roles: 'ROLE_AGRONOMIST, ROLE_AUDITOR',
        endpoints: [
          {
            method: 'POST',
            route: '/api/v1/regulatory/applications',
            purpose: 'Submit pesticide application record with digital canvas signature',
            success: '201 Created (ApplicationRecordDTO)',
          },
          {
            method: 'GET',
            route: '/api/v1/regulatory/applications/{id}/audit-dossier',
            purpose: 'Export audited PDF dossier sealed with SHA-256 hash and timestamp',
            success: '200 OK (application/pdf)',
          },
          {
            method: 'POST',
            route: '/api/v1/regulatory/prescriptions/validate',
            purpose: 'Validate chemical dosage and withdrawal period against prescription',
            success: '200 OK (ValidationResultDTO)',
          },
        ],
      },
      {
        category: 'IoT Telemetry & Pivots Engine',
        roles: 'ROLE_IOT_GATEWAY, ROLE_FARM_MANAGER',
        endpoints: [
          {
            method: 'POST',
            route: '/api/v1/iot/telemetry/pivots/stream',
            purpose: 'Continuous ingestion stream of central irrigation pivot telemetry',
            success: '202 Accepted',
          },
          {
            method: 'POST',
            route: '/api/v1/iot/telemetry/silos/readings',
            purpose: 'Telemetry readings ingestion from grain silo 3D sensor matrix',
            success: '202 Accepted',
          },
          {
            method: 'POST',
            route: '/api/v1/iot/pivots/{id}/emergency-stop',
            purpose: 'Trigger emergency pivot shutdown command via RabbitMQ broker',
            success: '200 OK (CommandDispatchDTO)',
          },
        ],
      },
    ],
    syntheticUsers: [
      {
        user: 'agr.oliveira@farmflow.agro',
        roles: 'ROLE_AGRONOMIST, ROLE_AUDITOR',
        scope: 'Agronomic prescription issue, MAPA digital signature, and technical audits',
      },
      {
        user: 'op.silva@farmflow.agro',
        roles: 'ROLE_FIELD_OPERATOR',
        scope: 'Mobile field operations, offline FIFO queue execution, and input logging',
      },
      {
        user: 'gestor.santos@farmflow.agro',
        roles: 'ROLE_FARM_MANAGER',
        scope: 'Executive farm oversight, pivot telemetry, inventory, and silo thermal alerts',
      },
      {
        user: 'system.gateway@iot.farmflow.agro',
        roles: 'ROLE_IOT_GATEWAY',
        scope: 'Continuous automated ingestion from field sensors and IoT machinery',
      },
    ],
  },
};

