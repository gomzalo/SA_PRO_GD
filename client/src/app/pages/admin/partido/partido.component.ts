import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EquipoService } from 'src/app/shared/services/equipo.service';
import { PartidoService } from 'src/app/shared/services/partido.service';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.scss']
})
export class PartidoComponent implements OnInit {

  equipos = []
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
  
  constructor(private formBuilder: FormBuilder, private equipoService: EquipoService,private partidoService:PartidoService) { }

  ngOnInit(): void {
    this.getpartidos();
    this.getTeams();
    this.size = this.partidos.length
  }

  getTeams() {
    this.equipoService.getAllteams()
      .subscribe((data) => { this.equipos = data.data });
  }

  formatDate(fecha:Date) {
    const isoDateString =  fecha.toISOString();
    const isoDate = new Date(isoDateString);
    const mySQLDateString = isoDate.toJSON().slice(0, 19).replace('T', ' ');
    return mySQLDateString
  }

  getpartidos() {
    this.partidoService.getAllmatchs()
      .subscribe((data) => { this.partidos = data.data;console.log(this.partidos)});

  }


  editar(partido) {
    this.partido = partido;
    console.log(partido);
    this.photo64= partido.photo;
    delete partido['photo'];
    this.Form.patchValue(this.partido)
    
    this.isOpen=true;
  }


  submit(form) {

    if (this.Form.valid) {
      if(!this.partido){
        form.photo = this.photo64
        form.foundation_date = this.formatDate(form.foundation_date)
        console.log(form);
        this.partidoService.insertMatch(form)
          .subscribe(res => console.log(res));
      }else{
        form.photo = this.photo64
        form.foundation_date = this.formatDate(form.foundation_date)
        console.log(form);
        form.id=this.partido.id;
        this.partidoService.updateMatch(form)
          .subscribe(res => console.log(res));
      }
    }
  }
  eliminar(id_partido){
    this.partidoService.deleteMatch(id_partido)
    .subscribe(res => console.log(res));
  }

  onFileChange(event) {

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.photo64 = reader.result;

    };
  }

}
