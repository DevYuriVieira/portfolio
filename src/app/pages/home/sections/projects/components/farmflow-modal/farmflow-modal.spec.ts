import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { FarmFlowModal } from './farmflow-modal';

describe('FarmFlowModal', () => {
  let component: FarmFlowModal;
  let fixture: ComponentFixture<FarmFlowModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmFlowModal],
    }).compileComponents();

    fixture = TestBed.createComponent(FarmFlowModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the FarmFlowModal component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title, subtitle and tech badges', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('.farmflow-modal__title');
    expect(title?.textContent?.trim()).toContain('FarmFlow');

    const badges = compiled.querySelectorAll('.farmflow-modal__tech-badge');
    expect(badges.length).toBeGreaterThan(5);
  });

  it('should allow toggling between Portuguese and English', () => {
    component.setLanguage('en');
    fixture.detectChanges();
    expect(component.activeLang()).toBe('en');
    expect(component.data().tabs.overview).toBe('Overview & Architecture');

    component.setLanguage('pt-BR');
    fixture.detectChanges();
    expect(component.activeLang()).toBe('pt-BR');
    expect(component.data().tabs.overview).toBe('Resumo & Arquitetura');
  });

  it('should allow switching between all 6 tabs', () => {
    const tabs = ['overview', 'offline', 'messaging', 'regulatory', 'benchmarks', 'readme'] as const;
    for (const tab of tabs) {
      component.setTab(tab);
      fixture.detectChanges();
      expect(component.activeTab()).toBe(tab);
    }
  });

  it('should emit close event when close button, backdrop or ESC is triggered', () => {
    let closed = false;
    component.close.subscribe(() => {
      closed = true;
    });

    component.closeModal();
    expect(closed).toBe(true);

    closed = false;
    component.handleEscape();
    expect(closed).toBe(true);

    closed = false;
    const mockBackdropEvent = {
      target: { classList: { contains: (cls: string) => cls === 'farmflow-modal-backdrop' } },
    } as unknown as MouseEvent;
    component.onBackdropClick(mockBackdropEvent);
    expect(closed).toBe(true);
  });

  it('should trigger copy and download markdown methods safely', async () => {
    await component.copyMarkdown();
    expect(component.copied()).toBe(true);

    expect(() => component.downloadDossier()).not.toThrow();
  });

  it('should render stats row in benchmarks tab and markdown viewer in readme tab', () => {
    component.setTab('benchmarks');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const statBoxes = compiled.querySelectorAll('.farmflow-stat-box');
    expect(statBoxes.length).toBe(4);
    expect(compiled.textContent).toContain('549+');

    component.setTab('readme');
    fixture.detectChanges();
    const markdownViewer = compiled.querySelector('.farmflow-markdown-viewer');
    expect(markdownViewer).toBeTruthy();
    expect(markdownViewer?.textContent).toContain('FarmFlow');
  });

  it('should render modal footer with author and links to mobile and backend', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const footer = compiled.querySelector('.farmflow-modal__footer');
    expect(footer).toBeTruthy();
    expect(footer?.textContent).toContain('Yuri Vieira');

    const links = footer?.querySelectorAll('a');
    expect(links?.length).toBe(2);
    expect(links?.[0].getAttribute('href')).toBe('https://github.com/DevYuriVieira/farmflow-mobile');
    expect(links?.[1].getAttribute('href')).toBe('https://github.com/DevYuriVieira/farmflow-backend');
  });
});
