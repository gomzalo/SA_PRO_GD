import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { NoticiaService } from 'src/app/shared/services/noticia.service';
import { ClienteService } from 'src/app/shared/services/client.service';


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
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private noticiaService: NoticiaService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getAllNoticias();
  }


  getUser() {
    let user_id = this.authService.getSesion().id_usuario;
    this.userService.getUser(user_id)
      .subscribe((data) => {
        this.user = data.data[0];
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
      });
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
      });

  }

  getAllNoticias() {
    this.noticiaService.getAllNotices()
      .subscribe((data) => {
        this.noticias=this.noticias.concat(data.data);
        console.log(this.noticias);
      });

  }



}
