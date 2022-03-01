import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { BusinessComponent } from './business/business.component';
import { FormBusinessComponent } from './form-business/form-business.component';

const routes: Routes = [
  {
    path: '',
    component: BusinessComponent
  },
  {
    path: 'new',
    component: FormBusinessComponent
  },
  {
    path: 'edit/:status',
    component: FormBusinessComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
