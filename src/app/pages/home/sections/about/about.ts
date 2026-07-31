import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Container, Heading, Section, Text } from '@ui';
import { ENGINEERING_PRINCIPLES } from './about.data';
import { EngineeringPrinciple } from './about.model';

@Component({
  selector: 'app-about',
  imports: [Section, Container, Heading, Text],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  readonly principles: readonly EngineeringPrinciple[] = ENGINEERING_PRINCIPLES;
}
