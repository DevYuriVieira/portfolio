import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutSection } from './sections/about';
import { HeroSection } from './sections/hero';
import { ProjectsSection } from './sections/projects';

@Component({
  selector: 'app-home',
  imports: [HeroSection, AboutSection, ProjectsSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
