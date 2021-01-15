import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appUserAge]'
})
export class UserAgeDirective {

  constructor(el: ElementRef) {
    console.log('directive element', el);
    // value ~ 15
    //
  }
  @Input('ageDirective') ageDirective: number;


}
