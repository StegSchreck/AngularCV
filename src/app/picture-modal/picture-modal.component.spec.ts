import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureModalComponent } from './picture-modal.component';

describe('PictureModalComponent', () => {
  let component: PictureModalComponent;
  let fixture: ComponentFixture<PictureModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
