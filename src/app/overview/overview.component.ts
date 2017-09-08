import { Component, OnInit } from '@angular/core';
import { CvItemService } from "../cv-item/cv-item.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  title = "Overview";
  generalData;
  interests;

  constructor(
    private cvItemService: CvItemService,
  ) { }

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
