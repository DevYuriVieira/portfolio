import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService, SupportedLang } from '@core';
import { Container, Text } from '@ui';

interface FooterLabels {
  readonly positioning: string;
  readonly stackInfo: string;
  readonly engineeringPrinciples: string;
  readonly copyright: string;
  readonly qualityEyebrow: string;
  readonly viewSourceText: string;
  readonly viewSourceAria: string;
  readonly badgeTestsMetric: string;
  readonly badgeTestsLabel: string;
  readonly badgeA11yMetric: string;
  readonly badgeA11yLabel: string;
  readonly badgePwaMetric: string;
  readonly badgePwaLabel: string;
  readonly badgeSignalsMetric: string;
  readonly badgeSignalsLabel: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Container, Text],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly i18n = inject(I18nService);

  readonly name = 'Yuri Vieira Teixeira';
  readonly currentYear = new Date().getFullYear();

  private readonly labelsI18n: Record<SupportedLang, FooterLabels> = {
    en: {
      positioning: 'Software Engineer • Building Modern & Scalable Web Systems',
      stackInfo:
        'Engineered by Yuri Vieira Teixeira • Angular 22 • Three.js WebGL • SCSS',
      engineeringPrinciples:
        'Clean Architecture • Systems Thinking • AI Workflows',
      copyright: `© ${this.currentYear} ${this.name}. All rights reserved.`,
      qualityEyebrow: 'ENGINEERING STANDARDS & QUALITY ASSURANCE',
      viewSourceText: 'Source Code, Architecture & Tests on GitHub',
      viewSourceAria:
        'View portfolio source code, architecture and tests on GitHub (opens in a new tab)',
      badgeTestsMetric: '80+ Vitest Tests',
      badgeTestsLabel: '100% Automated Pass Rate',
      badgeA11yMetric: 'WCAG 2.1 AAA',
      badgeA11yLabel: 'Accessibility & Native VLibras',
      badgePwaMetric: 'PWA Offline Ready',
      badgePwaLabel: 'Smart Caching & Auto-Update',
      badgeSignalsMetric: 'Angular 22 Signals',
      badgeSignalsLabel: 'Reactive Architecture & SSR',
    },
    'pt-BR': {
      positioning: 'Software Engineer • Sistemas Web Modernos & Código Limpo',
      stackInfo:
        'Desenvolvido por Yuri Vieira Teixeira • Angular 22 • Three.js WebGL • SCSS',
      engineeringPrinciples:
        'Arquitetura Limpa • Pensamento Sistêmico • Automação com IA',
      copyright: `© ${this.currentYear} ${this.name}. Todos os direitos reservados.`,
      qualityEyebrow: 'ESPECIFICAÇÕES & ENGENHARIA DE QUALIDADE',
      viewSourceText: 'Código-fonte, Arquitetura & Testes no GitHub',
      viewSourceAria:
        'Ver código-fonte, arquitetura e testes do portfólio no GitHub (abre em nova aba)',
      badgeTestsMetric: '80+ Testes Vitest',
      badgeTestsLabel: '100% de Aprovação Automatizada',
      badgeA11yMetric: 'WCAG 2.1 AAA',
      badgeA11yLabel: 'Acessibilidade & VLibras Nativo',
      badgePwaMetric: 'PWA Offline Ready',
      badgePwaLabel: 'Cache Inteligente & Auto-Update',
      badgeSignalsMetric: 'Angular 22 Signals',
      badgeSignalsLabel: 'Arquitetura Reativa & SSR',
    },
    es: {
      positioning: 'Software Engineer • Sistemas Web Modernos & Código Limpio',
      stackInfo:
        'Desarrollado por Yuri Vieira Teixeira • Angular 22 • Three.js WebGL • SCSS',
      engineeringPrinciples:
        'Arquitectura Limpia • Pensamiento Sistémico • Automatización con IA',
      copyright: `© ${this.currentYear} ${this.name}. Todos los derechos reservados.`,
      qualityEyebrow: 'ESTÁNDARES DE INGENIERÍA & CALIDAD',
      viewSourceText: 'Código Fuente, Arquitectura & Pruebas en GitHub',
      viewSourceAria:
        'Ver código fuente, arquitectura y pruebas del portafolio en GitHub (abre en nueva pestaña)',
      badgeTestsMetric: '80+ Pruebas Vitest',
      badgeTestsLabel: '100% Aprobación Automatizada',
      badgeA11yMetric: 'WCAG 2.1 AAA',
      badgeA11yLabel: 'Accesibilidad & VLibras Nativo',
      badgePwaMetric: 'PWA Offline Ready',
      badgePwaLabel: 'Caché Inteligente & Auto-Update',
      badgeSignalsMetric: 'Angular 22 Signals',
      badgeSignalsLabel: 'Arquitectura Reactiva & SSR',
    },
  };

  readonly labels = computed<FooterLabels>(() =>
    this.labelsI18n[this.i18n.currentLang()] ?? this.labelsI18n['pt-BR']
  );
}
