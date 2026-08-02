export interface TimelineMilestone {
  readonly id: string;
  readonly year: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly description: string;
}

export interface CertificationItem {
  readonly id: string;
  readonly title: string;
  readonly issuer: string;
  readonly year: string;
  readonly category: string;
  readonly badge?: string;
}

export interface ExperienceSectionData {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly ariaLabel: string;
  readonly certificationsTitle?: string;
  readonly certificationsSubtitle?: string;
}
