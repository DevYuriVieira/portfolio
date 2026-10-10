import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import * as fc from 'fast-check';
import { AccessibilityService } from './accessibility.service';

describe('AccessibilityService - Property-Based & Fuzz Testing', () => {
  let service: AccessibilityService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [AccessibilityService],
    });
    service = TestBed.inject(AccessibilityService);
  });

  it('Property: FontScale cycling is strictly periodic with period 3', () => {
    fc.assert(
      fc.property(fc.nat(100), (cycles) => {
        service.resetDefaults();
        const expectedOrder = ['normal', 'large', 'x-large'] as const;

        for (let i = 0; i < cycles; i++) {
          service.cycleFontScale();
        }

        const expectedIndex = cycles % 3;
        expect(service.fontScale()).toBe(expectedOrder[expectedIndex]);
      }),
      { numRuns: 50 },
    );
  });

  it('Property: Toggling boolean settings an even number of times preserves state', () => {
    fc.assert(
      fc.property(
        fc.nat(50).map((n) => n * 2),
        (evenTimes) => {
          service.resetDefaults();
          const initialContrast = service.highContrast();
          const initialDyslexic = service.dyslexicFont();

          for (let i = 0; i < evenTimes; i++) {
            service.toggleHighContrast();
            service.toggleDyslexicFont();
          }

          expect(service.highContrast()).toBe(initialContrast);
          expect(service.dyslexicFont()).toBe(initialDyslexic);
        },
      ),
      { numRuns: 30 },
    );
  });

  it('Property: resetDefaults invariant holds after arbitrary sequences of mutations', () => {
    type Action =
      | 'cycleFont'
      | 'toggleContrast'
      | 'toggleMonochrome'
      | 'toggleDyslexic'
      | 'toggleSpacing'
      | 'toggleHighlightLinks'
      | 'togglePauseAnimations'
      | 'toggleReadingGuide';

    const actionsArbitrary = fc.array(
      fc.constantFrom<Action>(
        'cycleFont',
        'toggleContrast',
        'toggleMonochrome',
        'toggleDyslexic',
        'toggleSpacing',
        'toggleHighlightLinks',
        'togglePauseAnimations',
        'toggleReadingGuide',
      ),
      { minLength: 1, maxLength: 30 },
    );

    fc.assert(
      fc.property(actionsArbitrary, (actions) => {
        service.resetDefaults();

        for (const action of actions) {
          switch (action) {
            case 'cycleFont':
              service.cycleFontScale();
              break;
            case 'toggleContrast':
              service.toggleHighContrast();
              break;
            case 'toggleMonochrome':
              service.toggleMonochrome();
              break;
            case 'toggleDyslexic':
              service.toggleDyslexicFont();
              break;
            case 'toggleSpacing':
              service.toggleTextSpacing();
              break;
            case 'toggleHighlightLinks':
              service.toggleHighlightLinks();
              break;
            case 'togglePauseAnimations':
              service.togglePauseAnimations();
              break;
            case 'toggleReadingGuide':
              service.toggleReadingGuide();
              break;
          }
        }

        service.resetDefaults();

        expect(service.fontScale()).toBe('normal');
        expect(service.highContrast()).toBe(false);
        expect(service.monochrome()).toBe(false);
        expect(service.dyslexicFont()).toBe(false);
        expect(service.textSpacing()).toBe(false);
        expect(service.highlightLinks()).toBe(false);
        expect(service.pauseAnimations()).toBe(false);
        expect(service.readingGuide()).toBe(false);
        expect(service.hasActiveSettings()).toBe(false);
      }),
      { numRuns: 50 },
    );
  });

  it('Fuzz Testing: Corrupted localStorage inputs never crash state restoration', () => {
    fc.assert(
      fc.property(fc.string(), (corruptedPayload: string) => {
        localStorage.setItem('portfolio-a11y-settings', corruptedPayload);

        expect(() => {
          TestBed.resetTestingModule();
          TestBed.configureTestingModule({
            providers: [AccessibilityService],
          });
          const freshService = TestBed.inject(AccessibilityService);
          expect(freshService.fontScale()).toBeDefined();
        }).not.toThrow();
      }),
      { numRuns: 50 },
    );
  });
});
