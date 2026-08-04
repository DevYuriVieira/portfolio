import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';
import { SkillsSection } from './skills';
import { SKILLS_CATEGORIES, SKILLS_SECTION_DATA } from './skills.data';

describe('SkillsSection', () => {
  let component: SkillsSection;
  let fixture: ComponentFixture<SkillsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsSection],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should expose section data and categories correctly', () => {
    expect(component.data().title).toBe(SKILLS_SECTION_DATA.title);
    expect(component.data().eyebrow).toBe(SKILLS_SECTION_DATA.eyebrow);
    expect(component.categories().length).toBe(SKILLS_CATEGORIES.length);
  });

  it('should render all skill category cards in the DOM', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.skills__card');

    expect(cards.length).toBe(SKILLS_CATEGORIES.length);
  });

  it('should expose categories with correct titles', () => {
    const titles = component.categories().map((cat) => cat.title);

    expect(titles).toContain(SKILLS_CATEGORIES[0].title);
    expect(titles).toContain(SKILLS_CATEGORIES[1].title);
    expect(titles).toContain(SKILLS_CATEGORIES[2].title);
    expect(titles).toContain(SKILLS_CATEGORIES[3].title);
  });

  it('should render skills inside category cards without metrics', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const skillItems = compiled.querySelectorAll('.skills__item');

    // Calculate total expected skill items across all categories
    const totalSkills = SKILLS_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
    expect(skillItems.length).toBe(totalSkills);

    // Verify progress bars or star ratings are absent
    expect(compiled.querySelector('.skills__progress-bar')).toBeNull();
    expect(compiled.querySelector('.skills__rating')).toBeNull();
  });
});
