import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { I18nService, SupportedLang, TelemetryService } from '@core';
import { Container } from '@ui';

interface HeaderNavLabels {
  readonly about: string;
  readonly experience: string;
  readonly skills: string;
  readonly projects: string;
  readonly ai: string;
  readonly contact: string;
  readonly brandAriaLabel: string;
  readonly navAriaLabel: string;
  readonly mobileMenuAriaLabel: string;
  readonly menuBtnAriaLabel: string;
  readonly primaryActionType: 'whatsapp' | 'linkedin';
  readonly primaryActionLabel: string;
  readonly primaryActionAriaLabel: string;
  readonly primaryActionUrl: string;
  readonly langMenuAriaLabel: string;
}

const SECTION_IDS = ['projects', 'experience', 'about', 'skills', 'ai-experience', 'contact'] as const;

@Component({
  selector: 'app-header',
  imports: [Container],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header implements OnInit {
  private readonly i18n = inject(I18nService);
  readonly telemetry = inject(TelemetryService);

  readonly mobileMenuOpen = signal<boolean>(false);
  readonly currentLang = this.i18n.currentLang;
  readonly isScrolledPastHero = signal<boolean>(false);
  readonly langMenuOpen = signal<boolean>(false);
  readonly activeSection = signal<string>('top');

  private readonly navI18n: Record<SupportedLang, HeaderNavLabels> = {
    en: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      ai: 'AI & Automation',
      contact: 'Contact',
      brandAriaLabel: 'Yuri Vieira | Go to top of page',
      navAriaLabel: 'Main navigation',
      mobileMenuAriaLabel: 'Mobile navigation menu',
      menuBtnAriaLabel: 'Toggle navigation menu',
      primaryActionType: 'linkedin',
      primaryActionLabel: 'LinkedIn',
      primaryActionAriaLabel: 'Connect with Yuri Vieira on LinkedIn',
      primaryActionUrl: 'https://linkedin.com/in/yuri-vieira-teixeira/',
      langMenuAriaLabel: 'Select language',
    },
    'pt-BR': {
      about: 'Sobre',
      experience: 'Experiência',
      skills: 'Habilidades',
      projects: 'Projetos',
      ai: 'IA & Automação',
      contact: 'Contato',
      brandAriaLabel: 'Yuri Vieira | Ir para o início da página',
      navAriaLabel: 'Navegação principal',
      mobileMenuAriaLabel: 'Menu de navegação mobile',
      menuBtnAriaLabel: 'Alternar menu de navegação',
      primaryActionType: 'whatsapp',
      primaryActionLabel: 'WhatsApp',
      primaryActionAriaLabel: 'Falar com Yuri Vieira no WhatsApp',
      primaryActionUrl:
        'https://wa.me/5522998962216?text=Ol%C3%A1%20Yuri%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.',
      langMenuAriaLabel: 'Selecionar idioma',
    },
    es: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      projects: 'Proyectos',
      ai: 'IA & Automatización',
      contact: 'Contacto',
      brandAriaLabel: 'Yuri Vieira | Ir al inicio de la página',
      navAriaLabel: 'Navegación principal',
      mobileMenuAriaLabel: 'Menú de navegación móvil',
      menuBtnAriaLabel: 'Alternar menú de navegación',
      primaryActionType: 'whatsapp',
      primaryActionLabel: 'WhatsApp',
      primaryActionAriaLabel: 'Hablar con Yuri Vieira por WhatsApp',
      primaryActionUrl:
        'https://wa.me/5522998962216?text=Hola%20Yuri%21%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad.',
      langMenuAriaLabel: 'Seleccionar idioma',
    },
  };

  constructor() {
    afterNextRender(() => {
      this.updateScrollState();
    });
  }

  ngOnInit(): void {
    this.updateScrollState();
  }

  get nav(): HeaderNavLabels {
    return this.navI18n[this.currentLang()] ?? this.navI18n['pt-BR'];
  }

  switchLang(lang: SupportedLang): void {
    this.i18n.setLang(lang);
  }

  onLangBtnClick(lang: SupportedLang, event: MouseEvent): void {
    if (this.isScrolledPastHero()) {
      event.stopPropagation();
      this.toggleLangMenu();
    } else {
      this.switchLang(lang);
    }
  }

  onLangSwitcherClick(event: MouseEvent): void {
    if (this.isScrolledPastHero()) {
      event.stopPropagation();
      this.toggleLangMenu();
    }
  }

  onLangSwitcherKeydown(event: Event): void {
    if (this.isScrolledPastHero()) {
      event.preventDefault();
      this.toggleLangMenu();
    }
  }

  toggleLangMenu(): void {
    this.langMenuOpen.update((open) => !open);
  }

  closeLangMenu(): void {
    this.langMenuOpen.set(false);
  }

  selectLangAndClose(lang: SupportedLang, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.switchLang(lang);
    this.closeLangMenu();
  }

  onPrimaryActionClick(): void {
    if (this.nav.primaryActionType === 'whatsapp') {
      this.telemetry.trackWhatsAppClick('header', this.currentLang());
    }
  }

  onWhatsAppClick(): void {
    this.telemetry.trackWhatsAppClick('header', this.currentLang());
  }

  openCommandPalette(): void {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('portfolio:open-command-palette'));
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  navigateToSection(event: Event, targetId: string): void {
    event.preventDefault();
    this.closeMobileMenu();

    if (typeof document === 'undefined') return;

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('portfolio:hydrate-sections'));
    }

    const scrollNow = () => {
      const element = document.getElementById(targetId);
      if (!element) return;
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection.set(targetId);
      if (typeof history !== 'undefined' && history.pushState) {
        history.pushState(null, '', `#${targetId}`);
      }
    };

    const initialEl = document.getElementById(targetId);
    if (initialEl && initialEl.classList.contains('home__section-placeholder')) {
      setTimeout(scrollNow, 60);
      setTimeout(() => {
        const settled = document.getElementById(targetId);
        if (settled && !settled.classList.contains('home__section-placeholder')) {
          settled.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 280);
    } else {
      scrollNow();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrollState();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.langMenuOpen()) return;
    const target = event.target as HTMLElement | null;
    if (!target?.closest('.header__lang-wrapper')) {
      this.closeLangMenu();
    }
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.langMenuOpen()) {
      this.closeLangMenu();
    }
    if (this.mobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  private updateScrollState(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const heroElement = document.getElementById('top');
    const pastHero = heroElement
      ? heroElement.getBoundingClientRect().bottom <= 76
      : window.scrollY > (window.innerHeight || 800) * 0.85;

    const contactElement = document.getElementById('contact');
    const inContact = contactElement
      ? contactElement.getBoundingClientRect().top <= 180
      : false;

    const shouldShow = pastHero && !inContact;

    if (shouldShow !== this.isScrolledPastHero()) {
      this.isScrolledPastHero.set(shouldShow);
      if (!shouldShow) {
        this.closeLangMenu();
      }
    }

    let currentActive = 'top';
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 160) {
        currentActive = id;
      }
    }
    if (currentActive !== this.activeSection()) {
      this.activeSection.set(currentActive);
    }
  }
}
