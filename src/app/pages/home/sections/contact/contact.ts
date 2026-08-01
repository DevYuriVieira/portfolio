import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Button, Container, Heading, Link, Section, Text } from '@ui';
import { CONTACT_SECTION_DATA } from './contact.data';
import { ContactSectionData } from './contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Section, Container, Heading, Text, Button, Link],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  readonly data: ContactSectionData = CONTACT_SECTION_DATA;
  readonly copied = signal<boolean>(false);

  copyEmail(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.data.info.email).then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2500);
      });
    }
  }
}
