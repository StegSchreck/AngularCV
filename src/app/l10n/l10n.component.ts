import { Component, OnInit, inject } from '@angular/core';
import { LocalizationService } from './l10n.service';
import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { MaterialModule } from '../material/material.module';
import { L10N } from './l10n.data';

@Component({
    selector: 'app-l10n',
    templateUrl: './l10n.component.html',
    styleUrls: ['./l10n.component.css'],
    standalone: true,
    imports: [MaterialModule]
})
export class LocalizationComponent implements OnInit {
    public l10n;
    public featureToggles;
    public l10n_languages: { id: string, name: string }[] = [];

    private localizationService = inject(LocalizationService);
    private featureToggleService = inject(FeatureToggleService);

    constructor() {
        this.localizationService.languageChanged.subscribe((data) => {
            this.l10n = data;
        });
    }

    ngOnInit() {
        this.l10n = this.localizationService.getDefault();
        this.featureToggles = this.featureToggleService.getFeatureToggles();
        this.getLanguages();
    }

    private getLanguages(): void {
        for (const lang in L10N) {
            if (L10N.hasOwnProperty(lang)) {
                this.l10n_languages.push({
                    id: lang,
                    name: L10N[lang].language_name,
                });
            }
        }
    }

    public changeLocalization(language: string) {
        this.localizationService.change(language);
    }
}
