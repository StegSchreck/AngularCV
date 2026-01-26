import { Component, OnInit, inject } from '@angular/core';
import { LocalizationService } from '../l10n/l10n.service';
import packageJson from '../../../package.json';
import { MaterialModule } from '../material/material.module';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: true,
    imports: [MaterialModule]
})
export class AboutComponent implements OnInit {
  public l10n;
  public appVersion: string = packageJson.version;

  private localizationService = inject(LocalizationService);

  constructor() {
    this.localizationService.languageChanged.subscribe((data) => { this.l10n = data; });
  }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  ngOnInit() {
    this.getLocalization();
  }
}
