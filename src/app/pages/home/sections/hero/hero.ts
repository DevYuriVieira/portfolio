import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { I18nService, TelemetryService } from '@core';
import { Button, Container, Heading, ScrollIndicator, Section, Text } from '@ui';
import { HeroParticlesVisual } from './hero-particles-visual';
import { getHeroData } from './hero.data';
import { CvTrack, HeroCvOption } from './hero.model';

@Component({
  selector: 'app-hero',
  imports: [Section, Container, Heading, Text, Button, ScrollIndicator, HeroParticlesVisual],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection implements OnInit {
  private readonly i18n = inject(I18nService);
  private readonly telemetry = inject(TelemetryService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly data = computed(() => getHeroData(this.i18n.currentLang()));
  readonly isDesktop = signal<boolean>(false);
  readonly selectedCvTrack = signal<CvTrack>('fullstack');
  readonly cvMenuOpen = signal<boolean>(false);

  readonly activeCv = computed<HeroCvOption>(() => {
    const options = this.data().cvOptions;
    const track = this.selectedCvTrack();
    return options.find((opt) => opt.id === track) ?? options[0];
  });

  selectCvTrack(track: CvTrack): void {
    this.selectedCvTrack.set(track);
    this.cvMenuOpen.set(false);
  }

  toggleCvMenu(): void {
    this.cvMenuOpen.update((v) => !v);
  }

  closeCvMenu(): void {
    this.cvMenuOpen.set(false);
  }

  onCvDownload(): void {
    this.telemetry.trackCvDownload(this.selectedCvTrack(), this.i18n.currentLang());
  }

  onWhatsAppClick(): void {
    this.telemetry.trackWhatsAppClick('hero', this.i18n.currentLang());
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.cvMenuOpen()) return;
    const target = event.target as Node | null;
    const splitEl = this.elementRef.nativeElement.querySelector('.hero__cv-split');
    if (splitEl && target && !splitEl.contains(target)) {
      this.cvMenuOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.cvMenuOpen()) {
      this.cvMenuOpen.set(false);
    }
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (window.innerWidth >= 768) {
      const scheduleVisual = () => {
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(() => this.isDesktop.set(true), { timeout: 2500 });
        } else {
          setTimeout(() => this.isDesktop.set(true), 200);
        }
      };

      if (document.readyState === 'complete') {
        setTimeout(scheduleVisual, 250);
      } else {
        window.addEventListener('load', () => setTimeout(scheduleVisual, 250), { once: true });
      }
    }
  }

  scrollToProjects(): void {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
