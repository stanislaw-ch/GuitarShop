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
/*! exports provided: SortType, OrderType, FilterType, FilterTypeS, MenuItem, StringsAmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderType", function() { return OrderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterType", function() { return FilterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTypeS", function() { return FilterTypeS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringsAmount", function() { return StringsAmount; });
const SortType = {
  DEFAULT: `default`,
  PRICE: `price`,
  POPULARITY: `popularity`
};

const OrderType = {
  DEFAULT: `default`,
  UP: `up`,
  DOWN: `down`
};

// export const FilterType = {
//   type: [``]
// };

const FilterType = {
  ELECTRO: `электрогитара`,
  ACOUSTIC: `акустическая гитара`,
  UKULELE: `укулеле`
};

const FilterTypeS = {
  FOUR: `4`,
  SIX: `6`,
  SEVEN: `7`,
  TWELVE: `12`,
};

// export const FilterType = {
//   ALL: `all`,
//   ELECTRO: `электрогитара`,
//   ACOUSTIC: `акустическая гитара`,
//   UKULELE: `укулеле`
// };

const MenuItem = {
  CARDS: `CARDS`,
  BASKET: `BASKET`
};

const StringsAmount = {
  ELECTRO: [`4`, `6`, `7`],
  ACOUSTIC: [`6`, `7`, `12`],
  UKULELE: [`4`]
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
/* harmony import */ var _view_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/breadcrumbs.js */ "./source/js/view/breadcrumbs.js");
/* harmony import */ var _view_catalog_section_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/catalog-section.js */ "./source/js/view/catalog-section.js");
/* harmony import */ var _view_catalog_section_wrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/catalog-section-wrapper.js */ "./source/js/view/catalog-section-wrapper.js");
/* harmony import */ var _presenter_site_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presenter/site-menu.js */ "./source/js/presenter/site-menu.js");
/* harmony import */ var _presenter_catalog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presenter/catalog.js */ "./source/js/presenter/catalog.js");
/* harmony import */ var _model_cards_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/cards.js */ "./source/js/model/cards.js");
/* harmony import */ var _model_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/filter.js */ "./source/js/model/filter.js");
/* harmony import */ var _model_site_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/site-menu.js */ "./source/js/model/site-menu.js");
/* harmony import */ var _mock_json_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock/json.js */ "./source/js/mock/json.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/render.js */ "./source/js/utils/render.js");












const cardsModel = new _model_cards_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
cardsModel.setCards(_mock_json_js__WEBPACK_IMPORTED_MODULE_8__["default"]);

const filterModel = new _model_filter_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
const siteMenuModel = new _model_site_menu_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
const siteCatalogSectionComponent = new _view_catalog_section_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
const siteCatalogSectionWrapperComponent = new _view_catalog_section_wrapper_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

const siteHeaderElement = document.querySelector(`.page-header`);
const siteMainElement = document.querySelector(`.page-main`);
const siteMainContainerElement = siteMainElement.querySelector(`.container`);

Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(siteMainContainerElement, new _view_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_0__["default"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(siteMainContainerElement, siteCatalogSectionComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(siteCatalogSectionComponent, siteCatalogSectionWrapperComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

const catalogPresenter = new _presenter_catalog_js__WEBPACK_IMPORTED_MODULE_4__["default"](siteCatalogSectionWrapperComponent, cardsModel, filterModel, siteMenuModel);
const siteMenuPresenter = new _presenter_site_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"](siteHeaderElement, siteMenuModel);

siteMenuPresenter.init();
catalogPresenter.init();


/***/ }),

/***/ "./source/js/mock/json.js":
/*!********************************!*\
  !*** ./source/js/mock/json.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
  {
    id: 0,
    identiferNumber: `SO757575`,
    name: `Честер Bass`,
    type: `электрогитара`,
    reviewAmount: `15`,
    stringAmount: `7`,
    price: `17500`,
    image: `img/gitar-electric_1.png`,
    starsCount: `3.2`
  },
  {
    id: 1,
    identiferNumber: `TK129049`,
    name: `СURT Z300`,
    type: `электрогитара`,
    reviewAmount: `9`,
    stringAmount: `7`,
    price: `29500`,
    image: `img/gitar-electric_2.png`,
    starsCount: `4.5`
  },
  {
    id: 2,
    identiferNumber: `RO111111`,
    name: `Roman LX`,
    type: `укулеле`,
    reviewAmount: `21`,
    stringAmount: `4`,
    price: `6800`,
    image: `img/gitar-ukulele_1.png`,
    starsCount: `5`
  },
  {
    id: 3,
    identiferNumber: `TK436457`,
    name: `СURT T300`,
    type: `электрогитара`,
    reviewAmount: `15`,
    stringAmount: `6`,
    price: `30000`,
    image: `img/gitar-electric_3.png`,
    starsCount: `3`
  },
  {
    id: 4,
    identiferNumber: `DI192138`,
    name: `Dania Super`,
    type: `акустическая гитара`,
    reviewAmount: `5`,
    stringAmount: `7`,
    price: `3500`,
    image: `img/gitar-acoustic_2.png`,
    starsCount: `4.5`
  },
  {
    id: 5,
    identiferNumber: `SO934345`,
    name: `Честер WX`,
    type: `электрогитара`,
    reviewAmount: `17`,
    stringAmount: `6`,
    price: `15300`,
    image: `img/gitar-electric_1.png`,
    starsCount: `4.15`
  },
  {
    id: 6,
    identiferNumber: `DI082347`,
    name: `Dania VX`,
    type: `укулеле`,
    reviewAmount: `5`,
    stringAmount: `4`,
    price: `2200`,
    image: `img/gitar-ukulele_1.png`,
    starsCount: `3.15`
  },
  {
    id: 7,
    identiferNumber: `SO135646`,
    name: `Честер Plus`,
    type: `электрогитара`,
    reviewAmount: `27`,
    stringAmount: `4`,
    price: `30000`,
    image: `img/gitar-electric_1.png`,
    starsCount: `2.15`
  },
  {
    id: 8,
    identiferNumber: `VO154751`,
    name: `Виолана 300`,
    type: `акустическая гитара`,
    reviewAmount: `3`,
    stringAmount: `7`,
    price: `1700`,
    image: `img/gitar-acoustic_2.png`,
    starsCount: `3.15`
  },
  {
    id: 9,
    identiferNumber: `TK244556`,
    name: `СURT Clasic`,
    type: `электрогитара`,
    reviewAmount: `20`,
    stringAmount: `4`,
    price: `23000`,
    image: `img/gitar-electric_2.png`,
    starsCount: `5`
  },
]);


/***/ }),

