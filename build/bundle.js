/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/const.js":
/*!****************************!*\
  !*** ./source/js/const.js ***!
  \****************************/
/*! exports provided: SortByCategoryType, SortByPriorityType, FilterType, FilterStringAmount, StringsAmountByType, MenuItem, BreadcrumbsItem, BreadcrumbsTitle, UserAction, UpdateType, DiscountType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByCategoryType", function() { return SortByCategoryType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByPriorityType", function() { return SortByPriorityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterType", function() { return FilterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterStringAmount", function() { return FilterStringAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringsAmountByType", function() { return StringsAmountByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsItem", function() { return BreadcrumbsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsTitle", function() { return BreadcrumbsTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAction", function() { return UserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateType", function() { return UpdateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountType", function() { return DiscountType; });
const SortByCategoryType = {
  DEFAULT: `default`,
  PRICE: `price`,
  POPULARITY: `popularity`
};

const SortByPriorityType = {
  DEFAULT: `default`,
  UP: `up`,
  DOWN: `down`
};

const FilterType = {
  ELECTRIC: `электрогитара`,
  ACOUSTIC: `акустическая гитара`,
  UKULELE: `укулеле`
};

const FilterStringAmount = {
  FOUR: 4,
  SIX: 6,
  SEVEN: 7,
  TWELVE: 12,
};

const StringsAmountByType = {
  ELECTRIC: [4, 6, 7],
  ACOUSTIC: [6, 7, 12],
  UKULELE: [4]
};

const MenuItem = {
  CATALOG: `CATALOG`,
  BASKET: `BASKET`
};

const BreadcrumbsItem = {
  CATALOG: `Каталог`,
  BASKET: `Корзина`
};

const BreadcrumbsTitle = {
  CATALOG: `Каталог гитар`,
  BASKET: `Корзина`
};

const UserAction = {
  UPDATE_GOOD: `UPDATE_GOOD`,
  DELETE_GOOD: `DELETE_GOOD`
};

const UpdateType = {
  INIT: `INIT`
};

const DiscountType = {
  DEFAULT: `DEFAULT`,
  GITARAHIT: `GITARAHIT`,
  SUPERGITARA: `SUPERGITARA`,
  GITARA2020: `GITARA2020`
};


/***/ }),

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_catalog_section_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/catalog-section.js */ "./source/js/view/catalog-section.js");
/* harmony import */ var _view_catalog_section_wrapper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/catalog-section-wrapper.js */ "./source/js/view/catalog-section-wrapper.js");
/* harmony import */ var _presenter_site_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/site-menu.js */ "./source/js/presenter/site-menu.js");
/* harmony import */ var _presenter_catalog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presenter/catalog.js */ "./source/js/presenter/catalog.js");
/* harmony import */ var _presenter_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presenter/breadcrumbs.js */ "./source/js/presenter/breadcrumbs.js");
/* harmony import */ var _model_goods_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/goods.js */ "./source/js/model/goods.js");
/* harmony import */ var _model_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/filter.js */ "./source/js/model/filter.js");
/* harmony import */ var _model_site_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/site-menu.js */ "./source/js/model/site-menu.js");
/* harmony import */ var _model_basket_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/basket.js */ "./source/js/model/basket.js");
/* harmony import */ var _mock_goods_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock/goods.json */ "./source/js/mock/goods.json");
var _mock_goods_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mock/goods.json */ "./source/js/mock/goods.json", 1);
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/render.js */ "./source/js/utils/render.js");













const goodsModel = new _model_goods_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
goodsModel.setGoods(_mock_goods_json__WEBPACK_IMPORTED_MODULE_9__);

const filterModel = new _model_filter_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
const siteMenuModel = new _model_site_menu_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
const basketModel = new _model_basket_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
const siteCatalogSectionComponent = new _view_catalog_section_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
const siteCatalogSectionWrapperComponent = new _view_catalog_section_wrapper_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

const siteHeaderElement = document.querySelector(`.page-header`);
const siteMainElement = document.querySelector(`.page-main`);
const siteMainContainerElement = siteMainElement.querySelector(`.container`);

Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_10__["render"])(siteMainContainerElement, siteCatalogSectionComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_10__["render"])(siteCatalogSectionComponent, siteCatalogSectionWrapperComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);

const siteMenuPresenter = new _presenter_site_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"](siteHeaderElement, siteMenuModel, basketModel);
const breadcrumbsPresenter = new _presenter_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_4__["default"](siteMainContainerElement, siteMenuModel);
const catalogPresenter = new _presenter_catalog_js__WEBPACK_IMPORTED_MODULE_3__["default"](siteCatalogSectionWrapperComponent, goodsModel, filterModel, siteMenuModel, basketModel);

siteMenuPresenter.init();
breadcrumbsPresenter.init();
catalogPresenter.init();


/***/ }),

/***/ "./source/js/mock/goods.json":
/*!***********************************!*\
  !*** ./source/js/mock/goods.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"identiferNumber\":\"SO757575\",\"name\":\"Честер Bass\",\"type\":\"электрогитара\",\"reviewAmount\":15,\"stringAmount\":7,\"price\":17500,\"starsCount\":3.2},{\"id\":2,\"identiferNumber\":\"TK129049\",\"name\":\"СURT Z300\",\"type\":\"электрогитара\",\"reviewAmount\":9,\"stringAmount\":7,\"price\":29500,\"starsCount\":4.5},{\"id\":3,\"identiferNumber\":\"RO111111\",\"name\":\"Roman LX\",\"type\":\"укулеле\",\"reviewAmount\":21,\"stringAmount\":4,\"price\":6800,\"starsCount\":5},{\"id\":4,\"identiferNumber\":\"TK436457\",\"name\":\"СURT T300\",\"type\":\"электрогитара\",\"reviewAmount\":15,\"stringAmount\":6,\"price\":30000,\"starsCount\":3},{\"id\":5,\"identiferNumber\":\"DI192138\",\"name\":\"Dania Super\",\"type\":\"акустическая гитара\",\"reviewAmount\":5,\"stringAmount\":7,\"price\":3500,\"starsCount\":4.5},{\"id\":6,\"identiferNumber\":\"SO934345\",\"name\":\"Честер WX \",\"type\":\"электрогитара\",\"reviewAmount\":17,\"stringAmount\":6,\"price\":15300,\"starsCount\":4.1},{\"id\":7,\"identiferNumber\":\"DI082347\",\"name\":\"Dania VX\",\"type\":\"укулеле\",\"reviewAmount\":5,\"stringAmount\":4,\"price\":2200,\"starsCount\":3.2},{\"id\":8,\"identiferNumber\":\"SO135646\",\"name\":\"Честер Plus \",\"type\":\"электрогитара\",\"reviewAmount\":27,\"stringAmount\":4,\"price\":30000,\"starsCount\":2.1},{\"id\":9,\"identiferNumber\":\"VO154751\",\"name\":\"Виолана 300\",\"type\":\"акустическая гитара\",\"reviewAmount\":3,\"stringAmount\":7,\"price\":1700,\"starsCount\":3.2},{\"id\":10,\"identiferNumber\":\"TK244556\",\"name\":\"СURT Clasic\",\"type\":\"электрогитара\",\"reviewAmount\":20,\"stringAmount\":4,\"price\":23000,\"starsCount\":4.5},{\"id\":11,\"identiferNumber\":\"TK134663\",\"name\":\"СURT Z250\",\"type\":\"электрогитара\",\"reviewAmount\":19,\"stringAmount\":4,\"price\":18700,\"starsCount\":5},{\"id\":12,\"identiferNumber\":\"SO123212\",\"name\":\"Честер 7X\",\"type\":\"электрогитара\",\"reviewAmount\":30,\"stringAmount\":7,\"price\":35000,\"starsCount\":3},{\"id\":13,\"identiferNumber\":\"SO123234\",\"name\":\"Честер 6V\",\"type\":\"электрогитара\",\"reviewAmount\":28,\"stringAmount\":6,\"price\":14900,\"starsCount\":4.5},{\"id\":14,\"identiferNumber\":\"VO519510\",\"name\":\"Виолана Mix\",\"type\":\"акустическая гитара\",\"reviewAmount\":7,\"stringAmount\":6,\"price\":7600,\"starsCount\":4.1},{\"id\":15,\"identiferNumber\":\"VO457369\",\"name\":\"Виолана 250x\",\"type\":\"акустическая гитара\",\"reviewAmount\":19,\"stringAmount\":6,\"price\":6500,\"starsCount\":3.2},{\"id\":16,\"identiferNumber\":\"FB625903\",\"name\":\"Фабио Лайт\",\"type\":\"акустическая гитара\",\"reviewAmount\":26,\"stringAmount\":7,\"price\":12000,\"starsCount\":2.1},{\"id\":17,\"identiferNumber\":\"FB576948\",\"name\":\"Фабио L100\",\"type\":\"акустическая гитара\",\"reviewAmount\":31,\"stringAmount\":7,\"price\":9900,\"starsCount\":3.2},{\"id\":18,\"identiferNumber\":\"LU012032\",\"name\":\"Liana Z200\",\"type\":\"акустическая гитара\",\"reviewAmount\":28,\"stringAmount\":12,\"price\":8900,\"starsCount\":4.5},{\"id\":19,\"identiferNumber\":\"LU546853\",\"name\":\"Liana Z100\",\"type\":\"акустическая гитара\",\"reviewAmount\":34,\"stringAmount\":12,\"price\":10500,\"starsCount\":5},{\"id\":20,\"identiferNumber\":\"LU458283\",\"name\":\"Liana Z300\",\"type\":\"акустическая гитара\",\"reviewAmount\":9,\"stringAmount\":6,\"price\":13300,\"starsCount\":3},{\"id\":21,\"identiferNumber\":\"RO324341\",\"name\":\"Roman RX\",\"type\":\"укулеле\",\"reviewAmount\":37,\"stringAmount\":4,\"price\":4800,\"starsCount\":4.5},{\"id\":22,\"identiferNumber\":\"RO214235\",\"name\":\"Roman TX\",\"type\":\"укулеле\",\"reviewAmount\":5,\"stringAmount\":4,\"price\":1900,\"starsCount\":4.1},{\"id\":23,\"identiferNumber\":\"DI132414\",\"name\":\"Dania U100\",\"type\":\"укулеле\",\"reviewAmount\":23,\"stringAmount\":4,\"price\":2500,\"starsCount\":3.2},{\"id\":24,\"identiferNumber\":\"DI934754\",\"name\":\"Dania WR\",\"type\":\"укулеле\",\"reviewAmount\":3,\"stringAmount\":4,\"price\":3800,\"starsCount\":2.1},{\"id\":25,\"identiferNumber\":\"DI034292\",\"name\":\"Dania LE\",\"type\":\"укулеле\",\"reviewAmount\":10,\"stringAmount\":4,\"price\":4100,\"starsCount\":3.2},{\"id\":26,\"identiferNumber\":\"MI193214\",\"name\":\"Mirana V10\",\"type\":\"укулеле\",\"reviewAmount\":14,\"stringAmount\":4,\"price\":2700,\"starsCount\":4.5},{\"id\":27,\"identiferNumber\":\"VO043244\",\"name\":\"Виолана Mini\",\"type\":\"укулеле\",\"reviewAmount\":29,\"stringAmount\":4,\"price\":6700,\"starsCount\":5}]");

/***/ }),

