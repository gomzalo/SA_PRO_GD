import { Component, OnInit } from '@angular/core';
import { withLatestFrom } from 'rxjs/operators';
import { EquipoService } from 'src/app/shared/services/equipo.service';
import { ClienteService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-datos-estadisticos',
  templateUrl: './datos-estadisticos.component.html',
  styleUrls: ['./datos-estadisticos.component.scss']
})
export class DatosEstadisticosComponent implements OnInit {

  selectedReporte = 0;
  equipos
  equipo = 0
  cantidad = 0
  tipo = 0
  orden = -1
  report_data = {}
  tipos = [{ id: '0', value: 'Jugador' }, { id: '1', value: 'Tecnico' }]
  reportes = [
    { id: 1, val: 'Jugadores o Tecnicos de X equipo' },
    { id: 2, val: 'Jugadores o Tecnicos Mayores a X Años' },
    { id: 3, val: 'Jugadores o Tecnicos menores a X Años' },
    { id: 4, val: 'Equipos que participaron en X Competicion' },
    { id: 5, val: 'Equipos de X pais' },
    { id: 6, val: 'Equipos con X años de antigüedad' },
    { id: 8, val: 'Estadios con capacidad menor o igual a X' },
    { id: 11, val: 'Partidos donde hubo al menos X goles' },
  ];

  getequipos() {
    this.equipoService.getAllteams()
      .subscribe((data) => { this.equipos = data.data; console.log(this.equipos) });
  }
  constructor(private equipoService: EquipoService, private clientService: ClienteService) {

  }

  ngOnInit(): void {
    this.getequipos();
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
      case 11:
        this.getReporte11();
        break;
      case 12:
        this.getReporte12();
        break;
      case 13:
        this.getReporte13();
        break;
      case 14:
        this.getReporte14();
        break;
      case 15:
        this.getReporte15();
        break;
      case 16:
        this.getReporte16();
        break;
      case 17:
        this.getReporte17();
        break;

    }
  }

  getReporte1() {
    this.clientService.reporte1('0')
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }
  getReporte2() {
    this.clientService.reporte2(this.cantidad, this.tipo)
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }

  getReporte3() {
    this.clientService.reporte3(this.cantidad, this.tipo)
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }

  getReporte4() {
    this.clientService.reporte4('')
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }

  getReporte5() {
    this.clientService.reporte5('')
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }


  getReporte6() {
    this.clientService.reporte6(this.cantidad)
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }


  getReporte7() {
    this.clientService.reporte7('')
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }


  getReporte8() {
    this.clientService.reporte8(this.cantidad)
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }



  getReporte9() {
    this.clientService.reporte9('')
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }


  getReporte10() {
    this.clientService.reporte10(this.cantidad, this.tipo)
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }


  getReporte11() {
    this.clientService.reporte11(this.cantidad)
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }


  getReporte12() {
    this.clientService.reporte11(this.cantidad)
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }


  getReporte13() {
    this.clientService.reporte12(this.cantidad,'')
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }


  getReporte14() {
    this.clientService.reporte13(this.cantidad,'','')
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }


  getReporte15() {
    this.clientService.reporte14(this.cantidad,'')
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }


  getReporte16() {
    this.clientService.reporte16(this.cantidad,'')
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }

  getReporte17() {
    this.clientService.reporte17(this.cantidad)
      .subscribe((data) => { this.report_data = data.data; console.log(this.report_data); });
  }




  descargar() {
    console.log(this.selectedReporte)
  }



}
