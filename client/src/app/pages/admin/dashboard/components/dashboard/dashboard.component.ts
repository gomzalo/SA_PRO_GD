import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { NoticiaService } from 'src/app/shared/services/noticia.service';
import { ClienteService } from 'src/app/shared/services/client.service';
import {EquipoService} from 'src/app/shared/services/equipo.service'

import {PrediccionService} from 'src/app/shared/services/prediccion.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any = {}
  noticias = []
  favoritos = []
  filtro=0;
  equipos=[]
  equipo1=''
  equipo2=''
  result
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private noticiaService: NoticiaService,
    private clienteService: ClienteService,
    private equipoService:EquipoService,
    private prediccionService:PrediccionService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getAllNoticias();
    this.getallTeams();
  }


  getUser() {
    let user_id = this.authService.getSesion().id_usuario;
    this.userService.getUser(user_id)
      .subscribe((data) => {
        this.user = data.data[0];
        console.log(this.user);
      },  error => {
        if (error.status == 401) {
          this.router.navigate(['unauthorized']);
        }
      });
  }
  getTeams(id_user: Number) {
    this.clienteService.getFavoritosCliente(id_user)
      .subscribe((data) => {
        this.favoritos = data.data;
        for (const team of this.favoritos) {
          console.log(team)
          this.getNoticias(team.id)
        }
      },  error => {
        if (error.status == 401) {
          this.router.navigate(['unauthorized']);
        }
      });
  }

  getallTeams() {
    this.equipoService.getAllteams()
      .subscribe((data) => { this.equipos = data.data; console.log(this.equipos) });
  }

  predict() {
    this.prediccionService.predict(this.equipo1,this.equipo2)
      .subscribe((data) => { this.result= data.data; });
  }

  getdata(){
    this.noticias=[]
    if(this.filtro==1){

      this.getTeams(this.user.id_usuario);
    }else{
      this.getAllNoticias();
    }
    
  }
  getNoticias(team: Number) {
    this.noticiaService.getAllNoticesbyTeam(team)
      .subscribe((data) => {
        this.noticias=this.noticias.concat(data.data);
        console.log(this.noticias);
      },  error => {
        if (error.status == 401) {
          this.router.navigate(['unauthorized']);
        }
      });

  }

  getAllNoticias() {
    this.noticiaService.getAllNotices()
      .subscribe((data) => {
        this.noticias=this.noticias.concat(data.data);
        console.log(this.noticias);
      },  error => {
        if (error.status == 401) {
          this.router.navigate(['unauthorized']);
        }
      });

  }



}
