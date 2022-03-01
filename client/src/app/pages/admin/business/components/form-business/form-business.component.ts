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
import { FirestoreService } from 'src/app/core/services/firestore/firestore.service';
import {
  AngularFireStorage
} from '@angular/fire/storage';

@Component({
  selector: 'app-form-business',
  templateUrl: './form-business.component.html',
  styleUrls: ['./form-business.component.scss']
})
export class FormBusinessComponent implements OnInit {
  businessForm: FormGroup;
  userEditInfo: any;
  editForm = false;

  // User Login
  userAuthUid: string;
  pathFile0: any;
  saveButton: boolean = false;

  users = [];
  business: any;
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
    this.initForm();
    this.getPatchValues(this.userEditInfo);
  }

  initForm() {
    this.businessForm = this.fb.group({
      name: ['', []],
      manager: ['', []],
    })
  }

  getPatchValues(user: any) {
    this.businessForm.patchValue({
      name: user.name,
      manager: user.manager
    });
  }

  fileBusiness(event) {
    this.pathFile0 = event.target.files[0];
  }

  createBusiness(){
    if (this.businessForm.valid) {
      const business = this.businessForm.value;
      this.business = business;
      if (!this.editForm) {
        this.saveButton = true;
        console.log(business);
        this.handleBusiness(business)
      } else {
        console.log(business);
        this.handleUpdateBusiness(business);
      }
    }
  }

  async handleBusiness(business) {
    await this.uploadFileBusiness();
    this.handleCreateBusiness(business);
  }

  async uploadFileBusiness() {
    const file = this.pathFile0;
    if (file) {
      console.log(file);
      const path = await this.createFileBusines(file);
      const namesArray = file.name.split('.');
      const type = namesArray[namesArray.length - 1]
      let typeValue = 'img';
      if (type === 'pdf') typeValue = 'pdf';

      this.files.push({
        path,
        type: typeValue
      });
    }
  }

  async createFileBusines(file: any) {
    try {
      const code = Math.random().toString(36).substring(7);
      const name = Math.random().toString(36).substring(7) + code;
      await this.storage.ref(`/business/${this.business.name}`).child(name).put(file);
      return this.storage.ref(`business/${this.business.name}/${name}`).getDownloadURL().toPromise();
    } catch (error) {
      console.log(error);
    }
  }

  handleCreateBusiness(businessInfo: any) {
    const Info = {
      name: businessInfo.name,
      manager: businessInfo.manager,
      icon: this.files[0],
      status: 1,
      createBy: this.userAuthUid,
      createDate: new Date(),
      updateBy: this.userAuthUid,
      updateDate: new Date()
    }
    console.log(Info);
    this.firestoreService.createBusiness(Info).then(() => {
      this.successAlert('Empresa Guardada', 'La empresa fue guardada con exito.');
      this.router.navigate(['./admin/business'])
    });

  }

  handleUpdateBusiness(businessInfo: any) {
    const Info = {
      name: businessInfo.name,
      manager: businessInfo.manager,
      status: 1,
      updateBy: this.userAuthUid,
      updateDate: new Date()
    }
    this.firestoreService.updateBusiness(Info, this.userEditInfo.uid).then(() => {
      this.successAlert('Usuario Actualizado', 'El usuario fue actualizado con exito.');
      this.router.navigate(['./admin/business'])
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

  goCancel(){
    this.router.navigate(['./admin/business']);
  }
  
}
