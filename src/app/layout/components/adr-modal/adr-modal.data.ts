export interface AdrConsequences {
  readonly positive: readonly string[];
  readonly negative: readonly string[];
}

export interface AdrRecord {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly status: 'Accepted' | 'Superseded' | 'Proposed';
  readonly date: string;
  readonly deciders: string;
  readonly category: 'Architecture' | 'Styling' | 'Quality' | 'Performance' | 'Resilience';
  readonly context: string;
  readonly decision: string;
  readonly consequences: AdrConsequences;
  readonly alternatives: readonly string[];
}

export const PORTFOLIO_ADRS: readonly AdrRecord[] = [
  {
    id: 'adr-001',
    code: 'ADR-001',
    title: 'Pure Reactive State Architecture via Angular Signals and OnPush Strategy',
    status: 'Accepted',
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
    date: '2026-02',
    deciders: 'Yuri Vieira Teixeira (Software Engineer)',
    category: 'Styling',
    context:
      'CSS-in-JS solutions and heavyweight utility abstractions introduce runtime script parsing costs, style tag recalculations, and build lock-in. A staff-grade web system must maintain instantaneous theme switching, hardware acceleration, and strict WCAG 2.1 AAA contrast without incurring script evaluation overhead.',
    decision:
      'Adopt a dual-tier design token architecture: compile-time SCSS token maps generating native CSS custom properties (--color-*, --space-*, --radius-*), enforced through strict BEM (Block Element Modifier) component scoping.',
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
];
