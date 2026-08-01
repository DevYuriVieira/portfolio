import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Button, Container, Heading, Link, Section, Text } from '@ui';
import { PROJECTS_DATA } from './projects.data';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  imports: [Section, Container, Heading, Text, Link, Button],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  readonly projects: readonly Project[] = PROJECTS_DATA;
  readonly showAll = signal<boolean>(false);

  readonly displayedProjects = computed(() =>
    this.showAll() ? this.projects : this.projects.filter((p) => p.featured)
  );

  toggleShowAll(): void {
    this.showAll.update((val) => !val);
  }
}

