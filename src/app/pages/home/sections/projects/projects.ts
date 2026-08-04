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
  readonly displayLimit = signal<number>(5);

  readonly showAll = computed(() => this.displayLimit() >= this.projects().length);

  readonly displayedProjects = computed(() =>
    this.projects().slice(0, this.displayLimit())
  );

  /** Labels for hardcoded template strings */
  readonly labels = computed(() => {
    const isEn = this.i18n.currentLang() === 'en';
    const total = this.projects().length;
    const currentLimit = this.displayLimit();

    let expandText = '';
    let expandLabel = '';

    if (currentLimit <= 5) {
      expandText = isEn ? 'View more projects (7)' : 'Ver mais projetos (7)';
      expandLabel = isEn
        ? 'View 7 featured portfolio projects'
        : 'Ver 7 projetos de destaque do portfólio';
    } else if (currentLimit < total) {
      expandText = isEn ? `View all projects (${total})` : `Ver todos os projetos (${total})`;
      expandLabel = isEn
        ? `View all ${total} portfolio projects`
        : `Ver todos os ${total} projetos do portfólio`;
    } else {
      expandText = isEn ? 'Collapse projects' : 'Recolher projetos';
      expandLabel = isEn ? 'Collapse project list' : 'Recolher lista de projetos';
    }

    return isEn
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
          expandLabel: (_count?: number) => expandLabel,
          collapseText: 'Collapse projects',
          expandText: (_count?: number) => expandText,
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
          expandLabel: (_count?: number) => expandLabel,
          collapseText: 'Recolher projetos',
          expandText: (_count?: number) => expandText,
        };
  });

  toggleShowAll(): void {
    const currentLimit = this.displayLimit();
    const total = this.projects().length;

    if (currentLimit <= 5) {
      this.displayLimit.set(7);
    } else if (currentLimit < total) {
      this.displayLimit.set(total);
    } else {
      const projectsElement = document.getElementById('projects');
      if (projectsElement && typeof projectsElement.scrollIntoView === 'function') {
        projectsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      this.displayLimit.set(5);
    }
  }
}
