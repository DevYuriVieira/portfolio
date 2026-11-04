import { SupportedLang } from '@core';

export interface AdrConsequences {
  readonly positive: readonly string[];
  readonly negative: readonly string[];
}

export interface AdrRecord {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly status: 'Accepted' | 'Superseded' | 'Proposed';
  readonly statusLabel: string;
  readonly date: string;
  readonly deciders: string;
  readonly category: string;
  readonly context: string;
  readonly decision: string;
  readonly consequences: AdrConsequences;
  readonly alternatives: readonly string[];
}

export interface AdrModalLabels {
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly searchPlaceholder: string;
  readonly searchAriaLabel: string;
  readonly copyMarkdown: string;
  readonly copied: string;
  readonly copyAria: string;
  readonly copiedAria: string;
  readonly closeAria: string;
  readonly navListAria: string;
  readonly emptySearch: string;
  readonly dateLabel: string;
  readonly categoryLabel: string;
  readonly decidersLabel: string;
  readonly section1Title: string;
  readonly section2Title: string;
  readonly section3Title: string;
  readonly positiveTitle: string;
  readonly negativeTitle: string;
  readonly section4Title: string;
}

export const ADR_MODAL_LABELS: Record<SupportedLang, AdrModalLabels> = {
  'pt-BR': {
    eyebrow: 'ARQUITETURA FRONT-END & PADRÕES DE QUALIDADE',
    title: 'Registros de Decisões Arquiteturais (ADRs)',
    subtitle:
      'RFCs formais de engenharia documentando trade-offs técnicos, invariantes de arquitetura e princípios inegociáveis de design deste portfólio.',
    searchPlaceholder: 'Filtrar ADRs por palavra-chave...',
    searchAriaLabel: 'Filtrar Registros de Decisões Arquiteturais',
    copyMarkdown: 'Copiar Markdown',
    copied: 'Copiado!',
    copyAria: 'Copiar ADR atual como Markdown',
    copiedAria: 'ADR copiado para a área de transferência',
    closeAria: 'Fechar modal de Registros de Decisões Arquiteturais',
    navListAria: 'Lista de Registros de Decisões Arquiteturais',
    emptySearch: 'Nenhum registro arquitetural corresponde aos seus critérios de busca.',
    dateLabel: 'Data:',
    categoryLabel: 'Categoria:',
    decidersLabel: 'DECISORES & GOVERNANÇA:',
    section1Title: '1. Contexto & Definição do Problema',
    section2Title: '2. Decisão Arquitetural',
    section3Title: '3. Consequências & Trade-offs',
    positiveTitle: 'Invariantes Positivas (Ganhos)',
    negativeTitle: 'Trade-offs & Restrições',
    section4Title: '4. Alternativas Consideradas & Justificativa de Rejeição',
  },
  en: {
    eyebrow: 'FRONT-END ARCHITECTURE & QUALITY STANDARDS',
    title: 'Architectural Decision Records (ADRs)',
    subtitle:
      'Formal engineering RFCs documenting technical trade-offs, architecture invariants, and non-negotiable design principles of this portfolio.',
    searchPlaceholder: 'Filter ADRs by keyword...',
    searchAriaLabel: 'Filter Architectural Decision Records',
    copyMarkdown: 'Copy Markdown',
    copied: 'Copied!',
    copyAria: 'Copy current ADR as Markdown',
    copiedAria: 'ADR copied to clipboard',
    closeAria: 'Close Architectural Decision Records modal',
    navListAria: 'Architectural Decision Records list',
    emptySearch: 'No architectural records match your filter criteria.',
    dateLabel: 'Date:',
    categoryLabel: 'Category:',
    decidersLabel: 'DECIDERS & GOVERNANCE:',
    section1Title: '1. Context & Problem Statement',
    section2Title: '2. Architectural Decision',
    section3Title: '3. Consequences & Trade-offs',
    positiveTitle: 'Positive Invariants (Gains)',
    negativeTitle: 'Trade-offs & Constraints',
    section4Title: '4. Alternatives Considered & Rejection Rationale',
  },
  es: {
    eyebrow: 'ARQUITECTURA FRONT-END & ESTÁNDARES DE CALIDAD',
    title: 'Registros de Decisiones Arquitectónicas (ADRs)',
    subtitle:
      'RFCs formales de ingeniería que documentan trade-offs técnicos, invariantes de arquitectura y principios innegociables de diseño de este portafolio.',
    searchPlaceholder: 'Filtrar ADRs por palabra clave...',
    searchAriaLabel: 'Filtrar Registros de Decisiones Arquitectónicas',
    copyMarkdown: 'Copiar Markdown',
    copied: '¡Copiado!',
    copyAria: 'Copiar ADR actual como Markdown',
    copiedAria: 'ADR copiado al portapapeles',
    closeAria: 'Cerrar modal de Registros de Decisiones Arquitectónicas',
    navListAria: 'Lista de Registros de Decisiones Arquitectónicas',
    emptySearch: 'Ningún registro arquitectónico coincide con los criterios de búsqueda.',
    dateLabel: 'Fecha:',
    categoryLabel: 'Categoría:',
    decidersLabel: 'DECISORES & GOBERNANZA:',
    section1Title: '1. Contexto & Definición del Problema',
    section2Title: '2. Decisión Arquitectónica',
    section3Title: '3. Consecuencias & Trade-offs',
    positiveTitle: 'Invariantes Positivas (Ganancias)',
    negativeTitle: 'Trade-offs & Restricciones',
    section4Title: '4. Alternativas Consideradas & Justificación de Rechazo',
  },
};

