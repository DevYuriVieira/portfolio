import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { AccessibilityWidget } from './accessibility-widget';
import { AccessibilityService, VlibrasService } from '@core/accessibility';
import { I18nService } from '@core';

describe('AccessibilityWidget', () => {
  let component: AccessibilityWidget;
  let fixture: ComponentFixture<AccessibilityWidget>;
  let a11yService: AccessibilityService;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [AccessibilityWidget],
      providers: [AccessibilityService, VlibrasService, I18nService],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessibilityWidget);
    component = fixture.componentInstance;
    a11yService = TestBed.inject(AccessibilityService);
    fixture.detectChanges();
  });

  it('should create the accessibility widget', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle panel open and close', () => {
    expect(component.isPanelOpen()).toBe(false);

    component.togglePanel();
    expect(component.isPanelOpen()).toBe(true);

    component.closePanel();
    expect(component.isPanelOpen()).toBe(false);
  });

  it('should handle item click to cycle font scale', () => {
    expect(a11yService.fontScale()).toBe('normal');
    component.handleItemClick('fontScale');
    expect(a11yService.fontScale()).toBe('large');
  });

  it('should reset all settings when resetAll is triggered', () => {
    a11yService.toggleHighContrast();
    expect(a11yService.highContrast()).toBe(true);

    component.resetAll();
    expect(a11yService.highContrast()).toBe(false);
  });
});
