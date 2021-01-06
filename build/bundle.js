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
/*! exports provided: SortType, FilterType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterType", function() { return FilterType; });
const SortType = {
  DEFAULT: `default`,
  PRICE: `price`,
  POPULARITY: `popularity`,
  UP: `up`,
  DOWN: `down`
};

// export const FilterType = {
//   type: [``]
// };

const FilterType = {
  ELECTRO: [`электрогитара`],
  ACOUSTIC: `акустическая гитара`,
  UKULELE: `укулеле`,
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


/***/ }),

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_site_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/site-menu.js */ "./source/js/view/site-menu.js");
/* harmony import */ var _view_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/breadcrumbs.js */ "./source/js/view/breadcrumbs.js");
/* harmony import */ var _presenter_catalog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/catalog.js */ "./source/js/presenter/catalog.js");
/* harmony import */ var _presenter_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presenter/filter.js */ "./source/js/presenter/filter.js");
/* harmony import */ var _model_cards_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/cards.js */ "./source/js/model/cards.js");
/* harmony import */ var _model_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/filter.js */ "./source/js/model/filter.js");
/* harmony import */ var _mock_product_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/product.js */ "./source/js/mock/product.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/render.js */ "./source/js/utils/render.js");


// import FiltersView from "./view/filters.js";








const PRODUCT_COUNT = 10;

const cards = new Array(PRODUCT_COUNT).fill().map(_mock_product_js__WEBPACK_IMPORTED_MODULE_6__["generateProduct"]);

const cardsModel = new _model_cards_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
cardsModel.setCards(cards);

const filterModel = new _model_filter_js__WEBPACK_IMPORTED_MODULE_5__["default"]();

const siteHeaderElement = document.querySelector(`.page-header`);
const siteCatalogElement = document.querySelector(`.catalog`);
const siteCatalogWrapperElement = document.querySelector(`.catalog__content-wrapper`);
const siteFiltersColumnElement = document.querySelector(`.catalog__filters-column`);

// const filtersComponent = new FiltersView(cards);
const catalogPresenter = new _presenter_catalog_js__WEBPACK_IMPORTED_MODULE_2__["default"](siteCatalogWrapperElement, cardsModel, filterModel);
const filterPresenter = new _presenter_filter_js__WEBPACK_IMPORTED_MODULE_3__["default"](siteFiltersColumnElement, filterModel, cardsModel);

Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["render"])(siteHeaderElement, new _view_site_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].AFTERBEGIN);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["render"])(siteCatalogElement, new _view_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_1__["default"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREBEGIN);
// render(siteFiltersColumnElement, filtersComponent, RenderPosition.BEFOREEND);

filterPresenter.init();
catalogPresenter.init();


/***/ }),

/***/ "./source/js/mock/product.js":
/*!***********************************!*\
  !*** ./source/js/mock/product.js ***!
  \***********************************/
/*! exports provided: generateProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateProduct", function() { return generateProduct; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./source/js/utils/common.js");
// import {COLORS} from "../const.js";


const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const generatePrice = () => {
  const prices = [
    `17500`,
    `13000`,
    `1000`,
    `11500`,
    `22000`,
    `91000`
  ];

  const randomIndex = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, prices.length - 1);

  return prices[randomIndex];
};

const generatePopularity = () => {
  const popularity = [
    `17`,
    `13`,
    `9`,
    `11`,
    `22`,
    `91`
  ];

  const randomIndex = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, popularity.length - 1);

  return popularity[randomIndex];
};

const generateStringAmount = () => {
  const stringAmount = [
    `4`,
    `6`,
    `7`,
    `12`
  ];

  const randomIndex = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, stringAmount.length - 1);

  return stringAmount[randomIndex];
};

const generateType = () => {
  const type = [
    `электрогитара`,
    `акустическая гитара`,
    `укулеле`
  ];

  const randomIndex = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, type.length - 1);

  return type[randomIndex];
};

// const generateDate = () => {
//   const isDate = Boolean(getRandomInteger(0, 1));

//   if (!isDate) {
//     return null;
//   }

//   const maxDaysGap = 7;
//   const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
//   const currentDate = new Date();

//   currentDate.setHours(23, 59, 59, 999);

//   currentDate.setDate(currentDate.getDate() + daysGap);

//   return new Date(currentDate);
// };

// const generateRepeating = () => {
//   return {
//     mo: false,
//     tu: false,
//     we: Boolean(getRandomInteger(0, 1)),
//     th: false,
//     fr: Boolean(getRandomInteger(0, 1)),
//     sa: false,
//     su: false
//   };
// };

// const getRandomColor = () => {
//   const randomIndex = getRandomInteger(0, COLORS.length - 1);

//   return COLORS[randomIndex];
// };

const generateProduct = () => {
  return {
    id: generateId(),
    identiferNumber: `SO757575`,
    name: `Честер Bass`,
    type: generateType(),
    reviewAmount: generatePopularity(),
    stringAmount: generateStringAmount(),
    price: generatePrice(),
    image: `img/gitar-electric_1.png`
    // image: `http://picsum.photos/248/152?r=${Math.random()}`
  };
};


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
    this._activeFilter = [];
  }

  setFilter(filter) {
    this._activeFilter = filter;
    this._notify(filter);
  }

  getFilter() {
    return this._activeFilter;
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
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");



class Card {
  constructor(catalogListContainer) {
    this.catalogListContainer = catalogListContainer;

    this.catalogItemComponent = null;
  }

  init(catalogCard) {
    this.catalogCard = catalogCard;

    this.catalogItemComponent = new _view_catalog_item_js__WEBPACK_IMPORTED_MODULE_0__["default"](catalogCard);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this.catalogListContainer, this.catalogItemComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].AFTERBEGIN);
  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(this.catalogItemComponent);
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
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");
/* harmony import */ var _utils_card_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/card.js */ "./source/js/utils/card.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");










