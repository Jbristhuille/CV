/*****************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>             *
 * @CreatedDate           : 2025-07-03 21:28:39                              *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>             *
 * @LastEditDate          : 2025-07-07 13:02:17                              *
 ****************************************************************************/

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface IExperienceItem {
  title: string,
  company: string,
  startDate: string,
  endDate?: string,
  description: string
  context: string,
  dots: string[],
  stack: string[]
}

@Component({
  selector: 'section-experiences',
  imports: [TranslateModule, CommonModule],
  templateUrl: './experiences.section.html',
  styleUrl: './experiences.section.scss'
})
export class ExperiencesSection {
  public xp: IExperienceItem[] = [{
    title: "XP1TITLE",
    company: "Half Square",
    startDate: "XP1STARTDATE",
    description: "XP1DESCRIPTION",
    context: "XP1CONTEXT",
    dots: ["XP1DOT1", "XP1DOT2", "XP1DOT3", "XP1DOT4", "XP1DOT5"],
    stack: ["React", "Angular", "Node.js", "TypeScript", "NestJS", "Prisma", "Docker"]
  }, {
    title: "XP2TITLE",
    company: "GCE Electronics",
    startDate: "XP2STARTDATE",
    endDate: "XP2ENDDATE",
    description: "XP2DESCRIPTION",
    context: "XP2CONTEXT",
    dots: ["XP2DOT1", "XP2DOT2", "XP2DOT3", "XP2DOT4", "XP2DOT5", "XP2DOT6"],
    stack: ["Angular", "Node.js", "TypeScript", "NestJS", "MongoDB"]
  }]
}
