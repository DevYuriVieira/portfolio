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
      {
        id: 'screenReader',
        iconType: 'volume',
        labelKey: 'screenReader',
        badge: 'TTS',
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
      {
        id: 'lineHeight',
        iconType: 'line-height',
        labelKey: 'lineHeight',
      },
      {
        id: 'alignLeft',
        iconType: 'align-left',
        labelKey: 'alignLeft',
      },
      {
        id: 'bionicReading',
        iconType: 'bionic',
        labelKey: 'bionicReading',
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
        id: 'invertColors',
        iconType: 'invert',
        labelKey: 'invertColors',
      },
      {
        id: 'lowSaturation',
        iconType: 'sun',
        labelKey: 'lowSaturation',
      },
      {
        id: 'hideMedia',
        iconType: 'eye-off',
        labelKey: 'hideMedia',
      },
    ],
  },
  {
    titleKey: 'colorblind',
    items: [
      {
        id: 'protanopia',
        iconType: 'filter',
        labelKey: 'protanopia',
        badge: 'Red',
      },
      {
        id: 'deuteranopia',
        iconType: 'filter',
        labelKey: 'deuteranopia',
        badge: 'Green',
      },
      {
        id: 'tritanopia',
        iconType: 'filter',
        labelKey: 'tritanopia',
        badge: 'Blue',
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
      {
        id: 'largeCursor',
        iconType: 'cursor',
        labelKey: 'largeCursor',
      },
      {
        id: 'highlightLinks',
        iconType: 'link',
        labelKey: 'highlightLinks',
      },
      {
        id: 'highlightHeadings',
        iconType: 'heading',
        labelKey: 'highlightHeadings',
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
    readonly colorblind: string;
    readonly navigation: string;
  };
  readonly items: {
    readonly vlibras: string;
    readonly screenReader: string;
    readonly fontScale: string;
    readonly dyslexicFont: string;
    readonly textSpacing: string;
    readonly lineHeight: string;
    readonly alignLeft: string;
    readonly bionicReading: string;
    readonly highContrast: string;
    readonly monochrome: string;
    readonly invertColors: string;
    readonly lowSaturation: string;
    readonly hideMedia: string;
    readonly protanopia: string;
    readonly deuteranopia: string;
    readonly tritanopia: string;
    readonly pauseAnimations: string;
    readonly readingGuide: string;
    readonly largeCursor: string;
    readonly highlightLinks: string;
    readonly highlightHeadings: string;
  };
}

export const A11Y_I18N_LABELS: Record<SupportedLang, A11yI18nLabels> = {
  'pt-BR': {
    title: 'Recursos de Acessibilidade',
    close: 'Fechar painel de acessibilidade',
    reset: 'Restaurar Padrões',
    active: 'Ativo',
    inactive: 'Inativo',
    triggerLabel: 'Abrir ferramentas de acessibilidade',
    assistiveFeatures: 'Ferramentas Assistivas',
    librasListBadge: 'VLibras',
    sections: {
      inclusion: 'Inclusão & Fala',
      typography: 'Tipografia & Leitura',
      visual: 'Contraste & Cores',
      colorblind: 'Filtros de Daltonismo',
      navigation: 'Navegação & Foco',
    },
    items: {
      vlibras: 'Tradutor de Libras',
      screenReader: 'Leitura em Voz Alta (TTS)',
      fontScale: 'Tamanho do Texto',
      dyslexicFont: 'Fonte para Dislexia',
      textSpacing: 'Espaçamento de Texto',
      lineHeight: 'Espaçamento de Linhas',
      alignLeft: 'Alinhar à Esquerda',
      bionicReading: 'Leitura Biônica',
      highContrast: 'Alto Contraste AAA',
      monochrome: 'Modo Monocromático',
      invertColors: 'Inversão de Cores',
      lowSaturation: 'Baixa Saturação',
      hideMedia: 'Ocultar Imagens & Mídia',
      protanopia: 'Protanopia (Vermelho)',
      deuteranopia: 'Deuteranopia (Verde)',
      tritanopia: 'Tritanopia (Azul)',
      pauseAnimations: 'Pausar Animações',
      readingGuide: 'Régua de Leitura',
      largeCursor: 'Cursor Ampliado',
      highlightLinks: 'Destacar Links',
      highlightHeadings: 'Destacar Títulos',
    },
  },
  en: {
    title: 'Accessibility Options',
    close: 'Close accessibility panel',
    reset: 'Reset Defaults',
    active: 'Active',
    inactive: 'Inactive',
    triggerLabel: 'Open accessibility tools',
    assistiveFeatures: 'Assistive Features',
    librasListBadge: 'VLibras',
    sections: {
      inclusion: 'Inclusion & Speech',
      typography: 'Typography & Reading',
      visual: 'Contrast & Colors',
      colorblind: 'Color Blindness Filters',
      navigation: 'Navigation & Focus',
    },
    items: {
      vlibras: 'Libras Translator',
      screenReader: 'Text-to-Speech (TTS)',
      fontScale: 'Text Size',
      dyslexicFont: 'Dyslexia Friendly Font',
      textSpacing: 'Text Spacing',
      lineHeight: 'Line Height Spacing',
      alignLeft: 'Align Text Left',
      bionicReading: 'Bionic Reading',
      highContrast: 'High Contrast AAA',
      monochrome: 'Monochrome Mode',
      invertColors: 'Invert Colors',
      lowSaturation: 'Low Saturation',
      hideMedia: 'Hide Images & Media',
      protanopia: 'Protanopia (Red)',
      deuteranopia: 'Deuteranopia (Green)',
      tritanopia: 'Tritanopia (Blue)',
      pauseAnimations: 'Pause Animations',
      readingGuide: 'Reading Guide',
      largeCursor: 'Large Cursor',
      highlightLinks: 'Highlight Links',
      highlightHeadings: 'Highlight Headings',
    },
  },
  es: {
    title: 'Opciones de Accesibilidad',
    close: 'Cerrar panel de accesibilidad',
    reset: 'Restablecer Ajustes',
    active: 'Activo',
    inactive: 'Inactivo',
    triggerLabel: 'Abrir herramientas de accesibilidad',
    assistiveFeatures: 'Herramientas Asistivas',
    librasListBadge: 'VLibras',
    sections: {
      inclusion: 'Inclusión y Voz',
      typography: 'Tipografía y Lectura',
      visual: 'Contraste y Colores',
      colorblind: 'Filtros para Daltonismo',
      navigation: 'Navegación y Enfoque',
    },
    items: {
      vlibras: 'Traductor de Libras',
      screenReader: 'Lectura en Voz Alta (TTS)',
      fontScale: 'Tamaño del Texto',
      dyslexicFont: 'Fuente para Dislexia',
      textSpacing: 'Espaciado de Texto',
      lineHeight: 'Espaciado de Líneas',
      alignLeft: 'Alinear a la Izquierda',
      bionicReading: 'Lectura Biónica',
      highContrast: 'Alto Contraste AAA',
      monochrome: 'Modo Monocromático',
      invertColors: 'Invertir Colores',
      lowSaturation: 'Baja Saturación',
      hideMedia: 'Ocultar Imágenes y Medios',
      protanopia: 'Protanopia (Rojo)',
      deuteranopia: 'Deuteranopia (Verde)',
      tritanopia: 'Tritanopia (Azul)',
      pauseAnimations: 'Pausar Animaciones',
      readingGuide: 'Guía de Lectura',
      largeCursor: 'Cursor Ampliado',
      highlightLinks: 'Destacar Enlaces',
      highlightHeadings: 'Destacar Encabezados',
    },
  },
};
