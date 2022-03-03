import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Route
import { ProyectsRoutingModule } from './proyects-routing.module';

// Components
import { ProyectsComponent } from './proyects/proyects.component';

// Libs
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../../shared/shared.module';
import { CountToModule } from 'angular-count-to';
import { FormProyectsComponent } from './form-proyects/form-proyects.component';

@NgModule({
  declarations: [ProyectsComponent, FormProyectsComponent],
  imports: [
    CommonModule,
    ProyectsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDatatableModule,
    SharedModule,
    CountToModule
  ]
})
export class ProyectsModule { }
