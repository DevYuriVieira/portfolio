import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelemetryService } from '@core';
import { AccessibilityWidget } from '@shared';
import { FooterComponent } from '../footer';
import { Header } from '../header';
import { CommandPalette } from '../components/command-palette/command-palette';
import { TelemetryModal } from '../components/telemetry-modal/telemetry-modal';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, FooterComponent, AccessibilityWidget, TelemetryModal, CommandPalette],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayout {
  readonly telemetry = inject(TelemetryService);
}

