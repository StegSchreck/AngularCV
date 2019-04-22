import { Component, OnInit } from '@angular/core';

import { CvItem } from "../cv-item/cv-item";
import { CvItemService } from "../cv-item/cv-item.service";

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.css']
})
export class VolunteeringComponent implements OnInit {
  volunteerItems: CvItem[];
  title = "Voluntariado y causas";

  constructor(
    private cvItemService: CvItemService
  ) { }

  getItems(): void {
    this.cvItemService
      .getVolunteerItems()
      .then(items => this.volunteerItems = items);
  }


  ngOnInit() {
    this.getItems();
  }

}
