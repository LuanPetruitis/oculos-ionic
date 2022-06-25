"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_auth_module_ts"],{

/***/ 2042:
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _component_topo_login_topo_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/topo-login/topo-login.component */ 7452);
/* harmony import */ var _forgot_forgot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot/forgot.page */ 7543);
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.page */ 6325);
/* harmony import */ var _register_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.page */ 2195);










const routes = [
    {
        path: '', children: [
            { path: '', component: _login_login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage },
            { path: 'forgot', component: _forgot_forgot_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPage },
            { path: 'register', component: _register_register_page__WEBPACK_IMPORTED_MODULE_3__.RegisterPage }
        ]
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)
        ],
        declarations: [
            _login_login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage,
            _forgot_forgot_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPage,
            _register_register_page__WEBPACK_IMPORTED_MODULE_3__.RegisterPage,
            _component_topo_login_topo_login_component__WEBPACK_IMPORTED_MODULE_0__.TopoLoginComponent
        ]
    })
], AuthRoutingModule);



/***/ }),

/***/ 6775:
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 2042);




let AuthModule = class AuthModule {
};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule
        ]
    })
], AuthModule);



/***/ }),

/***/ 7452:
/*!*************************************************************************!*\
  !*** ./src/app/pages/auth/component/topo-login/topo-login.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopoLoginComponent": () => (/* binding */ TopoLoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _topo_login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topo-login.component.html?ngResource */ 5368);
/* harmony import */ var _topo_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topo-login.component.scss?ngResource */ 2821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);




let TopoLoginComponent = class TopoLoginComponent {
    constructor() { }
    ngOnInit() { }
};
TopoLoginComponent.ctorParameters = () => [];
TopoLoginComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
TopoLoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'topo-login',
        template: _topo_login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_topo_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TopoLoginComponent);



/***/ }),

/***/ 7543:
/*!**************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPage": () => (/* binding */ ForgotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _forgot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot.page.html?ngResource */ 7382);
/* harmony import */ var _forgot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.page.scss?ngResource */ 7878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ 4693);






let ForgotPage = class ForgotPage {
    constructor(builder, service) {
        this.builder = builder;
        this.service = service;
    }
    ngOnInit() {
        this.loginForm = this.builder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    recoverPass() {
        const data = this.loginForm.value;
        this.service.recoverPass(data.email);
    }
};
ForgotPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
ForgotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-forgot',
        template: _forgot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPage);



/***/ }),

/***/ 6325:
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6579);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 1437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ 4693);







let LoginPage = class LoginPage {
    constructor(builder, nav, service) {
        this.builder = builder;
        this.nav = nav;
        this.service = service;
    }
    ngOnInit() {
        this.isUserLoggedIn();
        this.loginForm = this.builder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]]
        });
    }
    isUserLoggedIn() {
        this.service.isLoggedIn.subscribe(user => {
            if (user) {
                this.nav.navigateForward('home');
            }
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const user = this.loginForm.value;
            this.service.login(user);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 2195:
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 5250);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 2715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1115);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ 4693);







let RegisterPage = class RegisterPage {
    constructor(builder, auth, service) {
        this.builder = builder;
        this.auth = auth;
        this.service = service;
    }
    ngOnInit() {
        this.loginForm = this.builder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(19), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            snome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(19), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]],
            confirm_pass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]]
        });
    }
    createUser() {
        const user = this.loginForm.value;
        this.service.createUser(user);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth },
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 2821:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/auth/component/topo-login/topo-login.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "#logo-div {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#logo-div div {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#logo-div img {\n  width: 70%;\n}\n#logo-div h3 {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcG8tbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ1I7QUFFSTtFQUNJLFVBQUE7QUFBUjtBQUdJO0VBQ0ksa0JBQUE7QUFEUiIsImZpbGUiOiJ0b3BvLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ28tZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBkaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 7878:
/*!***************************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1437:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2715:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5368:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/auth/component/topo-login/topo-login.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"logo-div\">\n  <ion-text class=\"medium\">\n    <p>{{title ? title : ''}}</p>\n    <div>\n      <img src=\"../../../assets/icon/logo.png\" />\n    </div>\n    <h3 class=\"ion-text-center\">ICarros</h3>\n  </ion-text>\n</div>";

/***/ }),

