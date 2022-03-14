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
  selector: 'app-notices',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {
  notices = []
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
    this.getnotices();
    this.size = this.notices.length

  }
  getnotices() {
    this.noticiaService.getAllNotices()
      .subscribe((data) => { this.notices = data });

  }


  editar(noticia, content) {
 
    this.notice = noticia;
    this.isOpen=true;

  }
}
