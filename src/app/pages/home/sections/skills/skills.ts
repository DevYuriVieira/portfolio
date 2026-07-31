import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Container, Heading, Section, Text } from '@ui';
import { SKILLS_CATEGORIES, SKILLS_SECTION_DATA } from './skills.data';
import { SkillCategory, SkillsSectionData } from './skills.model';

@Component({
  selector: 'app-skills',
  imports: [Section, Container, Heading, Text],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSection {
  readonly data: SkillsSectionData = SKILLS_SECTION_DATA;
  readonly categories: readonly SkillCategory[] = SKILLS_CATEGORIES;
}
