import { SupportedLang } from '@core';
import { AiManifestoData } from './ai-experience.model';

const AI_I18N: Record<SupportedLang, AiManifestoData> = {
  'pt-BR': {
    badge: '05 // ENGINEERING INTELLIGENCE LOOP',
    title: 'Engenharia de Software Amplificada por IA',
    subtitle: 'Automação, modelos de linguagem e pensamento sistêmico aplicados ao desenvolvimento de software.',
    manifesto:
      'Desenvolver software é lidar diariamente com complexidade: entender problemas, organizar contexto, tomar decisões técnicas e transformar ideias em sistemas funcionais.\n\nA inteligência artificial passou a fazer parte desse processo como uma ferramenta de engenharia. Utilizo modelos de linguagem e automações para acelerar etapas do desenvolvimento, desde investigação de problemas e análise de código até refatorações, exploração de soluções e validações técnicas.\n\nA IA aumenta a velocidade de execução, mas a qualidade do software continua dependendo de arquitetura, pensamento crítico e decisões bem fundamentadas.\n\nNo fim, a tecnologia é apenas parte do processo. O objetivo continua sendo o mesmo: construir sistemas melhores, mais confiáveis e capazes de evoluir.',
    features: [
      {
        index: '01',
        title: 'Automação de Workflows no n8n',
        description:
          'Construção de fluxos assíncronos no n8n e consumo de Webhooks para integração de APIs, notificações operacionais e eliminação de tarefas manuais de rotina.',
        tags: ['n8n', 'Webhooks', 'API Integration', 'Async Workflows'],
      },
      {
        index: '02',
        title: 'Diagnóstico Acelerado de Erros & Logs',
        description:
          'Uso prático de IA para análise rápida de stack traces, diagnóstico de exceções em tempo de execução e otimização de consultas SQL complexas.',
        tags: ['Code Diagnostics', 'Log Analysis', 'SQL Optimization', 'Debugging'],
      },
      {
        index: '03',
        title: 'Par-Programação & Refatoração Assistida',
        description:
          'Atuação com agentes de IA como parceiros de pair programming na auditoria de qualidade de código, refatoração orientada a Clean Architecture e escrita de testes unitários.',
        tags: ['Pair Programming', 'Code Review', 'Clean Architecture', 'Unit Testing'],
      },
      {
        index: '04',
        title: 'Pensamento Sistêmico (Lean & PDCA)',
        description:
          'Aplicação de métodos de Engenharia de Produção (análise de causa raiz 5W2H e ciclo PDCA) para estruturar sistemas sustentáveis e fáceis de manter.',
        tags: ['Systems Thinking', 'PDCA', 'Lean Software', 'Full-Stack'],
      },
    ],
    closingStatement:
      'O foco não está nas ferramentas de IA isoladas, mas na aplicação pragmática de automação para construir software robusto, legível e de alto valor.',
    nodeDetails: {
      OBSERVE: {
        id: 'observe',
        index: 'CORE LOOP // 01',
        name: 'Observe & Telemetry',
        category: 'Ingresso de Dados & Sensores',
        summary:
          'Coleta de métricas e eventos em tempo real. Permite monitorar a saúde do sistema e capturar sinais de entrada sem interferir no fluxo de execução.',
        practicalApplications: [
          'Captura de logs e métricas de desempenho em tempo real',
          'Tratamento de webhooks e requisições HTTP de entrada',
          'Filtro e estruturação inicial de cargas de dados',
        ],
        tools: ['Observability', 'Telemetry', 'Webhooks', 'Metrics'],
      },
      CONTEXT: {
        id: 'context',
        index: 'CORE LOOP // 02',
        name: 'Context & State Buffer',
        category: 'Gerenciamento de Estado & Memória',
        summary:
          'Organização e retenção de estado da aplicação, garantindo que as regras de negócio e consultas tenham acesso ao contexto correto antes de decidir.',
        practicalApplications: [
          'Gerenciamento de estado volátil e camadas de cache',
          'Alinhamento de contextos em arquiteturas modulares',
          'Garantia de consistência de dados em operações concorrentes',
        ],
        tools: ['State Management', 'Cache Layer', 'Context Isolators', 'Memory Buffer'],
      },
      REASONING: {
        id: 'reasoning',
        index: 'CORE LOOP // 03',
        name: 'Reasoning & Synthesis',
        category: 'Processamento & Lógica de Negócio',
        summary:
          'Análise de dados e avaliação de cenários. Aplica regras condicionais e algoritmos para sintetizar a melhor rota de solução para cada problema.',
        practicalApplications: [
          'Decomposição analítica de regras de negócio complexas',
          'Avaliação de alternativas de execução em tempo real',
          'Síntese assistida por IA para acelerar soluções de código',
        ],
        tools: ['Business Logic', 'Algorithmic Reasoning', 'Code Synthesis', 'LLMs'],
      },
      DECISION: {
        id: 'decision',
        index: 'CORE LOOP // 04',
        name: 'Decision & Routing',
        category: 'Roteamento & Decisão Determinística',
        summary:
          'Definição clara do caminho de execução a seguir, transformando análises em ações concretas e validadas.',
        practicalApplications: [
          'Roteamento prioritário de mensagens e chamadas de API',
          'Validação estrita de esquemas de dados antes do despacho',
          'Chaveamento seguro entre estratégias de fallback',
        ],
        tools: ['Decision Trees', 'Schema Validation', 'Event Routing', 'Dispatchers'],
      },
      EXECUTION: {
        id: 'execution',
        index: 'CORE LOOP // 05',
        name: 'Execution & Mutating Actions',
        category: 'Mutação & Execução de Tarefas',
        summary:
          'Aplicação física de alterações e mutações de dados no banco, chamadas de APIs externas ou envio de notificações assíncronas.',
        practicalApplications: [
          'Execução de mutações de banco de dados com controle de transação',
          'Integrações via APIs RESTful e Webhooks',
          'Despacho de rotinas operacionais automatizadas',
        ],
        tools: ['Worker Pools', 'REST APIs', 'Database Mutations', 'Async Jobs'],
      },
      VERIFICATION: {
        id: 'verification',
        index: 'CORE LOOP // 06',
        name: 'Verification & Assertions',
        category: 'Auditoria de Qualidade & Invariantes',
        summary:
          'Auditoria contínua de contratos e pós-condições, garantindo que cada alteração respeite os testes e os requisitos do sistema.',
        practicalApplications: [
          'Execução de testes unitários e de integração automatizados',
          'Verificação de contratos de APIs e sanidade de dados',
          'Disparo de retentativas (retries) em caso de falha temporária',
        ],
        tools: ['Unit Testing', 'Contract Testing', 'Runtime Assertions', 'Automated QA'],
      },
      KNOWLEDGE: {
        id: 'knowledge',
        index: 'SUPPORTING LAYER // 01',
        name: 'Knowledge & Ground Truth',
        category: 'Base de Conhecimento & Persistência',
        summary:
          'Armazenamento relacional e regras de negócio persistidas. Garante que os dados estruturados sirvam como fonte confiável de verdade.',
        practicalApplications: [
          'Modelagem relacional e esquemas estritos em PostgreSQL',
          'Consultas otimizadas com índices e integridade referencial',
          'Mapeamento objeto-relacional sustentável',
        ],
        tools: ['PostgreSQL', 'SQLite', 'SQL', 'ORM', 'Relational Modeling'],
      },
      'HUMAN JUDGMENT': {
        id: 'human-judgment',
        index: 'SUPPORTING LAYER // 02',
        name: 'Human Judgment & Governance',
        category: 'Supervisão Humana & Governança',
        summary:
          'Supervisão direta e tomada de decisão humana em etapas críticas do desenvolvimento, garantindo conformidade, segurança e boa arquitetura.',
        practicalApplications: [
          'Revisão de código (Code Review) e aprovação de deploys',
          'Análise de causa raiz (5W2H) para resolução de débitos técnicos',
          'Decisões de arquitetura sustentável para evolução do software',
        ],
        tools: ['Human Code Review', 'Policy Oversight', 'PDCA', 'Lean Engineering'],
      },
    },
  },
  en: {
    badge: '05 // ENGINEERING INTELLIGENCE LOOP',
    title: 'AI-Augmented Software Engineering',
    subtitle: 'Automation, language models and systems thinking applied to software engineering.',
    manifesto:
      'Software development is about dealing with complexity: understanding problems, organizing context, making technical decisions and transforming ideas into functional systems.\n\nArtificial intelligence has become part of this process as an engineering tool. I use language models and automation to accelerate development tasks, from problem investigation and code analysis to refactoring, solution exploration and technical validation.\n\nAI increases execution speed, but software quality still depends on architecture, critical thinking and well-founded decisions.\n\nTechnology is only part of the process. The goal remains the same: building better, more reliable systems that can evolve.',
    features: [
      {
        index: '01',
        title: 'n8n Workflow Automation',
        description:
          'Building asynchronous flows in n8n and handling webhooks to integrate APIs, send operational alerts, and automate routine manual tasks.',
        tags: ['n8n', 'Webhooks', 'API Integration', 'Async Workflows'],
      },
      {
        index: '02',
        title: 'Accelerated Error Diagnostics',
        description:
          'Practical use of AI for rapid stack trace analysis, runtime exception diagnosis, and optimizing complex SQL queries.',
        tags: ['Code Diagnostics', 'Log Analysis', 'SQL Optimization', 'Debugging'],
      },
      {
        index: '03',
        title: 'Pair Programming & Assisted Refactoring',
        description:
          'Working with AI agents as pair programming partners for code quality audits, Clean Architecture refactoring, and unit test writing.',
        tags: ['Pair Programming', 'Code Review', 'Clean Architecture', 'Unit Testing'],
      },
      {
        index: '04',
        title: 'Systems Thinking (Lean & PDCA)',
        description:
          'Applying Production Engineering methods (5W2H root cause analysis and PDCA cycle) to build sustainable, easy-to-maintain software.',
        tags: ['Systems Thinking', 'PDCA', 'Lean Software', 'Full-Stack'],
      },
    ],
    closingStatement:
      'The focus is not on isolated AI tools, but on the pragmatic application of automation to build robust, readable, high-value software.',
    nodeDetails: {
      OBSERVE: {
        id: 'observe',
        index: 'CORE LOOP // 01',
        name: 'Observe & Telemetry',
        category: 'Data Ingress & Sensors',
        summary:
          'Collecting real-time metrics and system events. Allows monitoring system health and capturing input signals without interfering with execution.',
        practicalApplications: [
          'Real-time log capture and performance metrics monitoring',
          'Webhook handling and incoming HTTP request processing',
          'Initial data payload filtering and structuring',
        ],
        tools: ['Observability', 'Telemetry', 'Webhooks', 'Metrics'],
      },
      CONTEXT: {
        id: 'context',
        index: 'CORE LOOP // 02',
        name: 'Context & State Buffer',
        category: 'State Management & Memory',
        summary:
          'Organizing application state to ensure business logic and queries access the correct context before decision-making.',
        practicalApplications: [
          'Volatile state management and caching layers',
          'Context alignment in modular software architectures',
          'Data consistency guarantees across concurrent operations',
        ],
        tools: ['State Management', 'Cache Layer', 'Context Isolators', 'Memory Buffer'],
      },
      REASONING: {
        id: 'reasoning',
        index: 'CORE LOOP // 03',
        name: 'Reasoning & Synthesis',
        category: 'Processing & Business Logic',
        summary:
          'Data analysis and scenario evaluation. Applies conditional rules and algorithms to synthesize the best solution path for each task.',
        practicalApplications: [
          'Analytical decomposition of complex business rules',
          'Real-time execution alternative evaluation',
          'AI-assisted synthesis to accelerate code solutions',
        ],
        tools: ['Business Logic', 'Algorithmic Reasoning', 'Code Synthesis', 'LLMs'],
      },
      DECISION: {
        id: 'decision',
        index: 'CORE LOOP // 04',
        name: 'Decision & Routing',
        category: 'Routing & Deterministic Choice',
        summary:
          'Defining clear execution pathways, turning analysis into concrete, validated software actions.',
        practicalApplications: [
          'Priority message routing and API call dispatching',
          'Strict data schema validation prior to payload execution',
          'Safe switching between fallback strategies',
        ],
        tools: ['Decision Trees', 'Schema Validation', 'Event Routing', 'Dispatchers'],
      },
      EXECUTION: {
        id: 'execution',
        index: 'CORE LOOP // 05',
        name: 'Execution & Mutating Actions',
        category: 'Mutation & Task Execution',
        summary:
          'Applying database mutations, external API calls, or dispatching asynchronous background notifications.',
        practicalApplications: [
          'Database mutation execution with transaction scope control',
          'RESTful API and Webhook integrations',
          'Automated operational task dispatching',
        ],
        tools: ['Worker Pools', 'REST APIs', 'Database Mutations', 'Async Jobs'],
      },
      VERIFICATION: {
        id: 'verification',
        index: 'CORE LOOP // 06',
        name: 'Verification & Assertions',
        category: 'Quality Audit & Invariants',
        summary:
          'Continuous auditing of contracts and post-conditions, ensuring every change complies with system tests and requirements.',
        practicalApplications: [
          'Automated unit and integration test execution',
          'API contract verification and data sanity checks',
          'Triggering retries on transient operational failures',
        ],
        tools: ['Unit Testing', 'Contract Testing', 'Runtime Assertions', 'Automated QA'],
      },
      KNOWLEDGE: {
        id: 'knowledge',
        index: 'SUPPORTING LAYER // 01',
        name: 'Knowledge & Ground Truth',
        category: 'Knowledge Base & Persistence',
        summary:
          'Relational storage and persistent business rules. Guarantees that structured data serves as a reliable ground truth.',
        practicalApplications: [
          'Relational modeling and strict schemas in PostgreSQL',
          'Optimized queries with indexation and referential integrity',
          'Sustainable object-relational mapping',
        ],
        tools: ['PostgreSQL', 'SQLite', 'SQL', 'ORM', 'Relational Modeling'],
      },
      'HUMAN JUDGMENT': {
        id: 'human-judgment',
        index: 'SUPPORTING LAYER // 02',
        name: 'Human Judgment & Governance',
        category: 'Human Supervision & Governance',
        summary:
          'Direct human supervision and decision-making at critical development stages, ensuring security, compliance, and good architecture.',
        practicalApplications: [
          'Code review and deployment authorization',
          '5W2H root cause analysis for technical debt resolution',
          'Sustainable architectural decisions for software evolution',
        ],
        tools: ['Human Code Review', 'Policy Oversight', 'PDCA', 'Lean Engineering'],
      },
    },
  },
};

export const AI_MANIFESTO_DATA: AiManifestoData = AI_I18N['pt-BR'];

export function getAiData(lang: SupportedLang): AiManifestoData {
  return AI_I18N[lang];
}
