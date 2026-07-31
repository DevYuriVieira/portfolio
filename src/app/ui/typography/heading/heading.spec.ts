import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { Heading } from './heading';

@Component({
  imports: [Heading],
  template: `
    <app-heading level="h1">H1 Title</app-heading>
    <app-heading level="h2">H2 Title</app-heading>
    <app-heading level="h3">H3 Title</app-heading>
    <app-heading level="h4">H4 Title</app-heading>
    <app-heading level="h5">H5 Title</app-heading>
    <app-heading level="h6">H6 Title</app-heading>
  `,
})
class TestHostComponent {}

describe('Heading Component', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should project content into h1 tag', () => {
    const el = fixture.nativeElement.querySelector('h1');
    expect(el).toBeTruthy();
    expect(el.textContent.trim()).toBe('H1 Title');
  });

  it('should project content into h2 tag', () => {
    const el = fixture.nativeElement.querySelector('h2');
    expect(el).toBeTruthy();
    expect(el.textContent.trim()).toBe('H2 Title');
  });

  it('should project content into h3 tag', () => {
    const el = fixture.nativeElement.querySelector('h3');
    expect(el).toBeTruthy();
    expect(el.textContent.trim()).toBe('H3 Title');
  });

  it('should project content into h4 tag', () => {
    const el = fixture.nativeElement.querySelector('h4');
    expect(el).toBeTruthy();
    expect(el.textContent.trim()).toBe('H4 Title');
  });

  it('should project content into h5 tag', () => {
    const el = fixture.nativeElement.querySelector('h5');
    expect(el).toBeTruthy();
    expect(el.textContent.trim()).toBe('H5 Title');
  });

  it('should project content into h6 tag', () => {
    const el = fixture.nativeElement.querySelector('h6');
    expect(el).toBeTruthy();
    expect(el.textContent.trim()).toBe('H6 Title');
  });
});
