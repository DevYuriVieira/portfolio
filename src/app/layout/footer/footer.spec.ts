import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';
import { FooterComponent } from './footer';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
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
    expect(labels.badgeTestsMetric).toContain('167');
    expect(labels.badgeA11yMetric).toContain('WCAG 2.1 AAA');
    expect(labels.badgePwaMetric).toContain('PWA');
    expect(labels.badgeSignalsMetric).toContain('Angular 22');
    expect(labels.viewSourceText).toBeTruthy();

    const compiled = fixture.nativeElement as HTMLElement;
    const repoLink = compiled.querySelector('.footer__repo-link');
    expect(repoLink).toBeTruthy();
    expect(repoLink?.getAttribute('href')).toBe('https://github.com/DevYuriVieira/portfolio');
    expect(repoLink?.getAttribute('target')).toBe('_blank');

    const badgeCards = compiled.querySelectorAll('.footer__badge-card');
    expect(badgeCards.length).toBe(4);
  });

  it('should render RUM indicator and ADR trigger button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rumPill = compiled.querySelector('.footer__rum-pill');
    const adrBtn = compiled.querySelector('.footer__adr-btn');

    expect(rumPill).toBeTruthy();
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
});
