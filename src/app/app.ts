/*****************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>             *
 * @CreatedDate           : 2025-07-03 21:09:09                              *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>             *
 * @LastEditDate          : 2025-07-04 13:57:53                              *
 ****************************************************************************/

import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ExperiencesSection } from './sections/experiences/experiences.section';
import { ProfileSection } from './sections/profile/profile.section';
import { LanguagesSection } from './sections/languages/languages.section';
import { SkillsSection } from './sections/skills/skills.section';
import { EducationSection } from './sections/education/education.section';

@Component({
  selector: 'app-root',
  imports: [
    TranslateModule,
    ExperiencesSection,
    ProfileSection,
    LanguagesSection,
    SkillsSection,
    EducationSection
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