/***/ "./source/js/model/basket.js":
/*!***********************************!*\
  !*** ./source/js/model/basket.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Basket; });
/* harmony import */ var _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observer.js */ "./source/js/utils/observer.js");



class Basket extends _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._goodsInBasket = [];
  }

  setBasket(updateType, update) {
    this._goodsInBasket = update;
    this._notify(updateType);
  }

  getBasket() {
    return this._goodsInBasket;
  }

  updateGood(updateType, update) {
    const index = this._goodsInBasket.findIndex((good) => good.identiferNumber === update.identiferNumber);

    if (index === -1) {
      throw new Error(`Can't update unexisting task`);
    }

    this._goodsInBasket = [
      ...this._goodsInBasket.slice(0, index),
      update,
      ...this._goodsInBasket.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  addGood(updateType, update) {
    this._goodsInBasket = [
      update,
      ...this._goodsInBasket
    ];

    this._notify(updateType, update);
  }

  deleteGood(updateType, update) {
    const index = this._goodsInBasket.findIndex((good) => good.identiferNumber === update.identiferNumber);

    if (index === -1) {
      throw new Error(`Can't delete unexisting task`);
    }

    this._goodsInBasket = [
      ...this._goodsInBasket.slice(0, index),
      ...this._goodsInBasket.slice(index + 1)
    ];

    this._notify(updateType);
  }
}


/***/ }),

/***/ "./source/js/model/filter.js":
/*!***********************************!*\
  !*** ./source/js/model/filter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observer.js */ "./source/js/utils/observer.js");


class Filter extends _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._activeFilter = {
      type: [],
      stringAmount: [],
      price: []
    };
  }

  setFilter(filter, type) {
    this._activeFilter[type] = filter;
    this._notify(filter);
  }

  getFilter() {
    return this._activeFilter;
  }

}


/***/ }),

/***/ "./source/js/model/goods.js":
/*!**********************************!*\
  !*** ./source/js/model/goods.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Goods; });
/* harmony import */ var _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observer.js */ "./source/js/utils/observer.js");



class Goods extends _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._goods = [];
  }

  setGoods(goods) {
    this._goods = goods.slice();
  }

  getGoods() {
    return this._goods;
  }

  static adaptToClient(point) {
    const adaptedPoint = Object.assign(
        {},
        point
    );

    return adaptedPoint;
  }

  static adaptToServer(point) {
    const adaptedPoint = Object.assign(
        {},
        point
    );

    return adaptedPoint;
  }
}


/***/ }),

/***/ "./source/js/model/site-menu.js":
/*!**************************************!*\
  !*** ./source/js/model/site-menu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMenu; });
/* harmony import */ var _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observer.js */ "./source/js/utils/observer.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");



class SiteMenu extends _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._activeItem = _const_js__WEBPACK_IMPORTED_MODULE_1__["MenuItem"].CATALOG;
  }

  setMenuItem(itemType) {
    this._activeItem = itemType;
    this._notify(itemType);
  }

  getMenuItem() {
    return this._activeItem;
  }
}


/***/ }),

/***/ "./source/js/presenter/basket-good.js":
/*!********************************************!*\
  !*** ./source/js/presenter/basket-good.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BasketGoodElement; });
/* harmony import */ var _view_basket_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/basket-item.js */ "./source/js/view/basket-item.js");
/* harmony import */ var _view_basket_popUp_delete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/basket-popUp-delete.js */ "./source/js/view/basket-popUp-delete.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");





class BasketGoodElement {
  constructor(basketContainer, basketModel, changeData) {
    this._basketContainer = basketContainer;
    this._basketModel = basketModel;
    this._changeData = changeData;

    this._basketPopUpContainer = document.querySelector(`body`);

    this._handleQuantityIncClick = this._handleQuantityIncClick.bind(this);
    this._handleQuantityDecClick = this._handleQuantityDecClick.bind(this);
    this._handleProductQuantityChange = this._handleProductQuantityChange.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);

    this._handleDeletePopUpClick = this._handleDeletePopUpClick.bind(this);
    this._handleToShoppingPopUpClick = this._handleToShoppingPopUpClick.bind(this);
    this._handleCloseClick = this._handleCloseClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
    this._overlayClickHandler = this._overlayClickHandler.bind(this);
  }

  init(basketCard) {
    this._basketCard = basketCard;

    this._basketItemComponent = new _view_basket_item_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._basketCard);

    const basketListComponent = this._basketContainer.querySelector(`.product__list`);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(basketListComponent, this._basketItemComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);

    this._basketItemComponent.setQuantityIncHandle(this._handleQuantityIncClick);
    this._basketItemComponent.setQuantityDecHandle(this._handleQuantityDecClick);
    this._basketItemComponent.setProductQuantityChangeHandle(this._handleProductQuantityChange);
    this._basketItemComponent.setDeleteClickHandler(this._handleDeleteClick);
  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._basketItemComponent);
  }

  _handleQuantityIncClick(update) {
    this._changeData(
        _const_js__WEBPACK_IMPORTED_MODULE_3__["UserAction"].UPDATE_GOOD,
        _const_js__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].INIT,
        Object.assign({}, this._basketCard, {count: update})
    );
  }

  _handleQuantityDecClick(update) {
    if (update < 1) {
      this._handleDeleteClick();
      return;
    }
    this._changeData(
        _const_js__WEBPACK_IMPORTED_MODULE_3__["UserAction"].UPDATE_GOOD,
        _const_js__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].INIT,
        Object.assign({}, this._basketCard, {count: update})
    );
  }

  _handleProductQuantityChange(update) {
    if (update === 0) {
      this._handleDeleteClick();
      return;
    }
    this._changeData(
        _const_js__WEBPACK_IMPORTED_MODULE_3__["UserAction"].UPDATE_GOOD,
        _const_js__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].INIT,
        Object.assign({}, this._basketCard, {count: update})
    );
  }

  _handleDeleteClick() {
    this._basketPopUpDeleteComponent = new _view_basket_popUp_delete_js__WEBPACK_IMPORTED_MODULE_1__["default"](this._basketCard);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(this._basketPopUpContainer, this._basketPopUpDeleteComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].AFTERBEGIN);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
    document.addEventListener(`click`, this._overlayClickHandler);

    this._basketPopUpDeleteComponent.setCloseClickHandler(this._handleCloseClick);
    this._basketPopUpDeleteComponent.setDeleteClickHandler(this._handleDeletePopUpClick);
    this._basketPopUpDeleteComponent.setToShoppingClickHandler(this._handleToShoppingPopUpClick);

  }

  _handleDeletePopUpClick() {
    this._changeData(
        _const_js__WEBPACK_IMPORTED_MODULE_3__["UserAction"].DELETE_GOOD,
        _const_js__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].INIT,
        Object.assign({}, this._basketCard)
    );
    this._removeBasketPopUpDeleteComponent();
  }

  _removeBasketPopUpDeleteComponent() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._basketPopUpDeleteComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
    document.removeEventListener(`keydown`, this._overlayClickHandler);
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();

      if (this._basketPopUpDeleteComponent !== null) {
        this._removeBasketPopUpDeleteComponent();
      }
    }
  }

  _overlayClickHandler(evt) {
    if (evt.target.classList.contains(`overlay`)) {
      evt.preventDefault();

      if (this._basketPopUpDeleteComponent !== null) {
        this._removeBasketPopUpDeleteComponent();
      }
    }
  }

  _handleCloseClick() {
    if (this._basketPopUpDeleteComponent !== null) {
      this._removeBasketPopUpDeleteComponent();
    }
  }

  _handleToShoppingPopUpClick() {
    this._removeBasketPopUpDeleteComponent();
  }
}


/***/ }),

/***/ "./source/js/presenter/basket.js":
/*!***************************************!*\
  !*** ./source/js/presenter/basket.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Basket; });
/* harmony import */ var _view_basket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/basket.js */ "./source/js/view/basket.js");
/* harmony import */ var _presenter_basket_good_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presenter/basket-good.js */ "./source/js/presenter/basket-good.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");





class Basket {
  constructor(basketContainer, basketModel) {
    this._basketContainer = basketContainer;
    this._basketModel = basketModel;
    this._currentDiscountType = _const_js__WEBPACK_IMPORTED_MODULE_3__["DiscountType"].DEFAULT;
    this._isAvailable = true;
    this._currentFilter = null;
    this._goodPresenter = {};
    this._basketComponent = null;
    this._handleDiscountClick = this._handleDiscountClick.bind(this);
    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
  }

  init() {
    this._basketComponent = new _view_basket_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._basketModel.getBasket(), this._currentDiscountType, this._isAvailable);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(this._basketContainer, this._basketComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);

    this._renderBasket();

    this._basketComponent.setDiscountClickHandler(this._handleDiscountClick);
    this._basketModel.addObserver(this._handleModelEvent);
  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._basketComponent);

    this._basketComponent = null;
    this._basketModel.removeObserver(this._handleModelEvent);
  }

  _handleDiscountClick(discountType) {
    if (this._currentDiscountType === discountType) {
      return;
    }
    if (!Object.values(_const_js__WEBPACK_IMPORTED_MODULE_3__["DiscountType"]).includes(discountType)) {
      this._isAvailable = false;
    } else {
      this._isAvailable = true;
    }

    this._currentDiscountType = discountType;

    this.destroy();
    this.init();
  }

  _handleModelEvent() {
    this.init();
  }

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case _const_js__WEBPACK_IMPORTED_MODULE_3__["UserAction"].UPDATE_GOOD:
        this._basketModel.updateGood(updateType, update);
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_3__["UserAction"].DELETE_GOOD:
        this._basketModel.deleteGood(updateType, update);
        break;
    }
  }

  _handleModelEvent(updateType) {
    switch (updateType) {
      case _const_js__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].INIT:
        this.destroy();
        this.init();
        break;
    }
  }

  _renderGood(good) {
    const goodPresenter = new _presenter_basket_good_js__WEBPACK_IMPORTED_MODULE_1__["default"](this._basketContainer, this._basketModel, this._handleViewAction);
    goodPresenter.init(good);
    this._goodPresenter[good.id] = goodPresenter;
  }

  _renderGoods(goods) {
    goods.forEach((good) => this._renderGood(good));
  }

  _renderBasket() {
    const goods = this._basketModel.getBasket();
    this._renderGoods(goods);
  }
}


/***/ }),

