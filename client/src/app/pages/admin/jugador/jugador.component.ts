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
  equipos = []
  posiciones=[{id:1,val:'Portero'},{id:2,val:'Defensa'},{id:3,val:'Medio'},{id:1,val:'Delantero'}]
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
    status:new FormControl('', [Validators.required]),
    photo:new FormControl(this.photo64, [Validators.required]),
    id_nationality:new FormControl('',[Validators.required] ),

  });

  constructor(private formBuilder: FormBuilder, private paisService: PaisService,private equipoService:JugadorService) { }

  ngOnInit(): void {
    this.getcountries();
    this.size = this.equipos.length
  }

  getcountries() {
    this.paisService.getpaises()
      .subscribe((data) => { this.paises = data.data });
  }

  formatDate(fecha:Date) {
    const isoDateString =  fecha.toISOString();
    const isoDate = new Date(isoDateString);
    const mySQLDateString = isoDate.toJSON().slice(0, 19).replace('T', ' ');
    return mySQLDateString
  }

  getequipos() {
    this.equipoService.getAlljugadors()
      .subscribe((data) => { this.equipos = data.data;console.log(this.equipos)});

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
        form.foundation_date = this.formatDate(form.foundation_date)
        console.log(form);
        this.equipoService.insertTeam(form)
          .subscribe(res => console.log(res));
      }else{
        form.photo = this.photo64
        form.foundation_date = this.formatDate(form.foundation_date)
        console.log(form);
        form.id=this.equipo.id;
        this.equipoService.updateTeam(form)
          .subscribe(res => console.log(res));
      }
    }
  }
  eliminar(id_equipo){
    this.equipoService.deleteTeam(id_equipo)
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
