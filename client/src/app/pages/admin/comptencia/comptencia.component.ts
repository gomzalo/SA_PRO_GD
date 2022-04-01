import { Component, OnInit } from '@angular/core';
import { CompetenciaService } from 'src/app/shared/services/competencia.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface Country {
  id?: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}
@Component({
  selector: 'app-comptencia',
  templateUrl: './comptencia.component.html',
  styleUrls: ['./comptencia.component.scss']
})
export class ComptenciaComponent implements OnInit {
  isOpen=false;
  closeResult = '';
  competencia = '';
  page = 1;
  pageSize = 4;
  size = 0;
  constructor(private competenciaService:CompetenciaService) { }
  competencias:any;
  ngOnInit(): void {
    this.getCompetencias();
    console.log(this.competencias);
  }

  getCompetencias(){
    this.competenciaService.getCompetencias()
    .subscribe(
      resp=>{
          let respueta:any = resp;
          
          this.competencias=(respueta.data);
          console.log(this.competencias);
          
      },
      error=> {
       console.log(error.error);
       alert(error.error.msg);
     }

    );
  }

  editar(competencia, content) {
 
    this.competencia = competencia;
    this.isOpen=true;

  }

  cerrar(){
    this.isOpen=false;
    this.competencia=null
  }



}
