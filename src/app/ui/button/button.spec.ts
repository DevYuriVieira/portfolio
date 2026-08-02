import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';
import { Button } from './button';

@Component({
  standalone: true,
  imports: [Button],
  template: `
    <app-button variant="primary" [href]="'mailto:test@example.com'">
      Enviar E-mail ↗
    </app-button>
    <app-button variant="secondary">
      Copiar E-mail
    </app-button>
  `,
})
class TestHostComponent {}

describe('Button Component', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should project text into anchor element when href is provided', () => {
    const anchorEl: HTMLAnchorElement = fixture.nativeElement.querySelector('a.button');
    expect(anchorEl).toBeTruthy();
    expect(anchorEl.href).toContain('mailto:test@example.com');
    expect(anchorEl.textContent?.trim()).toBe('Enviar E-mail ↗');
  });

  it('should project text into button element when href is omitted', () => {
    const buttonEl: HTMLButtonElement = fixture.nativeElement.querySelector('button.button');
    expect(buttonEl).toBeTruthy();
    expect(buttonEl.textContent?.trim()).toBe('Copiar E-mail');
  });
});
