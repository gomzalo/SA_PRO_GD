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
  selector: 'app-form-proyects',
  templateUrl: './form-proyects.component.html',
  styleUrls: ['./form-proyects.component.scss']
})
export class FormProyectsComponent implements OnInit {
  proyectForm: FormGroup;
  userEditInfo: any;
  editForm = false;

  // User Login
  userAuthUid: string;
  saveButton: boolean = false;

  proyect: any;
  business : any;
  businessInfo : any;

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
    this.proyectForm = this.fb.group({
      proyectName:  ['', []],
      proyectDescription:  ['', []],
      proyectActivities:  ['', []],
      proyectManager: ['', []],
    })
  }

  getPatchValues(user: any) {
    this.proyectForm.patchValue({
      proyectName:  user.proyectName,
      proyectDescription:  user.proyectDescription,
      proyectActivities:  user.proyectActivities,
      proyectManager: user.proyectManager,
    });
  }

  async getSelection(ev) {
    console.log(ev.target.value);
    this.business.forEach(element => {
      if (element.uid === ev.target.value){
        this.businessInfo = element;
        console.log(this.businessInfo);
      }
    });
    // await this.firestoreService.getBusinessByUid(ev.target.value).then(business => {
    //   this.businessInfo = business.data();
    //   console.log(this.businessInfo);
    // });
  }

  getBusiness() {
    this.business = [];
    this.firestoreService.getBranchsByCreated(this.userAuthUid)
      .then((query: QuerySnapshot < any > ) => {
        query.docs.forEach((doc: QueryDocumentSnapshot < any > ) => {
          const service = doc.data();
          service.uid = doc.id;
          this.business.push(service);
        });
      });
    console.log(this.business)
  }


  // CREATE PROYECT

  createProyect(){
    if (this.proyectForm.valid) {
      const proyect = this.proyectForm.value;
      this.proyect = proyect;
      if (!this.editForm) {
        this.saveButton = true;
        console.log(proyect);
        this.handleCreateProyect(proyect)
      } else {
        console.log(proyect);
        this.handleUpdateProyect(proyect);
      }
    }
  }

  handleCreateProyect(businessInfo: any) {
    const Info = {
      business: this.businessInfo,
      proyectName: businessInfo.proyectName,
      proyectDescription: businessInfo.proyectDescription,
      proyectActivities: businessInfo.proyectActivities,
      proyectManager: businessInfo.proyectManager,
      status: 1,
      createBy: this.userAuthUid,
      createDate: new Date(),
      updateBy: this.userAuthUid,
      updateDate: new Date()
    }
    console.log(Info);
    this.firestoreService.createProyects(Info).then(() => {
      this.successAlert('Proyecto Guardado', 'El proyecto fue guardado con éxito.');
      this.router.navigate(['./admin/proyects'])
    });
  }

  // UPDATE PROYECT

  handleUpdateProyect(businessInfo: any) {
    const Info = {
      proyectName: businessInfo.proyectName,
      proyectDescription: businessInfo.proyectDescription,
      proyectActivities: businessInfo.proyectActivities,
      proyectManager: businessInfo.proyectManager,
      status: 1,
      updateBy: this.userAuthUid,
      updateDate: new Date()
    }
    this.firestoreService.updateProyects(Info, this.userEditInfo.uid).then(() => {
      this.successAlert('Proyecto Actualizado', 'El proyecto fue actualizado con exito.');
      this.router.navigate(['./admin/proyects'])
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

  goCancel(){
    this.router.navigate(['./admin/proyects']);
  }

}
