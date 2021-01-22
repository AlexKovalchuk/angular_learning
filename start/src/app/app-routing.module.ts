import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'users', loadChildren: () => import('./users-module/users.module').then(m => m.UsersModule) },
  { path: 'superUsers', loadChildren: () => import('./super-users-module/super-users.module').then(m => m.SuperUsersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
