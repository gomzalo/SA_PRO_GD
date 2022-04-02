import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarcompetenciaComponent } from './registrarcompetencia/registrarcompetencia.component';


const routes: Routes = [
  {
    path: 'registrocompetencia',
    component: RegistrarcompetenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciaRoutingModule { }
