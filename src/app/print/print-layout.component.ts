import { Component, OnInit } from '@angular/core';
import { CvItemService } from '../cv-item/cv-item.service';
import { LocalizationService } from '../l10n/l10n.service';
import { CvItem } from '../cv-item/cv-item';

@Component({
  selector: 'app-print-layout',
  templateUrl: './print-layout.component.html',
  styleUrls: ['./print-layout.component.css'],
  standalone: false
})
export class PrintLayoutComponent implements OnInit {
  public l10n;
  public generalData;
  public contactItems;
  public cvItems: CvItem[];
  public educationItems: CvItem[];
  public certificationItems: CvItem[];
  public languageItems;
  public talkItems: CvItem[];
  public projectItems: CvItem[];
  public volunteerItems: CvItem[];

  constructor(
    private cvItemService: CvItemService,
    private localizationService: LocalizationService,
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
    this.cvItemService.getContactItems().then(items => this.contactItems = items);
    this.cvItemService.getCvItems().then(items => this.cvItems = items);
    this.cvItemService.getEducationItems().then(items => this.educationItems = items);
    this.cvItemService.getCertificationItems().then(items => this.certificationItems = items);
    this.cvItemService.getLanguageItems().then(items => this.languageItems = items);
    this.cvItemService.getTalkItems().then(items => this.talkItems = items);
    this.cvItemService.getProjectItems().then(items => this.projectItems = items);
    this.cvItemService.getVolunteerItems().then(items => this.volunteerItems = items);
  }
}
