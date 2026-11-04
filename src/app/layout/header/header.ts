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
  readonly home: string;
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
  readonly whatsappCta: string;
  readonly whatsappAriaLabel: string;
  readonly whatsappUrl: string;
  readonly langMenuAriaLabel: string;
}

@Component({
  selector: 'app-header',
  imports: [Container],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header implements OnInit {
  private readonly i18n = inject(I18nService);
  private readonly telemetry = inject(TelemetryService);

  readonly mobileMenuOpen = signal<boolean>(false);
  readonly currentLang = this.i18n.currentLang;
  readonly isScrolledPastHero = signal<boolean>(false);
  readonly langMenuOpen = signal<boolean>(false);

  private readonly navI18n: Record<SupportedLang, HeaderNavLabels> = {
    en: {
      home: 'Home',
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
      whatsappCta: 'WhatsApp',
      whatsappAriaLabel: 'Chat with Yuri Vieira on WhatsApp',
      whatsappUrl:
        'https://wa.me/5522998962216?text=Hi%20Yuri%21%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity.',
      langMenuAriaLabel: 'Select language',
    },
    'pt-BR': {
      home: 'Início',
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
      whatsappCta: 'WhatsApp',
      whatsappAriaLabel: 'Falar com Yuri Vieira no WhatsApp',
      whatsappUrl:
        'https://wa.me/5522998962216?text=Ol%C3%A1%20Yuri%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.',
      langMenuAriaLabel: 'Selecionar idioma',
    },
    es: {
      home: 'Inicio',
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
      whatsappCta: 'WhatsApp',
      whatsappAriaLabel: 'Hablar con Yuri Vieira por WhatsApp',
      whatsappUrl:
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

  onWhatsAppClick(): void {
    this.telemetry.trackWhatsAppClick('header', this.currentLang());
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

    if (typeof document !== 'undefined') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (typeof history !== 'undefined' && history.pushState) {
          history.pushState(null, '', `#${targetId}`);
        }
      }
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
    const scrolled = heroElement
      ? heroElement.getBoundingClientRect().bottom <= 76
      : window.scrollY > (window.innerHeight || 800) * 0.85;

    if (scrolled !== this.isScrolledPastHero()) {
      this.isScrolledPastHero.set(scrolled);
      if (!scrolled) {
        this.closeLangMenu();
      }
    }
  }
}
