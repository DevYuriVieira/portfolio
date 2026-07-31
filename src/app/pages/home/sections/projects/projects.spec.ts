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

  it('should render all 7 project cards from mock data', () => {
    const cards = fixture.nativeElement.querySelectorAll('.projects__card');
    expect(cards.length).toBe(7);
    expect(component.projects.length).toBe(PROJECTS_DATA.length);
  });

  it('should render project titles correctly', () => {
    expect(component.projects[0].title).toBe('ZEISS Recommendation Assistant');
    expect(component.projects[2].title).toBe('Spring Boot E-Commerce API');
  });

  it('should render external project links securely with target _blank', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.projects__card-footer a');
    links.forEach((link) => {
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    });
  });
});
