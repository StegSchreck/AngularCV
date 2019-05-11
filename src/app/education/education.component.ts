import { Component, OnInit } from '@angular/core';

import { LocalizationService } from '../l10n/l10n.service';
import { CvItem } from '../cv-item/cv-item';
import { CvItemService } from '../cv-item/cv-item.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  l10n;
  educationItems: CvItem[];
  certificationItems: CvItem[];
  languageItems;
  title = 'Education and Certificates';

  constructor(
    private localizationService: LocalizationService,
    private cvItemService: CvItemService
  ) { }

  getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  getItems(): void {
    this.cvItemService
      .getEducationItems()
      .then(items => this.educationItems = items);
    this.cvItemService
      .getCertificationItems()
      .then(items => this.certificationItems = items);
    this.cvItemService
      .getLanguageItems()
      .then(items => this.languageItems = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

}
