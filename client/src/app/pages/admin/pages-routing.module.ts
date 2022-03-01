import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',  loadChildren: () => import('./dashboard/components/dashboard.module').then(m => m.DashboardModule) },
  { path: 'users',  loadChildren: () => import('./users/components/users.module').then(m => m.UsersModule) },
  { path: 'business',  loadChildren: () => import('./business/components/business.module').then(m => m.BusinessModule) },
  { path: 'proyects',  loadChildren: () => import('./proyects/components/proyects.module').then(m => m.ProyectsModule) },
  { path: 'proyects-assign',  loadChildren: () => import('./proyects-assign/components/proyects-assign.module').then(m => m.ProyectsAssignModule) },
  { path: 'branchs',  loadChildren: () => import('./branchs/components/branches.module').then(m => m.BranchsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
