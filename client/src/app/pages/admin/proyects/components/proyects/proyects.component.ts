import {
  Component,
  OnInit
} from '@angular/core';
import Swal from 'sweetalert2';
import {
  Router
} from '@angular/router';
import {
  CookieService
} from 'ngx-cookie-service';
// Services
import {
  FirestoreService
} from 'src/app/core/services/firestore/firestore.service';
import {
  QuerySnapshot,
  QueryDocumentSnapshot
} from '@angular/fire/firestore';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
  // Users
  userAuthUid: string;
  
  proyects = [];

  constructor(
    private router: Router,
    private firestoreService: FirestoreService,
    private cookieService: CookieService,
  ) {
    this.userAuthUid = this.cookieService.get('uid');
   }

  ngOnInit(): void {
    this.getProyects();
  }

  getProyects() {
    this.proyects = [];
    this.firestoreService.getProyectsByCreated(this.userAuthUid)
      .then((query: QuerySnapshot < any > ) => {
        query.docs.forEach((doc: QueryDocumentSnapshot < any > ) => {
          const service = doc.data();
          service.uid = doc.id;
          this.proyects.push(service);
        });
      });
    console.log(this.proyects)
  }

  addProyect(){
    this.router.navigate(['./admin/proyects/new']);
  }

  goEdit(proyect){
    this.router.navigate(['./admin/proyects/edit', true], {
      state: proyect
    });
  }

  statusServiceUpdate(uid:any, status){
    const Info = {
      status: status,
      updateBy: this.userAuthUid,
      updateDate: new Date()
    }
    this.firestoreService.updateProyects(Info, uid).then(() => {
      this.successAlert('Proyecto Actualizado', 'El proyecto fue actualizado con exito.');
      this.getProyects();  
    });
  }

  successAlert(title: string, body: string) {
    Swal.fire(
      title,
      body,
      'success'
    ).then((resp => {
      this.router.navigate(['./admin/proyects'])
    }))
  }

}
