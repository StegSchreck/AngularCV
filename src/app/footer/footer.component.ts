import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { LocalizationComponent } from '../l10n/l10n.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: true,
    imports: [RouterModule, MaterialModule, LocalizationComponent]
})
export class FooterComponent {
    public currentYear: number = new Date().getFullYear();
}
