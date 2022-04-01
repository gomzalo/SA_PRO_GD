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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {UsersModule} from '../User/users.module';
import {EstadioModule} from '../estadio/estadio.module';
import { NoticiaComponent } from './Noticia/noticia.component';
import { ReportesComponent } from './reportes/reportes.component';
import { EquipoComponent } from './equipo/equipo.component';
import { JugadorComponent } from './jugador/jugador.component';
import { TecnicoComponent } from './tecnico/tecnico.component';
import { ProfileComponent } from './profile/profile.component';
import { EstadioComponent } from './estadio/estadio.component';
import { PartidoComponent } from './partido/partido.component';
import { ComptenciaComponent } from './comptencia/comptencia.component';
import { CompetenciaModule } from '../competencia/competencia.module';

@NgModule({
  declarations: [UsersComponent, NoticiaComponent,ReportesComponent,EquipoComponent, JugadorComponent, TecnicoComponent,ProfileComponent, EstadioComponent, PartidoComponent, ComptenciaComponent],
  imports: [
    AngularDualListBoxModule,
    MatSelectModule,
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    CountToModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    UsersModule,
    CompetenciaModule,
    EstadioModule
    ]
})
export class PagesModule { }
