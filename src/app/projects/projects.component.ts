import { Component, OnInit, inject } from '@angular/core';
import { CvItemService } from '../cv-item/cv-item.service';
import { LocalizationService } from '../l10n/l10n.service';
import { CvItem } from '../cv-item/cv-item';
import { MaterialModule } from '../material/material.module';
import { CvItemComponent } from '../cv-item/cv-item.component';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    standalone: true,
    imports: [MaterialModule, CvItemComponent]
})
export class ProjectsComponent implements OnInit {
  public l10n;
  public projectItems: CvItem[];

  private cvItemService = inject(CvItemService);
  private localizationService = inject(LocalizationService);

  constructor() {
    this.localizationService.languageChanged.subscribe((data) => {
      this.l10n = data;
      this.getItems();
    });
  }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  private getItems(): void {
    this.cvItemService.getProjectItems().then(items => this.projectItems = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }
}
