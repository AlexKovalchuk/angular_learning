import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserListCardComponent } from './user-list-card/user-list-card.component';
import { UserAgeDirective } from './directives/user-age-directive/user-age.directive';
import { PositionPipe } from './pipe/position-pipe/position.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserCardComponent,
    AddUserComponent,
    UserListItemComponent,
    UserListCardComponent,
    UserAgeDirective,
    PositionPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// ng generate module superUsers --route superUsers --module app.module
