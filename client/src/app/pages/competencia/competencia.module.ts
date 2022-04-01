import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetenciaRoutingModule } from './competencia-routing.module';
import { RegistrarcompetenciaComponent } from './registrarcompetencia/registrarcompetencia.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../src/material.module';

@NgModule({
  declarations: [RegistrarcompetenciaComponent],
  imports: [
    CommonModule,
    CompetenciaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

  ],exports: [RegistrarcompetenciaComponent]
})
export class CompetenciaModule { }
