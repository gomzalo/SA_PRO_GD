import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Route
import { ProyectsAssignRoutingModule } from './proyects-assign-routing.module';

// Components
import { ProyectsAssignComponent } from './proyects-assign/proyects-assign.component';

// Libs
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../../shared/shared.module';
import { CountToModule } from 'angular-count-to';
import { FormAssignComponent } from './form-assign/form-assign.component';
import { MatSelectModule } from '@angular/material/select';
import { AngularDualListBoxModule } from 'angular-dual-listbox';

@NgModule({
  declarations: [ProyectsAssignComponent, FormAssignComponent],
  imports: [
    AngularDualListBoxModule,
    MatSelectModule,
    CommonModule,
    ProyectsAssignRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDatatableModule,
    SharedModule,
    CountToModule
  ]
})
export class ProyectsAssignModule { }