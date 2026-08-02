import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { I18nService, SupportedLang } from '@core';
import { Container } from '@ui';

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

  /** Navigation labels reactive to language */
  get nav() {
    return this.currentLang() === 'en'
      ? {
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
        }
      : {
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
        };
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
