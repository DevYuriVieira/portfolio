import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AdrModal } from './adr-modal';

describe('AdrModal', () => {
  let component: AdrModal;
  let fixture: ComponentFixture<AdrModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdrModal],
    }).compileComponents();

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
  });

  it('should switch active ADR when selected', () => {
    component.selectAdr('adr-002');
    expect(component.activeAdr().code).toBe('ADR-002');
    expect(component.activeAdr().category).toBe('Styling');
  });

  it('should filter ADRs based on search term', () => {
    component.searchTerm.set('Signals');
    const filtered = component.filteredAdrs();
    expect(filtered.length).toBeGreaterThanOrEqual(1);
    expect(filtered[0].code).toBe('ADR-001');

    component.searchTerm.set('NonExistentKeywordXYZ');
    expect(component.filteredAdrs().length).toBe(0);
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
