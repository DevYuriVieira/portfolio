import { SupportedLang } from '@core';
import { AiManifestoData } from './ai-experience.model';

const AI_I18N: Record<SupportedLang, AiManifestoData> = {
  'pt-BR': {
    badge: '05 // ENGINEERING INTELLIGENCE LOOP',
    title: 'Engenharia de Software Amplificada por IA',
    subtitle: 'Automação, modelos de linguagem e pensamento sistêmico aplicados ao desenvolvimento de software.',
    manifesto:
      'Para mim, a Inteligência Artificial não substitui a engenharia: ela atua como um parceiro de trabalho (co-worker) de altíssima velocidade. Escrevo código, projeto arquiteturas, estruturo o problema e orquestro a IA com automação para eliminar tarefas repetitivas, analisar logs em segundos e explorar soluções. O desenvolvimento ganha velocidade, mas a inteligência, a escrita do código e a responsabilidade final continuam sendo humanas.',
    features: [
      {
        index: '01',
        title: 'Automação de Tarefas Repetitivas (n8n)',
        description:
          'Delego o trabalho mecânico e operacional para o n8n e Webhooks (como integração de APIs e disparos de rotina), liberando minha energia mental para focar na regra de negócio e na arquitetura do sistema.',
        tags: ['n8n', 'Webhooks', 'API Integration', 'Async Workflows'],
      },
      {
        index: '02',
        title: 'Investigação Acelerada de Erros',
        description:
          'Uso a IA como um segundo par de olhos para triar stack traces extensos e sugerir otimizações de SQL em segundos. A investigação ganha agilidade, mas a causa raiz e a correção definitiva são validadas e implementadas por mim.',
        tags: ['Code Diagnostics', 'Log Analysis', 'SQL Optimization', 'Debugging'],
      },
      {
        index: '03',
        title: 'Pair Programming com Co-Worker I.A.',
        description:
          'Trabalho lado a lado com assistentes de IA como parceiros de código (pair programming), aplicando Clean Code, discutindo refatoração, cobrindo cenários de teste e revisando código com rigor de Clean Architecture.',
        tags: ['Pair Programming', 'Clean Code', 'Clean Architecture', 'Unit Testing'],
      },
      {
        index: '04',
        title: 'Direção Humana & Métodos de Engenharia',
        description:
          'Ferramentas de IA só entregam bons resultados quando bem direcionadas. Aplico métodos da Engenharia de Produção (PDCA e 5W2H) para estruturar o problema, definir o contexto correto e garantir sistemas sustentáveis.',
        tags: ['Systems Thinking', 'PDCA', 'Lean Software', 'Full-Stack'],
      },
    ],
    closingStatement:
      'O foco não está em ferramentas isoladas de IA, mas na aplicação pragmática de automação combinada com engenharia humana para construir software robusto, legível e de alto valor.',
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
      'For me, Artificial Intelligence does not replace engineering: it acts as a high-speed co-worker. I write code, design architectures, structure problems, and orchestrate AI with automation daily to eliminate repetitive tasks, analyze logs in seconds, and explore solutions. Development gains speed, but the intelligence, code writing, and final responsibility remain human.',
    features: [
      {
        index: '01',
        title: 'Repetitive Task Automation (n8n)',
        description:
          'Offloading routine mechanical work to n8n and Webhooks (such as API integrations and automated alerts), freeing my mental energy to focus on core business logic and software architecture.',
        tags: ['n8n', 'Webhooks', 'API Integration', 'Async Workflows'],
      },
      {
        index: '02',
        title: 'Accelerated Error Diagnostics',
        description:
          'Using AI as a second pair of eyes to triage large stack traces and suggest SQL optimizations in seconds. Investigation speeds up, but root-cause diagnosis and fixes are validated and implemented by me.',
        tags: ['Code Diagnostics', 'Log Analysis', 'SQL Optimization', 'Debugging'],
      },
      {
        index: '03',
        title: 'Pair Programming with AI Co-Worker',
        description:
          'Working alongside AI assistants as pair programming partners, applying Clean Code, discussing refactoring strategies, covering edge-case test scenarios, and reviewing code under strict Clean Architecture standards.',
        tags: ['Pair Programming', 'Clean Code', 'Clean Architecture', 'Unit Testing'],
      },
      {
        index: '04',
        title: 'Human Direction & Engineering Methods',
        description:
          'AI tools only deliver strong results when properly guided. I apply Production Engineering methods (PDCA and 5W2H) to structure problems, define accurate context, and ensure sustainable software systems.',
        tags: ['Systems Thinking', 'PDCA', 'Lean Software', 'Full-Stack'],
      },
    ],
    closingStatement:
      'The focus is not on isolated AI tools, but on the pragmatic application of automation combined with human engineering to build robust, readable, high-value software.',
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
        name: 'Reasoning & Logic',
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
};

export const AI_MANIFESTO_DATA: AiManifestoData = AI_I18N['pt-BR'];

export function getAiData(lang: SupportedLang): AiManifestoData {
  return AI_I18N[lang];
}
