import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationComponent } from './l10n.component';

describe('LocalizationComponent', () => {
  let component: LocalizationComponent;
  let fixture: ComponentFixture<LocalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