/***/ "./source/js/model/cards.js":
/*!**********************************!*\
  !*** ./source/js/model/cards.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cards; });
/* harmony import */ var _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observer.js */ "./source/js/utils/observer.js");



class Cards extends _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._cards = [];
  }

  setCards(cards) {
    this._cards = cards.slice();
  }

  getCards() {
    return this._cards;
  }

  // updateTask(updateType, update) {
  //   const index = this._cards.findIndex((task) => task.id === update.id);

  //   if (index === -1) {
  //     throw new Error(`Can't update unexisting task`);
  //   }

  //   this._cards = [
  //     ...this._cards.slice(0, index),
  //     update,
  //     ...this._cards.slice(index + 1)
  //   ];

  //   this._notify(updateType, update);
  // }

  // addTask(updateType, update) {
  //   this._cards = [
  //     update,
  //     ...this._cards
  //   ];

  //   this._notify(updateType, update);
  // }

  // deleteTask(updateType, update) {
  //   const index = this._cards.findIndex((task) => task.id === update.id);

  //   if (index === -1) {
  //     throw new Error(`Can't delete unexisting task`);
  //   }

  //   this._cards = [
  //     ...this._cards.slice(0, index),
  //     ...this._cards.slice(index + 1)
  //   ];

  //   this._notify(updateType);
  // }
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

// import {FilterType} from "../const.js";

class Filter extends _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._activeFilter = {
      type: [],
      stringAmount: [],
      price: [`1000`, `30000`]
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
    this._activeItem = _const_js__WEBPACK_IMPORTED_MODULE_1__["MenuItem"].CARDS;
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
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");



class Basket {
  constructor(basketContainer) {
    this._basketContainer = basketContainer;
    // this._basketModel = basketModel;
    // this._cardsModel = cardsModel;
    this._currentFilter = null;

    this._basketComponent = null;

    // this._handleModelEvent = this._handleModelEvent.bind(this);
    // this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
  }

  init() {
    this._basketComponent = new _view_basket_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._basketContainer, this._basketComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);

    // this._cardsModel.addObserver(this._handleModelEvent);
    // this._basketModel.addObserver(this._handleModelEvent);
  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(this._basketComponent);

    this._basketComponent = null;

    // this._cardsModel.removeObserver(this._handleModelEvent);
    // this._basketModel.removeObserver(this._handleModelEvent);
  }

  _handleModelEvent() {
    this.init();
  }
}


/***/ }),

/***/ "./source/js/presenter/card.js":
/*!*************************************!*\
  !*** ./source/js/presenter/card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var _view_catalog_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/catalog-item.js */ "./source/js/view/catalog-item.js");
/* harmony import */ var _view_catalog_popUp_add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/catalog-popUp-add.js */ "./source/js/view/catalog-popUp-add.js");
/* harmony import */ var _view_catalog_popUp_success_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/catalog-popUp-success.js */ "./source/js/view/catalog-popUp-success.js");
/* harmony import */ var _view_site_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/site-menu.js */ "./source/js/view/site-menu.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");






class Card {
  constructor(catalogListContainer, siteMenuModel) {
    this._catalogListContainer = catalogListContainer;
    this._catalogPopUpContainer = document.querySelector(`body`);
    this._siteMenuModel = siteMenuModel;

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
  }

  init(catalogCard) {
    this._catalogCard = catalogCard;
    this._cardBasket = {};

    this._catalogItemComponent = new _view_catalog_item_js__WEBPACK_IMPORTED_MODULE_0__["default"](catalogCard);

    this._catalogItemComponent.setAddClickHandler(this._handleAddToBasketClick);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["render"])(this._catalogListContainer, this._catalogItemComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].BEFOREEND);
  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["remove"])(this._catalogItemComponent);
  }

  _removePopUpAddComponent() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["remove"])(this._catalogPopUpAddComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }

  _removePopUpSuccessComponent() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["remove"])(this._catalogPopUpSuccessComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
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
  }

  _handleAddToBasketPopUpClick() {
    this._removePopUpAddComponent();
    this._catalogPopUpSuccessComponent = new _view_catalog_popUp_success_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

    this._catalogPopUpSuccessComponent.setCloseClickHandler(this._handleCloseClick);
    this._catalogPopUpSuccessComponent.setToBasketClickHandler(this._handleAddToBasketPopUpSuccessClick);
    this._catalogPopUpSuccessComponent.setToShoppingClickHandler(this._handleToShoppingPopUpClick);
    this._catalogPopUpSuccessComponent.setCloseClickHandler(this._handleCloseClick);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["render"])(this._catalogPopUpContainer, this._catalogPopUpSuccessComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].AFTERBEGIN);
    document.addEventListener(`keydown`, this._escKeyDownHandler);

    this._cardBasket = new Array(Object.assign({}, this._catalogCard));
    // console.log(this._cardBasket);
  }

  _handleAddToBasketPopUpSuccessClick(menuItem) {
    this._currentMenuItem = this._siteMenuModel.getMenuItem();

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
/* harmony import */ var _presenter_card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../presenter/card.js */ "./source/js/presenter/card.js");
/* harmony import */ var _presenter_basket_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../presenter/basket.js */ "./source/js/presenter/basket.js");
/* harmony import */ var _presenter_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../presenter/filter.js */ "./source/js/presenter/filter.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");
/* harmony import */ var _utils_card_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/card.js */ "./source/js/utils/card.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");
/* harmony import */ var _utils_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/filter.js */ "./source/js/utils/filter.js");















