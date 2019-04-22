import { Component, OnInit } from '@angular/core';

import { CvItem } from "../cv-item/cv-item";
import { CvItemService } from "../cv-item/cv-item.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectItems: CvItem[];
  title = "Proyectos";

  constructor(
    private cvItemService: CvItemService
  ) { }

  getItems(): void {
    this.cvItemService
      .getProjectItems()
      .then(items => this.projectItems = items);
  }

  ngOnInit() {
    this.getItems();
  }

}
