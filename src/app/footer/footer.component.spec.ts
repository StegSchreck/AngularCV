import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { LocalizationService } from '../l10n/l10n.service';
import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { LocalizationComponent } from '../l10n/l10n.component';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FooterComponent,
        LocalizationComponent,
      ],
      declarations: [],
      providers: [
        FeatureToggleService,
        LocalizationService,
        provideRouter([
          { path: 'about', component: FooterComponent }
        ], withComponentInputBinding())
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
