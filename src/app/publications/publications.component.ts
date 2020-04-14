import { Component, OnInit } from '@angular/core';

import { LocalizationService } from '../l10n/l10n.service';
import { CvItem } from '../cv-item/cv-item';
import { CvItemService } from '../cv-item/cv-item.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
})
export class PublicationsComponent implements OnInit {
  public l10n;
  public publicationItems: CvItem[];
  public talkItems: CvItem[];

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
      .getPublicationItems()
      .then(items => this.publicationItems = items);
    this.cvItemService
      .getTalkItems()
      .then(items => this.talkItems = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

}
