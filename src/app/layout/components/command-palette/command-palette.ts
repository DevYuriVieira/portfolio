import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { I18nService, SupportedLang, TelemetryService } from '@core';

export type CommandIcon =
  | 'section'
  | 'case'
  | 'download'
  | 'copy'
  | 'external'
  | 'metrics'
  | 'globe';

export interface CommandItem {
  readonly id: string;
  readonly group: 'navigation' | 'cases' | 'actions' | 'language';
  readonly icon: CommandIcon;
  readonly label: string;
  readonly hint: string;
  readonly keywords: string;
  readonly run: () => void;
}

interface PaletteLabels {
  readonly placeholder: string;
  readonly dialogAria: string;
  readonly emptyState: string;
  readonly escLabel: string;
  readonly moveLabel: string;
  readonly selectLabel: string;
  readonly copiedNotice: string;
  readonly groups: Record<CommandItem['group'], string>;
}

const LABELS_I18N: Record<SupportedLang, PaletteLabels> = {
  'pt-BR': {
    placeholder: 'Ir para seção, projeto, currículo ou idioma...',
    dialogAria: 'Busca rápida do portfólio',
    emptyState: 'Nenhum resultado encontrado.',
    escLabel: 'Fechar',
    moveLabel: 'Navegar',
    selectLabel: 'Abrir',
    copiedNotice: 'E-mail copiado para a área de transferência.',
    groups: {
      navigation: 'Seções',
      cases: 'Projetos em Destaque',
      actions: 'Ações & Currículos',
      language: 'Idioma',
    },
  },
  en: {
    placeholder: 'Jump to section, case study, resume, or language...',
    dialogAria: 'Quick portfolio navigation',
    emptyState: 'No matching results.',
    escLabel: 'Close',
    moveLabel: 'Navigate',
    selectLabel: 'Open',
    copiedNotice: 'Email copied to clipboard.',
    groups: {
      navigation: 'Sections',
      cases: 'Featured Case Studies',
      actions: 'Actions & Resumes',
      language: 'Language',
    },
  },
  es: {
    placeholder: 'Ir a sección, proyecto, currículum o idioma...',
    dialogAria: 'Navegación rápida del portafolio',
    emptyState: 'Sin resultados.',
    escLabel: 'Cerrar',
    moveLabel: 'Navegar',
    selectLabel: 'Abrir',
    copiedNotice: 'Correo copiado al portapapeles.',
    groups: {
      navigation: 'Secciones',
      cases: 'Casos Destacados',
      actions: 'Acciones & CVs',
      language: 'Idioma',
    },
  },
};

