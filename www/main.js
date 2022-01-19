(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 9483)).then(m => m.TabsPageModule)
    },
    {
        path: 'expense',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_expense_expense_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./expense/expense.module */ 4787)).then(m => m.ExpensePageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 8245)).then(m => m.HomePageModule)
    },
    {
        path: 'chart',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_chart_chart_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./chart/chart.module */ 9915)).then(m => m.ChartPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_ParthSoni_Downloads_Code_Ionic_Ionic_myApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _Users_ParthSoni_Downloads_Code_Ionic_Ionic_myApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ion2-calendar */ 9260);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 2688);








// import { GoogleLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';

let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            ion2_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.IonicStorageModule.forRoot()],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		7479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		1439,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 2139,
	"./af.js": 2139,
	"./ar": 2600,
	"./ar-dz": 1001,
	"./ar-dz.js": 1001,
	"./ar-kw": 9842,
	"./ar-kw.js": 9842,
	"./ar-ly": 9826,
	"./ar-ly.js": 9826,
	"./ar-ma": 5452,
	"./ar-ma.js": 5452,
	"./ar-sa": 1802,
	"./ar-sa.js": 1802,
	"./ar-tn": 4094,
	"./ar-tn.js": 4094,
	"./ar.js": 2600,
	"./az": 6375,
	"./az.js": 6375,
	"./be": 2086,
	"./be.js": 2086,
	"./bg": 5236,
	"./bg.js": 5236,
	"./bm": 1704,
	"./bm.js": 1704,
	"./bn": 8653,
	"./bn-bd": 4466,
	"./bn-bd.js": 4466,
	"./bn.js": 8653,
	"./bo": 7891,
	"./bo.js": 7891,
	"./br": 3348,
	"./br.js": 3348,
	"./bs": 4848,
	"./bs.js": 4848,
	"./ca": 5928,
	"./ca.js": 5928,
	"./cs": 1839,
	"./cs.js": 1839,
	"./cv": 9151,
	"./cv.js": 9151,
	"./cy": 5761,
	"./cy.js": 5761,
	"./da": 6686,
	"./da.js": 6686,
	"./de": 5177,
	"./de-at": 2311,
	"./de-at.js": 2311,
	"./de-ch": 4407,
	"./de-ch.js": 4407,
	"./de.js": 5177,
	"./dv": 9729,
	"./dv.js": 9729,
	"./el": 430,
	"./el.js": 430,
	"./en-au": 8430,
	"./en-au.js": 8430,
	"./en-ca": 1139,
	"./en-ca.js": 1139,
	"./en-gb": 6747,
	"./en-gb.js": 6747,
	"./en-ie": 9466,
	"./en-ie.js": 9466,
	"./en-il": 2121,
	"./en-il.js": 2121,
	"./en-in": 1167,
	"./en-in.js": 1167,
	"./en-nz": 2030,
	"./en-nz.js": 2030,
	"./en-sg": 3646,
	"./en-sg.js": 3646,
	"./eo": 3126,
	"./eo.js": 3126,
	"./es": 8819,
	"./es-do": 9293,
	"./es-do.js": 9293,
	"./es-mx": 5304,
	"./es-mx.js": 5304,
	"./es-us": 6068,
	"./es-us.js": 6068,
	"./es.js": 8819,
	"./et": 3291,
	"./et.js": 3291,
	"./eu": 1400,
	"./eu.js": 1400,
	"./fa": 43,
	"./fa.js": 43,
	"./fi": 6138,
	"./fi.js": 6138,
	"./fil": 1466,
	"./fil.js": 1466,
	"./fo": 6803,
	"./fo.js": 6803,
	"./fr": 5523,
	"./fr-ca": 697,
	"./fr-ca.js": 697,
	"./fr-ch": 9001,
	"./fr-ch.js": 9001,
	"./fr.js": 5523,
	"./fy": 1116,
	"./fy.js": 1116,
	"./ga": 6151,
	"./ga.js": 6151,
	"./gd": 2472,
	"./gd.js": 2472,
	"./gl": 1279,
	"./gl.js": 1279,
	"./gom-deva": 4458,
	"./gom-deva.js": 4458,
	"./gom-latn": 6320,
	"./gom-latn.js": 6320,
	"./gu": 8658,
	"./gu.js": 8658,
	"./he": 2153,
	"./he.js": 2153,
	"./hi": 8732,
	"./hi.js": 8732,
	"./hr": 4960,
	"./hr.js": 4960,
	"./hu": 6339,
	"./hu.js": 6339,
	"./hy-am": 1862,
	"./hy-am.js": 1862,
	"./id": 1068,
	"./id.js": 1068,
	"./is": 1260,
	"./is.js": 1260,
	"./it": 1007,
	"./it-ch": 8063,
	"./it-ch.js": 8063,
	"./it.js": 1007,
	"./ja": 6854,
	"./ja.js": 6854,
	"./jv": 2390,
	"./jv.js": 2390,
	"./ka": 5958,
	"./ka.js": 5958,
	"./kk": 7216,
	"./kk.js": 7216,
	"./km": 1061,
	"./km.js": 1061,
	"./kn": 4060,
	"./kn.js": 4060,
	"./ko": 5216,
	"./ko.js": 5216,
	"./ku": 894,
	"./ku.js": 894,
	"./ky": 609,
	"./ky.js": 609,
	"./lb": 3591,
	"./lb.js": 3591,
	"./lo": 8381,
	"./lo.js": 8381,
	"./lt": 6118,
	"./lt.js": 6118,
	"./lv": 7889,
	"./lv.js": 7889,
	"./me": 4274,
	"./me.js": 4274,
	"./mi": 9226,
	"./mi.js": 9226,
	"./mk": 528,
	"./mk.js": 528,
	"./ml": 7938,
	"./ml.js": 7938,
	"./mn": 5456,
	"./mn.js": 5456,
	"./mr": 4393,
	"./mr.js": 4393,
	"./ms": 3647,
	"./ms-my": 3049,
	"./ms-my.js": 3049,
	"./ms.js": 3647,
	"./mt": 6097,
	"./mt.js": 6097,
	"./my": 6277,
	"./my.js": 6277,
	"./nb": 7245,
	"./nb.js": 7245,
	"./ne": 3988,
	"./ne.js": 3988,
	"./nl": 2557,
	"./nl-be": 478,
	"./nl-be.js": 478,
	"./nl.js": 2557,
	"./nn": 9046,
	"./nn.js": 9046,
	"./oc-lnc": 3131,
	"./oc-lnc.js": 3131,
	"./pa-in": 1731,
	"./pa-in.js": 1731,
	"./pl": 8409,
	"./pl.js": 8409,
	"./pt": 1178,
	"./pt-br": 6558,
	"./pt-br.js": 6558,
	"./pt.js": 1178,
	"./ro": 4138,
	"./ro.js": 4138,
	"./ru": 3380,
	"./ru.js": 3380,
	"./sd": 2889,
	"./sd.js": 2889,
	"./se": 2774,
	"./se.js": 2774,
	"./si": 3776,
	"./si.js": 3776,
	"./sk": 9597,
	"./sk.js": 9597,
	"./sl": 3871,
	"./sl.js": 3871,
	"./sq": 4228,
	"./sq.js": 4228,
	"./sr": 774,
	"./sr-cyrl": 1928,
	"./sr-cyrl.js": 1928,
	"./sr.js": 774,
	"./ss": 3176,
	"./ss.js": 3176,
	"./sv": 2422,
	"./sv.js": 2422,
	"./sw": 2530,
	"./sw.js": 2530,
	"./ta": 5731,
	"./ta.js": 5731,
	"./te": 8025,
	"./te.js": 8025,
	"./tet": 3934,
	"./tet.js": 3934,
	"./tg": 9958,
	"./tg.js": 9958,
	"./th": 4251,
	"./th.js": 4251,
	"./tk": 5494,
	"./tk.js": 5494,
	"./tl-ph": 8568,
	"./tl-ph.js": 8568,
	"./tlh": 3158,
	"./tlh.js": 3158,
	"./tr": 9574,
	"./tr.js": 9574,
	"./tzl": 4311,
	"./tzl.js": 4311,
	"./tzm": 9686,
	"./tzm-latn": 2380,
	"./tzm-latn.js": 2380,
	"./tzm.js": 9686,
	"./ug-cn": 2356,
	"./ug-cn.js": 2356,
	"./uk": 4934,
	"./uk.js": 4934,
	"./ur": 4515,
	"./ur.js": 4515,
	"./uz": 58,
	"./uz-latn": 1875,
	"./uz-latn.js": 1875,
	"./uz.js": 58,
	"./vi": 3325,
	"./vi.js": 3325,
	"./x-pseudo": 9208,
	"./x-pseudo.js": 9208,
	"./yo": 8742,
	"./yo.js": 8742,
	"./zh-cn": 2378,
	"./zh-cn.js": 2378,
	"./zh-hk": 1074,
	"./zh-hk.js": 1074,
	"./zh-mo": 4671,
	"./zh-mo.js": 4671,
	"./zh-tw": 259,
	"./zh-tw.js": 259
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map