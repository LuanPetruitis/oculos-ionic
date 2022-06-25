"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([
  ["src_app_pages_oculos_oculos_module_ts"],
  {
    /***/ 754:
      /*!*******************************************************!*\
  !*** ./src/app/pages/oculos/oculos-routing.module.ts ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ OculosRoutingModule: () =>
            /* binding */ OculosRoutingModule,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! tslib */ 8163);
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/common */ 8143);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/core */ 1109);
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! @angular/forms */ 1777);
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! @angular/router */ 5485);
        /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @ionic/angular */ 5472);
        /* harmony import */ var _novo_oculo_novo_oculo_page__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./novo-oculo/novo-oculo.page */ 4736);

        const routes = [
          {
            path: "",
            children: [
              {
                path: "cadastro/:id",
                component:
                  _novo_oculo_novo_oculo_page__WEBPACK_IMPORTED_MODULE_0__.novoCarroPage,
              },
            ],
          },
        ];
        let OculosRoutingModule = class OculosRoutingModule {};
        OculosRoutingModule = (0,
        tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(
                  routes
                ),
              ],
              declarations: [
                _novo_oculo_novo_oculo_page__WEBPACK_IMPORTED_MODULE_0__.novoCarroPage,
              ],
            }),
          ],
          OculosRoutingModule
        );

        /***/
      },

    /***/ 827:
      /*!***********************************************!*\
  !*** ./src/app/pages/oculos/oculos.module.ts ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ OculosModule: () => /* binding */ OculosModule,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! tslib */ 8163);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/core */ 1109);
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/common */ 8143);
        /* harmony import */ var _oculos_routing_module__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./oculos-routing.module */ 754);

        let OculosModule = class OculosModule {};
        OculosModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
              declarations: [],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _oculos_routing_module__WEBPACK_IMPORTED_MODULE_0__.OculosRoutingModule,
              ],
            }),
          ],
          OculosModule
        );

        /***/
      },

    /***/ 4736:
      /*!************************************************************!*\
  !*** ./src/app/pages/oculos/novo-oculo/novo-oculo.page.ts ***!
  \************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ novoCarroPage: () => /* binding */ novoCarroPage,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! tslib */ 8163);
        /* harmony import */ var _novo_oculo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./novo-oculo.page.html?ngResource */ 7239);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! @angular/core */ 1109);
        /* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! @angular/fire/compat/storage */ 2841);
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/forms */ 1777);
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! @angular/router */ 5485);
        /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @ionic/angular */ 5472);
        /* harmony import */ var _service_oculo_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../service/oculo-service */ 2901);

        let novoCarroPage = class novoCarroPage {
          constructor(builder, nav, oculo, actRoute, storage) {
            this.builder = builder;
            this.nav = nav;
            this.oculo = oculo;
            this.actRoute = actRoute;
            this.storage = storage;
            this.criando = false;
            this.id = this.actRoute.snapshot.paramMap.get("id");
            this.oculo.pegaCarro(this.id).subscribe((res) => {
              console.log(res[0]);
              if (res[0]) {
                this.oculosForm.patchValue({
                  nome: res[0].nome,
                  marca: res[0].marca,
                  descricao: res[0].descricao,
                  quilometragem: res[0].quilometragem,
                  valor: res[0].valor,
                });
                this.imageUrl = res[0].imageUrl;
              } else {
                this.oculosForm.patchValue({
                  nome: "",
                  marca: "",
                  descricao: "",
                  quilometragem: 0,
                  valor: 0,
                });
                this.imageUrl = "";
              }
            });
          }
          ngOnInit() {
            this.initForm();
          }
          initForm() {
            this.oculosForm = this.builder.group({
              nome: [
                "",
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators
                    .required,
                ],
              ],
              marca: [
                "",
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators
                    .required,
                ],
              ],
              descricao: [
                "",
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators
                    .required,
                ],
              ],
              quilometragem: [
                "",
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators
                    .required,
                ],
              ],
              valor: [
                "",
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators
                    .required,
                ],
              ],
            });
          }
          /**
           * Salva a nova oculo no Firebase
           */
          registraCarro() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(
              this,
              void 0,
              void 0,
              function* () {
                this.criando = true;
                const oculo = this.oculosForm.value;
                console.log(this.selectedFile);
                if (this.id != "new") {
                  oculo.id = this.id;
                }
                var resquest_oculo = this.oculo.registraCarro(oculo);
                if (this.selectedFile) {
                  this.imageUrl = yield this.uploadFile(
                    resquest_oculo.id,
                    this.selectedFile
                  );
                }
                this.oculo.update(resquest_oculo.id, {
                  imageUrl: this.imageUrl || null,
                });
                this.criando = true;
                this.nav.navigateForward("home");
              }
            );
          }
          chooseFile(event) {
            this.selectedFile = event.target.files;
          }
          uploadFile(id, file) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(
              this,
              void 0,
              void 0,
              function* () {
                if (file && file.length) {
                  try {
                    const task = yield this.storage
                      .ref("images")
                      .child(id)
                      .put(file[0]);
                    return this.storage
                      .ref(`images/${id}`)
                      .getDownloadURL()
                      .toPromise();
                  } catch (error) {
                    console.log(error);
                  }
                }
              }
            );
          }
        };
        novoCarroPage.ctorParameters = () => [
          { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
          { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
          {
            type: _service_oculo_service__WEBPACK_IMPORTED_MODULE_1__.Carroservice,
          },
          { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
          {
            type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_6__.AngularFireStorage,
          },
        ];
        novoCarroPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
              selector: "app-novo-oculo",
              template:
                _novo_oculo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              // styleUrls: ['./novoCarro.page.scss'],
            }),
          ],
          novoCarroPage
        );

        /***/
      },

    /***/ 7239:
      /*!*************************************************************************!*\
  !*** ./src/app/pages/oculos/novo-oculo/novo-oculo.page.html?ngResource ***!
  \*************************************************************************/
      /***/ (module) => {
        module.exports =
          '<ion-header>\n  <ion-toolbar>\n    <ion-title>novoCarro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="ion-padding" fullscreen>\n\n  <form [formGroup]="oculosForm" (submit)="registraCarro()">\n    <ion-item>\n      <ion-icon name="car" slot="start"></ion-icon>\n      <ion-input formControlName="nome" placeholder="Nome do Carro" autofocus="true"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-icon name="car" slot="start"></ion-icon>\n      <ion-input formControlName="marca" placeholder="Marca"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="document-text-outline"></ion-icon>\n      <ion-input formControlName="descricao" placeholder="Descrição"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-icon name="hourglass-outline"></ion-icon>\n      <ion-input formControlName="quilometragem" placeholder="Quilometragem"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="wallet" slot="start"></ion-icon>\n      <ion-input formControlName="valor" type="number" placeholder="Valor"></ion-input>\n    </ion-item>\n\n    <!-- <ion-button expand="full">\n      <ion-icon lazy="true" slot="start" name="image"></ion-icon>\n      <ion-label slot="end">Upload Image</ion-label>\n      <input type="file" (change)="loadImageFromDevice($event)" id="file-input"\n        accept="image/png, image/jpeg">\n    </ion-button>\n     -->\n    \n    <ion-item lines="none">\n      <input type="file" name="inputFile" (change)="chooseFile($event)" required>\n    </ion-item>\n\n    <ion-button [disabled]="oculosForm.invalid || criando" type="submit" expand="block" fill="outline">Enviar</ion-button>\n  </form>\n\n</ion-content>';

        /***/
      },
  },
]);
//# sourceMappingURL=src_app_pages_oculos_oculos_module_ts.js.map
