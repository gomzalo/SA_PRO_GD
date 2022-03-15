import { Component, OnInit} from '@angular/core';
import { NoticiaService } from '../../../shared/services/noticia.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  closeResult = '';
  page = 1;
  pageSize = 4;
  size = 0;
  countries: Country[];
  notice: any;
  isOpen=false;

  constructor(private noticiaService: NoticiaService, private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.getnoticias();
    this.size = this.noticias.length

  }
  getnoticias() {
    this.noticiaService.getAllNotices()
      .subscribe((data) => { this.noticias = data });

  }


  editar(noticia, content) {
 
    this.notice = noticia;
    this.isOpen=true;

  }
}
