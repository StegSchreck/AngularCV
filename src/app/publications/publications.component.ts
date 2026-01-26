import { Component, OnInit, inject } from '@angular/core';
import { CvItemService } from '../cv-item/cv-item.service';
import { LocalizationService } from '../l10n/l10n.service';
import { CvItem } from '../cv-item/cv-item';
import { MaterialModule } from '../material/material.module';
import { CvItemComponent } from '../cv-item/cv-item.component';

@Component({
    selector: 'app-publications',
    templateUrl: './publications.component.html',
    styleUrls: ['./publications.component.css'],
    standalone: true,
    imports: [MaterialModule, CvItemComponent]
})
export class PublicationsComponent implements OnInit {
  public l10n;
  public publicationItems: CvItem[];
  public talkItems: CvItem[];

  private cvItemService = inject(CvItemService);
  private localizationService = inject(LocalizationService);

  constructor() {
    this.localizationService.languageChanged.subscribe((data) => {
      this.l10n = data;
      this.getItems();
    });
  }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  private getItems(): void {
    this.cvItemService.getPublicationItems().then(items => this.publicationItems = items);
    this.cvItemService.getTalkItems().then(items => this.talkItems = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }
}
