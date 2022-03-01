function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/core/services/auth/auth.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/services/auth/auth.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppCoreServicesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js"); // Libs


    var AuthService = /*#__PURE__*/function () {
      function AuthService(afAuth, cookieService) {
        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
        this.cookieService = cookieService;
      }

      _createClass(AuthService, [{
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.afAuth.authState;
        }
      }, {
        key: "login",
        value: function login(email, password) {
          console.log(email, password);
          return this.afAuth.signInWithEmailAndPassword(email, password);
        }
      }, {
        key: "logout",
        value: function logout() {
          return this.afAuth.signOut();
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(email) {
          return this.afAuth.sendPasswordResetEmail(email);
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(password) {// const user = this.afAuth.;
          // await user.
        }
      }, {
        key: "createUser",
        value: function createUser(user) {
          return this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
        }
      }, {
        key: "resetPasswordEmail",
        value: function resetPasswordEmail(email) {
          return this.afAuth.sendPasswordResetEmail(email);
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo() {
          var uid = this.cookieService.get('uid');
          var role = this.cookieService.get('roleType');
          var info = {
            uid: uid,
            role: role
          };
          return info;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map