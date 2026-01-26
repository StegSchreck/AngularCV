import { Component, OnInit, inject } from '@angular/core';
import { CvItemService } from '../cv-item/cv-item.service';
import { LocalizationService } from '../l10n/l10n.service';
import { CvItem } from '../cv-item/cv-item';
import { MaterialModule } from '../material/material.module';
import { CvItemComponent } from '../cv-item/cv-item.component';

@Component({
    selector: 'app-volunteering',
    templateUrl: './volunteering.component.html',
    styleUrls: ['./volunteering.component.css'],
    standalone: true,
    imports: [MaterialModule, CvItemComponent]
})
export class VolunteeringComponent implements OnInit {
  public l10n;
  public volunteerItems: CvItem[];

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
    this.cvItemService.getVolunteerItems().then(items => this.volunteerItems = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }
}
