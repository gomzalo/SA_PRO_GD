import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Route
import { UsersRoutingModule } from './users-routing.module';

// Components
import { UsersComponent } from './users/users.component';

// Libs
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../../shared/shared.module';
import { CountToModule } from 'angular-count-to';
import { FormUsersComponent } from './form-users/form-users.component';
import { InfoUserComponent } from './info-user/info-user.component';

@NgModule({
  declarations: [UsersComponent, FormUsersComponent, InfoUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDatatableModule,
    SharedModule,
    CountToModule
  ]
})
export class UsersModule { }
