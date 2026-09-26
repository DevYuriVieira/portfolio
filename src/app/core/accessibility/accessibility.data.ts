import { SupportedLang } from '../i18n/i18n.model';
import { A11ySectionConfig } from './accessibility.model';

export const A11Y_SECTIONS: readonly A11ySectionConfig[] = [
  {
    titleKey: 'inclusion',
    items: [
      {
        id: 'vlibrasActive',
        iconType: 'hands',
        labelKey: 'vlibras',
        badge: 'VLibras',
      },
    ],
  },
  {
    titleKey: 'typography',
    items: [
      {
        id: 'fontScale',
        iconType: 'font-size',
        labelKey: 'fontScale',
        isStep: true,
      },
      {
        id: 'dyslexicFont',
        iconType: 'font-style',
        labelKey: 'dyslexicFont',
      },
      {
        id: 'textSpacing',
        iconType: 'spacing',
        labelKey: 'textSpacing',
      },
    ],
  },
  {
    titleKey: 'visual',
    items: [
      {
        id: 'highContrast',
        iconType: 'contrast',
        labelKey: 'highContrast',
      },
      {
        id: 'monochrome',
        iconType: 'palette',
        labelKey: 'monochrome',
      },
      {
        id: 'highlightLinks',
        iconType: 'link',
        labelKey: 'highlightLinks',
      },
    ],
  },
  {
    titleKey: 'navigation',
    items: [
      {
        id: 'pauseAnimations',
        iconType: 'pause',
        labelKey: 'pauseAnimations',
      },
      {
        id: 'readingGuide',
        iconType: 'guide',
        labelKey: 'readingGuide',
      },
    ],
  },
];

export interface A11yI18nLabels {
  readonly title: string;
  readonly close: string;
  readonly reset: string;
  readonly active: string;
  readonly inactive: string;
  readonly triggerLabel: string;
  readonly assistiveFeatures: string;
  readonly librasListBadge: string;
  readonly sections: {
    readonly inclusion: string;
    readonly typography: string;
    readonly visual: string;
    readonly navigation: string;
  };
  readonly items: {
    readonly vlibras: string;
    readonly fontScale: string;
    readonly dyslexicFont: string;
    readonly textSpacing: string;
    readonly highContrast: string;
    readonly monochrome: string;
    readonly highlightLinks: string;
    readonly pauseAnimations: string;
    readonly readingGuide: string;
  };
}

export const A11Y_I18N: Record<SupportedLang, A11yI18nLabels> = {
  'pt-BR': {
    title: 'Acessibilidade',
    close: 'Fechar painel',
    reset: 'Restaurar Padrões',
    active: 'Ativo',
    inactive: 'Desativado',
    triggerLabel: 'Opções de Acessibilidade',
    assistiveFeatures: 'Recursos Assistivos',
    librasListBadge: 'Acessível em Libras',
    sections: {
      inclusion: 'Inclusão & Libras',
      typography: 'Controle de Fonte',
      visual: 'Contraste & Cores',
      navigation: 'Foco & Navegação',
    },
    items: {
      vlibras: 'Tradutor de Libras',
      fontScale: 'Tamanho da Fonte',
      dyslexicFont: 'Fonte Legível',
      textSpacing: 'Espaço entre Linhas',
      highContrast: 'Alto Contraste',
      monochrome: 'Monocromático',
      highlightLinks: 'Destacar Links',
      pauseAnimations: 'Pausar Animações',
      readingGuide: 'Guia de Leitura',
    },
  },
  en: {
    title: 'Accessibility',
    close: 'Close panel',
    reset: 'Reset Defaults',
    active: 'Active',
    inactive: 'Off',
    triggerLabel: 'Accessibility Options',
    assistiveFeatures: 'Assistive Features',
    librasListBadge: 'Sign Language (Libras)',
    sections: {
      inclusion: 'Inclusion & Sign Language',
      typography: 'Typography Controls',
      visual: 'Contrast & Colors',
      navigation: 'Focus & Navigation',
    },
    items: {
      vlibras: 'Libras Translator',
      fontScale: 'Font Size',
      dyslexicFont: 'Readable Font',
      textSpacing: 'Line Spacing',
      highContrast: 'High Contrast',
      monochrome: 'Monochrome',
      highlightLinks: 'Highlight Links',
      pauseAnimations: 'Pause Animations',
      readingGuide: 'Reading Guide',
    },
  },
  es: {
    title: 'Accesibilidad',
    close: 'Cerrar panel',
    reset: 'Restablecer Ajustes',
    active: 'Activo',
    inactive: 'Desactivado',
    triggerLabel: 'Opciones de Accesibilidad',
    assistiveFeatures: 'Recursos Asistivos',
    librasListBadge: 'Accesible en Libras',
    sections: {
      inclusion: 'Inclusión y Lengua de Señas',
      typography: 'Control de Fuente',
      visual: 'Contraste y Colores',
      navigation: 'Enfoque y Navegación',
    },
    items: {
      vlibras: 'Traductor de Libras',
      fontScale: 'Tamaño de Fuente',
      dyslexicFont: 'Fuente Legible',
      textSpacing: 'Espaciado de Texto',
      highContrast: 'Alto Contraste',
      monochrome: 'Monocromático',
      highlightLinks: 'Destacar Enlaces',
      pauseAnimations: 'Pausar Animaciones',
      readingGuide: 'Guía de Lectura',
    },
  },
};