@Component({
  selector: 'app-command-palette',
  standalone: true,
  templateUrl: './command-palette.html',
  styleUrl: './command-palette.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandPalette {
  private readonly i18n = inject(I18nService);
  private readonly telemetry = inject(TelemetryService);
  private readonly platformId = inject(PLATFORM_ID);

  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;
  @ViewChild('listContainer') listContainer?: ElementRef<HTMLElement>;

  readonly isOpen = signal<boolean>(false);
  readonly query = signal<string>('');
  readonly activeIndex = signal<number>(0);
  readonly notice = signal<string | null>(null);

  readonly labels = computed<PaletteLabels>(
    () => LABELS_I18N[this.i18n.currentLang()] ?? LABELS_I18N['pt-BR']
  );

  readonly allItems = computed<readonly CommandItem[]>(() => {
    const lang = this.i18n.currentLang();
    const isPt = lang === 'pt-BR';
    const isEs = lang === 'es';
    const t = (en: string, pt: string, es: string) => (isPt ? pt : isEs ? es : en);
    const cvSuffix = isPt ? 'pt' : 'en';

    return [
      {
        id: 'nav-projects',
        group: 'navigation',
        icon: 'section',
        label: t('Projects & Case Studies', 'Projetos & Casos de Estudo', 'Proyectos & Casos de Estudio'),
        hint: '#projects',
        keywords: 'projects projetos case studies zeiss fleetops farmflow',
        run: () => this.scrollTo('projects'),
      },
      {
        id: 'nav-experience',
        group: 'navigation',
        icon: 'section',
        label: t('Experience & Education', 'Experiência & Formação', 'Experiencia & Formación'),
        hint: '#experience',
        keywords: 'experience experiencia senai serratec timeline carreira',
        run: () => this.scrollTo('experience'),
      },
      {
        id: 'nav-about',
        group: 'navigation',
        icon: 'section',
        label: t('About & Engineering Principles', 'Sobre & Princípios', 'Sobre mí & Principios'),
        hint: '#about',
        keywords: 'about sobre engenharia producao clean architecture',
        run: () => this.scrollTo('about'),
      },
      {
        id: 'nav-skills',
        group: 'navigation',
        icon: 'section',
        label: t('Technical Skills', 'Habilidades Técnicas', 'Habilidades Técnicas'),
        hint: '#skills',
        keywords: 'skills habilidades java dotnet c# react angular postgresql',
        run: () => this.scrollTo('skills'),
      },
      {
        id: 'nav-ai',
        group: 'navigation',
        icon: 'section',
        label: t('AI & Automation', 'IA & Automação', 'IA & Automatización'),
        hint: '#ai-experience',
        keywords: 'ai ia automacao n8n neural canvas 3d webgl',
        run: () => this.scrollTo('ai-experience'),
      },
      {
        id: 'nav-contact',
        group: 'navigation',
        icon: 'section',
        label: t('Contact & Availability', 'Contato', 'Contacto'),
        hint: '#contact',
        keywords: 'contact contato email whatsapp linkedin github',
        run: () => this.scrollTo('contact'),
      },
      {
        id: 'case-zeiss',
        group: 'cases',
        icon: 'case',
        label: 'ZEISS Recommendation Assistant',
        hint: 'React 19 · Spring Boot 4',
        keywords: 'zeiss nda ocr rag spring boot react corporate',
        run: () => this.openCaseStudy('zeiss-recommendation-assistant'),
      },
      {
        id: 'case-fleetops',
        group: 'cases',
        icon: 'case',
        label: 'FleetOps API',
        hint: '.NET 10 · RabbitMQ · 300 tests',
        keywords: 'fleetops dotnet c# rabbitmq outbox distributed postgresql',
        run: () => this.openCaseStudy('fleetops-api'),
      },
      {
        id: 'case-farmflow',
        group: 'cases',
        icon: 'case',
        label: 'FarmFlow',
        hint: 'Java 21 · Expo Offline-First',
        keywords: 'farmflow java 21 virtual threads react native expo offline',
        run: () => this.openCaseStudy('farmflow'),
      },
      {
        id: 'case-workfitness',
        group: 'cases',
        icon: 'case',
        label: 'Work-Fitness',
        hint: '100/100 Lighthouse · 32 kB',
        keywords: 'work fitness lighthouse freelance typescript vite wcag',
        run: () => this.openCaseStudy('work-fitness'),
      },
      {
        id: 'action-cv-fs',
        group: 'actions',
        icon: 'download',
        label: t('Full-Stack Resume (PDF)', 'Currículo Full-Stack (PDF)', 'CV Full-Stack (PDF)'),
        hint: isPt ? 'PT-BR' : 'EN',
        keywords: 'cv resume curriculo fullstack pdf download',
        run: () => this.openCv('fullstack', `assets/cv-yuri-vieira-teixeira-${cvSuffix}.pdf`),
      },
      {
        id: 'action-cv-be',
        group: 'actions',
        icon: 'download',
        label: t('Back-End Resume (PDF)', 'Currículo Back-End (PDF)', 'CV Back-End (PDF)'),
        hint: isPt ? 'PT-BR' : 'EN',
        keywords: 'cv resume curriculo backend java dotnet pdf download',
        run: () => this.openCv('backend', `assets/cv-yuri-vieira-teixeira-backend-${cvSuffix}.pdf`),
      },
      {
        id: 'action-cv-fe',
        group: 'actions',
        icon: 'download',
        label: t('Front-End & Mobile Resume (PDF)', 'Currículo Front-End & Mobile (PDF)', 'CV Front-End & Mobile (PDF)'),
        hint: isPt ? 'PT-BR' : 'EN',
        keywords: 'cv resume curriculo frontend mobile react angular pdf download',
        run: () => this.openCv('frontend', `assets/cv-yuri-vieira-teixeira-frontend-${cvSuffix}.pdf`),
      },
      {
        id: 'action-copy-email',
        group: 'actions',
        icon: 'copy',
        label: t('Copy Email', 'Copiar E-mail', 'Copiar Correo'),
        hint: 'yurivieirateixeira98@gmail.com',
        keywords: 'copy email copiar correio gmail contato',
        run: () => this.copyEmail(),
      },
      {
        id: 'action-linkedin',
        group: 'actions',
        icon: 'external',
        label: 'LinkedIn',
        hint: '/in/yuri-vieira-teixeira',
        keywords: 'linkedin social profile rede',
        run: () => this.openExternal('https://linkedin.com/in/yuri-vieira-teixeira/'),
      },
      {
        id: 'action-github',
        group: 'actions',
        icon: 'external',
        label: 'GitHub',
        hint: '@DevYuriVieira',
        keywords: 'github code repositorios codigo fonte',
        run: () => this.openExternal('https://github.com/DevYuriVieira'),
      },
      {
        id: 'action-metrics',
        group: 'actions',
        icon: 'metrics',
        label: t('Runtime Metrics', 'Métricas de Runtime', 'Métricas de Runtime'),
        hint: 'Web Vitals',
        keywords: 'metrics telemetry rum web vitals performance',
        run: () => {
          this.close();
          this.telemetry.openModal('vitals');
        },
      },
      {
        id: 'lang-pt',
        group: 'language',
        icon: 'globe',
        label: 'Português (Brasil)',
        hint: 'PT-BR',
        keywords: 'idioma language portugues brasil pt',
        run: () => this.switchLang('pt-BR'),
      },
      {
        id: 'lang-en',
        group: 'language',
        icon: 'globe',
        label: 'English (US)',
        hint: 'EN',
        keywords: 'idioma language english ingles en',
        run: () => this.switchLang('en'),
      },
      {
        id: 'lang-es',
        group: 'language',
        icon: 'globe',
        label: 'Español',
        hint: 'ES',
        keywords: 'idioma language espanol spanish es',
        run: () => this.switchLang('es'),
      },
    ];
  });

  readonly filteredItems = computed<readonly CommandItem[]>(() => {
    const q = this.query().trim().toLowerCase();
    const list = this.allItems();
    if (!q) return list;
    return list.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.hint.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q)
    );
  });

  readonly groupedItems = computed(() => {
    const groups: CommandItem['group'][] = ['navigation', 'cases', 'actions', 'language'];
    const items = this.filteredItems();
    const groupLabels = this.labels().groups;
    return groups
      .map((key) => ({
        key,
        title: groupLabels[key],
        items: items.filter((i) => i.group === key),
      }))
      .filter((g) => g.items.length > 0);
  });

  @HostListener('window:keydown', ['$event'])
  onGlobalKeydown(event: KeyboardEvent): void {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.toggle();
      return;
    }

    if (!this.isOpen()) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }

    const total = this.filteredItems().length;
    if (total === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.activeIndex.update((i) => (i + 1) % total);
      this.scrollActiveIntoView();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.activeIndex.update((i) => (i - 1 + total) % total);
      this.scrollActiveIntoView();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const selected = this.filteredItems()[this.activeIndex()];
      if (selected) {
        selected.run();
      }
    }
  }

  @HostListener('window:portfolio:open-command-palette')
  onOpenTrigger(): void {
    this.open();
  }

  open(): void {
    this.isOpen.set(true);
    this.query.set('');
    this.activeIndex.set(0);
    this.notice.set(null);
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.searchInput?.nativeElement.focus(), 10);
    }
  }

  close(): void {
    this.isOpen.set(false);
    this.query.set('');
  }

  toggle(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.query.set(value);
    this.activeIndex.set(0);
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  getFlatIndex(item: CommandItem): number {
    return this.filteredItems().findIndex((i) => i.id === item.id);
  }

  executeItem(item: CommandItem): void {
    item.run();
  }

  private scrollActiveIntoView(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    setTimeout(() => {
      const activeEl = this.listContainer?.nativeElement.querySelector('.cmd-item.is-active');
      if (activeEl && typeof activeEl.scrollIntoView === 'function') {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  private scrollTo(sectionId: string): void {
    this.close();
    if (!isPlatformBrowser(this.platformId)) return;
    window.dispatchEvent(new CustomEvent('portfolio:hydrate-sections'));
    const el = document.getElementById(sectionId);
    if (el && el.classList.contains('home__section-placeholder')) {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private openCaseStudy(projectId: string): void {
    this.close();
    if (!isPlatformBrowser(this.platformId)) return;
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.dispatchEvent(
      new CustomEvent('portfolio:open-case', { detail: { projectId } })
    );
  }

  private openCv(track: 'fullstack' | 'backend' | 'frontend', url: string): void {
    this.telemetry.trackCvDownload(track, this.i18n.currentLang());
    this.openExternal(url);
  }

  private async copyEmail(): Promise<void> {
    if (isPlatformBrowser(this.platformId) && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText('yurivieirateixeira98@gmail.com');
      } catch {}
    }
    this.notice.set(this.labels().copiedNotice);
    setTimeout(() => {
      this.notice.set(null);
      this.close();
    }, 900);
  }

  private openExternal(url: string): void {
    this.close();
    if (isPlatformBrowser(this.platformId)) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  private switchLang(lang: SupportedLang): void {
    this.i18n.setLang(lang);
    this.close();
  }
}
