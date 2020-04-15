import { Injectable } from '@angular/core';

import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { L10N } from './l10n.data';
import { Subject } from 'rxjs';

@Injectable()
export class LocalizationService {
  private featureToggles;
  languageChanged = new Subject();

  constructor(
    private featureToggleService: FeatureToggleService,
  ) {
    this.getFeatureToggles();
  }

  protected getFeatureToggles(): void {
    this.featureToggles = this.featureToggleService.getFeatureToggles();
  }

  public changeLanguage(language): void {
    this.languageChanged.next(L10N[language]);
  }

  public getAll() {
    return L10N;
  }

  public get(language: string) {
    if (L10N.hasOwnProperty(language)) {
      return L10N[language]; // TODO merge with EN as default values
    }
    return this.getDefault();
  }

  public getDefault() {
    let language = this.featureToggles.default_language;
    try {
      language = JSON.parse(localStorage.getItem('l10n')).language;
    } catch (err) { }
    return L10N[language];
  }

}
