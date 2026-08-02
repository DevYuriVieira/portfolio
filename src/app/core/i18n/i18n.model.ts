export type SupportedLang = 'pt-BR' | 'en';

export const SUPPORTED_LANGS: readonly SupportedLang[] = ['pt-BR', 'en'] as const;

export const DEFAULT_LANG: SupportedLang = 'pt-BR';
