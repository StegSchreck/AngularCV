import { Injectable, EventEmitter, Output, inject } from '@angular/core';

import { L10N as DATA } from './l10n.data';
import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';

@Injectable()
export class LocalizationService {
  @Output() languageChanged: EventEmitter<any> = new EventEmitter();
  public featureToggles;

  private featureToggleService = inject(FeatureToggleService);

  constructor() {
    this.getFeatureToggles();
  }

  private getFeatureToggles(): void {
    this.featureToggles = this.featureToggleService.getFeatureToggles();
  }

  public getDefault() {
    let language = this.featureToggles.default_language;
    try {
      const stored_language = JSON.parse(localStorage.getItem('l10n')).language;
      if (DATA.hasOwnProperty(stored_language)) {
        language = stored_language;
      }
    } catch (err) { }
    return DATA[language];
  }

  public change(language: string) {
    if (DATA.hasOwnProperty(language)) {
      localStorage.setItem('l10n', JSON.stringify({ language: language }));
      this.languageChanged.emit(DATA[language]);
    }
  }
}
