import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';
import { AboutSection } from './about';
import { ENGINEERING_PRINCIPLES } from './about.model';

describe('AboutSection', () => {
  let component: AboutSection;
  let fixture: ComponentFixture<AboutSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSection],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all 4 visual blocks (Header, Journey, Philosophy, Currently)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.about__header')).toBeTruthy();
    expect(compiled.querySelector('.about__journey')).toBeTruthy();
    expect(compiled.querySelector('.about__philosophy')).toBeTruthy();
    expect(compiled.querySelector('.about__currently')).toBeTruthy();
  });

  it('should render all engineering principles cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.about__principle-card');
    expect(cards.length).toBe(ENGINEERING_PRINCIPLES.length);
  });

  it('should display correct principle titles', () => {
    expect(component.principles[0].title).toBe('Arquitetura Limpa & Intenção');
    expect(component.principles[1].title).toBe('Comunicação em Primeiro Lugar');
  });
});
