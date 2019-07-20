import { Component, OnInit } from '@angular/core';

import { LocalizationService } from '../l10n/l10n.service';
import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { CvItemService } from '../cv-item/cv-item.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  l10n;
  featureToggles;
  contactItems;
  title = 'Contact Informations';

  constructor(
    private localizationService: LocalizationService,
    private featureToggleService: FeatureToggleService,
    private cvItemService: CvItemService,
  ) { }

  getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  getFeatureToggles(): void {
    this.featureToggles = this.featureToggleService.getFeatureToggles();
  }

  getItems(): void {
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
