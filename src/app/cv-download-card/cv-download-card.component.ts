import { Component, OnInit } from '@angular/core';

import { LocalizationService } from '../l10n/l10n.service';
import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';

@Component({
  selector: 'app-cv-download-card',
  templateUrl: './cv-download-card.component.html',
  styleUrls: ['./cv-download-card.component.css'],
})
export class CvDownloadCardComponent implements OnInit {
  public l10n;
  public featureToggles;

  constructor(
    private localizationService: LocalizationService,
    private featureToggleService: FeatureToggleService,
  ) {
    this.localizationService.languageChanged.subscribe((data) => { this.l10n = data; });
  }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  private getFeatureToggles(): void {
    this.featureToggles = this.featureToggleService.getFeatureToggles();
  }

  ngOnInit() {
    this.getLocalization();
    this.getFeatureToggles();
  }

}
