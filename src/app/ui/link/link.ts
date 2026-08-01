import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link',
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './link.html',
  styleUrl: './link.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Link {
  @Input() href: string = '';
  @Input() external: boolean = false;
  @Input() ariaLabel?: string;

  get isMailto(): boolean {
    return !!this.href && this.href.toLowerCase().startsWith('mailto:');
  }
}
