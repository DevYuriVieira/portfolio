import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';
import { FooterComponent } from './footer';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    localStorage.removeItem('portfolio-lang');
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should expose current year and identity details', () => {
    expect(component.currentYear).toBe(new Date().getFullYear());
    expect(component.name).toBe('Yuri Vieira Teixeira');
    expect(component.labels().positioning).toContain('Software Engineer');
  });

  it('should expose engineering quality badges and GitHub repository link', () => {
    const labels = component.labels();
    expect(labels.badgeTestsMetric).toContain('160+');
    expect(labels.badgeA11yMetric).toContain('WCAG 2.1');
    expect(labels.badgePwaMetric).toContain('PWA');
    expect(labels.badgeSignalsMetric).toContain('Angular 22');
    expect(labels.badgeSignalsLabel).not.toContain('SSR');
    expect(labels.viewSourceText).toBeTruthy();

    const compiled = fixture.nativeElement as HTMLElement;
    const repoLink = compiled.querySelector('.footer__repo-link');
    expect(repoLink).toBeTruthy();
    expect(repoLink?.getAttribute('href')).toBe('https://github.com/DevYuriVieira/portfolio');
    expect(repoLink?.getAttribute('target')).toBe('_blank');

    const badgeCards = compiled.querySelectorAll('.footer__badge-card');
    expect(badgeCards.length).toBe(4);
  });

  it('should render runtime metrics button and ADR trigger without zero-counter events pill', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rumPill = compiled.querySelector('.footer__rum-pill');
    const eventsPill = compiled.querySelector('.footer__analytics-pill');
    const adrBtn = compiled.querySelector('.footer__adr-btn');

    expect(rumPill).toBeTruthy();
    expect(eventsPill).toBeNull();
    expect(adrBtn).toBeTruthy();
    expect(component.isAdrModalOpen()).toBe(false);
  });

  it('should toggle ADR modal state', () => {
    component.openAdrModal();
    fixture.detectChanges();
    expect(component.isAdrModalOpen()).toBe(true);

    const compiled = fixture.nativeElement as HTMLElement;
    const modal = compiled.querySelector('app-adr-modal');
    expect(modal).toBeTruthy();

    component.closeAdrModal();
    fixture.detectChanges();
    expect(component.isAdrModalOpen()).toBe(false);
  });

  it('should open telemetry modal when clicking runtime metrics button', () => {
    const openSpy = vi.spyOn(component.telemetry, 'openModal');

    const compiled = fixture.nativeElement as HTMLElement;
    const rumBtn = compiled.querySelector('.footer__rum-pill') as HTMLButtonElement;

    rumBtn.click();
    expect(openSpy).toHaveBeenCalledWith('vitals');
  });
});
