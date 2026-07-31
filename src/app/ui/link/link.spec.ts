import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';
import { Link } from './link';

@Component({
  imports: [Link],
  template: `
    <app-link href="https://example.com" [external]="true">External Link Text</app-link>
    <app-link href="/about" [external]="false">Internal Link Text</app-link>
  `,
})
class TestHostComponent {}

describe('Link Component', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should project content into external anchor', () => {
    const anchors = fixture.nativeElement.querySelectorAll('a');
    const externalAnchor = anchors[0];
    expect(externalAnchor).toBeTruthy();
    expect(externalAnchor.getAttribute('target')).toBe('_blank');
    expect(externalAnchor.textContent.trim()).toBe('External Link Text');
  });

  it('should project content into internal anchor', () => {
    const anchors = fixture.nativeElement.querySelectorAll('a');
    const internalAnchor = anchors[1];
    expect(internalAnchor).toBeTruthy();
    expect(internalAnchor.textContent.trim()).toBe('Internal Link Text');
  });
});
