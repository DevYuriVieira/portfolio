import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { I18nService } from '@core';
import { Button, Container, Heading, Link, Section, Text } from '@ui';
import { ArchitectureModal } from './components/architecture-modal/architecture-modal';
import { FleetOpsModal } from './components/fleetops-modal/fleetops-modal';
import { FarmFlowModal } from './components/farmflow-modal/farmflow-modal';
import { CaseStudyModal } from './components/case-study-modal/case-study-modal';
import { Project } from './project.model';
import { getProjectsData } from './projects.data';

export type ProjectFilterTrack = 'all' | 'fullstack' | 'backend' | 'frontend';

const PRIORITY_PROJECT_ORDER: readonly string[] = [
  'zeiss-recommendation-assistant',
  'fleetops-api',
  'farmflow',
  'work-fitness',
  'aurora-growth-platform',
  'payroll-system-java',
  'django-ecommerce',
  'spring-boot-ecommerce-api',
  'playstation-evolution-timeline',
  'fleet-management-system',
  'anime-weather-platform',
  'hogwarts-interactive-hub',
  'kuro-seafood-ecommerce',
  'modern-fighter-jets',
  'dental-clinic-db',
  'interactive-auth-ui',
];

const PROJECT_TRACK_MAP: Record<string, Exclude<ProjectFilterTrack, 'all'>> = {
  'zeiss-recommendation-assistant': 'fullstack',
  'fleetops-api': 'backend',
  farmflow: 'fullstack',
  'work-fitness': 'frontend',
  'aurora-growth-platform': 'frontend',
  'payroll-system-java': 'backend',
  'django-ecommerce': 'fullstack',
  'spring-boot-ecommerce-api': 'backend',
  'playstation-evolution-timeline': 'frontend',
  'fleet-management-system': 'frontend',
  'anime-weather-platform': 'frontend',
  'hogwarts-interactive-hub': 'frontend',
  'kuro-seafood-ecommerce': 'frontend',
  'modern-fighter-jets': 'frontend',
  'dental-clinic-db': 'backend',
  'interactive-auth-ui': 'frontend',
};

