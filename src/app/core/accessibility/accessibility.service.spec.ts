import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { AccessibilityService } from './accessibility.service';
import { I18nService } from '../i18n/i18n.service';

describe('AccessibilityService', () => {
  let service: AccessibilityService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [AccessibilityService, I18nService],
    });
    service = TestBed.inject(AccessibilityService);
  });

  it('should be created with default settings', () => {
    expect(service).toBeTruthy();
    expect(service.fontScale()).toBe('normal');
    expect(service.dyslexicFont()).toBe(false);
    expect(service.highContrast()).toBe(false);
    expect(service.screenReader()).toBe(false);
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

  it('should toggle new assistive features correctly', () => {
    expect(service.lineHeight()).toBe(false);
    service.toggleLineHeight();
    expect(service.lineHeight()).toBe(true);

    expect(service.alignLeft()).toBe(false);
    service.toggleAlignLeft();
    expect(service.alignLeft()).toBe(true);

    expect(service.bionicReading()).toBe(false);
    service.toggleBionicReading();
    expect(service.bionicReading()).toBe(true);

    expect(service.invertColors()).toBe(false);
    service.toggleInvertColors();
    expect(service.invertColors()).toBe(true);

    expect(service.largeCursor()).toBe(false);
    service.toggleLargeCursor();
    expect(service.largeCursor()).toBe(true);
  });

  it('should ensure colorblind filters are mutually exclusive', () => {
    service.toggleProtanopia();
    expect(service.protanopia()).toBe(true);
    expect(service.deuteranopia()).toBe(false);
    expect(service.tritanopia()).toBe(false);

    service.toggleDeuteranopia();
    expect(service.protanopia()).toBe(false);
    expect(service.deuteranopia()).toBe(true);
    expect(service.tritanopia()).toBe(false);

    service.toggleTritanopia();
    expect(service.protanopia()).toBe(false);
    expect(service.deuteranopia()).toBe(false);
    expect(service.tritanopia()).toBe(true);
  });

  it('should reset all options back to defaults', () => {
    service.cycleFontScale();
    service.toggleHighContrast();
    service.toggleMonochrome();
    service.toggleLineHeight();
    service.toggleProtanopia();
    expect(service.hasActiveSettings()).toBe(true);

    service.resetDefaults();
    expect(service.fontScale()).toBe('normal');
    expect(service.highContrast()).toBe(false);
    expect(service.monochrome()).toBe(false);
    expect(service.lineHeight()).toBe(false);
    expect(service.protanopia()).toBe(false);
    expect(service.hasActiveSettings()).toBe(false);
  });
});
