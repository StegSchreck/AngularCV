import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import * as jsPDF from 'jspdf';

import { MaterialModule } from '../material/material.module';
import { LocalizationService } from '../l10n/l10n.service';
import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { CvItemService } from '../cv-item/cv-item.service';

import { PdfComponent } from './pdf.component';

describe('PdfComponent', () => {
  let component: PdfComponent;
  let fixture: ComponentFixture<PdfComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ PdfComponent ],
      providers: [ CvItemService, FeatureToggleService, LocalizationService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should generate the PDF', () => {
    const pdf = component.generatePdfDocument(new jsPDF());
    expect(pdf).toBeDefined();
    expect(pdf.internal.getNumberOfPages()).toEqual(1);
    expect(pdf.getCreationDate('jsDate').getFullYear()).toEqual(new Date().getFullYear());
    expect(pdf.getCreationDate('jsDate').getMonth()).toEqual(new Date().getMonth());
    expect(pdf.getCreationDate('jsDate').getDate()).toEqual(new Date().getDate());
  });

  it('should generate the PDF containing data for professional experience', () => {
    component.cvItems = [{
      title: 'European Space Agency',
      subtitle: 'Master of the Universe',
      begin: '2000-01-01',
      end: '',
      description: 'To boldy go where no man has gone before.',
      tags: ['space', 'flight'],
      link: '',
      thumbnail: '',
    }];
    const pdf = component.generatePdfDocument(new jsPDF());
    expect(pdf.internal.getNumberOfPages()).toEqual(2);
  });

  it('should generate the PDF with multiple pages, if many cv items', () => {
    component.cvItems = [{
      title: 'European Space Agency',
      subtitle: 'Master of the Universe',
      begin: '2000-01-01',
      end: '',
      description: 'To boldy go where no man has gone before.',
      tags: ['space', 'flight'],
      link: '',
      thumbnail: '',
    }, {
      title: 'European Space Agency',
      subtitle: 'Master of the Universe',
      begin: '2000-01-01',
      end: '',
      description: 'To boldy go where no man has gone before.',
      tags: ['space', 'flight'],
      link: '',
      thumbnail: '',
    }, {
      title: 'European Space Agency',
      subtitle: 'Master of the Universe',
      begin: '2000-01-01',
      end: '',
      description: 'To boldy go where no man has gone before.',
      tags: ['space', 'flight'],
      link: '',
      thumbnail: '',
    }, {
      title: 'European Space Agency',
      subtitle: 'Master of the Universe',
      begin: '2000-01-01',
      end: '',
      description: 'To boldy go where no man has gone before.',
      tags: ['space', 'flight'],
      link: '',
      thumbnail: '',
    }, {
      title: 'European Space Agency',
      subtitle: 'Master of the Universe',
      begin: '2000-01-01',
      end: '',
      description: 'To boldy go where no man has gone before.',
      tags: ['space', 'flight'],
      link: '',
      thumbnail: '',
    }, {
      title: 'European Space Agency',
      subtitle: 'Master of the Universe',
      begin: '2000-01-01',
      end: '',
      description: 'To boldy go where no man has gone before.',
      tags: ['space', 'flight'],
      link: '',
      thumbnail: '',
    }, {
      title: 'European Space Agency',
      subtitle: 'Master of the Universe',
      begin: '2000-01-01',
      end: '',
      description: 'To boldy go where no man has gone before.',
      tags: ['space', 'flight'],
      link: '',
      thumbnail: '',
    }];
    const pdf = component.generatePdfDocument(new jsPDF());
    expect(pdf.internal.getNumberOfPages()).toEqual(3);
  });

  it('should generate the PDF containing data for education', () => {
    component.educationItems = [{
      title: 'Fancy University',
      subtitle: 'PhD',
      begin: '2000-01-01',
      end: '',
      description: 'doctor who?',
      tags: ['doctor'],
      link: '',
      thumbnail: '',
    }];
    component.certificationItems = [{
      title: 'Fancy University',
      subtitle: 'Certificate of Awesomeness',
      begin: '2000-01-01',
      end: '2005-01-01',
      description: '',
      tags: [],
      link: '',
      thumbnail: '',
    }];
    component.languageItems = [{ title: 'English', level: '99' }];
    const pdf = component.generatePdfDocument(new jsPDF());
    expect(pdf.internal.getNumberOfPages()).toEqual(3);
  });

  it('should generate the PDF containing data for volunteering', () => {
    component.volunteerItems = [{
      title: 'Red Cross',
      subtitle: 'Blood Donation',
      begin: '2000-01-01',
      end: '',
      description: '',
      tags: [],
      link: '',
      thumbnail: '',
    }];
    const pdf = component.generatePdfDocument(new jsPDF());
    expect(pdf.internal.getNumberOfPages()).toEqual(2);
  });

  it('should generate the PDF containing data for publication and talks', () => {
    component.publicationItems = [{
      title: 'Medium article',
      subtitle: 'Sharing my wisdom',
      begin: '2000-01-01',
      end: '',
      description: '',
      tags: [],
      link: '',
      thumbnail: '',
    }];
    component.talkItems = [{
      title: 'TED talk',
      subtitle: 'Blood Donation',
      begin: 'Sharing my wisdom',
      end: '',
      description: '',
      tags: [],
      link: '',
      thumbnail: '',
    }];
    const pdf = component.generatePdfDocument(new jsPDF());
    expect(pdf.internal.getNumberOfPages()).toEqual(3);
  });

  it('should generate the PDF containing data for volunteering', () => {
    component.volunteerItems = [{
      title: 'Red Cross',
      subtitle: 'Blood Donation',
      begin: '2000-01-01',
      end: '',
      description: '',
      tags: [],
      link: '',
      thumbnail: '',
    }];
    const pdf = component.generatePdfDocument(new jsPDF());
    expect(pdf.internal.getNumberOfPages()).toEqual(2);
  });

  it('should generate the PDF containing data for projects', () => {
    component.projectItems = [{
      title: 'Red Cross',
      subtitle: 'Blood Donation',
      begin: '2000-01-01',
      end: '',
      description: '',
      tags: [],
      link: '',
      thumbnail: '',
    }];
    const pdf = component.generatePdfDocument(new jsPDF());
    expect(pdf.internal.getNumberOfPages()).toEqual(2);
  });

  it('should generate the PDF containing data for general data', () => {
    component.generalData = {
      name: 'Sebastian Schreck',
      position: 'Software Engineer',
      description: 'This is just a test description.',
    };
    const pdf = component.generatePdfDocument(new jsPDF());
    expect(pdf.internal.getNumberOfPages()).toEqual(1);
  });
});
