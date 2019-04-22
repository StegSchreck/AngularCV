import { Component, OnInit } from '@angular/core';

import { CvItem } from "../cv-item/cv-item";
import { CvItemService } from "../cv-item/cv-item.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceItems: CvItem[];
  title = "Experiencia Profesional";

  constructor(
    private cvItemService: CvItemService
  ) { }

  getItems(): void {
    this.cvItemService
      .getCvItems()
      .then(items => this.experienceItems = items);
  }

  ngOnInit() {
    this.getItems();
  }

}
