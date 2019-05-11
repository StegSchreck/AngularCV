import { Component, OnInit } from '@angular/core';

import { LocalizationService } from '../l10n/l10n.service';
import { CvItem } from '../cv-item/cv-item';
import { CvItemService } from '../cv-item/cv-item.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  l10n;
  experienceItems: CvItem[];

  constructor(
    private localizationService: LocalizationService,
    private cvItemService: CvItemService
  ) { }

  getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  getItems(): void {
    this.cvItemService
      .getCvItems()
      .then(items => this.experienceItems = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

}