@Component({
  selector: 'app-projects',
  imports: [
    Section,
    Container,
    Heading,
    Text,
    Link,
    Button,
    ArchitectureModal,
    FleetOpsModal,
    FarmFlowModal,
    CaseStudyModal,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection implements OnInit {
  private readonly i18n = inject(I18nService);
  private readonly route = inject(ActivatedRoute, { optional: true });
  private readonly platformId = inject(PLATFORM_ID);

  readonly allRawProjects = computed(() => getProjectsData(this.i18n.currentLang()));

  readonly projects = computed<readonly Project[]>(() => {
    const raw = this.allRawProjects();
    const map = new Map(raw.map((p) => [p.id, p]));
    const ordered = PRIORITY_PROJECT_ORDER.map((id) => map.get(id)).filter(
      (p): p is Project => p !== undefined
    );
    const orderedIds = new Set(ordered.map((p) => p.id));
    const remaining = raw.filter((p) => !orderedIds.has(p.id));
    return [...ordered, ...remaining];
  });

  readonly activeFilter = signal<ProjectFilterTrack>('all');
  readonly displayLimit = signal<number>(5);
  readonly architectureModalOpen = signal<boolean>(false);
  readonly fleetOpsModalOpen = signal<boolean>(false);
  readonly farmFlowModalOpen = signal<boolean>(false);
  readonly selectedCaseStudyProject = signal<Project | null>(null);

  readonly filteredProjects = computed<readonly Project[]>(() => {
    const filter = this.activeFilter();
    const list = this.projects();
    if (filter === 'all') return list;
    return list.filter((p) => PROJECT_TRACK_MAP[p.id] === filter);
  });

  readonly showAll = computed(() => this.displayLimit() >= this.filteredProjects().length);

  readonly displayedProjects = computed<readonly Project[]>(() => {
    const filtered = this.filteredProjects();
    if (this.activeFilter() !== 'all') {
      return filtered;
    }
    return filtered.slice(0, this.displayLimit());
  });

  readonly filterCounts = computed(() => {
    const list = this.projects();
    return {
      all: list.length,
      fullstack: list.filter((p) => PROJECT_TRACK_MAP[p.id] === 'fullstack').length,
      backend: list.filter((p) => PROJECT_TRACK_MAP[p.id] === 'backend').length,
      frontend: list.filter((p) => PROJECT_TRACK_MAP[p.id] === 'frontend').length,
    };
  });

  readonly labels = computed(() => {
    const lang = this.i18n.currentLang();
    const total = this.filteredProjects().length;
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
        'View more projects (7) - Featured portfolio projects',
        'Ver mais projetos (7) de destaque do portfólio',
        'Ver más proyectos (7) destacados del portafolio',
      );
    } else if (currentLimit < total) {
      expandText = t(`View all projects (${total})`, `Ver todos os projetos (${total})`, `Ver todos los proyectos (${total})`);
      expandLabel = t(
        `View all projects (${total}) in portfolio`,
        `Ver todos os projetos (${total}) do portfólio`,
        `Ver todos los proyectos (${total}) del portafolio`,
      );
    } else {
      expandText = t('Collapse projects', 'Recolher projetos', 'Contraer projetos');
      expandLabel = t('Collapse projects list', 'Recolher projetos do portfólio', 'Contraer proyectos del portafolio');
    }

    return {
      eyebrow: t('01 // CASE STUDIES & ENGINEERING', '01 // CASOS DE ESTUDO & ENGENHARIA', '01 // CASOS DE ESTUDIO & INGENIERÍA'),
      title: t('Featured Projects & Case Studies', 'Projetos & Casos de Estudo', 'Proyectos & Casos de Estudio'),
      subtitle: t(
        'Selected production systems, distributed backends, and mobile apps engineered with Clean Architecture, automated testing, and measurable performance.',
        'Seleção curada de sistemas em produção, backends distribuídos e apps mobile construídos com Clean Architecture, testes automatizados e métricas reais.',
        'Selección curada de sistemas en producción, backends distribuidos y apps móviles construidos con Clean Architecture, pruebas automatizadas y métricas reales.',
      ),
      ariaLabel: t('Featured projects', 'Projetos em destaque', 'Proyectos destacados'),
      filterAriaLabel: t('Filter projects by engineering track', 'Filtrar projetos por especialidade', 'Filtrar proyectos por especialidad'),
      filterAll: t('All', 'Todos', 'Todos'),
      filterFullstack: t('Full-Stack', 'Full-Stack', 'Full-Stack'),
      filterBackend: t('Back-End', 'Back-End', 'Back-End'),
      filterFrontend: t('Front-End & Mobile', 'Front-End & Mobile', 'Front-End & Mobile'),
      challenge: t('Challenge', 'Desafio', 'Desafío'),
      solution: t('Solution', 'Solução', 'Solución'),
      archDecisions: t('Architecture', 'Arquitetura', 'Arquitectura'),
      archDecisionsBadge: t('Architecture', 'Arquitetura', 'Arquitectura'),
      results: t('Results', 'Resultados', 'Resultados'),
      techStack: t('Core Stack', 'Stack Principal', 'Stack Principal'),
      confidential: t('Confidential', 'Confidencial', 'Confidencial'),
      caseStudyTitle: t('Case Study', 'Estudo de Caso', 'Estudio de Caso'),
      openCaseStudy: t('View Full Case', 'Ver Estudo Completo', 'Ver Caso Completo'),
      viewCaseStudyAria: (title: string) =>
        t(
          `View technical details, challenge, and solution for ${title}`,
          `Ver detalhes técnicos, desafio e solução de ${title}`,
          `Ver detalles técnicos, desafío y solución de ${title}`,
        ),
      ndaFooter: t(
        'Serratec TIC/Software Residency • Source code restricted by NDA',
        'Residência Serratec TIC/Software • Código fonte restrito por NDA',
        'Residencia Serratec TIC/Software • Código fuente restringido por NDA',
      ),
      viewArchitecture: t('Architecture Diagram', 'Diagrama de Arquitetura', 'Diagrama de Arquitectura'),
      viewArchitectureAria: t(
        'Architecture Diagram - ZEISS project',
        'Diagrama de Arquitetura - Projeto ZEISS',
        'Diagrama de Arquitectura - Proyecto ZEISS',
      ),
      viewFleetOpsDossier: t('Dossier & Architecture', 'Dossiê & Arquitetura', 'Dossier & Arquitectura'),
      viewFleetOpsAria: t(
        'Dossier & Architecture - FleetOps API',
        'Dossiê & Arquitetura - FleetOps API',
        'Dossier & Arquitectura - FleetOps API',
      ),
      viewFarmFlowDossier: t('Dossier & Architecture', 'Dossiê & Arquitetura', 'Dossier & Arquitectura'),
      viewFarmFlowAria: t(
        'Dossier & Architecture - FarmFlow Ecosystem',
        'Dossiê & Arquitetura - FarmFlow Ecosystem',
        'Dossier & Arquitectura - FarmFlow Ecosystem',
      ),
      techAriaLabel: t('Technologies used in the project', 'Tecnologias utilizadas no projeto', 'Tecnologías utilizadas en el proyecto'),
      collapseLabel: t('Collapse projects list', 'Recolher projetos do portfólio', 'Contraer projetos del portafolio'),
      expandLabel: (_count?: number) => expandLabel,
      collapseText: t('Collapse projects', 'Recolher projetos', 'Contraer proyectos'),
      expandText: (_count?: number) => expandText,
    };
  });

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const projectIdFromRoute =
      this.route?.snapshot.paramMap.get('projectId') ??
      this.route?.snapshot.queryParamMap.get('project') ??
      this.readProjectParamFromWindow();

    if (projectIdFromRoute) {
      const match = this.allRawProjects().find((p) => p.id === projectIdFromRoute);
      if (match) {
        this.selectedCaseStudyProject.set(match);
      }
    }
  }

  @HostListener('window:portfolio:open-case', ['$event'])
  onExternalOpenCase(event: Event): void {
    const detail = (event as CustomEvent<{ projectId?: string }>).detail;
    const projectId = detail?.projectId;
    if (!projectId) return;
    const match = this.allRawProjects().find((p) => p.id === projectId);
    if (match) {
      this.openCaseStudyModal(match);
    }
  }

  setFilter(track: ProjectFilterTrack): void {
    this.activeFilter.set(track);
    if (track === 'all') {
      this.displayLimit.set(5);
    }
  }

  openCaseStudyModal(project: Project): void {
    this.selectedCaseStudyProject.set(project);
    this.syncProjectUrl(project.id);
  }

  closeCaseStudyModal(): void {
    this.selectedCaseStudyProject.set(null);
    this.syncProjectUrl(null);
  }

  openArchitectureModal(): void {
    this.selectedCaseStudyProject.set(null);
    this.architectureModalOpen.set(true);
  }

  closeArchitectureModal(): void {
    this.architectureModalOpen.set(false);
    this.syncProjectUrl(null);
  }

  openFleetOpsModal(): void {
    this.selectedCaseStudyProject.set(null);
    this.fleetOpsModalOpen.set(true);
  }

  closeFleetOpsModal(): void {
    this.fleetOpsModalOpen.set(false);
    this.syncProjectUrl(null);
  }

  openFarmFlowModal(): void {
    this.selectedCaseStudyProject.set(null);
    this.farmFlowModalOpen.set(true);
  }

  closeFarmFlowModal(): void {
    this.farmFlowModalOpen.set(false);
    this.syncProjectUrl(null);
  }

  toggleShowAll(): void {
    const currentLimit = this.displayLimit();
    const total = this.filteredProjects().length;

    if (currentLimit <= 5) {
      this.displayLimit.set(Math.min(7, total));
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

  private readProjectParamFromWindow(): string | null {
    try {
      const params = new URLSearchParams(window.location.search);
      const fromQuery = params.get('project');
      if (fromQuery) return fromQuery;

      const match = window.location.pathname.match(/^\/projects\/([^/]+)/);
      return match ? decodeURIComponent(match[1]) : null;
    } catch {
      return null;
    }
  }

  private syncProjectUrl(projectId: string | null): void {
    if (!isPlatformBrowser(this.platformId)) return;
    try {
      if (typeof history === 'undefined' || !history.replaceState) return;
      const search = window.location.search;
      if (projectId) {
        history.replaceState(null, '', `/projects/${encodeURIComponent(projectId)}${search}`);
      } else if (window.location.pathname.startsWith('/projects/')) {
        history.replaceState(null, '', `/${search}`);
      }
    } catch {}
  }
}
