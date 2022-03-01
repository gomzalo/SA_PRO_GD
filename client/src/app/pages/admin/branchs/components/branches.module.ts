import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Route
import { BranchsRoutingModule } from './branchs-routing.module';

// Components
import { BranchsComponent } from './branchs/branchs.component';
import { FormBranchsComponent } from './form-branchs/form-branchs.component';

// Libs
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../../shared/shared.module';
import { CountToModule } from 'angular-count-to';

@NgModule({
  declarations: [BranchsComponent, FormBranchsComponent],
  imports: [
    CommonModule,
    BranchsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDatatableModule,
    SharedModule,
    CountToModule
  ]
})
export class BranchsModule { }
