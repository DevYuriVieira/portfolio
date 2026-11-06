import {
  DestroyRef,
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
import { I18nService } from '../i18n/i18n.service';

const STORAGE_KEY = 'portfolio-a11y-settings';

@Injectable({
  providedIn: 'root',
})
export class AccessibilityService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly vlibras = inject(VlibrasService);
  private readonly i18n = inject(I18nService);

  readonly fontScale = signal<FontScale>(DEFAULT_A11Y_STATE.fontScale);
  readonly dyslexicFont = signal<boolean>(DEFAULT_A11Y_STATE.dyslexicFont);
  readonly textSpacing = signal<boolean>(DEFAULT_A11Y_STATE.textSpacing);
  readonly lineHeight = signal<boolean>(DEFAULT_A11Y_STATE.lineHeight);
  readonly alignLeft = signal<boolean>(DEFAULT_A11Y_STATE.alignLeft);
  readonly bionicReading = signal<boolean>(DEFAULT_A11Y_STATE.bionicReading);
  readonly highContrast = signal<boolean>(DEFAULT_A11Y_STATE.highContrast);
  readonly monochrome = signal<boolean>(DEFAULT_A11Y_STATE.monochrome);
  readonly invertColors = signal<boolean>(DEFAULT_A11Y_STATE.invertColors);
  readonly lowSaturation = signal<boolean>(DEFAULT_A11Y_STATE.lowSaturation);
  readonly hideMedia = signal<boolean>(DEFAULT_A11Y_STATE.hideMedia);
  readonly protanopia = signal<boolean>(DEFAULT_A11Y_STATE.protanopia);
  readonly deuteranopia = signal<boolean>(DEFAULT_A11Y_STATE.deuteranopia);
  readonly tritanopia = signal<boolean>(DEFAULT_A11Y_STATE.tritanopia);
  readonly highlightLinks = signal<boolean>(DEFAULT_A11Y_STATE.highlightLinks);
  readonly highlightHeadings = signal<boolean>(DEFAULT_A11Y_STATE.highlightHeadings);
  readonly pauseAnimations = signal<boolean>(DEFAULT_A11Y_STATE.pauseAnimations);
  readonly readingGuide = signal<boolean>(DEFAULT_A11Y_STATE.readingGuide);
  readonly largeCursor = signal<boolean>(DEFAULT_A11Y_STATE.largeCursor);
  readonly screenReader = signal<boolean>(DEFAULT_A11Y_STATE.screenReader);
  readonly isPanelOpen = signal<boolean>(false);

  readonly vlibrasActive = this.vlibras.isActive;
  readonly vlibrasLoading = this.vlibras.isLoading;

  private ttsClickListener: ((e: MouseEvent) => void) | null = null;

  readonly hasActiveSettings = computed(() => {
    return (
      this.fontScale() !== 'normal' ||
      this.dyslexicFont() ||
      this.textSpacing() ||
      this.lineHeight() ||
      this.alignLeft() ||
      this.bionicReading() ||
      this.highContrast() ||
      this.monochrome() ||
      this.invertColors() ||
      this.lowSaturation() ||
      this.hideMedia() ||
      this.protanopia() ||
      this.deuteranopia() ||
      this.tritanopia() ||
      this.highlightLinks() ||
      this.highlightHeadings() ||
      this.pauseAnimations() ||
      this.readingGuide() ||
      this.largeCursor() ||
      this.screenReader() ||
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
      const lHeight = this.lineHeight();
      const aLeft = this.alignLeft();
      const bionic = this.bionicReading();
      const contrast = this.highContrast();
      const mono = this.monochrome();
      const invert = this.invertColors();
      const lowSat = this.lowSaturation();
      const hMedia = this.hideMedia();
      const protan = this.protanopia();
      const deuter = this.deuteranopia();
      const tritan = this.tritanopia();
      const links = this.highlightLinks();
      const headings = this.highlightHeadings();
      const pause = this.pauseAnimations();
      const cursor = this.largeCursor();

      if (root.getAttribute('data-a11y-font') !== font) {
        root.setAttribute('data-a11y-font', font);
      }
      if (contrast) {
        if (root.getAttribute('data-a11y-contrast') !== 'high') {
          root.setAttribute('data-a11y-contrast', 'high');
        }
      } else if (root.hasAttribute('data-a11y-contrast')) {
        root.removeAttribute('data-a11y-contrast');
      }

      root.classList.toggle('a11y-dyslexic-font', dyslexic);
      root.classList.toggle('a11y-text-spacing', spacing);
      root.classList.toggle('a11y-line-height', lHeight);
      root.classList.toggle('a11y-align-left', aLeft);
      root.classList.toggle('a11y-monochrome', mono);
      root.classList.toggle('a11y-invert-colors', invert);
      root.classList.toggle('a11y-low-saturation', lowSat);
      root.classList.toggle('a11y-hide-media', hMedia);
      root.classList.toggle('a11y-protanopia', protan);
      root.classList.toggle('a11y-deuteranopia', deuter);
      root.classList.toggle('a11y-tritanopia', tritan);
      root.classList.toggle('a11y-highlight-links', links);
      root.classList.toggle('a11y-highlight-headings', headings);
      root.classList.toggle('a11y-pause-animations', pause);
      root.classList.toggle('a11y-large-cursor', cursor);

      this.applyBionicReading(bionic);
      this.syncScreenReader(this.screenReader());

      this.persistState();
    });

    this.destroyRef.onDestroy(() => {
      this.teardownScreenReader();
    });
  }

  openPanel(): void {
    this.isPanelOpen.set(true);
  }

  closePanel(): void {
    this.isPanelOpen.set(false);
  }

  togglePanel(): void {
    this.isPanelOpen.update((val) => !val);
  }

  cycleFontScale(): void {
    const current = this.fontScale();
    if (current === 'normal') this.fontScale.set('large');
    else if (current === 'large') this.fontScale.set('x-large');
    else this.fontScale.set('normal');
  }

  toggleDyslexicFont(): void {
    this.dyslexicFont.update((val) => !val);
  }

  toggleTextSpacing(): void {
    this.textSpacing.update((val) => !val);
  }

  toggleLineHeight(): void {
    this.lineHeight.update((val) => !val);
  }

  toggleAlignLeft(): void {
    this.alignLeft.update((val) => !val);
  }

  toggleBionicReading(): void {
    this.bionicReading.update((val) => !val);
  }

  toggleHighContrast(): void {
    this.highContrast.update((val) => !val);
  }

  toggleMonochrome(): void {
    this.monochrome.update((val) => !val);
  }

  toggleInvertColors(): void {
    this.invertColors.update((val) => !val);
  }

  toggleLowSaturation(): void {
    this.lowSaturation.update((val) => !val);
  }

  toggleHideMedia(): void {
    this.hideMedia.update((val) => !val);
  }

  toggleProtanopia(): void {
    const next = !this.protanopia();
    this.protanopia.set(next);
    if (next) {
      this.deuteranopia.set(false);
      this.tritanopia.set(false);
    }
  }

  toggleDeuteranopia(): void {
    const next = !this.deuteranopia();
    this.deuteranopia.set(next);
    if (next) {
      this.protanopia.set(false);
      this.tritanopia.set(false);
    }
  }

  toggleTritanopia(): void {
    const next = !this.tritanopia();
    this.tritanopia.set(next);
    if (next) {
      this.protanopia.set(false);
      this.deuteranopia.set(false);
    }
  }

  toggleHighlightLinks(): void {
    this.highlightLinks.update((val) => !val);
  }

  toggleHighlightHeadings(): void {
    this.highlightHeadings.update((val) => !val);
  }

  togglePauseAnimations(): void {
    this.pauseAnimations.update((val) => !val);
  }

  toggleReadingGuide(): void {
    this.readingGuide.update((val) => !val);
  }

  toggleLargeCursor(): void {
    this.largeCursor.update((val) => !val);
  }

  toggleScreenReader(): void {
    this.screenReader.update((val) => !val);
  }

  toggleVlibras(): void {
    this.vlibras.toggle();
  }

  resetDefaults(): void {
    this.fontScale.set(DEFAULT_A11Y_STATE.fontScale);
    this.dyslexicFont.set(DEFAULT_A11Y_STATE.dyslexicFont);
    this.textSpacing.set(DEFAULT_A11Y_STATE.textSpacing);
    this.lineHeight.set(DEFAULT_A11Y_STATE.lineHeight);
    this.alignLeft.set(DEFAULT_A11Y_STATE.alignLeft);
    this.bionicReading.set(DEFAULT_A11Y_STATE.bionicReading);
    this.highContrast.set(DEFAULT_A11Y_STATE.highContrast);
    this.monochrome.set(DEFAULT_A11Y_STATE.monochrome);
    this.invertColors.set(DEFAULT_A11Y_STATE.invertColors);
    this.lowSaturation.set(DEFAULT_A11Y_STATE.lowSaturation);
    this.hideMedia.set(DEFAULT_A11Y_STATE.hideMedia);
    this.protanopia.set(DEFAULT_A11Y_STATE.protanopia);
    this.deuteranopia.set(DEFAULT_A11Y_STATE.deuteranopia);
    this.tritanopia.set(DEFAULT_A11Y_STATE.tritanopia);
    this.highlightLinks.set(DEFAULT_A11Y_STATE.highlightLinks);
    this.highlightHeadings.set(DEFAULT_A11Y_STATE.highlightHeadings);
    this.pauseAnimations.set(DEFAULT_A11Y_STATE.pauseAnimations);
    this.readingGuide.set(DEFAULT_A11Y_STATE.readingGuide);
    this.largeCursor.set(DEFAULT_A11Y_STATE.largeCursor);
    this.screenReader.set(DEFAULT_A11Y_STATE.screenReader);
    this.vlibras.deactivate();

    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  private applyBionicReading(enable: boolean): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const selectors = 'p, li, .hero__desc, .about__text, .experience__description';
    const elements = document.querySelectorAll<HTMLElement>(selectors);

    if (enable) {
      elements.forEach((el) => {
        if (el.dataset['originalBionic']) return;
        el.dataset['originalBionic'] = el.innerHTML;
        el.innerHTML = el.innerHTML.replace(/\b([a-zA-ZÀ-ÿ]{2,})\b/g, (match) => {
          const mid = Math.ceil(match.length * 0.45);
          return `<strong class="a11y-bionic-strong">${match.slice(0, mid)}</strong>${match.slice(mid)}`;
        });
      });
    } else {
      elements.forEach((el) => {
        if (el.dataset['originalBionic']) {
          el.innerHTML = el.dataset['originalBionic'];
          delete el.dataset['originalBionic'];
        }
      });
    }
  }

  private syncScreenReader(enable: boolean): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (enable && !this.ttsClickListener) {
      this.ttsClickListener = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (!target) return;
        if (target.closest('.a11y-panel, .a11y-trigger-wrapper, #vlibras-access-wrapper, #vlibras-app-root')) {
          return;
        }

        const text = target.innerText?.trim() || target.getAttribute('aria-label') || target.getAttribute('title');
        if (text && text.length > 1) {
          this.speak(text);
        }
      };

      window.addEventListener('click', this.ttsClickListener, true);

      const welcomeMsg: Record<string, string> = {
        'pt-BR': 'Leitura em voz alta ativada. Clique em qualquer texto da página para ouvir.',
        en: 'Screen reader activated. Click any text on the page to listen.',
        es: 'Lectura en voz alta activada. Haga clic en cualquier texto para escuchar.',
      };
      this.speak(welcomeMsg[this.i18n.currentLang()] || welcomeMsg['pt-BR']);
    } else if (!enable && this.ttsClickListener) {
      this.teardownScreenReader();
    }
  }

  private teardownScreenReader(): void {
    if (this.ttsClickListener && typeof window !== 'undefined') {
      window.removeEventListener('click', this.ttsClickListener, true);
      this.ttsClickListener = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  private speak(text: string): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const langMap: Record<string, string> = {
      'pt-BR': 'pt-BR',
      en: 'en-US',
      es: 'es-ES',
    };
    utterance.lang = langMap[this.i18n.currentLang()] || 'pt-BR';
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }

  private persistState(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const state: AccessibilityState = {
      fontScale: this.fontScale(),
      dyslexicFont: this.dyslexicFont(),
      textSpacing: this.textSpacing(),
      lineHeight: this.lineHeight(),
      alignLeft: this.alignLeft(),
      bionicReading: this.bionicReading(),
      highContrast: this.highContrast(),
      monochrome: this.monochrome(),
      invertColors: this.invertColors(),
      lowSaturation: this.lowSaturation(),
      hideMedia: this.hideMedia(),
      protanopia: this.protanopia(),
      deuteranopia: this.deuteranopia(),
      tritanopia: this.tritanopia(),
      highlightLinks: this.highlightLinks(),
      highlightHeadings: this.highlightHeadings(),
      pauseAnimations: this.pauseAnimations(),
      readingGuide: this.readingGuide(),
      largeCursor: this.largeCursor(),
      screenReader: this.screenReader(),
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
      if (typeof state.lineHeight === 'boolean') this.lineHeight.set(state.lineHeight);
      if (typeof state.alignLeft === 'boolean') this.alignLeft.set(state.alignLeft);
      if (typeof state.bionicReading === 'boolean') this.bionicReading.set(state.bionicReading);
      if (typeof state.highContrast === 'boolean') this.highContrast.set(state.highContrast);
      if (typeof state.monochrome === 'boolean') this.monochrome.set(state.monochrome);
      if (typeof state.invertColors === 'boolean') this.invertColors.set(state.invertColors);
      if (typeof state.lowSaturation === 'boolean') this.lowSaturation.set(state.lowSaturation);
      if (typeof state.hideMedia === 'boolean') this.hideMedia.set(state.hideMedia);
      if (typeof state.protanopia === 'boolean') this.protanopia.set(state.protanopia);
      if (typeof state.deuteranopia === 'boolean') this.deuteranopia.set(state.deuteranopia);
      if (typeof state.tritanopia === 'boolean') this.tritanopia.set(state.tritanopia);
      if (typeof state.highlightLinks === 'boolean') this.highlightLinks.set(state.highlightLinks);
      if (typeof state.highlightHeadings === 'boolean') this.highlightHeadings.set(state.highlightHeadings);
      if (typeof state.pauseAnimations === 'boolean') this.pauseAnimations.set(state.pauseAnimations);
      if (typeof state.readingGuide === 'boolean') this.readingGuide.set(state.readingGuide);
      if (typeof state.largeCursor === 'boolean') this.largeCursor.set(state.largeCursor);
      if (typeof state.screenReader === 'boolean') this.screenReader.set(state.screenReader);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}
