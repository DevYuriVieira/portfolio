import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingSize = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

@Component({
  selector: 'app-heading',
  imports: [],
  templateUrl: './heading.html',
  styleUrl: './heading.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Heading {
  @Input() level: HeadingLevel = 'h2';
  @Input() size?: HeadingSize;

  get headingClass(): string {
    return `heading heading--${this.size || this.level}`;
  }
}
