import { Component, OnInit } from '@angular/core';
import { CvItemService } from "../cv-item/cv-item.service";

@Component({
  selector: 'app-picture-modal',
  templateUrl: './picture-modal.component.html',
  styleUrls: ['./picture-modal.component.css']
})
export class PictureModalComponent implements OnInit {
  generalData;

  constructor(
    private cvItemService: CvItemService,
  ) { }

  getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
  }

  ngOnInit() {
    this.getItems();
  }

}
