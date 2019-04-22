import { Component, OnInit, Inject, Input } from '@angular/core';
import * as jsPDF from 'jspdf'

import { CvItem } from "../cv-item/cv-item";
import { CvItemService } from "../cv-item/cv-item.service";

@Component({
  selector:'app-pdf',
  templateUrl:'./pdf.component.html',
  styleUrls: ['./pdf.component.css'],
  providers: [
    { provide: 'Window', useValue: window }
  ]
})
export class PdfComponent implements OnInit {
  @Input() color: string = "default";
  verticalPosition: number = 50; // starting point
  maximumHorizontalLength: number = 168;
  generalData;
  interestItems;
  cvItems: CvItem[];
  educationItems: CvItem[];
  publicationItems: CvItem[];
  talkItems: CvItem[];
  certificationItems: CvItem[];
  languageItems;
  projectItems: CvItem[];
  volunteerItems: CvItem[];
  contactItems;

  constructor(
    @Inject('Window') private window: Window,
    private cvItemService: CvItemService,
  ) { }

  getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
    this.cvItemService
      .getInterestItems()
      .then(items => this.interestItems = items);
    this.cvItemService
      .getCvItems()
      .then(items => this.cvItems = items);
    this.cvItemService
      .getEducationItems()
      .then(items => this.educationItems = items);
    this.cvItemService
      .getCertificationItems()
      .then(items => this.certificationItems = items);
    this.cvItemService
      .getLanguageItems()
      .then(items => this.languageItems = items);
    this.cvItemService
      .getPublicationItems()
      .then(items => this.publicationItems = items);
    this.cvItemService
      .getTalkItems()
      .then(items => this.talkItems = items);
    this.cvItemService
      .getProjectItems()
      .then(items => this.projectItems = items);
    this.cvItemService
      .getVolunteerItems()
      .then(items => this.volunteerItems = items);
    this.cvItemService
      .getContactItems()
      .then(items => this.contactItems = items);
  }

  ngOnInit() {
    this.getItems();
  }

  download() {
    let doc = new jsPDF();

    this.addPageHeader(doc);

    this.addOverviewPageContent(doc);
    this.switchPage(doc);
    this.addExperiencePageContent(doc);
    if (this.educationItems !== undefined && this.educationItems !== [] && this.educationItems.length > 0) {
      this.switchPage(doc);
      this.addEducationPageContent(doc);
    }
    if (this.certificationItems !== undefined && this.certificationItems !== [] && this.certificationItems.length > 0) {
      this.switchPage(doc);
      this.addCertificatesPageContent(doc);
    }
    if (this.publicationItems !== undefined && this.publicationItems !== [] && this.publicationItems.length > 0) {
      this.switchPage(doc);
      this.addPublicationsPageContent(doc);
    }
    if (this.talkItems !== undefined && this.talkItems !== [] && this.talkItems.length > 0) {
      this.switchPage(doc);
      this.addTalksPageContent(doc);
    }
    if (this.projectItems !== undefined && this.projectItems !== [] && this.projectItems.length > 0) {
      this.switchPage(doc);
      this.addProjectsPageContent(doc);
    }
    if (this.volunteerItems !== undefined && this.volunteerItems !== [] && this.volunteerItems.length > 0) {
      this.switchPage(doc);
      this.addVolunteeringPageContent(doc);
    }

    PdfComponent.addPageFooter(doc);

    // Save the PDF
    doc.save('AngularCV_' + this.generalData.name.replace(' ', '_') + '.pdf');
  }

  private switchPage(doc){
    PdfComponent.addPageFooter(doc);
    doc.addPage();
    this.addPageHeader(doc);
  }

  private addOverviewPageContent(doc){
    this.addGeneralDescription(doc);
    this.verticalPosition += 20;
    this.addContactData(doc);
    this.addLanguages(doc);
    this.verticalPosition += 10;
    this.addInterests(doc);
  }

  private addGeneralDescription(doc) {
    doc.setFontSize(14);
    doc.setFontType('bold');
    doc.text("Acerca de mi", 20, this.verticalPosition);
    this.verticalPosition += 10;
    doc.setFontSize(12);
    doc.setFontType('normal');
    let splittedDescription = doc.splitTextToSize(this.generalData.description, this.maximumHorizontalLength);
    doc.text(splittedDescription, 20, this.verticalPosition);
  }

  private addContactData(doc) {
    this.addLine(doc, "CIUDAD", this.contactItems.city);
    this.addLine(doc, "E-MAIL", this.contactItems.mail);
    this.addLine(doc, "TELÉFONO", this.contactItems.phone);
    this.addLine(doc, "SKYPE", this.contactItems.skype);
    this.addLine(doc, "LINKEDIN", this.contactItems.linkedin);
    this.addLine(doc, "XING", this.contactItems.xing);
    this.addLine(doc, "GITHUB", this.contactItems.github);
    this.addLine(doc, "STACKOVERFLOW", this.contactItems.stackoverflow);
    this.addLine(doc, "TWITTER", this.contactItems.twitter);
  }

  private addLanguages(doc) {
    if (this.languageItems !== undefined && this.languageItems !== [] && this.languageItems.length > 0) {
      this.verticalPosition += 10;
      doc.setFontSize(14);
      doc.setFontType('bold');
      doc.text("IDIOMAS", 20, this.verticalPosition);
      this.verticalPosition += 10;
      doc.setFontSize(12);
      doc.setFontType('normal');
      for (let item of this.languageItems) {
        let bar_length:number = 168 * (item.level / 100);

        doc.setDrawColor(0);
        doc.setFillColor(68, 68, 68);
        doc.rect(20, this.verticalPosition-4, bar_length, 5.5, 'F');
        doc.setDrawColor(0);
        doc.setFillColor(222, 222, 222);
        doc.rect(bar_length+20, this.verticalPosition-4, 168-bar_length, 5.5, 'F');

        doc.setTextColor(222);
        doc.text(item.title, 25, this.verticalPosition);
        doc.setTextColor(0);

        this.verticalPosition += 7;
      }
    }
  }

  private addInterests(doc) {
    if (this.interestItems !== undefined && this.interestItems !== [] && this.interestItems.length > 0) {
      doc.setFontSize(14);
      doc.setFontType('bold');
      doc.text("INTERESES", 20, this.verticalPosition);
      this.verticalPosition += 10;
      doc.setFontSize(12);
      doc.setFontType('normal');
      let interests: string = "";
      for (let item of this.interestItems) {
        if (interests !== "") { interests = interests + ", " }
        interests = interests + item.title;
      }
      let splittedInterests = doc.splitTextToSize(interests, this.maximumHorizontalLength);
      doc.text(splittedInterests, 20, this.verticalPosition);
    }
  }

  private addLine(doc, title:string, content:string) {
    if (content !== undefined && content !== '') {
      doc.setFontSize(12);
      doc.setFontType('bold');
      doc.text(title, 20, this.verticalPosition);
      doc.setFontSize(11);
      doc.setFontType('normal');
      doc.text(content, 80, this.verticalPosition);
      this.verticalPosition += 7;
    }
  }

  private addExperiencePageContent(doc){
    this.addPageTitle(doc, "EXPERIENCIA PROFESIONAL");
    this.addCvItems(doc, this.cvItems);
    doc.setDrawColor(0);
    doc.line(22, 65, 22, this.verticalPosition); // vertical line
  }

  private addProjectsPageContent(doc){
    this.addPageTitle(doc, "Proyectos");
    this.addCvItems(doc, this.projectItems);
  }

  private addVolunteeringPageContent(doc){
    this.addPageTitle(doc, "Voluntariado y causas");
    this.addCvItems(doc, this.volunteerItems);
  }

  private addEducationPageContent(doc){
    this.addPageTitle(doc, "Educación");
    this.addCvItems(doc, this.educationItems);
  }

  private addCertificatesPageContent(doc){
    this.addPageTitle(doc, "Certificados y formaciones");
    this.addCvItems(doc, this.certificationItems);
  }

  private addPublicationsPageContent(doc){
    this.addPageTitle(doc, "Publicaciones");
    this.addCvItems(doc, this.publicationItems);
  }

  private addTalksPageContent(doc){
    this.addPageTitle(doc, "Charlas");
    this.addCvItems(doc, this.talkItems);
  }

  private addPageTitle(doc, title:string) {
    doc.setFontSize(14);
    doc.setFontType('bold');
    doc.text(title.toUpperCase(), 20, this.verticalPosition);
    this.verticalPosition += 15;
  }

  private addCvItems(doc, items: CvItem[]) {
    for (let item of items) {
      if (this.verticalPosition >= 235) {
        doc.setTextColor(68, 68, 68);
        doc.setFontType('bolditalic');
        doc.setFontSize(10);
        this.verticalPosition += 5;
        doc.text("Continúa en la siguiente página...", 20, this.verticalPosition);
        this.switchPage(doc);
        doc.setTextColor(68, 68, 68);
        doc.setFontType('bolditalic');
        doc.setFontSize(10);
        doc.text("... viene de la página anterior.", 20, this.verticalPosition);
        doc.setTextColor(0, 0, 0);
        doc.setFontType('normal');
        this.verticalPosition = 65;
      }
      this.addCvItem(doc, item);
    }
  }

  private addCvItem(doc, item: CvItem){
    doc.setFontSize(12);
    doc.setFontType('bold');
    doc.text(item.title, 30, this.verticalPosition);

    doc.setDrawColor(0);
    doc.setFillColor(0, 0, 0);
    doc.circle(22, this.verticalPosition - 1, 2, 'F');
    this.verticalPosition += 5;

    doc.setFontSize(12);
    doc.setFontType('normal');
    doc.setTextColor(68, 68, 68);
    doc.text(item.subtitle, 30, this.verticalPosition);
    this.verticalPosition += 5;

    doc.setFontSize(10);
    doc.setFontType('normal');
    let end = item.end;
    if (item.begin !== undefined && item.begin !== '' && (item.end === undefined || item.end === '')) {
      end = "now";
    }
    let time = "";
    if (item.begin !== undefined && item.begin !== '') {
      time = item.begin + " - " + end;
    } else {
      time = end;
    }
    doc.text(time, 30, this.verticalPosition);

    if (item.description !== undefined && item.description !== '') {
      this.verticalPosition += 5;
      doc.setFontSize(10);
      doc.setFontType('italic');
      doc.setTextColor(0, 0, 0);
      let splittedDescription = doc.splitTextToSize(item.description, this.maximumHorizontalLength - 10);
      doc.text(splittedDescription, 30, this.verticalPosition);
      this.verticalPosition += 4 * (splittedDescription.length - 1);
    }

    doc.setFontSize(10);
    doc.setFontType('normal');
    doc.setFont('courier');
    doc.setTextColor(68, 68, 68);
    if (item.tags !== undefined && item.tags.length > 0) {
      this.verticalPosition += 7;
      let tags: string = "";
      for (let tag of item.tags) {
        if (tags !== "") {
          tags = tags + ", "
        }
        tags = tags + tag;
      }
      let splittedTags = doc.splitTextToSize(tags, this.maximumHorizontalLength - 10);
      doc.text(splittedTags, 30, this.verticalPosition);
      this.verticalPosition += 3.5 * (splittedTags.length - 1);
    }
    doc.setFont('helvetica');
    doc.setTextColor(0, 0, 0);

    this.verticalPosition += 10;
  }

  private addPageHeader(doc){
    doc.setFont('courier');
    doc.setFontType('bold');
    doc.setFontSize(24);
    doc.setTextColor(48, 48, 48);
    doc.text(this.generalData.name, 20, 20);
    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.setFontSize(18);
    doc.setTextColor(68, 68, 68);
    doc.text(this.generalData.position, 20, 30);
    doc.setDrawColor(68, 68, 68);
    doc.line(20, 35, 188, 35); // horizontal line
    this.verticalPosition = 50;
    doc.setTextColor(0, 0, 0);
  }

  private static addPageFooter(doc){
    doc.line(20, 280, 188, 280); // horizontal line
    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.setFontSize(7);
    doc.text("Este CV ha sido generado desde un CV online autohospedado, usando el proyecto AngularCV.", 20, 284);
    doc.setFontSize(7);
    doc.text("Si ha recibido esto de una empresa de colocación, puede que simplemente lo haya descargado y enviado sin mi consentimiento.", 20, 287);
    let imgData = "data:image/png;base64,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";
    doc.addImage(imgData, 'JPEG', 164, 281, 19, 6);
  }
}
