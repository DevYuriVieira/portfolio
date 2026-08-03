import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiExperienceSection } from './ai-experience';
import { AI_MANIFESTO_DATA } from './ai-experience.data';

describe('AiExperienceSection', () => {
  let component: AiExperienceSection;
  let fixture: ComponentFixture<AiExperienceSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiExperienceSection],
    }).compileComponents();

    fixture = TestBed.createComponent(AiExperienceSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the badge', () => {
    const badge = fixture.nativeElement.querySelector('.ai__badge');
    expect(badge?.textContent?.trim()).toBe(AI_MANIFESTO_DATA.badge);
  });

  it('should render the title', () => {
    const title = fixture.nativeElement.querySelector('.ai__title');
    expect(title?.textContent).toContain(AI_MANIFESTO_DATA.title);
  });

  it('should render the manifesto text', () => {
    const manifesto = fixture.nativeElement.querySelector('.ai__manifesto');
    expect(manifesto?.textContent).toContain('automação');
  });

  it('should render the closing statement', () => {
    const closing = fixture.nativeElement.querySelector('.ai__closing-text');
    expect(closing?.textContent).toContain('pragmática');
  });

  it('should have the neural canvas component', () => {
    const canvas = fixture.nativeElement.querySelector('app-neural-canvas');
    expect(canvas).toBeTruthy();
  });
});
