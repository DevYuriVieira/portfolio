import { SupportedLang } from '@core';
import { HeroSectionData } from './hero.model';

const HERO_I18N: Record<SupportedLang, HeroSectionData> = {
  'pt-BR': {
    eyebrow: 'Software Engineer · Full-Stack Development',
    name: 'Yuri Vieira Teixeira',
    description:
      'Desenvolvo aplicações web de ponta a ponta, alinhando interfaces precisas no frontend a serviços backend bem estruturados. Priorizo código limpo, arquitetura modular e soluções focadas na resolução real de problemas.',
    projectsCtaText: 'Ver projetos',
    cvCtaText: 'Download CV',
    cvUrl: 'assets/cv-yuri-vieira-teixeira.pdf',
  },
  en: {
    eyebrow: 'Software Engineer · Full-Stack Development',
    name: 'Yuri Vieira Teixeira',
    description:
      'I build end-to-end web applications, aligning precise frontend interfaces with well-structured backend services. I prioritize clean code, modular architecture, and solutions focused on solving real problems.',
    projectsCtaText: 'View projects',
    cvCtaText: 'Download CV',
    cvUrl: 'assets/cv-yuri-vieira-teixeira.pdf',
  },
};

export const HERO_SECTION_DATA: HeroSectionData = HERO_I18N['pt-BR'];

export function getHeroData(lang: SupportedLang): HeroSectionData {
  return HERO_I18N[lang];
}
