import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-restar-password',
  templateUrl: './restar-password.component.html',
  styleUrls: ['./restar-password.component.scss']
})
export class RestarPasswordComponent implements OnInit {

  constructor(private authService: AuthService) { }
  email2: string;
  password1: any;
  password2: any;
  ngOnInit(): void {
  }

  sendMail(){
    this.authService.resetPass({"email" : this.email2,"temporal_password": this.password1,
    "new_password": this.password2})
       .subscribe(
         resp=>{
             let respueta:any = resp;

             if(respueta.status!=true){
              alert('Error enviando');
               return;
             }
             alert(respueta.msg);

         },
         error=> {
          console.log(error.error);
          alert(error.error.msg);
        }

       );
  }

  nosirvePlantilla(ev){
    this.email2=ev.target.value;
  }

  nosirvePlantilla1(ev){
    this.password1=ev.target.value;
  }

  nosirvePlantilla2(ev){
    this.password2=ev.target.value;
  }

}