// import {filter} from "../utils/filter.js";

const CARD_COUNT_PER_STEP = 9;

class Board {
  constructor(catalogContainer, cardsModel, filterModel) {
    this._cardsModel = cardsModel;
    this._filterModel = filterModel;
    this._catalogContainer = catalogContainer;
    this._renderedCardsCount = CARD_COUNT_PER_STEP;
    this._currentSortType = _const_js__WEBPACK_IMPORTED_MODULE_7__["SortType"].DEFAULT;
    this._cardPresenter = {};

    this._catalogComponent = new _view_catalog_board_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

    this._cataloglistComponent = new _view_catalog_list_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._catalogPaginationComponent = new _view_catalog_pagination_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);

    this._cardsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  init() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(this._catalogContainer, this._catalogComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(this._catalogComponent, this._cataloglistComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);

    this._renderBoard();
  }

  _getCards() {
    const filterType = this._filterModel.getFilter();
    const cards = this._cardsModel.getCards();

    const fiteredCards = (type, card) => {
      const cardType = card.type;
      return type.includes(cardType);
    };

    let filtredTasks = null;

    if (filterType.length !== 0) {
      filtredTasks = cards.filter((card) => fiteredCards(filterType, card));
    } else {
      filtredTasks = cards;
    }

    switch (this._currentSortType) {
      case _const_js__WEBPACK_IMPORTED_MODULE_7__["SortType"].PRICE:
        return filtredTasks.sort(_utils_card_js__WEBPACK_IMPORTED_MODULE_6__["sortPriceUp"]);
      case _const_js__WEBPACK_IMPORTED_MODULE_7__["SortType"].POPULARITY:
        return filtredTasks.sort(_utils_card_js__WEBPACK_IMPORTED_MODULE_6__["sortPriceDown"]);
    }

    // switch (this._currentSortType) {
    //   case SortType.PRICE:
    //     return this._cardsModel.getCards().slice().sort(sortPriceUp);
    //   case SortType.POPULARITY:
    //     return this._cardsModel.getCards().slice().sort(sortPriceDown);
    // }
    console.log(filtredTasks);
    return filtredTasks;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._currentSortType = sortType;

    this._clearBoard({resetRenderedCardsCount: true});
    this._renderBoard();
  }

  _handleModelEvent() {
    this._clearBoard({resetRenderedCardsCount: true});
    this._renderBoard();
  }

