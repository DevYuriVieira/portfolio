export type SupportedLang = 'pt-BR' | 'en' | 'es';

export const SUPPORTED_LANGS: readonly SupportedLang[] = ['pt-BR', 'en', 'es'] as const;

export const DEFAULT_LANG: SupportedLang = 'pt-BR';
