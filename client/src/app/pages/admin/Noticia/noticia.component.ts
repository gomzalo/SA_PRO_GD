
import { NoticiaService } from '../../../shared/services/noticia.service';

import { EquipoService } from '../../../shared/services/equipo.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

interface Country {
  id?: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}




@Component({
  selector: 'app-noticias',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {
  noticias = []
  equipos = []
  closeResult = '';
  page = 1;
  pageSize = 4;
  size = 0;
  notice: any;
  isOpen=false;

  Form = new FormGroup({
    id_team: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl(this.formatDate(), [Validators.required, Validators.minLength(8)]),
    id_user:new FormControl(this.authService.getSesion().id_usuario, [Validators.required]),

  });

  constructor(private noticiaService: NoticiaService,private equipoService: EquipoService,private authService:AuthService, private router: Router) {

  }
  
  formatDate() {
    const isoDateString =  new Date().toISOString();
    const isoDate = new Date(isoDateString);
    const mySQLDateString = isoDate.toJSON().slice(0, 19).replace('T', ' ');
    return mySQLDateString
  }
  ngOnInit(): void {
    this.getnoticias();
    this.getequipos();
    this.size = this.noticias.length

  }

  getnoticias() {
    this.noticiaService.getAllNotices()
      .subscribe((data) => { this.noticias = data.data },  error => {
        if (error.status == 401) {
          this.router.navigate(['unauthorized']);
        }
      });
  }

  getequipos() {
    this.equipoService.getAllteams()
      .subscribe((data) => { this.equipos = data.data;console.log(this.equipos) },  error => {
        if (error.status == 401) {
          this.router.navigate(['unauthorized']);
        }
      });
  }


  submit(form){
    if (this.Form.valid) {
        console.log(form);
        this.noticiaService.insertNotice(form)
          .subscribe(res => console.log(res));
    
    }
  }

  editar(noticia, content) {
 
    this.notice = noticia;
    this.isOpen=true;

  }
}
