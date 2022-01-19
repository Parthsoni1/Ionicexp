"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 3014:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-02bf7a99.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = (rootEl) => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = (rootEl) ? rootEl.shadowRoot : document;
  const root = (rootEl) ? rootEl : document.body;
  const setFocus = (elements) => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = (ev) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = (ev) => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter((el) => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};




/***/ }),

/***/ 5159:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3f6412b6.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowDown),
/* harmony export */   "b": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "c": () => (/* binding */ caretBackSharp),
/* harmony export */   "d": () => (/* binding */ chevronBack),
/* harmony export */   "e": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "f": () => (/* binding */ chevronForward),
/* harmony export */   "g": () => (/* binding */ chevronDown),
/* harmony export */   "h": () => (/* binding */ caretUpSharp),
/* harmony export */   "i": () => (/* binding */ caretDownSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v6.0.0, ES Modules */
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";




/***/ }),

/***/ 105:
/*!***********************************!*\
  !*** ./src/app/social.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialService": () => (/* binding */ SocialService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/core */ 924);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 7897);





const ITEMKEY = 'myitem';
const Income = 'income';
let SocialService = class SocialService {
    constructor(storage, toast) {
        this.storage = storage;
        this.toast = toast;
        this._storage = null;
        this.fromDate = new Date();
        this.toDate = new Date();
        this.fromDate.setUTCHours(0, 0, 0, 0);
        this.toDate.setDate(this.toDate.getDate() + 1);
        this.toDate.setUTCHours(0, 0, 0, 0);
        //     var d = new Date();
        // d.setUTCHours(0,0,0,0);
        // console.log(d.toISOString());
        console.log(' this.fromDate  ', this.fromDate, 'this.toDate  ', this.toDate);
        this.init();
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const storage = yield this.storage.create();
            this._storage = storage;
        });
    }
    set(key, value) {
        var _a;
        (_a = this._storage) === null || _a === void 0 ? void 0 : _a.set(key, value);
    }
    addItem(item) {
        return this.storage.get(ITEMKEY).then(items => {
            if (items) {
                if (items.length !== 0) {
                    items.push(item);
                    return this.storage.set(ITEMKEY, items);
                }
                else {
                    return this.storage.set(ITEMKEY, [item]);
                }
            }
            else {
                return this.storage.set(ITEMKEY, [item]);
                this.presentToast('Added Successfully');
            }
        });
    }
    getItem() {
        return this.storage.get(ITEMKEY);
    }
    deleteItem(id) {
        return this.storage.get(ITEMKEY).then(items => {
            if (!items || items.length === 0) {
                return null;
            }
            const keep = [];
            for (const i of items) {
                if (i.id !== id) {
                    keep.push(i);
                }
            }
            this.presentToast('Deleted Successfully');
            return this.storage.set(ITEMKEY, keep);
        });
    }
    presentToast(messege) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield _ionic_core__WEBPACK_IMPORTED_MODULE_0__.toastController.create({
                message: messege,
                duration: 2000
            });
            toast.present();
        });
    }
    storeDate(from, to) {
        this.fromDate = from,
            this.toDate = to;
        console.log('this.fromDate ini', this.fromDate, 'this.toDate  ini', this.toDate);
        this.fromDate.setDate(this.fromDate.getDate() + 1);
        this.toDate.setDate(this.toDate.getDate() + 1);
        this.fromDate.setUTCHours(0, 0, 0, 0);
        this.toDate.setUTCHours(0, 0, 0, 0);
        console.log(this.fromDate, this.toDate);
    }
    setCalendar(dateRange) {
        this.dateRange = dateRange;
    }
};
SocialService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
SocialService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], SocialService);



/***/ })

}]);
//# sourceMappingURL=common.js.map