import { SupportedLang } from '@core';
import { HeroSectionData } from './hero.model';

const HERO_I18N: Record<SupportedLang, HeroSectionData> = {
  'pt-BR': {
    eyebrow: 'Full-Stack Software Engineer | Java · .NET/C# | TypeScript · React · Angular',
    name: 'Yuri Vieira Teixeira',
    description:
      'Engenheiro de Software Full-Stack especializado em Java (Spring Boot), .NET (C#) e TypeScript (React / Angular / React Native). Desenvolvo APIs RESTful robustas, mensageria resiliente, interfaces acessíveis e integrações com IA, com a visão sistêmica de quem vem da Engenharia de Produção.',
    projectsCtaText: 'Ver projetos',
    cvButtonLabel: 'Baixar CV',
    cvCtaText: 'Baixar CV (PT)',
    cvUrl: 'assets/cv-yuri-vieira-teixeira-pt.pdf',
    cvSelectorAriaLabel: 'Selecionar versão do currículo',
    secondaryCtaType: 'whatsapp',
    secondaryCtaText: 'WhatsApp',
    secondaryCtaAriaLabel: 'Falar com Yuri Vieira no WhatsApp',
    secondaryCtaUrl:
      'https://wa.me/5522998962216?text=Ol%C3%A1%20Yuri%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.',
    whatsappCtaText: 'WhatsApp',
    whatsappAriaLabel: 'Falar com Yuri Vieira no WhatsApp',
    whatsappUrl:
      'https://wa.me/5522998962216?text=Ol%C3%A1%20Yuri%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.',
    cvOptions: [
      {
        id: 'fullstack',
        label: 'CV Full-Stack (PT)',
        shortLabel: 'Full-Stack',
        badge: 'Java · .NET · React · Angular',
        url: 'assets/cv-yuri-vieira-teixeira-pt.pdf',
        ctaText: 'Baixar CV Full-Stack (PT)',
      },
      {
        id: 'backend',
        label: 'CV Back-End (PT)',
        shortLabel: 'Back-End',
        badge: 'Java · Spring · .NET · SQL',
        url: 'assets/cv-yuri-vieira-teixeira-backend-pt.pdf',
        ctaText: 'Baixar CV Back-End (PT)',
      },
      {
        id: 'frontend',
        label: 'CV Front-End & Mobile (PT)',
        shortLabel: 'Front-End',
        badge: 'TS · React · Angular · Expo',
        url: 'assets/cv-yuri-vieira-teixeira-frontend-pt.pdf',
        ctaText: 'Baixar CV Front-End (PT)',
      },
    ],
    metricsAriaLabel: 'Principais indicadores de engenharia',
    metrics: [
      { value: '1.200+', label: 'Testes automatizados' },
      { value: '910h+', label: 'Residência técnica' },
      { value: '100/100', label: 'Lighthouse em produção' },
      { value: 'PT · EN · ES', label: 'Remoto BR · CA · EU · US' },
    ],
  },
  en: {
    eyebrow: 'Full-Stack Software Engineer | Java · .NET/C# | TypeScript · React · Angular',
    name: 'Yuri Vieira Teixeira',
    description:
      'Full-Stack Software Engineer specializing in Java (Spring Boot), .NET (C#), and TypeScript (React / Angular / React Native). I build robust RESTful APIs, resilient messaging systems, accessible interfaces, and AI integrations, backed by a Production Engineering mindset.',
    projectsCtaText: 'View projects',
    cvButtonLabel: 'Download CV',
    cvCtaText: 'Download CV (EN)',
    cvUrl: 'assets/cv-yuri-vieira-teixeira-en.pdf',
    cvSelectorAriaLabel: 'Select resume version',
    secondaryCtaType: 'linkedin',
    secondaryCtaText: 'LinkedIn',
    secondaryCtaAriaLabel: 'Connect with Yuri Vieira on LinkedIn',
    secondaryCtaUrl: 'https://linkedin.com/in/yuri-vieira-teixeira/',
    whatsappCtaText: 'WhatsApp',
    whatsappAriaLabel: 'Chat with Yuri Vieira on WhatsApp',
    whatsappUrl:
      'https://wa.me/5522998962216?text=Hi%20Yuri%21%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity.',
    cvOptions: [
      {
        id: 'fullstack',
        label: 'Full-Stack CV (EN)',
        shortLabel: 'Full-Stack',
        badge: 'Java · .NET · React · Angular',
        url: 'assets/cv-yuri-vieira-teixeira-en.pdf',
        ctaText: 'Download CV Full-Stack (EN)',
      },
      {
        id: 'backend',
        label: 'Back-End CV (EN)',
        shortLabel: 'Back-End',
        badge: 'Java · Spring · .NET · SQL',
        url: 'assets/cv-yuri-vieira-teixeira-backend-en.pdf',
        ctaText: 'Download CV Back-End (EN)',
      },
      {
        id: 'frontend',
        label: 'Front-End & Mobile CV (EN)',
        shortLabel: 'Front-End',
        badge: 'TS · React · Angular · Expo',
        url: 'assets/cv-yuri-vieira-teixeira-frontend-en.pdf',
        ctaText: 'Download CV Front-End (EN)',
      },
    ],
    metricsAriaLabel: 'Key engineering highlights',
    metrics: [
      { value: '1,200+', label: 'Automated tests' },
      { value: '910h+', label: 'Tech residency' },
      { value: '100/100', label: 'Production Lighthouse' },
      { value: 'EN · PT · ES', label: 'Remote CA · EU · US · BR' },
    ],
  },
  es: {
    eyebrow: 'Ingeniero de Software Full-Stack | Java · .NET/C# | TypeScript · React · Angular',
    name: 'Yuri Vieira Teixeira',
    description:
      'Ingeniero de Software Full-Stack especializado en Java (Spring Boot), .NET (C#) y TypeScript (React / Angular / React Native). Desarrollo APIs RESTful robustas, mensajería resiliente, interfaces accesibles e integraciones con IA, con la visión sistémica de la Ingeniería de Producción.',
    projectsCtaText: 'Ver proyectos',
    cvButtonLabel: 'Descargar CV',
    cvCtaText: 'Descargar CV (EN)',
    cvUrl: 'assets/cv-yuri-vieira-teixeira-en.pdf',
    cvSelectorAriaLabel: 'Seleccionar versión del currículum',
    secondaryCtaType: 'whatsapp',
    secondaryCtaText: 'WhatsApp',
    secondaryCtaAriaLabel: 'Hablar con Yuri Vieira por WhatsApp',
    secondaryCtaUrl:
      'https://wa.me/5522998962216?text=Hola%20Yuri%21%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad.',
    whatsappCtaText: 'WhatsApp',
    whatsappAriaLabel: 'Hablar con Yuri Vieira por WhatsApp',
    whatsappUrl:
      'https://wa.me/5522998962216?text=Hola%20Yuri%21%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad.',
    cvOptions: [
      {
        id: 'fullstack',
        label: 'CV Full-Stack (EN)',
        shortLabel: 'Full-Stack',
        badge: 'Java · .NET · React · Angular',
        url: 'assets/cv-yuri-vieira-teixeira-en.pdf',
        ctaText: 'Descargar CV Full-Stack (EN)',
      },
      {
        id: 'backend',
        label: 'CV Back-End (EN)',
        shortLabel: 'Back-End',
        badge: 'Java · Spring · .NET · SQL',
        url: 'assets/cv-yuri-vieira-teixeira-backend-en.pdf',
        ctaText: 'Descargar CV Back-End (EN)',
      },
      {
        id: 'frontend',
        label: 'CV Front-End & Mobile (EN)',
        shortLabel: 'Front-End',
        badge: 'TS · React · Angular · Expo',
        url: 'assets/cv-yuri-vieira-teixeira-frontend-en.pdf',
        ctaText: 'Descargar CV Front-End (EN)',
      },
    ],
    metricsAriaLabel: 'Principales indicadores de ingeniería',
    metrics: [
      { value: '1.200+', label: 'Pruebas automatizadas' },
      { value: '910h+', label: 'Residencia técnica' },
      { value: '100/100', label: 'Lighthouse en producción' },
      { value: 'ES · EN · PT', label: 'Remoto EU · CA · US · BR' },
    ],
  },
};

export const HERO_SECTION_DATA: HeroSectionData = HERO_I18N['pt-BR'];

export function getHeroData(lang: SupportedLang): HeroSectionData {
  return HERO_I18N[lang];
}
