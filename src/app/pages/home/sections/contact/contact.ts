import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { I18nService } from '@core';
import { RevealDirective } from '@shared';
import { Button, Container, Heading, Link, Section, Text } from '@ui';
import { getContactData } from './contact.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Section, Container, Heading, Text, Button, Link, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  private readonly i18n = inject(I18nService);

  readonly data = computed(() => getContactData(this.i18n.currentLang()));
  readonly copied = signal<boolean>(false);

  get emailUrl(): string {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${this.data().info.email}`;
  }

  get mailtoUrl(): string {
    return `mailto:${this.data().info.email}`;
  }

  copyEmail(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.data().info.email).then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2500);
      });
    }
  }
}
