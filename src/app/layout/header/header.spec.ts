import { ComponentFixture, TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { I18nService, TelemetryService } from '@core';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let telemetry: TelemetryService;
  let i18n: I18nService;

  beforeEach(async () => {
    localStorage.removeItem('portfolio-lang');
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    telemetry = TestBed.inject(TelemetryService);
    i18n = TestBed.inject(I18nService);
    i18n.setLang('pt-BR');
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.removeItem('portfolio-lang');
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render brand logo mark SVG', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const brandLogo = compiled.querySelector('.header__logo-mark svg');
    expect(brandLogo).toBeTruthy();
  });

  it('should have mobile menu closed by default', () => {
    expect(component.mobileMenuOpen()).toBe(false);
  });

  it('should toggle mobile menu open and update aria-expanded', () => {
    const button = fixture.nativeElement.querySelector('.header__menu-btn') as HTMLButtonElement;
    expect(button.getAttribute('aria-expanded')).toBe('false');

    component.toggleMobileMenu();
    fixture.detectChanges();

    expect(component.mobileMenuOpen()).toBe(true);
    expect(button.getAttribute('aria-expanded')).toBe('true');
  });

  it('should close mobile menu on closeMobileMenu()', () => {
    component.toggleMobileMenu();
    expect(component.mobileMenuOpen()).toBe(true);

    component.closeMobileMenu();
    expect(component.mobileMenuOpen()).toBe(false);
  });

  it('should close mobile menu on Escape key press', () => {
    component.toggleMobileMenu();
    expect(component.mobileMenuOpen()).toBe(true);

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();

    expect(component.mobileMenuOpen()).toBe(false);
  });

  it('should scroll into view when navigateToSection is called', () => {
    const targetElement = document.createElement('div');
    targetElement.id = 'about';
    targetElement.scrollIntoView = vi.fn();
    document.body.appendChild(targetElement);

    const event = new Event('click');
    const spy = vi.spyOn(event, 'preventDefault');

    component.navigateToSection(event, 'about');

    expect(spy).toHaveBeenCalled();
    expect(targetElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });

    document.body.removeChild(targetElement);
  });

  it('should render GitHub profile direct link in header actions', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const githubLink = compiled.querySelector('.header__social-btn') as HTMLAnchorElement;
    expect(githubLink).toBeTruthy();
    expect(githubLink.href).toContain('github.com/DevYuriVieira');
    expect(githubLink.getAttribute('target')).toBe('_blank');
    expect(githubLink.getAttribute('rel')).toContain('noopener');
  });

  it('should hide WhatsApp button when not scrolled past hero', () => {
    component.isScrolledPastHero.set(false);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const whatsappBtn = compiled.querySelector('.header__whatsapp-btn') as HTMLAnchorElement;
    expect(whatsappBtn).toBeTruthy();
    expect(whatsappBtn.classList.contains('is-visible')).toBe(false);
  });

  it('should show WhatsApp button and shrink language switcher when scrolled past hero', () => {
    component.isScrolledPastHero.set(true);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const whatsappBtn = compiled.querySelector('.header__whatsapp-btn') as HTMLAnchorElement;
    expect(whatsappBtn.classList.contains('is-visible')).toBe(true);
    expect(whatsappBtn.href).toContain('wa.me/5522998962216');

    const langSwitcher = compiled.querySelector('.header__lang-switcher');
    expect(langSwitcher?.classList.contains('header__lang-switcher--collapsed')).toBe(true);

    const hiddenButtons = compiled.querySelectorAll('.header__lang-btn--hidden');
    expect(hiddenButtons.length).toBe(2);

    const chevron = compiled.querySelector('.header__lang-chevron');
    expect(chevron?.classList.contains('is-visible')).toBe(true);
  });

  it('should track WhatsApp click with header source', () => {
    const trackSpy = vi.spyOn(telemetry, 'trackWhatsAppClick');
    component.onWhatsAppClick();
    expect(trackSpy).toHaveBeenCalledWith('header', i18n.currentLang());
  });

  it('should toggle language dropdown menu when collapsed switcher is clicked', () => {
    component.isScrolledPastHero.set(true);
    fixture.detectChanges();

    expect(component.langMenuOpen()).toBe(false);

    component.toggleLangMenu();
    fixture.detectChanges();

    expect(component.langMenuOpen()).toBe(true);
    const dropdown = fixture.nativeElement.querySelector('.header__lang-menu');
    expect(dropdown).toBeTruthy();

    component.selectLangAndClose('en');
    fixture.detectChanges();

    expect(i18n.currentLang()).toBe('en');
    expect(component.langMenuOpen()).toBe(false);
  });

  it('should close language menu on Escape key press', () => {
    component.isScrolledPastHero.set(true);
    component.langMenuOpen.set(true);
    fixture.detectChanges();

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();

    expect(component.langMenuOpen()).toBe(false);
  });

  it('should only activate when hero completely exits the viewport and revert upon re-entering', () => {
    const heroEl = document.createElement('div');
    heroEl.id = 'top';
    document.body.appendChild(heroEl);

    heroEl.getBoundingClientRect = vi.fn().mockReturnValue({ bottom: 400 });
    component.onWindowScroll();
    expect(component.isScrolledPastHero()).toBe(false);

    heroEl.getBoundingClientRect = vi.fn().mockReturnValue({ bottom: 70 });
    component.onWindowScroll();
    expect(component.isScrolledPastHero()).toBe(true);

    heroEl.getBoundingClientRect = vi.fn().mockReturnValue({ bottom: 250 });
    component.onWindowScroll();
    expect(component.isScrolledPastHero()).toBe(false);

    document.body.removeChild(heroEl);
  });

  it('should hide WhatsApp button and expand language switcher when reaching contact section', () => {
    const heroEl = document.createElement('div');
    heroEl.id = 'top';
    heroEl.getBoundingClientRect = vi.fn().mockReturnValue({ bottom: 50 });
    document.body.appendChild(heroEl);

    const contactEl = document.createElement('div');
    contactEl.id = 'contact';
    contactEl.getBoundingClientRect = vi.fn().mockReturnValue({ top: 800 });
    document.body.appendChild(contactEl);

    component.onWindowScroll();
    expect(component.isScrolledPastHero()).toBe(true);

    contactEl.getBoundingClientRect = vi.fn().mockReturnValue({ top: 120 });
    component.onWindowScroll();
    expect(component.isScrolledPastHero()).toBe(false);

    contactEl.getBoundingClientRect = vi.fn().mockReturnValue({ top: 350 });
    component.onWindowScroll();
    expect(component.isScrolledPastHero()).toBe(true);

    document.body.removeChild(heroEl);
    document.body.removeChild(contactEl);
  });
});
