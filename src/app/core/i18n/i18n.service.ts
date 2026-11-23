import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DEFAULT_LANG, SUPPORTED_LANGS, SupportedLang } from './i18n.model';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly currentLang = signal<SupportedLang>(this.resolveInitialLang());

  setLang(lang: SupportedLang): void {
    if (!SUPPORTED_LANGS.includes(lang)) {
      return;
    }

    this.currentLang.set(lang);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    }
  }

  toggleLang(): void {
    const cycle: Record<SupportedLang, SupportedLang> = {
      'pt-BR': 'en',
      en: 'es',
      es: 'pt-BR',
    };
    this.setLang(cycle[this.currentLang()]);
  }

  private resolveInitialLang(): SupportedLang {
    if (!isPlatformBrowser(this.platformId)) {
      return DEFAULT_LANG;
    }

    const fromQuery = this.resolveLangFromUrl();
    if (fromQuery) {
      localStorage.setItem(STORAGE_KEY, fromQuery);
      document.documentElement.lang = fromQuery;
      return fromQuery;
    }

    const stored = localStorage.getItem(STORAGE_KEY) as SupportedLang | null;
    if (stored && SUPPORTED_LANGS.includes(stored)) {
      document.documentElement.lang = stored;
      return stored;
    }

    const fromBrowser = this.resolveLangFromBrowser();
    if (fromBrowser) {
      document.documentElement.lang = fromBrowser;
      return fromBrowser;
    }

    return DEFAULT_LANG;
  }

  private resolveLangFromUrl(): SupportedLang | null {
    try {
      const params = new URLSearchParams(window.location.search);
      const raw = params.get('lang')?.toLowerCase();
      if (!raw) return null;
      if (raw === 'pt' || raw === 'pt-br') return 'pt-BR';
      if (raw === 'en' || raw.startsWith('en-')) return 'en';
      if (raw === 'es' || raw.startsWith('es-')) return 'es';
    } catch {}
    return null;
  }

  private resolveLangFromBrowser(): SupportedLang | null {
    try {
      const langs =
        Array.isArray(navigator.languages) && navigator.languages.length > 0
          ? navigator.languages
          : navigator.language
            ? [navigator.language]
            : [];

      for (const lang of langs) {
        const normalized = lang.toLowerCase();
        if (normalized.startsWith('pt')) return 'pt-BR';
        if (normalized.startsWith('es')) return 'es';
        if (normalized.startsWith('en')) return 'en';
      }
    } catch {}
    return null;
  }
}
