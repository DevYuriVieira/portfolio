import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  readonly name = 'Yuri Vieira Teixeira';
  readonly positioning = 'Software Engineer | Formação em Engenharia de Produção';
  readonly stackInfo = 'Desenvolvido por Yuri Vieira Teixeira com Angular 22 • Three.js • TypeScript • SCSS';
  readonly engineeringPrinciples = 'Clean Architecture • Systems Thinking • Automação com n8n & IA';
  readonly currentYear = new Date().getFullYear();
}
