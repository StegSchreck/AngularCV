import { Component, OnInit, inject } from '@angular/core';
import { CvItemService } from '../cv-item/cv-item.service';
import { LocalizationService } from '../l10n/l10n.service';
import { CvItem } from '../cv-item/cv-item';
import { MaterialModule } from '../material/material.module';
import { CvItemComponent } from '../cv-item/cv-item.component';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css'],
    standalone: true,
    imports: [MaterialModule, CvItemComponent]
})
export class EducationComponent implements OnInit {
  public l10n;
  public educationItems: CvItem[];
  public certificationItems: CvItem[];
  public languageItems;

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
    this.cvItemService.getEducationItems().then(items => this.educationItems = items);
    this.cvItemService.getCertificationItems().then(items => this.certificationItems = items);
    this.cvItemService.getLanguageItems().then(items => this.languageItems = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

  public getLanguageLevelDescription(level: number): string {
    // 100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
    if (level >= 100) {
      return this.l10n.education.language_level.native;
    } else if (level >= 80) {
      return this.l10n.education.language_level.fluent;
    } else if (level >= 60) {
      return this.l10n.education.language_level.advanced;
    } else if (level >= 40) {
      return this.l10n.education.language_level.intermediate;
    } else if (level >= 20) {
      return this.l10n.education.language_level.elementary;
    } else {
      return this.l10n.education.language_level.beginner;
    }
  }
}
