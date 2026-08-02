import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { I18nService } from '@core';
import { Button, Container, Heading, Link, Section, Text } from '@ui';
import { getProjectsData } from './projects.data';

@Component({
  selector: 'app-projects',
  imports: [Section, Container, Heading, Text, Link, Button],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  private readonly i18n = inject(I18nService);

  readonly projects = computed(() => getProjectsData(this.i18n.currentLang()));
  readonly showAll = signal<boolean>(false);

  readonly displayedProjects = computed(() =>
    this.showAll() ? this.projects() : this.projects().filter((p) => p.featured)
  );

  /** Labels for hardcoded template strings */
  readonly labels = computed(() =>
    this.i18n.currentLang() === 'en'
      ? {
          eyebrow: 'Case Studies & Engineering',
          title: 'Projects & Case Studies',
          subtitle:
            'A selection of enterprise applications, full-stack systems, backend APIs, and frontend experiences built with a focus on clean architecture, resilience, and real value.',
          ariaLabel: 'Featured projects',
          challenge: 'Challenge',
          solution: 'Solution',
          archDecisions: 'Architecture Decisions',
          techHighlights: 'Technical Highlights',
          results: 'Results',
          techStack: 'Technology Stack',
          confidential: 'Confidential',
          ndaFooter: 'Serratec TIC/Software Residency • Source code restricted by NDA',
          techAriaLabel: 'Technologies used in the project',
          collapseLabel: 'Collapse projects',
          expandLabel: (count: number) => `View all ${count} portfolio projects`,
          collapseText: 'Collapse projects',
          expandText: (count: number) => `View all projects (${count})`,
        }
      : {
          eyebrow: 'Casos de Estudo & Engenharia',
          title: 'Projetos & Casos de Estudo',
          subtitle:
            'Seleção de aplicações corporativas, sistemas full-stack, APIs backend e experiências frontend construídas com foco em arquitetura limpa, resiliência e valor real.',
          ariaLabel: 'Projetos em destaque',
          challenge: 'Desafio',
          solution: 'Solução',
          archDecisions: 'Decisões de Arquitetura',
          techHighlights: 'Destaques Técnicos',
          results: 'Resultados',
          techStack: 'Stack Tecnológica',
          confidential: 'Confidencial',
          ndaFooter: 'Residência Serratec TIC/Software • Código fonte restrito por NDA',
          techAriaLabel: 'Tecnologias utilizadas no projeto',
          collapseLabel: 'Recolher lista de projetos',
          expandLabel: (count: number) =>
            `Ver todos os ${count} projetos do portfólio`,
          collapseText: 'Recolher projetos',
          expandText: (count: number) => `Ver todos os projetos (${count})`,
        }
  );

  toggleShowAll(): void {
    if (this.showAll()) {
      const projectsElement = document.getElementById('projects');
      if (projectsElement && typeof projectsElement.scrollIntoView === 'function') {
        projectsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    this.showAll.update((val) => !val);
  }
}
