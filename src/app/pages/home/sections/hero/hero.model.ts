export type CvTrack = 'fullstack' | 'frontend' | 'backend';

export interface HeroCvOption {
  readonly id: CvTrack;
  readonly label: string;
  readonly shortLabel: string;
  readonly badge: string;
  readonly url: string;
  readonly ctaText: string;
}

export interface HeroMetric {
  readonly value: string;
  readonly label: string;
}

export interface HeroSectionData {
  readonly eyebrow: string;
  readonly name: string;
  readonly description: string;
  readonly projectsCtaText: string;
  readonly cvButtonLabel: string;
  readonly cvCtaText: string;
  readonly cvUrl: string;
  readonly cvSelectorAriaLabel: string;
  readonly cvOptions: readonly HeroCvOption[];
  readonly secondaryCtaType: 'whatsapp' | 'linkedin';
  readonly secondaryCtaText: string;
  readonly secondaryCtaAriaLabel: string;
  readonly secondaryCtaUrl: string;
  readonly whatsappCtaText: string;
  readonly whatsappAriaLabel: string;
  readonly whatsappUrl: string;
  readonly metricsAriaLabel: string;
  readonly metrics: readonly HeroMetric[];
}


