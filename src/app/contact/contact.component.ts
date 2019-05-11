import { Component, OnInit } from '@angular/core';

import { LocalizationService } from '../l10n/l10n.service';
import { CvItemService } from '../cv-item/cv-item.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  l10n;
  contactItems;
  title = 'Contact Informations';

  constructor(
    private localizationService: LocalizationService,
    private cvItemService: CvItemService
  ) { }

  getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  getItems(): void {
    this.cvItemService
      .getContactItems()
      .then(items => this.contactItems = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

}
