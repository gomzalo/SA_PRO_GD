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
import {
  FirestoreService
} from 'src/app/core/services/firestore/firestore.service';
import {
  AngularFireStorage
} from '@angular/fire/storage';

@Component({
  selector: 'app-form-branchs',
  templateUrl: './form-branchs.component.html',
  styleUrls: ['./form-branchs.component.scss']
})
export class FormBranchsComponent implements OnInit {
  branchsForm: FormGroup;
  userEditInfo: any;
  editForm = false;

  // User Login
  userAuthUid: string;
  pathFile0: any;
  saveButton: boolean = false;

  users = [];
  branch: any;
  business: any;
  businessInfo: any;
  files = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private cookieService: CookieService,
    //   private authService: AuthService,
    private firestoreService: FirestoreService,
    //   private utilsService: UtilsService
    private storage: AngularFireStorage
  ) {
    this.userAuthUid = this.cookieService.get('uid');
    this.userEditInfo = this.router.getCurrentNavigation().extras.state;
    console.log(this.userEditInfo);
    this.route.params.subscribe(params => {
      this.editForm = Boolean(params['status']);
    });
    console.log(this.editForm);
  }

  ngOnInit(): void {
    this.getBusiness();
    this.initForm();
    this.getPatchValues(this.userEditInfo);
  }

  initForm() {
    this.branchsForm = this.fb.group({
      name: ['', []],
    })
  }

  getPatchValues(user: any) {
    this.branchsForm.patchValue({
      name: user.name,
    });
  }
  docvalue : any;

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
    console.log(this.business);
  }

  async getSelection(ev) {
    this.business.forEach(element => {
      if (element.uid === ev.target.value){
        this.businessInfo = element;
      }
    });
    // await this.firestoreService.getBusinessByUid(ev.target.value).then(business => {
    //   this.businessInfo = business.data();
    //   console.log(this.businessInfo);
    // });
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

  goCancel() {
    this.router.navigate(['./admin/branchs']);
  }

  // CREATE BRANCH

  createbranch() {
    if (this.branchsForm.valid) {
      const branch = this.branchsForm.value;
      this.branch = branch;
      if (!this.editForm) {
        this.saveButton = true;
        console.log(branch);
        this.handleCreatebranch(branch)
      } else {
        console.log(branch);
        this.handleUpdateBranch(branch);
      }
    }
  }

  handleCreatebranch(branch: any) {
    const Info = {
      business: this.businessInfo,
      name: branch.name,
      status: 1,
      createBy: this.userAuthUid,
      createDate: new Date(),
      updateBy: this.userAuthUid,
      updateDate: new Date()
    }
    console.log(Info);
    this.firestoreService.createBranchs(Info).then(() => {
      this.successAlert('Sucursal Guardada', 'La sucursal fue guardado con éxito.');
      this.router.navigate(['./admin/branchs'])
    });
  }

  handleUpdateBranch(InfoBranch: any) {
    const Info = {
      name: InfoBranch.name,
      status: 1,
      updateBy: this.userAuthUid,
      updateDate: new Date()
    }
    this.firestoreService.updateBranchs(Info, this.userEditInfo.uid).then(() => {
      this.successAlert('Sucursal Actualizada', 'El usuario fue actualizado con exito.');
      this.router.navigate(['./admin/branchs'])
    });
  }

}