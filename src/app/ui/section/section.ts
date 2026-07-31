import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type SectionSpacing = 'sm' | 'md' | 'lg' | 'none';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.html',
  styleUrl: './section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section {
  @Input() spacing: SectionSpacing = 'md';
  @Input() ariaLabel?: string;
}
