import { Component, OnInit } from '@angular/core';

import { LocalizationService } from '../l10n/l10n.service';
import { CvItem } from '../cv-item/cv-item';
import { CvItemService } from '../cv-item/cv-item.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  l10n;
  projectItems: CvItem[];

  constructor(
    private localizationService: LocalizationService,
    private cvItemService: CvItemService,
  ) { }

  getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  getItems(): void {
    this.cvItemService
      .getProjectItems()
      .then(items => this.projectItems = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

}