/***/ "./source/js/presenter/breadcrumbs.js":
/*!********************************************!*\
  !*** ./source/js/presenter/breadcrumbs.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Breadcrumbs; });
/* harmony import */ var _view_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/breadcrumbs.js */ "./source/js/view/breadcrumbs.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");



class Breadcrumbs {
  constructor(breadcrumbsContainer, siteMenuModel) {
    this._breadcrumbsContainer = breadcrumbsContainer;
    this._siteMenuModel = siteMenuModel;

    this._breadcrumbsComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);
  }

  init() {
    this._breadcrumbsComponent = new _view_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._siteMenuModel.getMenuItem());

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._breadcrumbsContainer, this._breadcrumbsComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].AFTERBEGIN);

    this._siteMenuModel.addObserver(this._handleModelEvent);
  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(this._breadcrumbsComponent);

    this._breadcrumbsComponent = null;
    this._siteMenuModel.removeObserver(this._handleModelEvent);
  }

  _handleModelEvent() {
    this.destroy();
    this.init();
  }
}


/***/ }),

/***/ "./source/js/presenter/catalog-good.js":
/*!*********************************************!*\
  !*** ./source/js/presenter/catalog-good.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogGood; });
/* harmony import */ var _view_catalog_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/catalog-item.js */ "./source/js/view/catalog-item.js");
/* harmony import */ var _view_catalog_popUp_add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/catalog-popUp-add.js */ "./source/js/view/catalog-popUp-add.js");
/* harmony import */ var _view_catalog_popUp_success_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/catalog-popUp-success.js */ "./source/js/view/catalog-popUp-success.js");
/* harmony import */ var _view_site_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/site-menu.js */ "./source/js/view/site-menu.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");







class CatalogGood {
  constructor(siteMenuModel, basketModel, changeData) {
    this._changeData = changeData;
    this._catalogPopUpContainer = document.querySelector(`body`);
    this._siteMenuModel = siteMenuModel;
    this._basketModel = basketModel;

    this._catalogItemComponent = null;
    this._catalogPopUpAddComponent = null;
    this._catalogPopUpSuccessComponent = null;


    this._siteMenuComponent = new _view_site_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

    this._handleAddToBasketClick = this._handleAddToBasketClick.bind(this);
    this._handleAddToBasketPopUpClick = this._handleAddToBasketPopUpClick.bind(this);
    this._handleAddToBasketPopUpSuccessClick = this._handleAddToBasketPopUpSuccessClick.bind(this);
    this._handleToShoppingPopUpClick = this._handleToShoppingPopUpClick.bind(this);
    this._handleCloseClick = this._handleCloseClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
    this._overlayClickHandler = this._overlayClickHandler.bind(this);
  }

  init(catalogListContainer, catalogCard) {
    this._catalogCard = catalogCard;

    this._catalogItemComponent = new _view_catalog_item_js__WEBPACK_IMPORTED_MODULE_0__["default"](catalogCard);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["render"])(catalogListContainer, this._catalogItemComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].BEFOREEND);

    this._catalogItemComponent.setAddClickHandler(this._handleAddToBasketClick);

  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["remove"])(this._catalogItemComponent);
  }

  _removePopUpAddComponent() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["remove"])(this._catalogPopUpAddComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
    document.removeEventListener(`keydown`, this._overlayClickHandler);
  }

  _removePopUpSuccessComponent() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["remove"])(this._catalogPopUpSuccessComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
    document.removeEventListener(`keydown`, this._overlayClickHandler);
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();

      if (this._catalogPopUpAddComponent !== null) {
        this._removePopUpAddComponent();
      }
      if (this._catalogPopUpSuccessComponent !== null) {
        this._removePopUpSuccessComponent();
      }
    }
  }

  _overlayClickHandler(evt) {
    if (evt.target.classList.contains(`overlay`)) {
      evt.preventDefault();

      if (this._catalogPopUpAddComponent !== null) {
        this._removePopUpAddComponent();
      }
      if (this._catalogPopUpSuccessComponent !== null) {
        this._removePopUpSuccessComponent();
      }
    }
  }

  _handleCloseClick() {
    if (this._catalogPopUpAddComponent !== null) {
      this._removePopUpAddComponent();
    }
    if (this._catalogPopUpSuccessComponent !== null) {
      this._removePopUpSuccessComponent();
    }
  }

  _handleAddToBasketClick() {
    this._catalogPopUpAddComponent = new _view_catalog_popUp_add_js__WEBPACK_IMPORTED_MODULE_1__["default"](this._catalogCard);

    this._catalogPopUpAddComponent.setCloseClickHandler(this._handleCloseClick);
    this._catalogPopUpAddComponent.setAddClickHandler(this._handleAddToBasketPopUpClick);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["render"])(this._catalogPopUpContainer, this._catalogPopUpAddComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].AFTERBEGIN);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
    document.addEventListener(`click`, this._overlayClickHandler);
  }

  _handleAddToBasketPopUpClick(data) {
    this._removePopUpAddComponent();
    this._catalogPopUpSuccessComponent = new _view_catalog_popUp_success_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

    this._catalogPopUpSuccessComponent.setCloseClickHandler(this._handleCloseClick);
    this._catalogPopUpSuccessComponent.setToBasketClickHandler(this._handleAddToBasketPopUpSuccessClick);
    this._catalogPopUpSuccessComponent.setToShoppingClickHandler(this._handleToShoppingPopUpClick);
    this._catalogPopUpSuccessComponent.setCloseClickHandler(this._handleCloseClick);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["render"])(this._catalogPopUpContainer, this._catalogPopUpSuccessComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].AFTERBEGIN);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
    document.addEventListener(`click`, this._overlayClickHandler);

    this._goods = this._basketModel.getBasket();

    const index = this._goods.findIndex((good) => good.identiferNumber === data.identiferNumber);

    if (index === -1 || this._goods.length === 0) {
      this._basketModel.addGood(_const_js__WEBPACK_IMPORTED_MODULE_5__["UpdateType"].MINOR, Object.assign({}, data, {count: 1}));
      return;
    }
    let count = this._goods[index].count;
    count++;

    this._changeData(
        _const_js__WEBPACK_IMPORTED_MODULE_5__["UserAction"].UPDATE_POINT,
        Object.assign({}, data, {count})
    );
  }

  _handleAddToBasketPopUpSuccessClick(menuItem) {
    this._currentMenuItem = this._siteMenuModel.getMenuItem();

    // this._siteMenuComponent.getElement()
    //     .querySelector(`[data-menu-type="${this._currentMenuItem}"]`)
    //     .parentElement.classList.remove(`site-list__item--active`);

    // this._siteMenuComponent.getElement()
    //     .querySelector(`[data-menu-type="${menuItem}"]`)
    //     .parentElement.classList.add(`site-list__item--active`);

    this._siteMenuModel.setMenuItem(menuItem);
    this._removePopUpSuccessComponent();
  }

  _handleToShoppingPopUpClick() {
    this._removePopUpSuccessComponent();
  }
}


/***/ }),

/***/ "./source/js/presenter/catalog.js":
/*!****************************************!*\
  !*** ./source/js/presenter/catalog.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _view_catalog_board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/catalog-board.js */ "./source/js/view/catalog-board.js");
/* harmony import */ var _view_catalog_sort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/catalog-sort.js */ "./source/js/view/catalog-sort.js");
/* harmony import */ var _view_catalog_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/catalog-list.js */ "./source/js/view/catalog-list.js");
/* harmony import */ var _view_catalog_pagination_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/catalog-pagination.js */ "./source/js/view/catalog-pagination.js");
/* harmony import */ var _presenter_catalog_good_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../presenter/catalog-good.js */ "./source/js/presenter/catalog-good.js");
/* harmony import */ var _presenter_basket_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../presenter/basket.js */ "./source/js/presenter/basket.js");
/* harmony import */ var _presenter_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../presenter/filter.js */ "./source/js/presenter/filter.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");
/* harmony import */ var _utils_good_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/good.js */ "./source/js/utils/good.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");
/* harmony import */ var _utils_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/filter.js */ "./source/js/utils/filter.js");















const GOOD_COUNT_PER_STEP = 9;

class Board {
  constructor(catalogContainer, goodsModel, filterModel, siteMenuModel, basketModel) {
    this._goodsModel = goodsModel;
    this._filterModel = filterModel;
    this._siteMenuModel = siteMenuModel;
    this._basketModel = basketModel;
    this._catalogContainer = catalogContainer;
    this._renderedGoodsCount = GOOD_COUNT_PER_STEP;
    this._currentSortByCategoryType = _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByCategoryType"].DEFAULT;
    this._currentSortByPriorityType = _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByPriorityType"].DEFAULT;
    this._goods = {};
    this._minPaginationStep = 1;
    this._currentPaginationStep = 1;

    this._catalogPaginationComponent = null;
    this._catalogComponent = new _view_catalog_board_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._catalogListComponent = new _view_catalog_list_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

    this._filterPresenter = new _presenter_filter_js__WEBPACK_IMPORTED_MODULE_6__["default"](this._catalogContainer, this._filterModel, this._goodsModel);
    this._goodPresenter = new _presenter_catalog_good_js__WEBPACK_IMPORTED_MODULE_4__["default"](this._siteMenuModel, this._handleViewAction);

    this._handleSortByCategoryChange = this._handleSortByCategoryChange.bind(this);
    this._handleSortByPriorityChange = this._handleSortByPriorityChange.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleMenuModel = this._handleMenuModel.bind(this);
    this._handlePaginationNextClick = this._handlePaginationNextClick.bind(this);
    this._handlePaginationPreviousClick = this._handlePaginationPreviousClick.bind(this);
    this._siteMenuModel.addObserver(this._handleMenuModel);
  }

