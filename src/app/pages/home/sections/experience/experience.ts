import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Container, Heading, Section, Text } from '@ui';
import { EXPERIENCE_MILESTONES, EXPERIENCE_SECTION_DATA } from './experience.data';
import { ExperienceSectionData, TimelineMilestone } from './experience.model';

@Component({
  selector: 'app-experience',
  imports: [Section, Container, Heading, Text],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSection {
  readonly data: ExperienceSectionData = EXPERIENCE_SECTION_DATA;
  readonly milestones: readonly TimelineMilestone[] = EXPERIENCE_MILESTONES;
}
