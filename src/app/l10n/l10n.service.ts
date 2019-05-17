import { Injectable } from '@angular/core';

import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { L10N } from './l10n.data';

@Injectable()
export class LocalizationService {
  featureToggles;

  constructor(
    private featureToggleService: FeatureToggleService,
  ) {
    this.getFeatureToggles();
  }

  getFeatureToggles(): void {
    this.featureToggles = this.featureToggleService.getFeatureToggles();
  }

  getAll() {
    return L10N;
  }

  get(locale: string) {
    if (L10N.hasOwnProperty(locale)) {
      return L10N[locale]; // TODO merge with EN as default values
    }
    return this.getDefault();
  }

  getDefault() {
    let language = this.featureToggles.default_language;
    try {
      language = JSON.parse(localStorage.getItem('l10n')).language;
    } catch (err) { }
    return L10N[language];
  }
}
