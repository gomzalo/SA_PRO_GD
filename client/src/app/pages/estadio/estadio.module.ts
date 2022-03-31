import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadioRoutingModule } from './estadio-routing.module';
import { RegistarestadioComponent } from './registarestadio/registarestadio.component';


@NgModule({
  declarations: [RegistarestadioComponent],
  imports: [
    CommonModule,
    EstadioRoutingModule
  ]
  ,exports:[RegistarestadioComponent]
})
export class EstadioModule { }
