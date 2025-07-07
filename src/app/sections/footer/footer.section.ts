/*****************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>             *
 * @CreatedDate           : 2025-07-05 13:57:14                              *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>             *
 * @LastEditDate          : 2025-07-07 15:17:21                              *
 ****************************************************************************/

import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { I18nService } from '../../services/i18n';
import { FormsModule } from '@angular/forms';
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';

@Component({
  selector: 'section-footer',
  imports: [
    TranslateModule,
    FormsModule,
    LanguageSelectorComponent
  ],
  templateUrl: './footer.section.html',
  styleUrl: './footer.section.scss'
})
export class FooterSection {
  public currentLang: string = "fr";

  constructor(private i18n: I18nService) {
  }

  onLanguageChange(lang: string) {
    this.i18n.setLanguage(lang);
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/Jean-Baptiste_Bristhuille_CV_Freelance.pdf';
    link.download = 'Jean-Baptiste_Bristhuille_CV_Freelance.pdf';
    link.target = '_blank';
    link.click();
  }
}
