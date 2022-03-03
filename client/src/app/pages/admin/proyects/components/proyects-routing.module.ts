import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ProyectsComponent } from './proyects/proyects.component';
import { FormProyectsComponent } from './form-proyects/form-proyects.component';

const routes: Routes = [
  {
    path: '',
    component: ProyectsComponent
  },
  {
    path: 'new',
    component: FormProyectsComponent
  },
  {
    path: 'edit/:status',
    component: FormProyectsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectsRoutingModule { }
