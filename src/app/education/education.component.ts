import { Component, OnInit } from '@angular/core';

import { CvItem } from "../cv-item/cv-item";
import { CvItemService } from "../cv-item/cv-item.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  cvItems: CvItem[];
  title = "Education";

  constructor(
    private cvItemService: CvItemService
  ) {
  }

  getEducationItems(): void {
    this.cvItemService
      .getEducationItems()
      .then(cvItems => this.cvItems = cvItems);
  }

  ngOnInit() {
    this.getEducationItems();
  }

}
