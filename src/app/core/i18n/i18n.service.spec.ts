import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { I18nService } from './i18n.service';

describe('I18nService', () => {
  beforeEach(() => {
    localStorage.removeItem('portfolio-lang');
    window.history.replaceState(null, '', '/');
  });

  afterEach(() => {
    localStorage.removeItem('portfolio-lang');
    window.history.replaceState(null, '', '/');
    vi.restoreAllMocks();
  });

  it('should prioritize ?lang= query parameter over stored and browser language', () => {
    localStorage.setItem('portfolio-lang', 'pt-BR');
    window.history.replaceState(null, '', '/?lang=en');

    TestBed.configureTestingModule({ providers: [I18nService] });
    const service = TestBed.inject(I18nService);

    expect(service.currentLang()).toBe('en');
    expect(document.documentElement.lang).toBe('en');
  });

  it('should respect persisted language in localStorage when no query parameter is present', () => {
    localStorage.setItem('portfolio-lang', 'es');

    TestBed.configureTestingModule({ providers: [I18nService] });
    const service = TestBed.inject(I18nService);

    expect(service.currentLang()).toBe('es');
  });

  it('should detect browser language on first visit', () => {
    vi.spyOn(navigator, 'languages', 'get').mockReturnValue(['es-ES', 'en-US']);

    TestBed.configureTestingModule({ providers: [I18nService] });
    const service = TestBed.inject(I18nService);

    expect(service.currentLang()).toBe('es');
  });

  it('should cycle languages via toggleLang()', () => {
    localStorage.setItem('portfolio-lang', 'pt-BR');

    TestBed.configureTestingModule({ providers: [I18nService] });
    const service = TestBed.inject(I18nService);

    expect(service.currentLang()).toBe('pt-BR');
    service.toggleLang();
    expect(service.currentLang()).toBe('en');
    service.toggleLang();
    expect(service.currentLang()).toBe('es');
    service.toggleLang();
    expect(service.currentLang()).toBe('pt-BR');
  });
});
