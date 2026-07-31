import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-scroll-indicator',
  imports: [],
  templateUrl: './scroll-indicator.html',
  styleUrl: './scroll-indicator.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollIndicator {}
