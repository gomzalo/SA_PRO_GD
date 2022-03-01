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
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  business = [];

  // Users
  userAuthUid: string;

  constructor(
    private router: Router,
    private firestoreService: FirestoreService,
    private cookieService: CookieService,
  ) {
    this.userAuthUid = this.cookieService.get('uid');
  }

  ngOnInit(): void {
    this.getBusiness();
  }

  addBusiness() {
    this.router.navigate(['./admin/business/new']);
  }

  getBusiness() {
    this.business = [];
    this.firestoreService.getBusinessByCreated(this.userAuthUid)
      .then((query: QuerySnapshot < any > ) => {
        query.docs.forEach((doc: QueryDocumentSnapshot < any > ) => {
          const service = doc.data();
          service.uid = doc.id;
          this.business.push(service);
        });
      });
    console.log(this.business)
  }

  goEdit(business){
    this.router.navigate(['./admin/business/edit', true], {
      state: business
    });
  }

  statusServiceUpdate(uid:any, status){
    const Info = {
      status: status,
      updateBy: this.userAuthUid,
      updateDate: new Date()
    }
    this.firestoreService.updateBusiness(Info, uid).then(() => {
      this.successAlert('Empresa Actualizada', 'La empresa fue actualizada con exito.');
      this.getBusiness();  
    });
  }

  successAlert(title: string, body: string) {
    Swal.fire(
      title,
      body,
      'success'
    ).then((resp => {
      this.router.navigate(['./admin/business'])
    }))
  }

}