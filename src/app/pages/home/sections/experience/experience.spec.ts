import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';
import { ExperienceSection } from './experience';
import { EXPERIENCE_MILESTONES, EXPERIENCE_SECTION_DATA } from './experience.data';

describe('ExperienceSection', () => {
  let component: ExperienceSection;
  let fixture: ComponentFixture<ExperienceSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceSection],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should expose section data and milestones correctly', () => {
    expect(component.data.title).toBe(EXPERIENCE_SECTION_DATA.title);
    expect(component.data.eyebrow).toBe(EXPERIENCE_SECTION_DATA.eyebrow);
    expect(component.milestones.length).toBe(EXPERIENCE_MILESTONES.length);
  });

  it('should render all timeline items in the DOM', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('.experience__item');

    expect(items.length).toBe(EXPERIENCE_MILESTONES.length);
  });

  it('should render milestone details correctly in component instance', () => {
    expect(component.milestones[0].year).toBe('2017');
    expect(component.milestones[0].title).toBe('Início da Graduação em Engenharia de Produção');
    expect(component.milestones[6].year).toBe('Hoje');
    expect(component.milestones[6].title).toBe('Em busca de novas oportunidades');
  });
});
