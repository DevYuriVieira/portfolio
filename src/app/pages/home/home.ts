import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { SeoService } from '@core';
import { InteractiveParticles } from '@shared';
import { AboutSection } from './sections/about';
import { ContactSection } from './sections/contact';
import { ExperienceSection } from './sections/experience';
import { HeroSection } from './sections/hero';
import { ProjectsSection } from './sections/projects';
import { AiExperienceSection } from './sections/ai-experience';
import { SkillsSection } from './sections/skills';

@Component({
  selector: 'app-home',
  imports: [
    InteractiveParticles,
    HeroSection,
    AboutSection,
    ExperienceSection,
    SkillsSection,
    AiExperienceSection,
    ProjectsSection,
    ContactSection,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateSeo();
  }
}
