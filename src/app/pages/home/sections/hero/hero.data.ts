import { SupportedLang } from '@core';
import { HeroSectionData } from './hero.model';

const HERO_I18N: Record<SupportedLang, HeroSectionData> = {
  'pt-BR': {
    eyebrow: 'Full-Stack Software Engineer | Java/Spring Boot | React · Angular · TypeScript | Docente SENAI/FAETEC',
    name: 'Yuri Vieira Teixeira',
    description:
      'Engenheiro de Software Full-Stack especializado em Java (Spring Boot), TypeScript (React / Angular) e Python (Django). Desenvolve APIs RESTful robustas, interfaces acessíveis e integrações com IA, com a visão sistêmica de quem vem da Engenharia de Produção.',
    projectsCtaText: 'Ver projetos',
    cvCtaText: 'Download CV (PT)',
    cvUrl: 'assets/cv-yuri-vieira-teixeira-pt.pdf',
  },
  en: {
    eyebrow: 'Full-Stack Software Engineer | Java/Spring Boot | React · Angular · TypeScript | SENAI/FAETEC Instructor',
    name: 'Yuri Vieira Teixeira',
    description:
      'Full-Stack Software Engineer specializing in Java (Spring Boot), TypeScript (React / Angular), and Python (Django). Builds robust RESTful APIs, accessible interfaces, and AI integrations, backed by a Production Engineering mindset.',
    projectsCtaText: 'View projects',
    cvCtaText: 'Download CV (EN)',
    cvUrl: 'assets/cv-yuri-vieira-teixeira-en.pdf',
  },
  es: {
    eyebrow: 'Ingeniero de Software Full-Stack | Java/Spring Boot | React · Angular · TypeScript | Docente SENAI/FAETEC',
    name: 'Yuri Vieira Teixeira',
    description:
      'Ingeniero de Software Full-Stack especializado en Java (Spring Boot), TypeScript (React / Angular) y Python (Django). Desarrolla APIs RESTful robustas, interfaces accesibles e integraciones con IA, con la visión sistémica de la Ingeniería de Producción.',
    projectsCtaText: 'Ver proyectos',
    cvCtaText: 'Download CV (EN)',
    cvUrl: 'assets/cv-yuri-vieira-teixeira-en.pdf',
  },
};

export const HERO_SECTION_DATA: HeroSectionData = HERO_I18N['pt-BR'];

export function getHeroData(lang: SupportedLang): HeroSectionData {
  return HERO_I18N[lang];
}