export const PORTFOLIO_ADRS_I18N: Record<SupportedLang, readonly AdrRecord[]> = {
  'pt-BR': [
    {
      id: 'adr-001',
      code: 'ADR-001',
      title: 'Arquitetura de Estado Reativo Puro via Angular Signals e Estratégia OnPush',
      status: 'Accepted',
      statusLabel: 'Aceito',
      date: '2026-02',
      deciders: 'Yuri Vieira Teixeira (Software Engineer)',
      category: 'Arquitetura',
      context:
        'Aplicações Angular historicamente dependiam do Zone.js para interceptar APIs assíncronas e disparar ciclos de detecção de mudanças top-down na árvore de componentes. Em interfaces interativas em tempo real com cenas WebGL Three.js e interações rápidas, a reavaliação top-down consome tempo de frame precioso e gera microtravamentos.',
      decision:
        'Padronizar exclusivamente em Angular Signals de granularidade fina (signal, computed, effect) combinados com ChangeDetectionStrategy.OnPush em todos os componentes. Todas as derivações de estado são executadas como grafos de dependência puros com propagação de notificações O(1), eliminando checagens redundantes.',
      consequences: {
        positive: [
          'Zero ciclos desnecessários de verificação no template durante quadros de animação',
          'Fluxo unidirecional determinístico de dados com zero erros de change-after-checked',
          'Interoperabilidade direta com as primitivas zoneless nativas do Angular',
          'Pegada de memória mínima e memoização sem esforço de derivações computacionais',
        ],
        negative: [
          'Exige disciplina rigorosa para evitar mutação de estado fora das fronteiras de signals',
          'Descarta data bindings legados bidirecionais (banana-in-a-box) em formulários compostos',
        ],
      },
      alternatives: [
        'NgRx Store / ComponentStore: Rejeitado devido ao boilerplate excessivo e peso adicional de bundle para uma SPA.',
        'Serviços baseados em RxJS Subject: Rejeitado em favor dos Signals pelo menor custo cognitivo e melhor ergonomia nos templates.',
      ],
    },
    {
      id: 'adr-002',
      code: 'ADR-002',
      title: 'Design Tokens CSS Zero-Runtime e Encapsulamento Modular BEM',
      status: 'Accepted',
      statusLabel: 'Aceito',
      date: '2026-02',
      deciders: 'Yuri Vieira Teixeira (Software Engineer)',
      category: 'Estilização',
      context:
        'Soluções CSS-in-JS e utilitários pesados introduzem custo de parsing de script em tempo de execução, recálculos de tags style e acoplamento a ferramentas. Um sistema web de alto nível deve manter transições instantâneas de temas, aceleração por hardware e conformidade estrita com contraste WCAG 2.1 AAA sem sobrecarga de execução de scripts.',
      decision:
        'Adotar uma arquitetura de design tokens em duas camadas: mapas de tokens SCSS em tempo de compilação gerando variáveis CSS nativas (--bg-*, --text-*, --space-*), aplicadas sob rigorosa metodologia BEM (Block Element Modifier).',
      consequences: {
        positive: [
          'Zero penalidade de runtime JavaScript para renderização de layout e resolução de estilos',
          'Transições de propriedades CSS nativas aceleradas por hardware a 120 FPS cravados',
          'Troca universal de tokens de alto contraste WCAG 2.1 AAA via alternância de classe raiz',
          'Máxima manutenibilidade sem lock-in em frameworks de terceiros ou inchaço de estilos',
        ],
        negative: [
          'Exige higiene rigorosa na nomenclatura de classes para evitar divergência semântica',
          'Mapeamento inicial de design tokens requer curadoria arquitetural cuidadosa',
        ],
      },
      alternatives: [
        'Tailwind CSS: Rejeitado para garantir controle total sobre tokens CSS puros e zero dependência de abstrações utilitárias.',
        'Emotion / Styled-Components: Rejeitado pela latência de injeção dinâmica de estilos no DOM e custo no bundle.',
      ],
    },
    {
      id: 'adr-003',
      code: 'ADR-003',
      title: 'Engenharia de Qualidade Determinística com Vitest e Testes Baseados em Propriedades',
      status: 'Accepted',
      statusLabel: 'Aceito',
      date: '2026-03',
      deciders: 'Yuri Vieira Teixeira (Software Engineer)',
      category: 'Qualidade',
      context:
        'Testes unitários tradicionais frequentemente validam detalhes triviais de implementação em vez de invariantes matemáticas, limites de erro e contratos de acessibilidade. Isso gera estatísticas enganosas de cobertura enquanto deixa fluxos reais vulneráveis a regressões.',
      decision:
        'Adotar o Vitest com execução ESM pura, cobrindo lógica de domínio, grafos de signals reativos, interações de acessibilidade (foco, regiões ARIA live) e catálogos de internacionalização com zero testes instáveis (flaky).',
      consequences: {
        positive: [
          'Ciclos de execução de testes sub-segundo em mais de 80 suítes unitárias completas',
          'Taxa de 100% de aprovação nos testes automatizados verificada antes de qualquer deploy',
          'Isolamento estrito de APIs de navegador (PerformanceObserver, WebGL, ServiceWorker)',
          'Feedback imediato para o desenvolvedor durante pair programming local e refatoração',
        ],
        negative: [
          'Demanda disciplina em mocks de globais de navegador no ambiente de testes Node',
          'Exige maior rigor inicial de autoria em comparação a testes rasos de renderização',
        ],
      },
      alternatives: [
        'Jest com ts-jest: Rejeitado devido ao tempo lento de compilação ESM e fragilidade com polyfills.',
        'Cypress Component Runner: Rejeitado para testes unitários devido ao overhead desnecessário de subir instâncias do navegador.',
      ],
    },
    {
      id: 'adr-004',
      code: 'ADR-004',
      title: 'Pipeline de Renderização WebGL Desacoplado com Gating por IntersectionObserver e Orçamento de Frames',
      status: 'Accepted',
      statusLabel: 'Aceito',
      date: '2026-03',
      deciders: 'Yuri Vieira Teixeira (Software Engineer)',
      category: 'Performance',
      context:
        'Integrar telas 3D interativas (Neural Canvas Three.js) com seções densas de conteúdo pode saturar a thread principal e drenar bateria de dispositivos móveis se o loop de requestAnimationFrame continuar rodando fora do campo de visão.',
      decision:
        'Executar os loops do Three.js totalmente fora da zona do Angular (runOutsideAngular). Suspender as chamadas de renderização via IntersectionObserver quando o canvas rolar para fora da tela, e desativar o WebGL 3D em telas mobile (<768px).',
      consequences: {
        positive: [
          'Garante orçamento de 60 a 120 FPS cravados em hardware desktop',
          'Zero consumo de GPU e economia total de bateria quando o canvas está fora da tela',
          'Assegura Core Web Vitals instantâneos (LCP < 0.6s) em dispositivos móveis',
          'Descarte explícito de recursos (geometria, materiais, texturas) prevenindo vazamento de VRAM',
        ],
        negative: [
          'Requer manter duas camadas visuais distintas (WebGL 3D versus fallback estático)',
          'Exige gerenciamento manual na destruição do ciclo de vida dos componentes',
        ],
      },
      alternatives: [
        'CSS 3D Transforms: Rejeitado pela impossibilidade de renderizar redes de partículas matemáticas dinâmicas.',
        'Canvas 2D HTML5: Rejeitado pela incapacidade de utilizar shaders de GPU para efeitos de profundidade.',
      ],
    },
    {
      id: 'adr-005',
      code: 'ADR-005',
      title: 'Arquitetura Web Progressiva Offline-First com Orçamento de Bytes e Atualizações Silenciosas',
      status: 'Accepted',
      statusLabel: 'Aceito',
      date: '2026-03',
      deciders: 'Yuri Vieira Teixeira (Software Engineer)',
      category: 'Resiliência',
      context:
        'Aplicações web modernas precisam oferecer carregamento instantâneo e resiliência total contra falhas de rede, conexões móveis instáveis e latências de CDN.',
      decision:
        'Implementar o Service Worker nativo do Angular (@angular/service-worker) com estratégia dual de cache: Cache-First para ativos imutáveis com hash e Network-First para manifestos dinâmicos, com polling silencioso de atualizações a cada 5 minutos.',
      consequences: {
        positive: [
          'Visitas recorrentes em menos de 100ms servidas diretamente pelo cache do service worker',
          'Atualizações de versão do cliente sem downtime e de forma transparente ao usuário',
          'Instalabilidade PWA completa em sistemas operacionais desktop e mobile',
          'Navegação e consulta de cases totalmente funcionais sem conexão com a internet',
        ],
        negative: [
          'Invalidação de cache exige hashes estritos nos nomes de arquivos em produção',
          'Ciclos de vida de service worker introduzem etapas assíncronas de upgrade',
        ],
      },
      alternatives: [
        'Script customizado com Workbox: Rejeitado para evitar dependências externas e usar a integração nativa do Angular CLI.',
        'Apenas headers HTTP de cache: Rejeitado pela incapacidade de funcionar offline ou permitir instalação como PWA.',
      ],
    },
  ],
  en: [
    {
      id: 'adr-001',
      code: 'ADR-001',
      title: 'Pure Reactive State Architecture via Angular Signals and OnPush Strategy',
      status: 'Accepted',
      statusLabel: 'Accepted',
      date: '2026-02',
      deciders: 'Yuri Vieira Teixeira (Software Engineer)',
      category: 'Architecture',
      context:
        'Angular applications historically depended on Zone.js to intercept asynchronous APIs and execute top-down change detection cycles across the component tree. In real-time interactive interfaces featuring Three.js WebGL scenes and rapid user interactions, top-down tree re-evaluation consumes valuable frame budget and creates micro-stutters.',
      decision:
        'Standardize exclusively on fine-grained Angular Signals (signal, computed, effect) paired with ChangeDetectionStrategy.OnPush across all component trees. All state derivations are executed as pure dependency graphs with O(1) notification propagation, eliminating redundant checks.',
      consequences: {
        positive: [
          'Zero unnecessary template dirty checking cycles during animation frames',
          'Deterministic unidirectional data flow with zero change-after-checked errors',
          'Direct interoperability with upcoming zoneless Angular runtime primitives',
          'Minimal memory footprint and effortless memoization of expensive derivations',
        ],
        negative: [
          'Requires rigorous discipline to avoid state mutation outside of signal boundaries',
          'Precludes legacy two-way banana-in-a-box bindings in complex compound inputs',
        ],
      },
      alternatives: [
        'NgRx Store / ComponentStore: Rejected due to significant boilerplate and bundle overhead for a single-page application.',
        'RxJS Subject-driven services: Rejected in favor of Signals for lower cognitive load and seamless template ergonomics.',
      ],
    },
    {
      id: 'adr-002',
      code: 'ADR-002',
      title: 'Zero-Runtime CSS Design Tokens and BEM Modular Encapsulation',
      status: 'Accepted',
      statusLabel: 'Accepted',
      date: '2026-02',
      deciders: 'Yuri Vieira Teixeira (Software Engineer)',
      category: 'Styling',
      context:
        'CSS-in-JS solutions and heavyweight utility abstractions introduce runtime script parsing costs, style tag recalculations, and build lock-in. A staff-grade web system must maintain instantaneous theme switching, hardware acceleration, and strict WCAG 2.1 AAA contrast without incurring script evaluation overhead.',
      decision:
        'Adopt a dual-tier design token architecture: compile-time SCSS token maps generating native CSS custom properties (--bg-*, --text-*, --space-*), enforced through strict BEM (Block Element Modifier) component scoping.',
      consequences: {
        positive: [
          'Zero JavaScript runtime penalty for layout rendering and style resolution',
          'Hardware-accelerated CSS custom property transitions at locked 120 FPS',
          'Universal WCAG 2.1 AAA high-contrast token swapping via root class toggles',
          'Maximum maintainability without vendor framework lock-in or style bloat',
        ],
        negative: [
          'Requires diligent class naming hygiene to avoid semantic divergence',
          'Initial design token mapping requires thoughtful system-level curation',
        ],
      },
      alternatives: [
        'Tailwind CSS: Rejected to guarantee full vanilla CSS token control and zero utility abstraction lock-in.',
        'Emotion / Styled-Components: Rejected due to runtime DOM style injection latency and bundle tax.',
      ],
    },
    {
      id: 'adr-003',
      code: 'ADR-003',
      title: 'Deterministic Quality Engineering with Vitest and Property-Based Regressions',
      status: 'Accepted',
      statusLabel: 'Accepted',
      date: '2026-03',
      deciders: 'Yuri Vieira Teixeira (Software Engineer)',
      category: 'Quality',
      context:
        'Traditional unit tests often assert trivial implementation details rather than mathematical invariants, error boundaries, and accessibility contracts. This creates deceptive coverage statistics while leaving user-facing workflows vulnerable to regressions.',
      decision:
        'Enforce Vitest with pure ESM execution, covering domain logic, reactive signal graphs, accessibility interactions (keyboard traps, ARIA live regions), and internationalization catalogs with zero flaky tests.',
      consequences: {
        positive: [
          'Sub-second test execution cycle across 80+ comprehensive unit suites',
          '100% automated test pass rate verified before every deployment gate',
          'Strict isolation of browser APIs (PerformanceObserver, WebGL, ServiceWorker)',
          'Immediate developer feedback loop during local pair-programming and refactoring',
        ],
        negative: [
          'Demands mocking discipline for browser globals in Node test runners',
          'Higher upfront authoring rigor compared to trivial shallow rendering tests',
        ],
      },
      alternatives: [
        'Jest with ts-jest: Rejected due to sluggish ESM compilation times and polyfill fragility.',
        'Cypress Component Runner: Rejected for unit-level verification due to unnecessary browser launch overhead.',
      ],
    },
    {
      id: 'adr-004',
      code: 'ADR-004',
      title: 'Decoupled WebGL Render Pipeline with IntersectionObserver Gating and Frame Budgeting',
      status: 'Accepted',
      statusLabel: 'Accepted',
      date: '2026-03',
      deciders: 'Yuri Vieira Teixeira (Software Engineer)',
      category: 'Performance',
      context:
        'Embedding 3D interactive canvases (Three.js Neural Canvas) alongside content-heavy sections can saturate the main thread and drain mobile battery if the requestAnimationFrame loop continues running when the canvas is outside the viewport.',
      decision:
        'Execute Three.js loops entirely outside Angular NgZone (runOutsideAngular). Gate canvas execution using IntersectionObserver to suspend draw calls when scrolled out of view, and bypass 3D WebGL initialization entirely on mobile viewports (<768px).',
      consequences: {
        positive: [
          'Maintains rock-solid 60-120 FPS animation budget on desktop hardware',
          'Zero GPU draw call and battery waste when the canvas is off-screen',
          'Guarantees instant Core Web Vitals (LCP < 0.6s) on mobile devices',
          'Explicit resource disposal (geometry, materials, textures) preventing VRAM leaks',
        ],
        negative: [
          'Requires managing two distinct visual presentation tiers (3D WebGL vs fallback)',
          'Demands manual hook management into component lifecycle destruction hooks',
        ],
      },
      alternatives: [
        'CSS 3D Transforms: Rejected because they cannot render dynamic mathematical particle node webs.',
        '2D HTML5 Canvas: Rejected due to inability to leverage GPU shader pipelines for depth effects.',
      ],
    },
    {
      id: 'adr-005',
      code: 'ADR-005',
      title: 'Offline-First Progressive Web Architecture with Byte-Budget and Silent Updates',
      status: 'Accepted',
      statusLabel: 'Accepted',
      date: '2026-03',
      deciders: 'Yuri Vieira Teixeira (Software Engineer)',
      category: 'Resilience',
      context:
        'Modern web applications must provide instantaneous load times and complete resilience against network drops, spotty mobile connections, and CDN latencies.',
      decision:
        'Deploy the native Angular Service Worker (@angular/service-worker) with a dual caching model: Cache-First for content-hashed immutable static assets and Network-First for dynamic manifests, complemented by silent 5-minute update polling and window focus checks.',
      consequences: {
        positive: [
          'Sub-100ms repeat visits served directly from service worker cache',
          'Zero-downtime client version upgrades triggered seamlessly without user intervention',
          'Full PWA installability across desktop and mobile operating systems',
          'Complete offline functionality for portfolio browsing and case study review',
        ],
        negative: [
          'Cache invalidation requires strict hash-based asset naming in production builds',
          'Browser service worker lifecycles introduce asynchronous upgrade steps',
        ],
      },
      alternatives: [
        'Custom Workbox script: Rejected to eliminate unnecessary external dependencies and leverage native Angular CLI integration.',
        'Browser HTTP cache headers only: Rejected due to inability to function offline or support PWA installation.',
      ],
    },
  ],
  es: [
    {
      id: 'adr-001',
      code: 'ADR-001',
      title: 'Arquitectura de Estado Reactivo Puro mediante Angular Signals y Estrategia OnPush',
      status: 'Accepted',
      statusLabel: 'Aceptado',
      date: '2026-02',
      deciders: 'Yuri Vieira Teixeira (Software Engineer)',
      category: 'Arquitectura',
      context:
        'Las aplicaciones Angular dependían históricamente de Zone.js para interceptar APIs asíncronas y ejecutar ciclos de detección de cambios descendentes en el árbol de componentes. En interfaces interactivas en tiempo real con escenas Three.js WebGL, esto consume valioso presupuesto de frames y genera micro-pausas.',
      decision:
        'Estandarizar exclusivamente en Angular Signals de granularidad fina (signal, computed, effect) combinados con ChangeDetectionStrategy.OnPush en todos los componentes. Todas las derivaciones de estado se ejecutan como grafos puros con propagación O(1), eliminando comprobaciones redundantes.',
      consequences: {
        positive: [
          'Cero ciclos innecesarios de verificación en plantillas durante frames de animación',
          'Flujo unidireccional determinista de datos con cero errores de change-after-checked',
          'Interoperabilidad directa con las primitivas nativas zoneless de Angular',
          'Mínima huella de memoria y memoización sin esfuerzo de derivaciones costosas',
        ],
        negative: [
          'Exige disciplina rigurosa para evitar mutación de estado fuera de signals',
          'Descarta bindings bidireccionales tradicionales (banana-in-a-box) en formularios complejos',
        ],
      },
      alternatives: [
        'NgRx Store / ComponentStore: Rechazado por boilerplate excesivo y sobrecarga de bundle para una SPA.',
        'Servicios basados en RxJS Subject: Rechazado en favor de Signals por menor costo cognitivo y mejor ergonomía.',
      ],
    },
    {
      id: 'adr-002',
      code: 'ADR-002',
      title: 'Tokens de Diseño CSS Zero-Runtime y Encapsulamiento Modular BEM',
      status: 'Accepted',
      statusLabel: 'Aceptado',
      date: '2026-02',
      deciders: 'Yuri Vieira Teixeira (Software Engineer)',
      category: 'Estilización',
      context:
        'Las soluciones CSS-in-JS introducen costos de parsing de scripts en tiempo de ejecución y bloqueos de compilación. Un sistema web de ingeniería avanzada debe mantener cambios de tema instantáneos, aceleración por hardware y contraste estricto WCAG 2.1 AAA sin penalización de scripts.',
      decision:
        'Adoptar arquitectura de tokens en dos niveles: mapas SCSS en tiempo de compilación que generan variables CSS nativas (--bg-*, --text-*, --space-*), aplicadas bajo estricta metodología BEM (Block Element Modifier).',
      consequences: {
        positive: [
          'Cero penalización de runtime JavaScript para renderizado de layout y estilos',
          'Transiciones de propiedades CSS aceleradas por hardware a 120 FPS fijos',
          'Intercambio universal de tokens de alto contraste WCAG 2.1 AAA mediante clase raíz',
          'Máxima mantenibilidad sin dependencia de frameworks propietarios de estilos',
        ],
        negative: [
          'Exige higiene diligente en nombres de clases para evitar divergencia semántica',
          'El mapeo inicial de tokens requiere planificación arquitectónica cuidadosa',
        ],
      },
      alternatives: [
        'Tailwind CSS: Rechazado para garantizar control total sobre tokens CSS puros sin utilidades externas.',
        'Emotion / Styled-Components: Rechazado por la latencia de inyección de estilos en el DOM y coste en bundle.',
      ],
    },
    {
      id: 'adr-003',
      code: 'ADR-003',
      title: 'Ingeniería de Calidad Determinista con Vitest y Regresiones Basadas en Propiedades',
      status: 'Accepted',
      statusLabel: 'Aceptado',
      date: '2026-03',
      deciders: 'Yuri Vieira Teixeira (Software Engineer)',
      category: 'Calidad',
      context:
        'Las pruebas unitarias tradicionales a menudo verifican detalles triviales de implementación en lugar de invariantes matemáticas, límites de error y contratos de accesibilidad. Esto crea estadísticas engañosas de cobertura.',
      decision:
        'Aplicar Vitest con ejecución ESM pura, cubriendo lógica de dominio, grafos de signals reactivos, interacciones de accesibilidad (foco, regiones ARIA live) e internacionalización con cero pruebas inestables.',
      consequences: {
        positive: [
          'Ciclo de ejecución de pruebas inferior a un segundo en más de 80 suites completas',
          'Tasa de aprobación del 100% en pruebas automatizadas antes de cada despliegue',
          'Aislamiento estricto de APIs de navegador (PerformanceObserver, WebGL, ServiceWorker)',
          'Feedback inmediato durante pair programming y refactorización local',
        ],
        negative: [
          'Demanda disciplina en mocks de objetos globales de navegador en entornos Node',
          'Mayor rigor inicial en la elaboración en comparación con pruebas superficiales',
        ],
      },
      alternatives: [
        'Jest con ts-jest: Rechazado por tiempos lentos de compilación ESM y fragilidad de polyfills.',
        'Cypress Component Runner: Rechazado para pruebas unitarias por la sobrecarga de navegadores completos.',
      ],
    },
    {
      id: 'adr-004',
      code: 'ADR-004',
      title: 'Pipeline de Renderizado WebGL Desacoplado con Gating por IntersectionObserver y Límite de Frames',
      status: 'Accepted',
      statusLabel: 'Aceptado',
      date: '2026-03',
      deciders: 'Yuri Vieira Teixeira (Software Engineer)',
      category: 'Rendimiento',
      context:
        'Integrar canvas 3D interactivos (Three.js Neural Canvas) con secciones densas de contenido puede saturar el hilo principal y agotar la batería móvil si el bucle requestAnimationFrame sigue ejecutándose fuera de pantalla.',
      decision:
        'Ejecutar los bucles de Three.js totalmente fuera de Angular NgZone (runOutsideAngular). Suspender llamadas de renderizado mediante IntersectionObserver cuando el canvas sale de vista y omitir inicialización WebGL en móviles (<768px).',
      consequences: {
        positive: [
          'Mantiene presupuesto sólido de 60-120 FPS en hardware de escritorio',
          'Cero consumo de GPU y ahorro total de batería cuando el canvas no es visible',
          'Garantiza Core Web Vitals instantáneos (LCP < 0.6s) en dispositivos móviles',
          'Liberación explícita de recursos (geometría, materiales, texturas) evitando fugas de VRAM',
        ],
        negative: [
          'Requiere gestionar dos niveles visuales distintos (3D WebGL vs fallback estático)',
          'Demanda gestión manual en los hooks de destrucción de ciclo de vida',
        ],
      },
      alternatives: [
        'CSS 3D Transforms: Rechazado por incapacidad para renderizar redes dinámicas de partículas matemáticas.',
        'Canvas 2D HTML5: Rechazado por no poder aprovechar shaders de GPU para efectos de profundidad.',
      ],
    },
    {
      id: 'adr-005',
      code: 'ADR-005',
      title: 'Arquitectura Web Progresiva Offline-First con Límite de Bytes y Actualizaciones Silenciosas',
      status: 'Accepted',
      statusLabel: 'Aceptado',
      date: '2026-03',
      deciders: 'Yuri Vieira Teixeira (Software Engineer)',
      category: 'Resiliencia',
      context:
        'Las aplicaciones web modernas deben proporcionar tiempos de carga instantáneos y resiliencia completa contra caídas de red, conexiones móviles inestables y latencias de CDN.',
      decision:
        'Implementar el Service Worker nativo de Angular (@angular/service-worker) con modelo dual de caché: Cache-First para recursos inmutables con hash y Network-First para manifiestos dinámicos, con sondeo silencioso de actualizaciones cada 5 minutos.',
      consequences: {
        positive: [
          'Visitas recurrentes en menos de 100ms servidas directamente desde la caché',
          'Actualizaciones de versión del cliente sin tiempo de inactividad de forma transparente',
          'Instalabilidad PWA completa en sistemas operativos de escritorio y móviles',
          'Navegación y revisión de casos de estudio totalmente operativas sin conexión',
        ],
        negative: [
          'La invalidación de caché exige hashes estrictos en los nombres de archivos en producción',
          'El ciclo de vida del service worker introduce pasos asíncronos de actualización',
        ],
      },
      alternatives: [
        'Script Workbox personalizado: Rechazado para evitar dependencias externas y usar integración nativa de Angular CLI.',
        'Solo cabeceras HTTP de caché: Rechazado por incapacidad de funcionar offline o permitir instalación PWA.',
      ],
    },
  ],
};

export const PORTFOLIO_ADRS: readonly AdrRecord[] = PORTFOLIO_ADRS_I18N['pt-BR'];
