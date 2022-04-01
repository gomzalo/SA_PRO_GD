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
import { EstadioComponent } from './estadio/estadio.component';
import { UnauthorizedComponent } from '../unauthorized/unauthorized.component';
import { PartidoComponent } from './partido/partido.component';

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
    path: 'unauthorized',
    component: UnauthorizedComponent
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
  },{
    path: 'estadio',
    component: EstadioComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AmbosGuard]
  },
  {
    path: 'partido',
    component: PartidoComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
