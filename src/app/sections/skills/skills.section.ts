/*****************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>             *
 * @CreatedDate           : 2025-07-04 13:49:25                              *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>             *
 * @LastEditDate          : 2025-07-04 13:55:47                              *
 ****************************************************************************/

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface ISkills {
  title: string,
  skills: string[]
}

@Component({
  selector: 'section-skills',
  imports: [TranslateModule, CommonModule],
  templateUrl: './skills.section.html',
  styleUrl: './skills.section.scss'
})
export class SkillsSection {
  public skills: ISkills[] = [{
    title: "Frontend",
    skills: ["Angular", "React", "HTML5", "CSS3", "Sass", "Bootstrap", "Tailwind CSS"]
  }, {
    title: "Backend",
    skills: ["Node.js", "Express", "NestJS", "Spring Boot", "NextJS"]
  }, {
    title: "Languages",
    skills: ["Typescript", "JavaScript", "Python", "Java", "Rust"]
  }, {
    title: "DevOps",
    skills: ["Docker", "Git", "CI/CD", "VPS"]
  }, {
    title: "Databases",
    skills: ["SQLite", "MySQL", "MongoDB", "Prisma"]
  }, {
    title: "Tools",
    skills: ["GitHub", "GitLab", "Jira", "Trello", "Linear"]
  }]
}
