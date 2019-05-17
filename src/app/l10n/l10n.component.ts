import { Component, Input, OnInit } from '@angular/core';

import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { LocalizationService } from './l10n.service';

@Component({
  selector: 'app-l10n',
  templateUrl: './l10n.component.html',
  styleUrls: ['./l10n.component.css'],
})
export class LocalizationComponent implements OnInit {
  @Input() color = 'default';
  l10n_languages = [];
  featureToggles;

  constructor(
    private localizationService: LocalizationService,
    private featureToggleService: FeatureToggleService,
  ) { }

  getLocalization(): void {
    const all = this.localizationService.getAll();
    for (const language_id in all) {
      if (all.hasOwnProperty(language_id)) {
        this.l10n_languages.push({ 'id': language_id, 'name': all[language_id].language_name });
      }
    }
  }

  getFeatureToggles(): void {
    this.featureToggles = this.featureToggleService.getFeatureToggles();
  }

  ngOnInit() {
    this.getLocalization();
    this.getFeatureToggles();
  }

  changeLocalization(language: string) {
    let current_language = this.featureToggles.default_language;
    try {
      current_language = JSON.parse(localStorage.getItem('l10n')).language;
    } catch (err) { }
    localStorage.setItem('l10n', JSON.stringify({ language: language }));
    if (current_language !== language) {
      window.location.reload();
    }
  }
}
