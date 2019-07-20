import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

import { CvItemService } from './cv-item/cv-item.service';

@Component({
  selector: 'app-root',
  styleUrls: [ './app.component.css' ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private generalData;

  public constructor(
    private cvItemService: CvItemService,
    private titleService: Title,
    private router: Router,
  ) {
    this.getItems();
    this.setTitle(this.generalData.name + ' | ' + this.generalData.position);

    router.events
      // .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        window.scrollTo(0, 0);
      });
  }

  private getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
