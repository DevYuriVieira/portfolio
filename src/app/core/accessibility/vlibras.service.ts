import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => unknown;
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

  readonly isLoaded = signal<boolean>(false);
  readonly isLoading = signal<boolean>(false);
  readonly isActive = signal<boolean>(false);

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
      this.activate();
    }
  }

  activate(): void {
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

    const legacyElements = document.querySelectorAll<HTMLElement>(
      '[vw], [vw-access-button]'
    );
    legacyElements.forEach((el) => {
      el.style.removeProperty('display');
      el.style.removeProperty('visibility');
      el.style.removeProperty('opacity');
      el.style.removeProperty('pointer-events');
      el.style.removeProperty('transform');
    });

    const appRoot = document.getElementById('vlibras-app-root');
    if (appRoot) {
      appRoot.dataset['active'] = 'false';
    }

    this.isActive.set(true);
  }

  deactivate(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    document.documentElement.setAttribute('data-vlibras-active', 'false');

    const accessWrapper = document.getElementById('vlibras-access-wrapper');
    if (accessWrapper) {
      accessWrapper.style.setProperty('display', 'none', 'important');
      accessWrapper.style.setProperty('visibility', 'hidden', 'important');
      accessWrapper.style.setProperty('opacity', '0', 'important');
      accessWrapper.style.setProperty('pointer-events', 'none', 'important');
    }

    const appRoot = document.getElementById('vlibras-app-root');
    if (appRoot) {
      appRoot.style.setProperty('display', 'none', 'important');
      appRoot.style.setProperty('visibility', 'hidden', 'important');
      appRoot.dataset['active'] = 'false';
    }

    const legacyCloseBtn = document.querySelector<HTMLElement>(
      '[vw] [vw-close], [vw] .vp-close, .vp-box .vp-close, .vw-btn-close'
    );
    legacyCloseBtn?.click();

    const legacyElements = document.querySelectorAll<HTMLElement>(
      '[vw], [vw-access-button], [vw-plugin-wrapper], .vw-plugin-top-wrapper, .vp-box, .vw-links, [class*="vw-"], [class*="vp-"]'
    );
    legacyElements.forEach((el) => {
      el.style.setProperty('display', 'none', 'important');
      el.style.setProperty('visibility', 'hidden', 'important');
      el.style.setProperty('opacity', '0', 'important');
      el.style.setProperty('pointer-events', 'none', 'important');
    });

    try {
      localStorage.removeItem('@vlibras-widget');
    } catch {
    }

    this.isActive.set(false);
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
      if (window.VLibras) {
        try {
          localStorage.removeItem('@vlibras-widget');
        } catch {
        }

        new window.VLibras.Widget(VLIBRAS_APP_URL);
        this.isLoaded.set(true);
        this.isLoading.set(false);
        this.activate();
      }
    };

    script.onerror = () => {
      this.isLoading.set(false);
    };

    document.body.appendChild(script);
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
