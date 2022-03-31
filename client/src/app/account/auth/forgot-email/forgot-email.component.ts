import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.scss']
})
export class ForgotEmailComponent implements OnInit {
  constructor(private authService: AuthService) { }
  email2: string;
  ngOnInit(): void {
  }

  sendMail(){
    this.authService.envioPass({"email" : this.email2})
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

}
