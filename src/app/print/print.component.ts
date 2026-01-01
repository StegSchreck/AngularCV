import { Component, OnInit } from '@angular/core';

import { LocalizationService } from '../l10n/l10n.service';
import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';

@Component({
    selector: 'app-print',
    templateUrl: './print.component.html',
    styleUrls: ['./print.component.css'],
    standalone: false
})
export class PrintComponent implements OnInit {
  public l10n;
  public featureToggles;

  constructor(
    private localizationService: LocalizationService,
    private featureToggleService: FeatureToggleService,
  ) {
    this.localizationService.languageChanged.subscribe((data) => {
      this.l10n = data;
    });
  }

  ngOnInit() {
    this.l10n = this.localizationService.getDefault();
    this.featureToggles = this.featureToggleService.getFeatureToggles();
  }

  public print() {
    window.print();
  }
}