const CARD_COUNT_PER_STEP = 9;

class Board {
  constructor(catalogContainer, cardsModel, filterModel, siteMenuModel) {
    this._cardsModel = cardsModel;
    this._filterModel = filterModel;
    this._siteMenuModel = siteMenuModel;
    this._catalogContainer = catalogContainer;
    this._renderedCardsCount = CARD_COUNT_PER_STEP;
    this._currentSortType = _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].DEFAULT;
    this._currentOrderType = _const_js__WEBPACK_IMPORTED_MODULE_9__["OrderType"].DEFAULT;
    this._cardPresenter = {};

    this._catalogComponent = new _view_catalog_board_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._catalogListComponent = new _view_catalog_list_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._catalogPaginationComponent = new _view_catalog_pagination_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

    this._filterPresenter = new _presenter_filter_js__WEBPACK_IMPORTED_MODULE_6__["default"](this._catalogContainer, this._filterModel, this._cardsModel);

    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._handleOrderTypeChange = this._handleOrderTypeChange.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleMenuModel = this._handleMenuModel.bind(this);
    // this._handleModeChange = this._handleModeChange.bind(this);
    this._siteMenuModel.addObserver(this._handleMenuModel);
  }

  init() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["render"])(this._catalogContainer, this._catalogComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["render"])(this._catalogComponent, this._catalogListComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND);

    this._cardsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);

    this._renderBoard();
  }

  destroy() {
    this._clearBoard({resetRenderedCardsCount: true, resetSortType: true});

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["remove"])(this._catalogListComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["remove"])(this._catalogComponent);

    this._cardsModel.removeObserver(this._handleModelEvent);
    this._filterModel.removeObserver(this._handleModelEvent);
  }

  _getCards() {
    const filterType = this._filterModel.getFilter();
    const cards = this._cardsModel.getCards();

    let filteredCards = null;

    filteredCards = cards.slice(0);
    filteredCards = filteredCards
        .filter((card) => Object(_utils_filter_js__WEBPACK_IMPORTED_MODULE_10__["filteredCardsByType"])(card.type, filterType.type))
        .filter((card) => Object(_utils_filter_js__WEBPACK_IMPORTED_MODULE_10__["filteredCardsByType"])(card.stringAmount, filterType.stringAmount))
        .filter((card) => Object(_utils_filter_js__WEBPACK_IMPORTED_MODULE_10__["filteredCardsByPrice"])(card.price, filterType.price));

    switch (this._currentSortType) {
      case _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].DEFAULT:
        if (this._currentOrderType === _const_js__WEBPACK_IMPORTED_MODULE_9__["OrderType"].UP) {
          this._currentSortType = _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].PRICE;
          return filteredCards.sort(_utils_card_js__WEBPACK_IMPORTED_MODULE_8__["sortPopularityUp"]);
        }
        if (this._currentOrderType === _const_js__WEBPACK_IMPORTED_MODULE_9__["OrderType"].DOWN) {
          this._currentSortType = _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].PRICE;
          return filteredCards.sort(_utils_card_js__WEBPACK_IMPORTED_MODULE_8__["sortPopularityDown"]);
        }
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].PRICE:
        if (this._currentOrderType === _const_js__WEBPACK_IMPORTED_MODULE_9__["OrderType"].DEFAULT) {
          this._currentOrderType = _const_js__WEBPACK_IMPORTED_MODULE_9__["OrderType"].UP;
          return filteredCards.sort(_utils_card_js__WEBPACK_IMPORTED_MODULE_8__["sortPriceUp"]);
        }
        if (this._currentOrderType === _const_js__WEBPACK_IMPORTED_MODULE_9__["OrderType"].UP) {
          return filteredCards.sort(_utils_card_js__WEBPACK_IMPORTED_MODULE_8__["sortPriceUp"]);
        }
        if (this._currentOrderType === _const_js__WEBPACK_IMPORTED_MODULE_9__["OrderType"].DOWN) {
          return filteredCards.sort(_utils_card_js__WEBPACK_IMPORTED_MODULE_8__["sortPriceDown"]);
        }
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].POPULARITY:
        if (this._currentOrderType === _const_js__WEBPACK_IMPORTED_MODULE_9__["OrderType"].DEFAULT) {
          this._currentOrderType = _const_js__WEBPACK_IMPORTED_MODULE_9__["OrderType"].UP;
          return filteredCards.sort(_utils_card_js__WEBPACK_IMPORTED_MODULE_8__["sortPopularityUp"]);
        }
        if (this._currentOrderType === _const_js__WEBPACK_IMPORTED_MODULE_9__["OrderType"].UP) {
          return filteredCards.sort(_utils_card_js__WEBPACK_IMPORTED_MODULE_8__["sortPopularityUp"]);
        }
        if (this._currentOrderType === _const_js__WEBPACK_IMPORTED_MODULE_9__["OrderType"].DOWN) {
          return filteredCards.sort(_utils_card_js__WEBPACK_IMPORTED_MODULE_8__["sortPopularityDown"]);
        }
        break;
    }

    return filteredCards;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._currentSortType = sortType;

    this._clearBoard({resetRenderedCardsCount: true});
    this._renderBoard();
  }

  _handleOrderTypeChange(orderType) {
    if (this._currentOrderType === orderType) {
      return;
    }

    this._currentOrderType = orderType;

    this._clearBoard({resetRenderedCardsCount: true});
    this._renderBoard();
  }

  _handleModelEvent() {
    this._clearBoard({resetRenderedCardsCount: true});
    this._renderBoard();
  }


  _handleMenuModel(menuItem) {
    switch (menuItem) {
      case _const_js__WEBPACK_IMPORTED_MODULE_9__["MenuItem"].CARDS:

        this.destroy();
        this.init();
        this._basketPresenter.destroy();
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_9__["MenuItem"].BASKET:
        this.destroy();
        this._filterPresenter.destroy();

        const siteMainElement = document.querySelector(`.page-main`);
        const siteMainContainerElement = siteMainElement.querySelector(`.container`);

        this._basketPresenter = new _presenter_basket_js__WEBPACK_IMPORTED_MODULE_5__["default"](siteMainContainerElement);

        this._basketPresenter.init();
        break;
    }
  }

  _renderSort() {
    if (this._catalogSortComponent !== null) {
      this._catalogSortComponent = null;
    }

    this._catalogSortComponent = new _view_catalog_sort_js__WEBPACK_IMPORTED_MODULE_1__["default"](this._currentSortType, this._currentOrderType);
    this._catalogSortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
    this._catalogSortComponent.setOrderTypeChangeHandler(this._handleOrderTypeChange);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["render"])(this._catalogComponent, this._catalogSortComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].AFTERBEGIN);
  }

  _renderCard(card) {
    const cardPresenter = new _presenter_card_js__WEBPACK_IMPORTED_MODULE_4__["default"](this._catalogListComponent, this._siteMenuModel);
    cardPresenter.init(card);
    this._cardPresenter[card.id] = cardPresenter;
  }

  _renderCards(cards) {
    cards.forEach((card) => this._renderCard(card));
  }

  _renderPagination() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["render"])(this._catalogComponent, this._catalogPaginationComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND);
  }

  _clearBoard({resetRenderedCardsCount = false, resetSortType = false} = {}) {
    const cardCount = this._getCards().length;

    Object
        .values(this._cardPresenter)
        .forEach((presenter) => presenter.destroy());
    this._cardPresenter = {};


    // this._filterPresenter.destroy();

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["remove"])(this._catalogSortComponent);

    if (resetRenderedCardsCount) {
      this._renderedCardsCount = CARD_COUNT_PER_STEP;
    } else {
      this._renderedCardsCount = Math.min(cardCount, this._renderedCardsCount);
    }

    if (resetSortType) {
      this._currentSortType = _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].DEFAULT;
      this._currentOrderType = _const_js__WEBPACK_IMPORTED_MODULE_9__["OrderType"].DEFAULT;
    }
  }

  _renderBoard() {
    const cards = this._getCards();
    const cardCount = cards.length;

    // if (cardCount === 0) {
    //   this._renderNoCards();
    //   return;
    // }

    if (this._filterPresenter !== null) {
      this._filterPresenter.init();
    }

    this._renderSort();
    this._renderCards(cards.slice(0, Math.min(cardCount, this._renderedCardsCount)));

    // if (cardCount > this._renderedCardsCount) {
    this._renderPagination();


    // }
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


// import {filter} from "../utils/filter.js";
// import {FilterType} from "../const.js";

class Filter {
  constructor(filterContainer, filterModel, cardsModel) {
    this._filterContainer = filterContainer;
    this._filterModel = filterModel;
    this._cardsModel = cardsModel;

    this._currentFilter = {
      type: [],
      stringAmount: [],
      price: []
    };
    this._filterComponent = null;

    // this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
    this._handleFilterStringChange = this._handleFilterStringChange.bind(this);
    this._handleFilterPriceChange = this._handleFilterPriceChange.bind(this);
  }

  init() {
    console.log(`init`);
    this._currentFilter = this._filterModel.getFilter();
    this._cards = this._cardsModel.getCards();

    this._prevFilterComponent = this._filterComponent;

    this._filterComponent = new _view_filters_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._currentFilter, this._cards);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);
    this._filterComponent.setFilterStringChangeHandler(this._handleFilterStringChange);
    this._filterComponent.setFilterPriceChangeHandler(this._handleFilterPriceChange);


    // if (this._prevFilterComponent === null) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._filterContainer, this._filterComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].AFTERBEGIN);
    //   return;
    // }

    // this._cardsModel.addObserver(this._handleModelEvent);
    // this._filterModel.addObserver(this._handleModelEvent);
  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(this._filterComponent);

    this._filterComponent = null;

    // this._cardsModel.removeObserver(this._handleModelEvent);
    // this._filterModel.removeObserver(this._handleModelEvent);
  }

  // _handleModelEvent() {
  //   console.log(`init`);
  //   this.init();
  // }

  _handleFilterTypeChange(filterGuitarType) {
    if (this._currentFilter.stringAmount.length === filterGuitarType.length && this._currentFilter.stringAmount
        .every((value, index) => value === filterGuitarType[index]) && this._prevFilterComponent === 0) {
      return;
    }

    this.destroy();
    this._filterModel.setFilter(filterGuitarType, `type`);
  }

  _handleFilterStringChange(filterStringType) {
    if (this._currentFilter.stringAmount.length === filterStringType.length && this._currentFilter.stringAmount
        .every((value, index) => value === filterStringType[index]) && this._prevFilterComponent === 0) {
      return;
    }

    this.destroy();
    this._filterModel.setFilter(filterStringType, `stringAmount`);
  }

  _handleFilterPriceChange(filterPriceType) {
    if (this._currentFilter.price.length === filterPriceType.length && this._currentFilter.price
        .every((value, index) => value === filterPriceType[index])) {
      return;
    }

    this.destroy();
    this._filterModel.setFilter(filterPriceType, `price`);
  }

  _getFilters() {
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
  constructor(siteMenuContainer, siteMenuModel) {
    this._siteMenuContainer = siteMenuContainer;
    this._siteMenuModel = siteMenuModel;
    this._currentFilter = null;

    this._siteMenuComponent = new _view_site_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

    this._handleSiteMenuChange = this._handleSiteMenuChange.bind(this);
  }

  init() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._siteMenuContainer, this._siteMenuComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].AFTERBEGIN);

    this._siteMenuComponent.setMenuClickHandler(this._handleSiteMenuChange);
  }

  _handleSiteMenuChange(menuItem) {
    this._currentMenuItem = this._siteMenuModel.getMenuItem();

    if (this._currentMenuItem === menuItem || menuItem === null) {
      return;
    }

    this._siteMenuComponent.getElement()
        .querySelector(`[data-menu-type="${this._currentMenuItem}"]`)
        .parentElement.classList.remove(`site-list__item--active`);

    this._siteMenuComponent.getElement()
        .querySelector(`[data-menu-type="${menuItem}"]`)
        .parentElement.classList.add(`site-list__item--active`);

    this._siteMenuModel.setMenuItem(menuItem);
  }

  // destroy() {
  //   remove(this._siteMenuComponent);

  //   this._siteMenuComponent = null;

  //   this._cardsModel.removeObserver(this._handleModelEvent);
  //   this._siteMenuModel.removeObserver(this._handleModelEvent);
  // }

  // _handleModelEvent() {
  //   this.init();
  // }
}


