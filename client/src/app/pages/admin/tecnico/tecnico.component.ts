import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TecnicoService } from 'src/app/shared/services/tecnico.service';
import { PaisService } from 'src/app/shared/services/pais.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnico',
  templateUrl: './tecnico.component.html',
  styleUrls: ['./tecnico.component.scss']
})
export class TecnicoComponent implements OnInit {

  paises = []
  tecnicos = []
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
    status:new FormControl(1, [Validators.required]),
    photo:new FormControl(this.photo64, ),
    id_country:new FormControl('',[Validators.required] ),

  });

  constructor(private formBuilder: FormBuilder, private paisService: PaisService,private tecnicoService:TecnicoService,private router:Router) { }

  ngOnInit(): void {
    this.getcountries();
    this.getTecnicos();
    this.size = this.tecnicos.length
  }

  getcountries() {
    this.paisService.getpaises()
      .subscribe((data) => { this.paises = data.data });
  }

  getTecnicos() {
    this.tecnicoService.getAllTecnicos()
      .subscribe((data) => { this.tecnicos = data.data;console.log(this.tecnicos); },  error => {
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



  editar(equipo) {
 
    this.equipo = equipo;
    console.log(equipo);
    this.photo64= equipo.photo;
    this.equipo.id_country=equipo.id_nationality;
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
        this.tecnicoService.insertTecnico(form)
          .subscribe(res => console.log(res),  error => {
            if (error.status == 401) {
              this.router.navigate(['unauthorized']);
            }
          });
      }else{
        form.photo = this.photo64
        form.birth_date = this.formatDate(new Date(form.birth_date))
        console.log(form);
        form.id=this.equipo.id;
        this.tecnicoService.updateTecnico(form)
          .subscribe(res => console.log(res),  error => {
            if (error.status == 401) {
              this.router.navigate(['unauthorized']);
            }
          });
      }
    }
  }
  eliminar(id_equipo){
    this.tecnicoService.deleteTecnico(id_equipo)
    .subscribe(res => console.log(res),  error => {
      if (error.status == 401) {
        this.router.navigate(['unauthorized']);
      }
    });
  }

  onFileChange(event) {

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      //console.log(reader.result);
      this.photo64 = reader.result;

    };
  }

}
