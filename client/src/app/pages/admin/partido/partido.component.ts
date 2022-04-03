import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EquipoService } from 'src/app/shared/services/equipo.service';
import { PartidoService } from 'src/app/shared/services/partido.service';
import { EstadioService } from 'src/app/core/services/estadio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.scss']
})
export class PartidoComponent implements OnInit {

  equipos = []
  estadios = []
  partidos = []
  estados=[{id:1,Estado:'Sin iniciar'},{id:2,Estado:'Inciado'},{id:3,Estado:'Finalizado'}, {id:4,Estado:'Suspendido'}]
  page = 1;
  pageSize = 4;
  size = 0;
  isOpen=false;
  partido:any=null;
  photo64 = null
  Form = new FormGroup({
    game_date:new FormControl('', [Validators.required]),
    attendees: new FormControl('', [Validators.required]),
    result_local: new FormControl('', [Validators.required]),
    result_visiting: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    id_stadium: new FormControl('', [Validators.required]),
    id_team_local: new FormControl('', [Validators.required]),
    id_team_visiting: new FormControl('', [Validators.required]),
    id_competition: new FormControl('', [Validators.required]),
  });
  
  constructor(private formBuilder: FormBuilder, private equipoService: EquipoService, private partidoService:PartidoService, private estadioService:EstadioService, private router: Router) { }

  ngOnInit(): void {
    this.getpartidos();
    this.getTeams();
    this.getStadiums();
    this.size = this.partidos.length
  }

  getTeams() {
    this.equipoService.getAllteams()
      .subscribe((data) => { this.equipos = data.data },  error => {
        if (error.status == 401) {
          this.router.navigate(['unauthorized']);
        }
      });
  }

  getStadiums() {
    this.estadioService.getEstadios()
      .subscribe((data) => { this.estadios = data.data },  error => {
        if (error.status == 401) {
          this.router.navigate(['unauthorized']);
        }
      });
  }

  formatDate(fecha:Date) {
    const isoDateString =  fecha.toISOString();
    const isoDate = new Date(isoDateString);
    const mySQLDateString = isoDate.toJSON().slice(0, 19).replace('T', ' ');
    return mySQLDateString
  }

  getpartidos() {
    this.partidoService.getAllmatchs()
      .subscribe((data) => { this.partidos = data.data;console.log(this.partidos)},  error => {
        if (error.status == 401) {
          this.router.navigate(['unauthorized']);
        }
      });
  }

  editar(partido) {
    this.partido = partido;
    console.log(partido);
    this.Form.patchValue(this.partido)
    this.isOpen=true;
  }

  submit(form) {
    if (this.Form.valid) {
      if(!this.partido){
        form.game_date = this.formatDate(form.game_date)
        console.log(form);
        this.partidoService.insertMatch(form)
          .subscribe(res => console.log(res),  error => {
            if (error.status == 401) {
              this.router.navigate(['unauthorized']);
            }
          });
      }else{        
        form.game_date = this.formatDate(form.game_date)
        console.log(form);
        form.id=this.partido.id;
        this.partidoService.updateMatch(form)
          .subscribe(res => console.log(res),  error => {
            if (error.status == 401) {
              this.router.navigate(['unauthorized']);
            }
          });
      }
    }
  }
  
  eliminar(id_partido){
    this.partidoService.deleteMatch(id_partido)
    .subscribe(res => console.log(res));
  }

}
