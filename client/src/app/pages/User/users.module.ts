import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../src/material.module';
//Route
import { UserRoutingModule } from './user.routing.module';

// Components
import { RegistroComponent } from './registro/registro.component';

// Libs

@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
  ,exports:[RegistroComponent]
})
export class UsersModule { }
