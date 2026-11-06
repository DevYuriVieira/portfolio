import { DestroyRef, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    VLibras?: {
      Widget: new (options?: string | { rootPath?: string; avatar?: string; position?: string }) => unknown;
    };
    VLibrasWidget?: {
      path?: string;
      open?: () => void;
      close?: () => void;
      initBtn?: HTMLElement;
      access?: HTMLElement;
    };
  }
}

const VLIBRAS_SCRIPT_URL = 'https://vlibras.gov.br/app/vlibras-plugin.js';
const VLIBRAS_APP_URL = 'https://vlibras.gov.br/app';

@Injectable({
  providedIn: 'root',
})
export class VlibrasService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  private appRootObserver: MutationObserver | null = null;

  readonly isLoaded = signal<boolean>(false);
  readonly isLoading = signal<boolean>(false);
  readonly isActive = signal<boolean>(false);

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.appRootObserver?.disconnect();
    });
  }

  toggle(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (!this.isLoaded()) {
      this.loadPlugin();
      return;
    }

    if (this.isActive()) {
      this.deactivate();
    } else {
      this.activate(true);
    }
  }

  activate(openWidget = true): void {
    if (!isPlatformBrowser(this.platformId)) return;

    document.documentElement.setAttribute('data-vlibras-active', 'true');

    const accessWrapper = document.getElementById('vlibras-access-wrapper');
    if (accessWrapper) {
      accessWrapper.style.removeProperty('display');
      accessWrapper.style.removeProperty('visibility');
      accessWrapper.style.removeProperty('opacity');
      accessWrapper.style.removeProperty('pointer-events');
      accessWrapper.style.removeProperty('transform');
    }

    const appRoot = document.getElementById('vlibras-app-root');
    if (appRoot) {
      appRoot.style.removeProperty('display');
      appRoot.style.removeProperty('visibility');
      appRoot.style.removeProperty('opacity');
      appRoot.style.removeProperty('pointer-events');
      this.observeAppRoot(appRoot);
    }

    const legacyElements = document.querySelectorAll<HTMLElement>(
      '[vw], [vw-access-button], [vw-plugin-wrapper], .vw-plugin-top-wrapper, .vp-box'
    );
    legacyElements.forEach((el) => {
      el.style.removeProperty('display');
      el.style.removeProperty('visibility');
      el.style.removeProperty('opacity');
      el.style.removeProperty('pointer-events');
      el.style.removeProperty('transform');
    });

    if (openWidget) {
      this.openWidgetUi();
    }

    this.isActive.set(true);
  }

  deactivate(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    document.documentElement.setAttribute('data-vlibras-active', 'false');

    const appRoot = document.getElementById('vlibras-app-root');
    if (appRoot) {
      appRoot.dataset['active'] = 'false';
    }

    const legacyCloseBtn = document.querySelector<HTMLElement>(
      '[vw] [vw-close], [vw] .vp-close, .vp-box .vp-close, .vw-btn-close'
    );
    legacyCloseBtn?.click();

    try {
      localStorage.removeItem('@vlibras-widget');
    } catch {}

    this.isActive.set(false);
  }

  private openWidgetUi(): void {
    if (window.VLibrasWidget?.open) {
      window.VLibrasWidget.open();
      this.ensureAppRootObserved();
      return;
    }

    const appRoot = document.getElementById('vlibras-app-root');
    if (appRoot) {
      appRoot.dataset['active'] = 'true';
      this.observeAppRoot(appRoot);
      return;
    }

    setTimeout(() => {
      if (window.VLibrasWidget?.open) {
        window.VLibrasWidget.open();
      } else {
        const shadowBtn = document
          .getElementById('vlibras-access-wrapper')
          ?.shadowRoot?.getElementById('vlibras-button');
        shadowBtn?.click();
      }
      this.ensureAppRootObserved();
    }, 150);
  }

  private ensureAppRootObserved(): void {
    const appRoot = document.getElementById('vlibras-app-root');
    if (appRoot) {
      this.observeAppRoot(appRoot);
    } else {
      setTimeout(() => {
        const root = document.getElementById('vlibras-app-root');
        if (root) this.observeAppRoot(root);
      }, 500);
    }
  }

  private observeAppRoot(appRoot: HTMLElement): void {
    if (this.appRootObserver || typeof MutationObserver === 'undefined') return;

    this.appRootObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-active') {
          const isActive = appRoot.dataset['active'] === 'true';
          this.isActive.set(isActive);
          document.documentElement.setAttribute('data-vlibras-active', isActive ? 'true' : 'false');
        }
      }
    });

    this.appRootObserver.observe(appRoot, { attributes: true, attributeFilter: ['data-active'] });
  }

  private loadPlugin(): void {
    if (this.isLoading()) {
      return;
    }

    this.isLoading.set(true);
    this.injectVlibrasDom();

    const script = document.createElement('script');
    script.src = VLIBRAS_SCRIPT_URL;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      this.initWidget();
    };

    script.onerror = () => {
      const fallbackScript = document.createElement('script');
      fallbackScript.src = 'https://cdn.jsdelivr.net/gh/spbgovbr-vlibras/vlibras-portal@v7.12.2/app/vlibras-plugin.js';
      fallbackScript.async = true;
      fallbackScript.defer = true;
      fallbackScript.onload = () => this.initWidget();
      fallbackScript.onerror = () => {
        this.isLoading.set(false);
        this.isLoaded.set(false);
      };
      document.body.appendChild(fallbackScript);
    };

    document.body.appendChild(script);
  }

  private initWidget(): void {
    if (window.VLibras) {
      try {
        localStorage.removeItem('@vlibras-widget');
      } catch {}

      new window.VLibras.Widget(VLIBRAS_APP_URL);
      this.isLoaded.set(true);
      this.isLoading.set(false);
      this.activate(true);
    }
  }

  private injectVlibrasDom(): void {
    if (document.querySelector('[vw]')) {
      return;
    }

    const container = document.createElement('div');
    container.setAttribute('vw', '');
    container.className = 'enabled';

    const accessBtn = document.createElement('div');
    accessBtn.setAttribute('vw-access-button', '');
    accessBtn.className = 'active';

    const pluginWrapper = document.createElement('div');
    pluginWrapper.setAttribute('vw-plugin-wrapper', '');

    const topWrapper = document.createElement('div');
    topWrapper.className = 'vw-plugin-top-wrapper';

    pluginWrapper.appendChild(topWrapper);
    container.appendChild(accessBtn);
    container.appendChild(pluginWrapper);
    document.body.appendChild(container);
  }
}
