import { SupportedLang } from '@core';

export interface MetricCardInfo {
  readonly code: string;
  readonly name: string;
  readonly description: string;
  readonly target: string;
  readonly unit: string;
}

export interface TelemetryModalLabels {
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly liveStatus: string;
  readonly engineStatus: string;
  readonly closeAria: string;
  readonly tabs: {
    readonly overview: string;
    readonly vitals: string;
    readonly events: string;
    readonly stream: string;
  };
  readonly overview: {
    readonly healthScoreTitle: string;
    readonly healthScoreDesc: string;
    readonly quickStatsTitle: string;
    readonly architectureTitle: string;
    readonly architectureBadge: string;
    readonly architectureP1: string;
    readonly architectureP2: string;
    readonly privacyBadge: string;
    readonly privacyDesc: string;
  };
  readonly vitals: {
    readonly title: string;
    readonly description: string;
    readonly lcp: MetricCardInfo;
    readonly cls: MetricCardInfo;
    readonly inp: MetricCardInfo;
    readonly ttfb: MetricCardInfo;
    readonly memory: MetricCardInfo;
    readonly longTasks: MetricCardInfo;
    readonly goodLabel: string;
    readonly needsImprovementLabel: string;
    readonly poorLabel: string;
    readonly resampleMemoryBtn: string;
  };
  readonly events: {
    readonly title: string;
    readonly description: string;
    readonly totalConversions: string;
    readonly cvDownloadsTitle: string;
    readonly trackFullstack: string;
    readonly trackBackend: string;
    readonly trackFrontend: string;
    readonly whatsappTitle: string;
    readonly whatsappDesc: string;
    readonly distributionTitle: string;
    readonly lastEventCaptured: string;
    readonly noEventsYet: string;
  };
  readonly stream: {
    readonly title: string;
    readonly description: string;
    readonly terminalTitle: string;
    readonly emptyLogs: string;
    readonly simulatorTitle: string;
    readonly simulateFsBtn: string;
    readonly simulateBeBtn: string;
    readonly simulateFeBtn: string;
    readonly simulateWaBtn: string;
    readonly copyJsonBtn: string;
    readonly copiedJsonBtn: string;
    readonly resetBtn: string;
    readonly resetSuccess: string;
  };
}

