export interface TimelineMilestone {
  readonly id: string;
  readonly year: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly description: string;
}

export interface ExperienceSectionData {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly ariaLabel: string;
}
