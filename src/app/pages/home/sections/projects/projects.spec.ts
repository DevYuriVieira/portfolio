import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';
import { PROJECTS_DATA } from './projects.data';
import { ProjectsSection } from './projects';

describe('ProjectsSection', () => {
  let component: ProjectsSection;
  let fixture: ComponentFixture<ProjectsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsSection],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render 5 featured project cards initially and 11 when expanded', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    let cards = compiled.querySelectorAll('.projects__card');
    expect(cards.length).toBe(5);
    expect(component.displayedProjects().length).toBe(5);

    // Toggle expansion
    component.toggleShowAll();
    fixture.detectChanges();

    cards = compiled.querySelectorAll('.projects__card');
    expect(cards.length).toBe(11);
    expect(component.displayedProjects().length).toBe(11);
  });

  it('should render project titles correctly', () => {
    expect(component.projects[0].title).toBe('ZEISS Recommendation Assistant');
    expect(component.projects[1].title).toBe('Spring Boot E-Commerce API');
  });

  it('should render external project links securely with target _blank', () => {
    // Expand projects first to render links
    component.toggleShowAll();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.projects__card-footer a');
    links.forEach((link) => {
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    });
  });

  it('should render case study blocks (problem, solution, architectureDecisions, results) when present', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const firstCard = compiled.querySelector('.projects__card');
    expect(firstCard?.textContent).toContain('Desafio');
    expect(firstCard?.textContent).toContain('Solução');
    expect(firstCard?.textContent).toContain('Decisões de Arquitetura');
    expect(firstCard?.textContent).toContain('Resultados');
  });
});
