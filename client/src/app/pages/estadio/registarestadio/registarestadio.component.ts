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
  RegistroForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    foundation_date: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    id_country: new FormControl('', [Validators.required]),
    id_estado: new FormControl(2, [Validators.required]),
    photo: new FormControl('photo', ),
    capacity: new FormControl('', [Validators.required, Validators.min(1)]),
  });
  constructor(private formBuilder: FormBuilder, private estadioService:EstadioService, private paisService: PaisService) { 
    
  }


  ngOnInit(): void {
    this.getcountries();
    this.RegistroForm.patchValue(this.editData);
    console.log(this.editData);
    if (this.editData) {
   
      this.photo64= this.editData.photo;
      delete this.editData['photo'];

      this.editData.name = this.editData.nombre;
      this.editData.foundation_date=this.editData.fecha_inaguracion;
      this.editData.address=this.editData.direccion;
      this.editData.capacity = this.editData.capacidad;
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

}