  init() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["render"])(this._catalogContainer, this._catalogComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["render"])(this._catalogComponent, this._catalogListComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND);

    this._goodsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);

    this._renderCatalog();
  }

  destroy() {
    this._clearCatalog({resetSortByCategoryType: true});

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["remove"])(this._catalogListComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["remove"])(this._catalogComponent);

    this._goodsModel.removeObserver(this._handleModelEvent);
    this._filterModel.removeObserver(this._handleModelEvent);
  }

  _getGoods() {
    const filter = this._filterModel.getFilter();
    const goods = this._goodsModel.getGoods();

    let filteredGoods = goods.slice(0)
        .filter((good) => Object(_utils_filter_js__WEBPACK_IMPORTED_MODULE_10__["filteredGoodsByType"])(good.type, filter.type))
        .filter((good) => Object(_utils_filter_js__WEBPACK_IMPORTED_MODULE_10__["filteredGoodsByType"])(good.stringAmount, filter.stringAmount))
        .filter((good) => Object(_utils_filter_js__WEBPACK_IMPORTED_MODULE_10__["filteredGoodsByPrice"])(good.price, filter.price));

    switch (this._currentSortByCategoryType) {
      case _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByCategoryType"].DEFAULT:
        if (this._currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByPriorityType"].UP) {
          this._currentSortByCategoryType = _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByCategoryType"].PRICE;
          return filteredGoods.sort(_utils_good_js__WEBPACK_IMPORTED_MODULE_8__["sortPopularityUp"]);
        }
        if (this._currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByPriorityType"].DOWN) {
          this._currentSortByCategoryType = _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByCategoryType"].PRICE;
          return filteredGoods.sort(_utils_good_js__WEBPACK_IMPORTED_MODULE_8__["sortPopularityDown"]);
        }
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByCategoryType"].PRICE:
        if (this._currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByPriorityType"].DEFAULT) {
          this._currentSortByPriorityType = _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByPriorityType"].UP;
          return filteredGoods.sort(_utils_good_js__WEBPACK_IMPORTED_MODULE_8__["sortPriceUp"]);
        }
        if (this._currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByPriorityType"].UP) {
          return filteredGoods.sort(_utils_good_js__WEBPACK_IMPORTED_MODULE_8__["sortPriceUp"]);
        }
        if (this._currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByPriorityType"].DOWN) {
          return filteredGoods.sort(_utils_good_js__WEBPACK_IMPORTED_MODULE_8__["sortPriceDown"]);
        }
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByCategoryType"].POPULARITY:
        if (this._currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByPriorityType"].DEFAULT) {
          this._currentSortByPriorityType = _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByPriorityType"].UP;
          return filteredGoods.sort(_utils_good_js__WEBPACK_IMPORTED_MODULE_8__["sortPopularityUp"]);
        }
        if (this._currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByPriorityType"].UP) {
          return filteredGoods.sort(_utils_good_js__WEBPACK_IMPORTED_MODULE_8__["sortPopularityUp"]);
        }
        if (this._currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByPriorityType"].DOWN) {
          return filteredGoods.sort(_utils_good_js__WEBPACK_IMPORTED_MODULE_8__["sortPopularityDown"]);
        }
        break;
    }

    return filteredGoods;
  }

  _handleSortByCategoryChange(sortByCategory) {
    if (this._currentSortByCategoryType === sortByCategory) {
      return;
    }

    this._currentSortByCategoryType = sortByCategory;

    this._clearCatalog();
    this._renderCatalog();
  }

  _handleSortByPriorityChange(sortByPriority) {
    if (this._currentSortByPriorityType === sortByPriority) {
      return;
    }

    this._currentSortByPriorityType = sortByPriority;

    this._clearCatalog();
    this._renderCatalog();
  }

  _handleModelEvent() {
    this._clearCatalog();
    this._renderCatalog();
  }

  _handleMenuModel(menuItem) {
    switch (menuItem) {
      case _const_js__WEBPACK_IMPORTED_MODULE_9__["MenuItem"].CATALOG:
        this.init();
        this._basketPresenter.destroy();
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_9__["MenuItem"].BASKET:
        this.destroy();

        const siteMainElement = document.querySelector(`.page-main`);
        const siteMainContainerElement = siteMainElement.querySelector(`.container`);

        this._basketPresenter = new _presenter_basket_js__WEBPACK_IMPORTED_MODULE_5__["default"](siteMainContainerElement, this._basketModel);
        this._basketPresenter.init();
        break;
    }
  }

  _handlePaginationNextClick() {
    const goodsCount = this._getGoods().length;

    this._currentPaginationStep++;

    const startIndex = GOOD_COUNT_PER_STEP * this._currentPaginationStep - GOOD_COUNT_PER_STEP;
    const endIndex = GOOD_COUNT_PER_STEP * this._currentPaginationStep;

    const goods = this._getGoods().slice(startIndex, endIndex);

    Object
        .values(this._goods)
        .forEach((presenter) => presenter.destroy());
    this._goods = {};

    this._renderGoods(goods);

    if (this._currentPaginationStep > this._minPaginationStep) {
      this._catalogPaginationComponent.getElement()
          .querySelector(`.pagination__item--button-previous`)
          .classList.remove(`pagination__item--hide`);
    }

    if (GOOD_COUNT_PER_STEP > goodsCount) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["remove"])(this._catalogPaginationComponent);
    }

    if (this._currentPaginationStep >= Math.ceil(goodsCount / this._currentPaginationStep)) {
      this._catalogPaginationComponent.getElement()
          .querySelector(`.pagination__item--button-next`)
          .classList.add(`pagination__item--hide`);
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["remove"])(this._catalogPaginationComponent);
    this._renderPagination(this._renderedGoodsCount);
  }

  _handlePaginationPreviousClick() {
    const goodsCount = this._getGoods().length;

    this._currentPaginationStep--;

    const startIndex = GOOD_COUNT_PER_STEP * this._currentPaginationStep - GOOD_COUNT_PER_STEP;
    const endIndex = GOOD_COUNT_PER_STEP * this._currentPaginationStep;

    const goods = this._getGoods().slice(startIndex, endIndex);

    Object
        .values(this._goods)
        .forEach((presenter) => presenter.destroy());
    this._goods = {};

    this._renderGoods(goods);

    if (GOOD_COUNT_PER_STEP > goodsCount) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["remove"])(this._catalogPaginationComponent);
    }

    if (this._currentPaginationStep === this._minPaginationStep) {
      this._catalogPaginationComponent.getElement()
          .querySelector(`.pagination__item--button-previous`)
          .classList.add(`pagination__item--hide`);
    }

    if (this._currentPaginationStep <= Math.ceil(goodsCount / this._currentPaginationStep)) {
      this._catalogPaginationComponent.getElement()
          .querySelector(`.pagination__item--button-next`)
          .classList.remove(`pagination__item--hide`);
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["remove"])(this._catalogPaginationComponent);
    this._renderPagination(this._renderedGoodsCount);
  }

  _renderSort() {
    if (this._catalogSortComponent !== null) {
      this._catalogSortComponent = null;
    }

    this._catalogSortComponent = new _view_catalog_sort_js__WEBPACK_IMPORTED_MODULE_1__["default"](this._currentSortByCategoryType, this._currentSortByPriorityType);
    this._catalogSortComponent.setSortByCategoryChangeHandler(this._handleSortByCategoryChange);
    this._catalogSortComponent.setSortByPriorityChangeHandler(this._handleSortByPriorityChange);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["render"])(this._catalogComponent, this._catalogSortComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].AFTERBEGIN);
  }

  _renderGood(good) {
    const goodPresenter = new _presenter_catalog_good_js__WEBPACK_IMPORTED_MODULE_4__["default"](this._siteMenuModel, this._basketModel, this._handleViewAction);
    goodPresenter.init(this._catalogListComponent, good);
    this._goods[good.id] = goodPresenter;
  }

  _renderGoods(goods) {
    goods.forEach((good) => this._renderGood(good));
  }

  _renderPagination() {
    const goodsCount = this._getGoods().length;

    this._catalogPaginationComponent = new _view_catalog_pagination_js__WEBPACK_IMPORTED_MODULE_3__["default"](goodsCount, GOOD_COUNT_PER_STEP, this._currentPaginationStep);
    this._catalogPaginationComponent.setNextClickHandler(this._handlePaginationNextClick);
    this._catalogPaginationComponent.setPreviousClickHandler(this._handlePaginationPreviousClick);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["render"])(this._catalogComponent, this._catalogPaginationComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND);

    if (this._currentPaginationStep <= 1) {
      this._catalogPaginationComponent.getElement()
          .querySelector(`.pagination__item--button-previous`)
          .classList.add(`pagination__item--hide`);
    }

    if (this._currentPaginationStep * GOOD_COUNT_PER_STEP >= goodsCount) {
      this._catalogPaginationComponent.getElement()
          .querySelector(`.pagination__item--button-next`)
          .classList.add(`pagination__item--hide`);
    }
  }

  _clearCatalog({resetSortByCategoryType = false} = {}) {
    Object
        .values(this._goods)
        .forEach((presenter) => presenter.destroy());
    this._goods = {};

    this._filterPresenter.destroy();

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["remove"])(this._catalogSortComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["remove"])(this._catalogPaginationComponent);

    if (resetSortByCategoryType) {
      this._currentSortByCategoryType = _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByCategoryType"].DEFAULT;
      this._currentSortByPriorityType = _const_js__WEBPACK_IMPORTED_MODULE_9__["SortByPriorityType"].DEFAULT;
    }
  }

  _renderCatalog() {
    const goods = this._getGoods();
    const goodCount = goods.length;

    if (this._filterPresenter !== null) {
      this._filterPresenter.init();
    }

    this._renderSort();
    this._renderGoods(goods.slice(0, Math.min(goodCount, GOOD_COUNT_PER_STEP)));

    if (goodCount > GOOD_COUNT_PER_STEP) {
      this._renderPagination();
    }
  }
}


/***/ }),

/***/ "./source/js/presenter/filter.js":
/*!***************************************!*\
  !*** ./source/js/presenter/filter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _view_filters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/filters.js */ "./source/js/view/filters.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");



class Filter {
  constructor(filterContainer, filterModel, goodsModel) {
    this._filterContainer = filterContainer;
    this._filterModel = filterModel;
    this._goodsModel = goodsModel;

    this._filterComponent = null;

    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
    this._handleFilterStringChange = this._handleFilterStringChange.bind(this);
    this._handleFilterPriceChange = this._handleFilterPriceChange.bind(this);
  }

  init() {
    this._currentFilter = this._filterModel.getFilter();
    this._goods = this._goodsModel.getGoods();

    this._prevFilterComponent = this._filterComponent;

    this._filterComponent = new _view_filters_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._currentFilter, this._goods);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);
    this._filterComponent.setFilterStringChangeHandler(this._handleFilterStringChange);
    this._filterComponent.setFilterPriceChangeHandler(this._handleFilterPriceChange);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._filterContainer, this._filterComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].AFTERBEGIN);
  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(this._filterComponent);

    this._filterComponent = null;
  }

  _handleFilterTypeChange(filterGuitarType) {
    if (this._prevFilterComponent === 0) {
      return;
    }

    this._filterModel.setFilter(filterGuitarType, `type`);
  }

  _handleFilterStringChange(filterStringType) {
    if (this._prevFilterComponent === 0) {
      return;
    }

    filterStringType = filterStringType.map((string) => Number(string));

    console.log(filterStringType);

    this._filterModel.setFilter(filterStringType, `stringAmount`);
  }

  _handleFilterPriceChange(filterPriceType) {
    if (this._prevFilterComponent === 0) {
      return;
    }

    filterPriceType = filterPriceType.map((filter) => {
      return parseInt(String(filter).replace(/\s+/g, ``), 10);
    });

    this._filterModel.setFilter(filterPriceType, `price`);
  }
}


/***/ }),

