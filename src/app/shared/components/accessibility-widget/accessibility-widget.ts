import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  inject,
} from '@angular/core';
import { I18nService } from '@core';
import {
  A11Y_I18N,
  A11Y_SECTIONS,
  A11yFeatureKey,
  AccessibilityService,
  VlibrasService,
} from '@core/accessibility';
import { ReadingGuide } from './reading-guide/reading-guide';

@Component({
  selector: 'app-accessibility-widget',
  imports: [ReadingGuide],
  templateUrl: './accessibility-widget.html',
  styleUrl: './accessibility-widget.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessibilityWidget {
  readonly a11y = inject(AccessibilityService);
  readonly vlibras = inject(VlibrasService);
  private readonly i18n = inject(I18nService);

  readonly sections = A11Y_SECTIONS;
  readonly isPanelOpen = this.a11y.isPanelOpen;
  readonly hasActive = this.a11y.hasActiveSettings;
  readonly readingGuideActive = this.a11y.readingGuide;

  readonly i18nLabels = computed(() => {
    return A11Y_I18N[this.i18n.currentLang()] ?? A11Y_I18N['pt-BR'];
  });

  togglePanel(): void {
    this.a11y.togglePanel();
  }

  closePanel(): void {
    this.a11y.closePanel();
  }

  toggleVlibras(event?: Event): void {
    event?.stopPropagation();
    this.a11y.toggleVlibras();
  }

  isItemActive(id: A11yFeatureKey): boolean {
    switch (id) {
      case 'vlibrasActive':
        return this.vlibras.isActive();
      case 'fontScale':
        return this.a11y.fontScale() !== 'normal';
      case 'dyslexicFont':
        return this.a11y.dyslexicFont();
      case 'textSpacing':
        return this.a11y.textSpacing();
      case 'highContrast':
        return this.a11y.highContrast();
      case 'monochrome':
        return this.a11y.monochrome();
      case 'highlightLinks':
        return this.a11y.highlightLinks();
      case 'pauseAnimations':
        return this.a11y.pauseAnimations();
      case 'readingGuide':
        return this.a11y.readingGuide();
      default:
        return false;
    }
  }

  getItemBadge(id: A11yFeatureKey): string | null {
    if (id === 'fontScale') {
      const scale = this.a11y.fontScale();
      if (scale === 'large') return '+15%';
      if (scale === 'x-large') return '+30%';
      return '100%';
    }
    return null;
  }

  handleItemClick(id: A11yFeatureKey): void {
    switch (id) {
      case 'vlibrasActive':
        this.a11y.toggleVlibras();
        break;
      case 'fontScale':
        this.a11y.cycleFontScale();
        break;
      case 'dyslexicFont':
        this.a11y.toggleDyslexicFont();
        break;
      case 'textSpacing':
        this.a11y.toggleTextSpacing();
        break;
      case 'highContrast':
        this.a11y.toggleHighContrast();
        break;
      case 'monochrome':
        this.a11y.toggleMonochrome();
        break;
      case 'highlightLinks':
        this.a11y.toggleHighlightLinks();
        break;
      case 'pauseAnimations':
        this.a11y.togglePauseAnimations();
        break;
      case 'readingGuide':
        this.a11y.toggleReadingGuide();
        break;
    }
  }

  resetAll(): void {
    this.a11y.resetDefaults();
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.isPanelOpen()) {
      this.closePanel();
    }
  }
}
