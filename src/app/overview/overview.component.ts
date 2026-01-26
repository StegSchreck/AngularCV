import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CvItemService } from '../cv-item/cv-item.service';
import { LocalizationService } from '../l10n/l10n.service';
import { PictureModalComponent } from '../picture-modal/picture-modal.component';
import { MaterialModule } from '../material/material.module';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css'],
    standalone: true,
    imports: [MaterialModule, CommonModule]
})
export class OverviewComponent implements OnInit {
  public l10n;
  public generalData;
  public interests;

  private dialog = inject(MatDialog);
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
    this.generalData = this.cvItemService.getGeneralData();
    this.cvItemService.getInterestItems().then(items => this.interests = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

  public showAvatar() {
    this.dialog.open(PictureModalComponent, {
      data: {
        picture: 'assets/img/avatar.jpg'
      }
    });
  }
}
