import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotEmailComponent } from './forgot-email/forgot-email.component';

import { LoginComponent } from './login/login.component';
import { RestarPasswordComponent } from './restar-password/restar-password.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },{
        path: 'forgot',
        component: ForgotEmailComponent
    },{
        path: 'reset-password',
        component: RestarPasswordComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
