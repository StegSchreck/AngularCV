import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { CvItemService } from './cv-item/cv-item.service';
import { LocalizationService } from './l10n/l10n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})

export class AppComponent implements OnInit {
  public l10n;
  public generalData;

  constructor(
    private cvItemService: CvItemService,
    private localizationService: LocalizationService,
    private titleService: Title,
    private metaService: Meta,
  ) {
    this.localizationService.languageChanged.subscribe(data => {
      this.l10n = data;
      this.loadData();
    });
  }

  ngOnInit() {
    this.l10n = this.localizationService.getDefault();
    this.loadData();
  }

  private loadData(): void {
    this.generalData = this.cvItemService.getGeneralData();

    // Update title and meta description after general data is loaded
    if (this.generalData && this.generalData.name && this.generalData.position) {
      this.setTitle(this.generalData.name + ' | ' + this.generalData.position);
      this.setMetaDescription();
    }
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  private setMetaDescription() {
    if (this.generalData && this.generalData.name) {
      const description = 'This is the online-CV of ' + this.generalData.name + ' - created with the AngularCV project.';
      this.metaService.updateTag({name: 'description', content: description});
    }
  }
}
