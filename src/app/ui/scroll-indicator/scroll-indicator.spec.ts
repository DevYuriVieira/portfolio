import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ScrollIndicator } from './scroll-indicator';

describe('ScrollIndicator', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollIndicator],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ScrollIndicator);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
