import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevealDirective } from './reveal.directive';

@Component({
  template: `<div appReveal [revealDelay]="100">Content</div>`,
  imports: [RevealDirective],
})
class TestHostComponent {}

describe('RevealDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create the directive and add is-reveal-ready class', () => {
    const el = fixture.nativeElement.querySelector('[appReveal]');
    expect(el).toBeTruthy();
    expect(el.classList.contains('is-reveal-ready')).toBe(true);
  });

  it('should fall back to immediate reveal when IntersectionObserver is unavailable', () => {
    // jsdom does not have IntersectionObserver, so the directive should
    // gracefully fall back to adding is-revealed immediately
    const el = fixture.nativeElement.querySelector('[appReveal]');
    expect(el.classList.contains('is-revealed')).toBe(true);
  });
});
