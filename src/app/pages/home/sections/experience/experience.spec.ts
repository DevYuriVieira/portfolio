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
    expect(component.data().title).toBe(EXPERIENCE_SECTION_DATA.title);
    expect(component.data().eyebrow).toBe(EXPERIENCE_SECTION_DATA.eyebrow);
    expect(component.milestones().length).toBe(EXPERIENCE_MILESTONES.length);
  });

  it('should render highlighted timeline items initially and all items when expanded', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const highlightedCount = EXPERIENCE_MILESTONES.filter((m) => m.highlighted).length;
    let items = compiled.querySelectorAll('.experience__item');

    expect(items.length).toBe(highlightedCount);

    component.toggleMilestones();
    fixture.detectChanges();

    items = compiled.querySelectorAll('.experience__item');
    expect(items.length).toBe(EXPERIENCE_MILESTONES.length);
  });

  it('should render milestone details correctly in component instance', () => {
    expect(component.milestones()[0].year).toBe(EXPERIENCE_MILESTONES[0].year);
    expect(component.milestones()[0].title).toBe(EXPERIENCE_MILESTONES[0].title);
    const lastIndex = EXPERIENCE_MILESTONES.length - 1;
    expect(component.milestones()[lastIndex].year).toBe(EXPERIENCE_MILESTONES[lastIndex].year);
    expect(component.milestones()[lastIndex].title).toBe(EXPERIENCE_MILESTONES[lastIndex].title);
  });

  it('should expose and render current focus active learning cards with top light trail', () => {
    expect(component.currentFocus()).toBeTruthy();
    expect(component.currentFocus().items.length).toBe(5);
    const compiled = fixture.nativeElement as HTMLElement;
    const focusCards = compiled.querySelectorAll('.experience__focus-card');
    expect(focusCards.length).toBe(5);
    const lightTrails = compiled.querySelectorAll('.experience__focus-trail');
    expect(lightTrails.length).toBe(5);

    expect(component.activeFocusIndex()).toBe(0);
    component.nextFocus();
    expect(component.activeFocusIndex()).toBeGreaterThan(0);
    component.prevFocus();
    expect(component.activeFocusIndex()).toBe(0);
    component.selectFocus(3);
    expect(component.activeFocusIndex()).toBe(3);
  });

  it('should render milestone tags and highlight prominent milestones in the DOM', () => {
    component.toggleMilestones();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const highlightedItems = compiled.querySelectorAll('.experience__item--highlighted');
    expect(highlightedItems.length).toBeGreaterThan(0);

    const tags = compiled.querySelectorAll('.experience__tag');
    expect(tags.length).toBe(EXPERIENCE_MILESTONES.length);

    const highlightedTags = compiled.querySelectorAll('.experience__tag--highlighted');
    expect(highlightedTags.length).toBe(highlightedItems.length);
  });
});
