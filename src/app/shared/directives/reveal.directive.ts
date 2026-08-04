import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  host: {
    '[class.is-reveal-ready]': 'true',
  },
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input('revealDelay') delay = 0;
  @Input('revealThreshold') threshold = 0.12;

  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.prefersReducedMotion()) {
      this.el.nativeElement.classList.add('is-revealed');
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      this.el.nativeElement.classList.add('is-revealed');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (this.delay > 0) {
              target.style.transitionDelay = `${this.delay}ms`;
            }
            target.classList.add('is-revealed');
            this.observer?.unobserve(target);
          }
        });
      },
      { threshold: this.threshold },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  private prefersReducedMotion(): boolean {
    return typeof window !== 'undefined'
      && typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
