function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-components-dashboard-module"], {
  /***/
  "./src/app/pages/admin/dashboard/components/dashboard-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/admin/dashboard/components/dashboard-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppPagesAdminDashboardComponentsDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/pages/admin/dashboard/components/dashboard/dashboard.component.ts"); // Components


    var routes = [{
      path: '',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardRoutingModule
    });
    DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardRoutingModule_Factory(t) {
        return new (t || DashboardRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/admin/dashboard/components/dashboard.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/admin/dashboard/components/dashboard.module.ts ***!
    \**********************************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppPagesAdminDashboardComponentsDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/pages/admin/dashboard/components/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/pages/admin/dashboard/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var angular_count_to__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-count-to */
    "./node_modules/angular-count-to/__ivy_ngcc__/modules/angular-count-to.js"); //Route
    // Components
    // Libs


    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_8__["CountToModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
        declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_8__["CountToModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_8__["CountToModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/admin/dashboard/components/dashboard/dashboard.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/admin/dashboard/components/dashboard/dashboard.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesAdminDashboardComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DashboardComponent_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
      }
    }

    function DashboardComponent_img_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(router) {
        _classCallCheck(this, DashboardComponent);

        this.router = router;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goCategories",
        value: function goCategories() {
          this.router.navigate(['./admin/categories']);
        }
      }, {
        key: "goProducts",
        value: function goProducts() {
          this.router.navigate(['./admin/products']);
        }
      }, {
        key: "goSelection",
        value: function goSelection() {
          this.router.navigate(['./admin/products/new']);
        }
      }, {
        key: "goMultimedia",
        value: function goMultimedia() {
          this.router.navigate(['./admin/multimedia']);
        }
      }, {
        key: "goUsers",
        value: function goUsers() {
          this.router.navigate(['./admin/users']);
        }
      }, {
        key: "goBackup",
        value: function goBackup() {
          this.router.navigate(['./admin/backup']);
        }
      }, {
        key: "goValue",
        value: function goValue() {
          this.router.navigate(['./admin/value']);
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 9,
      vars: 2,
      consts: [[1, "container-fluid"], ["src", "assets/imgs/bg.png", "alt", "login image", 1, "login-img"], [1, "row"], ["src", "assets/img/marketin.png", "alt", "", 1, "logo_dash"], [1, "margin"], [1, "col-2", "boxi", 3, "click", "mouseover", "mouseout"], ["src", "assets/imgs/home_user.svg", "alt", "", "class", "boxes", 4, "ngIf"], ["src", "assets/imgs/home_userRed.svg", "alt", "", "class", "boxes", 4, "ngIf"], ["src", "assets/imgs/home_user.svg", "alt", "", 1, "boxes"], ["src", "assets/imgs/home_userRed.svg", "alt", "", 1, "boxes"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_6_listener() {
            return ctx.goUsers();
          })("mouseover", function DashboardComponent_Template_div_mouseover_6_listener() {
            return ctx.imgUser = true;
          })("mouseout", function DashboardComponent_Template_div_mouseout_6_listener() {
            return ctx.imgUser = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_img_7_Template, 1, 0, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_img_8_Template, 1, 0, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.imgUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgUser);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".login-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 85vh;\n  top: -5px;\n  left: -5px;\n  position: absolute;\n  -o-object-fit: cover;\n  object-fit: cover;\n  -o-object-position: left;\n  object-position: left;\n  z-index: 1;\n}\n\n.logo_dash[_ngcontent-%COMP%] {\n  width: 175px;\n  position: absolute;\n  z-index: 2;\n  margin-left: 42%;\n  margin-top: 0px;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-left: 5%;\n}\n\n.margin[_ngcontent-%COMP%]   .boxi[_ngcontent-%COMP%] {\n  margin-left: 55px;\n}\n\n.boxes[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 175px;\n  z-index: 2;\n  margin-top: 100px;\n}\n\n.boxes2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 175px;\n  z-index: 2;\n  margin-top: 250px;\n}\n\n.copy[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  color: #414042;\n  margin-top: 15px;\n  font-size: 10px;\n  text-align: center;\n  margin-left: 25%;\n}\n\n.icon[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  width: 60px;\n  margin-left: 20%;\n  margin-top: 20%;\n}\n\n.label[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  position: absolute;\n  z-index: 3;\n  font-size: 13px;\n  font-family: Roboto;\n  margin-bottom: 0;\n  margin-top: 110px;\n  margin-left: 5%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.label2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  position: absolute;\n  z-index: 3;\n  font-size: 13px;\n  font-family: Roboto;\n  margin-bottom: 0;\n  margin-top: 110px;\n  margin-left: 25px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXNhcnJvbGxvL0Rlc2t0b3AvbWFya2V0aW4vbWFya2V0aW4vc3JjL2FwcC9wYWdlcy9hZG1pbi9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZG1pbi9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsVUFBVTtBQ0NkOztBREVBO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUNDbkI7O0FERUE7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtBQ0NuQjs7QURIQTtFQUtRLGlCQUFpQjtBQ0V6Qjs7QURJQTtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLGlCQUFpQjtBQ0RyQjs7QURJQTtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLGlCQUFpQjtBQ0RyQjs7QURJQTtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQ0RwQjs7QURJQTtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FDRG5COztBRElBO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQ0Q3Qjs7QURJQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUNEN0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4NXZoO1xuICAgIHRvcDogLTVweDtcbiAgICBsZWZ0OiAtNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAtby1vYmplY3QtcG9zaXRpb246IGxlZnQ7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBsZWZ0O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5sb2dvX2Rhc2gge1xuICAgIHdpZHRoOiAxNzVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW4tbGVmdDogNDIlO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLm1hcmdpbntcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1JTsgXG5cbiAgICAuYm94aXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU1cHg7XG4gICAgfVxufVxuXG5cblxuLmJveGVze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTc1cHg7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLmJveGVzMntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE3NXB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWFyZ2luLXRvcDogMjUwcHg7XG59XG5cbi5jb3B5e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGNvbG9yOiAjNDE0MDQyO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4uaWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMztcbiAgICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbn1cblxuLmxhYmVse1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAzO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMTEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmxhYmVsMntcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDExMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iLCIubG9naW4taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODV2aDtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiAtNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgLW8tb2JqZWN0LXBvc2l0aW9uOiBsZWZ0O1xuICBvYmplY3QtcG9zaXRpb246IGxlZnQ7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5sb2dvX2Rhc2gge1xuICB3aWR0aDogMTc1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgbWFyZ2luLWxlZnQ6IDQyJTtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4ubWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4ubWFyZ2luIC5ib3hpIHtcbiAgbWFyZ2luLWxlZnQ6IDU1cHg7XG59XG5cbi5ib3hlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE3NXB4O1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLmJveGVzMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE3NXB4O1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tdG9wOiAyNTBweDtcbn1cblxuLmNvcHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiAjNDE0MDQyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cblxuLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG4gIHdpZHRoOiA2MHB4O1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG5cbi5sYWJlbCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5sYWJlbDIge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDExMHB4O1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=dashboard-components-dashboard-module-es5.js.map