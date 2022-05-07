import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { PaisService } from '../../../shared/services/pais.service'
import { UserService } from '../../../shared/services/user.service'
import { ClienteService } from '../../../shared/services/client.service'




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  genero = [{ id: 'M', value: 'Masculino' }, { id: 'F', value: 'Femenino' }, { id: 'U', value: 'Lo que sea' },]
  roles = [{ id: 1, value: 'Administrador' }, { id: 2, value: 'Empleado' }, { id: 3, value: 'Cliente' },]
  @Input() editData: any;
  editcomplete: any;
  paises = []
  photo64 = null
  rol = -1
  estados = [{ id: 1, Estado: 'Activo' }, { id: 2, Estado: 'Congelado' }, { id: 3, Estado: 'Eliminado' }]
  RegistroForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    confirmpass: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    birth_date: new FormControl('', [Validators.required]),
    signup_date: new FormControl(this.formatDate(new Date()), [Validators.required]),
    address: new FormControl('', [Validators.required]),
    id_country: new FormControl('', [Validators.required]),
    id_estado: new FormControl(2, [Validators.required]),
    id_rol: new FormControl(3, [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    photo: new FormControl('photo',),
    age: new FormControl('', [Validators.required, Validators.min(1)]),
    membership: new FormControl(0, [Validators.required]),

  });

  constructor(
    private formBuilder: FormBuilder,
     private paisService: PaisService,
      private userService: UserService,
      private clientService: ClienteService,
       private authService: AuthService, 
      private router: Router) { }

  ngOnInit(): void {
    this.rol = this.authService.getSesion().id_rol;
    this.rol = this.rol == null ? this.rol = 3 : this.rol;
    console.log(this.rol);
    this.getcountries();
    this.editcomplete = this.editData;
    if (this.editData) {

      this.photo64 = this.editData.photo;
      delete this.editData['photo'];

      this.editData.name = this.editData.first_name;
      this.editData.lastname = this.editData.last_name;
      this.editData.birth_date = this.editData.fecha_nac;
      this.editData.address = this.editData.direccion;

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
      .subscribe((data) => { this.paises = data.data; console.log(this.paises); });
  }


  submit(form) {

    if (this.RegistroForm.valid) {

      if (form.password == form.confirmpass) {

        if (!this.editData) {

          form.photo = this.photo64
          form.birth_date = this.formatDate(form.birth_date)
          if (this.rol == 1) {
            this.userService.insertUser(form)
              .subscribe(res => console.log(res), error => {
                if (error.status == 401) {
                  this.router.navigate(['unauthorized']);
                }
              });
          } else {
            this.clientService.insertCliente(form)
              .subscribe(res => console.log(res), error => {
                if (error.status == 401) {
                  this.router.navigate(['unauthorized']);
                }
              });
          }

        } else {

          form.photo = this.photo64
          form.birth_date = this.formatDate(new Date(form.birth_date))
          form.id = this.editData.id_usuario;
          console.log(form)
          if (this.rol == 1) {
            this.userService.updateUser(form)

              .subscribe(res => console.log(res), error => {
                if (error.status == 401) {
                  this.router.navigate(['unauthorized']);
                }
              });
          } else {
            this.clientService.insertCliente(form)
              .subscribe(res => console.log(res), error => {
                if (error.status == 401) {
                  this.router.navigate(['unauthorized']);
                }
              });
          }


        }

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
