import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appSpotlight]',
  host: {
    '[class.has-spotlight]': 'true',
  },
})
export class SpotlightDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private boundMove: ((e: MouseEvent) => void) | null = null;
  private boundLeave: (() => void) | null = null;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.prefersReducedMotion()) return;

    const host = this.el.nativeElement as HTMLElement;

    this.boundMove = (e: MouseEvent) => {
      const rect = host.getBoundingClientRect();
      host.style.setProperty('--spotlight-x', `${e.clientX - rect.left}px`);
      host.style.setProperty('--spotlight-y', `${e.clientY - rect.top}px`);
    };

    this.boundLeave = () => {
      host.style.removeProperty('--spotlight-x');
      host.style.removeProperty('--spotlight-y');
    };

    host.addEventListener('mousemove', this.boundMove, { passive: true });
    host.addEventListener('mouseleave', this.boundLeave);
  }

  ngOnDestroy(): void {
    const host = this.el.nativeElement as HTMLElement;
    if (this.boundMove) host.removeEventListener('mousemove', this.boundMove);
    if (this.boundLeave) host.removeEventListener('mouseleave', this.boundLeave);
    this.boundMove = null;
    this.boundLeave = null;
  }

  private prefersReducedMotion(): boolean {
    return typeof window !== 'undefined'
      && typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
