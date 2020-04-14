import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { LocalizationService } from '../l10n/l10n.service';
import { CvItemService } from '../cv-item/cv-item.service';
import { PictureModalComponent } from '../picture-modal/picture-modal.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  public l10n;
  public generalData;
  public interests;

  constructor(
    private localizationService: LocalizationService,
    private cvItemService: CvItemService,
    private dialog: MatDialog,
  ) {
    this.localizationService.languageChanged.subscribe((data) => {
      this.l10n = data;
      this.getItems();
    });
  }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  public showAvatar() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      imagePath: 'assets/img/avatar.jpg',
      title: this.generalData.name,
    };
    this.dialog.open(PictureModalComponent, dialogConfig);
  }

  private getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
    this.cvItemService
      .getInterestItems()
      .then(items => this.interests = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

}
