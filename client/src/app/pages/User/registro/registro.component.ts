import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PaisService } from '../../../shared/services/pais.service'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  genero = [{ id: 'M', value: 'Masculino' }, { id: 'F', value: 'Femenino' }, { id: 'a', value: 'Lo que sea' },]
  paises = []
  photo64= null
  RegistroForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
    confirmpass: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    fecha_nac: new FormControl('', [Validators.required]),
    fecha_registro: new FormControl(new Date(), [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    id_pais: new FormControl('', [Validators.required]),
    id_estado: new FormControl(2, [Validators.required]),
    id_rol: new FormControl(3, [Validators.required]),
    phone : new FormControl('', [Validators.required,Validators.minLength(8)]),
    photo : new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(1)]),
    membership: new FormControl(false, [Validators.required]),

  });

  constructor(private formBuilder: FormBuilder, private paisService: PaisService) { }

  ngOnInit(): void {
    this.getcountries();
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.RegistroForm.controls[controlName].hasError(errorName);
  }

  getcountries() {
    this.paisService.getpaises()
      .subscribe((data) => { this.paises = data });
  }


  submit(form) {
  console.log(form);
    if (this.RegistroForm.valid) {
      if(form.pass==form.confirmpass){
        form.photo=
        console.log(form);
      }
    }
  }

  onFileChange(event) {
    
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
    console.log(reader.result);
    this.photo64=reader.result;

    };
  }

}
