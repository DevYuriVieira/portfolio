import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Button, Heading, Text } from '@ui';
import { AiNodeDetail } from './ai-experience.model';

@Component({
  selector: 'app-ai-node-modal',
  standalone: true,
  imports: [Heading, Text, Button],
  templateUrl: './ai-node-modal.html',
  styleUrl: './ai-node-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiNodeModal {
  @Input({ required: true }) nodeDetail!: AiNodeDetail;
  @Output() close = new EventEmitter<void>();

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.closeModal();
  }

  closeModal(): void {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('node-modal-backdrop')) {
      this.closeModal();
    }
  }
}
