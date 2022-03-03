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
  selector: 'app-proyects-assign',
  templateUrl: './proyects-assign.component.html',
  styleUrls: ['./proyects-assign.component.scss']
})
export class ProyectsAssignComponent implements OnInit {

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

  goEdit(proyect){
    this.router.navigate(['./admin/proyects-assign/edit', true], {
      state: proyect
    });
  }
  
}
