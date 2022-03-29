import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { NoticiaComponent } from './Noticia/noticia.component'
import { AdminGuard } from 'src/app/core/guards/auth/admin.guard';
import { ReportesComponent } from './reportes/reportes.component';
import { ProfileComponent } from './profile/profile.component';
import { EquipoComponent } from './equipo/equipo.component';
import { AmbosGuard } from 'src/app/core/guards/ambos.guard';
import { JugadorComponent } from './jugador/jugador.component';
import { TecnicoComponent } from './tecnico/tecnico.component';

const routes: Routes = [
  { path: 'home', 
    canActivate: [AmbosGuard],
    loadChildren: () => import('./dashboard/components/dashboard.module').then(m => m.DashboardModule) 
    },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'reportesadmin',
    component: ReportesComponent
  },
  {
    path: 'noticias',
    component: NoticiaComponent
  },
  {
    path: 'jugadores',
    component: JugadorComponent
  },
  {
    path: 'equipo',
    component: EquipoComponent
  },
  {
    path: 'tecnico',
    component: TecnicoComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AmbosGuard]
  },
  { path: 'proyects', loadChildren: () => import('./proyects/components/proyects.module').then(m => m.ProyectsModule) },
  { path: 'proyects-assign', loadChildren: () => import('./proyects-assign/components/proyects-assign.module').then(m => m.ProyectsAssignModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
