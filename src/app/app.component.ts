import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
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
    private metaService: Meta,
    private router: Router,
  ) {
    this.getItems();
    this.setTitle(this.generalData.name + ' | ' + this.generalData.position);
    this.setMetaDescription();

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

  private setMetaDescription() {
    const description = 'This is the online-CV of ' + this.generalData.name + ' - created with the AngularCV project.';
    this.metaService.updateTag({name: 'description', content: description});
  }
}
