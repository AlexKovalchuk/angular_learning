import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';

// import { User } from '../interfaces/user-interfaces';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  checkoutForm;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: ['Asterix', Validators.required],
      sur_name: ['Gold', Validators.required],
      age: [50],
      position: 'Angular Developer',
      img_url: 'https://swall.teahub.io/photos/small/303-3033000_asterix-avatar.jpg'
    });

    // this.checkoutForm profileForm = new FormGroup({
    //   name: new FormControl(''),
    //   sur_name: new FormControl(''),
    //   age: new FormControl(''),
    //   position: new FormControl(''),
    //   img_url: new FormControl(''),
    // });
    console.log('this.checkoutForm', this.checkoutForm);
  }

  sendUserData(customerData: any, event: any): void {
   const {} = this.checkoutForm;
    console.log('Your order has been submitted', customerData, this.checkoutForm);
    // this.checkoutForm.reset();
    event.preventDefault();
  }

  // 1. В тебе є форма для додоавання юзера. там можна зробити валідацію.
  // У ангуляр форм є готовий набір валідацій (обовязкове поле, число, текст, дата і т д),
  // заюзай парочку на формі. і також можна написати свою функцію яка буде валідатором введених даних,
  // наприклад напиши валідатор щоб текст відповідав певному шаблону, (XXX111) (три літери + три числа)

}
