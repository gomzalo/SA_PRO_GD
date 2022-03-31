import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistarestadioComponent } from './registarestadio/registarestadio.component';


const routes: Routes = [
  {
    path: 'registroestadio',
    component: RegistarestadioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadioRoutingModule { }
