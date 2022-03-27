import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaisService } from 'src/app/shared/services/pais.service';
import { EquipoService } from 'src/app/shared/services/equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {
  paises = []
  equipos = []
  page = 1;
  pageSize = 4;
  size = 0;
  isOpen=false;
  equipo={}
  photo64 = null
  Form = new FormGroup({
    id_team: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    abreviado: new FormControl('', [Validators.required]),
    id_pais: new FormControl('', [Validators.required]),
    is_club:new FormControl('', [Validators.required]),
    foundation_date:new FormControl('', [Validators.required]),
    photo:new FormControl('', [Validators.required]),

  });
  
  constructor(private formBuilder: FormBuilder, private paisService: PaisService,private equipoService:EquipoService) { }

  ngOnInit(): void {
    this.getequipos();
    this.size = this.equipos.length
  }



  formatDate(fecha:Date) {
    const isoDateString =  fecha.toISOString();
    const isoDate = new Date(isoDateString);
    const mySQLDateString = isoDate.toJSON().slice(0, 19).replace('T', ' ');
    return mySQLDateString
  }

  getequipos() {
    this.equipoService.getAllteams()
      .subscribe((data) => { this.equipos = data });

  }


  editar(equipo, content) {
 
    this.equipo = equipo;
    this.isOpen=true;

  }


  submit(form) {

    if (this.Form.valid) {
      if (form.password == form.confirmpass) {
        form.photo = this.photo64
        form.birth_date = this.formatDate(form.birth_date)
        console.log(form);
        this.equipoService.insertteam(form)
          .subscribe(res => console.log(res));
      }
    }
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
