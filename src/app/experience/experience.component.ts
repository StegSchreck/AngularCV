import { Component, OnInit } from '@angular/core';

import { LocalizationService } from '../l10n/l10n.service';
import { CvItem } from '../cv-item/cv-item';
import { CvItemService } from '../cv-item/cv-item.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  public l10n;
  public experienceItems: CvItem[];

  constructor(
    private localizationService: LocalizationService,
    private cvItemService: CvItemService,
  ) {
    this.localizationService.languageChanged.subscribe((data) => {
      this.l10n = data;
      this.getItems();
    });
  }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  private getItems(): void {
    this.cvItemService
      .getCvItems()
      .then(items => this.experienceItems = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

}
