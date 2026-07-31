import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type TextVariant = 'body' | 'caption' | 'code' | 'lead';
export type TextElement = 'p' | 'span' | 'div' | 'code';

@Component({
  selector: 'app-text',
  imports: [],
  templateUrl: './text.html',
  styleUrl: './text.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Text {
  @Input() variant: TextVariant = 'body';
  @Input() element: TextElement = 'p';

  get textClass(): string {
    return `text text--${this.variant}`;
  }
}
