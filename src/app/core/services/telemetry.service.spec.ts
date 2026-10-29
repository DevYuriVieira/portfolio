import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { TelemetryService } from './telemetry.service';

describe('TelemetryService', () => {
  let service: TelemetryService;

  beforeEach(() => {
    try {
      localStorage.removeItem('yv_portfolio_analytics_v1');
    } catch {}

    TestBed.configureTestingModule({
      providers: [TelemetryService],
    });
    service = TestBed.inject(TelemetryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with default metrics and compute optimal rating', () => {
    expect(service.cls()).toBe(0);
    expect(service.longTasks()).toBe(0);
    expect(service.rating()).toBe('optimal');

    const snap = service.snapshot();
    expect(snap.cls).toBe(0);
    expect(snap.longTasks).toBe(0);
    expect(snap.rating).toBe('optimal');
  });

  it('should degrade rating when CLS exceeds 0.25', () => {
    service.cls.set(0.3);
    expect(service.rating()).toBe('degraded');
  });

  it('should set rating to good when LCP is between 2500ms and 4000ms', () => {
    service.lcp.set(2800);
    expect(service.rating()).toBe('good');
  });

  it('should set rating to degraded when LCP exceeds 4000ms', () => {
    service.lcp.set(4500);
    expect(service.rating()).toBe('degraded');
  });

  it('should set rating to good when INP is between 200ms and 500ms', () => {
    service.inp.set(250);
    expect(service.rating()).toBe('good');
  });

  it('should set rating to degraded when INP exceeds 500ms', () => {
    service.inp.set(650);
    expect(service.rating()).toBe('degraded');
  });

  it('should track CV downloads by track and compute total downloads', () => {
    expect(service.totalCvDownloads()).toBe(0);

    service.trackCvDownload('fullstack', 'pt-BR');
    service.trackCvDownload('backend', 'en');
    service.trackCvDownload('fullstack', 'pt-BR');

    expect(service.cvDownloadsByTrack()).toEqual({
      fullstack: 2,
      backend: 1,
      frontend: 0,
    });
    expect(service.totalCvDownloads()).toBe(3);
    expect(service.lastEvent()).toBe('cv_download:fullstack:pt-BR');
  });

  it('should track WhatsApp clicks across hero and contact sources', () => {
    expect(service.whatsappClicks()).toBe(0);

    service.trackWhatsAppClick('hero', 'pt-BR');
    service.trackWhatsAppClick('contact', 'en');

    expect(service.whatsappClicks()).toBe(2);
    expect(service.lastEvent()).toBe('whatsapp_click:contact:en');
  });
});
