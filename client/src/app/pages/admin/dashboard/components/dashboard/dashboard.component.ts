import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import {NoticiaService} from 'src/app/shared/services/noticia.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 user={}
 noticias=[]
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService:UserService,
    private noticiaService:NoticiaService,
  ) { }

  ngOnInit(): void {
    this.getUser()
  }


  
  getUser() {
    let user_id = this.authService.getSesion().id_usuario;
    this.userService.getUser(user_id)
      .subscribe((data) => {
        this.user = data.data[0];
      });
  }

  getNoticias(team:Number) {
    this.noticiaService.getAllNoticesbyTeam(team)
      .subscribe((data) => {
        this.noticias += data.data;
        console.log(this.noticias);
      });

  }



}