/***/ "./source/js/presenter/site-menu.js":
/*!******************************************!*\
  !*** ./source/js/presenter/site-menu.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMenu; });
/* harmony import */ var _view_site_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/site-menu.js */ "./source/js/view/site-menu.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");



class SiteMenu {
  constructor(siteMenuContainer, siteMenuModel, basketModel) {
    this._siteMenuContainer = siteMenuContainer;
    this._siteMenuModel = siteMenuModel;
    this._basketModel = basketModel;

    this._handleSiteMenuChange = this._handleSiteMenuChange.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
  }

  init() {
    this._siteMenuComponent = new _view_site_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._basketModel.getBasket());
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._siteMenuContainer, this._siteMenuComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].AFTERBEGIN);

    this._siteMenuComponent.setMenuClickHandler(this._handleSiteMenuChange);

    this._siteMenuModel.addObserver(this._handleModelEvent);
    this._basketModel.addObserver(this._handleModelEvent);
  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(this._siteMenuComponent);

    this._siteMenuComponent = null;

    this._siteMenuModel.removeObserver(this._handleModelEvent);
    this._basketModel.removeObserver(this._handleModelEvent);
  }

  _handleModelEvent() {
    this.destroy();
    this.init();
  }

  _handleSiteMenuChange(menuItem) {
    this._currentMenuItem = this._siteMenuModel.getMenuItem();

    if (this._currentMenuItem === menuItem || menuItem === null) {
      return;
    }

    // this._siteMenuComponent.getElement()
    //     .querySelector(`[data-menu-type="${this._currentMenuItem}"]`)
    //     .parentElement.classList.remove(`site-list__item--active`);

    // this._siteMenuComponent.getElement()
    //     .querySelector(`[data-menu-type="${menuItem}"]`)
    //     .parentElement.classList.add(`site-list__item--active`);

    this._siteMenuModel.setMenuItem(menuItem);
  }
}


/***/ }),

/***/ "./source/js/utils/filter.js":
/*!***********************************!*\
  !*** ./source/js/utils/filter.js ***!
  \***********************************/
/*! exports provided: filteredGoodsByType, filteredGoodsByPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredGoodsByType", function() { return filteredGoodsByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredGoodsByPrice", function() { return filteredGoodsByPrice; });
const filteredGoodsByType = (good, filters) => {
  if (!filters.length) {
    return true;
  }
  return filters.includes(good);
};

const filteredGoodsByPrice = (good, filters) => {
  const keys = [`min`, `max`];
  let PriceRange = {};

  PriceRange = Object.assign(...keys.map((k, i) => ({[k]: filters[i]})));

  if (!filters.length) {
    return true;
  }
  return Number(good) <= PriceRange.max && Number(good) >= PriceRange.min;
};


/***/ }),

/***/ "./source/js/utils/good.js":
/*!*********************************!*\
  !*** ./source/js/utils/good.js ***!
  \*********************************/
/*! exports provided: getGuitarType, sortPriceDown, sortPriceUp, sortPopularityDown, sortPopularityUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGuitarType", function() { return getGuitarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortPriceDown", function() { return sortPriceDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortPriceUp", function() { return sortPriceUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortPopularityDown", function() { return sortPopularityDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortPopularityUp", function() { return sortPopularityUp; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");


const getGuitarType = (type) => {
  const guitarTypeKeys = Object.keys(_const_js__WEBPACK_IMPORTED_MODULE_0__["FilterType"]);
  const currentGuitarType = guitarTypeKeys.filter((key) => _const_js__WEBPACK_IMPORTED_MODULE_0__["FilterType"][key] === type).map((key) => key.toLocaleLowerCase());
  return currentGuitarType;
};

const sortPriceDown = (pointA, pointB) => Number(pointA.price) > Number(pointB.price) ? -1 : 1;
const sortPriceUp = (pointA, pointB) => Number(pointA.price) > Number(pointB.price) ? 1 : -1;

const sortPopularityDown = (pointA, pointB) => Number(pointA.reviewAmount) > Number(pointB.reviewAmount) ? -1 : 1;
const sortPopularityUp = (pointA, pointB) => Number(pointA.reviewAmount) > Number(pointB.reviewAmount) ? 1 : -1;


/***/ }),

/***/ "./source/js/utils/observer.js":
/*!*************************************!*\
  !*** ./source/js/utils/observer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observer; });
class Observer {
  constructor() {
    this._observers = [];
  }

  addObserver(observer) {
    this._observers.push(observer);
  }

  removeObserver(observer) {
    this._observers = this._observers.filter((existedObserver) => existedObserver !== observer);
  }

  _notify(event) {
    this._observers.forEach((observer) => observer(event));
  }
}


/***/ }),

/***/ "./source/js/utils/render.js":
/*!***********************************!*\
  !*** ./source/js/utils/render.js ***!
  \***********************************/
/*! exports provided: RenderPosition, render, renderTemplate, createElement, replace, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./source/js/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  BEFOREBEGIN: `beforebegin`
};

const render = (container, child, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (child instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
    case RenderPosition.BEFOREBEGIN:
      container.before(child);
      break;
  }
};

const renderTemplate = (container, template, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  container.insertAdjacentHTML(place, template);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};

const remove = (component) => {
  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};


/***/ }),

/***/ "./source/js/view/abstract.js":
/*!************************************!*\
  !*** ./source/js/view/abstract.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./source/js/view/basket-item.js":
/*!***************************************!*\
  !*** ./source/js/view/basket-item.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BasketItem; });
/* harmony import */ var _smart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart.js */ "./source/js/view/smart.js");
/* harmony import */ var _utils_good_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/good.js */ "./source/js/utils/good.js");



const createBasketItemElement = (data) => {
  const {type, stringAmount, name, price, count} = data;

  return `<li class="product__item">
          <div class="product__image-container">
            <img src="img/guitar-${Object(_utils_good_js__WEBPACK_IMPORTED_MODULE_1__["getGuitarType"])(type)}.png" width="80" height="202" alt="Изображение товара">
          </div>
          <ul class="product__deckription-list">
            <li class="product__name">Электрогитара ${name}</li>
            <li class="product__identifer-number">Артикул: ${count}</li>
            <li class="product__type">Электрогитара, ${stringAmount} струнная </li>
          </ul>
          <div class="product__price"><p>${price.toLocaleString(`ru-RU`)} ₽</p></div>
          <div class="product__quantity">
            <button class="product__quantity-button" id="dec-button" type="button">-</button>
            <input type="text" value="${count}" name="product-quantity">
            <button class="product__quantity-button" id="inc-button" type="button">+</button>
          </div>
          <div class="product__price-total">${(price * count).toLocaleString(`ru-RU`)} ₽</div>
          <button class="product__delete" type="button">
            <span class="visually-hidden">Удалить товар</span>
          </button>
        </li>`;
};

class BasketItem extends _smart_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data) {
    super();
    this._data = data;

    this._handleQuantityIncClick = this._handleQuantityIncClick.bind(this);
    this._handleQuantityDecClick = this._handleQuantityDecClick.bind(this);
    this._handleProductQuantityChangeHandle = this._handleProductQuantityChangeHandle.bind(this);
    this._deleteClickHandler = this._deleteClickHandler.bind(this);

    this._currentValueCount = this._data.count;

    this.restoreHandlers();
  }

  getTemplate() {
    return createBasketItemElement(this._data);
  }

  restoreHandlers() {
    this.setQuantityIncHandle();
    this.setQuantityDecHandle();
  }

  _handleQuantityIncClick(evt) {
    evt.preventDefault();
    this._currentValueCount = Number(this.getElement().querySelector(`input[name=product-quantity]`).value);
    this._currentValueCount++;

    this._callback.quantityIncClick(this._currentValueCount);
  }

  _handleQuantityDecClick() {
    this._currentValueCount = Number(this.getElement().querySelector(`input[name=product-quantity]`).value);
    this._currentValueCount--;

    this._callback.quantityDecClick(this._currentValueCount);
  }

  _handleProductQuantityChangeHandle(evt) {
    evt.preventDefault();
    if (evt.target.value <= 0 || Number.isNaN(Number(evt.target.value)) || evt.target.value === ``) {
      this._callback.productQuantityChange(this._currentValueCount);
    }

    this._currentValueCount = Number(evt.target.value);

    this._callback.productQuantityChange(this._currentValueCount);
  }

  _deleteClickHandler(evt) {
    evt.preventDefault();
    this._callback.deleteClick();
  }

  setQuantityIncHandle(callback) {
    this._callback.quantityIncClick = callback;
    this.getElement().querySelector(`#inc-button`).addEventListener(`click`, this._handleQuantityIncClick);
  }

  setQuantityDecHandle(callback) {
    this._callback.quantityDecClick = callback;
    this.getElement().querySelector(`#dec-button`).addEventListener(`click`, this._handleQuantityDecClick);
  }

  setProductQuantityChangeHandle(callback) {
    this._callback.productQuantityChange = callback;
    this.getElement().querySelector(`input[name=product-quantity]`).addEventListener(`change`, this._handleProductQuantityChangeHandle);
  }

  setDeleteClickHandler(callback) {
    this._callback.deleteClick = callback;
    this.getElement().querySelector(`.product__delete`).addEventListener(`click`, this._deleteClickHandler);
  }
}


/***/ }),

/***/ "./source/js/view/basket-popUp-delete.js":
/*!***********************************************!*\
  !*** ./source/js/view/basket-popUp-delete.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPopUpDelete; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./source/js/view/abstract.js");
/* harmony import */ var _utils_good_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/good.js */ "./source/js/utils/good.js");



const createBasketPopUpDeleteElement = (data) => {
  const {type, name, identiferNumber, stringAmount, price} = data;

  return `<section class="modal">
  <div class="overlay">
    <div class="modal__popup">
      <h2 class="modal__title">Удалить этот товар?</h2>

      <div class="modal__content">
        <div class="modal__image-container">
          <img src="img/guitar-${Object(_utils_good_js__WEBPACK_IMPORTED_MODULE_1__["getGuitarType"])(type)}.png" width="80" height="202" alt="Изображение товара">
        </div>
        <div class="modal__content-container">
          <ul class="modal__deckription-list">
            <li class="modal__name">Гитара ${name}</li>
            <li class="modal__identifer-number">Артикул: ${identiferNumber}</li>
            <li class="modal__type">Электрогитара, ${stringAmount} струнная </li>
          </ul>
          <div class="modal__price">Цена: ${price} ₽</div>
        </div>
        <div class="modal__buttons-wrapper modal__buttons-wrapper--basket">
          <button class="modal__button">Удалить товар</button>
          <button class="modal__button modal__button--to-shoping">Продолжить покупки</button>
        </div>
        <button class="modal__close" type="button">
          <span class="visually-hidden">Закрыть</span>
        </button>
      </div>
    </div>
  </div>
</section>`;
};

class CatalogPopUpDelete extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data) {
    super();
    this._data = data;

