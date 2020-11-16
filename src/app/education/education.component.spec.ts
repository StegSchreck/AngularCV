import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MaterialModule } from '../material/material.module';
import { CvItemService } from '../cv-item/cv-item.service';
import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { LocalizationService } from '../l10n/l10n.service';

import { CvItemComponent } from '../cv-item/cv-item.component';

import { EducationComponent } from './education.component';

describe('PublicationsComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ EducationComponent, CvItemComponent ],
      providers: [ CvItemService, FeatureToggleService, LocalizationService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should convert god language level into text', () => {
    expect(component.getLanguageLevelDescription(101)).toEqual('native speaker');
  });

  it('should convert native language level into text', () => {
    expect(component.getLanguageLevelDescription(100)).toEqual('native speaker');
  });

  it('should convert high fluent language level into text', () => {
    expect(component.getLanguageLevelDescription(99)).toEqual('fluent');
  });

  it('should convert fluent language level into text', () => {
    expect(component.getLanguageLevelDescription(85)).toEqual('fluent');
  });

  it('should convert advanced language level into text', () => {
    expect(component.getLanguageLevelDescription(65)).toEqual('advanced');
  });

  it('should convert intermediate language level into text', () => {
    expect(component.getLanguageLevelDescription(42)).toEqual('intermediate');
  });

  it('should convert elementary language level into text', () => {
    expect(component.getLanguageLevelDescription(37)).toEqual('elementary');
  });

  it('should convert beginner language level into text', () => {
    expect(component.getLanguageLevelDescription(13)).toEqual('beginner');
  });

  it('should convert zero language level into text', () => {
    expect(component.getLanguageLevelDescription(0)).toEqual('beginner');
  });

  it('should convert negative language level into text', () => {
    expect(component.getLanguageLevelDescription(-1)).toEqual('beginner');
  });
});
