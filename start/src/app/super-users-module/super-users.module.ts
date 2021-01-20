import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperUsersRoutingModule } from './super-users-routing.module';
import { SuperUsersComponent } from './super-users.component';
import { SuperUsersService } from '../services/super-user-service/super-users.service';


@NgModule({
  declarations: [SuperUsersComponent],
  imports: [
    CommonModule,
    SuperUsersRoutingModule
  ],
  providers: [
    SuperUsersService
  ]
})
export class SuperUsersModule { }