    this._deleteClickHandler = this._deleteClickHandler.bind(this);
    this._closeClickHandler = this._closeClickHandler.bind(this);
    this._toShoppingClickHandler = this._toShoppingClickHandler.bind(this);
  }

  getTemplate() {
    return createBasketPopUpDeleteElement(this._data);
  }

  _deleteClickHandler(evt) {
    evt.preventDefault();
    this._callback.deleteClick();
  }

  _closeClickHandler(evt) {
    evt.preventDefault();
    this._callback.closeClick();
  }

  _toShoppingClickHandler(evt) {
    evt.preventDefault();
    this._callback.toShoppingClick();
  }

  setDeleteClickHandler(callback) {
    this._callback.deleteClick = callback;
    this.getElement().querySelector(`.modal__button`).addEventListener(`click`, this._deleteClickHandler);
  }

  setCloseClickHandler(callback) {
    this._callback.closeClick = callback;
    this.getElement().querySelector(`.modal__close`).addEventListener(`click`, this._closeClickHandler);
  }

  setToShoppingClickHandler(callback) {
    this._callback.toShoppingClick = callback;
    this.getElement().querySelector(`.modal__button--to-shoping`).addEventListener(`click`, this._toShoppingClickHandler);
  }
}


/***/ }),

/***/ "./source/js/view/basket.js":
/*!**********************************!*\
  !*** ./source/js/view/basket.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Basket; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./source/js/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");



const createBasketElement = (goods, discountType, isAvailable) => {
  let totalPrice = 0;

  const DISCOUNT = {
    GITARAHIT_10_PERCENT: 0.9,
    SUPERGITARA: 700,
    GITARA2020: 3500,
    GITARA2020_30_PERCENT: 0.7,
  };

  const getTotalPrice = () => {
    if (goods.length !== 0) {
      let goodPrice = [];

      goods.forEach((good) => {
        return goodPrice.push(good.price * good.count);
      });

      totalPrice = goodPrice.reduce((acc, price) => acc + price);
    }
    return totalPrice;
  };

  const getDiscountPrice = () => {
    switch (discountType) {
      case _const_js__WEBPACK_IMPORTED_MODULE_1__["DiscountType"].DEFAULT:
        getTotalPrice();
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_1__["DiscountType"].GITARAHIT:
        getTotalPrice();
        if (totalPrice > 0) {
          return totalPrice * DISCOUNT.GITARAHIT_10_PERCENT;
        }
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_1__["DiscountType"].SUPERGITARA:
        getTotalPrice();
        if (totalPrice > 0) {
          return totalPrice - DISCOUNT.SUPERGITARA;
        }
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_1__["DiscountType"].GITARA2020:
        getTotalPrice();
        if (totalPrice > 0) {
          return (DISCOUNT.GITARA2020) <= totalPrice * DISCOUNT.GITARA2020_30_PERCENT ? totalPrice - DISCOUNT.GITARA2020 : totalPrice * DISCOUNT.GITARA2020_30_PERCENT;
        }
        break;
    }
    return totalPrice.toLocaleString(`ru-RU`);
  };

  return `<section class="shoppingbag">
  <div class="shoppingbag__content">
    <div class="shoppingbag__product product">
      <ul class="product__list">

      </ul>
    </div>
    <div class="shoppingbag__order order">
      <div class="order__discount">
        <div class="order__discount-wrapper">
          <span class="order__discount-title">Промокод на скидку</span>
          <span class="order__discount-subtitle">Введите свой промокод, если он у вас есть.</span>
        </div>
        <div class="order__discount-promo ${!isAvailable ? `order__discount-promo--error` : ``}">
          <input type="text" name="order-discount-promo" id="order-discount-promo" placeholder="" value="">
          <button type="button">Применить купон</button>
        </div>
      </div>
      <div class="order__to-order">
        <span>Всего: ${getDiscountPrice()} ₽</span>
        <button type="button">Оформить заказ</button>
      </div>
    </div>
  </div>
</section>`;
};

class Basket extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(goods, discountType, isAvailable) {
    super();
    this._goods = goods;
    this._discountType = discountType;
    this._isAvailable = isAvailable;


    this._discountClickHandler = this._discountClickHandler.bind(this);
  }

  getTemplate() {
    return createBasketElement(this._goods, this._discountType, this._isAvailable);
  }

  _discountClickHandler(evt) {
    evt.preventDefault();
    const discountType = this.getElement().querySelector(`input[name=order-discount-promo]`).value;

    this._callback.discountClick(discountType);
  }

  setDiscountClickHandler(callback) {
    this._callback.discountClick = callback;
    this.getElement().querySelector(`.order__discount-promo button`).addEventListener(`click`, this._discountClickHandler);
  }
}


/***/ }),

/***/ "./source/js/view/breadcrumbs.js":
/*!***************************************!*\
  !*** ./source/js/view/breadcrumbs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Breadcrumbs; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./source/js/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");



const createBreadcrumbsTemplate = (siteMenuItem) => {
  const breadcrumbsElement = (element) => {
    let title = ``;
    switch (siteMenuItem) {
      case _const_js__WEBPACK_IMPORTED_MODULE_1__["MenuItem"].CATALOG:
        title = element.CATALOG;
        return title;
      case _const_js__WEBPACK_IMPORTED_MODULE_1__["MenuItem"].BASKET:
        title = element.BASKET;
        return title;
    }
    return title;
  };

  return `<div><h2 class="page-main__title">${breadcrumbsElement(_const_js__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbsTitle"])}</h2>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <a href="#" class="breadcrumbs__link">Главная</a>
    </li>
    <li class="breadcrumbs__item breadcrumbs__item--current">
      <a href="#" class="breadcrumbs__link">${breadcrumbsElement(_const_js__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbsItem"])}</a>
    </li>
  </ul></div>`;
};

class Breadcrumbs extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(siteMenuModel) {
    super();
    this._siteMenuModel = siteMenuModel;
  }

  getTemplate() {
    return createBreadcrumbsTemplate(this._siteMenuModel);
  }
}


/***/ }),

/***/ "./source/js/view/catalog-board.js":
/*!*****************************************!*\
  !*** ./source/js/view/catalog-board.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return catalogBoard; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./source/js/view/abstract.js");


const createCatalogBoardTemplate = () => {
  return `<div class="catalog__catalog-column"></div>`;
};

class catalogBoard extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createCatalogBoardTemplate();
  }
}


/***/ }),

/***/ "./source/js/view/catalog-item.js":
/*!****************************************!*\
  !*** ./source/js/view/catalog-item.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogItem; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./source/js/view/abstract.js");
/* harmony import */ var _utils_good_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/good.js */ "./source/js/utils/good.js");



const createCatalogItemElement = (data) => {
  const {type, reviewAmount, name, price, starsCount} = data;

  return (
    `<li class="list__item">
      <img src="img/guitar-${Object(_utils_good_js__WEBPACK_IMPORTED_MODULE_1__["getGuitarType"])(type)}.png" width="80" height="202" alt="Изображение товара">
      <div class="list__rating rating">
        <div class="list__stars rating__stars">
          <span style="width: ${starsCount * 20}%;"></span>
          <span class="visually-hidden">Rating</span>
        </div>
        <span class="rating__amount">${reviewAmount}</span>
      </div>
      <div class="list__descriotion-wrapper">
        <h3>${name}</h3>
        <p>${price.toLocaleString(`ru-RU`)} ₽</p>
      </div>
      <div class="list__navigation-wrapper">
        <a href="" class="catalog__button--info catalog__button">Подробнее</a>
        <a href="" class="catalog__button--buy catalog__button">Купить</a>
      </div>
    </li>`
  );
};

class CatalogItem extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data) {
    super();
    this.data = data;

    this._addClickHandler = this._addClickHandler.bind(this);
  }

  getTemplate() {
    return createCatalogItemElement(this.data);
  }

  _addClickHandler(evt) {
    evt.preventDefault();
    this._callback.addClick();
  }

  setAddClickHandler(callback) {
    this._callback.addClick = callback;
    this.getElement().querySelector(`.catalog__button--buy`).addEventListener(`click`, this._addClickHandler);
  }
}


/***/ }),

/***/ "./source/js/view/catalog-list.js":
/*!****************************************!*\
  !*** ./source/js/view/catalog-list.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogList; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./source/js/view/abstract.js");


const createCatalogListElement = () => {
  return (
    `<ul class="catalog__list list"></ul>`
  );
};

class CatalogList extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createCatalogListElement();
  }
}


/***/ }),

/***/ "./source/js/view/catalog-pagination.js":
/*!**********************************************!*\
  !*** ./source/js/view/catalog-pagination.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPagination; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./source/js/view/abstract.js");


const createCatalogPaginationElement = (goodsCount, goodsCountPerStep, paginationStep) => {
  const paginationCount = Math.ceil(goodsCount / goodsCountPerStep);
  const paginationRange = 4;

  const renderPagination = () => {
    let paginationItems = [];
    let temp = ``;
    for (let i = 1; i <= paginationCount; i++) {
      temp = `<li class="pagination__item ${i === paginationStep ? `pagination__item--current` : ``}"><a>${i}</a></li>`;
      paginationItems.push(temp);
    }

    if (paginationRange >= paginationCount) {
      return paginationItems.slice(0, paginationCount).join(``);
    }

    if (paginationRange < paginationCount) {
      let paginationDots = [`<li class="pagination__item"><a>...</a></li>`];
      let count = paginationStep - 1;

      if (paginationStep < 2) {
        paginationItems = [
          ...paginationItems.slice(0, paginationStep + 1),
          paginationDots,
          ...paginationItems.slice(paginationCount - 1, paginationCount)
        ].join(``);

        return paginationItems;
      }

      if (paginationStep === 2) {
        paginationItems = [
          ...paginationItems.slice(count - 1, paginationStep),
          paginationDots,
          ...paginationItems.slice(paginationCount - 1, paginationCount)
        ].join(``);

        return paginationItems;
      }

      if (paginationCount - paginationStep < paginationRange - 1) {
        paginationItems = [
          ...paginationItems.slice(paginationCount - paginationRange, paginationCount)
        ].join(``);

        return paginationItems;
      }

      paginationItems = [
        ...paginationItems.slice(count - 1, paginationStep),
        paginationDots,
        ...paginationItems.slice(paginationCount - 1, paginationCount)
      ].join(``);

      return paginationItems;
    }
    return paginationItems.join(``);
  };

  return `<ul class="catalog__pagination pagination">
    <li class="pagination__item pagination__item--button pagination__item--button-previous">
      <a href="#">Назад</a>
    </li>
    ${renderPagination()}
    <li class="pagination__item pagination__item--button pagination__item--button-next">
      <a href="#">Далее</a>
    </li>
  </ul>`;
};

class CatalogPagination extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(goodsCount, goodsCountPerStep, paginationStep) {
    super();
    this._goodsCount = goodsCount;
    this._goodsCountPerStep = goodsCountPerStep;
    this._paginationStep = paginationStep;

    this._nextClickHandler = this._nextClickHandler.bind(this);
    this._previousClickHandler = this._previousClickHandler.bind(this);
  }

  getTemplate() {
    return createCatalogPaginationElement(this._goodsCount, this._goodsCountPerStep, this._paginationStep);
  }

  _nextClickHandler(evt) {
    evt.preventDefault();
    this._callback.nextClick();
  }

  _previousClickHandler(evt) {
    evt.preventDefault();
    this._callback.previousClick();
  }

  setNextClickHandler(callback) {
    this._callback.nextClick = callback;
    this.getElement().querySelector(`.pagination__item--button-next`).addEventListener(`click`, this._nextClickHandler);
  }

  setPreviousClickHandler(callback) {
    this._callback.previousClick = callback;
    this.getElement().querySelector(`.pagination__item--button-previous`).addEventListener(`click`, this._previousClickHandler);
  }
}


/***/ }),

