import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  @Input() variant: ButtonVariant = 'primary';
  @Input() type: ButtonType = 'button';
  @Input() disabled: boolean = false;
  @Input() ariaLabel?: string;
}
