import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '@core';
import { Container, Heading, Section, Text } from '@ui';
import { getSkillsData } from './skills.data';

@Component({
  selector: 'app-skills',
  imports: [Section, Container, Heading, Text],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSection {
  private readonly i18n = inject(I18nService);

  readonly i18nData = computed(() => getSkillsData(this.i18n.currentLang()));
  readonly data = computed(() => this.i18nData().sectionData);
  readonly categories = computed(() => this.i18nData().categories);
}
