import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
      name: 'Asterix',
      sur_name: 'Strong',
      age: 50,
      position: 'Angular Developer',
      img_url: 'https://swall.teahub.io/photos/small/303-3033000_asterix-avatar.jpg'
    });
  }

  onSubmit(customerData: any): void {
    console.log('Your order has been submitted', customerData);
    this.checkoutForm.reset();
  }

}
