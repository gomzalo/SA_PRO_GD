import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { MaterialModule } from 'src/material.module';


//Route
import { DashboardRoutingModule } from './dashboard-routing.module';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';

// Libs
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../../shared/shared.module';
import { CountToModule } from 'angular-count-to';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    MatTabsModule,
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDatatableModule,
    SharedModule,
    CountToModule,
    MaterialModule
  ]
})
export class DashboardModule { }
