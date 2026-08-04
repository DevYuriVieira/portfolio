import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';
import { HERO_SECTION_DATA } from './hero.data';
import { HeroSection } from './hero';

describe('HeroSection', () => {
  let component: HeroSection;
  let fixture: ComponentFixture<HeroSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSection],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should expose hero section data correctly', () => {
    expect(component.data().name).toBe(HERO_SECTION_DATA.name);
    expect(component.data().eyebrow).toBe(HERO_SECTION_DATA.eyebrow);
    expect(component.data().description).toBe(HERO_SECTION_DATA.description);
  });
});
