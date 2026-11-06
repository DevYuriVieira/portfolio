export type FontScale = 'normal' | 'large' | 'x-large';

export interface AccessibilityState {
  readonly fontScale: FontScale;
  readonly dyslexicFont: boolean;
  readonly textSpacing: boolean;
  readonly lineHeight: boolean;
  readonly alignLeft: boolean;
  readonly bionicReading: boolean;
  readonly highContrast: boolean;
  readonly monochrome: boolean;
  readonly invertColors: boolean;
  readonly lowSaturation: boolean;
  readonly hideMedia: boolean;
  readonly protanopia: boolean;
  readonly deuteranopia: boolean;
  readonly tritanopia: boolean;
  readonly highlightLinks: boolean;
  readonly highlightHeadings: boolean;
  readonly pauseAnimations: boolean;
  readonly readingGuide: boolean;
  readonly largeCursor: boolean;
  readonly screenReader: boolean;
  readonly vlibrasActive: boolean;
}

export const DEFAULT_A11Y_STATE: AccessibilityState = {
  fontScale: 'normal',
  dyslexicFont: false,
  textSpacing: false,
  lineHeight: false,
  alignLeft: false,
  bionicReading: false,
  highContrast: false,
  monochrome: false,
  invertColors: false,
  lowSaturation: false,
  hideMedia: false,
  protanopia: false,
  deuteranopia: false,
  tritanopia: false,
  highlightLinks: false,
  highlightHeadings: false,
  pauseAnimations: false,
  readingGuide: false,
  largeCursor: false,
  screenReader: false,
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
