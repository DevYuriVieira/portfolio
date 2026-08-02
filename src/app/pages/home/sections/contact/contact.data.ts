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
  };
}

const CONTACT_I18N: Record<SupportedLang, ContactI18n> = {
  'pt-BR': {
    eyebrow: '06 // GET IN TOUCH',
    title: 'Vamos construir algo extraordinário juntos.',
    subtitle:
      'Estou disponível para novas oportunidades profissionais, projetos desafiadores e conexões na área de engenharia de software.',
    info: {
      email: 'yurivieirateixeira98@gmail.com',
      location: 'Nova Friburgo, RJ — Brasil',
      availability:
        'Disponível para oportunidades remotas, híbridas ou presenciais com possibilidade de mudança.',
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
    },
  },
  en: {
    eyebrow: '06 // GET IN TOUCH',
    title: "Let's build something extraordinary together.",
    subtitle:
      'I am available for new professional opportunities, challenging projects, and connections in the software engineering field.',
    info: {
      email: 'yurivieirateixeira98@gmail.com',
      location: 'Nova Friburgo, RJ — Brazil',
      availability:
        'Available for remote, hybrid, or on-site opportunities with willingness to relocate.',
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
    },
  },
};

// Backward-compatible export
export const CONTACT_SECTION_DATA: ContactSectionData = CONTACT_I18N['pt-BR'];

export function getContactData(lang: SupportedLang): ContactI18n {
  return CONTACT_I18N[lang];
}
