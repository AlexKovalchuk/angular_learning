import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appUserAge]'
})
export class UserAgeDirective implements OnInit {


  constructor(private el: ElementRef) {  }

  @Input('appUserAge') userAge: number;

  ngOnInit(): void {
    this.setUserAge(this.userAge);
  }

  setUserAge(age: number): void {
    if (age <= 15) {
      this.el.nativeElement.innerHTML = 'TeenAger';
    } else if (age > 15 && age <= 30) {
      this.el.nativeElement.innerHTML = 'Young person';
    } else if ( age > 30 && age <= 50) {
      this.el.nativeElement.innerHTML = 'Middle Age';
    } else {
      this.el.nativeElement.innerHTML = 'You must be a Shinigami';
    }
  }

}
