import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSection } from './sections/hero';

@Component({
  selector: 'app-home',
  imports: [HeroSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
