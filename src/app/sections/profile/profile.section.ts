/*****************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>             *
 * @CreatedDate           : 2025-07-04 13:33:42                              *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>             *
 * @LastEditDate          : 2025-07-05 15:48:49                              *
 ****************************************************************************/

import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GithubIconComponent } from '../../components/github-icon/github-icon.component';
import { LinkedinIconComponent } from '../../components/linkedin-icon/linkedin-icon.component';

@Component({
  selector: 'section-profile',
  imports: [
    TranslateModule,
    GithubIconComponent,
    LinkedinIconComponent
  ],
  templateUrl: './profile.section.html',
  styleUrl: './profile.section.scss'
})
export class ProfileSection {

}
