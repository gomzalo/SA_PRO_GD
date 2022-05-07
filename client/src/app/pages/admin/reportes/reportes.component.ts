import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { withLatestFrom } from 'rxjs/operators';
import { EquipoService } from 'src/app/shared/services/equipo.service';
import { PaisService } from 'src/app/shared/services/pais.service';
import { ReportesService } from 'src/app/shared/services/reportes.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  selectedReporte = 0;
  equipos
  equipo = 0
  paises
  pais = 0
  edad = 0
  gender = ''
  orden = -1
  id_country = 0
  id_team = 0
  membership = 0
  report_data = {}
  genero = [{ id: 'M', value: 'Masculino' }, { id: 'F', value: 'Femenino' }, { id: 'U', value: 'Lo que sea' },]
  reportes = [
    { id: 1, val: 'Usuarios Suscritos a X equipo' },
    { id: 2, val: 'Usuario Con o Sin Membresía' },
    { id: 3, val: 'Usuarios que Mas membresías han adquirido' },
    { id: 4, val: 'Usuarios que más dinero han gastado' },
    { id: 5, val: 'Usuarios de X País' },
    { id: 6, val: 'Usuarios de X genero' },
    { id: 7, val: 'Usuarios con al menos X años de edad' },
    { id: 8, val: 'Empleados que MAS/MENOS noticias han publicado' },
    { id: 9, val: 'Empleados que MAS/MENOS noticias han publicado de X Equipo' },
    { id: 10, val: 'Bitácoras de los administradores.' },
  ];

  getequipos() {
    this.equipoService.getAllteams()
      .subscribe((data) => { this.equipos = data.data; console.log(this.equipos) });
  }

  getpaises() {
    this.paisService.getpaises()
      .subscribe((data) => { this.paises = data.data; console.log(this.paises) });
  }

  constructor(private equipoService: EquipoService, private paisService: PaisService, private reportesService: ReportesService, private router: Router) {
  }

  ngOnInit(): void {
    this.getequipos();
    this.getpaises();
  }

  getdata() {
    switch (this.selectedReporte) {
      case 1:
        this.getReporte1();
        break;
      case 2:
        this.getReporte2();
        break;
      case 3:
        this.getReporte3();
        break;
      case 4:
        this.getReporte4();
        break;
      case 5:
        this.getReporte5();
        break;
      case 6:
        this.getReporte6();
        break;
      case 7:
        this.getReporte7();
        break;
      case 8:
        this.getReporte8();
        break;
      case 9:
        this.getReporte9();
        break;
      case 10:
        this.getReporte10();
        break;

      default:
        break;
    }
  }

  getReporte1() {
    this.reportesService.reporte1(this.equipo)
      .subscribe(
        (data) => { this.report_data = data.data; console.log(this.report_data); }, 
        error => {
          console.log(error)
          if (error.status== 401) {
            this.router.navigate(['unauthorized']);
          }
        })
      ;
  }

  getReporte2() {
    this.reportesService.reporte2(this.membership)
      .subscribe(
        (data) => { this.report_data = data.data; console.log(this.report_data); }, 
        error => {
          console.log(error)
          if (error.status== 401) {
            this.router.navigate(['unauthorized']);
          }
        })
      ;
  }

  getReporte3() {
    this.reportesService.reporte3()
      .subscribe(
        (data) => { this.report_data = data.data; console.log(this.report_data); }, 
        error => {
          console.log(error)
          if (error.status== 401) {
            this.router.navigate(['unauthorized']);
          }
        })
      ;
  }

  getReporte4() {
    this.reportesService.reporte4()
      .subscribe(
        (data) => { this.report_data = data.data; console.log(this.report_data); }, 
        error => {
          console.log(error)
          if (error.status== 401) {
            this.router.navigate(['unauthorized']);
          }
        })
      ;
  }

  getReporte5() {
    this.reportesService.reporte5(this.id_country)
      .subscribe(
        (data) => { this.report_data = data.data; console.log(this.report_data); }, 
        error => {
          console.log(error)
          if (error.status== 401) {
            this.router.navigate(['unauthorized']);
          }
        })
      ;
  }

  getReporte6() {
    this.reportesService.reporte6(this.gender)
      .subscribe(
        (data) => { this.report_data = data.data; console.log(this.report_data); }, 
        error => {
          console.log(error)
          if (error.status== 401) {
            this.router.navigate(['unauthorized']);
          }
        })
      ;
  }

  getReporte7() {
    this.reportesService.reporte7(this.edad)
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); },
      error => {
        if (error.status == 401) {
          this.router.navigate(['unauthorized']);
        }
      });
  }

  getReporte8() {
    this.reportesService.reporte8(this.orden)
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); },
      error => {
        if (error.status == 401) {
          this.router.navigate(['unauthorized']);
        }
      });
  }

  getReporte9() {
    this.reportesService.reporte9(this.orden, this.equipo)
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); },
      error => {
        if (error.status == 401) {
          this.router.navigate(['unauthorized']);
        }
      });
  }

  getReporte10() {
    this.reportesService.reporte10()
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); }),
      error => {
        if (error.status == 401) {
          this.router.navigate(['unauthorized']);
        }
      };
  }



  descargar() {
    console.log(this.selectedReporte)
  }



}
