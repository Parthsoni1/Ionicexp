"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_expense_expense_module_ts"],{

/***/ 8385:
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ 7316:
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ 2763:
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ 9105);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ 9232:
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ 7316);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ 2763);



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ 9105:
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ 8385);


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ 4802:
/*!***************************************************!*\
  !*** ./src/app/expense/expense-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensePageRoutingModule": () => (/* binding */ ExpensePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _expense_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expense.page */ 8487);




const routes = [
    {
        path: '',
        component: _expense_page__WEBPACK_IMPORTED_MODULE_0__.ExpensePage
    }
];
let ExpensePageRoutingModule = class ExpensePageRoutingModule {
};
ExpensePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExpensePageRoutingModule);



/***/ }),

/***/ 4787:
/*!*******************************************!*\
  !*** ./src/app/expense/expense.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensePageModule": () => (/* binding */ ExpensePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _expense_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expense-routing.module */ 4802);
/* harmony import */ var _expense_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expense.page */ 8487);







let ExpensePageModule = class ExpensePageModule {
};
ExpensePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _expense_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExpensePageRoutingModule
        ],
        declarations: [_expense_page__WEBPACK_IMPORTED_MODULE_1__.ExpensePage]
    })
], ExpensePageModule);



/***/ }),

/***/ 8487:
/*!*****************************************!*\
  !*** ./src/app/expense/expense.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensePage": () => (/* binding */ ExpensePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_ParthSoni_Downloads_Code_Ionic_Ionic_myApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_expense_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./expense.page.html */ 1993);
/* harmony import */ var _expense_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expense.page.scss */ 9789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _social_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../social.service */ 105);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ 9232);






