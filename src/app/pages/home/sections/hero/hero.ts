import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { I18nService } from '@core';
import { Button, Container, Heading, Link, ScrollIndicator, Section, Text } from '@ui';
import { HeroParticlesVisual } from './hero-particles-visual';
import { getHeroData } from './hero.data';

@Component({
  selector: 'app-hero',
  imports: [Section, Container, Heading, Text, Button, Link, ScrollIndicator, HeroParticlesVisual],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection implements OnInit {
  private readonly i18n = inject(I18nService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly data = computed(() => getHeroData(this.i18n.currentLang()));
  readonly isDesktop = signal<boolean>(false);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (window.innerWidth >= 768) {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => this.isDesktop.set(true));
      } else {
        setTimeout(() => this.isDesktop.set(true), 50);
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

