import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button, Container, Heading, Link, ScrollIndicator, Section, Text } from '@ui';
import { HERO_SECTION_DATA } from './hero.data';
import { HeroSectionData } from './hero.model';

@Component({
  selector: 'app-hero',
  imports: [Section, Container, Heading, Text, Button, Link, ScrollIndicator],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {
  readonly data: HeroSectionData = HERO_SECTION_DATA;
}