  _renderSort() {
    if (this._catalogSortComponent !== null) {
      this._catalogSortComponent = null;
    }

    this._catalogSortComponent = new _view_catalog_sort_js__WEBPACK_IMPORTED_MODULE_1__["default"](this._currentSortType);
    this._catalogSortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(this._catalogComponent, this._catalogSortComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].AFTERBEGIN);
  }

  _renderCard(card) {
    const cardPresenter = new _presenter_card_js__WEBPACK_IMPORTED_MODULE_4__["default"](this._cataloglistComponent);
    cardPresenter.init(card);
    this._cardPresenter[card.id] = cardPresenter;
  }

  _renderCards(cards) {
    cards.forEach((card) => this._renderCard(card));
  }

  _renderPagination() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(this._catalogComponent, this._catalogPaginationComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
  }

  _clearBoard({resetRenderedCardsCount = false, resetSortType = false} = {}) {
    const cardCount = this._getCards().length;

    Object
        .values(this._cardPresenter)
        .forEach((presenter) => presenter.destroy());
    this._cardPresenter = {};

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["remove"])(this._catalogSortComponent);

    if (resetRenderedCardsCount) {
      this._renderedCardsCount = CARD_COUNT_PER_STEP;
    } else {
      // На случай, если перерисовка доски вызвана
      // уменьшением количества задач (например, удаление или перенос в архив)
      // нужно скорректировать число показанных задач
      this._renderedCardsCount = Math.min(cardCount, this._renderedCardsCount);
    }

    if (resetSortType) {
      this._currentSortType = _const_js__WEBPACK_IMPORTED_MODULE_7__["SortType"].DEFAULT;
    }
  }

  _renderBoard() {
    const cards = this._getCards();
    const cardCount = cards.length;

    // if (cardCount === 0) {
    //   this._renderNoCards();
    //   return;
    // }

    this._renderSort();

    // Теперь, когда _renderBoard рендерит доску не только на старте,
    // но и по ходу работы приложения, нужно заменить
    // константу TASK_COUNT_PER_STEP на свойство _renderedTaskCount,
    // чтобы в случае перерисовки сохранить N-показанных карточек
    this._renderCards(cards.slice(0, Math.min(cardCount, this._renderedCardsCount)));

    // if (cardCount > this._renderedCardsCount) {
    //   this._renderPagination();
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
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");


// import {filter} from "../utils/filter.js";


class Filter {
  constructor(filterContainer, filterModel, cardsModel) {
    this._filterContainer = filterContainer;
    this._filterModel = filterModel;
    this._cardsModel = cardsModel;
    this._currentFilter = null;

    this._filterComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);

    this._cardsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  init() {
    this._currentFilter = this._filterModel.getFilter();

    const filters = this._getFilters();
    const prevFilterComponent = this._filterComponent;

    this._filterComponent = new _view_filters_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._currentFilter);
    // this._filterComponent = new FilterView(filters, this._currentFilter);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);

    if (prevFilterComponent === null) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._filterContainer, this._filterComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
      return;
    }

    // replace(this._filterComponent, prevFilterComponent);
    // remove(prevFilterComponent);
  }

  _handleModelEvent() {
    this.init();
  }

  _handleFilterTypeChange(filterType) {
    console.log(filterType);
    if (this._currentFilter === filterType) {
      return;
    }

    this._filterModel.setFilter(filterType);
  }

  _getFilters() {
    // const cards = this._cardsModel.getCards();

    return [
      {
        type: _const_js__WEBPACK_IMPORTED_MODULE_2__["FilterType"].ALL
      },
      {
        type: _const_js__WEBPACK_IMPORTED_MODULE_2__["FilterType"].ELECTRO,
      },
      {
        type: _const_js__WEBPACK_IMPORTED_MODULE_2__["FilterType"].ACOUSTIC,
      },
      {
        type: _const_js__WEBPACK_IMPORTED_MODULE_2__["FilterType"].UKULELE
      },
    // {
    //   type: FilterType.REPEATING,
    //   name: `Repeating`,
    //   count: filter[FilterType.REPEATING](cards).length
    // },
    // {
    //   type: FilterType.ARCHIVE,
    //   name: `Archive`,
    //   count: filter[FilterType.ARCHIVE](cards).length
    // }
    ];
  }
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
const sortPriceDown = (pointA, pointB) => Number(pointA.price) > Number(pointB.price) ? 1 : -1;
const sortPriceUp = (pointA, pointB) => Number(pointA.price) > Number(pointB.price) ? -1 : 1;

const sortPopularityDown = (pointA, pointB) => Number(pointA.reviewAmount) > Number(pointB.reviewAmount) ? 1 : -1;
const sortPopularityUp = (pointA, pointB) => Number(pointA.reviewAmount) > Number(pointB.reviewAmount) ? -1 : 1;


/***/ }),

/***/ "./source/js/utils/common.js":
/*!***********************************!*\
  !*** ./source/js/utils/common.js ***!
  \***********************************/
