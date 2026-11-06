import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { CaseStudyModal } from './case-study-modal';
import { Project } from '../../project.model';

const MOCK_PROJECT: Project = {
  id: 'fleetops-api',
  title: 'FleetOps API',
  category: 'Backend .NET',
  contextTag: 'Backend Distribuído',
  description: 'Motor backend para logística.',
  problem: 'Inconsistência dual-write entre banco relacional e mensageria.',
  solution: 'Transactional Outbox com RabbitMQ e lock otimista.',
  architectureDecisions: [
    'Clean Architecture + DDD em 5 bounded contexts',
    'Outbox Pattern no PostgreSQL 18',
  ],
  results: '300 testes aprovados e 278 RPS sustentados.',
  technologies: ['.NET 10', 'C# 14', 'PostgreSQL 18', 'RabbitMQ'],
  links: {
    github: 'https://github.com/DevYuriVieira/fleetops-api',
  },
};

describe('CaseStudyModal', () => {
  let component: CaseStudyModal;
  let fixture: ComponentFixture<CaseStudyModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudyModal],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseStudyModal);
    component = fixture.componentInstance;
    component.project = MOCK_PROJECT;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render project title, context tag and all 4 case study sections', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.case-modal__title')?.textContent).toContain('FleetOps API');
    expect(compiled.querySelector('.case-modal__badge--accent')?.textContent).toContain('Backend Distribuído');

    expect(compiled.querySelector('.case-modal__section--challenge')?.textContent).toContain(MOCK_PROJECT.problem);
    expect(compiled.querySelector('.case-modal__section--solution')?.textContent).toContain(MOCK_PROJECT.solution);
    expect(compiled.querySelector('.case-modal__section--arch')?.textContent).toContain('Clean Architecture + DDD');
    expect(compiled.querySelector('.case-modal__section--results')?.textContent).toContain(MOCK_PROJECT.results);
  });

  it('should emit close when close button, backdrop, or ESC key is pressed', () => {
    let closed = false;
    component.close.subscribe(() => {
      closed = true;
    });

    component.closeModal();
    expect(closed).toBe(true);

    closed = false;
    component.onEscape();
    expect(closed).toBe(true);

    closed = false;
    const backdrop = fixture.nativeElement.querySelector('.case-modal-backdrop') as HTMLElement;
    backdrop.click();
    expect(closed).toBe(true);
  });

  it('should emit openFleetOps when deep dossier button is clicked', () => {
    let opened = false;
    component.openFleetOps.subscribe(() => {
      opened = true;
    });

    component.onOpenFleetOps();
    expect(opened).toBe(true);
  });

  it('should emit openFarmFlow when farmflow dossier button is clicked', () => {
    let opened = false;
    component.openFarmFlow.subscribe(() => {
      opened = true;
    });

    component.onOpenFarmFlow();
    expect(opened).toBe(true);
  });

  it('should emit openArchitecture when architecture diagram button is clicked', () => {
    let opened = false;
    component.openArchitecture.subscribe(() => {
      opened = true;
    });

    component.onOpenArchitecture();
    expect(opened).toBe(true);
  });
});

