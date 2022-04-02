import { Component, Input,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EstadioService } from 'src/app/core/services/estadio.service';
import { PaisService } from 'src/app/shared/services/pais.service';

@Component({
  selector: 'app-registarestadio',
  templateUrl: './registarestadio.component.html',
  styleUrls: ['./registarestadio.component.scss']
})
export class RegistarestadioComponent implements OnInit {
  @Input() editData: any;
  paises = [];
  photo64 = null;
  editcomplete:any;
  estados=[{id:1,Estado:'Disponible'},{id:2,Estado:'Remodelación'}]
  RegistroForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    fecha_inaguracion: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    id_pais: new FormControl('', [Validators.required]),
    id_estado: new FormControl(2, [Validators.required]),
    foto: new FormControl('photo', ),
    status: new FormControl('', ),
    capacidad: new FormControl('', [Validators.required, Validators.min(1)]),
  });
  constructor(private formBuilder: FormBuilder, private estadioService:EstadioService, private paisService: PaisService) { 
    
  }


  ngOnInit(): void {
    this.getcountries();
    this.RegistroForm.patchValue(this.editData);
    this.editcomplete=this.editData;
    if (this.editData) {
   
      this.photo64= this.editData.photo;
      delete this.editData['photo'];

      this.editData.nombre = this.editData.nombre;
      this.editData.fecha_inaguracion=this.editData.fecha_inaguracion;
      this.editData.capacidad = this.editData.capacidad;
      this.editData.id_pais = this.editData.id_pais;
      this.editData.direccion=this.editData.direccion;
      this.editData.foto = this.editData.foto;
      this.editData.status = this.editData.status;
      this.RegistroForm.patchValue(this.editData)
    }
  }

  formatDate(date: Date) {
    const isoDateString = date.toISOString();
    const isoDate = new Date(isoDateString);
    const mySQLDateString = isoDate.toJSON().slice(0, 19).replace('T', ' ');
    return mySQLDateString
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.RegistroForm.controls[controlName].hasError(errorName);
  }

  getcountries() {
    this.paisService.getpaises()
      .subscribe((data) => { this.paises = data.data;console.log(this.paises); });
  }

  onFileChange(event) {

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.photo64 = reader.result;

    };
  }

  submit(form) {

    if(!this.editData){
      this.estadioService.createEstadio(this.RegistroForm.value).subscribe(
        resp=>{
                let respueta:any = resp;
                
                if(respueta.status!=true){
                 alert('Error enviando');
                  return;
                }
                alert(respueta.msg);
    
            },
            error=> {
             alert(error.error.msg);
           }
      );
    }else{
      this.estadioService.updateEstadio(this.RegistroForm.value).subscribe(
        resp=>{
                let respueta:any = resp;
                
                if(respueta.status!=true){
                 alert('Error enviando');
                  return;
                }
                alert(respueta.msg);
    
            },
            error=> {
             alert(error.error.msg);
           }
      );
    }
  }

}
