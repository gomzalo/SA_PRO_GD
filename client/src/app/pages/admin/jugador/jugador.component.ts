import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JugadorService } from 'src/app/shared/services/jugador.service';
import { PaisService } from 'src/app/shared/services/pais.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent implements OnInit {

  paises = []
  jugadores = []
  posiciones=[{id:1,val:'Portero'},{id:2,val:'Defensa'},{id:3,val:'Medio'},{id:4,val:'Delantero'}]
  page = 1;
  pageSize = 4;
  size = 0;
  isOpen=false;
  equipo:any=null;
  photo64 = null
  Form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    birth_date:new FormControl('', [Validators.required]),
    position:new FormControl('', [Validators.required]),
    status:new FormControl(1, [Validators.required]),
    photo:new FormControl(this.photo64, ),
    id_nationality:new FormControl('',[Validators.required] ),

  });

  constructor(private formBuilder: FormBuilder, private paisService: PaisService,private jugadorService:JugadorService) { }

  ngOnInit(): void {
    this.getcountries();
    this.getJugadores();
    this.size = this.jugadores.length
  }

  getcountries() {
    this.paisService.getpaises()
      .subscribe((data) => { this.paises = data.data });
  }

  getJugadores() {
    this.jugadorService.getAlljugadors()
      .subscribe((data) => { this.jugadores = data.data;console.log(this.jugadores); });
  }

  formatDate(fecha:Date) {
    const isoDateString =  fecha.toISOString();
    const isoDate = new Date(isoDateString);
    const mySQLDateString = isoDate.toJSON().slice(0, 19).replace('T', ' ');
    return mySQLDateString
  }



  editar(equipo) {
 
    this.equipo = equipo;
    console.log(equipo);
    this.photo64= equipo.photo;
    delete equipo['photo'];
    this.Form.patchValue(this.equipo)
    
    this.isOpen=true;
  }


  submit(form) {

    if (this.Form.valid) {
      if(!this.equipo){
        form.photo = this.photo64
        form.birth_date = this.formatDate(form.birth_date)
        console.log(form);
        this.jugadorService.insertJugador(form)
          .subscribe(res => console.log(res));
      }else{
        form.photo = this.photo64
        form.birth_date = this.formatDate(form.birth_date)
        console.log(form);
        form.id=this.equipo.id;
        this.jugadorService.updateJugador(form)
          .subscribe(res => console.log(res));
      }
    }
  }
  eliminar(id_equipo){
    this.jugadorService.deleteJugador(id_equipo)
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
