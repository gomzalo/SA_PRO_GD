(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-components-users-module"],{

/***/ "./src/app/pages/admin/users/components/form-users/form-users.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/admin/users/components/form-users/form-users.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FormUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUsersComponent", function() { return FormUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var src_app_core_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/firestore/firestore.service */ "./src/app/core/services/firestore/firestore.service.ts");
/* harmony import */ var src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");




// Libs


// Services
// Plugins










class FormUsersComponent {
    constructor(router, route, fb, cookieService, storage, firestoreService, authService) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.cookieService = cookieService;
        this.storage = storage;
        this.firestoreService = firestoreService;
        this.authService = authService;
        this.saveButton = false;
        // Path Files
        this.files = [];
        this.userAuthUid = this.cookieService.get('uid');
        this.userEditInfo = this.router.getCurrentNavigation().extras.state;
        this.route.params.subscribe(params => {
            this.editForm = params['status'];
            console.log(this.editForm);
            if (this.editForm === 'true') {
                this.title = 'Editar Usuario';
            }
            else {
                this.title = 'Añadir Nuevo Usuario';
            }
        });
    }
    ngOnInit() {
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
        });
    }
    goCancel() {
        this.router.navigate(['./admin/users']);
    }
    readUrl(event, path) {
        if (path === 0)
            this.pathFile0 = event.target.files[0];
        if (path === 1)
            this.pathFile1 = event.target.files[0];
        if (path === 2)
            this.pathFile2 = event.target.files[0];
        if (path === 3)
            this.pathFile3 = event.target.files[0];
        if (path === 4)
            this.pathFile4 = event.target.files[0];
        if (path === 5)
            this.pathFile5 = event.target.files[0];
        if (path === 6)
            this.pathFile6 = event.target.files[0];
        if (path === 7)
            this.pathFile7 = event.target.files[0];
    }
    createUser() {
        if (this.userForm.valid) {
            const user = this.userForm.value;
            if (!this.editForm) {
                this.saveButton = true;
                this.handleCreateUser(user);
            }
            else {
                // this.handleUpdateBinnacle(user);
            }
        }
    }
    handleCreateUser(userInfo) {
        this.createUserAuth(userInfo);
    }
    createUserAuth(userInfo) {
        this.authService.createUser(userInfo)
            .then((userAuth) => {
            const { user } = userAuth;
            this.createUserInfo(userInfo, user.uid);
        }).catch((error) => {
            console.log(error);
            // this.errorAlert('Error en Creación de cuenta: GL', 'Verifica si una cuenta tiene el correo electronicó asignado.');
        });
    }
    createUserInfo(userInfo, uidAuth) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.uploadFileUser(userInfo);
            console.log("SUBIDAS");
            this.createUserFirebase(userInfo, uidAuth);
        });
    }
    uploadFileUser(userInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let index = 0; index < 8; index++) {
                const file = this[`pathFile${index}`];
                if (file) {
                    const path = yield this.createFileMachine(file, userInfo);
                    const namesArray = file.name.split('.');
                    const type = namesArray[namesArray.length - 1];
                    let typeValue = 'img';
                    if (type === 'pdf')
                        typeValue = 'pdf';
                    this.files.push({
                        name: this[`pathFile${index}`].name,
                        path,
                        type: typeValue
                    });
                }
            }
        });
    }
    createFileMachine(file, userInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const code = Math.random().toString(36).substring(7);
                const name = Math.random().toString(36).substring(7) + code;
                yield this.storage.ref(`/users/${userInfo.name}`).child(name).put(file);
                return this.storage.ref(`users/${userInfo.name}/${name}`).getDownloadURL().toPromise();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    createUserFirebase(userInfo, uidAuth) {
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
    successAlert(title, body) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(title, body, 'success').then((resp => {
        }));
    }
}
FormUsersComponent.ɵfac = function FormUsersComponent_Factory(t) { return new (t || FormUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"])); };
FormUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormUsersComponent, selectors: [["app-form-users"]], decls: 93, vars: 20, consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "col-sm-8", "col-form-label", "title"], [1, "btn", "btn-cancel", 3, "click"], [1, "btn", "btn-add", 3, "click"], [1, "col-11", "bg"], ["novalidate", "", 1, "needs-validation"], ["type", "text", "placeholder", "NOMBRE DEL USUARIO", 1, "form-control", "input", 3, "formControl"], [1, "col-6"], ["type", "text", "placeholder", "EMAIL DEL USUARIO", 1, "form-control", "input", 3, "formControl"], ["type", "password", "placeholder", "CONTRASE\u00D1A DEL USUARIO", 1, "form-control", "input", 3, "formControl"], ["type", "text", "placeholder", "COMENTARIO DEL INE", 1, "form-control", "input", 3, "formControl"], ["type", "file", "accept", ".png,.jpg,.pdf", 1, "form-control", 3, "formControl", "change"], ["type", "text", "placeholder", "COMENTARIO DEL COMPROBATE DOMICILIO  (luz o agua)", 1, "form-control", "input", 3, "formControl"], ["type", "text", "placeholder", "COMENTARIO DEL CURP", 1, "form-control", "input", 3, "formControl"], ["type", "text", "placeholder", "COMENTARIO DEL COMPROBANTE IMSS", 1, "form-control", "input", 3, "formControl"], ["type", "text", "placeholder", "COMENTARIO DEL CONTRATO DE TRABAJO FIRMADO ", 1, "form-control", "input", 3, "formControl"], ["type", "text", "placeholder", "COMENTARIO DEL ACTA NACIMIENTO", 1, "form-control", "input", 3, "formControl"], ["type", "text", "placeholder", "COMENTARIO DEL RFC SAT", 1, "form-control", "input", 3, "formControl"], ["type", "text", "placeholder", "COMENTARIO DEL CARATULA BANCARIA", 1, "form-control", "input", 3, "formControl"], [1, "row", "center"], [1, "btn", "cancel", 3, "click"], [1, "btn", "add", 3, "click"]], template: function FormUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormUsersComponent_Template_button_click_6_listener() { return ctx.goCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "CANCELAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormUsersComponent_Template_button_click_8_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "GUARDAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FormUsersComponent_Template_input_change_26_listener($event) { return ctx.readUrl($event, 0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FormUsersComponent_Template_input_change_34_listener($event) { return ctx.readUrl($event, 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FormUsersComponent_Template_input_change_42_listener($event) { return ctx.readUrl($event, 2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FormUsersComponent_Template_input_change_50_listener($event) { return ctx.readUrl($event, 3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FormUsersComponent_Template_input_change_58_listener($event) { return ctx.readUrl($event, 4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FormUsersComponent_Template_input_change_66_listener($event) { return ctx.readUrl($event, 5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FormUsersComponent_Template_input_change_74_listener($event) { return ctx.readUrl($event, 6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FormUsersComponent_Template_input_change_82_listener($event) { return ctx.readUrl($event, 7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormUsersComponent_Template_button_click_87_listener() { return ctx.goCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "CANCELAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormUsersComponent_Template_button_click_90_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "A\u00D1ADIR NUEVO USUARIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["email"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["password"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["messIne"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["pathFile0"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["messDomicilio"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["pathFile1"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["messCurp"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["pathFile2"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["messImss"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["pathFile3"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["messContrato"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["pathFile4"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["messActa"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["pathFile5"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["messRfc"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["pathFile6"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["messBancaria"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userForm.controls["pathFile7"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"]], styles: [".title[_ngcontent-%COMP%] {\n  color: #041D50;\n  font-size: 35px;\n  font-family: Roboto;\n  font-weight: bold;\n}\n\n.input[_ngcontent-%COMP%] {\n  height: 50px;\n  background: #FFFFFF;\n  border: 1px solid #C7C7C7;\n  border-radius: 10px;\n  margin-top: 25px;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #C7C7C7;\n  margin-left: 20px;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  color: white;\n  background: #414042;\n  border-radius: 8px;\n  height: 32px;\n  font-family: Roboto;\n  position: absolute;\n  right: 180px;\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  color: white;\n  background: #041D50;\n  border-radius: 8px;\n  height: 32px;\n  font-family: Roboto;\n  position: absolute;\n  right: 50px;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #000000;\n  font-family: Roboto;\n}\n\n.cancel[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 30px;\n  color: white;\n  background: #414042;\n  border-radius: 8px;\n  height: 32px;\n  font-family: Roboto;\n}\n\n.add[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 30px;\n  color: white;\n  background: #041D50;\n  border-radius: 8px;\n  height: 32px;\n  font-family: Roboto;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin-left: 300px;\n}\n\n.label-upload[_ngcontent-%COMP%] {\n  color: #C3C3C3;\n  font-size: 15px;\n  position: absolute;\n  margin-left: 50px;\n  margin-top: -50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXNhcnJvbGxvL0Rlc2t0b3AvbWFya2V0aW4vbWFya2V0aW4vc3JjL2FwcC9wYWdlcy9hZG1pbi91c2Vycy9jb21wb25lbnRzL2Zvcm0tdXNlcnMvZm9ybS11c2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRtaW4vdXNlcnMvY29tcG9uZW50cy9mb3JtLXVzZXJzL2Zvcm0tdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7QUNDckI7O0FERUE7RUFDSSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FDQ3BCOztBREVBO0VBQ0ksaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUNDckI7O0FER0E7RUFDSSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0FDQWhCOztBREdBO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztBQ0FmOztBREdBO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7QUNBdkI7O0FER0E7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7QUNBdkI7O0FER0E7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7QUNBdkI7O0FER0E7RUFDSSxrQkFBa0I7QUNBdEI7O0FER0E7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0FDQXJCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vdXNlcnMvY29tcG9uZW50cy9mb3JtLXVzZXJzL2Zvcm0tdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgY29sb3I6ICMwNDFENTA7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnB1dHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzdDN0M3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmJne1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDN0M3Qzc7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cblxuLmJ0bi1jYW5jZWx7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICM0MTQwNDI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTgwcHg7XG59XG5cbi5idG4tYWRke1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjMDQxRDUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUwcHg7XG59XG5cbi5zdWItdGl0bGV7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi5jYW5jZWx7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjNDE0MDQyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLmFkZHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICMwNDFENTA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG4uY2VudGVye1xuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcbn1cblxuLmxhYmVsLXVwbG9hZHtcbiAgICBjb2xvcjogI0MzQzNDMztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xufSIsIi50aXRsZSB7XG4gIGNvbG9yOiAjMDQxRDUwO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5wdXQge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDN0M3Qzc7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQzdDN0M3O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICM0MTQwNDI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxODBweDtcbn1cblxuLmJ0bi1hZGQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwNDFENTA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1MHB4O1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLmNhbmNlbCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzQxNDA0MjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi5hZGQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwNDFENTA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xufVxuXG4ubGFiZWwtdXBsb2FkIHtcbiAgY29sb3I6ICNDM0MzQzM7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-form-users',
                templateUrl: './form-users.component.html',
                styleUrls: ['./form-users.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] }, { type: src_app_core_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] }, { type: src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/admin/users/components/info-user/info-user.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/admin/users/components/info-user/info-user.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InfoUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoUserComponent", function() { return InfoUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



// Libs






function InfoUserComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r86 = ctx.$implicit;
    const i_r87 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", user_r86.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ver im\u00E1gen ", i_r87 + 1, " ");
} }
class InfoUserComponent {
    constructor(route, router, fb, cookieService) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.cookieService = cookieService;
        this.editForm = false;
        this.userAuthUid = this.cookieService.get('uid');
        this.userEditInfo = this.router.getCurrentNavigation().extras.state;
        console.log(this.userEditInfo);
        this.route.params.subscribe(params => {
            this.editForm = params['status'];
        });
    }
    ngOnInit() {
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
        });
    }
    getPatchValues(user) {
        this.userForm.patchValue({
            name: user.name,
            email: user.email
        });
    }
}
InfoUserComponent.ɵfac = function InfoUserComponent_Factory(t) { return new (t || InfoUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"])); };
InfoUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoUserComponent, selectors: [["app-info-user"]], decls: 16, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "col-11", "bg"], ["novalidate", "", 1, "needs-validation"], ["type", "text", "placeholder", "NOMBRE DEL USUARIO", 1, "form-control", "input", 3, "formControl"], [1, "col-6"], ["type", "text", "placeholder", "EMAIL DEL USUARIO", 1, "form-control", "input", 3, "formControl"], [4, "ngFor", "ngForOf"], ["target", "_blank", "alt", "...", 1, "span", 3, "href"]], template: function InfoUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InfoUserComponent_div_12_Template, 4, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.userForm.controls["name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.userForm.controls["email"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userEditInfo.files);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".title[_ngcontent-%COMP%] {\n  color: #041D50;\n  font-size: 35px;\n  font-family: Roboto;\n  font-weight: bold;\n}\n\n.input[_ngcontent-%COMP%] {\n  height: 50px;\n  background: #FFFFFF;\n  border: 1px solid #C7C7C7;\n  border-radius: 10px;\n  margin-top: 25px;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #C7C7C7;\n  margin-left: 20px;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  color: white;\n  background: #414042;\n  border-radius: 8px;\n  height: 32px;\n  font-family: Roboto;\n  position: absolute;\n  right: 180px;\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  color: white;\n  background: #041D50;\n  border-radius: 8px;\n  height: 32px;\n  font-family: Roboto;\n  position: absolute;\n  right: 50px;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #000000;\n  font-family: Roboto;\n}\n\n.cancel[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 30px;\n  color: white;\n  background: #414042;\n  border-radius: 8px;\n  height: 32px;\n  font-family: Roboto;\n}\n\n.add[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 30px;\n  color: white;\n  background: #041D50;\n  border-radius: 8px;\n  height: 32px;\n  font-family: Roboto;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin-left: 300px;\n}\n\n.label-upload[_ngcontent-%COMP%] {\n  color: #C3C3C3;\n  font-size: 15px;\n  position: absolute;\n  margin-left: 50px;\n  margin-top: -50px;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\n.span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: blue;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXNhcnJvbGxvL0Rlc2t0b3AvbWFya2V0aW4vbWFya2V0aW4vc3JjL2FwcC9wYWdlcy9hZG1pbi91c2Vycy9jb21wb25lbnRzL2luZm8tdXNlci9pbmZvLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkbWluL3VzZXJzL2NvbXBvbmVudHMvaW5mby11c2VyL2luZm8tdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQ0NyQjs7QURFQTtFQUNJLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUNDcEI7O0FERUE7RUFDSSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQ0NyQjs7QURHQTtFQUNJLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7QUNBaEI7O0FER0E7RUFDSSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0FDQWY7O0FER0E7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtBQ0F2Qjs7QURHQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtBQ0F2Qjs7QURHQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtBQ0F2Qjs7QURHQTtFQUNJLGtCQUFrQjtBQ0F0Qjs7QURHQTtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUNBckI7O0FER0E7RUFDSSxZQUFZO0FDQWhCOztBREdBO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxtQkFBbUI7QUNBdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi91c2Vycy9jb21wb25lbnRzL2luZm8tdXNlci9pbmZvLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgY29sb3I6ICMwNDFENTA7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnB1dHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzdDN0M3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmJne1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDN0M3Qzc7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cblxuLmJ0bi1jYW5jZWx7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICM0MTQwNDI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTgwcHg7XG59XG5cbi5idG4tYWRke1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjMDQxRDUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUwcHg7XG59XG5cbi5zdWItdGl0bGV7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi5jYW5jZWx7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjNDE0MDQyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLmFkZHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICMwNDFENTA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG4uY2VudGVye1xuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcbn1cblxuLmxhYmVsLXVwbG9hZHtcbiAgICBjb2xvcjogI0MzQzNDMztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xufVxuXG4uaW1ne1xuICAgIHdpZHRoOiAyNTBweDtcbn1cblxuLnNwYW57XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn0iLCIudGl0bGUge1xuICBjb2xvcjogIzA0MUQ1MDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmlucHV0IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQzdDN0M3O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uYmcge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0M3QzdDNztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjNDE0MDQyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTgwcHg7XG59XG5cbi5idG4tYWRkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDQxRDUwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNTBweDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi5jYW5jZWwge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICM0MTQwNDI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG4uYWRkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDQxRDUwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLmNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAzMDBweDtcbn1cblxuLmxhYmVsLXVwbG9hZCB7XG4gIGNvbG9yOiAjQzNDM0MzO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xufVxuXG4uaW1nIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmx1ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-user',
                templateUrl: './info-user.component.html',
                styleUrls: ['./info-user.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/admin/users/components/users-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin/users/components/users-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.component */ "./src/app/pages/admin/users/components/users/users.component.ts");
/* harmony import */ var _form_users_form_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-users/form-users.component */ "./src/app/pages/admin/users/components/form-users/form-users.component.ts");
/* harmony import */ var _info_user_info_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-user/info-user.component */ "./src/app/pages/admin/users/components/info-user/info-user.component.ts");


// Components





const routes = [
    {
        path: '',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]
    },
    {
        path: 'new',
        component: _form_users_form_users_component__WEBPACK_IMPORTED_MODULE_3__["FormUsersComponent"]
    },
    {
        path: 'edit/:status',
        component: _form_users_form_users_component__WEBPACK_IMPORTED_MODULE_3__["FormUsersComponent"]
    },
    {
        path: 'info',
        component: _info_user_info_user_component__WEBPACK_IMPORTED_MODULE_4__["InfoUserComponent"]
    },
];
class UsersRoutingModule {
}
UsersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersRoutingModule });
UsersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersRoutingModule_Factory(t) { return new (t || UsersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/admin/users/components/users.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/admin/users/components/users.module.ts ***!
  \**************************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/pages/admin/users/components/users-routing.module.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.component */ "./src/app/pages/admin/users/components/users/users.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-count-to */ "./node_modules/angular-count-to/__ivy_ngcc__/modules/angular-count-to.js");
/* harmony import */ var _form_users_form_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-users/form-users.component */ "./src/app/pages/admin/users/components/form-users/form-users.component.ts");
/* harmony import */ var _info_user_info_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./info-user/info-user.component */ "./src/app/pages/admin/users/components/info-user/info-user.component.ts");



//Route

// Components

// Libs







class UsersModule {
}
UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersModule_Factory(t) { return new (t || UsersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            angular_count_to__WEBPACK_IMPORTED_MODULE_8__["CountToModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"], _form_users_form_users_component__WEBPACK_IMPORTED_MODULE_9__["FormUsersComponent"], _info_user_info_user_component__WEBPACK_IMPORTED_MODULE_10__["InfoUserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        angular_count_to__WEBPACK_IMPORTED_MODULE_8__["CountToModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"], _form_users_form_users_component__WEBPACK_IMPORTED_MODULE_9__["FormUsersComponent"], _info_user_info_user_component__WEBPACK_IMPORTED_MODULE_10__["InfoUserComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    angular_count_to__WEBPACK_IMPORTED_MODULE_8__["CountToModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/admin/users/components/users/users.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin/users/components/users/users.component.ts ***!
  \***********************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_core_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/firestore/firestore.service */ "./src/app/core/services/firestore/firestore.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ "./src/app/shared/components/feather-icons/feather-icons.component.ts");




// Services








function UsersComponent_tbody_34_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_tbody_34_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Administrador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_tbody_34_app_feather_icons_13_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-feather-icons", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tbody_34_app_feather_icons_13_Template_app_feather_icons_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const user_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.statusServiceUpdate(user_r71.uid, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_tbody_34_app_feather_icons_14_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-feather-icons", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tbody_34_app_feather_icons_14_Template_app_feather_icons_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const user_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.statusServiceUpdate(user_r71.uid, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_tbody_34_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UsersComponent_tbody_34_td_8_Template, 2, 0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UsersComponent_tbody_34_td_9_Template, 2, 0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-feather-icons", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tbody_34_Template_app_feather_icons_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const user_r71 = ctx.$implicit; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.goView(user_r71); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UsersComponent_tbody_34_app_feather_icons_13_Template, 1, 0, "app-feather-icons", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UsersComponent_tbody_34_app_feather_icons_14_Template, 1, 0, "app-feather-icons", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r71 = ctx.$implicit;
    const i_r72 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r72 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r71.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r71.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r71.roleType === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r71.roleType === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r71.status === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r71.status === 1);
} }
class UsersComponent {
    constructor(router, firestoreService, cookieService) {
        this.router = router;
        this.firestoreService = firestoreService;
        this.cookieService = cookieService;
        this.users = [];
        this.userAuthUid = this.cookieService.get('uid');
        console.log(this.userAuthUid);
    }
    ngOnInit() {
        this.getUsers();
    }
    addUser() {
        this.router.navigate(['./admin/users/new']);
    }
    getUsers() {
        this.users = [];
        this.firestoreService.getUsersFilterCreateByAndRoleTypes(this.userAuthUid, [2])
            .then((query) => {
            query.docs.forEach((doc) => {
                this.users.push(doc.data());
            });
        });
        console.log(this.users);
    }
    goView(user) {
        this.router.navigate(['./admin/users/info'], {
            state: user
        });
    }
    statusServiceUpdate(uid, status) {
        const Info = {
            status: status,
            updateBy: this.userAuthUid,
            updateDate: new Date()
        };
        console.log(uid, status);
        this.firestoreService.updateUser(Info, uid).then(() => {
            this.successAlert('Usuario Actualizado', 'El usuario fue actualizado con exito.');
            this.getUsers();
        });
    }
    successAlert(title, body) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(title, body, 'success').then((resp => {
            this.router.navigate(['./admin/users']);
        }));
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 35, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "col-sm-2", "col-form-label", "title"], ["id", "uidUser", 1, "form-control", "input"], ["hidden", "", "value", "", "selected", ""], ["value", "user"], [1, "btn", "boton"], [1, "btn", "boton2", 3, "click"], [1, "table-responsive", "table_use"], ["id", "excel-table", 1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "file-open"], [4, "ngIf"], ["icon", "eye", 2, "color", "blue", 3, "click"], ["style", "color: red;", "icon", "minus-circle", 3, "click", 4, "ngIf"], ["style", "color: green;", "icon", "plus-circle", 3, "click", 4, "ngIf"], ["icon", "minus-circle", 2, "color", "red", 3, "click"], ["icon", "plus-circle", 2, "color", "green", 3, "click"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ACCIONES EN LOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Accion 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Accion 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Accion 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "APLICAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_18_listener() { return ctx.addUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "A\u00D1ADIR USUARIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Opciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, UsersComponent_tbody_34_Template, 15, 7, "tbody", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_7__["FeatherIconsComponent"]], styles: [".title[_ngcontent-%COMP%] {\n  color: #041D50;\n  font-size: 35px;\n  font-family: Roboto;\n  font-weight: bold;\n}\n\n.input[_ngcontent-%COMP%] {\n  width: 200px;\n  font-size: 12px;\n  color: #C3C3C3;\n  border-radius: 8px;\n  font-family: Roboto;\n  position: absolute;\n  left: 20px;\n}\n\n.boton[_ngcontent-%COMP%] {\n  color: #C3C3C3;\n  background: transparent;\n  border: 1px solid #C3C3C3;\n  border-radius: 8px;\n  height: 32px;\n  font-family: Roboto;\n  position: absolute;\n  left: 240px;\n}\n\n.boton2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background: #041D50;\n  border-radius: 8px;\n  height: 32px;\n  font-family: Roboto;\n  right: 50px;\n  position: absolute;\n}\n\n.table_use[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 110px;\n}\n\n.icon-trash[_ngcontent-%COMP%] {\n  color: #C90E2D;\n}\n\n.icon-edit[_ngcontent-%COMP%] {\n  color: #041D50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXNhcnJvbGxvL0Rlc2t0b3AvbWFya2V0aW4vbWFya2V0aW4vc3JjL2FwcC9wYWdlcy9hZG1pbi91c2Vycy9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZG1pbi91c2Vycy9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0FDQ3JCOztBREVBO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtBQ0NkOztBREVBO0VBQ0ksY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7QUNDZjs7QURFQTtFQUNJLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtBQ0N0Qjs7QURFQTtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0FDQ2Q7O0FERUE7RUFDSSxjQUFjO0FDQ2xCOztBREVBO0VBQ0ksY0FBYztBQ0NsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgY29sb3I6ICMwNDFENTA7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnB1dHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjQzNDM0MzO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyMHB4O1xufVxuXG4uYm90b257XG4gICAgY29sb3I6ICNDM0MzQzM7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0MzQzNDMztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDI0MHB4O1xufVxuXG4uYm90b24ye1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQ6ICMwNDFENTA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIHJpZ2h0OiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnRhYmxlX3VzZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMTBweDtcbn1cblxuLmljb24tdHJhc2h7XG4gICAgY29sb3I6ICNDOTBFMkQ7XG59XG5cbi5pY29uLWVkaXR7XG4gICAgY29sb3I6ICMwNDFENTA7XG59IiwiLnRpdGxlIHtcbiAgY29sb3I6ICMwNDFENTA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnB1dCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0MzQzNDMztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIwcHg7XG59XG5cbi5ib3RvbiB7XG4gIGNvbG9yOiAjQzNDM0MzO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0MzQzNDMztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjQwcHg7XG59XG5cbi5ib3RvbjIge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZDogIzA0MUQ1MDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIHJpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50YWJsZV91c2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTEwcHg7XG59XG5cbi5pY29uLXRyYXNoIHtcbiAgY29sb3I6ICNDOTBFMkQ7XG59XG5cbi5pY29uLWVkaXQge1xuICBjb2xvcjogIzA0MUQ1MDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_core_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=users-components-users-module-es2015.js.map