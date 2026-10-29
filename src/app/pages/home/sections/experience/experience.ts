import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  signal,
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
  private readonly elementRef = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  readonly i18nData = computed(() => getExperienceData(this.i18n.currentLang()));
  readonly data = computed(() => this.i18nData().sectionData);
  readonly milestones = computed(() => this.i18nData().milestones);
  readonly currentFocus = computed(() => this.i18nData().currentFocus);

  readonly activeFocusIndex = signal<number>(0);
  readonly showAllMilestones = signal<boolean>(false);

  readonly displayedMilestones = computed(() => {
    const all = this.milestones();
    return this.showAllMilestones() ? all : all.filter((m) => m.highlighted);
  });

  readonly hiddenMilestonesCount = computed(() => {
    const all = this.milestones();
    return all.length - all.filter((m) => m.highlighted).length;
  });

  readonly timelineToggleLabel = computed(() => {
    const lang = this.i18n.currentLang();
    const expanded = this.showAllMilestones();
    const extraCount = this.hiddenMilestonesCount();
    const totalCount = this.milestones().length;

    if (lang === 'en') {
      return expanded
        ? 'Show key milestones only (5)'
        : `+ View ${extraCount} complementary trainings & bootcamps (${totalCount} total)`;
    }
    if (lang === 'es') {
      return expanded
        ? 'Mostrar solo hitos principales (5)'
        : `+ Ver ${extraCount} formaciones y bootcamps complementarios (${totalCount} en total)`;
    }
    return expanded
      ? 'Mostrar apenas marcos principais (5)'
      : `+ Ver ${extraCount} formações e bootcamps complementares (${totalCount} no total)`;
  });

  constructor() {
    effect(() => {
      this.i18n.currentLang();
      if (isPlatformBrowser(this.platformId)) {
        queueMicrotask(() => this.observeItems());
      }
    });
  }

  toggleMilestones(): void {
    this.showAllMilestones.update((v) => !v);
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const items = this.elementRef.nativeElement.querySelectorAll('.experience__item');
        items.forEach((item: Element) => item.classList.add('is-visible'));
      }, 20);
    }
  }

  private isDesktopViewport(): boolean {
    return (
      isPlatformBrowser(this.platformId) &&
      typeof window !== 'undefined' &&
      window.innerWidth >= 768
    );
  }

  isFocusCardVisible(index: number): boolean {
    const total = this.currentFocus().items.length;
    const active = this.activeFocusIndex();
    if (!this.isDesktopViewport() || total <= 2) {
      return index === active;
    }
    const startIndex = Math.min(active, total - 2);
    return index === startIndex || index === startIndex + 1;
  }

  nextFocus(): void {
    const total = this.currentFocus().items.length;
    if (total === 0) return;
    const current = this.activeFocusIndex();

    if (this.isDesktopViewport() && total > 2) {
      const maxStart = total - 2;
      if (current >= maxStart) {
        this.activeFocusIndex.set(0);
      } else {
        this.activeFocusIndex.set(Math.min(maxStart, current + 2));
      }
      return;
    }

    this.activeFocusIndex.set((current + 1) % total);
  }

  prevFocus(): void {
    const total = this.currentFocus().items.length;
    if (total === 0) return;
    const current = this.activeFocusIndex();

    if (this.isDesktopViewport() && total > 2) {
      const maxStart = total - 2;
      if (current <= 0) {
        this.activeFocusIndex.set(maxStart);
      } else if (current >= maxStart) {
        this.activeFocusIndex.set(Math.max(0, maxStart - 1));
      } else {
        this.activeFocusIndex.set(Math.max(0, current - 2));
      }
      return;
    }

    this.activeFocusIndex.set((current - 1 + total) % total);
  }

  selectFocus(index: number): void {
    const total = this.currentFocus().items.length;
    if (index >= 0 && index < total) {
      this.activeFocusIndex.set(index);
    }
  }

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
          threshold: 0.1,
          rootMargin: '0px 0px -20px 0px',
        }
      );

      this.observeItems();
    } else {
      this.markAllVisible();
    }
  }

  private observeItems(): void {
    const items = this.elementRef.nativeElement.querySelectorAll('.experience__item');
    items.forEach((item: Element) => {
      if (this.observer) {
        this.observer.observe(item);
      } else {
        item.classList.add('is-visible');
      }
    });
  }

  private markAllVisible(): void {
    const items = this.elementRef.nativeElement.querySelectorAll('.experience__item');
    items.forEach((item: Element) => item.classList.add('is-visible'));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
