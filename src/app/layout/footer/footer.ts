import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService, SupportedLang } from '@core';
import { Container, Text } from '@ui';

interface FooterLabels {
  readonly positioning: string;
  readonly stackInfo: string;
  readonly engineeringPrinciples: string;
  readonly copyright: string;
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
    },
    'pt-BR': {
      positioning: 'Software Engineer • Sistemas Web Modernos & Código Limpo',
      stackInfo:
        'Desenvolvido por Yuri Vieira Teixeira • Angular 22 • Three.js WebGL • SCSS',
      engineeringPrinciples:
        'Arquitetura Limpa • Pensamento Sistêmico • Automação com IA',
      copyright: `© ${this.currentYear} ${this.name}. Todos os direitos reservados.`,
    },
    es: {
      positioning: 'Software Engineer • Sistemas Web Modernos & Código Limpio',
      stackInfo:
        'Desarrollado por Yuri Vieira Teixeira • Angular 22 • Three.js WebGL • SCSS',
      engineeringPrinciples:
        'Arquitectura Limpia • Pensamiento Sistémico • Automatización con IA',
      copyright: `© ${this.currentYear} ${this.name}. Todos los derechos reservados.`,
    },
  };

  readonly labels = computed<FooterLabels>(() =>
    this.labelsI18n[this.i18n.currentLang()] ?? this.labelsI18n['pt-BR']
  );
}
