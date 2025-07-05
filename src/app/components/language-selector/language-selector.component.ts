/*****************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>             *
 * @CreatedDate           : 2025-07-05 14:31:33                              *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>             *
 * @LastEditDate          : 2025-07-05 14:40:16                              *
 ****************************************************************************/

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClickOutsideDirective } from '../../directives/click-outside';

@Component({
  selector: 'component-language-selector',
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent {
  @Input() selected = 'fr';
  @Output() languageChanged = new EventEmitter<string>();

  showOptions = false;
  languages = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' }
  ];

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  selectLanguage(code: string) {
    this.selected = code;
    this.languageChanged.emit(code);
    this.showOptions = false;
  }

  get currentLabel(): string {
    return this.languages.find(lang => lang.code === this.selected)?.label || '';
  }
}
