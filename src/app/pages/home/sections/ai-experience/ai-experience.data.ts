import { SupportedLang } from '@core';
import { AiManifestoData } from './ai-experience.model';

const AI_I18N: Record<SupportedLang, AiManifestoData> = {
  'pt-BR': {
    badge: '05 // Artificial Intelligence & Automation',
    title: 'Construindo com IA, pensando além do código',
    manifesto:
      'Com minha formação em Engenharia de Produção e atuação em Engenharia de Software, vejo a inteligência artificial e a automação como camadas vivas de amplificação do raciocínio — agregando capacidade analítica, eficiência e automação inteligente diretamente ao ciclo de desenvolvimento de software.',
    features: [
      {
        index: '01',
        title: 'Automação de Workflows no n8n',
        description:
          'Construção de fluxos automatizados no n8n para integração de APIs, disparo e tratamento de Webhooks, eliminação de tarefas manuais e otimização de processos de engenharia.',
        tags: ['n8n', 'Webhooks', 'Workflows', 'API Integration'],
      },
      {
        index: '02',
        title: 'LLMs no Dia a Dia de Desenvolvimento',
        description:
          'Uso cotidiano de modelos de linguagem como ferramentas de apoio — acelerando o diagnóstico de logs e exceções, prototipando componentes e documentando especificações.',
        tags: ['LLMs', 'Prompt Engineering', 'Code Diagnostics', 'Documentation'],
      },
      {
        index: '03',
        title: 'Agentes Autônomos de IA (Pair Programming)',
        description:
          'Orquestração de agentes inteligentes para atuar em par-programação, auxiliando na execução de refatorações complexas, auditorias de código e automação de testes.',
        tags: ['AI Agents', 'Pair Programming', 'Code Review', 'Automation'],
      },
      {
        index: '04',
        title: 'Engenharia de Software + Visão Sistêmica',
        description:
          'Aplicação do pensamento de processos (Lean, PDCA, 5W2H) somado às residências tecnológicas (Serratec e UECE) para estruturar sistemas sustentáveis e orientados a valor.',
        tags: ['Clean Architecture', 'Systems Thinking', 'Full-Stack'],
      },
    ],
    closingStatement:
      'O diferencial não está nas ferramentas isoladas, mas na combinação entre engenharia de software sólida, raciocínio sistêmico e inteligência artificial aplicada com propósito.',
    nodeDetails: {
      'HUMAN DECISION MAKING': {
        id: 'human-decision-making',
        index: 'CORE // 00',
        name: 'Human Decision Making',
        category: 'Raciocínio & Tomada de Decisão',
        summary:
          'Minha formação em Engenharia de Produção me ensinou a compreender a causa raiz dos problemas, otimizar processos e planejar a arquitetura antes de escrever a primeira linha de código.',
        practicalApplications: [
          'Análise de causa raiz (5W2H) e priorização de regras de negócio',
          'Planejamento de arquitetura sustentável antes da implementação',
          'Ciclo de melhoria contínua (PDCA) e escrita de código limpo',
        ],
        tools: ['Engenharia de Produção', 'Lean Thinking', 'PDCA', 'Systems Thinking'],
      },
      'Software Engineering': {
        id: 'software-engineering',
        index: 'DOMAIN // 01',
        name: 'Software Engineering',
        category: 'Desenvolvimento Full-Stack & POO',
        summary:
          'Fundamentação sólida em POO com Java 11, MySQL e Estruturas de Dados (UECE TIC 12), consolidada na Residência TIC Serratec (790h) e no desenvolvimento web com Angular, React e APIs RESTful em Java (Spring Boot) e Python (Django).',
        practicalApplications: [
          'Interfaces web reativas em Angular, React e TypeScript',
          'APIs RESTful em Java (Spring Boot, Spring Security) e Python (Django)',
          'Clean Architecture, padrões de projeto e Conventional Commits',
        ],
        tools: ['Angular', 'React', 'Spring Boot', 'TypeScript', 'Java', 'Python', 'Django'],
      },
      Data: {
        id: 'data',
        index: 'DOMAIN // 02',
        name: 'Data & Modeling',
        category: 'Modelagem & Bancos de Dados',
        summary:
          'Modelagem relacional e manipulação de bancos de dados PostgreSQL e SQLite em projetos web, garantindo integridade, segurança e eficiência nas consultas.',
        practicalApplications: [
          'Modelagem de esquemas relacionais em PostgreSQL e SQLite',
          'Mapeamento objeto-relacional com JPA / Hibernate e Django ORM',
          'Otimização de consultas SQL e validação de payloads JSON',
        ],
        tools: ['PostgreSQL', 'SQLite', 'SQL', 'JPA/Hibernate', 'Django ORM'],
      },
      Automation: {
        id: 'automation',
        index: 'DOMAIN // 03',
        name: 'Automation (n8n)',
        category: 'Orquestração de Workflows & Webhooks',
        summary:
          'Construção prática de fluxos automatizados no n8n para integração de sistemas, tratamento de webhooks e otimização de rotinas de desenvolvimento e operações.',
        practicalApplications: [
          'Pipelines de integração assíncrona usando n8n',
          'Tratamento e disparo de Webhooks para serviços externos',
          'Otimização de tarefas operacionais e notificações automatizadas',
        ],
        tools: ['n8n', 'Webhooks', 'REST APIs', 'Postman'],
      },
      Agents: {
        id: 'agents',
        index: 'DOMAIN // 04',
        name: 'AI Agents',
        category: 'Agentes de IA & Par-Programação',
        summary:
          'Orquestração e uso de agentes autônomos de IA para atuar como parceiros de pair programming, auxiliando na execução de refatorações, auditorias de código e testes.',
        practicalApplications: [
          'Par-programação assistida por agentes em tempo real',
          'Revisão automatizada de código e detecção de débitos técnicos',
          'Refatoração guiada mantendo arquitetura limpa e testes unitários',
        ],
        tools: ['AI Agents', 'Pair Programming', 'Code Review', 'Agentic Workflows'],
      },
      LLMs: {
        id: 'llms',
        index: 'DOMAIN // 05',
        name: 'LLM Engineering',
        category: 'Modelos de Linguagem na Prática',
        summary:
          'Uso cotidiano de LLMs para acelerar a resolução de problemas complexos, diagnosticar erros de execução em stack traces, estruturar especificações e acelerar entregas.',
        practicalApplications: [
          'Diagnóstico rápido de erros em logs e exceções de runtime',
          'Engenharia de prompt para prototipação técnica e algoritmos',
          'Geração de documentação legível para APIs e especificações',
        ],
        tools: ['LLMs', 'Prompt Engineering', 'Code Diagnostics', 'Documentation'],
      },
      'Systems Thinking': {
        id: 'systems-thinking',
        index: 'DOMAIN // 06',
        name: 'Systems Thinking',
        category: 'Visão Sistêmica de Engenharia',
        summary:
          'Abordagem holística da Engenharia de Produção aplicada ao software: enxergar o código como parte de um sistema vivo onde informação é a matéria-prima e valor entregue ao usuário é o objetivo final.',
        practicalApplications: [
          'Visão holística do ciclo de vida completo do software',
          'Aplicação de PDCA e análise de causa raiz na resolução de bugs',
          'Soluções simples, sustentáveis e fáceis de manter por outros devs',
        ],
        tools: ['Lean Software', 'PDCA', 'Systems Thinking', 'Agile'],
      },
    },
  },
  en: {
    badge: '05 // Artificial Intelligence & Automation',
    title: 'Building with AI, thinking beyond the code',
    manifesto:
      'With my background in Production Engineering and practice in Software Engineering, I see artificial intelligence and automation as living amplification layers of reasoning — adding analytical capacity, efficiency, and intelligent automation directly to the software development lifecycle.',
    features: [
      {
        index: '01',
        title: 'n8n Workflow Automation',
        description:
          'Building automated workflows in n8n for API integration, Webhook triggering and handling, eliminating manual tasks, and optimizing engineering processes.',
        tags: ['n8n', 'Webhooks', 'Workflows', 'API Integration'],
      },
      {
        index: '02',
        title: 'LLMs in Day-to-Day Development',
        description:
          'Daily use of language models as support tools — accelerating log and exception diagnostics, prototyping components, and documenting specifications.',
        tags: ['LLMs', 'Prompt Engineering', 'Code Diagnostics', 'Documentation'],
      },
      {
        index: '03',
        title: 'Autonomous AI Agents (Pair Programming)',
        description:
          'Orchestrating intelligent agents for pair programming, assisting in complex refactoring, code audits, and test automation.',
        tags: ['AI Agents', 'Pair Programming', 'Code Review', 'Automation'],
      },
      {
        index: '04',
        title: 'Software Engineering + Systems Thinking',
        description:
          'Applying process thinking (Lean, PDCA, 5W2H) combined with technology residencies (Serratec and UECE) to structure sustainable, value-driven systems.',
        tags: ['Clean Architecture', 'Systems Thinking', 'Full-Stack'],
      },
    ],
    closingStatement:
      'The differentiator is not in isolated tools, but in the combination of solid software engineering, systems thinking, and purpose-driven applied artificial intelligence.',
    nodeDetails: {
      'HUMAN DECISION MAKING': {
        id: 'human-decision-making',
        index: 'CORE // 00',
        name: 'Human Decision Making',
        category: 'Reasoning & Decision Making',
        summary:
          'My Production Engineering background taught me to understand the root cause of problems, optimize processes, and plan architecture before writing the first line of code.',
        practicalApplications: [
          'Root cause analysis (5W2H) and business rule prioritization',
          'Sustainable architecture planning before implementation',
          'Continuous improvement cycle (PDCA) and clean code writing',
        ],
        tools: ['Production Engineering', 'Lean Thinking', 'PDCA', 'Systems Thinking'],
      },
      'Software Engineering': {
        id: 'software-engineering',
        index: 'DOMAIN // 01',
        name: 'Software Engineering',
        category: 'Full-Stack Development & OOP',
        summary:
          'Solid OOP foundation with Java 11, MySQL, and Data Structures (UECE TIC 12), consolidated at the Serratec TIC Residency (790h) and in web development with Angular, React, and RESTful APIs in Java (Spring Boot) and Python (Django).',
        practicalApplications: [
          'Reactive web interfaces in Angular, React, and TypeScript',
          'RESTful APIs in Java (Spring Boot, Spring Security) and Python (Django)',
          'Clean Architecture, design patterns, and Conventional Commits',
        ],
        tools: ['Angular', 'React', 'Spring Boot', 'TypeScript', 'Java', 'Python', 'Django'],
      },
      Data: {
        id: 'data',
        index: 'DOMAIN // 02',
        name: 'Data & Modeling',
        category: 'Modeling & Databases',
        summary:
          'Relational modeling and PostgreSQL and SQLite database management in web projects, ensuring integrity, security, and query efficiency.',
        practicalApplications: [
          'Relational schema modeling in PostgreSQL and SQLite',
          'Object-relational mapping with JPA / Hibernate and Django ORM',
          'SQL query optimization and JSON payload validation',
        ],
        tools: ['PostgreSQL', 'SQLite', 'SQL', 'JPA/Hibernate', 'Django ORM'],
      },
      Automation: {
        id: 'automation',
        index: 'DOMAIN // 03',
        name: 'Automation (n8n)',
        category: 'Workflow & Webhook Orchestration',
        summary:
          'Practical automated workflow building in n8n for system integration, webhook handling, and optimization of development and operations routines.',
        practicalApplications: [
          'Asynchronous integration pipelines using n8n',
          'Webhook handling and triggering for external services',
          'Operational task optimization and automated notifications',
        ],
        tools: ['n8n', 'Webhooks', 'REST APIs', 'Postman'],
      },
      Agents: {
        id: 'agents',
        index: 'DOMAIN // 04',
        name: 'AI Agents',
        category: 'AI Agents & Pair Programming',
        summary:
          'Orchestration and use of autonomous AI agents as pair programming partners, assisting in refactoring, code audits, and testing.',
        practicalApplications: [
          'Real-time agent-assisted pair programming',
          'Automated code review and technical debt detection',
          'Guided refactoring maintaining clean architecture and unit tests',
        ],
        tools: ['AI Agents', 'Pair Programming', 'Code Review', 'Agentic Workflows'],
      },
      LLMs: {
        id: 'llms',
        index: 'DOMAIN // 05',
        name: 'LLM Engineering',
        category: 'Language Models in Practice',
        summary:
          'Daily use of LLMs to accelerate complex problem-solving, diagnose runtime errors in stack traces, structure specifications, and speed up deliveries.',
        practicalApplications: [
          'Rapid error diagnosis in runtime logs and exceptions',
          'Prompt engineering for technical prototyping and algorithms',
          'Readable documentation generation for APIs and specifications',
        ],
        tools: ['LLMs', 'Prompt Engineering', 'Code Diagnostics', 'Documentation'],
      },
      'Systems Thinking': {
        id: 'systems-thinking',
        index: 'DOMAIN // 06',
        name: 'Systems Thinking',
        category: 'Engineering Systems Thinking',
        summary:
          'Holistic Production Engineering approach applied to software: seeing code as part of a living system where information is the raw material and user-delivered value is the ultimate goal.',
        practicalApplications: [
          'Holistic view of the complete software lifecycle',
          'PDCA application and root cause analysis in bug resolution',
          'Simple, sustainable solutions easy for other devs to maintain',
        ],
        tools: ['Lean Software', 'PDCA', 'Systems Thinking', 'Agile'],
      },
    },
  },
};

// Backward-compatible export
export const AI_MANIFESTO_DATA: AiManifestoData = AI_I18N['pt-BR'];

export function getAiData(lang: SupportedLang): AiManifestoData {
  return AI_I18N[lang];
}
