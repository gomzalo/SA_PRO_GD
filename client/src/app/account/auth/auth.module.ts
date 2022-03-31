import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing';

// Forms
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotEmailComponent } from './forgot-email/forgot-email.component';
import { RestarPasswordComponent } from './restar-password/restar-password.component';

@NgModule({
  declarations: [LoginComponent,ForgotEmailComponent,RestarPasswordComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
