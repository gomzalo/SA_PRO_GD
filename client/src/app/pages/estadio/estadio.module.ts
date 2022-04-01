import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadioRoutingModule } from './estadio-routing.module';
import { RegistarestadioComponent } from './registarestadio/registarestadio.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../src/material.module';

@NgModule({
  declarations: [RegistarestadioComponent],
  imports: [
    CommonModule,
    EstadioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
  ,exports:[RegistarestadioComponent]
})
export class EstadioModule { }
