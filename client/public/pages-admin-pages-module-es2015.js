(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-pages-module"],{

/***/ "./node_modules/angular-count-to/__ivy_ngcc__/modules/angular-count-to.js":
/*!********************************************************************************!*\
  !*** ./node_modules/angular-count-to/__ivy_ngcc__/modules/angular-count-to.js ***!
  \********************************************************************************/
/*! exports provided: CountToDirective, CountToModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountToDirective", function() { return CountToDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountToModule", function() { return CountToModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class CountToDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.from = 0;
        this.duration = 4;
        this.e = this.el.nativeElement;
        this.refreshInterval = 30;
        this.step = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.CountTo) {
            this.start();
        }
    }
    /**
     * @return {?}
     */
    calculate() {
        this.duration = this.duration * 1000;
        this.steps = Math.ceil(this.duration / this.refreshInterval);
        this.increment = ((this.CountTo - this.from) / this.steps);
        this.num = this.from;
    }
    /**
     * @return {?}
     */
    tick() {
        setTimeout(() => {
            this.num += this.increment;
            this.step++;
            if (this.step >= this.steps) {
                this.num = this.CountTo;
                this.e.textContent = this.CountTo;
            }
            else {
                this.e.textContent = Math.round(this.num);
                this.tick();
            }
        }, this.refreshInterval);
    }
    /**
     * @return {?}
     */
    start() {
        this.calculate();
        this.tick();
    }
}
CountToDirective.ɵfac = function CountToDirective_Factory(t) { return new (t || CountToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
CountToDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CountToDirective, selectors: [["", "CountTo", ""]], inputs: { from: "from", duration: "duration", CountTo: "CountTo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/**
 * @nocollapse
 */
CountToDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
];
CountToDirective.propDecorators = {
    'CountTo': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'from': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'duration': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountToDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[CountTo]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { from: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], duration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], CountTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class CountToModule {
    /**
     * Use in AppModule
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CountToModule,
            providers: []
        };
    }
    /**
     * Use in features modules with lazy loading
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: CountToModule,
            providers: []
        };
    }
}
CountToModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CountToModule });
CountToModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CountToModule_Factory(t) { return new (t || CountToModule)(); } });
/**
 * @nocollapse
 */
CountToModule.ctorParameters = () => [];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CountToModule, { declarations: [CountToDirective], exports: [CountToDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountToModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    CountToDirective
                    // Pipes.
                    // Directives.
                ],
                exports: [
                    CountToDirective
                    // Pipes.
                    // Directives.
                ]
            }]
    }], null, null); })();

// Public classes.

/**
 * Angular library starter.
 * Build an Angular library compatible with AoT compilation & Tree shaking.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/angular-count-to
 */
/**
 * Entry point for all public APIs of the package.
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=angular-count-to.js.map

/***/ }),

/***/ "./src/app/pages/admin/pages-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/admin/pages-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', loadChildren: () => Promise.all(/*! import() | dashboard-components-dashboard-module */[__webpack_require__.e("default~branchs-components-branches-module~business-components-business-module~dashboard-components-~2c2af7d1"), __webpack_require__.e("dashboard-components-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/components/dashboard.module */ "./src/app/pages/admin/dashboard/components/dashboard.module.ts")).then(m => m.DashboardModule) },
    { path: 'users', loadChildren: () => Promise.all(/*! import() | users-components-users-module */[__webpack_require__.e("default~branchs-components-branches-module~business-components-business-module~dashboard-components-~2c2af7d1"), __webpack_require__.e("default~account-account-module~branchs-components-branches-module~business-components-business-modul~5755f5df"), __webpack_require__.e("common"), __webpack_require__.e("users-components-users-module")]).then(__webpack_require__.bind(null, /*! ./users/components/users.module */ "./src/app/pages/admin/users/components/users.module.ts")).then(m => m.UsersModule) },
    { path: 'business', loadChildren: () => Promise.all(/*! import() | business-components-business-module */[__webpack_require__.e("default~branchs-components-branches-module~business-components-business-module~dashboard-components-~2c2af7d1"), __webpack_require__.e("default~account-account-module~branchs-components-branches-module~business-components-business-modul~5755f5df"), __webpack_require__.e("business-components-business-module")]).then(__webpack_require__.bind(null, /*! ./business/components/business.module */ "./src/app/pages/admin/business/components/business.module.ts")).then(m => m.BusinessModule) },
    { path: 'proyects', loadChildren: () => Promise.all(/*! import() | proyects-components-proyects-module */[__webpack_require__.e("default~branchs-components-branches-module~business-components-business-module~dashboard-components-~2c2af7d1"), __webpack_require__.e("default~account-account-module~branchs-components-branches-module~business-components-business-modul~5755f5df"), __webpack_require__.e("proyects-components-proyects-module")]).then(__webpack_require__.bind(null, /*! ./proyects/components/proyects.module */ "./src/app/pages/admin/proyects/components/proyects.module.ts")).then(m => m.ProyectsModule) },
    { path: 'proyects-assign', loadChildren: () => Promise.all(/*! import() | proyects-assign-components-proyects-assign-module */[__webpack_require__.e("default~branchs-components-branches-module~business-components-business-module~dashboard-components-~2c2af7d1"), __webpack_require__.e("default~account-account-module~branchs-components-branches-module~business-components-business-modul~5755f5df"), __webpack_require__.e("proyects-assign-components-proyects-assign-module")]).then(__webpack_require__.bind(null, /*! ./proyects-assign/components/proyects-assign.module */ "./src/app/pages/admin/proyects-assign/components/proyects-assign.module.ts")).then(m => m.ProyectsAssignModule) },
    { path: 'branchs', loadChildren: () => Promise.all(/*! import() | branchs-components-branches-module */[__webpack_require__.e("default~branchs-components-branches-module~business-components-business-module~dashboard-components-~2c2af7d1"), __webpack_require__.e("default~account-account-module~branchs-components-branches-module~business-components-business-modul~5755f5df"), __webpack_require__.e("branchs-components-branches-module")]).then(__webpack_require__.bind(null, /*! ./branchs/components/branches.module */ "./src/app/pages/admin/branchs/components/branches.module.ts")).then(m => m.BranchsModule) },
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/admin/pages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/admin/pages.module.ts ***!
  \*********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/admin/pages-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-count-to */ "./node_modules/angular-count-to/__ivy_ngcc__/modules/angular-count-to.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-dual-listbox */ "./node_modules/angular-dual-listbox/__ivy_ngcc__/fesm2015/angular-dual-listbox.js");



// Modules

// Libs




class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            angular_dual_listbox__WEBPACK_IMPORTED_MODULE_6__["AngularDualListBoxModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            angular_count_to__WEBPACK_IMPORTED_MODULE_4__["CountToModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { imports: [angular_dual_listbox__WEBPACK_IMPORTED_MODULE_6__["AngularDualListBoxModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        angular_count_to__WEBPACK_IMPORTED_MODULE_4__["CountToModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    angular_dual_listbox__WEBPACK_IMPORTED_MODULE_6__["AngularDualListBoxModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    angular_count_to__WEBPACK_IMPORTED_MODULE_4__["CountToModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-admin-pages-module-es2015.js.map