/*****************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>             *
 * @CreatedDate           : 2025-07-07 13:18:40                              *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>             *
 * @LastEditDate          : 2025-07-07 13:31:37                              *
 ****************************************************************************/

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'section-hobbies',
  imports: [TranslateModule, CommonModule],
  templateUrl: './hobbies.section.html',
  styleUrl: './hobbies.section.scss'
})
export class HobbiesSection {
  public hobbies: {icon: string, text: string}[] = [{
    icon: "/imgs/build.svg",
    text: "HOBBIES1"
  },{
    icon: "/imgs/headphones.svg",
    text: "HOBBIES2"
  },{
    icon: "/imgs/book.svg",
    text: "HOBBIES3"
  },{
    icon: "/imgs/tools_power_drill.svg",
    text: "HOBBIES4"
  }]
}
