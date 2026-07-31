export interface SkillCategory {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly skills: readonly string[];
}

export interface SkillsSectionData {
  readonly id: string;
  readonly ariaLabel: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
}
