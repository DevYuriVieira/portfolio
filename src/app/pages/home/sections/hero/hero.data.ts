import { SupportedLang } from '@core';
import { HeroSectionData } from './hero.model';

const HERO_I18N: Record<SupportedLang, HeroSectionData> = {
  'pt-BR': {
    eyebrow: 'Software Engineer · Full-Stack Development',
    name: 'Yuri Vieira Teixeira',
    description:
      'Full-Stack Software Engineer especializado no ecossistema Java (Spring Boot), Python (Django) e TypeScript (React / Angular). Foco em arquitetura de software escalável, desenvolvimento de APIs RESTful resilientes, integridade de dados e qualidade de código.',
    projectsCtaText: 'Ver projetos',
    cvCtaText: 'Download CV (PT)',
    cvUrl: 'assets/cv-yuri-vieira-teixeira-pt.pdf',
  },
  en: {
    eyebrow: 'Software Engineer · Full-Stack Development',
    name: 'Yuri Vieira Teixeira',
    description:
      'Full-Stack Software Engineer specializing in Java (Spring Boot), Python (Django), and TypeScript (React / Angular). Focused on scalable software architecture, resilient RESTful API development, data integrity, and code quality.',
    projectsCtaText: 'View projects',
    cvCtaText: 'Download CV (EN)',
    cvUrl: 'assets/cv-yuri-vieira-teixeira-en.pdf',
  },
};

export const HERO_SECTION_DATA: HeroSectionData = HERO_I18N['pt-BR'];

export function getHeroData(lang: SupportedLang): HeroSectionData {
  return HERO_I18N[lang];
}
