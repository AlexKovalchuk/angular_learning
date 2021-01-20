import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserListCardComponent } from './user-list-card/user-list-card.component';

import { UserAgeDirective } from '../directives/user-age-directive/user-age.directive';
import { PositionPipe } from '../pipe/position-pipe/position.pipe';
import { UsersService } from '../services/users-service/users.service';

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserCardComponent,
    UserListItemComponent,
    AddUserComponent,
    UserListCardComponent,
    UserAgeDirective,
    PositionPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [UsersService],
})
export class UsersModule { }
