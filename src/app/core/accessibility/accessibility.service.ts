import {
  Injectable,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  AccessibilityState,
  DEFAULT_A11Y_STATE,
  FontScale,
} from './accessibility.model';
import { VlibrasService } from './vlibras.service';

const STORAGE_KEY = 'portfolio-a11y-settings';

@Injectable({
  providedIn: 'root',
})
export class AccessibilityService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly vlibras = inject(VlibrasService);

  readonly fontScale = signal<FontScale>(DEFAULT_A11Y_STATE.fontScale);
  readonly dyslexicFont = signal<boolean>(DEFAULT_A11Y_STATE.dyslexicFont);
  readonly textSpacing = signal<boolean>(DEFAULT_A11Y_STATE.textSpacing);
  readonly highContrast = signal<boolean>(DEFAULT_A11Y_STATE.highContrast);
  readonly monochrome = signal<boolean>(DEFAULT_A11Y_STATE.monochrome);
  readonly highlightLinks = signal<boolean>(DEFAULT_A11Y_STATE.highlightLinks);
  readonly pauseAnimations = signal<boolean>(DEFAULT_A11Y_STATE.pauseAnimations);
  readonly readingGuide = signal<boolean>(DEFAULT_A11Y_STATE.readingGuide);
  readonly isPanelOpen = signal<boolean>(false);

  readonly vlibrasActive = this.vlibras.isActive;
  readonly vlibrasLoading = this.vlibras.isLoading;

  readonly hasActiveSettings = computed(() => {
    return (
      this.fontScale() !== 'normal' ||
      this.dyslexicFont() ||
      this.textSpacing() ||
      this.highContrast() ||
      this.monochrome() ||
      this.highlightLinks() ||
      this.pauseAnimations() ||
      this.readingGuide() ||
      this.vlibrasActive()
    );
  });

  constructor() {
    this.restoreSavedState();

    effect(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      const root = document.documentElement;
      const font = this.fontScale();
      const dyslexic = this.dyslexicFont();
      const spacing = this.textSpacing();
      const contrast = this.highContrast();
      const mono = this.monochrome();
      const links = this.highlightLinks();
      const pause = this.pauseAnimations();

      root.setAttribute('data-a11y-font', font);
      contrast ? root.setAttribute('data-a11y-contrast', 'high') : root.removeAttribute('data-a11y-contrast');

      root.classList.toggle('a11y-dyslexic-font', dyslexic);
      root.classList.toggle('a11y-text-spacing', spacing);
      root.classList.toggle('a11y-monochrome', mono);
      root.classList.toggle('a11y-highlight-links', links);
      root.classList.toggle('a11y-pause-animations', pause);

      this.persistState();
    });
  }

  togglePanel(): void {
    this.isPanelOpen.update((open) => !open);
  }

  closePanel(): void {
    this.isPanelOpen.set(false);
  }

  cycleFontScale(): void {
    const cycle: Record<FontScale, FontScale> = {
      normal: 'large',
      large: 'x-large',
      'x-large': 'normal',
    };
    this.fontScale.update((current) => cycle[current]);
  }

  toggleDyslexicFont(): void {
    this.dyslexicFont.update((val) => !val);
  }

  toggleTextSpacing(): void {
    this.textSpacing.update((val) => !val);
  }

  toggleHighContrast(): void {
    this.highContrast.update((val) => !val);
  }

  toggleMonochrome(): void {
    this.monochrome.update((val) => !val);
  }

  toggleHighlightLinks(): void {
    this.highlightLinks.update((val) => !val);
  }

  togglePauseAnimations(): void {
    this.pauseAnimations.update((val) => !val);
  }

  toggleReadingGuide(): void {
    this.readingGuide.update((val) => !val);
  }

  toggleVlibras(): void {
    this.vlibras.toggle();
  }

  resetDefaults(): void {
    this.fontScale.set(DEFAULT_A11Y_STATE.fontScale);
    this.dyslexicFont.set(DEFAULT_A11Y_STATE.dyslexicFont);
    this.textSpacing.set(DEFAULT_A11Y_STATE.textSpacing);
    this.highContrast.set(DEFAULT_A11Y_STATE.highContrast);
    this.monochrome.set(DEFAULT_A11Y_STATE.monochrome);
    this.highlightLinks.set(DEFAULT_A11Y_STATE.highlightLinks);
    this.pauseAnimations.set(DEFAULT_A11Y_STATE.pauseAnimations);
    this.readingGuide.set(DEFAULT_A11Y_STATE.readingGuide);
    this.vlibras.deactivate();

    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }


  private persistState(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const state: AccessibilityState = {
      fontScale: this.fontScale(),
      dyslexicFont: this.dyslexicFont(),
      textSpacing: this.textSpacing(),
      highContrast: this.highContrast(),
      monochrome: this.monochrome(),
      highlightLinks: this.highlightLinks(),
      pauseAnimations: this.pauseAnimations(),
      readingGuide: this.readingGuide(),
      vlibrasActive: this.vlibrasActive(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  private restoreSavedState(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return;

      const state: Partial<AccessibilityState> = JSON.parse(stored);
      if (state.fontScale) this.fontScale.set(state.fontScale);
      if (typeof state.dyslexicFont === 'boolean') this.dyslexicFont.set(state.dyslexicFont);
      if (typeof state.textSpacing === 'boolean') this.textSpacing.set(state.textSpacing);
      if (typeof state.highContrast === 'boolean') this.highContrast.set(state.highContrast);
      if (typeof state.monochrome === 'boolean') this.monochrome.set(state.monochrome);
      if (typeof state.highlightLinks === 'boolean') this.highlightLinks.set(state.highlightLinks);
      if (typeof state.pauseAnimations === 'boolean') this.pauseAnimations.set(state.pauseAnimations);
      if (typeof state.readingGuide === 'boolean') this.readingGuide.set(state.readingGuide);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}
