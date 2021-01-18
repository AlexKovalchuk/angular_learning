import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperUsersRoutingModule } from './super-users-routing.module';
import { SuperUsersComponent } from './super-users.component';


@NgModule({
  declarations: [SuperUsersComponent],
  imports: [
    CommonModule,
    SuperUsersRoutingModule
  ]
})
export class SuperUsersModule { }
