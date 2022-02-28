import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
