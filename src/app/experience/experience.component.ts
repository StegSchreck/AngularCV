import { Component, OnInit, inject } from '@angular/core';
import { CvItemService } from '../cv-item/cv-item.service';
import { LocalizationService } from '../l10n/l10n.service';
import { CvItem } from '../cv-item/cv-item';
import { MaterialModule } from '../material/material.module';
import { CvItemComponent } from '../cv-item/cv-item.component';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css'],
    standalone: true,
    imports: [MaterialModule, CvItemComponent]
})
export class ExperienceComponent implements OnInit {
  public l10n;
  public experienceItems: CvItem[]; // Renamed from cvItems

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
    this.cvItemService.getCvItems().then(items => this.experienceItems = items); // Renamed from cvItems
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }
}
