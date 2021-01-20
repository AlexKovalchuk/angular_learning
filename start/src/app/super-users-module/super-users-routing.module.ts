import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperUsersComponent } from './super-users.component';

const routes: Routes = [{ path: '', component: SuperUsersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperUsersRoutingModule { }
