import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-verify-acount',
  templateUrl: './verify-acount.component.html',
  styleUrls: ['./verify-acount.component.scss']
})
export class VerifyAcountComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute,private authService: AuthService) { }
  id=this.rutaActiva.snapshot.params.id;
  ngOnInit(): void {
  }

  confim(){
    this.authService.getValidar({"id" : this.id})
       .subscribe(
         resp=>{
             let respueta:any = resp;
             alert(respueta.msg);
             

         },
         err=> {
           console.log(err);
           alert('Error al obtener una respuesta');
         }

       );
    
  }

}
