import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutSection } from './sections/about';
import { ContactSection } from './sections/contact';
import { ExperienceSection } from './sections/experience';
import { HeroSection } from './sections/hero';
import { ProjectsSection } from './sections/projects';
import { SkillsSection } from './sections/skills';

@Component({
  selector: 'app-home',
  imports: [
    HeroSection,
    AboutSection,
    ExperienceSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}

