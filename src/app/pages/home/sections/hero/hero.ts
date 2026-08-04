import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
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
export class HeroSection {
  private readonly i18n = inject(I18nService);

  readonly data = computed(() => getHeroData(this.i18n.currentLang()));

  scrollToProjects(): void {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
