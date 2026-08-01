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
  readonly positioning = 'Software Engineer | Full-Stack Development & Systems Thinking';
  readonly stackInfo = 'Desenvolvido com Angular • TypeScript • SCSS';
  readonly currentYear = new Date().getFullYear();
}

