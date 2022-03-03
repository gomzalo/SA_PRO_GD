import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ProyectsAssignComponent } from './proyects-assign/proyects-assign.component';
import { FormAssignComponent } from './form-assign/form-assign.component';

const routes: Routes = [
  {
    path: '',
    component: ProyectsAssignComponent
  },
  {
    path: 'assign',
    component: FormAssignComponent
  },
  {
    path: 'edit/:status',
    component: FormAssignComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectsAssignRoutingModule { }
