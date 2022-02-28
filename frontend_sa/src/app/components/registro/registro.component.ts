import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)
  });

  RegistroForm = new FormGroup({
    first_name: new FormControl('',[Validators.required]),
    last_name: new FormControl('',[Validators.required]),
    pass: new FormControl('',[Validators.required]),
    confirmpass: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    fecha_nac: new FormControl('',[Validators.required]),
    fecha_registro: new FormControl('',[Validators.required]),
    direccion: new FormControl('',[Validators.required]),
    id_pais: new FormControl('',[Validators.required]),
    id_estado: new FormControl('',[Validators.required]),
    id_rol: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required]),
    membership: new FormControl('',[Validators.required]),
    
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.RegistroForm.controls[controlName].hasError(errorName);
  }
 
   
  submit(form){
   if(this.form.valid){

   }
  }

}
