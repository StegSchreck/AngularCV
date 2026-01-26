import { Component, Input, OnInit, inject } from '@angular/core';
import { CvItem } from './cv-item';
import { LocalizationService } from '../l10n/l10n.service';
import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { MaterialModule } from '../material/material.module';
import { MatBadgeModule } from '@angular/material/badge';
import { CvItemDirective } from './cv-item.directive';

@Component({
    selector: 'app-cv-item',
    templateUrl: './cv-item.component.html',
    styleUrls: ['./cv-item.component.css'],
    standalone: true,
    imports: [MaterialModule, MatBadgeModule, CvItemDirective]
})
export class CvItemComponent implements OnInit {
    @Input() cvItem: CvItem;
    public l10n;
    public featureToggles;

    private localizationService = inject(LocalizationService);
    private featureToggleService = inject(FeatureToggleService);

    constructor() {
        this.localizationService.languageChanged.subscribe((data) => {
            this.l10n = data;
        });
    }

    private getLocalization(): void {
        this.l10n = this.localizationService.getDefault();
    }

    private getFeatureToggles(): void {
        this.featureToggles = this.featureToggleService.getFeatureToggles();
    }

    ngOnInit() {
        this.getLocalization();
        this.getFeatureToggles();
    }

    public toggleDetails(event) {
        event.stopPropagation();
        const card = event.currentTarget.closest('.cv-card');
        if (card) {
            card.classList.toggle('closed');
            card.classList.toggle('opened');
        }
    }
}
