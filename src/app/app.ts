import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PwaUpdateService } from '@core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Eagerly instantiate PWA automated update service
  private readonly pwaUpdateService = inject(PwaUpdateService);
}
