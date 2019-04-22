import { Component, OnInit } from '@angular/core';

import { CvItem } from "../cv-item/cv-item";
import { CvItemService } from "../cv-item/cv-item.service";

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  publicationItems: CvItem[];
  talkItems: CvItem[];
  title = "Charlas y publicaciones";

  constructor(
    private cvItemService: CvItemService
  ) {
  }

  getItems(): void {
    this.cvItemService
      .getPublicationItems()
      .then(items => this.publicationItems = items);
    this.cvItemService
      .getTalkItems()
      .then(items => this.talkItems = items);
  }

  ngOnInit() {
    this.getItems();
  }

}
