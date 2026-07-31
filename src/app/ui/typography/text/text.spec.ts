import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { Text } from './text';

@Component({
  imports: [Text],
  template: `
    <app-text element="p">Paragraph Content</app-text>
    <app-text element="span">Span Content</app-text>
    <app-text element="div">Div Content</app-text>
    <app-text element="code">Code Content</app-text>
  `,
})
class TestHostComponent {}

describe('Text Component', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should project content into p element', () => {
    const el = fixture.nativeElement.querySelector('p');
    expect(el).toBeTruthy();
    expect(el.textContent.trim()).toBe('Paragraph Content');
  });

  it('should project content into span element', () => {
    const el = fixture.nativeElement.querySelector('span');
    expect(el).toBeTruthy();
    expect(el.textContent.trim()).toBe('Span Content');
  });

  it('should project content into div element', () => {
    const el = fixture.nativeElement.querySelector('div');
    expect(el).toBeTruthy();
    expect(el.textContent.trim()).toBe('Div Content');
  });

  it('should project content into code element', () => {
    const el = fixture.nativeElement.querySelector('code');
    expect(el).toBeTruthy();
    expect(el.textContent.trim()).toBe('Code Content');
  });
});
