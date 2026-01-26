import { Component, OnInit, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CvItemService } from './cv-item/cv-item.service';
import { LocalizationService } from './l10n/l10n.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrintLayoutComponent } from './print/print-layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PrintLayoutComponent, RouterModule]
})
export class AppComponent implements OnInit {
  public l10n;
  public generalData;

  private cvItemService = inject(CvItemService);
  private localizationService = inject(LocalizationService);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  constructor() {
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
    this.titleService.setTitle(newTitle);
  }

  private setMetaDescription() {
    if (this.generalData && this.generalData.name) {
      const description = 'This is the online-CV of ' + this.generalData.name + ' - created with the AngularCV project.';
      this.metaService.updateTag({ name: 'description', content: description });
    }
  }
}
