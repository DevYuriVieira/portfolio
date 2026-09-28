import { SupportedLang } from '@core';
import { HeroSectionData } from './hero.model';

const HERO_I18N: Record<SupportedLang, HeroSectionData> = {
  'pt-BR': {
    eyebrow: 'Full-Stack Software Engineer · Java & React · Docente SENAI/FAETEC',
    name: 'Yuri Vieira Teixeira',
    description:
      'Engenheiro de Software Full-Stack com foco em Java Spring Boot e atuação como Instrutor no SENAI/FAETEC. Projeta APIs REST resilientes, integra pipelines de dados e constrói interfaces acessíveis — com a visão sistêmica de quem vem da Engenharia de Produção.',
    projectsCtaText: 'Ver projetos',
    cvCtaText: 'Download CV (PT)',
    cvUrl: 'assets/cv-yuri-vieira-teixeira-pt.pdf',
  },
  en: {
    eyebrow: 'Full-Stack Software Engineer · Java & React · SENAI/FAETEC Instructor',
    name: 'Yuri Vieira Teixeira',
    description:
      'Full-Stack Software Engineer specializing in Java Spring Boot, currently serving as a Back-End Instructor at SENAI/FAETEC. Designs resilient REST APIs, integrates data pipelines, and delivers accessible interfaces — backed by a Production Engineering mindset.',
    projectsCtaText: 'View projects',
    cvCtaText: 'Download CV (EN)',
    cvUrl: 'assets/cv-yuri-vieira-teixeira-en.pdf',
  },
  es: {
    eyebrow: 'Ingeniero de Software Full-Stack · Java & React · Docente SENAI/FAETEC',
    name: 'Yuri Vieira Teixeira',
    description:
      'Ingeniero de Software Full-Stack especializado en Java Spring Boot, actualmente Instructor de Programación Back-End en SENAI/FAETEC. Diseña APIs REST resilientes, integra pipelines de datos y construye interfaces accesibles — con la visión sistémica de la Ingeniería de Producción.',
    projectsCtaText: 'Ver proyectos',
    cvCtaText: 'Download CV (EN)',
    cvUrl: 'assets/cv-yuri-vieira-teixeira-en.pdf',
  },
};

export const HERO_SECTION_DATA: HeroSectionData = HERO_I18N['pt-BR'];

export function getHeroData(lang: SupportedLang): HeroSectionData {
  return HERO_I18N[lang];
}
