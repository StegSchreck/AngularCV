import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCvItem]',
})
export class CvItemDirective {
  constructor(public elementRef: ElementRef) {}
}
