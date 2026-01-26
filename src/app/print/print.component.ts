import { Component, OnInit, inject } from '@angular/core';
import { LocalizationService } from '../l10n/l10n.service';
import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { MaterialModule } from '../material/material.module';

@Component({
    selector: 'app-print',
    templateUrl: './print.component.html',
    styleUrls: ['./print.component.css'],
    standalone: true,
    imports: [MaterialModule]
})
export class PrintComponent implements OnInit {
  public l10n;
  public featureToggles;

  private localizationService = inject(LocalizationService);
  private featureToggleService = inject(FeatureToggleService);

  constructor() {
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