/***/ "./source/js/view/catalog-popUp-add.js":
/*!*********************************************!*\
  !*** ./source/js/view/catalog-popUp-add.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPopUpAdd; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./source/js/view/abstract.js");
/* harmony import */ var _utils_good_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/good.js */ "./source/js/utils/good.js");



const createCatalogPopUpAddElement = (data) => {
  const {name, identiferNumber, stringAmount, price, type} = data;

  return `<section class="modal">
    <div class="overlay">
      <div class="modal__popup">
        <h2 class="modal__title">Добавить товар в корзину</h2>

        <div class="modal__content">
          <div class="modal__image-container">
            <img src="img/guitar-${Object(_utils_good_js__WEBPACK_IMPORTED_MODULE_1__["getGuitarType"])(type)}.png" width="80" height="202" alt="Изображение товара">
          </div>
          <div class="modal__content-container">
            <ul class="modal__deckription-list">
              <li class="modal__name">Гитара ${name}</li>
              <li class="modal__identifer-number">Артикул: ${identiferNumber}</li>
              <li class="modal__type">Электрогитара, ${stringAmount} струнная </li>
            </ul>
            <div class="modal__price">Цена: ${price} ₽</div>
          </div>
          <button class="modal__button">Добавить в корзину</button>
          <button class="modal__close" type="button">
            <span class="visually-hidden">Закрыть</span>
          </button>
        </div>
      </div>
    </div>
  </section>`;
};

class CatalogPopUpAdd extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data) {
    super();
    this._data = data;

    this._addClickHandler = this._addClickHandler.bind(this);
    this._closeClickHandler = this._closeClickHandler.bind(this);
  }

  getTemplate() {
    return createCatalogPopUpAddElement(this._data);
  }

  _addClickHandler(evt) {
    evt.preventDefault();
    this._callback.addClick(this._data);
  }

  _closeClickHandler(evt) {
    evt.preventDefault();
    this._callback.closeClick();
  }

  setAddClickHandler(callback) {
    this._callback.addClick = callback;
    this.getElement().querySelector(`.modal__button`).addEventListener(`click`, this._addClickHandler);
  }

  setCloseClickHandler(callback) {
    this._callback.closeClick = callback;
    this.getElement().querySelector(`.modal__close`).addEventListener(`click`, this._closeClickHandler);
  }
}


/***/ }),

/***/ "./source/js/view/catalog-popUp-success.js":
/*!*************************************************!*\
  !*** ./source/js/view/catalog-popUp-success.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPopUpSuccess; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./source/js/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");



const createCatalogPopUpSuccessElement = () => {
  return `<section class="modal">
  <div class="overlay">
    <div class="modal__popup">
      <h2 class="modal__title">Товар успешно добавлен в корзину</h2>

      <div class="modal__content">
        <div class="modal__buttons-wrapper">
          <button class="modal__button modal__button--to-basket" data-menu-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["MenuItem"].BASKET}">Перейти в корзину</button>
          <button class="modal__button modal__button--to-shoping">Продолжить покупки</button>
        </div>
        <button class="modal__close" type="button">
          <span class="visually-hidden">Закрыть</span>
        </button>
      </div>
    </div>
  </div>
</section>`;
};

class CatalogPopUpSuccess extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this._toBasketClickHandler = this._toBasketClickHandler.bind(this);
    this._toShoppingClickHandler = this._toShoppingClickHandler.bind(this);
    this._closeClickHandler = this._closeClickHandler.bind(this);
  }

  getTemplate() {
    return createCatalogPopUpSuccessElement();
  }

  _toBasketClickHandler(evt) {
    evt.preventDefault();
    this._callback.toBasketClick(evt.target.dataset.menuType);
  }

  _toShoppingClickHandler(evt) {
    evt.preventDefault();
    this._callback.toShoppingClick();
  }

  _closeClickHandler(evt) {
    evt.preventDefault();
    this._callback.closeClick();
  }

  setToBasketClickHandler(callback) {
    this._callback.toBasketClick = callback;
    this.getElement().querySelector(`.modal__button--to-basket`).addEventListener(`click`, this._toBasketClickHandler);
  }

  setToShoppingClickHandler(callback) {
    this._callback.toShoppingClick = callback;
    this.getElement().querySelector(`.modal__button--to-shoping`).addEventListener(`click`, this._toShoppingClickHandler);
  }

  setCloseClickHandler(callback) {
    this._callback.closeClick = callback;
    this.getElement().querySelector(`.modal__close`).addEventListener(`click`, this._closeClickHandler);
  }
}


/***/ }),

/***/ "./source/js/view/catalog-section-wrapper.js":
/*!***************************************************!*\
  !*** ./source/js/view/catalog-section-wrapper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogSectionWrapper; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./source/js/view/abstract.js");


const createCatalogSectionWrapperElement = () => {
  return `<div class="catalog__content-wrapper">
    </div>`;
};

class CatalogSectionWrapper extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createCatalogSectionWrapperElement();
  }
}


/***/ }),

/***/ "./source/js/view/catalog-section.js":
/*!*******************************************!*\
  !*** ./source/js/view/catalog-section.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogSection; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./source/js/view/abstract.js");


const createCatalogSectionElement = () => {
  return `<section class="catalog"></section>`;
};

class CatalogSection extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createCatalogSectionElement();
  }
}


/***/ }),

/***/ "./source/js/view/catalog-sort.js":
/*!****************************************!*\
  !*** ./source/js/view/catalog-sort.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogSort; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./source/js/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");



const createCatalogSortElement = (currentSortByCategoryType, currentSortByPriorityType) => {
  return (
    `<div class="catalog__sort-wrapper">
      <span>Сортировать:</span>
      <ul class="catalog__sort sort">
        <li class="sort__item ${currentSortByCategoryType === _const_js__WEBPACK_IMPORTED_MODULE_1__["SortByCategoryType"].PRICE ? `sort__item--active` : ``}">
          <a
            href="#"
            data-sort-by-category="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortByCategoryType"].PRICE}">по цене
          </a>
        </li>
        <li class="sort__item ${currentSortByCategoryType === _const_js__WEBPACK_IMPORTED_MODULE_1__["SortByCategoryType"].POPULARITY ? `sort__item--active` : ``}">
          <a
            href="#"
            data-sort-by-category="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortByCategoryType"].POPULARITY}">по популярности
          </a>
        </li>
      </ul>
      <div class="catalog__sort-buttons">
        <button
          class="sort-button sort-button--up ${currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_1__["SortByPriorityType"].UP ? `sort-button--active` : ``}"
          type="button"
          data-sort-by-priority="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortByPriorityType"].UP}">
        </button>
        <button
          class="sort-button sort-button--down ${currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_1__["SortByPriorityType"].DOWN ? `sort-button--active` : ``}"
          type="button"
          data-sort-by-priority="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortByPriorityType"].DOWN}">
        </button>
      </div>
    </div>`
  );
};
class CatalogSort extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(sortByCategory, sortByPriority) {
    super();
    this._currentSortByCategory = sortByCategory;
    this._currentSortByPriority = sortByPriority;
    this._sortByCategoryChangeHandler = this._sortByCategoryChangeHandler.bind(this);
    this._sortByPriorityChangeHandler = this._sortByPriorityChangeHandler.bind(this);
  }

  getTemplate() {
    return createCatalogSortElement(this._currentSortByCategory, this._currentSortByPriority);
  }

  _sortByCategoryChangeHandler(evt) {
    evt.preventDefault();
    if (evt.target.tagName === `A`) {
      evt.preventDefault();
      this._callback.sortByCategoryChange(evt.target.dataset.sortByCategory);
    }
  }

  _sortByPriorityChangeHandler(evt) {
    if (evt.target.tagName === `BUTTON`) {
      evt.preventDefault();
      this._callback.sortByPriorityChange(evt.target.dataset.sortByPriority);
    }
  }

  setSortByCategoryChangeHandler(callback) {
    this._callback.sortByCategoryChange = callback;
    this.getElement().addEventListener(`click`, this._sortByCategoryChangeHandler);
  }

  setSortByPriorityChangeHandler(callback) {
    this._callback.sortByPriorityChange = callback;
    this.getElement().addEventListener(`click`, this._sortByPriorityChangeHandler);
  }
}


/***/ }),

/***/ "./source/js/view/filters.js":
/*!***********************************!*\
  !*** ./source/js/view/filters.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./source/js/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");
/* harmony import */ var _utils_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/filter.js */ "./source/js/utils/filter.js");




