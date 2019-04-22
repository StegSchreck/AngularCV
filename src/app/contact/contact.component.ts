import { Component, OnInit } from '@angular/core';
import { CvItemService } from "../cv-item/cv-item.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactItems;
  title = "Información de contacto";

  constructor(
    private cvItemService: CvItemService
  ) { }

  getItems(): void {
    this.cvItemService
      .getContactItems()
      .then(items => this.contactItems = items);
  }

  ngOnInit() {
    this.getItems();
  }

}
