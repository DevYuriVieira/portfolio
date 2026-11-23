import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { I18nService, SupportedLang, TelemetryService } from '@core';
import { Container, Text } from '@ui';
import { AdrModal } from '../components/adr-modal/adr-modal';

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
  readonly adrBtnText: string;
  readonly adrBtnAria: string;
  readonly telemetryBtnText: string;
  readonly telemetryBtnAria: string;
  readonly telemetryBtnTitle: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Container, Text, AdrModal],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly i18n = inject(I18nService);
  readonly telemetry = inject(TelemetryService);

  readonly name = 'Yuri Vieira Teixeira';
  readonly currentYear = new Date().getFullYear();
  readonly isAdrModalOpen = signal<boolean>(false);

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
        'Source Code, Architecture & Tests on GitHub (opens in a new tab)',
      badgeTestsMetric: '160+ Automated Tests',
      badgeTestsLabel: 'Vitest Unit Suites & Playwright E2E',
      badgeA11yMetric: 'WCAG 2.1 AA / AAA',
      badgeA11yLabel: 'Accessibility Suite & Native VLibras',
      badgePwaMetric: 'PWA Offline Ready',
      badgePwaLabel: 'Smart Caching & Auto-Update',
      badgeSignalsMetric: 'Angular 22 Signals',
      badgeSignalsLabel: 'OnPush Change Detection & @defer',
      adrBtnText: 'Architecture Decisions (ADRs)',
      adrBtnAria: 'Architecture Decisions (ADRs) - Open modal',
      telemetryBtnText: 'Runtime Metrics',
      telemetryBtnAria: 'Open browser runtime metrics and Web Vitals inspector',
      telemetryBtnTitle: 'Inspect live browser Core Web Vitals and diagnostics',
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
        'Código-fonte, Arquitetura & Testes no GitHub (abre em nova aba)',
      badgeTestsMetric: '160+ Testes Automatizados',
      badgeTestsLabel: 'Suítes Vitest & E2E com Playwright',
      badgeA11yMetric: 'WCAG 2.1 AA / AAA',
      badgeA11yLabel: 'Suíte de Acessibilidade & VLibras Nativo',
      badgePwaMetric: 'PWA Offline Ready',
      badgePwaLabel: 'Cache Inteligente & Auto-Update',
      badgeSignalsMetric: 'Angular 22 Signals',
      badgeSignalsLabel: 'Detecção OnPush & @defer',
      adrBtnText: 'Decisões de Arquitetura (ADRs)',
      adrBtnAria: 'Decisões de Arquitetura (ADRs) - Abrir modal',
      telemetryBtnText: 'Métricas de Runtime',
      telemetryBtnAria: 'Abrir inspetor de métricas de runtime e Core Web Vitals',
      telemetryBtnTitle: 'Inspecionar Core Web Vitals e diagnósticos do navegador',
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
        'Código Fuente, Arquitectura & Pruebas en GitHub (abre en nueva pestaña)',
      badgeTestsMetric: '160+ Pruebas Automatizadas',
      badgeTestsLabel: 'Suites Vitest & E2E con Playwright',
      badgeA11yMetric: 'WCAG 2.1 AA / AAA',
      badgeA11yLabel: 'Suite de Accesibilidad & VLibras Nativo',
      badgePwaMetric: 'PWA Offline Ready',
      badgePwaLabel: 'Caché Inteligente & Auto-Update',
      badgeSignalsMetric: 'Angular 22 Signals',
      badgeSignalsLabel: 'Detección OnPush & @defer',
      adrBtnText: 'Decisiones de Arquitectura (ADRs)',
      adrBtnAria: 'Decisiones de Arquitectura (ADRs) - Abrir modal',
      telemetryBtnText: 'Métricas de Runtime',
      telemetryBtnAria: 'Abrir inspector de métricas de runtime y Core Web Vitals',
      telemetryBtnTitle: 'Inspeccionar Core Web Vitals y diagnósticos del navegador',
    },
  };

  readonly labels = computed<FooterLabels>(() =>
    this.labelsI18n[this.i18n.currentLang()] ?? this.labelsI18n['pt-BR']
  );

  openAdrModal(): void {
    this.isAdrModalOpen.set(true);
  }

  closeAdrModal(): void {
    this.isAdrModalOpen.set(false);
  }

  openTelemetryModal(tab: 'overview' | 'vitals' | 'events' | 'stream' = 'overview'): void {
    this.telemetry.openModal(tab);
  }
}
