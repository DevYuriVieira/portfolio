import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-reading-guide',
  template: `<div #guide class="reading-guide" aria-hidden="true"></div>`,
  styleUrl: './reading-guide.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadingGuide implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly ngZone = inject(NgZone);
  private readonly guideEl = viewChild<ElementRef<HTMLElement>>('guide');

  private targetY = 0;
  private currentY = 0;
  private animId: number | null = null;
  private mouseMoveListener: ((e: MouseEvent) => void) | null = null;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.currentY = window.innerHeight / 2;
    this.targetY = this.currentY;

    this.ngZone.runOutsideAngular(() => {
      this.mouseMoveListener = (e: MouseEvent) => {
        this.targetY = e.clientY;
      };
      window.addEventListener('mousemove', this.mouseMoveListener, { passive: true });

      const animate = () => {
        this.currentY += (this.targetY - this.currentY) * 0.25;
        const el = this.guideEl()?.nativeElement;
        if (el) {
          el.style.transform = `translate3d(0, ${this.currentY}px, 0)`;
        }
        this.animId = requestAnimationFrame(animate);
      };
      this.animId = requestAnimationFrame(animate);
    });
  }

  ngOnDestroy(): void {
    if (this.animId !== null) {
      cancelAnimationFrame(this.animId);
    }
    if (this.mouseMoveListener) {
      window.removeEventListener('mousemove', this.mouseMoveListener);
    }
  }
}
