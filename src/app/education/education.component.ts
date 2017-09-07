import { Component, OnInit } from '@angular/core';

import { CvItem } from "../cv-item/cv-item";
import { CvItemService } from "../cv-item/cv-item.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationItems: CvItem[];
  certificationItems: CvItem[];
  title = "Education and Certificates";

  constructor(
    private cvItemService: CvItemService
  ) {
  }

  getItems(): void {
    this.cvItemService
      .getEducationItems()
      .then(cvItems => this.educationItems = cvItems);
    this.cvItemService
      .getCertificationItems()
      .then(cvItems => this.certificationItems = cvItems);
  }

  ngOnInit() {
    this.getItems();
  }

}
