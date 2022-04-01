import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Layout
import { ContentLayoutComponent } from './shared/components/layout/content-layout/content-layout.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VerifyAcountComponent } from './pages/verify-acount/verify-acount.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
// Guards
// import { AdminGuard } from './core/guards/auth/admin.guard';
// import { UserGuard } from './core/guards/auth/user.guard';

const routes: Routes = [
 
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: '',
    component: ContentLayoutComponent,
    loadChildren: () => import('./pages/admin/pages.module').then(m => m.PagesModule),
    // canActivate: [AdminGuard]
  },
  { path: 'users',  loadChildren: () => import('./pages/User/users.module').then(m => m.UsersModule) },
  { path: 'estadio',  loadChildren: () => import('./pages/estadio/estadio.module').then(m => m.EstadioModule) },
  {
    path: 'login',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
  },
  {
    path: 'verify/:id',
    component: VerifyAcountComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
