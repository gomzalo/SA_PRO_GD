import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

// Modules
import { SharedModule } from "../../shared/shared.module";

// Libs
import { CountToModule } from 'angular-count-to';
import { MatSelectModule } from '@angular/material/select';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from 'src/material.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    AngularDualListBoxModule,
    MatSelectModule,
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    CountToModule,
    MaterialModule,
    FormsModule,
    NgbModule
  ]
})
export class PagesModule { }