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
    expect(labels.badgeTestsMetric).toContain('80');
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
});