const createFiltersElement = (currentFilter, goods) => {
  let [currentFrom, currentTo] = currentFilter.price;
  let filteredGuitarsByType = {};
  let stringAmountAvailableList = [];
  let pricesInGoods = [];

  const guitarKeys = Object.keys(_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"]);
  const stringKeys = Object.keys(_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterStringAmount"]);

  let typeGuitarKeys = [];
  let typeGuitarValues = [];
  let typeStringsValues = [];

  pricesInGoods = goods
      .map((item) => item.price);

  const minPriceInGoods = Math.min(...pricesInGoods);
  const maxPriceInGoods = Math.max(...pricesInGoods);

  if (currentFilter.price.length === 0) {
    currentFrom = minPriceInGoods;
    currentTo = maxPriceInGoods;
  }

  if (currentFrom > currentTo) {
    currentTo = currentFrom;
  }

  if (currentFrom < minPriceInGoods) {
    currentFrom = minPriceInGoods;
  }

  if (currentTo < currentFrom) {
    currentTo = currentFrom;
  }

  if (currentFrom < minPriceInGoods || Number.isNaN(currentFrom)) {
    currentFrom = minPriceInGoods;
  }

  if (currentTo > maxPriceInGoods || Number.isNaN(currentTo)) {
    currentTo = maxPriceInGoods;
  }

  filteredGuitarsByType = goods
      .filter((item) => Object(_utils_filter_js__WEBPACK_IMPORTED_MODULE_2__["filteredGoodsByType"])(item.type, currentFilter.type));

  stringAmountAvailableList = Array.from(new Set(filteredGuitarsByType
      .map((item) => item.stringAmount)));

  guitarKeys.filter((key) => (currentFilter.type.forEach((type) => {
    if (type.includes(_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"][key])) {
      return typeGuitarKeys.push(key);
    } else {
      return false;
    }
  })));

  guitarKeys.filter((key) => (currentFilter.type.forEach((type) => {
    if (type.includes(_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"][key])) {
      return typeGuitarValues.push(_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"][key]);
    } else {
      return false;
    }
  })));

  stringKeys.filter((key) => (currentFilter.stringAmount.forEach((type) => {
    if (_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterStringAmount"][key] === type) {
      return typeStringsValues.push(_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterStringAmount"][key]);
    } else {
      return false;
    }
  })));

  stringAmountAvailableList = Array.from(new Set(stringAmountAvailableList));

  const isStringsAvailable = (availableList, stringsCount) => {
    return availableList.includes(stringsCount);
  };

  return (`<div class="catalog__filters-column">
  <h2>Фильтр</h2>
  <form class="catalog__filters-form" action="#" method="GET">
      <fieldset class="catalog__filters-price-change">
        <h3>Цена, ₽</h3>
        <div class="catalog__filters-price-wrapper">
          <input
              type="text"
              name="filters-form-price-from"
              id="filters-form-price-from"
              placeholder="${currentFrom.toLocaleString(`ru-RU`)}"
              value="${currentFrom.toLocaleString(`ru-RU`)}"
              min="0"
              max="1000000"
              >
          <input
              type="text"
              name="filters-form-price-to"
              id="filters-form-price-to"
              placeholder="${currentTo.toLocaleString(`ru-RU`)}"
              value="${currentTo.toLocaleString(`ru-RU`)}"
              min="0"
              max="1000000"
              >
        </div>
      </fieldset>
      <fieldset class="catalog__filters-type-guitar">
        <h3>Тип гитар</h3>
        <div class="catalog__filters-type-wrapper">
          <div class="catalog__filters-type-content-wrapper">
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-type"
                id="filters-form-type-value-1"
                data-filter-type-guitar="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].ACOUSTIC}"
                ${isStringsAvailable(typeGuitarValues, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].ACOUSTIC) ? `checked` : ``}
                >
            <label for="filters-form-type-value-1">Акустические гитары</label>
          </div>
          <div class="catalog__filters-type-content-wrapper">
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-type"
                id="filters-form-type-value-2"
                data-filter-type-guitar="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].ELECTRIC}"
                ${isStringsAvailable(typeGuitarValues, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].ELECTRIC) ? `checked` : ``}
                >
            <label for="filters-form-type-value-2">Электрогитары</label>
          </div>
          <div class="catalog__filters-type-content-wrapper">
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-type"
                id="filters-form-type-value-3"
                data-filter-type-guitar="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].UKULELE}"
                ${isStringsAvailable(typeGuitarValues, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].UKULELE) ? `checked` : ``}
                >
            <label for="filters-form-type-value-3">Укулеле</label>
          </div>
        </div>
      </fieldset>
      <fieldset class="catalog__filters-string-amount">
        <h3>Количество струн</h3>
        <div class="catalog__filters-amount-wrapper">
          <label>
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-amount"
                id="4"
                data-filter-amount-strings="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterStringAmount"].FOUR}"
                ${isStringsAvailable(typeStringsValues, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterStringAmount"].FOUR) ? `checked` : ``}
                ${isStringsAvailable(stringAmountAvailableList, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterStringAmount"].FOUR) ? `` : `disabled`}
                >
            <span>4</span>
          </label>
          <label>
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-amount"
                id="6"
                data-filter-amount-strings="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterStringAmount"].SIX}"
                ${isStringsAvailable(typeStringsValues, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterStringAmount"].SIX) ? `checked` : ``}
                ${isStringsAvailable(stringAmountAvailableList, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterStringAmount"].SIX) ? `` : `disabled`}
                >
            <span>6</span>
          </label>
          <label>
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-amount"
                id="7"
                data-filter-amount-strings="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterStringAmount"].SEVEN}"
                ${isStringsAvailable(typeStringsValues, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterStringAmount"].SEVEN) ? `checked` : ``}
                ${isStringsAvailable(stringAmountAvailableList, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterStringAmount"].SEVEN) ? `` : `disabled`}
                >
            <span>7</span>
          </label>
          <label>
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-amount"
                id="12"
                data-filter-amount-strings="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterStringAmount"].TWELVE}"
                ${isStringsAvailable(typeStringsValues, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterStringAmount"].TWELVE) ? `checked` : ``}
                ${isStringsAvailable(stringAmountAvailableList, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterStringAmount"].TWELVE) ? `` : `disabled`}
                >
            <span>12</span>
          </label>
        </div>
      </fieldset>
    </form></div>`);
};

class Filters extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(currentFilter, goods) {
    super();
    this._currentFilter = currentFilter;
    this._goods = goods;

    this._filterPriceChangeHandler = this._filterPriceChangeHandler.bind(this);
    this._filterGuitarTypeChangeHandler = this._filterGuitarTypeChangeHandler.bind(this);
    this._filterStringAmountChangeHandler = this._filterStringAmountChangeHandler.bind(this);

  }

  getTemplate() {
    return createFiltersElement(this._currentFilter, this._goods);
  }

  _filterGuitarTypeChangeHandler(evt) {
    evt.preventDefault();
    let optionsGuitarTypeArray = [];

    document.querySelectorAll(`input[type='checkbox']`)
        .forEach((checkbox) => checkbox.checked === true && !checkbox.dataset.filterAmountStrings ? optionsGuitarTypeArray
            .push(checkbox.dataset.filterTypeGuitar) : null);

    this._callback.filterTypeChange(optionsGuitarTypeArray);
  }

  _filterStringAmountChangeHandler(evt) {
    evt.preventDefault();
    let optionsStringAmountArray = [];

    document.querySelectorAll(`input[type='checkbox']`)
        .forEach((checkbox) => checkbox.checked === true && !checkbox.dataset.filterTypeGuitar ? optionsStringAmountArray
            .push(checkbox.dataset.filterAmountStrings) : null);

    this._callback.filterStringChange(optionsStringAmountArray);
  }

  _filterPriceChangeHandler(evt) {
    evt.preventDefault();

    let optionsPriceChangeArray = [];

    document.querySelectorAll(`input[type='text']`)
        .forEach((checkbox) => optionsPriceChangeArray
            .push(checkbox.value));

    this._callback.filterPriceChange(optionsPriceChangeArray);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().querySelector(`.catalog__filters-type-guitar`).addEventListener(`change`, this._filterGuitarTypeChangeHandler);
  }

  setFilterStringChangeHandler(callback) {
    this._callback.filterStringChange = callback;
    this.getElement().querySelector(`.catalog__filters-string-amount`).addEventListener(`change`, this._filterStringAmountChangeHandler);
  }

  setFilterPriceChangeHandler(callback) {
    this._callback.filterPriceChange = callback;
    this.getElement().querySelector(`.catalog__filters-price-change`).addEventListener(`change`, this._filterPriceChangeHandler);
  }
}


/***/ }),

/***/ "./source/js/view/site-menu.js":
/*!*************************************!*\
  !*** ./source/js/view/site-menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMenu; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./source/js/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");



const createSiteMenuTemplate = (basketModel) => {
  const goodsInBasket = basketModel;

  let goodsCount = 0;
  if (goodsInBasket.length !== 0) {
    goodsCount = goodsInBasket.map((good) => good.count)
        .reduce((total, count) => total + count);
  }
  return `<nav class="main-nav">
    <div class="container">
      <div class="main-nav__wrapper">
        <a class="main-nav__logo">
          <svg width="67" height="70">
            <use xlink:href="img/sprite.svg#logo"></use>
          </svg>
        </a>
        <ul class="main-nav__list site-list">
          <li class="site-list__item">
            <a href="#" data-menu-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["MenuItem"].CATALOG}">Каталог</a>
          </li>
          <li class="site-list__item">
            <a href="#">Где купить?</a>
          </li>
          <li class="site-list__item">
            <a href="#">О компании</a>
          </li>
          <li class="site-list__item">
            <a href="#">Cервис-центры</a>
          </li>
        </ul>
        <ul class="main-nav__list user-list">
          <li class="user-list__item user-list__item--location">
            <a href="#">
              <span class="visually-hidden">Локация</span>
              <svg width="14" height="17">
                <use xlink:href="img/sprite.svg#icon_location"></use>
              </svg>
                <!-- <img src="img/icon_location.svg" width="14" height="17" alt="Локация"> -->
            </a>
          </li>
          <li class="user-list__item user-list__item--search">
            <a href="#">
              <span class="visually-hidden">Поиск по сайту</span>
              <svg width="14" height="14">
                <use xlink:href="img/sprite.svg#icon_search"></use>
              </svg>
              <!-- <img src="img/icon_search.svg" width="14" height="14" alt="Поиск по сайту"> -->
            </a>
          </li>
          <li class="user-list__item user-list__item--basket">
            <a href="#">
              <span class="visually-hidden">Корзина</span>
              <svg width="16" height="18" data-menu-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["MenuItem"].BASKET}">
                <use xlink:href="img/sprite.svg#icon_basket"></use>
              </svg>
              <!-- <img src="img/icon_basket.svg" width="16" height="18" alt="Корзина"> -->
            </a>
            <span class="" data-title="${goodsInBasket.length === 0 ? `` : goodsCount}"></span>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
};

class SiteMenu extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(basketModel) {
    super();

    this._basketModel = basketModel;
    this._menuClickHandler = this._menuClickHandler.bind(this);
  }

  getTemplate() {
    return createSiteMenuTemplate(this._basketModel);
  }

  _menuClickHandler(evt) {
    evt.preventDefault();
    this._callback.menuClick(evt.target.dataset.menuType);
  }

  setMenuClickHandler(callback) {
    this._callback.menuClick = callback;
    this.getElement().addEventListener(`click`, this._menuClickHandler);
  }
}


/***/ }),

/***/ "./source/js/view/smart.js":
/*!*********************************!*\
  !*** ./source/js/view/smart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Smart; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./source/js/view/abstract.js");


class Smart extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._data = {};
  }

  updateData(update, justDataUpdating) {
    if (!update) {
      return;
    }

    this._data = Object.assign(
        {},
        this._data,
        update
    );

    if (justDataUpdating) {
      return;
    }

    this.updateElement();
  }

  updateElement() {
    const prevElement = this.getElement();

    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.getElement();

    parent.replaceChild(newElement, prevElement);

    this.restoreHandlers();
  }

  restoreHandlers() {
    throw new Error(`Abstract method not implemented: resetHandlers`);
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map