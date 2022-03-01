import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

// Libs
import {
  CookieService
} from 'ngx-cookie-service';
import Swal from 'sweetalert2'
import {
  QuerySnapshot,
  QueryDocumentSnapshot
} from '@angular/fire/firestore';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {
  userForm: FormGroup;
  userEditInfo: any;
  editForm = false;

  // User Login
  userAuthUid: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private cookieService: CookieService,
    //   private authService: AuthService,
    //   private firestoreService: FirestoreService,
    //   private utilsService: UtilsService
  ) {
    this.userAuthUid = this.cookieService.get('uid');
    this.userEditInfo = this.router.getCurrentNavigation().extras.state;
    console.log(this.userEditInfo);
    this.route.params.subscribe(params => {
      this.editForm = params['status'];
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.getPatchValues(this.userEditInfo);
  }

  initForm() {
    this.userForm = this.fb.group({
      name: ['', []],
      email: ['', []],
      password: ['', []],
      pathFile0: ['', []],
      pathFile1: ['', []],
      pathFile2: ['', []],
      pathFile3: ['', []],
      pathFile4: ['', []],
      pathFile5: ['', []],
      pathFile6: ['', []],
      pathFile7: ['', []],
      messIne: ['', []],
      messDomicilio: ['', []],
      messCurp: ['', []],
      messImss: ['', []],
      messContrato: ['', []],
      messActa: ['', []],
      messRfc: ['', []],
      messBancaria: ['', []],
    })
  }

  getPatchValues(user: any) {
    this.userForm.patchValue({
      name: user.name,
      email: user.email
    });
  }

}