/***/ }),

/***/ "./source/js/utils/card.js":
/*!*********************************!*\
  !*** ./source/js/utils/card.js ***!
  \*********************************/
/*! exports provided: sortPriceDown, sortPriceUp, sortPopularityDown, sortPopularityUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortPriceDown", function() { return sortPriceDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortPriceUp", function() { return sortPriceUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortPopularityDown", function() { return sortPopularityDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortPopularityUp", function() { return sortPopularityUp; });
const sortPriceDown = (pointA, pointB) => Number(pointA.price) > Number(pointB.price) ? -1 : 1;
const sortPriceUp = (pointA, pointB) => Number(pointA.price) > Number(pointB.price) ? 1 : -1;

const sortPopularityDown = (pointA, pointB) => Number(pointA.reviewAmount) > Number(pointB.reviewAmount) ? -1 : 1;
const sortPopularityUp = (pointA, pointB) => Number(pointA.reviewAmount) > Number(pointB.reviewAmount) ? 1 : -1;


/***/ }),

/***/ "./source/js/utils/filter.js":
/*!***********************************!*\
  !*** ./source/js/utils/filter.js ***!
  \***********************************/
/*! exports provided: filter, filteredCardsByType, filteredCardsByPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredCardsByType", function() { return filteredCardsByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredCardsByPrice", function() { return filteredCardsByPrice; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./source/js/const.js");


const filter = {
  [_const__WEBPACK_IMPORTED_MODULE_0__["FilterType"].ALL]: (cards) => cards.filter((card) => card),
  [_const__WEBPACK_IMPORTED_MODULE_0__["FilterType"].ACOUSTIC]: (cards) => cards.filter((card) => card.type === _const__WEBPACK_IMPORTED_MODULE_0__["FilterType"].ACOUSTIC),
  [_const__WEBPACK_IMPORTED_MODULE_0__["FilterType"].ELECTRO]: (cards) => cards.filter((card) => card.type === _const__WEBPACK_IMPORTED_MODULE_0__["FilterType"].ELECTRO),
  [_const__WEBPACK_IMPORTED_MODULE_0__["FilterType"].UKULELE]: (cards) => cards.filter((card) => card.type === _const__WEBPACK_IMPORTED_MODULE_0__["FilterType"].UKULELE),
};

// export const filteredCardsByKey = (targetArray, filters) => {
//   const filterKeys = Object.keys(filters);
//   return targetArray.filter((eachObj) => {
//     return filterKeys.every((eachKey) => {
//       if (!filters[eachKey].length) {
//         return true;
//       }
//       return filters[eachKey].includes(eachObj[eachKey]);
//     });
//   });
// };

const filteredCardsByType = (card, filters) => {
  if (!filters.length) {
    return true;
  }
  return filters.includes(card);
};

const filteredCardsByPrice = (card, filters) => {
  const keys = [`min`, `max`];
  let PriceRange = {};

  PriceRange = Object.assign(...keys.map((k, i) => ({[k]: filters[i]})));

  if (!filters.length) {
    return true;
  }

  return Number(card) <= PriceRange.max && Number(card) >= PriceRange.min;
};


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

// Принцип работы прост:
// 1. создаём пустой div-блок
// 2. берём HTML в виде строки и вкладываем в этот div-блок, превращая в DOM-элемент
// 3. возвращаем этот DOM-элемент
const createElement = (template) => {
  const newElement = document.createElement(`div`); // 1
  newElement.innerHTML = template; // 2

  return newElement.firstChild; // 3
};
// Единственный нюанс, что HTML в строке должен иметь общую обёртку,
// то есть быть чем-то вроде <nav><a>Link 1</a><a>Link 2</a></nav>,
// а не просто <a>Link 1</a><a>Link 2</a>

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


const createBasketElement = () => {
  return `<section class="shoppingbag">
  <div class="shoppingbag__content">
    <div class="shoppingbag__product product">
      <ul class="product__list">
        <li class="product__item">
          <div class="product__image-container">
            <img src="img/gitar-electric_1.png" width="80" height="202" alt="Изображение товара">
          </div>
          <ul class="product__deckription-list">
            <li class="product__name">Электрогитара Честер bass</li>
            <li class="product__identifer-number">Артикул: SO757575</li>
            <li class="product__type">Электрогитара, 6 струнная </li>
          </ul>
          <div class="product__price">17 500 ₽</div>
          <div class="product__quantity">
            <button class="product__quantity-button" type="button">-</button>
            <input id="product-quantity" type="text" value="1" name="product-quantity">
            <button class="product__quantity-button" type="button">+</button>
          </div>
          <div class="product__price-total">17 500 ₽</div>
          <button class="product__delete" type="button">
            <span class="visually-hidden">Удалить товар</span>
          </button>
        </li>
        <li class="product__item">
          <div class="product__image-container">
            <img src="img/gitar-electric_1.png" width="80" height="202" alt="Изображение товара">
          </div>
          <ul class="product__deckription-list">
            <li class="product__name">Электрогитара Честер bass</li>
            <li class="product__identifer-number">Артикул: SO757575</li>
            <li class="product__type">Электрогитара, 6 струнная </li>
          </ul>
          <div class="product__price">17 500 ₽</div>
          <div class="product__quantity">
            <button class="product__quantity-button" type="button">-</button>
            <input id="product-quantity" type="text" value="2" name="product-quantity">
            <button class="product__quantity-button" type="button">+</button>
          </div>
          <div class="product__price-total">17 500 ₽</div>
          <button class="product__delete" type="button">
            <span class="visually-hidden">Удалить товар</span>
          </button>
        </li>
      </ul>
    </div>
    <div class="shoppingbag__order order">
      <div class="order__discount">
        <div class="order__discount-wrapper">
          <span class="order__discount-title">Промокод на скидку</span>
          <span class="order__discount-subtitle">Введите свой промокод, если он у вас есть.</span>
        </div>
        <div class="order__discount-promo">
          <input type="text" name="order-discount-promo" id="order-discount-promo" placeholder="GITARAHIT" value="GITARAHIT">
          <button type="button">Применить купон</button>
        </div>
      </div>
      <div class="order__to-order">
        <span>Всего: 47 000 ₽</span>
        <button type="button">Оформить заказ</button>
      </div>
    </div>
  </div>
</section>`;
};

class Basket extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }

  getTemplate() {
    return createBasketElement();
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


const createBreadcrumbsTemplate = () => {
  return `<ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <a href="#" class="breadcrumbs__link">Главная</a>
    </li>
    <li class="breadcrumbs__item breadcrumbs__item--current">
      <a href="#" class="breadcrumbs__link">Каталог</a>
    </li>
  </ul>`;
};

class Breadcrumbs extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createBreadcrumbsTemplate();
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


const createCatalogItemElement = (card) => {
  const {image, reviewAmount, name, price, starsCount} = card;
  return (
    `<li class="list__item">
      <img src="${image}" width="80" height="202" alt="Изображение товара">
      <div class="list__rating rating">
        <div class="list__stars rating__stars">
          <span style="width: ${starsCount * 20}%;"></span>
          <span class="visually-hidden">Rating</span>
        </div>
        <span class="rating__amount">${reviewAmount}</span>
      </div>
      <div class="list__descriotion-wrapper">
        <h3>${name}</h3>
        <p>${price} ₽</p>
      </div>
      <div class="list__navigation-wrapper">
        <a href="" class="catalog__button--info catalog__button">Подробнее</a>
        <a href="" class="catalog__button--buy catalog__button">Купить</a>
      </div>
    </li>`
  );
};

class CatalogItem extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(card) {
    super();
    this.card = card;

    this._addClickHandler = this._addClickHandler.bind(this);
  }

  getTemplate() {
    return createCatalogItemElement(this.card);
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


const createCatalogPaginationElement = () => {
  return `<ul class="catalog__pagination pagination">
    <li class="pagination__item pagination__item--button pagination__item--hide">
      <a href="#">Назад</a>
    </li>
    <li class="pagination__item pagination__item--current">
      <a href="#">1</a>
    </li>
    <li class="pagination__item">
      <a href="#">2</a>
    </li>
    <li class="pagination__item">
      <a href="#">...</a>
    </li>
    <li class="pagination__item">
      <a href="#">7</a>
    </li>
    <li class="pagination__item pagination__item--button">
      <a href="#">Далее</a>
    </li>
  </ul>`;
};

class CatalogPagination extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createCatalogPaginationElement();
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


const createCatalogPopUpAddElement = (card) => {
  const {image, name, identiferNumber, stringAmount, price} = card;
  return `<section class="modal">
    <div class="modal__popup">
      <h2 class="modal__title">Добавить товар в корзину</h2>

      <div class="modal__content">
        <div class="modal__image-container">
          <img src="${image}" width="80" height="202" alt="Изображение товара">
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
  </section>`;
};

class CatalogPopUpAdd extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(card) {
    super();
    this._data = card;

    this._addClickHandler = this._addClickHandler.bind(this);
    this._closeClickHandler = this._closeClickHandler.bind(this);
  }

  getTemplate() {
    return createCatalogPopUpAddElement(this._data);
  }

  _addClickHandler(evt) {
    evt.preventDefault();
    this._callback.addClick();
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



const createCatalogSortElement = (currentSortType, currentOrderType) => {
  return (
    `<div class="catalog__sort-wrapper">
      <span>Сортировать:</span>
      <ul class="catalog__sort sort">
        <li class="sort__item ${currentSortType === _const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].PRICE ? `sort__item--active` : ``}">
          <a
            href="#"
            data-sort-type-category="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].PRICE}">по цене
          </a>
        </li>
        <li class="sort__item ${currentSortType === _const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].POPULARITY ? `sort__item--active` : ``}">
          <a
            href="#"
            data-sort-type-category="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].POPULARITY}">по популярности
          </a>
        </li>
      </ul>
      <div class="catalog__sort-buttons">
        <button
          class="sort-button sort-button--up ${currentOrderType === _const_js__WEBPACK_IMPORTED_MODULE_1__["OrderType"].UP ? `sort-button--active` : ``}"
          type="button"
          data-sort-type-priority="${_const_js__WEBPACK_IMPORTED_MODULE_1__["OrderType"].UP}">
        </button>
        <button
          class="sort-button sort-button--down ${currentOrderType === _const_js__WEBPACK_IMPORTED_MODULE_1__["OrderType"].DOWN ? `sort-button--active` : ``}"
          type="button"
          data-sort-type-priority="${_const_js__WEBPACK_IMPORTED_MODULE_1__["OrderType"].DOWN}">
        </button>
      </div>
    </div>`
  );
};
class CatalogSort extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(currentSortType, currentOrderType) {
    super();
    this._currentSortType = currentSortType;
    this._currentOrderType = currentOrderType;
    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
    this._orderTypeChangeHandler = this._orderTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createCatalogSortElement(this._currentSortType, this._currentOrderType);
  }

  _sortTypeChangeHandler(evt) {
    evt.preventDefault();
    if (evt.target.tagName === `A`) {
      evt.preventDefault();
      this._callback.sortTypeChange(evt.target.dataset.sortTypeCategory);
    }
  }

  _orderTypeChangeHandler(evt) {
    if (evt.target.tagName === `BUTTON`) {
      evt.preventDefault();
      this._callback.orderTypeChange(evt.target.dataset.sortTypePriority);
    }
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }

  setOrderTypeChangeHandler(callback) {
    this._callback.orderTypeChange = callback;
    this.getElement().addEventListener(`click`, this._orderTypeChangeHandler);
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




const createFiltersElement = (currentFilterType, cards) => {
  let filteredGuitars = {};
  let stringAmountAvailableList = [];
  if (currentFilterType.type.length === 0) {
    filteredGuitars = cards
        .filter((item) => Object(_utils_filter_js__WEBPACK_IMPORTED_MODULE_2__["filteredCardsByType"])(item.type, currentFilterType.type));

    stringAmountAvailableList = Array.from(new Set(filteredGuitars
        .map((item) => item.stringAmount)));
  }

  filteredGuitars = currentFilterType.type;
  const keysGuitar = Object.keys(_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"]);
  const keysStrings = Object.keys(_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterTypeS"]);
  let typeGuitarKey = [];
  let typeGuitarValue = [];
  let typeStringsValue = [];

  keysGuitar.filter((key) => (currentFilterType.type.forEach((type) => {
    if (type.includes(_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"][key])) {
      // let arr = [];
      // arr.push(FilterType[key]);
      // typeGuitar[key] = arr;
      return typeGuitarKey.push(key);
    } else {
      return false;
    }
  })));

  keysGuitar.filter((key) => (currentFilterType.type.forEach((type) => {
    if (type.includes(_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"][key])) {
      // let arr = [];
      // arr.push(FilterType[key]);
      // typeGuitar[key] = arr;
      return typeGuitarValue.push(_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"][key]);
    } else {
      return false;
    }
  })));

  keysStrings.filter((key) => (currentFilterType.stringAmount.forEach((type) => {
    if (type.includes(_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterTypeS"][key])) {
      // let arr = [];
      // arr.push(FilterType[key]);
      // typeGuitar[key] = arr;
      return typeStringsValue.push(_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterTypeS"][key]);
    } else {
      return false;
    }
  })));

  console.log(typeStringsValue);
  typeGuitarKey.forEach((item) => {
    stringAmountAvailableList.push(..._const_js__WEBPACK_IMPORTED_MODULE_1__["StringsAmount"][item]);
    return stringAmountAvailableList;
  });
  stringAmountAvailableList = Array.from(new Set(stringAmountAvailableList));

  const isStringsAvailable = (availableList, stringsCount) => {
    return availableList.includes(stringsCount);
  };

  return (`<div class="catalog__filters-column">
  <h2>Фильтр</h2>
  <form class="catalog__filters-form" action="#" method="GET">
      <fieldset>
        <h3>Цена, ₽</h3>
        <div class="catalog__filters-price-wrapper">
          <input
              type="number"
              name="filters-form-price-from"
              id="filters-form-price-from"
              placeholder="1 000"
              value="1000"
              min="0"
              max="1000000"
              >
          <input
              type="number"
              name="filters-form-price-to"
              id="filters-form-price-to"
              placeholder="30 000"
              value="30000"
              min="0"
              max="1000000"
              >
        </div>
      </fieldset>
      <fieldset>
        <h3>Тип гитар</h3>
        <div class="catalog__filters-type-wrapper">
          <div class="catalog__filters-type-content-wrapper">
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-type"
                id="filters-form-type-value-1"
                data-filter-type-guitar="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].ACOUSTIC}"
                ${isStringsAvailable(typeGuitarValue, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].ACOUSTIC) ? `checked` : ``}
                >
            <label for="filters-form-type-value-1">Акустические гитары</label>
          </div>
          <div class="catalog__filters-type-content-wrapper">
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-type"
                id="filters-form-type-value-2"
                data-filter-type-guitar="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].ELECTRO}"
                ${isStringsAvailable(typeGuitarValue, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].ELECTRO) ? `checked` : ``}
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
                ${isStringsAvailable(typeGuitarValue, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].UKULELE) ? `checked` : ``}
                >
            <label for="filters-form-type-value-3">Укулеле</label>
          </div>
        </div>
      </fieldset>
      <fieldset>
  <h3>Количество струн</h3>
  <div class="catalog__filters-amount-wrapper">
    <label>
      <input
          class="visually-hidden"
          type="checkbox"
          name="filters-form-amount"
          id="4"
          data-filter-type-strings="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterTypeS"].FOUR}"
          ${isStringsAvailable(typeStringsValue, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterTypeS"].FOUR) ? `checked` : ``}
          ${isStringsAvailable(stringAmountAvailableList, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterTypeS"].FOUR) ? `` : `disabled`}
          >
      <span>4</span>
    </label>
    <label>
      <input
          class="visually-hidden"
          type="checkbox"
          name="filters-form-amount"
          id="6"
          data-filter-type-strings="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterTypeS"].SIX}"
          ${isStringsAvailable(typeStringsValue, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterTypeS"].SIX) ? `checked` : ``}
          ${isStringsAvailable(stringAmountAvailableList, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterTypeS"].SIX) ? `` : `disabled`}
          >
      <span>6</span>
    </label>
    <label>
      <input
          class="visually-hidden"
          type="checkbox"
          name="filters-form-amount"
          id="7"
          data-filter-type-strings="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterTypeS"].SEVEN}"
          ${isStringsAvailable(typeStringsValue, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterTypeS"].SEVEN) ? `checked` : ``}
          ${isStringsAvailable(stringAmountAvailableList, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterTypeS"].SEVEN) ? `` : `disabled`}
          >
      <span>7</span>
    </label>
    <label>
      <input
          class="visually-hidden"
          type="checkbox"
          name="filters-form-amount"
          id="12"
          data-filter-type-strings="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterTypeS"].TWELVE}"
          ${isStringsAvailable(typeStringsValue, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterTypeS"].TWELVE) ? `checked` : ``}
          ${isStringsAvailable(stringAmountAvailableList, _const_js__WEBPACK_IMPORTED_MODULE_1__["FilterTypeS"].TWELVE) ? `` : `disabled`}
          >
      <span>12</span>
    </label>
  </div>
</fieldset>

    </form></div>`);
};

class Filters extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(currentFilterType, cards) {
    super();
    this._currentFilterType = currentFilterType;
    this._cards = cards;

    this._filterPriceChangeHandler = this._filterPriceChangeHandler.bind(this);
    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
    this._filterStringChangeHandler = this._filterStringChangeHandler.bind(this);

  }

  getTemplate() {
    return createFiltersElement(this._currentFilterType, this._cards);
  }

  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    let optionsTypeGuitarArray = [];

    document.querySelectorAll(`input[type='checkbox']`)
        .forEach((checkbox) => checkbox.checked === true && !checkbox.dataset.filterTypeStrings ? optionsTypeGuitarArray
            .push(checkbox.dataset.filterTypeGuitar) : null);

    this._callback.filterTypeChange(optionsTypeGuitarArray);
  }

  _filterStringChangeHandler(evt) {
    evt.preventDefault();
    let optionsTypeStringArray = [];

    document.querySelectorAll(`input[type='checkbox']`)
        .forEach((checkbox) => checkbox.checked === true && !checkbox.dataset.filterTypeGuitar ? optionsTypeStringArray
            .push(checkbox.dataset.filterTypeStrings) : null);

    this._callback.filterStringChange(optionsTypeStringArray);
  }

  _filterPriceChangeHandler(evt) {
    evt.preventDefault();
    let optionsPriceArray = [];

    document.querySelectorAll(`input[type='number']`)
        .forEach((checkbox) => optionsPriceArray
            .push(checkbox.value));

    this._callback.filterPriceChange(optionsPriceArray);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`change`, this._filterTypeChangeHandler);
  }

  setFilterStringChangeHandler(callback) {
    this._callback.filterStringChange = callback;
    this.getElement().addEventListener(`change`, this._filterStringChangeHandler);
  }

  setFilterPriceChangeHandler(callback) {
    this._callback.filterPriceChange = callback;
    this.getElement().addEventListener(`input`, this._filterPriceChangeHandler);
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



const createSiteMenuTemplate = () => {
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
            <a href="#" data-menu-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["MenuItem"].CARDS}">Каталог</a>
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
            <span class="" data-title="2"></span>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
};

class SiteMenu extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    // console.log(currentMenuType);
    // this._currentMenuType = currentMenuType;
    this._menuClickHandler = this._menuClickHandler.bind(this);
  }

  getTemplate() {
    return createSiteMenuTemplate(this._currentMenuType);
  }

  _menuClickHandler(evt) {
    // if (evt.target.tagName === `SVG`) {
    evt.preventDefault();
    this._callback.menuClick(evt.target.dataset.menuType);
    // }
  }

  setMenuClickHandler(callback) {
    this._callback.menuClick = callback;
    this.getElement().addEventListener(`click`, this._menuClickHandler);
  }

  // setMenuItem(menuItem) {
  //   const item = this.getElement().querySelector(`[value=${menuItem}]`);

  //   if (item !== null) {
  //     item.checked = true;
  //   }
  // }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map