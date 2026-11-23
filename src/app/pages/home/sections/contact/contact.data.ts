import { SupportedLang } from '@core';
import { ContactSectionData } from './contact.model';

interface ContactI18n extends ContactSectionData {
  labels: {
    emailLabel: string;
    locationLabel: string;
    availabilityLabel: string;
    socialLabel: string;
    sendEmail: string;
    copyEmail: string;
    copied: string;
    whatsappCta: string;
    whatsappAria: string;
    whatsappHighlightLabel: string;
    whatsappHighlightText: string;
  };
}

const CONTACT_I18N: Record<SupportedLang, ContactI18n> = {
  'pt-BR': {
    eyebrow: '06 // CONTATO',
    title: 'Aberto a oportunidades remotas em Engenharia de Software.',
    subtitle:
      'Disponível para posições Full-Stack ou Back-End (Java / .NET / TypeScript) remotas no Brasil e no exterior, além de projetos sob demanda.',
    info: {
      email: 'yurivieirateixeira98@gmail.com',
      whatsappUrl:
        'https://wa.me/5522998962216?text=Ol%C3%A1%20Yuri%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.',
      location: 'Nova Friburgo, RJ, Brasil',
      availability:
        'Disponível para oportunidades remotas ou híbridas (aberto a relocação para presencial).',
      linkedinUrl: 'https://linkedin.com/in/yuri-vieira-teixeira/',
      githubUrl: 'https://github.com/DevYuriVieira',
    },
    labels: {
      emailLabel: '01 // E-MAIL DE CONTATO DIRETO',
      locationLabel: '02 // LOCALIZAÇÃO',
      availabilityLabel: '03 // DISPONIBILIDADE PROFISSIONAL',
      socialLabel: '04 // REDES & LINKS',
      sendEmail: 'Enviar E-mail ↗',
      copyEmail: 'Copiar E-mail',
      copied: '✓ Copiado!',
      whatsappCta: 'Chamar no WhatsApp ↗',
      whatsappAria: 'Falar diretamente com Yuri Vieira pelo WhatsApp',
      whatsappHighlightLabel: 'CANAL PREFERENCIAL • TEMPO REAL',
      whatsappHighlightText:
        'Canal direto para conversas rápidas sobre oportunidades, propostas de trabalho ou novos projetos.',
    },
  },
  en: {
    eyebrow: '06 // GET IN TOUCH',
    title: 'Open to remote Software Engineering roles.',
    subtitle:
      'Available for remote Full-Stack and Back-End (Java / .NET / TypeScript) roles across Canada, Europe, the USA, and Brazil via B2B/Contractor or full-time contracts.',
    info: {
      email: 'yurivieirateixeira98@gmail.com',
      whatsappUrl:
        'https://wa.me/5522998962216?text=Hi%20Yuri%21%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity.',
      location: 'Nova Friburgo, RJ, Brazil',
      availability:
        'Available for remote or hybrid opportunities (open to on-site relocation).',
      linkedinUrl: 'https://linkedin.com/in/yuri-vieira-teixeira/',
      githubUrl: 'https://github.com/DevYuriVieira',
    },
    labels: {
      emailLabel: '01 // DIRECT CONTACT EMAIL',
      locationLabel: '02 // LOCATION',
      availabilityLabel: '03 // PROFESSIONAL AVAILABILITY',
      socialLabel: '04 // SOCIAL & LINKS',
      sendEmail: 'Send Email ↗',
      copyEmail: 'Copy Email',
      copied: '✓ Copied!',
      whatsappCta: 'Chat on WhatsApp ↗',
      whatsappAria: 'Chat directly with Yuri Vieira on WhatsApp',
      whatsappHighlightLabel: 'FAST-TRACK CHANNEL • REAL-TIME',
      whatsappHighlightText:
        'Direct channel for quick conversations regarding job opportunities, proposals, or new projects.',
    },
  },
  es: {
    eyebrow: '06 // CONTACTO',
    title: 'Disponible para roles remotos de Ingeniería de Software.',
    subtitle:
      'Abierto a oportunidades Full-Stack o Back-End (Java / .NET / TypeScript) remotas para Europa, Canadá, EE.UU. y Latinoamérica, además de proyectos a medida.',
    info: {
      email: 'yurivieirateixeira98@gmail.com',
      whatsappUrl:
        'https://wa.me/5522998962216?text=Hola%20Yuri%21%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad.',
      location: 'Nova Friburgo, RJ, Brasil',
      availability:
        'Disponible para oportunidades remotas o híbridas (abierto a reubicación presencial).',
      linkedinUrl: 'https://linkedin.com/in/yuri-vieira-teixeira/',
      githubUrl: 'https://github.com/DevYuriVieira',
    },
    labels: {
      emailLabel: '01 // CORREO DE CONTACTO DIRECTO',
      locationLabel: '02 // UBICACIÓN',
      availabilityLabel: '03 // DISPONIBILIDAD PROFESIONAL',
      socialLabel: '04 // REDES & ENLACES',
      sendEmail: 'Enviar Correo ↗',
      copyEmail: 'Copiar Correo',
      copied: '✓ ¡Copiado!',
      whatsappCta: 'Hablar por WhatsApp ↗',
      whatsappAria: 'Hablar directamente con Yuri Vieira por WhatsApp',
      whatsappHighlightLabel: 'CANAL PREFERENCIAL • TIEMPO REAL',
      whatsappHighlightText:
        'Canal directo para conversaciones rápidas sobre oportunidades laborales, propuestas o nuevos proyectos.',
    },
  },
};

export const CONTACT_SECTION_DATA: ContactSectionData = CONTACT_I18N['pt-BR'];

export function getContactData(lang: SupportedLang): ContactI18n {
  return CONTACT_I18N[lang];
}
