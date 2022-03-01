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
import Swal from 'sweetalert2';
// Services
// Plugins
import {
  AngularFireStorage
} from '@angular/fire/storage';
import {
  FirestoreService
} from 'src/app/core/services/firestore/firestore.service';
import {
  AuthService
} from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss']
})
export class FormUsersComponent implements OnInit {
  userForm: FormGroup;
  editForm: any;
  title: string;
  userEditInfo: any;
  saveButton: boolean = false;

  // User Login
  userAuthUid: string;

  users: any;
  imgPdf1: any;

  // Path Files
  files = [];
  pathFile0: any;
  pathFile1: any;
  pathFile2: any;
  pathFile3: any;
  pathFile4: any;
  pathFile5: any;
  pathFile6: any;
  pathFile7: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cookieService: CookieService,
    private storage: AngularFireStorage,
    private firestoreService: FirestoreService,
    private authService: AuthService
  ) {
    this.userAuthUid = this.cookieService.get('uid');
    this.userEditInfo = this.router.getCurrentNavigation().extras.state;
    this.route.params.subscribe(params => {
      this.editForm = params['status'];
      console.log(this.editForm);
      if (this.editForm === 'true') {
        this.title = 'Editar Usuario'
      } else {
        this.title = 'Añadir Nuevo Usuario'
      }
    });
  }

  ngOnInit(): void {
    this.initForm();
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

  goCancel() {
    this.router.navigate(['./admin/users']);
  }

  readUrl(event: any, path) {
    if (path === 0) this.pathFile0 = event.target.files[0];
    if (path === 1) this.pathFile1 = event.target.files[0];
    if (path === 2) this.pathFile2 = event.target.files[0];
    if (path === 3) this.pathFile3 = event.target.files[0];
    if (path === 4) this.pathFile4 = event.target.files[0];
    if (path === 5) this.pathFile5 = event.target.files[0];
    if (path === 6) this.pathFile6 = event.target.files[0];
    if (path === 7) this.pathFile7 = event.target.files[0];
  }

  createUser() {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      if (!this.editForm) {
        this.saveButton = true;
        this.handleCreateUser(user)
      } else {
        // this.handleUpdateBinnacle(user);
      }
    }
  }

  handleCreateUser(userInfo: any) {
    this.createUserAuth(userInfo);
  }

  createUserAuth(userInfo: any) {
    this.authService.createUser(userInfo)
      .then((userAuth) => {
        const {
          user
        } = userAuth;
        this.createUserInfo(userInfo, user.uid);
      }).catch((error: any) => {
        console.log(error);
        // this.errorAlert('Error en Creación de cuenta: GL', 'Verifica si una cuenta tiene el correo electronicó asignado.');
      });
  }

  async createUserInfo(userInfo: any, uidAuth: any) {
    await this.uploadFileUser(userInfo);
    console.log("SUBIDAS")
    this.createUserFirebase(userInfo, uidAuth);
  }

  async uploadFileUser(userInfo) {
    for (let index = 0; index < 8; index++) {
      const file = this[`pathFile${index}`];
      if (file) {
        const path = await this.createFileMachine(file, userInfo);
        const namesArray = file.name.split('.');
        const type = namesArray[namesArray.length - 1]
        let typeValue = 'img';
        if (type === 'pdf') typeValue = 'pdf';

        this.files.push({
          name: this[`pathFile${index}`].name,
          path,
          type: typeValue
        });
      }
    }
  }

  async createFileMachine(file: any, userInfo) {
    try {
      const code = Math.random().toString(36).substring(7);
      const name = Math.random().toString(36).substring(7) + code;
      await this.storage.ref(`/users/${userInfo.name}`).child(name).put(file);
      return this.storage.ref(`users/${userInfo.name}/${name}`).getDownloadURL().toPromise();
    } catch (error) {
      console.log(error);
    }
  }

  createUserFirebase(userInfo: any, uidAuth: any) {
    const binnacleInfo = {
      uid: uidAuth,
      name: userInfo.name,
      email: userInfo.email,
      ine: userInfo.messIne,
      domicilio: userInfo.messDomicilio,
      curp: userInfo.messCurp,
      imss: userInfo.messImss,
      contrato: userInfo.messContrato,
      acta: userInfo.messActa,
      rfc: userInfo.messRfc,
      bancaria: userInfo.messBancaria,
      files: this.files,
      roleType: 2,
      status: 1,
      login: 0,
      imgProfile: '',
      createBy: this.userAuthUid,
      createDate: new Date(),
      updateBy: this.userAuthUid,
      updateDate: new Date()
    };

    console.log(binnacleInfo);
    this.firestoreService.createUser(binnacleInfo, uidAuth).then(() => {
      this.successAlert('Usuario Registrado', 'Usuario registrado con exito.');
      this.router.navigate(['./admin/users']);
    });
  }

  successAlert(title: string, body: string) {
    Swal.fire(
      title,
      body,
      'success'
    ).then((resp => {

    }))
  }

}