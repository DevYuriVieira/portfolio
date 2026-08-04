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

  it('should render 5 featured project cards initially, 7 on first expansion, and all on full expansion', () => {
    const totalCount = component.projects().length;

    const compiled = fixture.nativeElement as HTMLElement;
    let cards = compiled.querySelectorAll('.projects__card');
    expect(cards.length).toBe(5);
    expect(component.displayedProjects().length).toBe(5);

    // First toggle expansion (5 -> 7)
    component.toggleShowAll();
    fixture.detectChanges();

    cards = compiled.querySelectorAll('.projects__card');
    expect(cards.length).toBe(7);
    expect(component.displayedProjects().length).toBe(7);

    // Second toggle expansion (7 -> totalCount)
    component.toggleShowAll();
    fixture.detectChanges();

    cards = compiled.querySelectorAll('.projects__card');
    expect(cards.length).toBe(totalCount);
    expect(component.displayedProjects().length).toBe(totalCount);
  });

  it('should render project titles correctly', () => {
    expect(component.projects()[0].title).toBe('ZEISS Recommendation Assistant');
    expect(component.projects()[1].title).toBe('Spring Boot E-Commerce API');
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

  it('should ensure all projects have complete case study fields populated', () => {
    component.projects().forEach((project) => {
      expect(project.problem).toBeTruthy();
      expect(project.solution).toBeTruthy();
      expect(project.architectureDecisions?.length).toBeGreaterThan(0);
      expect(project.results).toBeTruthy();
    });
  });

  it('should smooth scroll to top of projects section when collapsing', () => {
    // Expand to 7
    component.toggleShowAll();
    expect(component.displayLimit()).toBe(7);

    // Expand to all
    component.toggleShowAll();
    expect(component.showAll()).toBe(true);

    // Give element id projects and mock scrollIntoView
    const compiled = fixture.nativeElement as HTMLElement;
    const section = compiled.querySelector('app-section') || compiled;
    section.id = 'projects';

    let scrolled = false;
    section.scrollIntoView = ({ behavior, block }: ScrollIntoViewOptions = {}) => {
      if (behavior === 'smooth' && block === 'start') {
        scrolled = true;
      }
    };

    // Collapse
    component.toggleShowAll();
    expect(component.showAll()).toBe(false);
    expect(component.displayLimit()).toBe(5);
    expect(scrolled).toBe(true);
  });
});
