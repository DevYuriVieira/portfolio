import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { I18nService, SupportedLang } from '@core';
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
}

@Component({
  selector: 'app-header',
  imports: [Container],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly i18n = inject(I18nService);

  readonly mobileMenuOpen = signal<boolean>(false);
  readonly currentLang = this.i18n.currentLang;

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
    },
  };

  get nav(): HeaderNavLabels {
    return this.navI18n[this.currentLang()] ?? this.navI18n['pt-BR'];
  }

  switchLang(lang: SupportedLang): void {
    this.i18n.setLang(lang);
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

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.mobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }
}
