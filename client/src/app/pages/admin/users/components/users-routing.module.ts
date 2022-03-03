import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { UsersComponent } from './users/users.component';
import { FormUsersComponent } from './form-users/form-users.component';
import { InfoUserComponent } from './info-user/info-user.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'new',
    component: FormUsersComponent
  },
  {
    path: 'edit/:status',
    component: FormUsersComponent
  },
  {
    path: 'info',
    component: InfoUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
