import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  computed,
  inject,
} from '@angular/core';
import { I18nService } from '@core';
import { Container, Heading, Section, Text } from '@ui';
import { getExperienceData } from './experience.data';

@Component({
  selector: 'app-experience',
  imports: [Section, Container, Heading, Text],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSection implements AfterViewInit, OnDestroy {
  private readonly i18n = inject(I18nService);

  readonly i18nData = computed(() => getExperienceData(this.i18n.currentLang()));
  readonly data = computed(() => this.i18nData().sectionData);
  readonly milestones = computed(() => this.i18nData().milestones);
  readonly currentFocus = computed(() => this.i18nData().currentFocus);

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

      const items = this.elementRef.nativeElement.querySelectorAll(
        '.experience__item, .experience__focus-card'
      );
      items.forEach((item: Element) => this.observer?.observe(item));
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
