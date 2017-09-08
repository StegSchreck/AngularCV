import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { CvItemService } from "./cv-item/cv-item.service";

@Component({
  selector: 'app-root',
  styleUrls: [ './app.component.css' ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  generalData;
  navLinks = [
    { location:'/overview',       label:'Overview',         icon:'account_circle' },
    { location:'/experience',     label:'Experience',       icon:'work' },
    { location:'/education',      label:'Education',        icon:'school' },
    { location:'/projects',       label:'Projects',         icon:'assignment' },
    { location:'/volunteering',   label:'Volunteering',     icon:'favorite' },
    { location:'/contact',        label:'Contact',          icon:'email' },
    // { location:'/about',         label:'About',             icon:'info' },
  ];

  public constructor(
    private cvItemService: CvItemService,
    private titleService: Title
  ) {
    this.getItems();
    this.setTitle(this.generalData.name + " | " + this.generalData.position);
  }

  getItems(): void {
    this.generalData = this.cvItemService.getGeneralData()
  }


  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