/***/ 7382:
/*!***************************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n\n  <topo-login title=\"Esqueci minha senha\"></topo-login>\n\n  <form [formGroup]=\"loginForm\" (submit)=\"recoverPass()\">\n    <ion-item>\n      <ion-icon name=\"mail\" color=\"money\" slot=\"start\"></ion-icon>\n      <ion-input formControlName=\"email\" type=\"email\" placeholder=\"E-mail\" autofocus=\"true\"></ion-input>\n    </ion-item>\n\n    <ion-button [disabled]=\"loginForm.invalid\" type=\"submit\" style=\"margin-top: 1rem;\" expand=\"block\" color=\"login\">Enviar</ion-button>\n  </form>\n    \n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col>\n      <ion-button [routerLink]=\"['/auth']\" fill=\"clear\" color=\"medium\">Voltar</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>";

/***/ }),

/***/ 6579:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n\n  <topo-login></topo-login>\n\n  <form [formGroup]=\"loginForm\" style=\"margin: 1.5rem;\" (submit)=\"login()\">\n    <ion-item>\n      <ion-icon name=\"mail\" color=\"contrast\" slot=\"start\"></ion-icon>\n      <ion-input formControlName=\"email\" type=\"email\" placeholder=\"E-mail\" autofocus=\"true\"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-icon name=\"lock-closed\" color=\"contrast\" slot=\"start\"></ion-icon>\n      <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Senha\" autofocus=\"true\"></ion-input>\n    </ion-item>\n\n    <ion-button [disabled]=\"loginForm.invalid\" type=\"submit\" style=\"margin-top: 1rem;\" expand=\"block\" color=\"login\">Enviar</ion-button>\n  </form>\n    \n</ion-content>\n\n\n<ion-footer>\n  <ion-row>\n    <ion-col>\n      <ion-button [routerLink]=\"['/auth/forgot']\" fill=\"clear\" color=\"medium\">Esqueci minha senha</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button [routerLink]=\"['/auth/register']\" fill=\"clear\" color=\"medium\">Criar usuário</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>";

/***/ }),

/***/ 5250:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n\n  <topo-login title=\"Criar um usuário\"></topo-login>\n\n  <form [formGroup]=\"loginForm\" (submit)=\"createUser()\">\n    <ion-item>\n      <ion-icon name=\"person\" color=\"money\" slot=\"start\"></ion-icon>\n      <ion-input formControlName=\"nome\" type=\"text\" placeholder=\"Nome\" autofocus=\"true\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"person\" color=\"money\" slot=\"start\"></ion-icon>\n      <ion-input formControlName=\"snome\" type=\"text\" placeholder=\"Sobrenome\" autofocus=\"true\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"mail\" color=\"money\" slot=\"start\"></ion-icon>\n      <ion-input formControlName=\"email\" type=\"email\" placeholder=\"E-mail\" autofocus=\"true\"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-icon name=\"lock-closed\" color=\"money\" slot=\"start\"></ion-icon>\n      <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Senha\" autofocus=\"true\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"lock-closed\" color=\"money\" slot=\"start\"></ion-icon>\n      <ion-input formControlName=\"confirm_pass\" type=\"confirm_pass\" placeholder=\"Confirmar\"></ion-input>\n    </ion-item>\n\n    <ion-button [disabled]=\"loginForm.invalid\" type=\"submit\" expand=\"block\" color=\"login\" style=\"margin-top: 1rem;\" >Enviar</ion-button>\n  </form>\n    \n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col>\n      <ion-button [routerLink]=\"['/auth']\" fill=\"clear\" color=\"medium\">Voltar</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_auth_module_ts.js.map