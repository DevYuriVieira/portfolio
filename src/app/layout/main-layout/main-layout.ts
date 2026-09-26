import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessibilityWidget } from '@shared';
import { FooterComponent } from '../footer';
import { Header } from '../header';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, FooterComponent, AccessibilityWidget],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayout {}


