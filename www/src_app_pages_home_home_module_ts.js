"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([
  ["src_app_pages_home_home_module_ts"],
  {
    /***/ 845:
      /*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ HomePageRoutingModule: () =>
            /* binding */ HomePageRoutingModule,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! tslib */ 8163);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/core */ 1109);
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/router */ 5485);
        /* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./home.page */ 5006);

        const routes = [
          {
            path: "",
            component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
          },
        ];
        let HomePageRoutingModule = class HomePageRoutingModule {};
        HomePageRoutingModule = (0,
        tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
              imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(
                  routes
                ),
              ],
              exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule,
              ],
            }),
          ],
          HomePageRoutingModule
        );

        /***/
      },

    /***/ 1572:
      /*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ HomePageModule: () =>
            /* binding */ HomePageModule,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! tslib */ 8163);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/core */ 1109);
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/common */ 8143);
        /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! @ionic/angular */ 5472);
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! @angular/forms */ 1777);
        /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! @angular/cdk/scrolling */ 3970);
        /* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./home.page */ 5006);
        /* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./home-routing.module */ 845);
        /* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! @angular/fire/compat/storage */ 2841);

        let HomePageModule = class HomePageModule {};
        HomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
                _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
                _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_8__.AngularFireStorageModule,
              ],
              declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage],
            }),
          ],
          HomePageModule
        );

        /***/
      },

    /***/ 5006:
      /*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ HomePage: () => /* binding */ HomePage,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! tslib */ 8163);
        /* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
        /* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./home.page.scss?ngResource */ 4099);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! @angular/core */ 1109);
        /* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/fire/compat/storage */ 2841);
        /* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../auth/login/login.service */ 4693);
        /* harmony import */ var _oculos_service_oculo_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../oculos/service/oculo-service */ 2901);

        // import { NavController } from '@ionic/angular/providers/nav-controller';

        let HomePage = class HomePage {
          constructor(service, oculo, storage) {
            this.service = service;
            this.oculo = oculo;
            this.storage = storage;
          }
          ngOnInit() {
            this.oculo.lista().subscribe((x) => (this.listaCarros = x));
          }
          logOut() {
            this.service.logOut();
          }
          remove(oculo) {
            console.log(oculo);
            if (oculo.imageUrl) {
              this.storage.refFromURL(oculo.imageUrl).delete();
            }
            console.log(oculo);
            console.log(typeof oculo.id);
            this.oculo.remove(oculo);
          }
        };
        HomePage.ctorParameters = () => [
          {
            type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService,
          },
          {
            type: _oculos_service_oculo_service__WEBPACK_IMPORTED_MODULE_3__.Carroservice,
          },
          {
            type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_4__.AngularFireStorage,
          },
        ];
        HomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
              selector: "app-home",
              template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__],
            }),
          ],
          HomePage
        );

        /***/
      },

    /***/ 1486:
      /*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/audit.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ audit: () => /* binding */ audit,
          /* harmony export */
        });
        /* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../innerSubscribe */ 6688);

        function audit(durationSelector) {
          return function auditOperatorFunction(source) {
            return source.lift(new AuditOperator(durationSelector));
          };
        }
        class AuditOperator {
          constructor(durationSelector) {
            this.durationSelector = durationSelector;
          }
          call(subscriber, source) {
            return source.subscribe(
              new AuditSubscriber(subscriber, this.durationSelector)
            );
          }
        }
        class AuditSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
          constructor(destination, durationSelector) {
            super(destination);
            this.durationSelector = durationSelector;
            this.hasValue = false;
          }
          _next(value) {
            this.value = value;
            this.hasValue = true;
            if (!this.throttled) {
              let duration;
              try {
                const { durationSelector } = this;
                duration = durationSelector(value);
              } catch (err) {
                return this.destination.error(err);
              }
              const innerSubscription = (0,
              _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(
                duration,
                new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(
                  this
                )
              );
              if (!innerSubscription || innerSubscription.closed) {
                this.clearThrottle();
              } else {
                this.add((this.throttled = innerSubscription));
              }
            }
          }
          clearThrottle() {
            const { value, hasValue, throttled } = this;
            if (throttled) {
              this.remove(throttled);
              this.throttled = undefined;
              throttled.unsubscribe();
            }
            if (hasValue) {
              this.value = undefined;
              this.hasValue = false;
              this.destination.next(value);
            }
          }
          notifyNext() {
            this.clearThrottle();
          }
          notifyComplete() {
            this.clearThrottle();
          }
        }

        /***/
      },

    /***/ 9190:
      /*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/auditTime.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ auditTime: () => /* binding */ auditTime,
          /* harmony export */
        });
        /* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../scheduler/async */ 1661);
        /* harmony import */ var _audit__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./audit */ 1486);
        /* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../observable/timer */ 2930);

        function auditTime(
          duration,
          scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async
        ) {
          return (0, _audit__WEBPACK_IMPORTED_MODULE_1__.audit)(() =>
            (0, _observable_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(
              duration,
              scheduler
            )
          );
        }

        /***/
      },

    /***/ 907:
      /*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ takeUntil: () => /* binding */ takeUntil,
          /* harmony export */
        });
        /* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../innerSubscribe */ 6688);

        function takeUntil(notifier) {
          return (source) => source.lift(new TakeUntilOperator(notifier));
        }
        class TakeUntilOperator {
          constructor(notifier) {
            this.notifier = notifier;
          }
          call(subscriber, source) {
            const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
            const notifierSubscription = (0,
            _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(
              this.notifier,
              new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(
                takeUntilSubscriber
              )
            );
            if (notifierSubscription && !takeUntilSubscriber.seenValue) {
              takeUntilSubscriber.add(notifierSubscription);
              return source.subscribe(takeUntilSubscriber);
            }
            return takeUntilSubscriber;
          }
        }
        class TakeUntilSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
          constructor(destination) {
            super(destination);
            this.seenValue = false;
          }
          notifyNext() {
            this.seenValue = true;
            this.complete();
          }
          notifyComplete() {}
        }

        /***/
      },

    /***/ 3102:
      /*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js ***!
  \*******************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AnimationFrameAction: () =>
            /* binding */ AnimationFrameAction,
          /* harmony export */
        });
        /* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./AsyncAction */ 1614);

        class AnimationFrameAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
          constructor(scheduler, work) {
            super(scheduler, work);
            this.scheduler = scheduler;
            this.work = work;
          }
          requestAsyncId(scheduler, id, delay = 0) {
            if (delay !== null && delay > 0) {
              return super.requestAsyncId(scheduler, id, delay);
            }
            scheduler.actions.push(this);
            return (
              scheduler.scheduled ||
              (scheduler.scheduled = requestAnimationFrame(() =>
                scheduler.flush(null)
              ))
            );
          }
          recycleAsyncId(scheduler, id, delay = 0) {
            if (
              (delay !== null && delay > 0) ||
              (delay === null && this.delay > 0)
            ) {
              return super.recycleAsyncId(scheduler, id, delay);
            }
            if (scheduler.actions.length === 0) {
              cancelAnimationFrame(id);
              scheduler.scheduled = undefined;
            }
            return undefined;
          }
        }

        /***/
      },

    /***/ 1723:
      /*!**********************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js ***!
  \**********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AnimationFrameScheduler: () =>
            /* binding */ AnimationFrameScheduler,
          /* harmony export */
        });
        /* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./AsyncScheduler */ 666);

        class AnimationFrameScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
          flush(action) {
            this.active = true;
            this.scheduled = undefined;
            const { actions } = this;
            let error;
            let index = -1;
            let count = actions.length;
            action = action || actions.shift();
            do {
              if ((error = action.execute(action.state, action.delay))) {
                break;
              }
            } while (++index < count && (action = actions.shift()));
            this.active = false;
            if (error) {
              while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
              }
              throw error;
            }
          }
        }

        /***/
      },

    /***/ 3566:
      /*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ animationFrame: () =>
            /* binding */ animationFrame,
          /* harmony export */ animationFrameScheduler: () =>
            /* binding */ animationFrameScheduler,
          /* harmony export */
        });
        /* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./AnimationFrameAction */ 3102);
        /* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./AnimationFrameScheduler */ 1723);

        const animationFrameScheduler =
          new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__.AnimationFrameScheduler(
            _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__.AnimationFrameAction
          );
        const animationFrame = animationFrameScheduler;

        /***/
      },

    /***/ 8719:
      /*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isObservable.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ isObservable: () => /* binding */ isObservable,
          /* harmony export */
        });
        /* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../Observable */ 1689);

        function isObservable(obj) {
          return (
            !!obj &&
            (obj instanceof
              _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable ||
              (typeof obj.lift === "function" &&
                typeof obj.subscribe === "function"))
          );
        }

        /***/
      },

    /***/ 4099:
      /*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
      /***/ (module) => {
        module.exports =
          "#oculoiner {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#oculoiner strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#oculoiner p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#oculoiner a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcnJvaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY2Fycm9pbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjYXJyb2luZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY2Fycm9pbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

        /***/
      },

    /***/ 8380:
      /*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
      /***/ (module) => {
        module.exports =
          '<ion-header>\n  <ion-grid>\n    <ion-row class="ion-justify-content-between ion-align-items-center">\n      <ion-col class="ion-text-start">\n        <div class="ion-text-justify ion-padding-start">\n          <h1>Carros</h1>\n        </div>\n      </ion-col>\n      <ion-col class="ion-text-end">\n        <ion-button (click)="logOut()">\n            <ion-icon class="ion-margin-end" name="log-out-outline"></ion-icon>\n            Sair\n          </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content class="ion-padding ion-text-end" scroll-y="false">\n  <ion-button class="ion-margin-bottom" routerLink="/oculo/cadastro/new" routerDirection="root">\n    <ion-icon class="ion-margin-end" name="add-outline"></ion-icon>\n    <!-- <ion-icon name="create-outline" ></ion-icon> -->\n    Incluir\n  </ion-button>\n  <ion-content scroll-y="true" class="ion-margin-top ion-margin-top">\n    <ion-list>\n      <!-- <ion-item *ngFor="let conta of listaContas"> -->\n      <ion-card class="ion-text-start" *ngFor="let oculo of listaCarros">\n        <ion-card-header>\n          <ion-grid>\n            <ion-row>\n              <ion-col [routerLink]="[\'/oculo/cadastro/\', oculo.id]">\n                <ion-card-title>{{oculo.nome}}</ion-card-title>\n                <ion-card-subtitle>{{oculo.marca}}</ion-card-subtitle>\n              </ion-col>\n              <ion-col class="ion-text-end">\n                <ion-icon name="trash" (click)="remove(oculo)"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-header>\n      \n        <ion-card-content>\n          {{oculo.descricao}}\n        </ion-card-content>\n      \n        <img [src]="oculo.imageUrl" alt="" [routerLink]="[\'/oculo/cadastro/\', oculo.id]">\n      </ion-card>\n    </ion-list>\n\n   \n  </ion-content>\n</ion-content>\n\n<!-- <ion-footer collapse="fade">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer> -->';

        /***/
      },

    /***/ 6142:
      /*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/bidi.mjs ***!
  \*****************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ BidiModule: () => /* binding */ BidiModule,
          /* harmony export */ DIR_DOCUMENT: () => /* binding */ DIR_DOCUMENT,
          /* harmony export */ Dir: () => /* binding */ Dir,
          /* harmony export */ Directionality: () =>
            /* binding */ Directionality,
          /* harmony export */
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 1109);
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/common */ 8143);

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * Injection token used to inject the document into Directionality.
         * This is used so that the value can be faked in tests.
         *
         * We can't use the real document in tests because changing the real `dir` causes geometry-based
         * tests in Safari to fail.
         *
         * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
         * themselves use things like `querySelector` in test code.
         *
         * This token is defined in a separate file from Directionality as a workaround for
         * https://github.com/angular/angular/issues/22559
         *
         * @docs-private
         */

        const DIR_DOCUMENT =
          new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(
            "cdk-dir-doc",
            {
              providedIn: "root",
              factory: DIR_DOCUMENT_FACTORY,
            }
          );
        /** @docs-private */

        function DIR_DOCUMENT_FACTORY() {
          return (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT
          );
        }
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /** Regex that matches locales with an RTL script. Taken from `goog.i18n.bidi.isRtlLanguage`. */

        const RTL_LOCALE_PATTERN =
          /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
        /** Resolves a string value to a specific direction. */

        function _resolveDirectionality(rawValue) {
          const value =
            (rawValue === null || rawValue === void 0
              ? void 0
              : rawValue.toLowerCase()) || "";

          if (
            value === "auto" &&
            typeof navigator !== "undefined" &&
            (navigator === null || navigator === void 0
              ? void 0
              : navigator.language)
          ) {
            return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
          }

          return value === "rtl" ? "rtl" : "ltr";
        }
        /**
         * The directionality (LTR / RTL) context for the application (or a subtree of it).
         * Exposes the current direction and a stream of direction changes.
         */

        class Directionality {
          constructor(_document) {
            /** The current 'ltr' or 'rtl' value. */
            this.value = "ltr";
            /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */

            this.change =
              new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

            if (_document) {
              const bodyDir = _document.body ? _document.body.dir : null;
              const htmlDir = _document.documentElement
                ? _document.documentElement.dir
                : null;
              this.value = _resolveDirectionality(bodyDir || htmlDir || "ltr");
            }
          }

          ngOnDestroy() {
            this.change.complete();
          }
        }

        Directionality.ɵfac = function Directionality_Factory(t) {
          return new (t || Directionality)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              DIR_DOCUMENT,
              8
            )
          );
        };

        Directionality.ɵprov =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineInjectable"
          ]({
            token: Directionality,
            factory: Directionality.ɵfac,
            providedIn: "root",
          });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              Directionality,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
                  args: [
                    {
                      providedIn: "root",
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: undefined,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional,
                      },
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                        args: [DIR_DOCUMENT],
                      },
                    ],
                  },
                ];
              },
              null
            );
        })();
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * Directive to listen for changes of direction of part of the DOM.
         *
         * Provides itself as Directionality such that descendant directives only need to ever inject
         * Directionality to get the closest direction.
         */

        class Dir {
          constructor() {
            /** Normalized direction that accounts for invalid/unsupported values. */
            this._dir = "ltr";
            /** Whether the `value` has been set to its initial value. */

            this._isInitialized = false;
            /** Event emitted when the direction changes. */

            this.change =
              new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          }
          /** @docs-private */

          get dir() {
            return this._dir;
          }

          set dir(value) {
            const previousValue = this._dir; // Note: `_resolveDirectionality` resolves the language based on the browser's language,
            // whereas the browser does it based on the content of the element. Since doing so based
            // on the content can be expensive, for now we're doing the simpler matching.

            this._dir = _resolveDirectionality(value);
            this._rawDir = value;

            if (previousValue !== this._dir && this._isInitialized) {
              this.change.emit(this._dir);
            }
          }
          /** Current layout direction of the element. */

          get value() {
            return this.dir;
          }
          /** Initialize once default value has been set. */

          ngAfterContentInit() {
            this._isInitialized = true;
          }

          ngOnDestroy() {
            this.change.complete();
          }
        }

        Dir.ɵfac = function Dir_Factory(t) {
          return new (t || Dir)();
        };

        Dir.ɵdir = /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineDirective"
        ]({
          type: Dir,
          selectors: [["", "dir", ""]],
          hostVars: 1,
          hostBindings: function Dir_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"](
                "dir",
                ctx._rawDir
              );
            }
          },
          inputs: {
            dir: "dir",
          },
          outputs: {
            change: "dirChange",
          },
          exportAs: ["dir"],
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
              {
                provide: Directionality,
                useExisting: Dir,
              },
            ]),
          ],
        });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              Dir,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
                  args: [
                    {
                      selector: "[dir]",
                      providers: [
                        {
                          provide: Directionality,
                          useExisting: Dir,
                        },
                      ],
                      host: {
                        "[attr.dir]": "_rawDir",
                      },
                      exportAs: "dir",
                    },
                  ],
                },
              ],
              null,
              {
                change: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
                    args: ["dirChange"],
                  },
                ],
                dir: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                  },
                ],
              }
            );
        })();
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        class BidiModule {}

        BidiModule.ɵfac = function BidiModule_Factory(t) {
          return new (t || BidiModule)();
        };

        BidiModule.ɵmod =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineNgModule"
          ]({
            type: BidiModule,
            declarations: [Dir],
            exports: [Dir],
          });
        BidiModule.ɵinj =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineInjector"
          ]({});

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              BidiModule,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
                  args: [
                    {
                      exports: [Dir],
                      declarations: [Dir],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * Generated bundle index. Do not edit.
         */

        /***/
      },

    /***/ 526:
      /*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/coercion.mjs ***!
  \*********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ _isNumberValue: () =>
            /* binding */ _isNumberValue,
          /* harmony export */ coerceArray: () => /* binding */ coerceArray,
          /* harmony export */ coerceBooleanProperty: () =>
            /* binding */ coerceBooleanProperty,
          /* harmony export */ coerceCssPixelValue: () =>
            /* binding */ coerceCssPixelValue,
          /* harmony export */ coerceElement: () => /* binding */ coerceElement,
          /* harmony export */ coerceNumberProperty: () =>
            /* binding */ coerceNumberProperty,
          /* harmony export */ coerceStringArray: () =>
            /* binding */ coerceStringArray,
          /* harmony export */
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 1109);

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /** Coerces a data-bound value (typically a string) to a boolean. */
        function coerceBooleanProperty(value) {
          return value != null && `${value}` !== "false";
        }

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        function coerceNumberProperty(value, fallbackValue = 0) {
          return _isNumberValue(value) ? Number(value) : fallbackValue;
        }
        /**
         * Whether the provided value is considered a number.
         * @docs-private
         */
        function _isNumberValue(value) {
          // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
          // and other non-number values as NaN, where Number just uses 0) but it considers the string
          // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
          return !isNaN(parseFloat(value)) && !isNaN(Number(value));
        }

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        function coerceArray(value) {
          return Array.isArray(value) ? value : [value];
        }

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /** Coerces a value to a CSS pixel value. */
        function coerceCssPixelValue(value) {
          if (value == null) {
            return "";
          }
          return typeof value === "string" ? value : `${value}px`;
        }

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * Coerces an ElementRef or an Element into an element.
         * Useful for APIs that can accept either a ref or the native element itself.
         */
        function coerceElement(elementOrRef) {
          return elementOrRef instanceof
            _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
            ? elementOrRef.nativeElement
            : elementOrRef;
        }

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * Coerces a value to an array of trimmed non-empty strings.
         * Any input that is not an array, `null` or `undefined` will be turned into a string
         * via `toString()` and subsequently split with the given separator.
         * `null` and `undefined` will result in an empty array.
         * This results in the following outcomes:
         * - `null` -&gt; `[]`
         * - `[null]` -&gt; `["null"]`
         * - `["a", "b ", " "]` -&gt; `["a", "b"]`
         * - `[1, [2, 3]]` -&gt; `["1", "2,3"]`
         * - `[{ a: 0 }]` -&gt; `["[object Object]"]`
         * - `{ a: 0 }` -&gt; `["[object", "Object]"]`
         *
         * Useful for defining CSS classes or table columns.
         * @param value the value to coerce into an array of strings
         * @param separator split-separator if value isn't an array
         */
        function coerceStringArray(value, separator = /\s+/) {
          const result = [];
          if (value != null) {
            const sourceValues = Array.isArray(value)
              ? value
              : `${value}`.split(separator);
            for (const sourceValue of sourceValues) {
              const trimmedString = `${sourceValue}`.trim();
              if (trimmedString) {
                result.push(trimmedString);
              }
            }
          }
          return result;
        }

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /***/
      },

    /***/ 9913:
      /*!************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/collections.mjs ***!
  \************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ArrayDataSource: () =>
            /* binding */ ArrayDataSource,
          /* harmony export */ DataSource: () => /* binding */ DataSource,
          /* harmony export */ SelectionModel: () =>
            /* binding */ SelectionModel,
          /* harmony export */ UniqueSelectionDispatcher: () =>
            /* binding */ UniqueSelectionDispatcher,
          /* harmony export */ _DisposeViewRepeaterStrategy: () =>
            /* binding */ _DisposeViewRepeaterStrategy,
          /* harmony export */ _RecycleViewRepeaterStrategy: () =>
            /* binding */ _RecycleViewRepeaterStrategy,
          /* harmony export */ _VIEW_REPEATER_STRATEGY: () =>
            /* binding */ _VIEW_REPEATER_STRATEGY,
          /* harmony export */ getMultipleValuesInSingleSelectionError: () =>
            /* binding */ getMultipleValuesInSingleSelectionError,
          /* harmony export */ isDataSource: () => /* binding */ isDataSource,
          /* harmony export */
        });
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! rxjs */ 8719);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! rxjs */ 3815);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! rxjs */ 6671);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/core */ 1109);

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        class DataSource {}
        /** Checks whether an object is a data source. */

        function isDataSource(value) {
          // Check if the value is a DataSource by observing if it has a connect function. Cannot
          // be checked as an `instanceof DataSource` since people could create their own sources
          // that match the interface, but don't extend DataSource.
          return value && typeof value.connect === "function";
        }
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /** DataSource wrapper for a native array. */

        class ArrayDataSource extends DataSource {
          constructor(_data) {
            super();
            this._data = _data;
          }

          connect() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.isObservable)(
              this._data
            )
              ? this._data
              : (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this._data);
          }

          disconnect() {}
        }
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * A repeater that destroys views when they are removed from a
         * {@link ViewContainerRef}. When new items are inserted into the container,
         * the repeater will always construct a new embedded view for each item.
         *
         * @template T The type for the embedded view's $implicit property.
         * @template R The type for the item in each IterableDiffer change record.
         * @template C The type for the context passed to each embedded view.
         */

        class _DisposeViewRepeaterStrategy {
          applyChanges(
            changes,
            viewContainerRef,
            itemContextFactory,
            itemValueResolver,
            itemViewChanged
          ) {
            changes.forEachOperation(
              (record, adjustedPreviousIndex, currentIndex) => {
                let view;
                let operation;

                if (record.previousIndex == null) {
                  const insertContext = itemContextFactory(
                    record,
                    adjustedPreviousIndex,
                    currentIndex
                  );
                  view = viewContainerRef.createEmbeddedView(
                    insertContext.templateRef,
                    insertContext.context,
                    insertContext.index
                  );
                  operation = 1;
                  /* INSERTED */
                } else if (currentIndex == null) {
                  viewContainerRef.remove(adjustedPreviousIndex);
                  operation = 3;
                  /* REMOVED */
                } else {
                  view = viewContainerRef.get(adjustedPreviousIndex);
                  viewContainerRef.move(view, currentIndex);
                  operation = 2;
                  /* MOVED */
                }

                if (itemViewChanged) {
                  itemViewChanged({
                    context:
                      view === null || view === void 0 ? void 0 : view.context,
                    operation,
                    record,
                  });
                }
              }
            );
          }

          detach() {}
        }
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * A repeater that caches views when they are removed from a
         * {@link ViewContainerRef}. When new items are inserted into the container,
         * the repeater will reuse one of the cached views instead of creating a new
         * embedded view. Recycling cached views reduces the quantity of expensive DOM
         * inserts.
         *
         * @template T The type for the embedded view's $implicit property.
         * @template R The type for the item in each IterableDiffer change record.
         * @template C The type for the context passed to each embedded view.
         */

        class _RecycleViewRepeaterStrategy {
          constructor() {
            /**
             * The size of the cache used to store unused views.
             * Setting the cache size to `0` will disable caching. Defaults to 20 views.
             */
            this.viewCacheSize = 20;
            /**
             * View cache that stores embedded view instances that have been previously stamped out,
             * but don't are not currently rendered. The view repeater will reuse these views rather than
             * creating brand new ones.
             *
             * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
             */

            this._viewCache = [];
          }
          /** Apply changes to the DOM. */

          applyChanges(
            changes,
            viewContainerRef,
            itemContextFactory,
            itemValueResolver,
            itemViewChanged
          ) {
            // Rearrange the views to put them in the right location.
            changes.forEachOperation(
              (record, adjustedPreviousIndex, currentIndex) => {
                let view;
                let operation;

                if (record.previousIndex == null) {
                  // Item added.
                  const viewArgsFactory = () =>
                    itemContextFactory(
                      record,
                      adjustedPreviousIndex,
                      currentIndex
                    );

                  view = this._insertView(
                    viewArgsFactory,
                    currentIndex,
                    viewContainerRef,
                    itemValueResolver(record)
                  );
                  operation = view
                    ? 1
                    : /* INSERTED */
                      0;
                  /* REPLACED */
                } else if (currentIndex == null) {
                  // Item removed.
                  this._detachAndCacheView(
                    adjustedPreviousIndex,
                    viewContainerRef
                  );

                  operation = 3;
                  /* REMOVED */
                } else {
                  // Item moved.
                  view = this._moveView(
                    adjustedPreviousIndex,
                    currentIndex,
                    viewContainerRef,
                    itemValueResolver(record)
                  );
                  operation = 2;
                  /* MOVED */
                }

                if (itemViewChanged) {
                  itemViewChanged({
                    context:
                      view === null || view === void 0 ? void 0 : view.context,
                    operation,
                    record,
                  });
                }
              }
            );
          }

          detach() {
            for (const view of this._viewCache) {
              view.destroy();
            }

            this._viewCache = [];
          }
          /**
           * Inserts a view for a new item, either from the cache or by creating a new
           * one. Returns `undefined` if the item was inserted into a cached view.
           */

          _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
            const cachedView = this._insertViewFromCache(
              currentIndex,
              viewContainerRef
            );

            if (cachedView) {
              cachedView.context.$implicit = value;
              return undefined;
            }

            const viewArgs = viewArgsFactory();
            return viewContainerRef.createEmbeddedView(
              viewArgs.templateRef,
              viewArgs.context,
              viewArgs.index
            );
          }
          /** Detaches the view at the given index and inserts into the view cache. */

          _detachAndCacheView(index, viewContainerRef) {
            const detachedView = viewContainerRef.detach(index);

            this._maybeCacheView(detachedView, viewContainerRef);
          }
          /** Moves view at the previous index to the current index. */

          _moveView(
            adjustedPreviousIndex,
            currentIndex,
            viewContainerRef,
            value
          ) {
            const view = viewContainerRef.get(adjustedPreviousIndex);
            viewContainerRef.move(view, currentIndex);
            view.context.$implicit = value;
            return view;
          }
          /**
           * Cache the given detached view. If the cache is full, the view will be
           * destroyed.
           */

          _maybeCacheView(view, viewContainerRef) {
            if (this._viewCache.length < this.viewCacheSize) {
              this._viewCache.push(view);
            } else {
              const index = viewContainerRef.indexOf(view); // The host component could remove views from the container outside of
              // the view repeater. It's unlikely this will occur, but just in case,
              // destroy the view on its own, otherwise destroy it through the
              // container to ensure that all the references are removed.

              if (index === -1) {
                view.destroy();
              } else {
                viewContainerRef.remove(index);
              }
            }
          }
          /** Inserts a recycled view from the cache at the given index. */

          _insertViewFromCache(index, viewContainerRef) {
            const cachedView = this._viewCache.pop();

            if (cachedView) {
              viewContainerRef.insert(cachedView, index);
            }

            return cachedView || null;
          }
        }
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * Class to be used to power selecting one or more options from a list.
         */

        class SelectionModel {
          constructor(
            _multiple = false,
            initiallySelectedValues,
            _emitChanges = true
          ) {
            this._multiple = _multiple;
            this._emitChanges = _emitChanges;
            /** Currently-selected values. */

            this._selection = new Set();
            /** Keeps track of the deselected options that haven't been emitted by the change event. */

            this._deselectedToEmit = [];
            /** Keeps track of the selected options that haven't been emitted by the change event. */

            this._selectedToEmit = [];
            /** Event emitted when the value has changed. */

            this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();

            if (initiallySelectedValues && initiallySelectedValues.length) {
              if (_multiple) {
                initiallySelectedValues.forEach((value) =>
                  this._markSelected(value)
                );
              } else {
                this._markSelected(initiallySelectedValues[0]);
              } // Clear the array in order to avoid firing the change event for preselected values.

              this._selectedToEmit.length = 0;
            }
          }
          /** Selected values. */

          get selected() {
            if (!this._selected) {
              this._selected = Array.from(this._selection.values());
            }

            return this._selected;
          }
          /**
           * Selects a value or an array of values.
           */

          select(...values) {
            this._verifyValueAssignment(values);

            values.forEach((value) => this._markSelected(value));

            this._emitChangeEvent();
          }
          /**
           * Deselects a value or an array of values.
           */

          deselect(...values) {
            this._verifyValueAssignment(values);

            values.forEach((value) => this._unmarkSelected(value));

            this._emitChangeEvent();
          }
          /**
           * Toggles a value between selected and deselected.
           */

          toggle(value) {
            this.isSelected(value) ? this.deselect(value) : this.select(value);
          }
          /**
           * Clears all of the selected values.
           */

          clear() {
            this._unmarkAll();

            this._emitChangeEvent();
          }
          /**
           * Determines whether a value is selected.
           */

          isSelected(value) {
            return this._selection.has(value);
          }
          /**
           * Determines whether the model does not have a value.
           */

          isEmpty() {
            return this._selection.size === 0;
          }
          /**
           * Determines whether the model has a value.
           */

          hasValue() {
            return !this.isEmpty();
          }
          /**
           * Sorts the selected values based on a predicate function.
           */

          sort(predicate) {
            if (this._multiple && this.selected) {
              this._selected.sort(predicate);
            }
          }
          /**
           * Gets whether multiple values can be selected.
           */

          isMultipleSelection() {
            return this._multiple;
          }
          /** Emits a change event and clears the records of selected and deselected values. */

          _emitChangeEvent() {
            // Clear the selected values so they can be re-cached.
            this._selected = null;

            if (this._selectedToEmit.length || this._deselectedToEmit.length) {
              this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit,
              });
              this._deselectedToEmit = [];
              this._selectedToEmit = [];
            }
          }
          /** Selects a value. */

          _markSelected(value) {
            if (!this.isSelected(value)) {
              if (!this._multiple) {
                this._unmarkAll();
              }

              this._selection.add(value);

              if (this._emitChanges) {
                this._selectedToEmit.push(value);
              }
            }
          }
          /** Deselects a value. */

          _unmarkSelected(value) {
            if (this.isSelected(value)) {
              this._selection.delete(value);

              if (this._emitChanges) {
                this._deselectedToEmit.push(value);
              }
            }
          }
          /** Clears out the selected values. */

          _unmarkAll() {
            if (!this.isEmpty()) {
              this._selection.forEach((value) => this._unmarkSelected(value));
            }
          }
          /**
           * Verifies the value assignment and throws an error if the specified value array is
           * including multiple values while the selection model is not supporting multiple values.
           */

          _verifyValueAssignment(values) {
            if (
              values.length > 1 &&
              !this._multiple &&
              (typeof ngDevMode === "undefined" || ngDevMode)
            ) {
              throw getMultipleValuesInSingleSelectionError();
            }
          }
        }
        /**
         * Returns an error that reports that multiple values are passed into a selection model
         * with a single value.
         * @docs-private
         */

        function getMultipleValuesInSingleSelectionError() {
          return Error(
            "Cannot pass multiple values into SelectionModel with single-value mode."
          );
        }
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * Class to coordinate unique selection based on name.
         * Intended to be consumed as an Angular service.
         * This service is needed because native radio change events are only fired on the item currently
         * being selected, and we still need to uncheck the previous selection.
         *
         * This service does not *store* any IDs and names because they may change at any time, so it is
         * less error-prone if they are simply passed through when the events occur.
         */

        class UniqueSelectionDispatcher {
          constructor() {
            this._listeners = [];
          }
          /**
           * Notify other items that selection for the given name has been set.
           * @param id ID of the item.
           * @param name Name of the item.
           */

          notify(id, name) {
            for (let listener of this._listeners) {
              listener(id, name);
            }
          }
          /**
           * Listen for future changes to item selection.
           * @return Function used to deregister listener
           */

          listen(listener) {
            this._listeners.push(listener);

            return () => {
              this._listeners = this._listeners.filter((registered) => {
                return listener !== registered;
              });
            };
          }

          ngOnDestroy() {
            this._listeners = [];
          }
        }

        UniqueSelectionDispatcher.ɵfac =
          function UniqueSelectionDispatcher_Factory(t) {
            return new (t || UniqueSelectionDispatcher)();
          };

        UniqueSelectionDispatcher.ɵprov =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_3__[
            "ɵɵdefineInjectable"
          ]({
            token: UniqueSelectionDispatcher,
            factory: UniqueSelectionDispatcher.ɵfac,
            providedIn: "root",
          });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](
              UniqueSelectionDispatcher,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
                  args: [
                    {
                      providedIn: "root",
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * Injection token for {@link _ViewRepeater}. This token is for use by Angular Material only.
         * @docs-private
         */

        const _VIEW_REPEATER_STRATEGY =
          new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken(
            "_ViewRepeater"
          );
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * Generated bundle index. Do not edit.
         */

        /***/
      },

    /***/ 4168:
      /*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/platform.mjs ***!
  \*********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Platform: () => /* binding */ Platform,
          /* harmony export */ PlatformModule: () =>
            /* binding */ PlatformModule,
          /* harmony export */ _getEventTarget: () =>
            /* binding */ _getEventTarget,
          /* harmony export */ _getFocusedElementPierceShadowDom: () =>
            /* binding */ _getFocusedElementPierceShadowDom,
          /* harmony export */ _getShadowRoot: () =>
            /* binding */ _getShadowRoot,
          /* harmony export */ _isTestEnvironment: () =>
            /* binding */ _isTestEnvironment,
          /* harmony export */ _supportsShadowDom: () =>
            /* binding */ _supportsShadowDom,
          /* harmony export */ getRtlScrollAxisType: () =>
            /* binding */ getRtlScrollAxisType,
          /* harmony export */ getSupportedInputTypes: () =>
            /* binding */ getSupportedInputTypes,
          /* harmony export */ normalizePassiveListenerOptions: () =>
            /* binding */ normalizePassiveListenerOptions,
          /* harmony export */ supportsPassiveEventListeners: () =>
            /* binding */ supportsPassiveEventListeners,
          /* harmony export */ supportsScrollBehavior: () =>
            /* binding */ supportsScrollBehavior,
          /* harmony export */
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 1109);
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/common */ 8143);

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        // Whether the current platform supports the V8 Break Iterator. The V8 check
        // is necessary to detect all Blink based browsers.

        let hasV8BreakIterator; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
        // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
        // the consumer is providing a polyfilled `Map`. See:
        // https://github.com/Microsoft/ChakraCore/issues/3189
        // https://github.com/angular/components/issues/15687

        try {
          hasV8BreakIterator =
            typeof Intl !== "undefined" && Intl.v8BreakIterator;
        } catch (_a) {
          hasV8BreakIterator = false;
        }
        /**
         * Service to detect the current platform by comparing the userAgent strings and
         * checking browser-specific global properties.
         */

        class Platform {
          constructor(_platformId) {
            this._platformId = _platformId; // We want to use the Angular platform check because if the Document is shimmed
            // without the navigator, the following checks will fail. This is preferred because
            // sometimes the Document may be shimmed without the user's knowledge or intention

            /** Whether the Angular application is being rendered in the browser. */

            this.isBrowser = this._platformId
              ? (0,
                _angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(
                  this._platformId
                )
              : typeof document === "object" && !!document;
            /** Whether the current browser is Microsoft Edge. */

            this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
            /** Whether the current rendering engine is Microsoft Trident. */

            this.TRIDENT =
              this.isBrowser && /(msie|trident)/i.test(navigator.userAgent); // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.

            /** Whether the current rendering engine is Blink. */

            this.BLINK =
              this.isBrowser &&
              !!(window.chrome || hasV8BreakIterator) &&
              typeof CSS !== "undefined" &&
              !this.EDGE &&
              !this.TRIDENT; // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
            // ensure that Webkit runs standalone and is not used as another engine's base.

            /** Whether the current rendering engine is WebKit. */

            this.WEBKIT =
              this.isBrowser &&
              /AppleWebKit/i.test(navigator.userAgent) &&
              !this.BLINK &&
              !this.EDGE &&
              !this.TRIDENT;
            /** Whether the current platform is Apple iOS. */

            this.IOS =
              this.isBrowser &&
              /iPad|iPhone|iPod/.test(navigator.userAgent) &&
              !("MSStream" in window); // It's difficult to detect the plain Gecko engine, because most of the browsers identify
            // them self as Gecko-like browsers and modify the userAgent's according to that.
            // Since we only cover one explicit Firefox case, we can simply check for Firefox
            // instead of having an unstable check for Gecko.

            /** Whether the current browser is Firefox. */

            this.FIREFOX =
              this.isBrowser &&
              /(firefox|minefield)/i.test(navigator.userAgent);
            /** Whether the current platform is Android. */
            // Trident on mobile adds the android platform to the userAgent to trick detections.

            this.ANDROID =
              this.isBrowser &&
              /android/i.test(navigator.userAgent) &&
              !this.TRIDENT; // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
            // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
            // Safari browser should also use Webkit as its layout engine.

            /** Whether the current browser is Safari. */

            this.SAFARI =
              this.isBrowser &&
              /safari/i.test(navigator.userAgent) &&
              this.WEBKIT;
          }
        }

        Platform.ɵfac = function Platform_Factory(t) {
          return new (t || Platform)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID
            )
          );
        };

        Platform.ɵprov =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineInjectable"
          ]({
            token: Platform,
            factory: Platform.ɵfac,
            providedIn: "root",
          });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              Platform,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
                  args: [
                    {
                      providedIn: "root",
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: Object,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                        args: [
                          _angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID,
                        ],
                      },
                    ],
                  },
                ];
              },
              null
            );
        })();
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        class PlatformModule {}

        PlatformModule.ɵfac = function PlatformModule_Factory(t) {
          return new (t || PlatformModule)();
        };

        PlatformModule.ɵmod =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineNgModule"
          ]({
            type: PlatformModule,
          });
        PlatformModule.ɵinj =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineInjector"
          ]({});

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              PlatformModule,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
                  args: [{}],
                },
              ],
              null,
              null
            );
        })();
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /** Cached result Set of input types support by the current browser. */

        let supportedInputTypes;
        /** Types of `<input>` that *might* be supported. */

        const candidateInputTypes = [
          // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
          // first changing it to something else:
          // The specified value "" does not conform to the required format.
          // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
          "color",
          "button",
          "checkbox",
          "date",
          "datetime-local",
          "email",
          "file",
          "hidden",
          "image",
          "month",
          "number",
          "password",
          "radio",
          "range",
          "reset",
          "search",
          "submit",
          "tel",
          "text",
          "time",
          "url",
          "week",
        ];
        /** @returns The input types supported by this browser. */

        function getSupportedInputTypes() {
          // Result is cached.
          if (supportedInputTypes) {
            return supportedInputTypes;
          } // We can't check if an input type is not supported until we're on the browser, so say that
          // everything is supported when not on the browser. We don't use `Platform` here since it's
          // just a helper function and can't inject it.

          if (typeof document !== "object" || !document) {
            supportedInputTypes = new Set(candidateInputTypes);
            return supportedInputTypes;
          }

          let featureTestInput = document.createElement("input");
          supportedInputTypes = new Set(
            candidateInputTypes.filter((value) => {
              featureTestInput.setAttribute("type", value);
              return featureTestInput.type === value;
            })
          );
          return supportedInputTypes;
        }
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /** Cached result of whether the user's browser supports passive event listeners. */

        let supportsPassiveEvents;
        /**
         * Checks whether the user's browser supports passive event listeners.
         * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
         */

        function supportsPassiveEventListeners() {
          if (supportsPassiveEvents == null && typeof window !== "undefined") {
            try {
              window.addEventListener(
                "test",
                null,
                Object.defineProperty({}, "passive", {
                  get: () => (supportsPassiveEvents = true),
                })
              );
            } finally {
              supportsPassiveEvents = supportsPassiveEvents || false;
            }
          }

          return supportsPassiveEvents;
        }
        /**
         * Normalizes an `AddEventListener` object to something that can be passed
         * to `addEventListener` on any browser, no matter whether it supports the
         * `options` parameter.
         * @param options Object to be normalized.
         */

        function normalizePassiveListenerOptions(options) {
          return supportsPassiveEventListeners() ? options : !!options.capture;
        }
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */

        let rtlScrollAxisType;
        /** Cached result of the check that indicates whether the browser supports scroll behaviors. */

        let scrollBehaviorSupported;
        /** Check whether the browser supports scroll behaviors. */

        function supportsScrollBehavior() {
          if (scrollBehaviorSupported == null) {
            // If we're not in the browser, it can't be supported. Also check for `Element`, because
            // some projects stub out the global `document` during SSR which can throw us off.
            if (
              typeof document !== "object" ||
              !document ||
              typeof Element !== "function" ||
              !Element
            ) {
              scrollBehaviorSupported = false;
              return scrollBehaviorSupported;
            } // If the element can have a `scrollBehavior` style, we can be sure that it's supported.

            if ("scrollBehavior" in document.documentElement.style) {
              scrollBehaviorSupported = true;
            } else {
              // At this point we have 3 possibilities: `scrollTo` isn't supported at all, it's
              // supported but it doesn't handle scroll behavior, or it has been polyfilled.
              const scrollToFunction = Element.prototype.scrollTo;

              if (scrollToFunction) {
                // We can detect if the function has been polyfilled by calling `toString` on it. Native
                // functions are obfuscated using `[native code]`, whereas if it was overwritten we'd get
                // the actual function source. Via https://davidwalsh.name/detect-native-function. Consider
                // polyfilled functions as supporting scroll behavior.
                scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(
                  scrollToFunction.toString()
                );
              } else {
                scrollBehaviorSupported = false;
              }
            }
          }

          return scrollBehaviorSupported;
        }
        /**
         * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
         * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
         */

        function getRtlScrollAxisType() {
          // We can't check unless we're on the browser. Just assume 'normal' if we're not.
          if (typeof document !== "object" || !document) {
            return 0;
            /* NORMAL */
          }

          if (rtlScrollAxisType == null) {
            // Create a 1px wide scrolling container and a 2px wide content element.
            const scrollContainer = document.createElement("div");
            const containerStyle = scrollContainer.style;
            scrollContainer.dir = "rtl";
            containerStyle.width = "1px";
            containerStyle.overflow = "auto";
            containerStyle.visibility = "hidden";
            containerStyle.pointerEvents = "none";
            containerStyle.position = "absolute";
            const content = document.createElement("div");
            const contentStyle = content.style;
            contentStyle.width = "2px";
            contentStyle.height = "1px";
            scrollContainer.appendChild(content);
            document.body.appendChild(scrollContainer);
            rtlScrollAxisType = 0;
            /* NORMAL */ // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
            // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
            // dealing with one of the other two types of browsers.

            if (scrollContainer.scrollLeft === 0) {
              // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
              // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
              // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
              // return 0 when we read it again.
              scrollContainer.scrollLeft = 1;
              rtlScrollAxisType =
                scrollContainer.scrollLeft === 0
                  ? 1
                  : /* NEGATED */
                    2;
              /* INVERTED */
            }

            scrollContainer.remove();
          }

          return rtlScrollAxisType;
        }
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        let shadowDomIsSupported;
        /** Checks whether the user's browser support Shadow DOM. */

        function _supportsShadowDom() {
          if (shadowDomIsSupported == null) {
            const head = typeof document !== "undefined" ? document.head : null;
            shadowDomIsSupported = !!(
              head &&
              (head.createShadowRoot || head.attachShadow)
            );
          }

          return shadowDomIsSupported;
        }
        /** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */

        function _getShadowRoot(element) {
          if (_supportsShadowDom()) {
            const rootNode = element.getRootNode ? element.getRootNode() : null; // Note that this should be caught by `_supportsShadowDom`, but some
            // teams have been able to hit this code path on unsupported browsers.

            if (
              typeof ShadowRoot !== "undefined" &&
              ShadowRoot &&
              rootNode instanceof ShadowRoot
            ) {
              return rootNode;
            }
          }

          return null;
        }
        /**
         * Gets the currently-focused element on the page while
         * also piercing through Shadow DOM boundaries.
         */

        function _getFocusedElementPierceShadowDom() {
          let activeElement =
            typeof document !== "undefined" && document
              ? document.activeElement
              : null;

          while (activeElement && activeElement.shadowRoot) {
            const newActiveElement = activeElement.shadowRoot.activeElement;

            if (newActiveElement === activeElement) {
              break;
            } else {
              activeElement = newActiveElement;
            }
          }

          return activeElement;
        }
        /** Gets the target of an event while accounting for Shadow DOM. */

        function _getEventTarget(event) {
          // If an event is bound outside the Shadow DOM, the `event.target` will
          // point to the shadow root so we have to use `composedPath` instead.
          return event.composedPath ? event.composedPath()[0] : event.target;
        }
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /** Gets whether the code is currently running in a test environment. */

        function _isTestEnvironment() {
          // We can't use `declare const` because it causes conflicts inside Google with the real typings
          // for these symbols and we can't read them off the global object, because they don't appear to
          // be attached there for some runners like Jest.
          // (see: https://github.com/angular/components/issues/23365#issuecomment-938146643)
          return (
            // @ts-ignore
            (typeof __karma__ !== "undefined" && !!__karma__) || // @ts-ignore
            (typeof jasmine !== "undefined" && !!jasmine) || // @ts-ignore
            (typeof jest !== "undefined" && !!jest) || // @ts-ignore
            (typeof Mocha !== "undefined" && !!Mocha)
          );
        }
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * Generated bundle index. Do not edit.
         */

        /***/
      },

    /***/ 3970:
      /*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/scrolling.mjs ***!
  \**********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ CdkFixedSizeVirtualScroll: () =>
            /* binding */ CdkFixedSizeVirtualScroll,
          /* harmony export */ CdkScrollable: () => /* binding */ CdkScrollable,
          /* harmony export */ CdkScrollableModule: () =>
            /* binding */ CdkScrollableModule,
          /* harmony export */ CdkVirtualForOf: () =>
            /* binding */ CdkVirtualForOf,
          /* harmony export */ CdkVirtualScrollViewport: () =>
            /* binding */ CdkVirtualScrollViewport,
          /* harmony export */ DEFAULT_RESIZE_TIME: () =>
            /* binding */ DEFAULT_RESIZE_TIME,
          /* harmony export */ DEFAULT_SCROLL_TIME: () =>
            /* binding */ DEFAULT_SCROLL_TIME,
          /* harmony export */ FixedSizeVirtualScrollStrategy: () =>
            /* binding */ FixedSizeVirtualScrollStrategy,
          /* harmony export */ ScrollDispatcher: () =>
            /* binding */ ScrollDispatcher,
          /* harmony export */ ScrollingModule: () =>
            /* binding */ ScrollingModule,
          /* harmony export */ VIRTUAL_SCROLL_STRATEGY: () =>
            /* binding */ VIRTUAL_SCROLL_STRATEGY,
          /* harmony export */ ViewportRuler: () => /* binding */ ViewportRuler,
          /* harmony export */ _fixedSizeVirtualScrollStrategyFactory: () =>
            /* binding */ _fixedSizeVirtualScrollStrategyFactory,
          /* harmony export */
        });
        /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/cdk/coercion */ 526);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 1109);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! rxjs */ 6671);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! rxjs */ 3815);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! rxjs */ 1689);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! rxjs */ 9700);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(/*! rxjs */ 3566);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(/*! rxjs */ 7737);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(/*! rxjs */ 5755);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ =
          __webpack_require__(/*! rxjs */ 8719);
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! rxjs/operators */ 2606);
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! rxjs/operators */ 9190);
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! rxjs/operators */ 4266);
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(/*! rxjs/operators */ 907);
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(/*! rxjs/operators */ 8765);
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(/*! rxjs/operators */ 4930);
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(/*! rxjs/operators */ 3800);
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ =
          __webpack_require__(/*! rxjs/operators */ 7693);
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! @angular/common */ 8143);
        /* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! @angular/cdk/platform */ 4168);
        /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(/*! @angular/cdk/bidi */ 6142);
        /* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__ =
          __webpack_require__(/*! @angular/cdk/collections */ 9913);

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /** The injection token used to specify the virtual scrolling strategy. */

        const _c0 = ["contentWrapper"];
        const _c1 = ["*"];
        const VIRTUAL_SCROLL_STRATEGY =
          new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(
            "VIRTUAL_SCROLL_STRATEGY"
          );
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /** Virtual scrolling strategy for lists with items of known fixed size. */

        class FixedSizeVirtualScrollStrategy {
          /**
           * @param itemSize The size of the items in the virtually scrolling list.
           * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
           * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
           */
          constructor(itemSize, minBufferPx, maxBufferPx) {
            this._scrolledIndexChange =
              new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
            /** @docs-private Implemented as part of VirtualScrollStrategy. */

            this.scrolledIndexChange = this._scrolledIndexChange.pipe(
              (0,
              rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)()
            );
            /** The attached viewport. */

            this._viewport = null;
            this._itemSize = itemSize;
            this._minBufferPx = minBufferPx;
            this._maxBufferPx = maxBufferPx;
          }
          /**
           * Attaches this scroll strategy to a viewport.
           * @param viewport The viewport to attach this strategy to.
           */

          attach(viewport) {
            this._viewport = viewport;

            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /** Detaches this scroll strategy from the currently attached viewport. */

          detach() {
            this._scrolledIndexChange.complete();

            this._viewport = null;
          }
          /**
           * Update the item size and buffer size.
           * @param itemSize The size of the items in the virtually scrolling list.
           * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
           * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
           */

          updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
            if (
              maxBufferPx < minBufferPx &&
              (typeof ngDevMode === "undefined" || ngDevMode)
            ) {
              throw Error(
                "CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx"
              );
            }

            this._itemSize = itemSize;
            this._minBufferPx = minBufferPx;
            this._maxBufferPx = maxBufferPx;

            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

          onContentScrolled() {
            this._updateRenderedRange();
          }
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

          onDataLengthChanged() {
            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

          onContentRendered() {
            /* no-op */
          }
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

          onRenderedOffsetChanged() {
            /* no-op */
          }
          /**
           * Scroll to the offset for the given index.
           * @param index The index of the element to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling.
           */

          scrollToIndex(index, behavior) {
            if (this._viewport) {
              this._viewport.scrollToOffset(index * this._itemSize, behavior);
            }
          }
          /** Update the viewport's total content size. */

          _updateTotalContentSize() {
            if (!this._viewport) {
              return;
            }

            this._viewport.setTotalContentSize(
              this._viewport.getDataLength() * this._itemSize
            );
          }
          /** Update the viewport's rendered range. */

          _updateRenderedRange() {
            if (!this._viewport) {
              return;
            }

            const renderedRange = this._viewport.getRenderedRange();

            const newRange = {
              start: renderedRange.start,
              end: renderedRange.end,
            };

            const viewportSize = this._viewport.getViewportSize();

            const dataLength = this._viewport.getDataLength();

            let scrollOffset = this._viewport.measureScrollOffset(); // Prevent NaN as result when dividing by zero.

            let firstVisibleIndex =
              this._itemSize > 0 ? scrollOffset / this._itemSize : 0; // If user scrolls to the bottom of the list and data changes to a smaller list

            if (newRange.end > dataLength) {
              // We have to recalculate the first visible index based on new data length and viewport size.
              const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
              const newVisibleIndex = Math.max(
                0,
                Math.min(firstVisibleIndex, dataLength - maxVisibleItems)
              ); // If first visible index changed we must update scroll offset to handle start/end buffers
              // Current range must also be adjusted to cover the new position (bottom of new list).

              if (firstVisibleIndex != newVisibleIndex) {
                firstVisibleIndex = newVisibleIndex;
                scrollOffset = newVisibleIndex * this._itemSize;
                newRange.start = Math.floor(firstVisibleIndex);
              }

              newRange.end = Math.max(
                0,
                Math.min(dataLength, newRange.start + maxVisibleItems)
              );
            }

            const startBuffer = scrollOffset - newRange.start * this._itemSize;

            if (startBuffer < this._minBufferPx && newRange.start != 0) {
              const expandStart = Math.ceil(
                (this._maxBufferPx - startBuffer) / this._itemSize
              );
              newRange.start = Math.max(0, newRange.start - expandStart);
              newRange.end = Math.min(
                dataLength,
                Math.ceil(
                  firstVisibleIndex +
                    (viewportSize + this._minBufferPx) / this._itemSize
                )
              );
            } else {
              const endBuffer =
                newRange.end * this._itemSize - (scrollOffset + viewportSize);

              if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                const expandEnd = Math.ceil(
                  (this._maxBufferPx - endBuffer) / this._itemSize
                );

                if (expandEnd > 0) {
                  newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                  newRange.start = Math.max(
                    0,
                    Math.floor(
                      firstVisibleIndex - this._minBufferPx / this._itemSize
                    )
                  );
                }
              }
            }

            this._viewport.setRenderedRange(newRange);

            this._viewport.setRenderedContentOffset(
              this._itemSize * newRange.start
            );

            this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
          }
        }
        /**
         * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
         * `FixedSizeVirtualScrollStrategy` from the given directive.
         * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
         *     `FixedSizeVirtualScrollStrategy` from.
         */

        function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
          return fixedSizeDir._scrollStrategy;
        }
        /** A virtual scroll strategy that supports fixed-size items. */

        class CdkFixedSizeVirtualScroll {
          constructor() {
            this._itemSize = 20;
            this._minBufferPx = 100;
            this._maxBufferPx = 200;
            /** The scroll strategy used by this directive. */

            this._scrollStrategy = new FixedSizeVirtualScrollStrategy(
              this.itemSize,
              this.minBufferPx,
              this.maxBufferPx
            );
          }
          /** The size of the items in the list (in pixels). */

          get itemSize() {
            return this._itemSize;
          }

          set itemSize(value) {
            this._itemSize = (0,
            _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(
              value
            );
          }
          /**
           * The minimum amount of buffer rendered beyond the viewport (in pixels).
           * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
           */

          get minBufferPx() {
            return this._minBufferPx;
          }

          set minBufferPx(value) {
            this._minBufferPx = (0,
            _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(
              value
            );
          }
          /**
           * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
           */

          get maxBufferPx() {
            return this._maxBufferPx;
          }

          set maxBufferPx(value) {
            this._maxBufferPx = (0,
            _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(
              value
            );
          }

          ngOnChanges() {
            this._scrollStrategy.updateItemAndBufferSize(
              this.itemSize,
              this.minBufferPx,
              this.maxBufferPx
            );
          }
        }

        CdkFixedSizeVirtualScroll.ɵfac =
          function CdkFixedSizeVirtualScroll_Factory(t) {
            return new (t || CdkFixedSizeVirtualScroll)();
          };

        CdkFixedSizeVirtualScroll.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineDirective"
          ]({
            type: CdkFixedSizeVirtualScroll,
            selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
            inputs: {
              itemSize: "itemSize",
              minBufferPx: "minBufferPx",
              maxBufferPx: "maxBufferPx",
            },
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                  provide: VIRTUAL_SCROLL_STRATEGY,
                  useFactory: _fixedSizeVirtualScrollStrategyFactory,
                  deps: [
                    (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                      () => CdkFixedSizeVirtualScroll
                    ),
                  ],
                },
              ]),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵNgOnChangesFeature"
              ],
            ],
          });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              CdkFixedSizeVirtualScroll,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
                  args: [
                    {
                      selector: "cdk-virtual-scroll-viewport[itemSize]",
                      providers: [
                        {
                          provide: VIRTUAL_SCROLL_STRATEGY,
                          useFactory: _fixedSizeVirtualScrollStrategyFactory,
                          deps: [
                            (0,
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                              () => CdkFixedSizeVirtualScroll
                            ),
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
              null,
              {
                itemSize: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                  },
                ],
                minBufferPx: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                  },
                ],
                maxBufferPx: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                  },
                ],
              }
            );
        })();
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /** Time in ms to throttle the scrolling events by default. */

        const DEFAULT_SCROLL_TIME = 20;
        /**
         * Service contained all registered Scrollable references and emits an event when any one of the
         * Scrollable references emit a scrolled event.
         */

        class ScrollDispatcher {
          constructor(_ngZone, _platform, document) {
            this._ngZone = _ngZone;
            this._platform = _platform;
            /** Subject for notifying that a registered scrollable reference element has been scrolled. */

            this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
            /** Keeps track of the global `scroll` and `resize` subscriptions. */

            this._globalSubscription = null;
            /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */

            this._scrolledCount = 0;
            /**
             * Map of all the scrollable references that are registered with the service and their
             * scroll event subscriptions.
             */

            this.scrollContainers = new Map();
            this._document = document;
          }
          /**
           * Registers a scrollable instance with the service and listens for its scrolled events. When the
           * scrollable is scrolled, the service emits the event to its scrolled observable.
           * @param scrollable Scrollable instance to be registered.
           */

          register(scrollable) {
            if (!this.scrollContainers.has(scrollable)) {
              this.scrollContainers.set(
                scrollable,
                scrollable
                  .elementScrolled()
                  .subscribe(() => this._scrolled.next(scrollable))
              );
            }
          }
          /**
           * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
           * @param scrollable Scrollable instance to be deregistered.
           */

          deregister(scrollable) {
            const scrollableReference = this.scrollContainers.get(scrollable);

            if (scrollableReference) {
              scrollableReference.unsubscribe();
              this.scrollContainers.delete(scrollable);
            }
          }
          /**
           * Returns an observable that emits an event whenever any of the registered Scrollable
           * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
           * to override the default "throttle" time.
           *
           * **Note:** in order to avoid hitting change detection for every scroll event,
           * all of the events emitted from this stream will be run outside the Angular zone.
           * If you need to update any data bindings as a result of a scroll event, you have
           * to run the callback using `NgZone.run`.
           */

          scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
            if (!this._platform.isBrowser) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
            }

            return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(
              (observer) => {
                if (!this._globalSubscription) {
                  this._addGlobalListener();
                } // In the case of a 0ms delay, use an observable without auditTime
                // since it does add a perceptible delay in processing overhead.

                const subscription =
                  auditTimeInMs > 0
                    ? this._scrolled
                        .pipe(
                          (0,
                          rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(
                            auditTimeInMs
                          )
                        )
                        .subscribe(observer)
                    : this._scrolled.subscribe(observer);
                this._scrolledCount++;
                return () => {
                  subscription.unsubscribe();
                  this._scrolledCount--;

                  if (!this._scrolledCount) {
                    this._removeGlobalListener();
                  }
                };
              }
            );
          }

          ngOnDestroy() {
            this._removeGlobalListener();

            this.scrollContainers.forEach((_, container) =>
              this.deregister(container)
            );

            this._scrolled.complete();
          }
          /**
           * Returns an observable that emits whenever any of the
           * scrollable ancestors of an element are scrolled.
           * @param elementOrElementRef Element whose ancestors to listen for.
           * @param auditTimeInMs Time to throttle the scroll events.
           */

          ancestorScrolled(elementOrElementRef, auditTimeInMs) {
            const ancestors =
              this.getAncestorScrollContainers(elementOrElementRef);
            return this.scrolled(auditTimeInMs).pipe(
              (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(
                (target) => {
                  return !target || ancestors.indexOf(target) > -1;
                }
              )
            );
          }
          /** Returns all registered Scrollables that contain the provided element. */

          getAncestorScrollContainers(elementOrElementRef) {
            const scrollingContainers = [];
            this.scrollContainers.forEach((_subscription, scrollable) => {
              if (
                this._scrollableContainsElement(scrollable, elementOrElementRef)
              ) {
                scrollingContainers.push(scrollable);
              }
            });
            return scrollingContainers;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

          _getWindow() {
            return this._document.defaultView || window;
          }
          /** Returns true if the element is contained within the provided Scrollable. */

          _scrollableContainsElement(scrollable, elementOrElementRef) {
            let element = (0,
            _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(
              elementOrElementRef
            );
            let scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
            // are the scrollable's element.

            do {
              if (element == scrollableElement) {
                return true;
              }
            } while ((element = element.parentElement));

            return false;
          }
          /** Sets up the global scroll listeners. */

          _addGlobalListener() {
            this._globalSubscription = this._ngZone.runOutsideAngular(() => {
              const window = this._getWindow();

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(
                window.document,
                "scroll"
              ).subscribe(() => this._scrolled.next());
            });
          }
          /** Cleans up the global scroll listener. */

          _removeGlobalListener() {
            if (this._globalSubscription) {
              this._globalSubscription.unsubscribe();

              this._globalSubscription = null;
            }
          }
        }

        ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
          return new (t || ScrollDispatcher)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT,
              8
            )
          );
        };

        ScrollDispatcher.ɵprov =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineInjectable"
          ]({
            token: ScrollDispatcher,
            factory: ScrollDispatcher.ɵfac,
            providedIn: "root",
          });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              ScrollDispatcher,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
                  args: [
                    {
                      providedIn: "root",
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone,
                  },
                  {
                    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform,
                  },
                  {
                    type: undefined,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional,
                      },
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                        args: [
                          _angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT,
                        ],
                      },
                    ],
                  },
                ];
              },
              null
            );
        })();
        /**
         * Sends an event when the directive's element is scrolled. Registers itself with the
         * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
         * can be listened to through the service.
         */

        class CdkScrollable {
          constructor(elementRef, scrollDispatcher, ngZone, dir) {
            this.elementRef = elementRef;
            this.scrollDispatcher = scrollDispatcher;
            this.ngZone = ngZone;
            this.dir = dir;
            this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
            this._elementScrolled =
              new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) =>
                this.ngZone.runOutsideAngular(() =>
                  (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(
                    this.elementRef.nativeElement,
                    "scroll"
                  )
                    .pipe(
                      (0,
                      rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(
                        this._destroyed
                      )
                    )
                    .subscribe(observer)
                )
              );
          }

          ngOnInit() {
            this.scrollDispatcher.register(this);
          }

          ngOnDestroy() {
            this.scrollDispatcher.deregister(this);

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Returns observable that emits when a scroll event is fired on the host element. */

          elementScrolled() {
            return this._elementScrolled;
          }
          /** Gets the ElementRef for the viewport. */

          getElementRef() {
            return this.elementRef;
          }
          /**
           * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
           * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
           * left and right always refer to the left and right side of the scrolling container irrespective
           * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
           * in an RTL context.
           * @param options specified the offsets to scroll to.
           */

          scrollTo(options) {
            const el = this.elementRef.nativeElement;
            const isRtl = this.dir && this.dir.value == "rtl"; // Rewrite start & end offsets as right or left offsets.

            if (options.left == null) {
              options.left = isRtl ? options.end : options.start;
            }

            if (options.right == null) {
              options.right = isRtl ? options.start : options.end;
            } // Rewrite the bottom offset as a top offset.

            if (options.bottom != null) {
              options.top = el.scrollHeight - el.clientHeight - options.bottom;
            } // Rewrite the right offset as a left offset.

            if (
              isRtl &&
              (0,
              _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() !=
                0
              /* NORMAL */
            ) {
              if (options.left != null) {
                options.right = el.scrollWidth - el.clientWidth - options.left;
              }

              if (
                (0,
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() ==
                2
                /* INVERTED */
              ) {
                options.left = options.right;
              } else if (
                (0,
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() ==
                1
                /* NEGATED */
              ) {
                options.left = options.right ? -options.right : options.right;
              }
            } else {
              if (options.right != null) {
                options.left = el.scrollWidth - el.clientWidth - options.right;
              }
            }

            this._applyScrollToOptions(options);
          }

          _applyScrollToOptions(options) {
            const el = this.elementRef.nativeElement;

            if (
              (0,
              _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.supportsScrollBehavior)()
            ) {
              el.scrollTo(options);
            } else {
              if (options.top != null) {
                el.scrollTop = options.top;
              }

              if (options.left != null) {
                el.scrollLeft = options.left;
              }
            }
          }
          /**
           * Measures the scroll offset relative to the specified edge of the viewport. This method can be
           * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
           * about what scrollLeft means in RTL. The values returned by this method are normalized such that
           * left and right always refer to the left and right side of the scrolling container irrespective
           * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
           * in an RTL context.
           * @param from The edge to measure from.
           */

          measureScrollOffset(from) {
            const LEFT = "left";
            const RIGHT = "right";
            const el = this.elementRef.nativeElement;

            if (from == "top") {
              return el.scrollTop;
            }

            if (from == "bottom") {
              return el.scrollHeight - el.clientHeight - el.scrollTop;
            } // Rewrite start & end as left or right offsets.

            const isRtl = this.dir && this.dir.value == "rtl";

            if (from == "start") {
              from = isRtl ? RIGHT : LEFT;
            } else if (from == "end") {
              from = isRtl ? LEFT : RIGHT;
            }

            if (
              isRtl &&
              (0,
              _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() ==
                2
              /* INVERTED */
            ) {
              // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              } else {
                return el.scrollLeft;
              }
            } else if (
              isRtl &&
              (0,
              _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() ==
                1
              /* NEGATED */
            ) {
              // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
              } else {
                return -el.scrollLeft;
              }
            } else {
              // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
              // (scrollWidth - clientWidth) when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft;
              } else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              }
            }
          }
        }

        CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
          return new (t || CdkScrollable)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              ScrollDispatcher
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
              8
            )
          );
        };

        CdkScrollable.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineDirective"
          ]({
            type: CdkScrollable,
            selectors: [
              ["", "cdk-scrollable", ""],
              ["", "cdkScrollable", ""],
            ],
          });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              CdkScrollable,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
                  args: [
                    {
                      selector: "[cdk-scrollable], [cdkScrollable]",
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
                  },
                  {
                    type: ScrollDispatcher,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone,
                  },
                  {
                    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional,
                      },
                    ],
                  },
                ];
              },
              null
            );
        })();
        /** Time in ms to throttle the resize events by default. */

        const DEFAULT_RESIZE_TIME = 20;
        /**
         * Simple utility for getting the bounds of the browser viewport.
         * @docs-private
         */

        class ViewportRuler {
          constructor(_platform, ngZone, document) {
            this._platform = _platform;
            /** Stream of viewport change events. */

            this._change = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
            /** Event listener that will be used to handle the viewport change events. */

            this._changeListener = (event) => {
              this._change.next(event);
            };

            this._document = document;
            ngZone.runOutsideAngular(() => {
              if (_platform.isBrowser) {
                const window = this._getWindow(); // Note that bind the events ourselves, rather than going through something like RxJS's
                // `fromEvent` so that we can ensure that they're bound outside of the NgZone.

                window.addEventListener("resize", this._changeListener);
                window.addEventListener(
                  "orientationchange",
                  this._changeListener
                );
              } // Clear the cached position so that the viewport is re-measured next time it is required.
              // We don't need to keep track of the subscription, because it is completed on destroy.

              this.change().subscribe(() => (this._viewportSize = null));
            });
          }

          ngOnDestroy() {
            if (this._platform.isBrowser) {
              const window = this._getWindow();

              window.removeEventListener("resize", this._changeListener);
              window.removeEventListener(
                "orientationchange",
                this._changeListener
              );
            }

            this._change.complete();
          }
          /** Returns the viewport's width and height. */

          getViewportSize() {
            if (!this._viewportSize) {
              this._updateViewportSize();
            }

            const output = {
              width: this._viewportSize.width,
              height: this._viewportSize.height,
            }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

            if (!this._platform.isBrowser) {
              this._viewportSize = null;
            }

            return output;
          }
          /** Gets a ClientRect for the viewport's bounds. */

          getViewportRect() {
            // Use the document element's bounding rect rather than the window scroll properties
            // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
            // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
            // conceptual viewports. Under most circumstances these viewports are equivalent, but they
            // can disagree when the page is pinch-zoomed (on devices that support touch).
            // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
            // We use the documentElement instead of the body because, by default (without a css reset)
            // browsers typically give the document body an 8px margin, which is not included in
            // getBoundingClientRect().
            const scrollPosition = this.getViewportScrollPosition();
            const { width, height } = this.getViewportSize();
            return {
              top: scrollPosition.top,
              left: scrollPosition.left,
              bottom: scrollPosition.top + height,
              right: scrollPosition.left + width,
              height,
              width,
            };
          }
          /** Gets the (top, left) scroll position of the viewport. */

          getViewportScrollPosition() {
            // While we can get a reference to the fake document
            // during SSR, it doesn't have getBoundingClientRect.
            if (!this._platform.isBrowser) {
              return {
                top: 0,
                left: 0,
              };
            } // The top-left-corner of the viewport is determined by the scroll position of the document
            // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
            // whether `document.body` or `document.documentElement` is the scrolled element, so reading
            // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
            // `document.documentElement` works consistently, where the `top` and `left` values will
            // equal negative the scroll position.

            const document = this._document;

            const window = this._getWindow();

            const documentElement = document.documentElement;
            const documentRect = documentElement.getBoundingClientRect();
            const top =
              -documentRect.top ||
              document.body.scrollTop ||
              window.scrollY ||
              documentElement.scrollTop ||
              0;
            const left =
              -documentRect.left ||
              document.body.scrollLeft ||
              window.scrollX ||
              documentElement.scrollLeft ||
              0;
            return {
              top,
              left,
            };
          }
          /**
           * Returns a stream that emits whenever the size of the viewport changes.
           * This stream emits outside of the Angular zone.
           * @param throttleTime Time in milliseconds to throttle the stream.
           */

          change(throttleTime = DEFAULT_RESIZE_TIME) {
            return throttleTime > 0
              ? this._change.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(
                    throttleTime
                  )
                )
              : this._change;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

          _getWindow() {
            return this._document.defaultView || window;
          }
          /** Updates the cached viewport size. */

          _updateViewportSize() {
            const window = this._getWindow();

            this._viewportSize = this._platform.isBrowser
              ? {
                  width: window.innerWidth,
                  height: window.innerHeight,
                }
              : {
                  width: 0,
                  height: 0,
                };
          }
        }

        ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
          return new (t || ViewportRuler)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT,
              8
            )
          );
        };

        ViewportRuler.ɵprov =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineInjectable"
          ]({
            token: ViewportRuler,
            factory: ViewportRuler.ɵfac,
            providedIn: "root",
          });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              ViewportRuler,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
                  args: [
                    {
                      providedIn: "root",
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone,
                  },
                  {
                    type: undefined,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional,
                      },
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                        args: [
                          _angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT,
                        ],
                      },
                    ],
                  },
                ];
              },
              null
            );
        })();
        /** Checks if the given ranges are equal. */

        function rangesEqual(r1, r2) {
          return r1.start == r2.start && r1.end == r2.end;
        }
        /**
         * Scheduler to be used for scroll events. Needs to fall back to
         * something that doesn't rely on requestAnimationFrame on environments
         * that don't support it (e.g. server-side rendering).
         */

        const SCROLL_SCHEDULER =
          typeof requestAnimationFrame !== "undefined"
            ? rxjs__WEBPACK_IMPORTED_MODULE_13__.animationFrameScheduler
            : rxjs__WEBPACK_IMPORTED_MODULE_14__.asapScheduler;
        /** A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`. */

        class CdkVirtualScrollViewport extends CdkScrollable {
          constructor(
            elementRef,
            _changeDetectorRef,
            ngZone,
            _scrollStrategy,
            dir,
            scrollDispatcher,
            viewportRuler
          ) {
            super(elementRef, scrollDispatcher, ngZone, dir);
            this.elementRef = elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._scrollStrategy = _scrollStrategy;
            /** Emits when the viewport is detached from a CdkVirtualForOf. */

            this._detachedSubject =
              new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
            /** Emits when the rendered range changes. */

            this._renderedRangeSubject =
              new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
            this._orientation = "vertical";
            this._appendOnly = false; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
            // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
            // depending on how the strategy calculates the scrolled index, it may come at a cost to
            // performance.

            /** Emits when the index of the first element visible in the viewport changes. */

            this.scrolledIndexChange =
              new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) =>
                this._scrollStrategy.scrolledIndexChange.subscribe((index) =>
                  Promise.resolve().then(() =>
                    this.ngZone.run(() => observer.next(index))
                  )
                )
              );
            /** A stream that emits whenever the rendered range changes. */

            this.renderedRangeStream = this._renderedRangeSubject;
            /**
             * The total size of all content (in pixels), including content that is not currently rendered.
             */

            this._totalContentSize = 0;
            /** A string representing the `style.width` property value to be used for the spacer element. */

            this._totalContentWidth = "";
            /** A string representing the `style.height` property value to be used for the spacer element. */

            this._totalContentHeight = "";
            /** The currently rendered range of indices. */

            this._renderedRange = {
              start: 0,
              end: 0,
            };
            /** The length of the data bound to this viewport (in number of items). */

            this._dataLength = 0;
            /** The size of the viewport (in pixels). */

            this._viewportSize = 0;
            /** The last rendered content offset that was set. */

            this._renderedContentOffset = 0;
            /**
             * Whether the last rendered content offset was to the end of the content (and therefore needs to
             * be rewritten as an offset to the start of the content).
             */

            this._renderedContentOffsetNeedsRewrite = false;
            /** Whether there is a pending change detection cycle. */

            this._isChangeDetectionPending = false;
            /** A list of functions to run after the next change detection cycle. */

            this._runAfterChangeDetection = [];
            /** Subscription to changes in the viewport size. */

            this._viewportChanges =
              rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription.EMPTY;

            if (
              !_scrollStrategy &&
              (typeof ngDevMode === "undefined" || ngDevMode)
            ) {
              throw Error(
                'Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.'
              );
            }

            this._viewportChanges = viewportRuler.change().subscribe(() => {
              this.checkViewportSize();
            });
          }
          /** The direction the viewport scrolls. */

          get orientation() {
            return this._orientation;
          }

          set orientation(orientation) {
            if (this._orientation !== orientation) {
              this._orientation = orientation;

              this._calculateSpacerSize();
            }
          }
          /**
           * Whether rendered items should persist in the DOM after scrolling out of view. By default, items
           * will be removed.
           */

          get appendOnly() {
            return this._appendOnly;
          }

          set appendOnly(value) {
            this._appendOnly = (0,
            _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(
              value
            );
          }

          ngOnInit() {
            super.ngOnInit(); // It's still too early to measure the viewport at this point. Deferring with a promise allows
            // the Viewport to be rendered with the correct size before we measure. We run this outside the
            // zone to avoid causing more change detection cycles. We handle the change detection loop
            // ourselves instead.

            this.ngZone.runOutsideAngular(() =>
              Promise.resolve().then(() => {
                this._measureViewportSize();

                this._scrollStrategy.attach(this);

                this.elementScrolled()
                  .pipe(
                    // Start off with a fake scroll event so we properly detect our initial position.
                    (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(
                      null
                    ), // Collect multiple events into one until the next animation frame. This way if
                    // there are multiple scroll events in the same frame we only need to recheck
                    // our layout once.
                    (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(
                      0,
                      SCROLL_SCHEDULER
                    )
                  )
                  .subscribe(() => this._scrollStrategy.onContentScrolled());

                this._markChangeDetectionNeeded();
              })
            );
          }

          ngOnDestroy() {
            this.detach();

            this._scrollStrategy.detach(); // Complete all subjects

            this._renderedRangeSubject.complete();

            this._detachedSubject.complete();

            this._viewportChanges.unsubscribe();

            super.ngOnDestroy();
          }
          /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */

          attach(forOf) {
            if (
              this._forOf &&
              (typeof ngDevMode === "undefined" || ngDevMode)
            ) {
              throw Error("CdkVirtualScrollViewport is already attached.");
            } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
            // changes. Run outside the zone to avoid triggering change detection, since we're managing the
            // change detection loop ourselves.

            this.ngZone.runOutsideAngular(() => {
              this._forOf = forOf;

              this._forOf.dataStream
                .pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(
                    this._detachedSubject
                  )
                )
                .subscribe((data) => {
                  const newLength = data.length;

                  if (newLength !== this._dataLength) {
                    this._dataLength = newLength;

                    this._scrollStrategy.onDataLengthChanged();
                  }

                  this._doChangeDetection();
                });
            });
          }
          /** Detaches the current `CdkVirtualForOf`. */

          detach() {
            this._forOf = null;

            this._detachedSubject.next();
          }
          /** Gets the length of the data bound to this viewport (in number of items). */

          getDataLength() {
            return this._dataLength;
          }
          /** Gets the size of the viewport (in pixels). */

          getViewportSize() {
            return this._viewportSize;
          } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
          // cycle happens. I'm being careful to only call it after the render cycle is complete and before
          // setting it to something else, but its error prone and should probably be split into
          // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

          /** Get the current rendered range of items. */

          getRenderedRange() {
            return this._renderedRange;
          }
          /**
           * Sets the total size of all content (in pixels), including content that is not currently
           * rendered.
           */

          setTotalContentSize(size) {
            if (this._totalContentSize !== size) {
              this._totalContentSize = size;

              this._calculateSpacerSize();

              this._markChangeDetectionNeeded();
            }
          }
          /** Sets the currently rendered range of indices. */

          setRenderedRange(range) {
            if (!rangesEqual(this._renderedRange, range)) {
              if (this.appendOnly) {
                range = {
                  start: 0,
                  end: Math.max(this._renderedRange.end, range.end),
                };
              }

              this._renderedRangeSubject.next((this._renderedRange = range));

              this._markChangeDetectionNeeded(() =>
                this._scrollStrategy.onContentRendered()
              );
            }
          }
          /**
           * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
           */

          getOffsetToRenderedContentStart() {
            return this._renderedContentOffsetNeedsRewrite
              ? null
              : this._renderedContentOffset;
          }
          /**
           * Sets the offset from the start of the viewport to either the start or end of the rendered data
           * (in pixels).
           */

          setRenderedContentOffset(offset, to = "to-start") {
            // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
            // in the negative direction.
            const isRtl = this.dir && this.dir.value == "rtl";
            const isHorizontal = this.orientation == "horizontal";
            const axis = isHorizontal ? "X" : "Y";
            const axisDirection = isHorizontal && isRtl ? -1 : 1;
            let transform = `translate${axis}(${Number(
              axisDirection * offset
            )}px)`; // in appendOnly, we always start from the top

            offset = this.appendOnly && to === "to-start" ? 0 : offset;
            this._renderedContentOffset = offset;

            if (to === "to-end") {
              transform += ` translate${axis}(-100%)`; // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
              // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
              // expand upward).

              this._renderedContentOffsetNeedsRewrite = true;
            }

            if (this._renderedContentTransform != transform) {
              // We know this value is safe because we parse `offset` with `Number()` before passing it
              // into the string.
              this._renderedContentTransform = transform;

              this._markChangeDetectionNeeded(() => {
                if (this._renderedContentOffsetNeedsRewrite) {
                  this._renderedContentOffset -=
                    this.measureRenderedContentSize();
                  this._renderedContentOffsetNeedsRewrite = false;
                  this.setRenderedContentOffset(this._renderedContentOffset);
                } else {
                  this._scrollStrategy.onRenderedOffsetChanged();
                }
              });
            }
          }
          /**
           * Scrolls to the given offset from the start of the viewport. Please note that this is not always
           * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
           * direction, this would be the equivalent of setting a fictional `scrollRight` property.
           * @param offset The offset to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
           */

          scrollToOffset(offset, behavior = "auto") {
            const options = {
              behavior,
            };

            if (this.orientation === "horizontal") {
              options.start = offset;
            } else {
              options.top = offset;
            }

            this.scrollTo(options);
          }
          /**
           * Scrolls to the offset for the given index.
           * @param index The index of the element to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
           */

          scrollToIndex(index, behavior = "auto") {
            this._scrollStrategy.scrollToIndex(index, behavior);
          }
          /**
           * Gets the current scroll offset from the start of the viewport (in pixels).
           * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
           *     in horizontal mode.
           */

          measureScrollOffset(from) {
            return from
              ? super.measureScrollOffset(from)
              : super.measureScrollOffset(
                  this.orientation === "horizontal" ? "start" : "top"
                );
          }
          /** Measure the combined size of all of the rendered items. */

          measureRenderedContentSize() {
            const contentEl = this._contentWrapper.nativeElement;
            return this.orientation === "horizontal"
              ? contentEl.offsetWidth
              : contentEl.offsetHeight;
          }
          /**
           * Measure the total combined size of the given range. Throws if the range includes items that are
           * not rendered.
           */

          measureRangeSize(range) {
            if (!this._forOf) {
              return 0;
            }

            return this._forOf.measureRangeSize(range, this.orientation);
          }
          /** Update the viewport dimensions and re-render. */

          checkViewportSize() {
            // TODO: Cleanup later when add logic for handling content resize
            this._measureViewportSize();

            this._scrollStrategy.onDataLengthChanged();
          }
          /** Measure the viewport size. */

          _measureViewportSize() {
            const viewportEl = this.elementRef.nativeElement;
            this._viewportSize =
              this.orientation === "horizontal"
                ? viewportEl.clientWidth
                : viewportEl.clientHeight;
          }
          /** Queue up change detection to run. */

          _markChangeDetectionNeeded(runAfter) {
            if (runAfter) {
              this._runAfterChangeDetection.push(runAfter);
            } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
            // properties sequentially we only have to run `_doChangeDetection` once at the end.

            if (!this._isChangeDetectionPending) {
              this._isChangeDetectionPending = true;
              this.ngZone.runOutsideAngular(() =>
                Promise.resolve().then(() => {
                  this._doChangeDetection();
                })
              );
            }
          }
          /** Run change detection. */

          _doChangeDetection() {
            this._isChangeDetectionPending = false; // Apply the content transform. The transform can't be set via an Angular binding because
            // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
            // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
            // the `Number` function first to coerce it to a numeric value.

            this._contentWrapper.nativeElement.style.transform =
              this._renderedContentTransform; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
            // from the root, since the repeated items are content projected in. Calling `detectChanges`
            // instead does not properly check the projected content.

            this.ngZone.run(() => this._changeDetectorRef.markForCheck());
            const runAfterChangeDetection = this._runAfterChangeDetection;
            this._runAfterChangeDetection = [];

            for (const fn of runAfterChangeDetection) {
              fn();
            }
          }
          /** Calculates the `style.width` and `style.height` for the spacer element. */

          _calculateSpacerSize() {
            this._totalContentHeight =
              this.orientation === "horizontal"
                ? ""
                : `${this._totalContentSize}px`;
            this._totalContentWidth =
              this.orientation === "horizontal"
                ? `${this._totalContentSize}px`
                : "";
          }
        }

        CdkVirtualScrollViewport.ɵfac =
          function CdkVirtualScrollViewport_Factory(t) {
            return new (t || CdkVirtualScrollViewport)(
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
                VIRTUAL_SCROLL_STRATEGY,
                8
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
                8
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
                ScrollDispatcher
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
                ViewportRuler
              )
            );
          };

        CdkVirtualScrollViewport.ɵcmp =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineComponent"
          ]({
            type: CdkVirtualScrollViewport,
            selectors: [["cdk-virtual-scroll-viewport"]],
            viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](
                  _c0,
                  7
                );
              }

              if (rf & 2) {
                let _t;

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](
                  (_t =
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]())
                ) && (ctx._contentWrapper = _t.first);
              }
            },
            hostAttrs: [1, "cdk-virtual-scroll-viewport"],
            hostVars: 4,
            hostBindings: function CdkVirtualScrollViewport_HostBindings(
              rf,
              ctx
            ) {
              if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"](
                  "cdk-virtual-scroll-orientation-horizontal",
                  ctx.orientation === "horizontal"
                )(
                  "cdk-virtual-scroll-orientation-vertical",
                  ctx.orientation !== "horizontal"
                );
              }
            },
            inputs: {
              orientation: "orientation",
              appendOnly: "appendOnly",
            },
            outputs: {
              scrolledIndexChange: "scrolledIndexChange",
            },
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                  provide: CdkScrollable,
                  useExisting: CdkVirtualScrollViewport,
                },
              ]),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
            ngContentSelectors: _c1,
            decls: 4,
            vars: 4,
            consts: [
              [1, "cdk-virtual-scroll-content-wrapper"],
              ["contentWrapper", ""],
              [1, "cdk-virtual-scroll-spacer"],
            ],
            template: function CdkVirtualScrollViewport_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  0,
                  "div",
                  0,
                  1
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                  3,
                  "div",
                  2
                );
              }

              if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"](
                  "width",
                  ctx._totalContentWidth
                )("height", ctx._totalContentHeight);
              }
            },
            styles: [
              "cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n",
            ],
            encapsulation: 2,
            changeDetection: 0,
          });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              CdkVirtualScrollViewport,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
                  args: [
                    {
                      selector: "cdk-virtual-scroll-viewport",
                      host: {
                        class: "cdk-virtual-scroll-viewport",
                        "[class.cdk-virtual-scroll-orientation-horizontal]":
                          'orientation === "horizontal"',
                        "[class.cdk-virtual-scroll-orientation-vertical]":
                          'orientation !== "horizontal"',
                      },
                      encapsulation:
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__
                          .ViewEncapsulation.None,
                      changeDetection:
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__
                          .ChangeDetectionStrategy.OnPush,
                      providers: [
                        {
                          provide: CdkScrollable,
                          useExisting: CdkVirtualScrollViewport,
                        },
                      ],
                      template:
                        '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth" [style.height]="_totalContentHeight"></div>\n',
                      styles: [
                        "cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n",
                      ],
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone,
                  },
                  {
                    type: undefined,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional,
                      },
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                        args: [VIRTUAL_SCROLL_STRATEGY],
                      },
                    ],
                  },
                  {
                    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional,
                      },
                    ],
                  },
                  {
                    type: ScrollDispatcher,
                  },
                  {
                    type: ViewportRuler,
                  },
                ];
              },
              {
                orientation: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                  },
                ],
                appendOnly: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                  },
                ],
                scrolledIndexChange: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
                  },
                ],
                _contentWrapper: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
                    args: [
                      "contentWrapper",
                      {
                        static: true,
                      },
                    ],
                  },
                ],
              }
            );
        })();
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /** Helper to extract the offset of a DOM Node in a certain direction. */

        function getOffset(orientation, direction, node) {
          const el = node;

          if (!el.getBoundingClientRect) {
            return 0;
          }

          const rect = el.getBoundingClientRect();

          if (orientation === "horizontal") {
            return direction === "start" ? rect.left : rect.right;
          }

          return direction === "start" ? rect.top : rect.bottom;
        }
        /**
         * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
         * container.
         */

        class CdkVirtualForOf {
          constructor(
            /** The view container to add items to. */
            _viewContainerRef,
            /** The template to use when stamping out new items. */
            _template,
            /** The set of available differs. */
            _differs,
            /** The strategy used to render items in the virtual scroll viewport. */
            _viewRepeater,
            /** The virtual scrolling viewport that these items are being rendered in. */
            _viewport,
            ngZone
          ) {
            this._viewContainerRef = _viewContainerRef;
            this._template = _template;
            this._differs = _differs;
            this._viewRepeater = _viewRepeater;
            this._viewport = _viewport;
            /** Emits when the rendered view of the data changes. */

            this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
            /** Subject that emits when a new DataSource instance is given. */

            this._dataSourceChanges =
              new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
            /** Emits whenever the data in the current DataSource changes. */

            this.dataStream = this._dataSourceChanges.pipe(
              // Start off with null `DataSource`.
              (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(null), // Bundle up the previous and current data sources so we can work with both.
              (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.pairwise)(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
              // new one, passing back a stream of data changes which we run through `switchMap` to give
              // us a data stream that emits the latest data from whatever the current `DataSource` is.
              (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(
                ([prev, cur]) => this._changeDataSource(prev, cur)
              ), // Replay the last emitted data when someone subscribes.
              (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.shareReplay)(1)
            );
            /** The differ used to calculate changes to the data. */

            this._differ = null;
            /** Whether the rendered data should be updated during the next ngDoCheck cycle. */

            this._needsUpdate = false;
            this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
            this.dataStream.subscribe((data) => {
              this._data = data;

              this._onRenderedDataChange();
            });

            this._viewport.renderedRangeStream
              .pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(
                  this._destroyed
                )
              )
              .subscribe((range) => {
                this._renderedRange = range;

                if (this.viewChange.observers.length) {
                  ngZone.run(() => this.viewChange.next(this._renderedRange));
                }

                this._onRenderedDataChange();
              });

            this._viewport.attach(this);
          }
          /** The DataSource to display. */

          get cdkVirtualForOf() {
            return this._cdkVirtualForOf;
          }

          set cdkVirtualForOf(value) {
            this._cdkVirtualForOf = value;

            if (
              (0,
              _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__.isDataSource)(
                value
              )
            ) {
              this._dataSourceChanges.next(value);
            } else {
              // If value is an an NgIterable, convert it to an array.
              this._dataSourceChanges.next(
                new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__.ArrayDataSource(
                  (0, rxjs__WEBPACK_IMPORTED_MODULE_21__.isObservable)(value)
                    ? value
                    : Array.from(value || [])
                )
              );
            }
          }
          /**
           * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
           * the item and produces a value to be used as the item's identity when tracking changes.
           */

          get cdkVirtualForTrackBy() {
            return this._cdkVirtualForTrackBy;
          }

          set cdkVirtualForTrackBy(fn) {
            this._needsUpdate = true;
            this._cdkVirtualForTrackBy = fn
              ? (index, item) =>
                  fn(
                    index +
                      (this._renderedRange ? this._renderedRange.start : 0),
                    item
                  )
              : undefined;
          }
          /** The template used to stamp out new elements. */

          set cdkVirtualForTemplate(value) {
            if (value) {
              this._needsUpdate = true;
              this._template = value;
            }
          }
          /**
           * The size of the cache used to store templates that are not being used for re-use later.
           * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
           */

          get cdkVirtualForTemplateCacheSize() {
            return this._viewRepeater.viewCacheSize;
          }

          set cdkVirtualForTemplateCacheSize(size) {
            this._viewRepeater.viewCacheSize = (0,
            _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(
              size
            );
          }
          /**
           * Measures the combined size (width for horizontal orientation, height for vertical) of all items
           * in the specified range. Throws an error if the range includes items that are not currently
           * rendered.
           */

          measureRangeSize(range, orientation) {
            if (range.start >= range.end) {
              return 0;
            }

            if (
              (range.start < this._renderedRange.start ||
                range.end > this._renderedRange.end) &&
              (typeof ngDevMode === "undefined" || ngDevMode)
            ) {
              throw Error(
                `Error: attempted to measure an item that isn't rendered.`
              );
            } // The index into the list of rendered views for the first item in the range.

            const renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

            const rangeLen = range.end - range.start; // Loop over all the views, find the first and land node and compute the size by subtracting
            // the top of the first node from the bottom of the last one.

            let firstNode;
            let lastNode; // Find the first node by starting from the beginning and going forwards.

            for (let i = 0; i < rangeLen; i++) {
              const view = this._viewContainerRef.get(i + renderedStartIndex);

              if (view && view.rootNodes.length) {
                firstNode = lastNode = view.rootNodes[0];
                break;
              }
            } // Find the last node by starting from the end and going backwards.

            for (let i = rangeLen - 1; i > -1; i--) {
              const view = this._viewContainerRef.get(i + renderedStartIndex);

              if (view && view.rootNodes.length) {
                lastNode = view.rootNodes[view.rootNodes.length - 1];
                break;
              }
            }

            return firstNode && lastNode
              ? getOffset(orientation, "end", lastNode) -
                  getOffset(orientation, "start", firstNode)
              : 0;
          }

          ngDoCheck() {
            if (this._differ && this._needsUpdate) {
              // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
              // this list being rendered (can use simpler algorithm) vs needs update due to data actually
              // changing (need to do this diff).
              const changes = this._differ.diff(this._renderedItems);

              if (!changes) {
                this._updateContext();
              } else {
                this._applyChanges(changes);
              }

              this._needsUpdate = false;
            }
          }

          ngOnDestroy() {
            this._viewport.detach();

            this._dataSourceChanges.next(undefined);

            this._dataSourceChanges.complete();

            this.viewChange.complete();

            this._destroyed.next();

            this._destroyed.complete();

            this._viewRepeater.detach();
          }
          /** React to scroll state changes in the viewport. */

          _onRenderedDataChange() {
            if (!this._renderedRange) {
              return;
            }

            this._renderedItems = this._data.slice(
              this._renderedRange.start,
              this._renderedRange.end
            );

            if (!this._differ) {
              // Use a wrapper function for the `trackBy` so any new values are
              // picked up automatically without having to recreate the differ.
              this._differ = this._differs
                .find(this._renderedItems)
                .create((index, item) => {
                  return this.cdkVirtualForTrackBy
                    ? this.cdkVirtualForTrackBy(index, item)
                    : item;
                });
            }

            this._needsUpdate = true;
          }
          /** Swap out one `DataSource` for another. */

          _changeDataSource(oldDs, newDs) {
            if (oldDs) {
              oldDs.disconnect(this);
            }

            this._needsUpdate = true;
            return newDs
              ? newDs.connect(this)
              : (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
          }
          /** Update the `CdkVirtualForOfContext` for all views. */

          _updateContext() {
            const count = this._data.length;
            let i = this._viewContainerRef.length;

            while (i--) {
              const view = this._viewContainerRef.get(i);

              view.context.index = this._renderedRange.start + i;
              view.context.count = count;

              this._updateComputedContextProperties(view.context);

              view.detectChanges();
            }
          }
          /** Apply changes to the DOM. */

          _applyChanges(changes) {
            this._viewRepeater.applyChanges(
              changes,
              this._viewContainerRef,
              (record, _adjustedPreviousIndex, currentIndex) =>
                this._getEmbeddedViewArgs(record, currentIndex),
              (record) => record.item
            ); // Update $implicit for any items that had an identity change.

            changes.forEachIdentityChange((record) => {
              const view = this._viewContainerRef.get(record.currentIndex);

              view.context.$implicit = record.item;
            }); // Update the context variables on all items.

            const count = this._data.length;
            let i = this._viewContainerRef.length;

            while (i--) {
              const view = this._viewContainerRef.get(i);

              view.context.index = this._renderedRange.start + i;
              view.context.count = count;

              this._updateComputedContextProperties(view.context);
            }
          }
          /** Update the computed properties on the `CdkVirtualForOfContext`. */

          _updateComputedContextProperties(context) {
            context.first = context.index === 0;
            context.last = context.index === context.count - 1;
            context.even = context.index % 2 === 0;
            context.odd = !context.even;
          }

          _getEmbeddedViewArgs(record, index) {
            // Note that it's important that we insert the item directly at the proper index,
            // rather than inserting it and the moving it in place, because if there's a directive
            // on the same node that injects the `ViewContainerRef`, Angular will insert another
            // comment node which can throw off the move when it's being repeated for all items.
            return {
              templateRef: this._template,
              context: {
                $implicit: record.item,
                // It's guaranteed that the iterable is not "undefined" or "null" because we only
                // generate views for elements if the "cdkVirtualForOf" iterable has elements.
                cdkVirtualForOf: this._cdkVirtualForOf,
                index: -1,
                count: -1,
                first: false,
                last: false,
                odd: false,
                even: false,
              },
              index,
            };
          }
        }

        CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
          return new (t || CdkVirtualForOf)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._VIEW_REPEATER_STRATEGY
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              CdkVirtualScrollViewport,
              4
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
            )
          );
        };

        CdkVirtualForOf.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineDirective"
          ]({
            type: CdkVirtualForOf,
            selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
            inputs: {
              cdkVirtualForOf: "cdkVirtualForOf",
              cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
              cdkVirtualForTemplate: "cdkVirtualForTemplate",
              cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize",
            },
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                  provide:
                    _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._VIEW_REPEATER_STRATEGY,
                  useClass:
                    _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._RecycleViewRepeaterStrategy,
                },
              ]),
            ],
          });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              CdkVirtualForOf,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
                  args: [
                    {
                      selector: "[cdkVirtualFor][cdkVirtualForOf]",
                      providers: [
                        {
                          provide:
                            _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._VIEW_REPEATER_STRATEGY,
                          useClass:
                            _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._RecycleViewRepeaterStrategy,
                        },
                      ],
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers,
                  },
                  {
                    type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._RecycleViewRepeaterStrategy,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                        args: [
                          _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._VIEW_REPEATER_STRATEGY,
                        ],
                      },
                    ],
                  },
                  {
                    type: CdkVirtualScrollViewport,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf,
                      },
                    ],
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone,
                  },
                ];
              },
              {
                cdkVirtualForOf: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                  },
                ],
                cdkVirtualForTrackBy: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                  },
                ],
                cdkVirtualForTemplate: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                  },
                ],
                cdkVirtualForTemplateCacheSize: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                  },
                ],
              }
            );
        })();
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        class CdkScrollableModule {}

        CdkScrollableModule.ɵfac = function CdkScrollableModule_Factory(t) {
          return new (t || CdkScrollableModule)();
        };

        CdkScrollableModule.ɵmod =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineNgModule"
          ]({
            type: CdkScrollableModule,
            declarations: [CdkScrollable],
            exports: [CdkScrollable],
          });
        CdkScrollableModule.ɵinj =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineInjector"
          ]({});

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              CdkScrollableModule,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
                  args: [
                    {
                      exports: [CdkScrollable],
                      declarations: [CdkScrollable],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /**
         * @docs-primary-export
         */

        class ScrollingModule {}

        ScrollingModule.ɵfac = function ScrollingModule_Factory(t) {
          return new (t || ScrollingModule)();
        };

        ScrollingModule.ɵmod =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineNgModule"
          ]({
            type: ScrollingModule,
            declarations: [
              CdkFixedSizeVirtualScroll,
              CdkVirtualForOf,
              CdkVirtualScrollViewport,
            ],
            imports: [
              _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule,
              CdkScrollableModule,
            ],
            exports: [
              _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule,
              CdkScrollableModule,
              CdkFixedSizeVirtualScroll,
              CdkVirtualForOf,
              CdkVirtualScrollViewport,
            ],
          });
        ScrollingModule.ɵinj =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineInjector"
          ]({
            imports: [
              [
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule,
                CdkScrollableModule,
              ],
              _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule,
              CdkScrollableModule,
            ],
          });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              ScrollingModule,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
                  args: [
                    {
                      imports: [
                        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule,
                        CdkScrollableModule,
                      ],
                      exports: [
                        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule,
                        CdkScrollableModule,
                        CdkFixedSizeVirtualScroll,
                        CdkVirtualForOf,
                        CdkVirtualScrollViewport,
                      ],
                      declarations: [
                        CdkFixedSizeVirtualScroll,
                        CdkVirtualForOf,
                        CdkVirtualScrollViewport,
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * Generated bundle index. Do not edit.
         */

        /***/
      },
  },
]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map
