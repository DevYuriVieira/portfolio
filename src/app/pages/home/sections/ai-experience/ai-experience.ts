import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RevealDirective } from '@shared';
import { Container, Heading, Section, Text } from '@ui';
import { AI_MANIFESTO_DATA } from './ai-experience.data';
import { AiManifestoData, AiNodeDetail } from './ai-experience.model';
import { AiNodeModal } from './ai-node-modal';
import { NeuralCanvas } from './neural-canvas';

@Component({
  selector: 'app-ai-experience',
  standalone: true,
  imports: [Section, Container, Heading, Text, RevealDirective, NeuralCanvas, AiNodeModal],
  templateUrl: './ai-experience.html',
  styleUrl: './ai-experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiExperienceSection {
  readonly data: AiManifestoData = AI_MANIFESTO_DATA;
  readonly selectedNodeDetail = signal<AiNodeDetail | null>(null);

  onNodeSelect(nodeName: string): void {
    const detail = this.data.nodeDetails[nodeName];
    if (detail) {
      this.selectedNodeDetail.set(detail);
    }
  }

  closeModal(): void {
    this.selectedNodeDetail.set(null);
  }
}
