import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaisService } from 'src/app/shared/services/pais.service';
import { EquipoService } from 'src/app/shared/services/equipo.service';
import { Router } from '@angular/router';

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
  equipo:any=null;
  photo64 = null
  Form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    id_country: new FormControl('', [Validators.required]),
    foundation_date:new FormControl('', [Validators.required]),
    photo:new FormControl('', ),

  });
  
  constructor(private formBuilder: FormBuilder, private paisService: PaisService,private equipoService:EquipoService,private router:Router) { }

  ngOnInit(): void {
    this.getequipos();
    this.getcountries();
    this.size = this.equipos.length
  }

  getcountries() {
    this.paisService.getpaises()
      .subscribe((data) => { this.paises = data.data });
  }

  formatDate(date: Date) {
    const isoDateString = date.toISOString();
    const isoDate = new Date(isoDateString);
    const mySQLDateString = isoDate.toJSON().slice(0, 19).replace('T', ' ');
    return mySQLDateString
  }

  getequipos() {
    this.equipoService.getAllteams()
      .subscribe((data) => { this.equipos = data.data;console.log(this.equipos)}, 
      error => {
        console.log(error)
        if (error.status== 401) {
          this.router.navigate(['unauthorized']);
        }
      });

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
    
        console.log(form);
        this.equipoService.insertTeam(form)
          .subscribe(res => console.log(res), 
          error => {
            console.log(error)
            if (error.status== 401) {
              this.router.navigate(['unauthorized']);
            }
          });
      }else{
        form.photo = this.photo64
        console.log(form.foundation_date);
        form.foundation_date = this.formatDate(new Date(form.foundation_date))
        console.log(form);
        form.id=this.equipo.id;
        this.equipoService.updateTeam(form)
          .subscribe(res => console.log(res), 
          error => {
            console.log(error)
            if (error.status== 401) {
              this.router.navigate(['unauthorized']);
            }
          });
      }
    }
  }
  eliminar(id_equipo){
    this.equipoService.deleteTeam(id_equipo)
    .subscribe(res => console.log(res), 
    error => {
      console.log(error)
      if (error.status== 401) {
        this.router.navigate(['unauthorized']);
      }
    });
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
