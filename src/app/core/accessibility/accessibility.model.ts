export type FontScale = 'normal' | 'large' | 'x-large';

export interface AccessibilityState {
  readonly fontScale: FontScale;
  readonly dyslexicFont: boolean;
  readonly textSpacing: boolean;
  readonly highContrast: boolean;
  readonly monochrome: boolean;
  readonly highlightLinks: boolean;
  readonly pauseAnimations: boolean;
  readonly readingGuide: boolean;
  readonly vlibrasActive: boolean;
}

export const DEFAULT_A11Y_STATE: AccessibilityState = {
  fontScale: 'normal',
  dyslexicFont: false,
  textSpacing: false,
  highContrast: false,
  monochrome: false,
  highlightLinks: false,
  pauseAnimations: false,
  readingGuide: false,
  vlibrasActive: false,
};

export type A11yFeatureKey = keyof AccessibilityState;

export interface A11yItemOption {
  readonly id: A11yFeatureKey;
  readonly iconType: string;
  readonly labelKey: string;
  readonly badge?: string;
  readonly isStep?: boolean;
}

export interface A11ySectionConfig {
  readonly titleKey: string;
  readonly items: readonly A11yItemOption[];
}
