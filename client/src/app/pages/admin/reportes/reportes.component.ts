import { Component, OnInit } from '@angular/core';
import { withLatestFrom } from 'rxjs/operators';
import { EquipoService } from 'src/app/shared/services/equipo.service';
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
  edad=0
  gender = ''
  orden = -1
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
  constructor(private equipoService: EquipoService, private reportesService: ReportesService) {

  }

  ngOnInit(): void {
    this.getequipos();
  }

  getdata() {
    switch (this.selectedReporte) {
      case 1:

        break;
      case 2:

        break;
      case 3:

        break;
      case 4:

        break;
      case 5:

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

  getReporte6() {
    this.reportesService.reporte6(this.gender)
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }
  getReporte7() {
    this.reportesService.reporte7(this.edad)
    .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }

  getReporte8() {
    this.reportesService.reporte8(this.orden)
    .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }

  getReporte9() {
    this.reportesService.reporte9(this.orden,this.equipo)
    .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }

  getReporte10() {
    this.reportesService.reporte10()
    .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }



  descargar() {
    console.log(this.selectedReporte)
  }



}
