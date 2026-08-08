import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DEFAULT_LANG, SUPPORTED_LANGS, SupportedLang } from './i18n.model';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly platformId = inject(PLATFORM_ID);

  /** Current active language signal: reactive across the entire app */
  readonly currentLang = signal<SupportedLang>(this.resolveInitialLang());

  /** Switch the active language */
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

  /** Toggle between the two supported languages */
  toggleLang(): void {
    this.setLang(this.currentLang() === 'pt-BR' ? 'en' : 'pt-BR');
  }

  /** Resolve the initial language from localStorage or browser defaults */
  private resolveInitialLang(): SupportedLang {
    if (!isPlatformBrowser(this.platformId)) {
      return DEFAULT_LANG;
    }

    // 1. Check localStorage
    const stored = localStorage.getItem(STORAGE_KEY) as SupportedLang | null;
    if (stored && SUPPORTED_LANGS.includes(stored)) {
      document.documentElement.lang = stored;
      return stored;
    }

    // 2. Fallback to default
    return DEFAULT_LANG;
  }
}
