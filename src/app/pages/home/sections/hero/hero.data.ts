import { SupportedLang } from '@core';
import { HeroSectionData } from './hero.model';

const HERO_I18N: Record<SupportedLang, HeroSectionData> = {
  'pt-BR': {
    eyebrow: 'Full-Stack Software Engineer | Java · .NET/C# · Python | React · Angular · TypeScript',
    name: 'Yuri Vieira Teixeira',
    description:
      'Engenheiro de Software Full-Stack especializado em Java (Spring Boot), .NET (C#), TypeScript (React / Angular) e Python (Django). Desenvolvo APIs RESTful robustas, mensageria resiliente, interfaces acessíveis e integrações com IA, com a visão sistêmica de quem vem da Engenharia de Produção.',
    projectsCtaText: 'Ver projetos',
    cvCtaText: 'Download CV (PT)',
    cvUrl: 'assets/cv-yuri-vieira-teixeira-pt.pdf',
  },
  en: {
    eyebrow: 'Full-Stack Software Engineer | Java · .NET/C# · Python | React · Angular · TypeScript',
    name: 'Yuri Vieira Teixeira',
    description:
      'Full-Stack Software Engineer specializing in Java (Spring Boot), .NET (C#), TypeScript (React / Angular), and Python (Django). I build robust RESTful APIs, resilient messaging systems, accessible interfaces, and AI integrations, backed by a Production Engineering mindset.',
    projectsCtaText: 'View projects',
    cvCtaText: 'Download CV (EN)',
    cvUrl: 'assets/cv-yuri-vieira-teixeira-en.pdf',
  },
  es: {
    eyebrow: 'Ingeniero de Software Full-Stack | Java · .NET/C# · Python | React · Angular · TypeScript',
    name: 'Yuri Vieira Teixeira',
    description:
      'Ingeniero de Software Full-Stack especializado en Java (Spring Boot), .NET (C#), TypeScript (React / Angular) y Python (Django). Desarrollo APIs RESTful robustas, mensajería resiliente, interfaces accesibles e integraciones con IA, con la visión sistémica de la Ingeniería de Producción.',
    projectsCtaText: 'Ver proyectos',
    cvCtaText: 'Download CV (EN)',
    cvUrl: 'assets/cv-yuri-vieira-teixeira-en.pdf',
  },
};

export const HERO_SECTION_DATA: HeroSectionData = HERO_I18N['pt-BR'];

export function getHeroData(lang: SupportedLang): HeroSectionData {
  return HERO_I18N[lang];
}
