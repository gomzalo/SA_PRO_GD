
import { NoticiaService } from '../../../shared/services/noticia.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


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
  equipos = [{id_equipo:1,nombre:'guastapoya',abreviado:'guasta',id_pais:5,is_club:true}]
  closeResult = '';
  page = 1;
  pageSize = 4;
  size = 0;
  notice: any;
  isOpen=false;

  Form = new FormGroup({
    id_equipo: new FormControl('', [Validators.required]),
    titulo: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    fecha: new FormControl(this.formatDate(), [Validators.required, Validators.minLength(8)]),

  });

  constructor(private noticiaService: NoticiaService,) {

  }
  
  formatDate() {
    const isoDateString =  new Date().toISOString();
    const isoDate = new Date(isoDateString);
    const mySQLDateString = isoDate.toJSON().slice(0, 19).replace('T', ' ');
    return mySQLDateString
  }
  ngOnInit(): void {
    this.getnoticias();
    this.size = this.noticias.length

  }
  getnoticias() {
    this.noticiaService.getAllNotices()
      .subscribe((data) => { this.noticias = data });

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
