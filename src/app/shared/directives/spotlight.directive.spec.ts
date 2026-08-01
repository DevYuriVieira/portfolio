import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotlightDirective } from './spotlight.directive';

@Component({
  template: `<div appSpotlight class="card">Content</div>`,
  imports: [SpotlightDirective],
})
class TestHostComponent {}

describe('SpotlightDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create the directive and add has-spotlight class', () => {
    const el = fixture.nativeElement.querySelector('[appSpotlight]');
    expect(el).toBeTruthy();
    expect(el.classList.contains('has-spotlight')).toBe(true);
  });

  it('should set spotlight CSS properties on mousemove', () => {
    const el = fixture.nativeElement.querySelector('[appSpotlight]') as HTMLElement;

    const event = new MouseEvent('mousemove', {
      clientX: 100,
      clientY: 50,
    });
    el.dispatchEvent(event);

    expect(el.style.getPropertyValue('--spotlight-x')).toBeTruthy();
    expect(el.style.getPropertyValue('--spotlight-y')).toBeTruthy();
  });

  it('should remove spotlight CSS properties on mouseleave', () => {
    const el = fixture.nativeElement.querySelector('[appSpotlight]') as HTMLElement;

    el.dispatchEvent(new MouseEvent('mousemove', { clientX: 100, clientY: 50 }));
    el.dispatchEvent(new MouseEvent('mouseleave'));

    expect(el.style.getPropertyValue('--spotlight-x')).toBe('');
    expect(el.style.getPropertyValue('--spotlight-y')).toBe('');
  });
});
