import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { AccessibilityService } from './accessibility.service';

describe('AccessibilityService', () => {
  let service: AccessibilityService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [AccessibilityService],
    });
    service = TestBed.inject(AccessibilityService);
  });

  it('should be created with default settings', () => {
    expect(service).toBeTruthy();
    expect(service.fontScale()).toBe('normal');
    expect(service.dyslexicFont()).toBe(false);
    expect(service.highContrast()).toBe(false);
    expect(service.hasActiveSettings()).toBe(false);
  });

  it('should cycle font scale correctly', () => {
    expect(service.fontScale()).toBe('normal');

    service.cycleFontScale();
    expect(service.fontScale()).toBe('large');

    service.cycleFontScale();
    expect(service.fontScale()).toBe('x-large');

    service.cycleFontScale();
    expect(service.fontScale()).toBe('normal');
  });

  it('should toggle high contrast and update hasActiveSettings', () => {
    expect(service.highContrast()).toBe(false);

    service.toggleHighContrast();
    expect(service.highContrast()).toBe(true);
    expect(service.hasActiveSettings()).toBe(true);

    service.toggleHighContrast();
    expect(service.highContrast()).toBe(false);
  });

  it('should reset all options back to defaults', () => {
    service.cycleFontScale();
    service.toggleHighContrast();
    service.toggleMonochrome();
    expect(service.hasActiveSettings()).toBe(true);

    service.resetDefaults();
    expect(service.fontScale()).toBe('normal');
    expect(service.highContrast()).toBe(false);
    expect(service.monochrome()).toBe(false);
    expect(service.hasActiveSettings()).toBe(false);
  });
});
