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
import { EXPERIENCE_MILESTONES, EXPERIENCE_SECTION_DATA } from './experience.data';
import { ExperienceSectionData, TimelineMilestone } from './experience.model';

@Component({
  selector: 'app-experience',
  imports: [Section, Container, Heading, Text],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSection implements AfterViewInit, OnDestroy {
  readonly data: ExperienceSectionData = EXPERIENCE_SECTION_DATA;
  readonly milestones: readonly TimelineMilestone[] = EXPERIENCE_MILESTONES;

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

      const items = this.elementRef.nativeElement.querySelectorAll('.experience__item');
      items.forEach((item: Element) => this.observer?.observe(item));
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
