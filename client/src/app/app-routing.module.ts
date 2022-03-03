import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layout
import { ContentLayoutComponent } from './shared/components/layout/content-layout/content-layout.component';

// Guards
// import { AdminGuard } from './core/guards/auth/admin.guard';
// import { UserGuard } from './core/guards/auth/user.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: ContentLayoutComponent,
    loadChildren: () => import('./pages/admin/pages.module').then(m => m.PagesModule),
    // canActivate: [AdminGuard]
  },
  {
    path: '',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
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
