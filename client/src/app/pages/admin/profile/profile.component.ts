import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';
import { AuthService } from '../../../core/services/auth/auth.service'
import { DomSanitizer } from '@angular/platform-browser';
import { PaisService } from 'src/app/shared/services/pais.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any = {}
  imagePath
  genero = [{ id: 'M', value: 'Masculino' }, { id: 'F', value: 'Femenino' }, { id: 'a', value: 'Lo que sea' },]
  estados=[{id:1,Estado:'Activo'},{id:2,Estado:'Congelado'},{id:3,Estado:'Eliminado'}]
  editcomplete: any;
  photo64 = null
  paises=[];
  disable=true
  RegistroForm = new FormGroup({
    name: new FormControl({value:{value:'',disabled:true},disabled:true}, [Validators.required],),
    lastname: new FormControl({value:{value:'',disabled:true},disabled:true}, [Validators.required]),
    password: new FormControl({value:'',disabled:true}, [Validators.required]),
    email: new FormControl({value:'',disabled:true}, [Validators.required]),
    confirmpass: new FormControl({value:'',disabled:true}, [Validators.required]),
    gender: new FormControl({value:'',disabled:true}, [Validators.required]),
    birth_date: new FormControl({value:'',disabled:true}, [Validators.required]),
    signup_date: new FormControl({value:'',disabled:true}, [Validators.required]),
    address: new FormControl({value:'',disabled:true}, [Validators.required]),
    id_country: new FormControl({value:'',disabled:true}, [Validators.required]),
    id_estado: new FormControl({value:'',disabled:true}, [Validators.required]),
    id_rol: new FormControl({value:'',disabled:true}, [Validators.required]),
    phone: new FormControl({value:'',disabled:true}, [Validators.required, Validators.minLength(8)]),
    photo: new FormControl({value:'',disabled:true},),
    age: new FormControl({value:'',disabled:true}, [Validators.required, Validators.min(1)]),
    membership: new FormControl(0, [Validators.required]),

  });
  constructor(private userService: UserService, private authService: AuthService, private _sanitizer: DomSanitizer,private paisService:PaisService, private router:Router) { }

  ngOnInit(): void {
    this.getcountries();
    this.getUser();



  }
  getcountries() {
    this.paisService.getpaises()
      .subscribe((data) => { this.paises = data.data;console.log(this.paises); });
  }

  getUser() {
    let user_id = this.authService.getSesion().id_usuario;
    this.userService.getUser(user_id)
      .subscribe((data) => {

        this.user = data.data[0];
        console.log(this.user);
        this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(this.user.photo);
        this.photo64 = this.user.photo;
        delete this.user['photo'];
        this.user.name = this.user.first_name;
        this.user.lastname = this.user.last_name;
        this.user.birth_date = this.user.fecha_nac;
        this.user.address = this.user.direccion;

        this.RegistroForm.patchValue(this.user)
      });

  }

  tomembresia(){
    this.router.navigate(['membresia'],);
  }


}
