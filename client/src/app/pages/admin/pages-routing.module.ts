import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',  loadChildren: () => import('./dashboard/components/dashboard.module').then(m => m.DashboardModule) },
  { path: 'users',  loadChildren: () => import('./users/components/users.module').then(m => m.UsersModule) },
  { path: 'proyects',  loadChildren: () => import('./proyects/components/proyects.module').then(m => m.ProyectsModule) },
  { path: 'proyects-assign',  loadChildren: () => import('./proyects-assign/components/proyects-assign.module').then(m => m.ProyectsAssignModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
