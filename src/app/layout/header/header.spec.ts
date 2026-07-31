import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render brand name Yuri Vieira', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const brand = compiled.querySelector('.header__brand-name');
    expect(brand?.textContent).toContain('Yuri Vieira');
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
});
