import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelemetryService } from '@core';
import { AccessibilityWidget } from '@shared';
import { FooterComponent } from '../footer';
import { Header } from '../header';
import { TelemetryModal } from '../components/telemetry-modal/telemetry-modal';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, FooterComponent, AccessibilityWidget, TelemetryModal],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayout {
  readonly telemetry = inject(TelemetryService);
}

