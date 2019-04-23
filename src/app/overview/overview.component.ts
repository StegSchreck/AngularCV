import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { CvItemService } from "../cv-item/cv-item.service";
import { PictureModalComponent } from "../picture-modal/picture-modal.component";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  title = "Inicio";
  generalData;
  interests;

  constructor(
    private cvItemService: CvItemService,
    private dialog: MatDialog,
  ) { }

  showAvatar() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      imagePath: "assets/img/avatar.png",
      title: this.generalData.name,
    };
    this.dialog.open(PictureModalComponent, dialogConfig);
  }

  getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
    this.cvItemService
      .getInterestItems()
      .then(items => this.interests = items);
  }

  ngOnInit() {
    this.getItems();
  }

}
