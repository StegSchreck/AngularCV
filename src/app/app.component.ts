import {Component, OnInit} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { CvItemService } from './cv-item/cv-item.service';
import { LocalizationService } from './l10n/l10n.service';
import { CvItem } from './cv-item/cv-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements OnInit {
  public l10n;
  public generalData;
  public contactItems;
  public cvItems: CvItem[];
  public educationItems: CvItem[];
  public certificationItems: CvItem[];
  public languageItems;
  public publicationItems: CvItem[];
  public talkItems: CvItem[];
  public projectItems: CvItem[];
  public volunteerItems: CvItem[];
  public interestItems: CvItem[];

  constructor(
    private cvItemService: CvItemService,
    private localizationService: LocalizationService,
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
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
    
    this.cvItemService.getContactItems().then(items => this.contactItems = items);

    this.cvItemService.getCvItems().then(items => this.cvItems = items);
    this.cvItemService.getInterestItems().then(items => this.interestItems = items);
    this.cvItemService.getEducationItems().then(items => this.educationItems = items);
    this.cvItemService.getCertificationItems().then(items => this.certificationItems = items);
    this.cvItemService.getLanguageItems().then(items => this.languageItems = items);
    this.cvItemService.getPublicationItems().then(items => this.publicationItems = items);
    this.cvItemService.getTalkItems().then(items => this.talkItems = items);
    this.cvItemService.getProjectItems().then(items => this.projectItems = items);
    this.cvItemService.getVolunteerItems().then(items => this.volunteerItems = items);
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
