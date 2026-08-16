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

  readonly labels = computed(() => {
    const lang = this.i18n.currentLang();
    const total = this.projects().length;
    const currentLimit = this.displayLimit();

    const t = (en: string, pt: string, es: string) => {
      if (lang === 'en') return en;
      if (lang === 'es') return es;
      return pt;
    };

    let expandText = '';
    let expandLabel = '';

    if (currentLimit <= 5) {
      expandText = t('View more projects (7)', 'Ver mais projetos (7)', 'Ver más proyectos (7)');
      expandLabel = t(
        'View 7 featured portfolio projects',
        'Ver 7 projetos de destaque do portfólio',
        'Ver 7 proyectos destacados del portafolio',
      );
    } else if (currentLimit < total) {
      expandText = t(`View all projects (${total})`, `Ver todos os projetos (${total})`, `Ver todos los proyectos (${total})`);
      expandLabel = t(
        `View all ${total} portfolio projects`,
        `Ver todos os ${total} projetos do portfólio`,
        `Ver todos los ${total} proyectos del portafolio`,
      );
    } else {
      expandText = t('Collapse projects', 'Recolher projetos', 'Contraer proyectos');
      expandLabel = t('Collapse project list', 'Recolher lista de projetos', 'Contraer lista de proyectos');
    }

    return {
      eyebrow: t('Case Studies & Engineering', 'Casos de Estudo & Engenharia', 'Casos de Estudio & Ingeniería'),
      title: t('Projects & Case Studies', 'Projetos & Casos de Estudo', 'Proyectos & Casos de Estudio'),
      subtitle: t(
        'A selection of enterprise applications, full-stack systems, backend APIs, and frontend experiences built with a focus on clean architecture, resilience, and real value.',
        'Seleção de aplicações corporativas, sistemas full-stack, APIs backend e experiências frontend construídas com foco em arquitetura limpa, resiliência e valor real.',
        'Selección de aplicaciones corporativas, sistemas full-stack, APIs backend y experiencias frontend construidas con enfoque en arquitectura limpia, resiliencia y valor real.',
      ),
      ariaLabel: t('Featured projects', 'Projetos em destaque', 'Proyectos destacados'),
      challenge: t('Challenge', 'Desafio', 'Desafío'),
      solution: t('Solution', 'Solução', 'Solución'),
      archDecisions: t('Architecture Decisions', 'Decisões de Arquitetura', 'Decisiones de Arquitectura'),
      techHighlights: t('Technical Highlights', 'Destaques Técnicos', 'Aspectos Técnicos Destacados'),
      results: t('Results', 'Resultados', 'Resultados'),
      techStack: t('Technology Stack', 'Stack Tecnológica', 'Stack Tecnológico'),
      confidential: t('Confidential', 'Confidencial', 'Confidencial'),
      ndaFooter: t(
        'Serratec TIC/Software Residency • Source code restricted by NDA',
        'Residência Serratec TIC/Software • Código fonte restrito por NDA',
        'Residencia Serratec TIC/Software • Código fuente restringido por NDA',
      ),
      techAriaLabel: t('Technologies used in the project', 'Tecnologias utilizadas no projeto', 'Tecnologías utilizadas en el proyecto'),
      collapseLabel: t('Collapse projects', 'Recolher lista de projetos', 'Contraer lista de proyectos'),
      expandLabel: (_count?: number) => expandLabel,
      collapseText: t('Collapse projects', 'Recolher projetos', 'Contraer proyectos'),
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
