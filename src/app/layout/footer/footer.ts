import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '@core';
import { Container, Text } from '@ui';

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

  readonly labels = computed(() =>
    this.i18n.currentLang() === 'en'
      ? {
          positioning: 'Software Engineer | Production Engineering Background',
          stackInfo:
            'Built by Yuri Vieira Teixeira with Angular 22 • Three.js • TypeScript • SCSS • WebGL',
          engineeringPrinciples:
            'Clean Architecture • Systems Thinking',
          copyright: `© ${this.currentYear} ${this.name}. All rights reserved.`,
        }
      : {
          positioning: 'Software Engineer | Formação em Engenharia de Produção',
          stackInfo:
            'Desenvolvido por Yuri Vieira Teixeira com Angular 22 • Three.js • TypeScript • SCSS • WebGL',
          engineeringPrinciples:
            'Clean Architecture • Pensamento Sistêmico',
          copyright: `© ${this.currentYear} ${this.name}. Todos os direitos reservados.`,
        }
  );
}