/*! exports provided: getRandomInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
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
  const {image, reviewAmount, name, price} = card;
  return (
    `<li class="list__item">
      <img src="${image}" width="80" height="202" alt="Изображение товара">
      <div class="list__rating rating">
        <div class="list__stars rating__stars">
          <span style="width: 85%;"></span>
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
  }

  getTemplate() {
    return createCatalogItemElement(this.card);
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



const createCatalogSortElement = (currentSortType) => {
  return (
    `<div class="catalog__sort-wrapper">
      <span>Сортировать:</span>
      <ul class="catalog__sort sort">
        <li class="sort__item ${currentSortType === _const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].PRICE ? `sort__item--active` : ``}">
          <a
            href="#"
            data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].PRICE}">по цене
          </a>
        </li>
        <li class="sort__item ${currentSortType === _const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].POPULARITY ? `sort__item--active` : ``}">
          <a
            href="#"
            data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].POPULARITY}">по популярности
          </a>
        </li>
      </ul>
      <div class="catalog__sort-buttons">
        <button
          class="sort-button sort-button--up ${currentSortType === _const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].UP ? `sort-button--active` : ``}"
          type="button"
          data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].UP}">
        </button>
        <button
          class="sort-button sort-button--down ${currentSortType === _const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DOWN ? `sort-button--active` : ``}"
          type="button"
          data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DOWN}">
        </button>
      </div>
    </div>`
  );
};
class CatalogSort extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(currentSortType) {
    super();

    this._currentSortType = currentSortType;
    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createCatalogSortElement(this._currentSortType);
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName === `A`) {
      evt.preventDefault();
      this._callback.sortTypeChange(evt.target.dataset.sortType);
    }
    if (evt.target.tagName === `BUTTON`) {
      evt.preventDefault();
      this._callback.sortTypeChange(evt.target.dataset.sortType);
    }

  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
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



const createFiltersElement = (currentFilterType) => {
  console.log(JSON.stringify(currentFilterType));
  console.log(JSON.stringify(_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].ELECTRO));
  console.log(JSON.stringify(currentFilterType) === JSON.stringify(_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].ELECTRO));

  return `<form class="catalog__filters-form" action="#" method="GET">
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
                data-filter-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].ACOUSTIC}"
                >
            <label for="filters-form-type-value-1">Акустические гитары</label>
          </div>
          <div class="catalog__filters-type-content-wrapper">
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-type"
                id="filters-form-type-value-2"
                data-filter-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].ELECTRO}"
                >
            <label for="filters-form-type-value-2">Электрогитары</label>
          </div>
          <div class="catalog__filters-type-content-wrapper">
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-type"
                id="filters-form-type-value-3"
                data-filter-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].UKULELE}"
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
                data-filter-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].FOUR}"
                >
            <span>4</span>
          </label>
          <label>
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-amount"
                id="6"
                data-filter-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].SIX}"
                >
            <span>6</span>
          </label>
          <label>
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-amount"
                id="7"
                data-filter-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].SEVEN}"
                >
            <span>7</span>
          </label>
          <label>
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-amount"
                id="12"
                data-filter-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].TWELVE}"
                ${JSON.stringify(currentFilterType) === JSON.stringify(_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].ELECTRO) ? `disabled` : ``}
                >
            <span>12</span>
          </label>
        </div>
      </fieldset>
      <button type="submit" disabled="">показать</button>
    </form>`;
};

class Filters extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(currentFilterType) {
    super();
    // this.filters = filters;
    this.currentFilterType = currentFilterType;
    console.log(currentFilterType);

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createFiltersElement(this.currentFilterType);
  }

  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    let options = {};
    let optionsTypeArray = [];
    document.querySelectorAll(`input[type='checkbox']`).forEach((chbx) => chbx.checked === true ? optionsTypeArray.push(chbx.dataset.filterType) : null);
    options.type = optionsTypeArray;
    console.log(optionsTypeArray);

    this._callback.filterTypeChange(optionsTypeArray);
    // this._callback.filterTypeChange(evt.target.dataset.filterType);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`change`, this._filterTypeChangeHandler);
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
            <a href="#">Каталог</a>
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
            <a href="basket.html">
              <span class="visually-hidden">Корзина</span>
              <svg width="16" height="18">
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
  getTemplate() {
    return createSiteMenuTemplate();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map