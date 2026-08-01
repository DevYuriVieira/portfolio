import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { Container, Heading, Section, Text } from '@ui';
import { ENGINEERING_PRINCIPLES } from './about.data';
import { EngineeringPrinciple } from './about.model';

@Component({
  selector: 'app-about',
  imports: [Section, Container, Heading, Text],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection implements AfterViewInit, OnDestroy {
  readonly principles: readonly EngineeringPrinciple[] = ENGINEERING_PRINCIPLES;

  private readonly elementRef = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              this.observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      const cards = this.elementRef.nativeElement.querySelectorAll('.about__principle-card');
      cards.forEach((card: Element, index: number) => {
        (card as HTMLElement).style.setProperty('--delay-index', index.toString());
        this.observer?.observe(card);
      });
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
