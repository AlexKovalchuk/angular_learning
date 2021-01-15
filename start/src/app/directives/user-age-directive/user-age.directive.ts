import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appUserAge]'
})
export class UserAgeDirective {

  constructor(el: ElementRef) {
    console.log('directive element', el);
  }
  @Input('ageDirective') ageDirective: number;


}
