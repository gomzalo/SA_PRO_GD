import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-membresia',
  templateUrl: './membresia.component.html',
  styleUrls: ['./membresia.component.scss']
})
export class MembresiaComponent implements OnInit {

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  suscribir(){
    let user_id = this.authService.getSesion().id_usuario
    this.userService.membresiaBuy({"id_client": user_id}).subscribe(
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

  cancelarMembresia(){
    let user_id = this.authService.getSesion().id_usuario
    this.userService.membresiaCancel({"id_client": user_id}).subscribe(
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
