import { Component, OnInit } from '@angular/core';
import { CvItemService } from "../cv-item/cv-item.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