let ExpensePage = class ExpensePage {
    constructor(storageService) {
        this.storageService = storageService;
        this.myItems = [];
        this.isPopoverOpen = false;
        this.isFabPopoverOpen = false;
        this.todayDate = new Date();
        this.fromDate = new Date();
        this.taskByDate = [];
        this.totalIncome = null;
        this.alreadyId = '';
        this.income = '';
        this.AverageDailyExpense = null;
        this.data = {
            id: '', date: '', type: '', description: '', amount: 0
        };
        this.fromDate = this.storageService.fromDate;
        this.toDate = this.storageService.toDate;
        console.log(this.todayDate.toISOString(), 'this.fromDate   ', this.fromDate.toISOString(), 'this.toDate  ', this.toDate.toISOString());
    }
    ionViewWillEnter() {
        this.fromDate = this.storageService.fromDate;
        this.toDate = this.storageService.toDate;
        console.log(this.todayDate.toISOString(), 'this.fromDate   ', this.fromDate, 'this.toDate  ', this.toDate);
        this.getAllItems();
    }
    getAllItems() {
        this.myItems = [];
        this.totalIncome = null;
        let counter = 0;
        this.storageService.getItem().then(res => {
            if (res) {
                res.forEach((element) => {
                    counter += 1;
                    if (element.date >= this.fromDate.toISOString() && element.date < this.toDate.toISOString()) {
                        this.myItems.push(element);
                        this.totalIncome += element.amount;
                    }
                });
                console.log('this.totalIncome  ', this.totalIncome, this.myItems);
                if (this.myItems.length > 2) {
                    this.AverageDailyExpense = this.totalIncome / this.myItems.length;
                }
            }
        });
    }
    saveData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.data.date === "") {
                this.data.date = new Date().toISOString();
            }
            else {
                this.data.date = new Date(this.data.date).toISOString();
            }
            const myId = uuid__WEBPACK_IMPORTED_MODULE_4__["default"]();
            this.data.id = myId;
            yield this.storageService.addItem(this.data).then(res => {
                this.getAllItems();
                let dataClean = {
                    id: '', date: '', type: '', description: '', amount: 0
                };
                Object.assign(this.data, dataClean);
            });
            this.isPopoverOpen = false;
        });
    }
    editItem() {
        this.deleteItem(this.data.id);
        setTimeout(() => {
            if (this.data.date === "") {
                this.data.date = new Date().toISOString();
            }
            else {
                this.data.date = new Date(this.data.date).toISOString();
            }
            this.storageService.addItem(this.data).then(res => {
                console.log('added', res);
                this.getAllItems();
                let dataClean = {
                    id: '', date: '', type: '', description: '', amount: 0
                };
                Object.assign(this.data, dataClean);
            });
            this.alreadyId = '';
            this.isPopoverOpen = false;
        }, 1000);
    }
    editItemPopup(item) {
        this.alreadyId = item.id;
        Object.assign(this.data, item);
        this.isPopoverOpen = true;
    }
    cleanExit() {
        this.isPopoverOpen = false;
        this.alreadyId = '';
        let dataClean = {
            id: '', date: '', type: '', description: '', amount: 0
        };
        Object.assign(this.data, dataClean);
    }
    deleteItem(id) {
        this.storageService.deleteItem(id).then(res => {
            this.getAllItems();
        });
    }
    colorPicker(type) {
        switch (type) {
            case '1':
                return 'hsl(56, 85%, 58%)';
            case '2':
                return 'rgb(51, 39, 211)';
            case '3':
                return 'rgb(36, 185, 7)';
            case '4':
                return 'rgb(0, 0, 0)';
            case '5':
                return 'rgb(230, 10, 10)';
            case '6':
                return 'rgb(226, 230, 10)';
            case '7':
                return 'rgb(230, 142, 10)';
            case '8':
                return 'rgb(142, 10, 230)';
            case '9':
                return 'rgb(10, 223, 230)';
            case '10':
                return 'rgb(121, 121, 121)';
            default:
        }
    }
    iconGet(type) {
        console.log(type);
        switch (type) {
            case '1':
                return 'cart-outline';
            case '2':
                return 'file-tray-stacked-outline';
            case '3':
                return 'medkit-outline';
            case '4':
                return 'medkit-outline';
            case '5':
                return 'receipt-outline';
            case '6':
                return 'home-outline';
            case '7':
                return 'fast-food-outline';
            case '8':
                return 'attach-outline';
            case '9':
                return 'build-outline';
            case '10':
                return 'wallet-outline';
            default:
                break;
        }
    }
    AddOrSubractDays(startingDate, endDate, method) {
        if (method == 'add') {
            this.fromDate = new Date(new Date().setDate(startingDate.getDate() + 1));
            this.toDate = new Date(new Date().setDate(endDate.getDate() + 1));
        }
        else {
            this.fromDate = new Date(new Date().setDate(startingDate.getDate() - 1));
            this.toDate = new Date(new Date().setDate(endDate.getDate() - 1));
        }
        this.getAllItems();
    }
};
ExpensePage.ctorParameters = () => [
    { type: _social_service__WEBPACK_IMPORTED_MODULE_2__.SocialService }
];
ExpensePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-expense',
        template: _Users_ParthSoni_Downloads_Code_Ionic_Ionic_myApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_expense_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_expense_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExpensePage);



/***/ }),

