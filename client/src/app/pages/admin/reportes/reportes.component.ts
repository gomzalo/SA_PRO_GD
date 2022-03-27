import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  selectedReporte=0;
  reportes = [
    {id:1,val:'Usuarios Suscritos a X equipo'},
    {id:2,val:'Usuario Con o Sin Membresía'},
    {id:3,val:'Usuarios que Mas membresías han adquirido'},
    {id:4,val:'Usuarios que más dinero han gastado'},
    {id:5,val:'Usuarios de X País'},
    {id:6,val:'Usuarios de X genero'},
    {id:7,val:'Usuarios con al menos X años de edad'},
    {id:8,val:'Empleados que MAS/MENOS noticias han publicado'},
    {id:9,val:'Empleados que MAS/MENOS noticias han publicado de X Equipo'},
    {id:10,val:'Bitácoras de los administradores.'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  print(){
    console.log(this.selectedReporte)
  }

}
