import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { TelemetryModal } from './telemetry-modal';
import { TelemetryService } from '@core';

describe('TelemetryModal', () => {
  let component: TelemetryModal;
  let fixture: ComponentFixture<TelemetryModal>;
  let telemetry: TelemetryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelemetryModal],
      providers: [TelemetryService],
    }).compileComponents();

    fixture = TestBed.createComponent(TelemetryModal);
    component = fixture.componentInstance;
    telemetry = TestBed.inject(TelemetryService);
    fixture.detectChanges();
  });

  it('should create the TelemetryModal component', () => {
    expect(component).toBeTruthy();
  });

  it('should allow switching between all 4 tabs', () => {
    component.selectTab('vitals');
    expect(telemetry.activeTab()).toBe('vitals');

    component.selectTab('events');
    expect(telemetry.activeTab()).toBe('events');

    component.selectTab('stream');
    expect(telemetry.activeTab()).toBe('stream');

    component.selectTab('overview');
    expect(telemetry.activeTab()).toBe('overview');
  });

  it('should emit close when onEscape or close button is clicked', () => {
    const closeSpy = vi.spyOn(component.close, 'emit');

    component.onEscape();
    expect(closeSpy).toHaveBeenCalled();
  });

  it('should trigger simulated events through TelemetryService', () => {
    const simSpy = vi.spyOn(telemetry, 'simulateEvent');

    component.simulateEvent('cv_fullstack');
    expect(simSpy).toHaveBeenCalledWith('cv_fullstack');

    component.simulateEvent('whatsapp');
    expect(simSpy).toHaveBeenCalledWith('whatsapp');
  });

  it('should reset session when requested', () => {
    const resetSpy = vi.spyOn(telemetry, 'resetSession');
    component.resetSession();

    expect(resetSpy).toHaveBeenCalled();
    expect(component.resetNotice()).toBe(true);
  });

  it('should copy diagnostics JSON', async () => {
    const exportSpy = vi.spyOn(telemetry, 'exportSnapshotJson');
    await component.copyDiagnostics();

    expect(exportSpy).toHaveBeenCalled();
    expect(component.copied()).toBe(true);
  });
});