/***/ 1993:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/expense/expense.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"isPopoverOpen = true\" size=\"large\"  name=\"add-outline\"> </ion-icon> &nbsp;&nbsp;\n      <ion-button (click)=\"AddOrSubractDays(fromDate,toDate, 'sub')\" >\n    <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"AddOrSubractDays(fromDate,toDate,'add')\">\n        <ion-icon name=\"chevron-forward-outline\"   class=\"ion-float-right\"></ion-icon> &nbsp;&nbsp;&nbsp;\n      </ion-button>\n      <ion-icon [routerLink]=\"['/home']\" size=\"large\" routerLinkActive=\"router-link-active\"  name=\"calendar-outline\" class=\"ion-float-right\"></ion-icon>\n    </ion-buttons>\n    <ion-title>\n     <h6> {{fromDate | date : 'mediumDate'}}  - {{toDate | date : 'mediumDate'}} </h6>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-popover backdropDismiss='false' [isOpen]=\"isPopoverOpen\" side=\"right\" alignment=\"start\">\n    <ng-template>\n      <ion-content>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Add/Edit Expense  <ion-icon (click)=\"cleanExit()\"  class=\"ion-float-right\" name=\"close-outline\"></ion-icon></ion-card-title>\n            \n          </ion-card-header>\n          <ion-card-content>\n            <form >\n              <ion-item>\n                <ion-label>Date</ion-label>\n                <ion-datetime presentation=\"date\" [(ngModel)]=\"data.date\"  name=\"date\" required=\"\"></ion-datetime>\n              </ion-item>\n              <ion-item>\n                <ion-label>Type</ion-label>\n                <ion-select interface=\"popover\" name=\"type\" [(ngModel)]=\"data.type\" required=\"\">\n                  <ion-select-option value=\"1\">Grocery</ion-select-option>\n                  <ion-select-option value=\"2\">Clothes</ion-select-option>\n                  <ion-select-option value=\"3\">Health</ion-select-option>\n                  <ion-select-option value=\"4\">Travelings</ion-select-option>\n                  <ion-select-option value=\"5\">Bills</ion-select-option>\n                  <ion-select-option value=\"6\">Rents</ion-select-option>\n                  <ion-select-option value=\"7\">Meals</ion-select-option>\n                  <ion-select-option value=\"8\">Stationary</ion-select-option>\n                  <ion-select-option value=\"9\">Repair</ion-select-option>\n                  <ion-select-option value=\"10\">Other</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                <ion-label>Description</ion-label>\n                <ion-input type=\"text\" placeholder=\"Description\" [(ngModel)]=\"data.description\" name=\"description\" required=\"\" ></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label>Amount</ion-label>\n                <ion-input type=\"number\" placeholder=\"Amount\" [(ngModel)]=\"data.amount\" name=\"amount\" required=\"\" ></ion-input>\n              </ion-item>\n              <ion-button  (click)=\"saveData()\" *ngIf=\"alreadyId.length == 0\" id=\"dismiss-button\" [disabled]=\"data.type.length === 0 || data.amount.length === 0\" ion-button type=\"submit\" block>Save Data</ion-button>\n              <ion-button  (click)=\"editItem()\" *ngIf=\"alreadyId.length !== 0\"  id=\"dismiss-button\" [disabled]=\"data.type.length === 0 || data.amount.length === 0\"  ion-button type=\"submit\" block>Edit Data</ion-button>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-content>\n    </ng-template>\n  </ion-popover>\n  <ion-card>\n    <ion-item>\n      <ion-label><b> Total Expense:</b> {{totalIncome}}</ion-label>\n    </ion-item>\n    <ion-card-content *ngIf=\"myItems.length > 2\">\n     <b>Average Daily Expense </b> : {{AverageDailyExpense}}\n    </ion-card-content>\n  </ion-card>\n  <ion-list *ngFor=\"let item of myItems\">\n    <ion-item-sliding>\n      <ion-item>\n        <ion-label>\n          <h2>{{item.description}}</h2>\n          <p> {{item.date | date : 'mediumDate'}}</p>\n        </ion-label>\n          <ion-icon slot=\"end\" [style.color]=\"colorPicker(item.type)\" [name]=\"iconGet(item.type)\"></ion-icon>\n        <h5 slot=\"end\"> {{item.amount}} ₹</h5>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click) =\"editItemPopup(item)\"><ion-icon name=\"create-outline\"></ion-icon></ion-item-option>\n        <ion-item-option color=\"danger\" (click) =\"deleteItem(item.id)\"><ion-icon name=\"trash-outline\"></ion-icon></ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  \n</ion-content>");

/***/ }),

/***/ 9789:
/*!*******************************************!*\
  !*** ./src/app/expense/expense.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "ion-popover {\n  --width: 341px !important;\n  --offset-y: -260px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtBQUNKIiwiZmlsZSI6ImV4cGVuc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXBvcG92ZXIge1xuICAgIC0td2lkdGg6IDM0MXB4ICFpbXBvcnRhbnQ7XG4gICAgLS1vZmZzZXQteTogLTI2MHB4ICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_expense_expense_module_ts.js.map