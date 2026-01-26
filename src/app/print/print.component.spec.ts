import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MaterialModule } from '../material/material.module';
import { LocalizationService } from '../l10n/l10n.service';
import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { CvItemService } from '../cv-item/cv-item.service';

import { PrintComponent } from './print.component';

describe('PrintComponent', () => {
  let component: PrintComponent;
  let fixture: ComponentFixture<PrintComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, PrintComponent ],
      declarations: [],
      providers: [ CvItemService, FeatureToggleService, LocalizationService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call window.print when print is triggered', () => {
    const printSpy = spyOn(window, 'print');
    component.print();
    expect(printSpy).toHaveBeenCalled();
  });
});
