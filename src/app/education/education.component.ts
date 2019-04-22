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
  languageItems;
  title = "Educación y formaciones";

  constructor(
    private cvItemService: CvItemService
  ) {
  }

  getItems(): void {
    this.cvItemService
      .getEducationItems()
      .then(items => this.educationItems = items);
    this.cvItemService
      .getCertificationItems()
      .then(items => this.certificationItems = items);
    this.cvItemService
      .getLanguageItems()
      .then(items => this.languageItems = items);
  }

  ngOnInit() {
    this.getItems();
  }

}
