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

    const stored = localStorage.getItem(STORAGE_KEY) as SupportedLang | null;
    if (stored && SUPPORTED_LANGS.includes(stored)) {
      document.documentElement.lang = stored;
      return stored;
    }

    return DEFAULT_LANG;
  }
}
