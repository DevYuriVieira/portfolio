import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  A11Y_I18N_LABELS,
  A11Y_SECTIONS,
  A11yFeatureKey,
  AccessibilityService,
  VlibrasService,
} from '@core/accessibility';
import { I18nService } from '@core';
import { ReadingGuide } from './reading-guide/reading-guide';

@Component({
  selector: 'app-accessibility-widget',
  standalone: true,
  imports: [CommonModule, ReadingGuide],
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
  readonly hasActiveSettings = this.a11y.hasActiveSettings;
  readonly hasActive = this.a11y.hasActiveSettings;
  readonly isReadingGuideActive = this.a11y.readingGuide;

  readonly i18nLabels = computed(() => {
    return A11Y_I18N_LABELS[this.i18n.currentLang()] ?? A11Y_I18N_LABELS['pt-BR'];
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
      case 'screenReader':
        return this.a11y.screenReader();
      case 'fontScale':
        return this.a11y.fontScale() !== 'normal';
      case 'dyslexicFont':
        return this.a11y.dyslexicFont();
      case 'textSpacing':
        return this.a11y.textSpacing();
      case 'lineHeight':
        return this.a11y.lineHeight();
      case 'alignLeft':
        return this.a11y.alignLeft();
      case 'bionicReading':
        return this.a11y.bionicReading();
      case 'highContrast':
        return this.a11y.highContrast();
      case 'monochrome':
        return this.a11y.monochrome();
      case 'invertColors':
        return this.a11y.invertColors();
      case 'lowSaturation':
        return this.a11y.lowSaturation();
      case 'hideMedia':
        return this.a11y.hideMedia();
      case 'protanopia':
        return this.a11y.protanopia();
      case 'deuteranopia':
        return this.a11y.deuteranopia();
      case 'tritanopia':
        return this.a11y.tritanopia();
      case 'highlightLinks':
        return this.a11y.highlightLinks();
      case 'highlightHeadings':
        return this.a11y.highlightHeadings();
      case 'pauseAnimations':
        return this.a11y.pauseAnimations();
      case 'readingGuide':
        return this.a11y.readingGuide();
      case 'largeCursor':
        return this.a11y.largeCursor();
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
      case 'screenReader':
        this.a11y.toggleScreenReader();
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
      case 'lineHeight':
        this.a11y.toggleLineHeight();
        break;
      case 'alignLeft':
        this.a11y.toggleAlignLeft();
        break;
      case 'bionicReading':
        this.a11y.toggleBionicReading();
        break;
      case 'highContrast':
        this.a11y.toggleHighContrast();
        break;
      case 'monochrome':
        this.a11y.toggleMonochrome();
        break;
      case 'invertColors':
        this.a11y.toggleInvertColors();
        break;
      case 'lowSaturation':
        this.a11y.toggleLowSaturation();
        break;
      case 'hideMedia':
        this.a11y.toggleHideMedia();
        break;
      case 'protanopia':
        this.a11y.toggleProtanopia();
        break;
      case 'deuteranopia':
        this.a11y.toggleDeuteranopia();
        break;
      case 'tritanopia':
        this.a11y.toggleTritanopia();
        break;
      case 'highlightLinks':
        this.a11y.toggleHighlightLinks();
        break;
      case 'highlightHeadings':
        this.a11y.toggleHighlightHeadings();
        break;
      case 'pauseAnimations':
        this.a11y.togglePauseAnimations();
        break;
      case 'readingGuide':
        this.a11y.toggleReadingGuide();
        break;
      case 'largeCursor':
        this.a11y.toggleLargeCursor();
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
