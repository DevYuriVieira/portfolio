import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Container, Heading, Link, Section, Text } from '@ui';
import { Project, PROJECTS_DATA } from './project.model';

@Component({
  selector: 'app-projects',
  imports: [Section, Container, Heading, Text, Link],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  readonly projects: readonly Project[] = PROJECTS_DATA;
}
