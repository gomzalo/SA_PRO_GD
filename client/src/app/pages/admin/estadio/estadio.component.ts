import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadioService } from 'src/app/core/services/estadio.service';

interface Country {
  id?: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-estadio',
  templateUrl: './estadio.component.html',
  styleUrls: ['./estadio.component.scss']
})
export class EstadioComponent implements OnInit {
  
  constructor(private estadioServide: EstadioService,private router:Router) { }
  estadios:any=[];
  estadio:any;
  countries: Country[];

  closeResult = '';
  page = 1;
  pageSize = 4;
  size = 0;
  isOpen=false;

  ngOnInit(): void {
    this.getEstadios();
  }

  getEstadios(){
    this.estadioServide.getEstadios()
    .subscribe(
      resp=>{
          let respueta:any = resp;
          console.log(respueta.data);
          
          this.estadios=(respueta.data);
      }, 
      error => {
        console.log(error)
        if (error.status== 401) {
          this.router.navigate(['unauthorized']);
        }
      }

    );
  }

  editar(estadio, content) {
 
    this.estadio = estadio;
    this.isOpen=true;

  }

  cerrar(){
    this.isOpen=false;
    this.estadio=null
  }

}
