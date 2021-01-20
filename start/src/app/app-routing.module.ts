import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-module/users-list/users-list.component';
import { UserCardComponent } from './users-module/user-card/user-card.component';
import { AddUserComponent } from './users-module/add-user/add-user.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  // { path: '', component: UsersListComponent },
  // { path: 'users-list', component: UsersListComponent },
  // { path: 'user-card/:userId', component: UserCardComponent },
  // { path: 'add-user', component: AddUserComponent },
  { path: 'users', loadChildren: () => import('./users-module/users.module').then(m => m.UsersModule) },
  { path: 'superUsers', loadChildren: () => import('./super-users-module/super-users.module').then(m => m.SuperUsersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
