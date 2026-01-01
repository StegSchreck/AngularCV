import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { CvItemService } from './cv-item/cv-item.service';
import { LocalizationService } from './l10n/l10n.service';

interface GeneralData {
  name?: string;
  position?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements OnInit, OnDestroy {
  public l10n: unknown;
  public generalData: GeneralData | null = null;
  private routerSubscription?: Subscription;
  private languageSubscription?: Subscription;

  constructor(
    private cvItemService: CvItemService,
    private localizationService: LocalizationService,
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
  ) {
    this.languageSubscription = this.localizationService.languageChanged.subscribe(data => {
      this.l10n = data;
      this.loadData();
    });

    // Scroll to top on route navigation
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  ngOnInit() {
    this.l10n = this.localizationService.getDefault();
    this.loadData();
  }

  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
    this.languageSubscription?.unsubscribe();
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
