import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ArchitectureModal } from './architecture-modal';

describe('ArchitectureModal', () => {
  let component: ArchitectureModal;
  let fixture: ComponentFixture<ArchitectureModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureModal],
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should expose architecture labels and 4 pillars', () => {
    const labels = component.labels();
    expect(labels.modalTitle).toContain('ZEISS');
    expect(labels.ndaDisclaimer).toBeTruthy();
    expect(labels.pillars.length).toBe(4);
    expect(labels.step1Title).toBeTruthy();
    expect(labels.step5Title).toBeTruthy();
  });

  it('should render the flow diagram and 5 architecture nodes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const flowElement = compiled.querySelector('.arch-flow');
    expect(flowElement).toBeTruthy();

    const nodes = compiled.querySelectorAll('.arch-node');
    expect(nodes.length).toBe(5);

    const pillars = compiled.querySelectorAll('.arch-modal__pillar-card');
    expect(pillars.length).toBe(4);
  });

  it('should emit close when close button or escape is triggered', () => {
    let emitted = false;
    component.close.subscribe(() => {
      emitted = true;
    });

    component.closeModal();
    expect(emitted).toBe(true);

    emitted = false;
    component.onEscape();
    expect(emitted).toBe(true);
  });
});
