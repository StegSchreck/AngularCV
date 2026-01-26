import { Component, OnInit, inject } from '@angular/core';

import { LocalizationService } from '../l10n/l10n.service';
import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { CvItemService } from '../cv-item/cv-item.service';
import { MaterialModule } from '../material/material.module';
import { AboutComponent } from '../about/about.component';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    standalone: true,
    imports: [MaterialModule, AboutComponent]
})
export class ContactComponent implements OnInit {
  public l10n;
  public featureToggles;
  public contactItems;

  private localizationService = inject(LocalizationService);
  private featureToggleService = inject(FeatureToggleService);
  private cvItemService = inject(CvItemService);

  constructor() {
    this.localizationService.languageChanged.subscribe((data) => {
      this.l10n = data;
      this.getItems();
    });
  }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  private getFeatureToggles(): void {
    this.featureToggles = this.featureToggleService.getFeatureToggles();
  }

  private getItems(): void {
    this.cvItemService
      .getContactItems()
      .then(items => this.contactItems = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getFeatureToggles();
    this.getItems();
  }

}
