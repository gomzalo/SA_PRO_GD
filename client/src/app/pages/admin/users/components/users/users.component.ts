import {
  Component,
  OnInit
} from '@angular/core';
import Swal from 'sweetalert2';
import {
  Router
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
// Services
import { FirestoreService } from 'src/app/core/services/firestore/firestore.service';
import { QuerySnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [];
  userAuthUid: string;

  constructor(
    private router: Router,
    private firestoreService: FirestoreService,
    private cookieService: CookieService,
  ) {
    this.userAuthUid = this.cookieService.get('uid');
    console.log(this.userAuthUid);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  addUser() {
    this.router.navigate(['./admin/users/new']);
  }

  getUsers() {
    this.users = [];
    this.firestoreService.getUsersFilterCreateByAndRoleTypes(this.userAuthUid, [2])
      .then((query: QuerySnapshot < any > ) => {
        query.docs.forEach((doc: QueryDocumentSnapshot < any > ) => {
          this.users.push(doc.data());
        });
      });
      console.log(this.users);
  }

  goView(user:any){
    this.router.navigate(['./admin/users/info'], {
      state: user
    });
  }

  statusServiceUpdate(uid:any, status){
    const Info = {
      status: status,
      updateBy: this.userAuthUid,
      updateDate: new Date()
    }
    console.log(uid, status)
    this.firestoreService.updateUser(Info, uid).then(() => {
      this.successAlert('Usuario Actualizado', 'El usuario fue actualizado con exito.');
      this.getUsers();  
    });
  }

  successAlert(title: string, body: string) {
    Swal.fire(
      title,
      body,
      'success'
    ).then((resp => {
      this.router.navigate(['./admin/users'])
    }))
  }

}