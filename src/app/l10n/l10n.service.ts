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

  get(locale: string) {
    if (L10N.hasOwnProperty(locale)) {
      return L10N[locale]; // TODO merge with EN as default values
    }
    return this.getDefault();
  }

  getDefault() {
    return L10N[this.featureToggles.default_language];
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
