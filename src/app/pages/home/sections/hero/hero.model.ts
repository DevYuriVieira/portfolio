export type CvTrack = 'fullstack' | 'frontend' | 'backend';

export interface HeroCvOption {
  readonly id: CvTrack;
  readonly label: string;
  readonly shortLabel: string;
  readonly badge: string;
  readonly url: string;
  readonly ctaText: string;
}

export interface HeroSectionData {
  readonly eyebrow: string;
  readonly name: string;
  readonly description: string;
  readonly projectsCtaText: string;
  readonly cvCtaText: string;
  readonly cvUrl: string;
  readonly cvSelectorAriaLabel: string;
  readonly cvOptions: readonly HeroCvOption[];
  readonly whatsappCtaText: string;
  readonly whatsappAriaLabel: string;
  readonly whatsappUrl: string;
}