export const TELEMETRY_MODAL_LABELS: Record<SupportedLang, TelemetryModalLabels> = {
  'pt-BR': {
    eyebrow: 'OBSERVABILIDADE NATIVA · RUM & MOTOR DE CONVERSÃO',
    title: 'Console de Telemetria em Tempo Real',
    subtitle:
      'Monitoramento de Core Web Vitals via PerformanceObserver e rastreamento reativo de eventos sem bibliotecas pesadas de terceiros.',
    liveStatus: 'TELEMETRIA ATIVA',
    engineStatus: 'MOTOR DE EXECUÇÃO',
    closeAria: 'Fechar console de telemetria',
    tabs: {
      overview: 'Visão Geral & Saúde',
      vitals: 'Core Web Vitals (RUM)',
      events: 'Rastreamento de Eventos',
      stream: 'Console & Simulador',
    },
    overview: {
      healthScoreTitle: 'Índice de Performance & Estabilidade',
      healthScoreDesc:
        'Calculado dinamicamente a partir dos limites oficiais do Google Web Vitals para LCP, CLS e INP.',
      quickStatsTitle: 'Métricas Vitais Instantâneas',
      architectureTitle: 'Arquitetura de Observabilidade Client-Side',
      architectureBadge: '0 KB DE BLOATWARE · 100% NATIVO',
      architectureP1:
        'Implementado diretamente sobre a API nativa de PerformanceObserver do navegador, integrado aos Signals reativos do Angular 22 com ChangeDetectionStrategy.OnPush.',
      architectureP2:
        'Zero cookies de rastreamento invasivo, zero scripts lentos de terceiros. Alta fidelidade analítica em estrita conformidade com a LGPD e GDPR.',
      privacyBadge: 'Privacidade em Primeiro Lugar',
      privacyDesc:
        'Todos os dados de navegação e cliques de conversão são consolidados no localStorage e despachados apenas para listeners locais de eventos.',
    },
    vitals: {
      title: 'Real User Monitoring (RUM) em Tempo Real',
      description:
        'Medições capturadas diretamente da sessão do seu navegador durante a navegação por este portfólio.',
      lcp: {
        code: 'LCP',
        name: 'Largest Contentful Paint',
        description: 'Tempo até o maior elemento de conteúdo (hero canvas/texto) ser renderizado na tela.',
        target: '< 2.5s (Ideal)',
        unit: 'ms',
      },
      cls: {
        code: 'CLS',
        name: 'Cumulative Layout Shift',
        description: 'Estabilidade visual durante o carregamento. Pontuação zero garante ausência total de pulos visuais.',
        target: '< 0.10 (Ideal)',
        unit: '',
      },
      inp: {
        code: 'INP',
        name: 'Interaction to Next Paint',
        description: 'Latência de resposta da interface aos cliques e interações do usuário.',
        target: '< 200ms (Ideal)',
        unit: 'ms',
      },
      ttfb: {
        code: 'TTFB',
        name: 'Time to First Byte',
        description: 'Tempo de entrega do primeiro byte da resposta servido pela rede global da Vercel Edge.',
        target: '< 800ms (Ideal)',
        unit: 'ms',
      },
      memory: {
        code: 'RAM',
        name: 'Consumo de Heap JS',
        description: 'Memória ativa alocada na V8 para renderizar a árvore Angular e o canvas WebGL Three.js.',
        target: '< 50 MB',
        unit: 'MB',
      },
      longTasks: {
        code: 'TASKS',
        name: 'Tarefas Longas (>50ms)',
        description: 'Contador de bloqueios da thread principal. Zero tarefas garante 60 a 120 FPS fluidos.',
        target: '0 bloqueios',
        unit: '',
      },
      goodLabel: 'Ótimo',
      needsImprovementLabel: 'Ajustável',
      poorLabel: 'Degradado',
      resampleMemoryBtn: 'Re-amostrar Memória',
    },
    events: {
      title: 'Métricas de Conversão & Interesse Recrutador',
      description:
        'Acompanhamento transparente das interações com currículos técnicos e canais diretos de contato.',
      totalConversions: 'Total de Ações de Conversão',
      cvDownloadsTitle: 'Downloads de Currículo por Especialidade',
      trackFullstack: 'Currículo Full-Stack',
      trackBackend: 'Currículo Back-End (.NET / Java)',
      trackFrontend: 'Currículo Front-End (Angular / React)',
      whatsappTitle: 'Iniciações Diretas via WhatsApp',
      whatsappDesc: 'Cliques nos CTAs de contato imediato disparados pelo visitante.',
      distributionTitle: 'Distribuição Percentual de Downloads',
      lastEventCaptured: 'Último Evento Capturado no Pipeline:',
      noEventsYet: 'Nenhum evento registrado nesta sessão ainda.',
    },
    stream: {
      title: 'Console de Eventos & Simulador Interativo',
      description:
        'Inspecione os logs estruturados em tempo real ou simule eventos para ver a reatividade dos Signals do Angular em ação imediata.',
      terminalTitle: 'Stream de Eventos (FIFO Buffer - Últimos 25 registros)',
      emptyLogs: 'Buffer pronto. Dispare uma interação para visualizar o log.',
      simulatorTitle: 'Simulador de Eventos de Conversão',
      simulateFsBtn: '+ Simular Download Full-Stack',
      simulateBeBtn: '+ Simular Download Back-End',
      simulateFeBtn: '+ Simular Download Front-End',
      simulateWaBtn: '+ Simular Clique WhatsApp',
      copyJsonBtn: 'Copiar Diagnóstico (JSON)',
      copiedJsonBtn: 'Copiado para o Clipboard!',
      resetBtn: 'Zerar Contadores da Sessão',
      resetSuccess: 'Contadores zerados com sucesso.',
    },
  },
  en: {
    eyebrow: 'NATIVE OBSERVABILITY · RUM & CONVERSION ENGINE',
    title: 'Real-Time Telemetry Console',
    subtitle:
      'Core Web Vitals monitoring via PerformanceObserver and reactive event telemetry without bloated third-party trackers.',
    liveStatus: 'TELEMETRY LIVE',
    engineStatus: 'EXECUTION ENGINE',
    closeAria: 'Close telemetry console',
    tabs: {
      overview: 'Overview & Health',
      vitals: 'Core Web Vitals (RUM)',
      events: 'Event Tracking',
      stream: 'Console & Simulator',
    },
    overview: {
      healthScoreTitle: 'Performance & Stability Score',
      healthScoreDesc:
        'Dynamically calculated from official Google Web Vitals thresholds for LCP, CLS, and INP.',
      quickStatsTitle: 'Instant Performance Vitals',
      architectureTitle: 'Client-Side Observability Architecture',
      architectureBadge: '0 KB BLOATWARE · 100% NATIVE',
      architectureP1:
        'Directly engineered atop the browser-native PerformanceObserver API, bound to Angular 22 reactive Signals with ChangeDetectionStrategy.OnPush.',
      architectureP2:
        'Zero invasive tracking cookies, zero third-party latency overhead. High-fidelity telemetry in strict compliance with GDPR and LGPD regulations.',
      privacyBadge: 'Privacy by Design',
      privacyDesc:
        'All performance and conversion telemetry stays consolidated in local storage and dispatches solely to local event listeners.',
    },
    vitals: {
      title: 'Live Real User Monitoring (RUM)',
      description:
        'Metrics collected directly from your browser session while navigating this portfolio.',
      lcp: {
        code: 'LCP',
        name: 'Largest Contentful Paint',
        description: 'Time until the largest content element (hero canvas/text) is rendered on screen.',
        target: '< 2.5s (Optimal)',
        unit: 'ms',
      },
      cls: {
        code: 'CLS',
        name: 'Cumulative Layout Shift',
        description: 'Visual stability score. Zero score ensures absolute absence of unexpected layout jumps.',
        target: '< 0.10 (Optimal)',
        unit: '',
      },
      inp: {
        code: 'INP',
        name: 'Interaction to Next Paint',
        description: 'Responsiveness latency of interface elements to user clicks and taps.',
        target: '< 200ms (Optimal)',
        unit: 'ms',
      },
      ttfb: {
        code: 'TTFB',
        name: 'Time to First Byte',
        description: 'Response time for the initial document byte delivered via Vercel Edge Network.',
        target: '< 800ms (Optimal)',
        unit: 'ms',
      },
      memory: {
        code: 'RAM',
        name: 'JS Heap Memory',
        description: 'Active memory allocated in the V8 engine to power Angular and the Three.js WebGL canvas.',
        target: '< 50 MB',
        unit: 'MB',
      },
      longTasks: {
        code: 'TASKS',
        name: 'Long Tasks (>50ms)',
        description: 'Count of main-thread execution stalls. Zero tasks ensures continuous 60-120 FPS fluidity.',
        target: '0 stalls',
        unit: '',
      },
      goodLabel: 'Optimal',
      needsImprovementLabel: 'Needs Work',
      poorLabel: 'Degraded',
      resampleMemoryBtn: 'Resample Memory',
    },
    events: {
      title: 'Conversion Metrics & Recruiter Engagement',
      description:
        'Transparent telemetry tracking interactions with role-tailored resumes and direct outreach channels.',
      totalConversions: 'Total Tracked Conversions',
      cvDownloadsTitle: 'Resume Downloads by Track',
      trackFullstack: 'Full-Stack Resume',
      trackBackend: 'Back-End (.NET / Java) Resume',
      trackFrontend: 'Front-End (Angular / React) Resume',
      whatsappTitle: 'Direct WhatsApp Inquiries',
      whatsappDesc: 'Direct conversation triggers initiated from hero, header, or contact sections.',
      distributionTitle: 'Percentage Distribution of Downloads',
      lastEventCaptured: 'Latest Pipeline Event:',
      noEventsYet: 'No interactions captured in this session yet.',
    },
    stream: {
      title: 'Event Stream Console & Interactive Simulator',
      description:
        'Inspect structured telemetry events in real-time or simulate actions to witness Angular Signal reactivity with zero latency.',
      terminalTitle: 'Event Stream Log (FIFO Buffer - Last 25 entries)',
      emptyLogs: 'Buffer standing by. Interact with the page to stream events.',
      simulatorTitle: 'Conversion Event Simulator',
      simulateFsBtn: '+ Simulate Full-Stack Download',
      simulateBeBtn: '+ Simulate Back-End Download',
      simulateFeBtn: '+ Simulate Front-End Download',
      simulateWaBtn: '+ Simulate WhatsApp Click',
      copyJsonBtn: 'Copy Diagnostics (JSON)',
      copiedJsonBtn: 'Copied to Clipboard!',
      resetBtn: 'Reset Session Counters',
      resetSuccess: 'Session counters reset successfully.',
    },
  },
  es: {
    eyebrow: 'OBSERVABILIDAD NATIVA · RUM & MOTOR DE CONVERSIÓN',
    title: 'Consola de Telemetría en Tiempo Real',
    subtitle:
      'Monitoreo de Core Web Vitals vía PerformanceObserver y seguimiento reactivo de eventos sin rastreadores invasivos de terceros.',
    liveStatus: 'TELEMETRÍA ACTIVA',
    engineStatus: 'MOTOR DE EJECUCIÓN',
    closeAria: 'Cerrar consola de telemetría',
    tabs: {
      overview: 'Visión General & Salud',
      vitals: 'Core Web Vitals (RUM)',
      events: 'Seguimiento de Eventos',
      stream: 'Consola & Simulador',
    },
    overview: {
      healthScoreTitle: 'Índice de Rendimiento & Estabilidad',
      healthScoreDesc:
        'Calculado dinámicamente a partir de los umbrales oficiales de Google Web Vitals para LCP, CLS e INP.',
      quickStatsTitle: 'Métricas Vitales Instantáneas',
      architectureTitle: 'Arquitectura de Observabilidad Client-Side',
      architectureBadge: '0 KB DE BLOATWARE · 100% NATIVO',
      architectureP1:
        'Desarrollado sobre la API nativa PerformanceObserver del navegador, integrado con los Signals reactivos de Angular 22 con ChangeDetectionStrategy.OnPush.',
      architectureP2:
        'Cero cookies invasivas, cero scripts pesados de terceros. Alta fidelidad analítica cumpliendo rigurosamente con RGPD y LGPD.',
      privacyBadge: 'Privacidad por Diseño',
      privacyDesc:
        'Todos los datos permanecen consolidados en el almacenamiento local y se despachan únicamente a listeners locales de eventos.',
    },
    vitals: {
      title: 'Real User Monitoring (RUM) en Vivo',
      description:
        'Mediciones capturadas directamente desde la sesión de su navegador al navegar por este portafolio.',
      lcp: {
        code: 'LCP',
        name: 'Largest Contentful Paint',
        description: 'Tiempo hasta que el elemento de contenido principal se dibuja en pantalla.',
        target: '< 2.5s (Ideal)',
        unit: 'ms',
      },
      cls: {
        code: 'CLS',
        name: 'Cumulative Layout Shift',
        description: 'Puntuación de estabilidad visual. Cero saltos garantiza una experiencia fluida sin desajustes.',
        target: '< 0.10 (Ideal)',
        unit: '',
      },
      inp: {
        code: 'INP',
        name: 'Interaction to Next Paint',
        description: 'Latencia de respuesta de la interfaz frente a clics e interacciones del usuario.',
        target: '< 200ms (Ideal)',
        unit: 'ms',
      },
      ttfb: {
        code: 'TTFB',
        name: 'Time to First Byte',
        description: 'Tiempo de respuesta del documento inicial servido por la red Vercel Edge.',
        target: '< 800ms (Ideal)',
        unit: 'ms',
      },
      memory: {
        code: 'RAM',
        name: 'Consumo de Heap JS',
        description: 'Memoria asignada en V8 para Angular y el lienzo WebGL con Three.js.',
        target: '< 50 MB',
        unit: 'MB',
      },
      longTasks: {
        code: 'TASKS',
        name: 'Tareas Largas (>50ms)',
        description: 'Bloqueos de la hebra principal. Cero tareas asegura 60-120 FPS sin caídas.',
        target: '0 bloqueos',
        unit: '',
      },
      goodLabel: 'Óptimo',
      needsImprovementLabel: 'Ajustable',
      poorLabel: 'Degradado',
      resampleMemoryBtn: 'Re-muestrear Memoria',
    },
    events: {
      title: 'Métricas de Conversión e Interés',
      description:
        'Seguimiento transparente de descargas de currículum técnico y canales directos de contacto.',
      totalConversions: 'Total de Conversiones Registradas',
      cvDownloadsTitle: 'Descargas de CV por Especialidad',
      trackFullstack: 'Currículum Full-Stack',
      trackBackend: 'Currículum Back-End (.NET / Java)',
      trackFrontend: 'Currículum Front-End (Angular / React)',
      whatsappTitle: 'Contactos Directos por WhatsApp',
      whatsappDesc: 'Clics en botones de contacto inmediato iniciados por el visitante.',
      distributionTitle: 'Distribución Porcentual de Descargas',
      lastEventCaptured: 'Último Evento en Pipeline:',
      noEventsYet: 'No hay interacciones registradas en esta sesión aún.',
    },
    stream: {
      title: 'Consola de Eventos & Simulador Interactivo',
      description:
        'Inspeccione los registros de telemetría en tiempo real o simule acciones para comprobar la reactividad de Signals.',
      terminalTitle: 'Stream de Registros (Buffer FIFO - Últimos 25)',
      emptyLogs: 'Buffer listo. Realice una interacción para ver el registro.',
      simulatorTitle: 'Simulador de Eventos de Conversión',
      simulateFsBtn: '+ Simular Descarga Full-Stack',
      simulateBeBtn: '+ Simular Descarga Back-End',
      simulateFeBtn: '+ Simular Descarga Front-End',
      simulateWaBtn: '+ Simular Clic WhatsApp',
      copyJsonBtn: 'Copiar Diagnóstico (JSON)',
      copiedJsonBtn: '¡Copiado al Portapapeles!',
      resetBtn: 'Reiniciar Contadores de Sesión',
      resetSuccess: 'Contadores reiniciados con éxito.',
    },
  },
};

