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
  selector: 'app-branchs',
  templateUrl: './branchs.component.html',
  styleUrls: ['./branchs.component.scss']
})
export class BranchsComponent implements OnInit {
  branchs = [];

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
    this.getBranchs();
  }

  getBranchs() {
    this.branchs = [];
    this.firestoreService.getBranchsByCreated(this.userAuthUid)
      .then((query: QuerySnapshot < any > ) => {
        query.docs.forEach((doc: QueryDocumentSnapshot < any > ) => {
          const service = doc.data();
          service.uid = doc.id;
          this.branchs.push(service);
        });
      });
    console.log(this.branchs)
  }

  goEdit(business){
    this.router.navigate(['./admin/branchs/edit', true], {
      state: business
    });
  }

  statusServiceUpdate(uid:any, status){
    const Info = {
      status: status,
      updateBy: this.userAuthUid,
      updateDate: new Date()
    }
    this.firestoreService.updateBranchs(Info, uid).then(() => {
      this.successAlert('Sucursal Actualizada', 'La sucursal fue actualizada con exito.');
      this.getBranchs();  
    });
  }

  addBranch() {
    this.router.navigate(['./admin/branchs/new']);
  }

  successAlert(title: string, body: string) {
    Swal.fire(
      title,
      body,
      'success'
    ).then((resp => {
      this.router.navigate(['./admin/branchs'])
    }))
  }

}
