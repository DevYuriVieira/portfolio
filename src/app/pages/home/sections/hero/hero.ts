import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  Button,
  Container,
  Heading,
  Link,
  ScrollIndicator,
  Section,
  Text,
} from '@ui';

@Component({
  selector: 'app-hero',
  imports: [
    Section,
    Container,
    Heading,
    Text,
    Button,
    Link,
    ScrollIndicator,
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {}
