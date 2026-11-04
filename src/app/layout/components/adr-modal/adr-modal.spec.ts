import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { I18nService } from '@core';
import { AdrModal } from './adr-modal';

describe('AdrModal', () => {
  let component: AdrModal;
  let fixture: ComponentFixture<AdrModal>;
  let i18n: I18nService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdrModal],
    }).compileComponents();

    i18n = TestBed.inject(I18nService);
    i18n.setLang('pt-BR');

    fixture = TestBed.createComponent(AdrModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with ADR-001 as active record', () => {
    expect(component.activeAdr().code).toBe('ADR-001');
    expect(component.activeAdr().status).toBe('Accepted');
    expect(component.activeAdr().statusLabel).toBe('Aceito');
  });

  it('should switch active ADR when selected', () => {
    component.selectAdr('adr-002');
    expect(component.activeAdr().code).toBe('ADR-002');
    expect(component.activeAdr().category).toBe('Estilização');
  });

  it('should filter ADRs based on search term', () => {
    component.searchTerm.set('Signals');
    const filtered = component.filteredAdrs();
    expect(filtered.length).toBeGreaterThanOrEqual(1);
    expect(filtered[0].code).toBe('ADR-001');

    component.searchTerm.set('NonExistentKeywordXYZ');
    expect(component.filteredAdrs().length).toBe(0);
  });

  it('should render content in Portuguese by default and switch with i18n', () => {
    expect(component.labels().title).toContain('Registros de Decisões Arquiteturais');
    expect(component.activeAdr().title).toContain('Arquitetura de Estado Reativo Puro');

    i18n.setLang('en');
    fixture.detectChanges();

    expect(component.labels().title).toBe('Architectural Decision Records (ADRs)');
    expect(component.activeAdr().title).toContain('Pure Reactive State Architecture');
    expect(component.activeAdr().statusLabel).toBe('Accepted');

    i18n.setLang('es');
    fixture.detectChanges();

    expect(component.labels().title).toContain('Registros de Decisiones Arquitectónicas');
    expect(component.activeAdr().statusLabel).toBe('Aceptado');
  });

  it('should emit close event on escape key press', () => {
    const closeSpy = vi.spyOn(component.close, 'emit');
    component.onEscape();
    expect(closeSpy).toHaveBeenCalled();
  });

  it('should emit close event on backdrop click', () => {
    const closeSpy = vi.spyOn(component.close, 'emit');
    const fakeBackdrop = document.createElement('div');
    fakeBackdrop.className = 'adr-modal-backdrop';
    const fakeEvent = { target: fakeBackdrop } as unknown as MouseEvent;

    component.onBackdropClick(fakeEvent);
    expect(closeSpy).toHaveBeenCalled();
  });
});
