import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appCvItem]',
    standalone: false
})
export class CvItemDirective {
  constructor(public elementRef: ElementRef) {}
}
