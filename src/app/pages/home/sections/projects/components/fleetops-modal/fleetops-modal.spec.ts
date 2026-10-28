import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { FleetOpsModal } from './fleetops-modal';

describe('FleetOpsModal', () => {
  let component: FleetOpsModal;
  let fixture: ComponentFixture<FleetOpsModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetOpsModal],
    }).compileComponents();

    fixture = TestBed.createComponent(FleetOpsModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the FleetOpsModal component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title, subtitle and tech badges', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('.fleetops-modal__title');
    expect(title?.textContent?.trim()).toBe('FleetOps API');

    const badges = compiled.querySelectorAll('.fleetops-modal__tech-badge');
    expect(badges.length).toBeGreaterThan(5);
  });

  it('should allow toggling between Portuguese and English', () => {
    component.setLanguage('en');
    fixture.detectChanges();
    expect(component.activeLang()).toBe('en');
    expect(component.data().tabs.overview).toBe('Summary & Architecture');

    component.setLanguage('pt-BR');
    fixture.detectChanges();
    expect(component.activeLang()).toBe('pt-BR');
    expect(component.data().tabs.overview).toBe('Resumo & Arquitetura');
  });

  it('should allow switching between all 6 tabs', () => {
    const tabs = ['overview', 'outbox', 'messaging', 'security', 'benchmarks', 'readme'] as const;
    for (const tab of tabs) {
      component.setTab(tab);
      fixture.detectChanges();
      expect(component.activeTab()).toBe(tab);
    }
  });

  it('should emit close event when close button or ESC is triggered', () => {
    let closed = false;
    component.close.subscribe(() => {
      closed = true;
    });

    component.closeModal();
    expect(closed).toBe(true);

    closed = false;
    component.handleEscape();
    expect(closed).toBe(true);
  });

  it('should trigger copy and download markdown methods safely', async () => {
    await component.copyMarkdown();
    expect(component.copied()).toBe(true);

    expect(() => component.downloadDossier()).not.toThrow();
  });
});
