/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sass/main.scss */ "./assets/sass/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");



__webpack_require__(/*! ./index.html */ "./index.html");

/***/ }),

/***/ "./js/const.js":
/*!*********************!*\
  !*** ./js/const.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortByCategoryType": () => (/* binding */ SortByCategoryType),
/* harmony export */   "SortByPriorityType": () => (/* binding */ SortByPriorityType),
/* harmony export */   "FilterType": () => (/* binding */ FilterType),
/* harmony export */   "FilterStringAmount": () => (/* binding */ FilterStringAmount),
/* harmony export */   "StringsAmountByType": () => (/* binding */ StringsAmountByType),
/* harmony export */   "MenuItem": () => (/* binding */ MenuItem),
/* harmony export */   "BreadcrumbsItem": () => (/* binding */ BreadcrumbsItem),
/* harmony export */   "BreadcrumbsTitle": () => (/* binding */ BreadcrumbsTitle),
/* harmony export */   "UserAction": () => (/* binding */ UserAction),
/* harmony export */   "UpdateType": () => (/* binding */ UpdateType),
/* harmony export */   "DiscountType": () => (/* binding */ DiscountType)
/* harmony export */ });
var SortByCategoryType = {
  DEFAULT: "default",
  PRICE: "price",
  POPULARITY: "popularity"
};
var SortByPriorityType = {
  DEFAULT: "default",
  UP: "up",
  DOWN: "down"
};
var FilterType = {
  ELECTRIC: "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430",
  ACOUSTIC: "\u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430",
  UKULELE: "\u0443\u043A\u0443\u043B\u0435\u043B\u0435"
};
var FilterStringAmount = {
  FOUR: 4,
  SIX: 6,
  SEVEN: 7,
  TWELVE: 12
};
var StringsAmountByType = {
  ELECTRIC: [4, 6, 7],
  ACOUSTIC: [6, 7, 12],
  UKULELE: [4]
};
var MenuItem = {
  CATALOG: "CATALOG",
  BASKET: "BASKET"
};
var BreadcrumbsItem = {
  CATALOG: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
  BASKET: "\u041E\u0444\u043E\u0440\u043C\u043B\u044F\u0435\u043C"
};
var BreadcrumbsTitle = {
  CATALOG: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0433\u0438\u0442\u0430\u0440",
  BASKET: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"
};
var UserAction = {
  UPDATE_GOOD: "UPDATE_GOOD",
  DELETE_GOOD: "DELETE_GOOD"
};
var UpdateType = {
  INIT: "INIT"
};
var DiscountType = {
  DEFAULT: "DEFAULT",
  GITARAHIT: "GITARAHIT",
  SUPERGITARA: "SUPERGITARA",
  GITARA2020: "GITARA2020"
};

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sass/main.scss */ "./assets/sass/main.scss");
/* harmony import */ var _presenter_site_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presenter/site-menu.js */ "./js/presenter/site-menu.js");
/* harmony import */ var _presenter_catalog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/catalog.js */ "./js/presenter/catalog.js");
/* harmony import */ var _presenter_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presenter/breadcrumbs.js */ "./js/presenter/breadcrumbs.js");
/* harmony import */ var _model_goods_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/goods.js */ "./js/model/goods.js");
/* harmony import */ var _model_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/filter.js */ "./js/model/filter.js");
/* harmony import */ var _model_site_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/site-menu.js */ "./js/model/site-menu.js");
/* harmony import */ var _model_basket_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/basket.js */ "./js/model/basket.js");
/* harmony import */ var _mock_goods_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock/goods.json */ "./js/mock/goods.json");









var goodsModel = new _model_goods_js__WEBPACK_IMPORTED_MODULE_4__.default();
goodsModel.setGoods(_mock_goods_json__WEBPACK_IMPORTED_MODULE_8__);
var filterModel = new _model_filter_js__WEBPACK_IMPORTED_MODULE_5__.default();
var siteMenuModel = new _model_site_menu_js__WEBPACK_IMPORTED_MODULE_6__.default();
var basketModel = new _model_basket_js__WEBPACK_IMPORTED_MODULE_7__.default();
var siteHeaderElement = document.querySelector(".page-header");
var siteMainElement = document.querySelector(".page-main");
var siteMainContainerElement = siteMainElement.querySelector(".container");
var siteMenuPresenter = new _presenter_site_menu_js__WEBPACK_IMPORTED_MODULE_1__.default(siteHeaderElement, siteMenuModel, basketModel);
var breadcrumbsPresenter = new _presenter_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_3__.default(siteMainContainerElement, siteMenuModel);
var catalogPresenter = new _presenter_catalog_js__WEBPACK_IMPORTED_MODULE_2__.default(siteMainContainerElement, goodsModel, filterModel, siteMenuModel, basketModel);
siteMenuPresenter.init();
breadcrumbsPresenter.init();
catalogPresenter.init();

/***/ }),

/***/ "./js/model/basket.js":
/*!****************************!*\
  !*** ./js/model/basket.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Basket)
/* harmony export */ });
/* harmony import */ var _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observer.js */ "./js/utils/observer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Basket = /*#__PURE__*/function (_Observer) {
  _inherits(Basket, _Observer);

  var _super = _createSuper(Basket);

  function Basket() {
    var _this;

    _classCallCheck(this, Basket);

    _this = _super.call(this);
    _this._goodsInBasket = [];
    return _this;
  }

  _createClass(Basket, [{
    key: "setBasket",
    value: function setBasket(updateType, update) {
      this._goodsInBasket = update;

      this._notify(updateType);
    }
  }, {
    key: "getBasket",
    value: function getBasket() {
      return this._goodsInBasket;
    }
  }, {
    key: "updateGood",
    value: function updateGood(updateType, update) {
      var index = this._goodsInBasket.findIndex(function (good) {
        return good.identiferNumber === update.identiferNumber;
      });

      if (index === -1) {
        throw new Error("Can't update unexisting task");
      }

      this._goodsInBasket = [].concat(_toConsumableArray(this._goodsInBasket.slice(0, index)), [update], _toConsumableArray(this._goodsInBasket.slice(index + 1)));

      this._notify(updateType, update);
    }
  }, {
    key: "addGood",
    value: function addGood(updateType, update) {
      this._goodsInBasket = [update].concat(_toConsumableArray(this._goodsInBasket));

      this._notify(updateType, update);
    }
  }, {
    key: "deleteGood",
    value: function deleteGood(updateType, update) {
      var index = this._goodsInBasket.findIndex(function (good) {
        return good.identiferNumber === update.identiferNumber;
      });

      if (index === -1) {
        throw new Error("Can't delete unexisting task");
      }

      this._goodsInBasket = [].concat(_toConsumableArray(this._goodsInBasket.slice(0, index)), _toConsumableArray(this._goodsInBasket.slice(index + 1)));

      this._notify(updateType);
    }
  }]);

  return Basket;
}(_utils_observer_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/model/filter.js":
/*!****************************!*\
  !*** ./js/model/filter.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Filter)
/* harmony export */ });
/* harmony import */ var _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observer.js */ "./js/utils/observer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Filter = /*#__PURE__*/function (_Observer) {
  _inherits(Filter, _Observer);

  var _super = _createSuper(Filter);

  function Filter() {
    var _this;

    _classCallCheck(this, Filter);

    _this = _super.call(this);
    _this._activeFilter = {
      type: [],
      stringAmount: [],
      price: []
    };
    return _this;
  }

  _createClass(Filter, [{
    key: "setFilter",
    value: function setFilter(filter, type) {
      this._activeFilter[type] = filter;

      this._notify(filter);
    }
  }, {
    key: "setFilterByInit",
    value: function setFilterByInit(filter, type) {
      this._activeFilter[type] = filter;
    }
  }, {
    key: "getFilter",
    value: function getFilter() {
      return this._activeFilter;
    }
  }]);

  return Filter;
}(_utils_observer_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/model/goods.js":
/*!***************************!*\
  !*** ./js/model/goods.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Goods)
/* harmony export */ });
/* harmony import */ var _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observer.js */ "./js/utils/observer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Goods = /*#__PURE__*/function (_Observer) {
  _inherits(Goods, _Observer);

  var _super = _createSuper(Goods);

  function Goods() {
    var _this;

    _classCallCheck(this, Goods);

    _this = _super.call(this);
    _this._goods = [];
    _this._filteredGoods = [];
    return _this;
  }

  _createClass(Goods, [{
    key: "setGoods",
    value: function setGoods(goods) {
      this._goods = goods.slice();
    }
  }, {
    key: "getGoods",
    value: function getGoods() {
      return this._goods;
    }
  }, {
    key: "setFilteredGoods",
    value: function setFilteredGoods(filteredGoods) {
      this._filteredGoods = filteredGoods.slice();
    }
  }, {
    key: "getFilteredGoods",
    value: function getFilteredGoods() {
      return this._filteredGoods;
    }
  }]);

  return Goods;
}(_utils_observer_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/model/site-menu.js":
/*!*******************************!*\
  !*** ./js/model/site-menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteMenu)
/* harmony export */ });
/* harmony import */ var _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observer.js */ "./js/utils/observer.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./js/const.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SiteMenu = /*#__PURE__*/function (_Observer) {
  _inherits(SiteMenu, _Observer);

  var _super = _createSuper(SiteMenu);

  function SiteMenu() {
    var _this;

    _classCallCheck(this, SiteMenu);

    _this = _super.call(this);
    _this._activeItem = _const_js__WEBPACK_IMPORTED_MODULE_1__.MenuItem.CATALOG;
    return _this;
  }

  _createClass(SiteMenu, [{
    key: "setMenuItem",
    value: function setMenuItem(itemType) {
      this._activeItem = itemType;

      this._notify(itemType);
    }
  }, {
    key: "getMenuItem",
    value: function getMenuItem() {
      return this._activeItem;
    }
  }]);

  return SiteMenu;
}(_utils_observer_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/presenter/basket-good.js":
/*!*************************************!*\
  !*** ./js/presenter/basket-good.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BasketGoodElement)
/* harmony export */ });
/* harmony import */ var _view_basket_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/basket-item.js */ "./js/view/basket-item.js");
/* harmony import */ var _view_basket_popUp_delete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/basket-popUp-delete.js */ "./js/view/basket-popUp-delete.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./js/utils/render.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const.js */ "./js/const.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var BasketGoodElement = /*#__PURE__*/function () {
  function BasketGoodElement(basketContainer, basketModel, changeData) {
    _classCallCheck(this, BasketGoodElement);

    this._basketContainer = basketContainer;
    this._basketModel = basketModel;
    this._changeData = changeData;
    this._basketPopUpContainer = document.querySelector("body");
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

  _createClass(BasketGoodElement, [{
    key: "init",
    value: function init(basketCard) {
      this._basketCard = basketCard;
      this._basketItemComponent = new _view_basket_item_js__WEBPACK_IMPORTED_MODULE_0__.default(this._basketCard);

      var basketListComponent = this._basketContainer.querySelector(".product__list");

      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)(basketListComponent, this._basketItemComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);

      this._basketItemComponent.setQuantityIncHandle(this._handleQuantityIncClick);

      this._basketItemComponent.setQuantityDecHandle(this._handleQuantityDecClick);

      this._basketItemComponent.setProductQuantityChangeHandle(this._handleProductQuantityChange);

      this._basketItemComponent.setDeleteClickHandler(this._handleDeleteClick);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(this._basketItemComponent);
    }
  }, {
    key: "_handleQuantityIncClick",
    value: function _handleQuantityIncClick(update) {
      this._changeData(_const_js__WEBPACK_IMPORTED_MODULE_3__.UserAction.UPDATE_GOOD, _const_js__WEBPACK_IMPORTED_MODULE_3__.UpdateType.INIT, Object.assign({}, this._basketCard, {
        count: update
      }));
    }
  }, {
    key: "_handleQuantityDecClick",
    value: function _handleQuantityDecClick(update) {
      if (update < 1) {
        this._handleDeleteClick();

        return;
      }

      this._changeData(_const_js__WEBPACK_IMPORTED_MODULE_3__.UserAction.UPDATE_GOOD, _const_js__WEBPACK_IMPORTED_MODULE_3__.UpdateType.INIT, Object.assign({}, this._basketCard, {
        count: update
      }));
    }
  }, {
    key: "_handleProductQuantityChange",
    value: function _handleProductQuantityChange(update) {
      if (update === 0) {
        this._handleDeleteClick();

        return;
      }

      this._changeData(_const_js__WEBPACK_IMPORTED_MODULE_3__.UserAction.UPDATE_GOOD, _const_js__WEBPACK_IMPORTED_MODULE_3__.UpdateType.INIT, Object.assign({}, this._basketCard, {
        count: update
      }));
    }
  }, {
    key: "_handleDeleteClick",
    value: function _handleDeleteClick() {
      this._basketPopUpDeleteComponent = new _view_basket_popUp_delete_js__WEBPACK_IMPORTED_MODULE_1__.default(this._basketCard);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)(this._basketPopUpContainer, this._basketPopUpDeleteComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.AFTERBEGIN);
      document.addEventListener("keydown", this._escKeyDownHandler);
      document.addEventListener("click", this._overlayClickHandler);

      this._basketPopUpDeleteComponent.setCloseClickHandler(this._handleCloseClick);

      this._basketPopUpDeleteComponent.setDeleteClickHandler(this._handleDeletePopUpClick);

      this._basketPopUpDeleteComponent.setToShoppingClickHandler(this._handleToShoppingPopUpClick);
    }
  }, {
    key: "_handleDeletePopUpClick",
    value: function _handleDeletePopUpClick() {
      this._changeData(_const_js__WEBPACK_IMPORTED_MODULE_3__.UserAction.DELETE_GOOD, _const_js__WEBPACK_IMPORTED_MODULE_3__.UpdateType.INIT, Object.assign({}, this._basketCard));

      this._removeBasketPopUpDeleteComponent();
    }
  }, {
    key: "_removeBasketPopUpDeleteComponent",
    value: function _removeBasketPopUpDeleteComponent() {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(this._basketPopUpDeleteComponent);
      document.removeEventListener("keydown", this._escKeyDownHandler);
      document.removeEventListener("keydown", this._overlayClickHandler);
    }
  }, {
    key: "_escKeyDownHandler",
    value: function _escKeyDownHandler(evt) {
      if (evt.key === "Escape" || evt.key === "Esc") {
        evt.preventDefault();

        if (this._basketPopUpDeleteComponent !== null) {
          this._removeBasketPopUpDeleteComponent();
        }
      }
    }
  }, {
    key: "_overlayClickHandler",
    value: function _overlayClickHandler(evt) {
      if (evt.target.classList.contains("overlay")) {
        evt.preventDefault();

        if (this._basketPopUpDeleteComponent !== null) {
          this._removeBasketPopUpDeleteComponent();
        }
      }
    }
  }, {
    key: "_handleCloseClick",
    value: function _handleCloseClick() {
      if (this._basketPopUpDeleteComponent !== null) {
        this._removeBasketPopUpDeleteComponent();
      }
    }
  }, {
    key: "_handleToShoppingPopUpClick",
    value: function _handleToShoppingPopUpClick() {
      this._removeBasketPopUpDeleteComponent();
    }
  }]);

  return BasketGoodElement;
}();



/***/ }),

/***/ "./js/presenter/basket.js":
/*!********************************!*\
  !*** ./js/presenter/basket.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Basket)
/* harmony export */ });
/* harmony import */ var _view_basket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/basket.js */ "./js/view/basket.js");
/* harmony import */ var _presenter_basket_good_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presenter/basket-good.js */ "./js/presenter/basket-good.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./js/utils/render.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const.js */ "./js/const.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Basket = /*#__PURE__*/function () {
  function Basket(basketContainer, basketModel) {
    _classCallCheck(this, Basket);

    this._basketContainer = basketContainer;
    this._basketModel = basketModel;
    this._currentDiscountType = _const_js__WEBPACK_IMPORTED_MODULE_3__.DiscountType.DEFAULT;
    this._isAvailable = true;
    this._currentFilter = null;
    this._goodPresenter = {};
    this._basketComponent = null;
    this._handleDiscountClick = this._handleDiscountClick.bind(this);
    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
  }

  _createClass(Basket, [{
    key: "init",
    value: function init() {
      this._basketComponent = new _view_basket_js__WEBPACK_IMPORTED_MODULE_0__.default(this._basketModel.getBasket(), this._currentDiscountType, this._isAvailable);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)(this._basketContainer, this._basketComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);

      this._renderBasket();

      this._basketComponent.setDiscountClickHandler(this._handleDiscountClick);

      this._basketModel.addObserver(this._handleModelEvent);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(this._basketComponent);
      this._basketComponent = null;

      this._basketModel.removeObserver(this._handleModelEvent);
    }
  }, {
    key: "_handleDiscountClick",
    value: function _handleDiscountClick(discountType) {
      if (this._currentDiscountType === discountType) {
        return;
      }

      if (!Object.values(_const_js__WEBPACK_IMPORTED_MODULE_3__.DiscountType).includes(discountType)) {
        this._isAvailable = false;
      } else {
        this._isAvailable = true;
      }

      this._currentDiscountType = discountType;
      this.destroy();
      this.init();
    } // _handleModelEvent() {
    //   this.init();
    // }

  }, {
    key: "_handleViewAction",
    value: function _handleViewAction(actionType, updateType, update) {
      switch (actionType) {
        case _const_js__WEBPACK_IMPORTED_MODULE_3__.UserAction.UPDATE_GOOD:
          this._basketModel.updateGood(updateType, update);

          break;

        case _const_js__WEBPACK_IMPORTED_MODULE_3__.UserAction.DELETE_GOOD:
          this._basketModel.deleteGood(updateType, update);

          break;
      }
    }
  }, {
    key: "_handleModelEvent",
    value: function _handleModelEvent(updateType) {
      switch (updateType) {
        case _const_js__WEBPACK_IMPORTED_MODULE_3__.UpdateType.INIT:
          this.destroy();
          this.init();
          break;
      }
    }
  }, {
    key: "_renderGood",
    value: function _renderGood(good) {
      var goodPresenter = new _presenter_basket_good_js__WEBPACK_IMPORTED_MODULE_1__.default(this._basketContainer, this._basketModel, this._handleViewAction);
      goodPresenter.init(good);
      this._goodPresenter[good.id] = goodPresenter;
    }
  }, {
    key: "_renderGoods",
    value: function _renderGoods(goods) {
      var _this = this;

      goods.forEach(function (good) {
        return _this._renderGood(good);
      });
    }
  }, {
    key: "_renderBasket",
    value: function _renderBasket() {
      var goods = this._basketModel.getBasket();

      this._renderGoods(goods);
    }
  }]);

  return Basket;
}();



/***/ }),

/***/ "./js/presenter/breadcrumbs.js":
/*!*************************************!*\
  !*** ./js/presenter/breadcrumbs.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Breadcrumbs)
/* harmony export */ });
/* harmony import */ var _view_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/breadcrumbs.js */ "./js/view/breadcrumbs.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./js/utils/render.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Breadcrumbs = /*#__PURE__*/function () {
  function Breadcrumbs(breadcrumbsContainer, siteMenuModel) {
    _classCallCheck(this, Breadcrumbs);

    this._breadcrumbsContainer = breadcrumbsContainer;
    this._siteMenuModel = siteMenuModel;
    this._breadcrumbsComponent = null;
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleSiteMenuChange = this._handleSiteMenuChange.bind(this);
  }

  _createClass(Breadcrumbs, [{
    key: "init",
    value: function init() {
      this._breadcrumbsComponent = new _view_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_0__.default(this._siteMenuModel.getMenuItem());
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(this._breadcrumbsContainer, this._breadcrumbsComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.AFTERBEGIN);

      this._breadcrumbsComponent.setBreadcrumbsClickHandler(this._handleSiteMenuChange);

      this._siteMenuModel.addObserver(this._handleModelEvent);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.remove)(this._breadcrumbsComponent);
      this._breadcrumbsComponent = null;

      this._siteMenuModel.removeObserver(this._handleModelEvent);
    }
  }, {
    key: "_handleModelEvent",
    value: function _handleModelEvent() {
      this.destroy();
      this.init();
    }
  }, {
    key: "_handleSiteMenuChange",
    value: function _handleSiteMenuChange(menuItem) {
      this._currentMenuItem = this._siteMenuModel.getMenuItem();

      if (this._currentMenuItem === menuItem || menuItem === null) {
        return;
      }

      this._siteMenuModel.setMenuItem(menuItem);
    }
  }]);

  return Breadcrumbs;
}();



/***/ }),

/***/ "./js/presenter/catalog-good.js":
/*!**************************************!*\
  !*** ./js/presenter/catalog-good.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogGood)
/* harmony export */ });
/* harmony import */ var _view_catalog_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/catalog-item.js */ "./js/view/catalog-item.js");
/* harmony import */ var _view_catalog_popUp_add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/catalog-popUp-add.js */ "./js/view/catalog-popUp-add.js");
/* harmony import */ var _view_catalog_popUp_success_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/catalog-popUp-success.js */ "./js/view/catalog-popUp-success.js");
/* harmony import */ var _view_site_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/site-menu.js */ "./js/view/site-menu.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/render.js */ "./js/utils/render.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../const.js */ "./js/const.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var CatalogGood = /*#__PURE__*/function () {
  function CatalogGood(siteMenuModel, basketModel, changeData) {
    _classCallCheck(this, CatalogGood);

    this._changeData = changeData;
    this._catalogPopUpContainer = document.querySelector("body");
    this._siteMenuModel = siteMenuModel;
    this._basketModel = basketModel;
    this._catalogItemComponent = null;
    this._catalogPopUpAddComponent = null;
    this._catalogPopUpSuccessComponent = null;
    this._siteMenuComponent = new _view_site_menu_js__WEBPACK_IMPORTED_MODULE_3__.default();
    this._handleAddToBasketClick = this._handleAddToBasketClick.bind(this);
    this._handleAddToBasketPopUpClick = this._handleAddToBasketPopUpClick.bind(this);
    this._handleAddToBasketPopUpSuccessClick = this._handleAddToBasketPopUpSuccessClick.bind(this);
    this._handleToShoppingPopUpClick = this._handleToShoppingPopUpClick.bind(this);
    this._handleCloseClick = this._handleCloseClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
    this._overlayClickHandler = this._overlayClickHandler.bind(this);
  }

  _createClass(CatalogGood, [{
    key: "init",
    value: function init(catalogListContainer, catalogCard) {
      this._catalogCard = catalogCard;
      this._catalogItemComponent = new _view_catalog_item_js__WEBPACK_IMPORTED_MODULE_0__.default(catalogCard);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.render)(catalogListContainer, this._catalogItemComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_4__.RenderPosition.BEFOREEND);

      this._catalogItemComponent.setAddClickHandler(this._handleAddToBasketClick);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.remove)(this._catalogItemComponent);
    }
  }, {
    key: "_removePopUpAddComponent",
    value: function _removePopUpAddComponent() {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.remove)(this._catalogPopUpAddComponent);
      document.removeEventListener("keydown", this._escKeyDownHandler);
      document.removeEventListener("keydown", this._overlayClickHandler);
    }
  }, {
    key: "_removePopUpSuccessComponent",
    value: function _removePopUpSuccessComponent() {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.remove)(this._catalogPopUpSuccessComponent);
      document.removeEventListener("keydown", this._escKeyDownHandler);
      document.removeEventListener("keydown", this._overlayClickHandler);
    }
  }, {
    key: "_escKeyDownHandler",
    value: function _escKeyDownHandler(evt) {
      if (evt.key === "Escape" || evt.key === "Esc") {
        evt.preventDefault();

        if (this._catalogPopUpAddComponent !== null) {
          this._removePopUpAddComponent();
        }

        if (this._catalogPopUpSuccessComponent !== null) {
          this._removePopUpSuccessComponent();
        }
      }
    }
  }, {
    key: "_overlayClickHandler",
    value: function _overlayClickHandler(evt) {
      if (evt.target.classList.contains("overlay")) {
        evt.preventDefault();

        if (this._catalogPopUpAddComponent !== null) {
          this._removePopUpAddComponent();
        }

        if (this._catalogPopUpSuccessComponent !== null) {
          this._removePopUpSuccessComponent();
        }
      }
    }
  }, {
    key: "_handleCloseClick",
    value: function _handleCloseClick() {
      if (this._catalogPopUpAddComponent !== null) {
        this._removePopUpAddComponent();
      }

      if (this._catalogPopUpSuccessComponent !== null) {
        this._removePopUpSuccessComponent();
      }
    }
  }, {
    key: "_handleAddToBasketClick",
    value: function _handleAddToBasketClick() {
      this._catalogPopUpAddComponent = new _view_catalog_popUp_add_js__WEBPACK_IMPORTED_MODULE_1__.default(this._catalogCard);

      this._catalogPopUpAddComponent.setCloseClickHandler(this._handleCloseClick);

      this._catalogPopUpAddComponent.setAddClickHandler(this._handleAddToBasketPopUpClick);

      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.render)(this._catalogPopUpContainer, this._catalogPopUpAddComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_4__.RenderPosition.AFTERBEGIN);
      document.addEventListener("keydown", this._escKeyDownHandler);
      document.addEventListener("click", this._overlayClickHandler);
    }
  }, {
    key: "_handleAddToBasketPopUpClick",
    value: function _handleAddToBasketPopUpClick(data) {
      this._removePopUpAddComponent();

      this._catalogPopUpSuccessComponent = new _view_catalog_popUp_success_js__WEBPACK_IMPORTED_MODULE_2__.default();

      this._catalogPopUpSuccessComponent.setCloseClickHandler(this._handleCloseClick);

      this._catalogPopUpSuccessComponent.setToBasketClickHandler(this._handleAddToBasketPopUpSuccessClick);

      this._catalogPopUpSuccessComponent.setToShoppingClickHandler(this._handleToShoppingPopUpClick);

      this._catalogPopUpSuccessComponent.setCloseClickHandler(this._handleCloseClick);

      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.render)(this._catalogPopUpContainer, this._catalogPopUpSuccessComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_4__.RenderPosition.AFTERBEGIN);
      document.addEventListener("keydown", this._escKeyDownHandler);
      document.addEventListener("click", this._overlayClickHandler);
      this._goods = this._basketModel.getBasket();

      var index = this._goods.findIndex(function (good) {
        return good.identiferNumber === data.identiferNumber;
      });

      if (index === -1 || this._goods.length === 0) {
        this._basketModel.addGood(_const_js__WEBPACK_IMPORTED_MODULE_5__.UpdateType.INIT, Object.assign({}, data, {
          count: 1
        }));

        return;
      }

      var count = this._goods[index].count;
      count++;

      this._basketModel.updateGood(_const_js__WEBPACK_IMPORTED_MODULE_5__.UserAction.UPDATE_GOOD, Object.assign({}, data, {
        count: count
      }));
    }
  }, {
    key: "_handleAddToBasketPopUpSuccessClick",
    value: function _handleAddToBasketPopUpSuccessClick(menuItem) {
      this._currentMenuItem = this._siteMenuModel.getMenuItem(); // this._siteMenuComponent.getElement()
      //     .querySelector(`[data-menu-type="${this._currentMenuItem}"]`)
      //     .parentElement.classList.remove(`site-list__item--active`);
      // this._siteMenuComponent.getElement()
      //     .querySelector(`[data-menu-type="${menuItem}"]`)
      //     .parentElement.classList.add(`site-list__item--active`);

      this._siteMenuModel.setMenuItem(menuItem);

      this._removePopUpSuccessComponent();
    }
  }, {
    key: "_handleToShoppingPopUpClick",
    value: function _handleToShoppingPopUpClick() {
      this._removePopUpSuccessComponent();
    }
  }]);

  return CatalogGood;
}();



/***/ }),

/***/ "./js/presenter/catalog.js":
/*!*********************************!*\
  !*** ./js/presenter/catalog.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _view_catalog_board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/catalog-board.js */ "./js/view/catalog-board.js");
/* harmony import */ var _view_catalog_sort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/catalog-sort.js */ "./js/view/catalog-sort.js");
/* harmony import */ var _view_catalog_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/catalog-list.js */ "./js/view/catalog-list.js");
/* harmony import */ var _view_catalog_pagination_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/catalog-pagination.js */ "./js/view/catalog-pagination.js");
/* harmony import */ var _view_catalog_section_wrapper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/catalog-section-wrapper.js */ "./js/view/catalog-section-wrapper.js");
/* harmony import */ var _view_catalog_section_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/catalog-section.js */ "./js/view/catalog-section.js");
/* harmony import */ var _presenter_catalog_good_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../presenter/catalog-good.js */ "./js/presenter/catalog-good.js");
/* harmony import */ var _presenter_basket_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../presenter/basket.js */ "./js/presenter/basket.js");
/* harmony import */ var _presenter_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../presenter/filter.js */ "./js/presenter/filter.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/render.js */ "./js/utils/render.js");
/* harmony import */ var _utils_good_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/good.js */ "./js/utils/good.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../const.js */ "./js/const.js");
/* harmony import */ var _utils_filter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/filter.js */ "./js/utils/filter.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }















var GOOD_COUNT_PER_STEP = 9;

var Board = /*#__PURE__*/function () {
  function Board(mainContainer, goodsModel, filterModel, siteMenuModel, basketModel) {
    _classCallCheck(this, Board);

    this._goodsModel = goodsModel;
    this._filterModel = filterModel;
    this._siteMenuModel = siteMenuModel;
    this._basketModel = basketModel;
    this._mainContainer = mainContainer;
    this._renderedGoodsCount = GOOD_COUNT_PER_STEP;
    this._currentSortByCategoryType = _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByCategoryType.DEFAULT;
    this._currentSortByPriorityType = _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByPriorityType.DEFAULT;
    this._goods = {};
    this._minPaginationStep = 1;
    this._currentPaginationStep = 1;
    this._catalogPaginationComponent = null;
    this._siteCatalogSectionComponent = new _view_catalog_section_js__WEBPACK_IMPORTED_MODULE_5__.default();
    this._siteCatalogSectionWrapperComponent = new _view_catalog_section_wrapper_js__WEBPACK_IMPORTED_MODULE_4__.default();
    this._catalogComponent = new _view_catalog_board_js__WEBPACK_IMPORTED_MODULE_0__.default();
    this._catalogListComponent = new _view_catalog_list_js__WEBPACK_IMPORTED_MODULE_2__.default();
    this._filterPresenter = new _presenter_filter_js__WEBPACK_IMPORTED_MODULE_8__.default(this._siteCatalogSectionWrapperComponent, this._filterModel, this._goodsModel);
    this._goodPresenter = new _presenter_catalog_good_js__WEBPACK_IMPORTED_MODULE_6__.default(this._siteMenuModel, this._handleViewAction);
    this._handleSortByCategoryChange = this._handleSortByCategoryChange.bind(this);
    this._handleSortByPriorityChange = this._handleSortByPriorityChange.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleMenuModel = this._handleMenuModel.bind(this);
    this._handlePaginationNextClick = this._handlePaginationNextClick.bind(this);
    this._handlePaginationPreviousClick = this._handlePaginationPreviousClick.bind(this);

    this._siteMenuModel.addObserver(this._handleMenuModel);
  }

  _createClass(Board, [{
    key: "init",
    value: function init() {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.render)(this._mainContainer, this._siteCatalogSectionComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__.RenderPosition.BEFOREEND);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.render)(this._siteCatalogSectionComponent, this._siteCatalogSectionWrapperComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__.RenderPosition.BEFOREEND);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.render)(this._siteCatalogSectionWrapperComponent, this._catalogComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__.RenderPosition.BEFOREEND);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.render)(this._catalogComponent, this._catalogListComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__.RenderPosition.BEFOREEND);

      this._goodsModel.addObserver(this._handleModelEvent);

      this._filterModel.addObserver(this._handleModelEvent);

      this._renderCatalog();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._clearCatalog({
        resetSortByCategoryType: true
      });

      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.remove)(this._catalogListComponent);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.remove)(this._catalogComponent);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.remove)(this._siteCatalogSectionComponent);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.remove)(this._siteCatalogSectionWrapperComponent);

      this._goodsModel.removeObserver(this._handleModelEvent);

      this._filterModel.removeObserver(this._handleModelEvent);
    }
  }, {
    key: "_getGoods",
    value: function _getGoods() {
      var filter = this._filterModel.getFilter();

      var goods = this._goodsModel.getGoods();

      var filteredGoods = goods.slice(0).filter(function (good) {
        return (0,_utils_filter_js__WEBPACK_IMPORTED_MODULE_12__.filteredGoodsByType)(good.type, filter.type);
      }).filter(function (good) {
        return (0,_utils_filter_js__WEBPACK_IMPORTED_MODULE_12__.filteredGoodsByType)(good.stringAmount, filter.stringAmount);
      }).filter(function (good) {
        return (0,_utils_filter_js__WEBPACK_IMPORTED_MODULE_12__.filteredGoodsByPrice)(good.price, filter.price);
      });

      this._goodsModel.setFilteredGoods(filteredGoods);

      switch (this._currentSortByCategoryType) {
        case _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByCategoryType.DEFAULT:
          if (this._currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByPriorityType.UP) {
            this._currentSortByCategoryType = _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByCategoryType.PRICE;
            return filteredGoods.sort(_utils_good_js__WEBPACK_IMPORTED_MODULE_10__.sortPopularityUp);
          }

          if (this._currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByPriorityType.DOWN) {
            this._currentSortByCategoryType = _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByCategoryType.PRICE;
            return filteredGoods.sort(_utils_good_js__WEBPACK_IMPORTED_MODULE_10__.sortPopularityDown);
          }

          break;

        case _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByCategoryType.PRICE:
          if (this._currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByPriorityType.DEFAULT) {
            this._currentSortByPriorityType = _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByPriorityType.UP;
            return filteredGoods.sort(_utils_good_js__WEBPACK_IMPORTED_MODULE_10__.sortPriceUp);
          }

          if (this._currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByPriorityType.UP) {
            return filteredGoods.sort(_utils_good_js__WEBPACK_IMPORTED_MODULE_10__.sortPriceUp);
          }

          if (this._currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByPriorityType.DOWN) {
            return filteredGoods.sort(_utils_good_js__WEBPACK_IMPORTED_MODULE_10__.sortPriceDown);
          }

          break;

        case _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByCategoryType.POPULARITY:
          if (this._currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByPriorityType.DEFAULT) {
            this._currentSortByPriorityType = _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByPriorityType.UP;
            return filteredGoods.sort(_utils_good_js__WEBPACK_IMPORTED_MODULE_10__.sortPopularityUp);
          }

          if (this._currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByPriorityType.UP) {
            return filteredGoods.sort(_utils_good_js__WEBPACK_IMPORTED_MODULE_10__.sortPopularityUp);
          }

          if (this._currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByPriorityType.DOWN) {
            return filteredGoods.sort(_utils_good_js__WEBPACK_IMPORTED_MODULE_10__.sortPopularityDown);
          }

          break;
      }

      return filteredGoods;
    }
  }, {
    key: "_handleSortByCategoryChange",
    value: function _handleSortByCategoryChange(sortByCategory) {
      if (this._currentSortByCategoryType === sortByCategory) {
        return;
      }

      this._currentSortByCategoryType = sortByCategory;

      this._clearCatalog();

      this._renderCatalog();
    }
  }, {
    key: "_handleSortByPriorityChange",
    value: function _handleSortByPriorityChange(sortByPriority) {
      if (this._currentSortByPriorityType === sortByPriority) {
        return;
      }

      this._currentSortByPriorityType = sortByPriority;

      this._clearCatalog();

      this._renderCatalog();
    }
  }, {
    key: "_handleModelEvent",
    value: function _handleModelEvent() {
      this._clearCatalog();

      this._renderCatalog();
    }
  }, {
    key: "_handleMenuModel",
    value: function _handleMenuModel(menuItem) {
      switch (menuItem) {
        case _const_js__WEBPACK_IMPORTED_MODULE_11__.MenuItem.CATALOG:
          this.init();

          this._basketPresenter.destroy();

          break;

        case _const_js__WEBPACK_IMPORTED_MODULE_11__.MenuItem.BASKET:
          this.destroy();
          var siteMainElement = document.querySelector(".page-main");
          var siteMainContainerElement = siteMainElement.querySelector(".container");
          this._basketPresenter = new _presenter_basket_js__WEBPACK_IMPORTED_MODULE_7__.default(siteMainContainerElement, this._basketModel);

          this._basketPresenter.init();

          break;
      }
    }
  }, {
    key: "_handlePaginationNextClick",
    value: function _handlePaginationNextClick() {
      var goodsCount = this._getGoods().length;

      this._currentPaginationStep++;
      var startIndex = GOOD_COUNT_PER_STEP * this._currentPaginationStep - GOOD_COUNT_PER_STEP;
      var endIndex = GOOD_COUNT_PER_STEP * this._currentPaginationStep;

      var goods = this._getGoods().slice(startIndex, endIndex);

      Object.values(this._goods).forEach(function (presenter) {
        return presenter.destroy();
      });
      this._goods = {};

      this._renderGoods(goods);

      if (this._currentPaginationStep > this._minPaginationStep) {
        this._catalogPaginationComponent.getElement().querySelector(".pagination__item--button-previous").classList.remove("pagination__item--hide");
      }

      if (GOOD_COUNT_PER_STEP > goodsCount) {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.remove)(this._catalogPaginationComponent);
      }

      if (this._currentPaginationStep >= Math.ceil(goodsCount / this._currentPaginationStep)) {
        this._catalogPaginationComponent.getElement().querySelector(".pagination__item--button-next").classList.add("pagination__item--hide");
      }

      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.remove)(this._catalogPaginationComponent);

      this._renderPagination(this._renderedGoodsCount);
    }
  }, {
    key: "_handlePaginationPreviousClick",
    value: function _handlePaginationPreviousClick() {
      var goodsCount = this._getGoods().length;

      this._currentPaginationStep--;
      var startIndex = GOOD_COUNT_PER_STEP * this._currentPaginationStep - GOOD_COUNT_PER_STEP;
      var endIndex = GOOD_COUNT_PER_STEP * this._currentPaginationStep;

      var goods = this._getGoods().slice(startIndex, endIndex);

      Object.values(this._goods).forEach(function (presenter) {
        return presenter.destroy();
      });
      this._goods = {};

      this._renderGoods(goods);

      if (GOOD_COUNT_PER_STEP > goodsCount) {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.remove)(this._catalogPaginationComponent);
      }

      if (this._currentPaginationStep === this._minPaginationStep) {
        this._catalogPaginationComponent.getElement().querySelector(".pagination__item--button-previous").classList.add("pagination__item--hide");
      }

      if (this._currentPaginationStep <= Math.ceil(goodsCount / this._currentPaginationStep)) {
        this._catalogPaginationComponent.getElement().querySelector(".pagination__item--button-next").classList.remove("pagination__item--hide");
      }

      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.remove)(this._catalogPaginationComponent);

      this._renderPagination(this._renderedGoodsCount);
    }
  }, {
    key: "_renderSort",
    value: function _renderSort() {
      if (this._catalogSortComponent !== null) {
        this._catalogSortComponent = null;
      }

      this._catalogSortComponent = new _view_catalog_sort_js__WEBPACK_IMPORTED_MODULE_1__.default(this._currentSortByCategoryType, this._currentSortByPriorityType);

      this._catalogSortComponent.setSortByCategoryChangeHandler(this._handleSortByCategoryChange);

      this._catalogSortComponent.setSortByPriorityChangeHandler(this._handleSortByPriorityChange);

      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.render)(this._catalogComponent, this._catalogSortComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__.RenderPosition.AFTERBEGIN);
    }
  }, {
    key: "_renderGood",
    value: function _renderGood(good) {
      var goodPresenter = new _presenter_catalog_good_js__WEBPACK_IMPORTED_MODULE_6__.default(this._siteMenuModel, this._basketModel);
      goodPresenter.init(this._catalogListComponent, good);
      this._goods[good.id] = goodPresenter;
    }
  }, {
    key: "_renderGoods",
    value: function _renderGoods(goods) {
      var _this = this;

      goods.forEach(function (good) {
        return _this._renderGood(good);
      });
    }
  }, {
    key: "_renderPagination",
    value: function _renderPagination() {
      var goodsCount = this._getGoods().length;

      this._catalogPaginationComponent = new _view_catalog_pagination_js__WEBPACK_IMPORTED_MODULE_3__.default(goodsCount, GOOD_COUNT_PER_STEP, this._currentPaginationStep);

      this._catalogPaginationComponent.setNextClickHandler(this._handlePaginationNextClick);

      this._catalogPaginationComponent.setPreviousClickHandler(this._handlePaginationPreviousClick);

      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.render)(this._catalogComponent, this._catalogPaginationComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__.RenderPosition.BEFOREEND);

      if (this._currentPaginationStep <= 1) {
        this._catalogPaginationComponent.getElement().querySelector(".pagination__item--button-previous").classList.add("pagination__item--hide");
      }

      if (this._currentPaginationStep * GOOD_COUNT_PER_STEP >= goodsCount) {
        this._catalogPaginationComponent.getElement().querySelector(".pagination__item--button-next").classList.add("pagination__item--hide");
      }
    }
  }, {
    key: "_clearCatalog",
    value: function _clearCatalog() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$resetSortByCateg = _ref.resetSortByCategoryType,
          resetSortByCategoryType = _ref$resetSortByCateg === void 0 ? false : _ref$resetSortByCateg;

      Object.values(this._goods).forEach(function (presenter) {
        return presenter.destroy();
      });
      this._goods = {};

      this._filterPresenter.destroy();

      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.remove)(this._catalogSortComponent);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.remove)(this._catalogPaginationComponent);
      this._currentPaginationStep = 1;

      if (resetSortByCategoryType) {
        this._currentSortByCategoryType = _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByCategoryType.DEFAULT;
        this._currentSortByPriorityType = _const_js__WEBPACK_IMPORTED_MODULE_11__.SortByPriorityType.DEFAULT;
      }
    }
  }, {
    key: "_renderCatalog",
    value: function _renderCatalog() {
      var goods = this._getGoods();

      var goodCount = goods.length;

      if (this._filterPresenter !== null) {
        this._filterPresenter.init();
      }

      this._renderSort();

      this._renderGoods(goods.slice(0, Math.min(goodCount, GOOD_COUNT_PER_STEP)));

      if (goodCount > GOOD_COUNT_PER_STEP) {
        this._renderPagination();
      }
    }
  }]);

  return Board;
}();



/***/ }),

/***/ "./js/presenter/filter.js":
/*!********************************!*\
  !*** ./js/presenter/filter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Filter)
/* harmony export */ });
/* harmony import */ var _view_filters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/filters.js */ "./js/view/filters.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./js/utils/render.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Filter = /*#__PURE__*/function () {
  function Filter(filterContainer, filterModel, goodsModel) {
    _classCallCheck(this, Filter);

    this._filterContainer = filterContainer;
    this._filterModel = filterModel;
    this._goodsModel = goodsModel;
    this._filterComponent = null;
    this._prevFilterComponent = null;
    this._pricesInGoods = [];
    this._pricesInGoods = this._goodsModel.getGoods().map(function (item) {
      return item.price;
    });
    this._minPriceInGoods = Math.min.apply(Math, _toConsumableArray(this._pricesInGoods));
    this._maxPriceInGoods = Math.max.apply(Math, _toConsumableArray(this._pricesInGoods));
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
    this._handleFilterStringChange = this._handleFilterStringChange.bind(this);
    this._handleFilterPriceChange = this._handleFilterPriceChange.bind(this);

    this._filterModel.setFilterByInit([this._minPriceInGoods, this._maxPriceInGoods], "price");
  }

  _createClass(Filter, [{
    key: "init",
    value: function init() {
      this._currentFilter = this._filterModel.getFilter();
      this._goods = this._goodsModel.getGoods();
      this._prevFilterComponent = this._filterComponent;
      this._filterComponent = new _view_filters_js__WEBPACK_IMPORTED_MODULE_0__.default(this._currentFilter, this._goods);

      this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);

      this._filterComponent.setFilterStringChangeHandler(this._handleFilterStringChange);

      this._filterComponent.setFilterPriceChangeHandler(this._handleFilterPriceChange);

      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(this._filterContainer, this._filterComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.AFTERBEGIN);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.remove)(this._filterComponent);
      this._filterComponent = null;
    }
  }, {
    key: "_handleFilterTypeChange",
    value: function _handleFilterTypeChange(filterGuitarType) {
      if (this._prevFilterComponent === 0) {
        return;
      }

      this._filterModel.setFilter(filterGuitarType, "type");
    }
  }, {
    key: "_handleFilterStringChange",
    value: function _handleFilterStringChange(filterStringType) {
      if (this._prevFilterComponent === 0) {
        return;
      }

      filterStringType = filterStringType.map(function (string) {
        return Number(string);
      });

      this._filterModel.setFilter(filterStringType, "stringAmount");
    }
  }, {
    key: "_handleFilterPriceChange",
    value: function _handleFilterPriceChange(filterPriceType) {
      if (this._prevFilterComponent === 0) {
        return;
      }

      filterPriceType = filterPriceType.map(function (filter) {
        return parseInt(String(filter).replace(/\s+/g, ""), 10);
      });

      var _this$_currentFilter$ = _slicedToArray(this._currentFilter.price, 2),
          minCurrent = _this$_currentFilter$[0],
          maxCurrent = _this$_currentFilter$[1];

      var _filterPriceType = filterPriceType,
          _filterPriceType2 = _slicedToArray(_filterPriceType, 2),
          min = _filterPriceType2[0],
          max = _filterPriceType2[1];

      if (min < this._minPriceInGoods) {
        min = this._minPriceInGoods;
      }

      if (min > this._maxPriceInGoods) {
        min = this._maxPriceInGoods;
      }

      if (min > maxCurrent) {
        min = maxCurrent;
      }

      if (max < this._minPriceInGoods) {
        max = this._minPriceInGoods;
      }

      if (max > this._maxPriceInGoods) {
        max = this._maxPriceInGoods;
      }

      if (max < minCurrent) {
        max = minCurrent;
      }

      this._filterModel.setFilter([min, max], "price");
    }
  }]);

  return Filter;
}();



/***/ }),

/***/ "./js/presenter/site-menu.js":
/*!***********************************!*\
  !*** ./js/presenter/site-menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteMenu)
/* harmony export */ });
/* harmony import */ var _view_site_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/site-menu.js */ "./js/view/site-menu.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./js/utils/render.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SiteMenu = /*#__PURE__*/function () {
  function SiteMenu(siteMenuContainer, siteMenuModel, basketModel) {
    _classCallCheck(this, SiteMenu);

    this._siteMenuContainer = siteMenuContainer;
    this._siteMenuModel = siteMenuModel;
    this._basketModel = basketModel;
    this._handleSiteMenuChange = this._handleSiteMenuChange.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
  }

  _createClass(SiteMenu, [{
    key: "init",
    value: function init() {
      this._siteMenuComponent = new _view_site_menu_js__WEBPACK_IMPORTED_MODULE_0__.default(this._basketModel.getBasket());
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(this._siteMenuContainer, this._siteMenuComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.AFTERBEGIN);

      this._siteMenuComponent.setMenuClickHandler(this._handleSiteMenuChange);

      this._siteMenuModel.addObserver(this._handleModelEvent);

      this._basketModel.addObserver(this._handleModelEvent);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.remove)(this._siteMenuComponent);
      this._siteMenuComponent = null;

      this._siteMenuModel.removeObserver(this._handleModelEvent);

      this._basketModel.removeObserver(this._handleModelEvent);
    }
  }, {
    key: "_handleModelEvent",
    value: function _handleModelEvent() {
      this.destroy();
      this.init();
    }
  }, {
    key: "_handleSiteMenuChange",
    value: function _handleSiteMenuChange(menuItem) {
      this._currentMenuItem = this._siteMenuModel.getMenuItem();

      if (this._currentMenuItem === menuItem || menuItem === null) {
        return;
      }

      this._siteMenuModel.setMenuItem(menuItem);
    }
  }]);

  return SiteMenu;
}();



/***/ }),

/***/ "./js/utils/filter.js":
/*!****************************!*\
  !*** ./js/utils/filter.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filteredGoodsByType": () => (/* binding */ filteredGoodsByType),
/* harmony export */   "filteredGoodsByPrice": () => (/* binding */ filteredGoodsByPrice)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var filteredGoodsByType = function filteredGoodsByType(good, filters) {
  if (!filters.length) {
    return true;
  }

  return filters.includes(good);
};
var filteredGoodsByPrice = function filteredGoodsByPrice(good, filters) {
  var keys = ["min", "max"];
  var PriceRange = {};
  PriceRange = Object.assign.apply(Object, _toConsumableArray(keys.map(function (k, i) {
    return _defineProperty({}, k, filters[i]);
  })));

  if (!filters.length) {
    return true;
  }

  return Number(good) <= PriceRange.max && Number(good) >= PriceRange.min;
};

/***/ }),

/***/ "./js/utils/good.js":
/*!**************************!*\
  !*** ./js/utils/good.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGuitarType": () => (/* binding */ getGuitarType),
/* harmony export */   "sortPriceDown": () => (/* binding */ sortPriceDown),
/* harmony export */   "sortPriceUp": () => (/* binding */ sortPriceUp),
/* harmony export */   "sortPopularityDown": () => (/* binding */ sortPopularityDown),
/* harmony export */   "sortPopularityUp": () => (/* binding */ sortPopularityUp)
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./js/const.js");

var getGuitarType = function getGuitarType(type) {
  var guitarTypeKeys = Object.keys(_const_js__WEBPACK_IMPORTED_MODULE_0__.FilterType);
  var currentGuitarType = guitarTypeKeys.filter(function (key) {
    return _const_js__WEBPACK_IMPORTED_MODULE_0__.FilterType[key] === type;
  }).map(function (key) {
    return key.toLocaleLowerCase();
  });
  return currentGuitarType;
};
var sortPriceDown = function sortPriceDown(pointA, pointB) {
  return Number(pointA.price) > Number(pointB.price) ? -1 : 1;
};
var sortPriceUp = function sortPriceUp(pointA, pointB) {
  return Number(pointA.price) > Number(pointB.price) ? 1 : -1;
};
var sortPopularityDown = function sortPopularityDown(pointA, pointB) {
  return Number(pointA.reviewAmount) > Number(pointB.reviewAmount) ? -1 : 1;
};
var sortPopularityUp = function sortPopularityUp(pointA, pointB) {
  return Number(pointA.reviewAmount) > Number(pointB.reviewAmount) ? 1 : -1;
};

/***/ }),

/***/ "./js/utils/observer.js":
/*!******************************!*\
  !*** ./js/utils/observer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Observer)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Observer = /*#__PURE__*/function () {
  function Observer() {
    _classCallCheck(this, Observer);

    this._observers = [];
  }

  _createClass(Observer, [{
    key: "addObserver",
    value: function addObserver(observer) {
      this._observers.push(observer);
    }
  }, {
    key: "removeObserver",
    value: function removeObserver(observer) {
      this._observers = this._observers.filter(function (existedObserver) {
        return existedObserver !== observer;
      });
    }
  }, {
    key: "_notify",
    value: function _notify(event) {
      this._observers.forEach(function (observer) {
        return observer(event);
      });
    }
  }]);

  return Observer;
}();



/***/ }),

/***/ "./js/utils/render.js":
/*!****************************!*\
  !*** ./js/utils/render.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderTemplate": () => (/* binding */ renderTemplate),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./js/view/abstract.js");

var RenderPosition = {
  AFTERBEGIN: "afterbegin",
  BEFOREEND: "beforeend",
  BEFOREBEGIN: "beforebegin"
};
var render = function render(container, child, place) {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default) {
    container = container.getElement();
  }

  if (child instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default) {
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
var renderTemplate = function renderTemplate(container, template, place) {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default) {
    container = container.getElement();
  }

  container.insertAdjacentHTML(place, template);
};
var createElement = function createElement(template) {
  var newElement = document.createElement("div");
  newElement.innerHTML = template;
  return newElement.firstChild;
};
var replace = function replace(newChild, oldChild) {
  if (oldChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default) {
    newChild = newChild.getElement();
  }

  var parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error("Can't replace unexisting elements");
  }

  parent.replaceChild(newChild, oldChild);
};
var remove = function remove(component) {
  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default)) {
    throw new Error("Can remove only components");
  }

  component.getElement().remove();
  component.removeElement();
};

/***/ }),

/***/ "./js/view/abstract.js":
/*!*****************************!*\
  !*** ./js/view/abstract.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Abstract)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./js/utils/render.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Abstract = /*#__PURE__*/function () {
  function Abstract() {
    _classCallCheck(this, Abstract);

    if ((this instanceof Abstract ? this.constructor : void 0) === Abstract) {
      throw new Error("Can't instantiate Abstract, only concrete one.");
    }

    this._element = null;
    this._callback = {};
  }

  _createClass(Abstract, [{
    key: "getTemplate",
    value: function getTemplate() {
      throw new Error("Abstract method not implemented: getTemplate");
    }
  }, {
    key: "getElement",
    value: function getElement() {
      if (!this._element) {
        this._element = (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
      }

      return this._element;
    }
  }, {
    key: "removeElement",
    value: function removeElement() {
      this._element = null;
    }
  }]);

  return Abstract;
}();



/***/ }),

/***/ "./js/view/basket-item.js":
/*!********************************!*\
  !*** ./js/view/basket-item.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BasketItem)
/* harmony export */ });
/* harmony import */ var _smart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart.js */ "./js/view/smart.js");
/* harmony import */ var _utils_good_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/good.js */ "./js/utils/good.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var createBasketItemElement = function createBasketItemElement(data) {
  var type = data.type,
      stringAmount = data.stringAmount,
      name = data.name,
      price = data.price,
      count = data.count;
  return "<li class=\"product__item\">\n          <div class=\"product__image-container\">\n            <picture>\n              <source type=\"image/webp\" srcset=\"img/guitar-".concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@1x.webp 1x, img/guitar-").concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@2x.webp 2x\">\n              <!-- 1\u0445: 68px; 2x: 136px -->\n              <img src=\"img/guitar-").concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@1x.png\" srcset=\"img/guitar-").concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@1x.png 1x, img/guitar-").concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@2x.png 2x\" width=\"68\" height=\"190\" alt=\"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430\">\n            </picture>\n          </div>\n          <ul class=\"product__description-list\">\n            <li class=\"product__name\">\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430 ").concat(name, "</li>\n            <li class=\"product__identifer-number\">\u0410\u0440\u0442\u0438\u043A\u0443\u043B: ").concat(count, "</li>\n            <li class=\"product__type\">\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430, ").concat(stringAmount, " \u0441\u0442\u0440\u0443\u043D\u043D\u0430\u044F </li>\n          </ul>\n          <div class=\"product__price\"><p>").concat(price.toLocaleString("ru-RU"), " \u20BD</p></div>\n          <div class=\"product__quantity\">\n            <button class=\"product__quantity-button\" id=\"dec-button\" type=\"button\">-</button>\n            <input type=\"text\" value=\"").concat(count, "\" name=\"product-quantity\">\n            <button class=\"product__quantity-button\" id=\"inc-button\" type=\"button\">+</button>\n          </div>\n          <div class=\"product__price-total\">").concat((price * count).toLocaleString("ru-RU"), " \u20BD</div>\n          <button class=\"product__delete\" type=\"button\">\n            <span class=\"visually-hidden\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440</span>\n          </button>\n        </li>");
};

var BasketItem = /*#__PURE__*/function (_SmartView) {
  _inherits(BasketItem, _SmartView);

  var _super = _createSuper(BasketItem);

  function BasketItem(data) {
    var _this;

    _classCallCheck(this, BasketItem);

    _this = _super.call(this);
    _this._data = data;
    _this._handleQuantityIncClick = _this._handleQuantityIncClick.bind(_assertThisInitialized(_this));
    _this._handleQuantityDecClick = _this._handleQuantityDecClick.bind(_assertThisInitialized(_this));
    _this._handleProductQuantityChangeHandle = _this._handleProductQuantityChangeHandle.bind(_assertThisInitialized(_this));
    _this._deleteClickHandler = _this._deleteClickHandler.bind(_assertThisInitialized(_this));
    _this._currentValueCount = _this._data.count;

    _this.restoreHandlers();

    return _this;
  }

  _createClass(BasketItem, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createBasketItemElement(this._data);
    }
  }, {
    key: "restoreHandlers",
    value: function restoreHandlers() {
      this.setQuantityIncHandle();
      this.setQuantityDecHandle();
    }
  }, {
    key: "_handleQuantityIncClick",
    value: function _handleQuantityIncClick(evt) {
      evt.preventDefault();
      this._currentValueCount = Number(this.getElement().querySelector("input[name=product-quantity]").value);
      this._currentValueCount++;

      this._callback.quantityIncClick(this._currentValueCount);
    }
  }, {
    key: "_handleQuantityDecClick",
    value: function _handleQuantityDecClick() {
      this._currentValueCount = Number(this.getElement().querySelector("input[name=product-quantity]").value);
      this._currentValueCount--;

      this._callback.quantityDecClick(this._currentValueCount);
    }
  }, {
    key: "_handleProductQuantityChangeHandle",
    value: function _handleProductQuantityChangeHandle(evt) {
      evt.preventDefault();

      if (evt.target.value <= 0 || Number.isNaN(Number(evt.target.value)) || evt.target.value === "") {
        return this._callback.productQuantityChange(this._currentValueCount);
      }

      this._currentValueCount = Number(evt.target.value);
      return this._callback.productQuantityChange(this._currentValueCount);
    }
  }, {
    key: "_deleteClickHandler",
    value: function _deleteClickHandler(evt) {
      evt.preventDefault();

      this._callback.deleteClick();
    }
  }, {
    key: "setQuantityIncHandle",
    value: function setQuantityIncHandle(callback) {
      this._callback.quantityIncClick = callback;
      this.getElement().querySelector("#inc-button").addEventListener("click", this._handleQuantityIncClick);
    }
  }, {
    key: "setQuantityDecHandle",
    value: function setQuantityDecHandle(callback) {
      this._callback.quantityDecClick = callback;
      this.getElement().querySelector("#dec-button").addEventListener("click", this._handleQuantityDecClick);
    }
  }, {
    key: "setProductQuantityChangeHandle",
    value: function setProductQuantityChangeHandle(callback) {
      this._callback.productQuantityChange = callback;
      this.getElement().querySelector("input[name=product-quantity]").addEventListener("change", this._handleProductQuantityChangeHandle);
    }
  }, {
    key: "setDeleteClickHandler",
    value: function setDeleteClickHandler(callback) {
      this._callback.deleteClick = callback;
      this.getElement().querySelector(".product__delete").addEventListener("click", this._deleteClickHandler);
    }
  }]);

  return BasketItem;
}(_smart_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/view/basket-popUp-delete.js":
/*!****************************************!*\
  !*** ./js/view/basket-popUp-delete.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogPopUpDelete)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./js/view/abstract.js");
/* harmony import */ var _utils_good_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/good.js */ "./js/utils/good.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var createBasketPopUpDeleteElement = function createBasketPopUpDeleteElement(data) {
  var type = data.type,
      name = data.name,
      identiferNumber = data.identiferNumber,
      stringAmount = data.stringAmount,
      price = data.price;
  return "<section class=\"modal\">\n  <div class=\"overlay\">\n    <div class=\"modal__popup\">\n      <h2 class=\"modal__title\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0442\u043E\u0432\u0430\u0440?</h2>\n\n      <div class=\"modal__content\">\n        <div class=\"modal__image-container\">\n          <picture>\n            <source type=\"image/webp\" srcset=\"img/guitar-".concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@1x.webp 1x, img/guitar-").concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@2x.webp 2x\">\n            <!-- 1\u0445: 68px; 2x: 136px -->\n            <img src=\"img/guitar-").concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@1x.png\" srcset=\"img/guitar-").concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@1x.png 1x, img/guitar-").concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@2x.png 2x\" width=\"68\" height=\"190\" alt=\"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430\">\n          </picture>\n        </div>\n        <div class=\"modal__content-container\">\n          <ul class=\"modal__description-list\">\n            <li class=\"modal__name\">\u0413\u0438\u0442\u0430\u0440\u0430 ").concat(name, "</li>\n            <li class=\"modal__identifer-number\">\u0410\u0440\u0442\u0438\u043A\u0443\u043B: ").concat(identiferNumber, "</li>\n            <li class=\"modal__type\">\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430, ").concat(stringAmount, " \u0441\u0442\u0440\u0443\u043D\u043D\u0430\u044F </li>\n          </ul>\n          <div class=\"modal__price\">\u0426\u0435\u043D\u0430: ").concat(price, " \u20BD</div>\n        </div>\n        <div class=\"modal__buttons-wrapper modal__buttons-wrapper--basket\">\n          <button class=\"modal__button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440</button>\n          <button class=\"modal__button modal__button--to-shopping\">\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438</button>\n        </div>\n        <button class=\"modal__close\" type=\"button\">\n          <span class=\"visually-hidden\">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</span>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>");
};

var CatalogPopUpDelete = /*#__PURE__*/function (_AbstractView) {
  _inherits(CatalogPopUpDelete, _AbstractView);

  var _super = _createSuper(CatalogPopUpDelete);

  function CatalogPopUpDelete(data) {
    var _this;

    _classCallCheck(this, CatalogPopUpDelete);

    _this = _super.call(this);
    _this._data = data;
    _this._deleteClickHandler = _this._deleteClickHandler.bind(_assertThisInitialized(_this));
    _this._closeClickHandler = _this._closeClickHandler.bind(_assertThisInitialized(_this));
    _this._toShoppingClickHandler = _this._toShoppingClickHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CatalogPopUpDelete, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createBasketPopUpDeleteElement(this._data);
    }
  }, {
    key: "_deleteClickHandler",
    value: function _deleteClickHandler(evt) {
      evt.preventDefault();

      this._callback.deleteClick();
    }
  }, {
    key: "_closeClickHandler",
    value: function _closeClickHandler(evt) {
      evt.preventDefault();

      this._callback.closeClick();
    }
  }, {
    key: "_toShoppingClickHandler",
    value: function _toShoppingClickHandler(evt) {
      evt.preventDefault();

      this._callback.toShoppingClick();
    }
  }, {
    key: "setDeleteClickHandler",
    value: function setDeleteClickHandler(callback) {
      this._callback.deleteClick = callback;
      this.getElement().querySelector(".modal__button").addEventListener("click", this._deleteClickHandler);
    }
  }, {
    key: "setCloseClickHandler",
    value: function setCloseClickHandler(callback) {
      this._callback.closeClick = callback;
      this.getElement().querySelector(".modal__close").addEventListener("click", this._closeClickHandler);
    }
  }, {
    key: "setToShoppingClickHandler",
    value: function setToShoppingClickHandler(callback) {
      this._callback.toShoppingClick = callback;
      this.getElement().querySelector(".modal__button--to-shopping").addEventListener("click", this._toShoppingClickHandler);
    }
  }]);

  return CatalogPopUpDelete;
}(_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/view/basket.js":
/*!***************************!*\
  !*** ./js/view/basket.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Basket)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./js/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./js/const.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var createBasketElement = function createBasketElement(goods, discountType, isAvailable) {
  var totalPrice = 0;
  var DISCOUNT = {
    GITARAHIT_10_PERCENT: 0.9,
    SUPERGITARA: 700,
    GITARA2020: 3500,
    GITARA2020_30_PERCENT: 0.7
  };

  var getTotalPrice = function getTotalPrice() {
    if (goods.length !== 0) {
      var goodPrice = [];
      goods.forEach(function (good) {
        return goodPrice.push(good.price * good.count);
      });
      totalPrice = goodPrice.reduce(function (acc, price) {
        return acc + price;
      });
    }

    return totalPrice;
  };

  var getDiscountPrice = function getDiscountPrice(type) {
    switch (type) {
      case _const_js__WEBPACK_IMPORTED_MODULE_1__.DiscountType.GITARAHIT:
        getTotalPrice();

        if (totalPrice > 0) {
          return totalPrice * DISCOUNT.GITARAHIT_10_PERCENT;
        }

        break;

      case _const_js__WEBPACK_IMPORTED_MODULE_1__.DiscountType.SUPERGITARA:
        getTotalPrice();

        if (totalPrice > 0) {
          return totalPrice - DISCOUNT.SUPERGITARA;
        }

        break;

      case _const_js__WEBPACK_IMPORTED_MODULE_1__.DiscountType.GITARA2020:
        getTotalPrice();

        if (totalPrice > 0) {
          return DISCOUNT.GITARA2020 <= totalPrice * DISCOUNT.GITARA2020_30_PERCENT ? totalPrice - DISCOUNT.GITARA2020 : totalPrice * DISCOUNT.GITARA2020_30_PERCENT;
        }

        break;

      default:
        getTotalPrice();
        break;
    }

    return totalPrice.toLocaleString("ru-RU");
  };

  return "<section class=\"shopping-bag\">\n  <div class=\"shopping-bag__content\">\n    <div class=\"shopping-bag__product product\">\n      <ul class=\"product__list\">\n\n      </ul>\n    </div>\n    <div class=\"shopping-bag__order order\">\n      <div class=\"order__discount\">\n        <div class=\"order__discount-wrapper\">\n          <span class=\"order__discount-title\">\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434 \u043D\u0430 \u0441\u043A\u0438\u0434\u043A\u0443</span>\n          <span class=\"order__discount-subtitle\">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434, \u0435\u0441\u043B\u0438 \u043E\u043D \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C.</span>\n        </div>\n        <div class=\"order__discount-promo ".concat(!isAvailable ? "order__discount-promo--error" : "", "\">\n          <input type=\"text\" name=\"order-discount-promo\" id=\"order-discount-promo\" placeholder=\"\" value=\"\">\n          <button type=\"button\">\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u043A\u0443\u043F\u043E\u043D</button>\n        </div>\n      </div>\n      <div class=\"order__to-order\">\n        <span>\u0412\u0441\u0435\u0433\u043E: ").concat(getDiscountPrice(discountType), " \u20BD</span>\n        <button type=\"button\">\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437</button>\n      </div>\n    </div>\n  </div>\n</section>");
};

var Basket = /*#__PURE__*/function (_AbstractView) {
  _inherits(Basket, _AbstractView);

  var _super = _createSuper(Basket);

  function Basket(goods, discountType, isAvailable) {
    var _this;

    _classCallCheck(this, Basket);

    _this = _super.call(this);
    _this._goods = goods;
    _this._discountType = discountType;
    _this._isAvailable = isAvailable;
    _this._discountClickHandler = _this._discountClickHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Basket, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createBasketElement(this._goods, this._discountType, this._isAvailable);
    }
  }, {
    key: "_discountClickHandler",
    value: function _discountClickHandler(evt) {
      evt.preventDefault();
      var discountType = this.getElement().querySelector("input[name=order-discount-promo]").value;

      this._callback.discountClick(discountType);
    }
  }, {
    key: "setDiscountClickHandler",
    value: function setDiscountClickHandler(callback) {
      this._callback.discountClick = callback;
      this.getElement().querySelector(".order__discount-promo button").addEventListener("click", this._discountClickHandler);
    }
  }]);

  return Basket;
}(_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/view/breadcrumbs.js":
/*!********************************!*\
  !*** ./js/view/breadcrumbs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Breadcrumbs)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./js/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./js/const.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var createBreadcrumbsTemplate = function createBreadcrumbsTemplate(siteMenuItem) {
  var breadcrumbsElement = function breadcrumbsElement(element) {
    var title = "";

    switch (siteMenuItem) {
      case _const_js__WEBPACK_IMPORTED_MODULE_1__.MenuItem.CATALOG:
        title = element.CATALOG;
        return "<li class=\"breadcrumbs__item breadcrumbs__item--current\">\n                  <a class=\"breadcrumbs__link\">".concat(title, "</a>\n                </li>");

      case _const_js__WEBPACK_IMPORTED_MODULE_1__.MenuItem.BASKET:
        title = element.BASKET;
        return "<li class=\"breadcrumbs__item\">\n                  <a class=\"breadcrumbs__link\" data-breadcrumbs-type=\"".concat(_const_js__WEBPACK_IMPORTED_MODULE_1__.MenuItem.CATALOG, "\">").concat(element.CATALOG, "</a>\n                </li>\n                <li class=\"breadcrumbs__item breadcrumbs__item--current\">\n                  <a class=\"breadcrumbs__link\">").concat(title, "</a>\n                </li>");
    }

    return title;
  };

  var breadcrumbsTitle = function breadcrumbsTitle(element) {
    var title = "";

    switch (siteMenuItem) {
      case _const_js__WEBPACK_IMPORTED_MODULE_1__.MenuItem.CATALOG:
        title = element.CATALOG;
        return title;

      case _const_js__WEBPACK_IMPORTED_MODULE_1__.MenuItem.BASKET:
        title = element.BASKET;
        return title;
    }

    return title;
  };

  return "<div><h2 class=\"page-main__title\">".concat(breadcrumbsTitle(_const_js__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsTitle), "</h2>\n  <ul class=\"breadcrumbs\">\n    <li class=\"breadcrumbs__item\">\n      <a class=\"breadcrumbs__link\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a>\n    </li>\n\n      ").concat(breadcrumbsElement(_const_js__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsItem), "\n\n  </ul></div>");
};

var Breadcrumbs = /*#__PURE__*/function (_AbstractView) {
  _inherits(Breadcrumbs, _AbstractView);

  var _super = _createSuper(Breadcrumbs);

  function Breadcrumbs(siteMenuModel) {
    var _this;

    _classCallCheck(this, Breadcrumbs);

    _this = _super.call(this);
    _this._siteMenuModel = siteMenuModel;
    _this._breadcrumbsClickHandler = _this._breadcrumbsClickHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Breadcrumbs, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createBreadcrumbsTemplate(this._siteMenuModel);
    }
  }, {
    key: "_breadcrumbsClickHandler",
    value: function _breadcrumbsClickHandler(evt) {
      evt.preventDefault();

      if (evt.target.dataset.breadcrumbsType) {
        this._callback.breadcrumbsClick(evt.target.dataset.breadcrumbsType);
      }
    }
  }, {
    key: "setBreadcrumbsClickHandler",
    value: function setBreadcrumbsClickHandler(callback) {
      this._callback.breadcrumbsClick = callback;
      this.getElement().addEventListener("click", this._breadcrumbsClickHandler);
    }
  }]);

  return Breadcrumbs;
}(_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/view/catalog-board.js":
/*!**********************************!*\
  !*** ./js/view/catalog-board.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ catalogBoard)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./js/view/abstract.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var createCatalogBoardTemplate = function createCatalogBoardTemplate() {
  return "<div class=\"catalog__catalog-column\"></div>";
};

var catalogBoard = /*#__PURE__*/function (_AbstractView) {
  _inherits(catalogBoard, _AbstractView);

  var _super = _createSuper(catalogBoard);

  function catalogBoard() {
    _classCallCheck(this, catalogBoard);

    return _super.apply(this, arguments);
  }

  _createClass(catalogBoard, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createCatalogBoardTemplate();
    }
  }]);

  return catalogBoard;
}(_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/view/catalog-item.js":
/*!*********************************!*\
  !*** ./js/view/catalog-item.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogItem)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./js/view/abstract.js");
/* harmony import */ var _utils_good_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/good.js */ "./js/utils/good.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var createCatalogItemElement = function createCatalogItemElement(data) {
  var type = data.type,
      reviewAmount = data.reviewAmount,
      name = data.name,
      price = data.price,
      starsCount = data.starsCount;
  return "<li class=\"list__item\">\n      <picture>\n        <source type=\"image/webp\" srcset=\"img/guitar-".concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@1x.webp 1x, img/guitar-").concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@2x.webp 2x\">\n        <!-- 1\u0445: 68px; 2x: 136px -->\n        <img src=\"img/guitar-").concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@1x.png\" srcset=\"img/guitar-").concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@1x.png 1x, img/guitar-").concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@2x.png 2x\" width=\"68\" height=\"190\" alt=\"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430\">\n      </picture>\n      <div class=\"list__rating rating\">\n        <div class=\"list__stars rating__stars\">\n          <span style=\"width: ").concat(starsCount * 20, "%;\"></span>\n          <span class=\"visually-hidden\">Rating</span>\n        </div>\n        <span class=\"rating__amount\">").concat(reviewAmount, "</span>\n      </div>\n      <div class=\"list__description-wrapper\">\n        <h3>").concat(name, "</h3>\n        <p>").concat(price.toLocaleString("ru-RU"), " \u20BD</p>\n      </div>\n      <div class=\"list__navigation-wrapper\">\n        <a href=\"\" class=\"catalog__button--info catalog__button\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n        <a href=\"\" class=\"catalog__button--buy catalog__button\">\u041A\u0443\u043F\u0438\u0442\u044C</a>\n      </div>\n    </li>");
};

var CatalogItem = /*#__PURE__*/function (_AbstractView) {
  _inherits(CatalogItem, _AbstractView);

  var _super = _createSuper(CatalogItem);

  function CatalogItem(data) {
    var _this;

    _classCallCheck(this, CatalogItem);

    _this = _super.call(this);
    _this.data = data;
    _this._addClickHandler = _this._addClickHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CatalogItem, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createCatalogItemElement(this.data);
    }
  }, {
    key: "_addClickHandler",
    value: function _addClickHandler(evt) {
      evt.preventDefault();

      this._callback.addClick();
    }
  }, {
    key: "setAddClickHandler",
    value: function setAddClickHandler(callback) {
      this._callback.addClick = callback;
      this.getElement().querySelector(".catalog__button--buy").addEventListener("click", this._addClickHandler);
    }
  }]);

  return CatalogItem;
}(_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/view/catalog-list.js":
/*!*********************************!*\
  !*** ./js/view/catalog-list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogList)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./js/view/abstract.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var createCatalogListElement = function createCatalogListElement() {
  return "<ul class=\"catalog__list list\"></ul>";
};

var CatalogList = /*#__PURE__*/function (_AbstractView) {
  _inherits(CatalogList, _AbstractView);

  var _super = _createSuper(CatalogList);

  function CatalogList() {
    _classCallCheck(this, CatalogList);

    return _super.apply(this, arguments);
  }

  _createClass(CatalogList, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createCatalogListElement();
    }
  }]);

  return CatalogList;
}(_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/view/catalog-pagination.js":
/*!***************************************!*\
  !*** ./js/view/catalog-pagination.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogPagination)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./js/view/abstract.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var createCatalogPaginationElement = function createCatalogPaginationElement(goodsCount, goodsCountPerStep, paginationStep) {
  var paginationCount = Math.ceil(goodsCount / goodsCountPerStep);
  var paginationRange = 4;

  var renderPagination = function renderPagination() {
    var paginationItems = [];
    var temp = "";

    for (var i = 1; i <= paginationCount; i++) {
      temp = "<li class=\"pagination__item ".concat(i === paginationStep ? "pagination__item--current" : "", "\"><a>").concat(i, "</a></li>");
      paginationItems.push(temp);
    }

    if (paginationRange >= paginationCount) {
      return paginationItems.slice(0, paginationCount).join("");
    }

    if (paginationRange < paginationCount) {
      var paginationDots = ["<li class=\"pagination__item\"><a>...</a></li>"];
      var count = paginationStep - 1;

      if (paginationStep < 2) {
        paginationItems = [].concat(_toConsumableArray(paginationItems.slice(0, paginationStep + 1)), [paginationDots], _toConsumableArray(paginationItems.slice(paginationCount - 1, paginationCount))).join("");
        return paginationItems;
      }

      if (paginationStep === 2) {
        paginationItems = [].concat(_toConsumableArray(paginationItems.slice(count - 1, paginationStep)), [paginationDots], _toConsumableArray(paginationItems.slice(paginationCount - 1, paginationCount))).join("");
        return paginationItems;
      }

      if (paginationCount - paginationStep < paginationRange - 1) {
        paginationItems = _toConsumableArray(paginationItems.slice(paginationCount - paginationRange, paginationCount)).join("");
        return paginationItems;
      }

      paginationItems = [].concat(_toConsumableArray(paginationItems.slice(count - 1, paginationStep)), [paginationDots], _toConsumableArray(paginationItems.slice(paginationCount - 1, paginationCount))).join("");
      return paginationItems;
    }

    return paginationItems.join("");
  };

  return "<ul class=\"catalog__pagination pagination\">\n    <li class=\"pagination__item pagination__item--button pagination__item--button-previous\">\n      <a href=\"#\">\u041D\u0430\u0437\u0430\u0434</a>\n    </li>\n    ".concat(renderPagination(), "\n    <li class=\"pagination__item pagination__item--button pagination__item--button-next\">\n      <a href=\"#\">\u0414\u0430\u043B\u0435\u0435</a>\n    </li>\n  </ul>");
};

var CatalogPagination = /*#__PURE__*/function (_AbstractView) {
  _inherits(CatalogPagination, _AbstractView);

  var _super = _createSuper(CatalogPagination);

  function CatalogPagination(goodsCount, goodsCountPerStep, paginationStep) {
    var _this;

    _classCallCheck(this, CatalogPagination);

    _this = _super.call(this);
    _this._goodsCount = goodsCount;
    _this._goodsCountPerStep = goodsCountPerStep;
    _this._paginationStep = paginationStep;
    _this._nextClickHandler = _this._nextClickHandler.bind(_assertThisInitialized(_this));
    _this._previousClickHandler = _this._previousClickHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CatalogPagination, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createCatalogPaginationElement(this._goodsCount, this._goodsCountPerStep, this._paginationStep);
    }
  }, {
    key: "_nextClickHandler",
    value: function _nextClickHandler(evt) {
      evt.preventDefault();

      this._callback.nextClick();
    }
  }, {
    key: "_previousClickHandler",
    value: function _previousClickHandler(evt) {
      evt.preventDefault();

      this._callback.previousClick();
    }
  }, {
    key: "setNextClickHandler",
    value: function setNextClickHandler(callback) {
      this._callback.nextClick = callback;
      this.getElement().querySelector(".pagination__item--button-next").addEventListener("click", this._nextClickHandler);
    }
  }, {
    key: "setPreviousClickHandler",
    value: function setPreviousClickHandler(callback) {
      this._callback.previousClick = callback;
      this.getElement().querySelector(".pagination__item--button-previous").addEventListener("click", this._previousClickHandler);
    }
  }]);

  return CatalogPagination;
}(_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/view/catalog-popUp-add.js":
/*!**************************************!*\
  !*** ./js/view/catalog-popUp-add.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogPopUpAdd)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./js/view/abstract.js");
/* harmony import */ var _utils_good_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/good.js */ "./js/utils/good.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var createCatalogPopUpAddElement = function createCatalogPopUpAddElement(data) {
  var name = data.name,
      identiferNumber = data.identiferNumber,
      stringAmount = data.stringAmount,
      price = data.price,
      type = data.type;
  return "<section class=\"modal\">\n    <div class=\"overlay\">\n      <div class=\"modal__popup\">\n        <h2 class=\"modal__title\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</h2>\n\n        <div class=\"modal__content\">\n          <div class=\"modal__image-container\">\n            <picture>\n              <source type=\"image/webp\" srcset=\"img/guitar-".concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@1x.webp 1x, img/guitar-").concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@2x.webp 2x\">\n              <!-- 1\u0445: 68px; 2x: 136px -->\n              <img src=\"img/guitar-").concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@1x.png\" srcset=\"img/guitar-").concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@1x.png 1x, img/guitar-").concat((0,_utils_good_js__WEBPACK_IMPORTED_MODULE_1__.getGuitarType)(type), "@2x.png 2x\" width=\"68\" height=\"190\" alt=\"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430\">\n            </picture>\n          </div>\n          <div class=\"modal__content-container\">\n            <ul class=\"modal__description-list\">\n              <li class=\"modal__name\">\u0413\u0438\u0442\u0430\u0440\u0430 ").concat(name, "</li>\n              <li class=\"modal__identifer-number\">\u0410\u0440\u0442\u0438\u043A\u0443\u043B: ").concat(identiferNumber, "</li>\n              <li class=\"modal__type\">\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430, ").concat(stringAmount, " \u0441\u0442\u0440\u0443\u043D\u043D\u0430\u044F </li>\n            </ul>\n            <div class=\"modal__price\">\u0426\u0435\u043D\u0430: ").concat(price, " \u20BD</div>\n          </div>\n          <button class=\"modal__button\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n          <button class=\"modal__close\" type=\"button\">\n            <span class=\"visually-hidden\">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </section>");
};

var CatalogPopUpAdd = /*#__PURE__*/function (_AbstractView) {
  _inherits(CatalogPopUpAdd, _AbstractView);

  var _super = _createSuper(CatalogPopUpAdd);

  function CatalogPopUpAdd(data) {
    var _this;

    _classCallCheck(this, CatalogPopUpAdd);

    _this = _super.call(this);
    _this._data = data;
    _this._addClickHandler = _this._addClickHandler.bind(_assertThisInitialized(_this));
    _this._closeClickHandler = _this._closeClickHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CatalogPopUpAdd, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createCatalogPopUpAddElement(this._data);
    }
  }, {
    key: "_addClickHandler",
    value: function _addClickHandler(evt) {
      evt.preventDefault();

      this._callback.addClick(this._data);
    }
  }, {
    key: "_closeClickHandler",
    value: function _closeClickHandler(evt) {
      evt.preventDefault();

      this._callback.closeClick();
    }
  }, {
    key: "setAddClickHandler",
    value: function setAddClickHandler(callback) {
      this._callback.addClick = callback;
      this.getElement().querySelector(".modal__button").addEventListener("click", this._addClickHandler);
    }
  }, {
    key: "setCloseClickHandler",
    value: function setCloseClickHandler(callback) {
      this._callback.closeClick = callback;
      this.getElement().querySelector(".modal__close").addEventListener("click", this._closeClickHandler);
    }
  }]);

  return CatalogPopUpAdd;
}(_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/view/catalog-popUp-success.js":
/*!******************************************!*\
  !*** ./js/view/catalog-popUp-success.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogPopUpSuccess)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./js/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./js/const.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var createCatalogPopUpSuccessElement = function createCatalogPopUpSuccessElement() {
  return "<section class=\"modal\">\n  <div class=\"overlay\">\n    <div class=\"modal__popup\">\n      <h2 class=\"modal__title\">\u0422\u043E\u0432\u0430\u0440 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</h2>\n\n      <div class=\"modal__content\">\n        <div class=\"modal__buttons-wrapper\">\n          <button class=\"modal__button modal__button--to-basket\" data-menu-type=\"".concat(_const_js__WEBPACK_IMPORTED_MODULE_1__.MenuItem.BASKET, "\">\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n          <button class=\"modal__button modal__button--to-shopping\">\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438</button>\n        </div>\n        <button class=\"modal__close\" type=\"button\">\n          <span class=\"visually-hidden\">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</span>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>");
};

var CatalogPopUpSuccess = /*#__PURE__*/function (_AbstractView) {
  _inherits(CatalogPopUpSuccess, _AbstractView);

  var _super = _createSuper(CatalogPopUpSuccess);

  function CatalogPopUpSuccess() {
    var _this;

    _classCallCheck(this, CatalogPopUpSuccess);

    _this = _super.call(this);
    _this._toBasketClickHandler = _this._toBasketClickHandler.bind(_assertThisInitialized(_this));
    _this._toShoppingClickHandler = _this._toShoppingClickHandler.bind(_assertThisInitialized(_this));
    _this._closeClickHandler = _this._closeClickHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CatalogPopUpSuccess, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createCatalogPopUpSuccessElement();
    }
  }, {
    key: "_toBasketClickHandler",
    value: function _toBasketClickHandler(evt) {
      evt.preventDefault();

      this._callback.toBasketClick(evt.target.dataset.menuType);
    }
  }, {
    key: "_toShoppingClickHandler",
    value: function _toShoppingClickHandler(evt) {
      evt.preventDefault();

      this._callback.toShoppingClick();
    }
  }, {
    key: "_closeClickHandler",
    value: function _closeClickHandler(evt) {
      evt.preventDefault();

      this._callback.closeClick();
    }
  }, {
    key: "setToBasketClickHandler",
    value: function setToBasketClickHandler(callback) {
      this._callback.toBasketClick = callback;
      this.getElement().querySelector(".modal__button--to-basket").addEventListener("click", this._toBasketClickHandler);
    }
  }, {
    key: "setToShoppingClickHandler",
    value: function setToShoppingClickHandler(callback) {
      this._callback.toShoppingClick = callback;
      this.getElement().querySelector(".modal__button--to-shopping").addEventListener("click", this._toShoppingClickHandler);
    }
  }, {
    key: "setCloseClickHandler",
    value: function setCloseClickHandler(callback) {
      this._callback.closeClick = callback;
      this.getElement().querySelector(".modal__close").addEventListener("click", this._closeClickHandler);
    }
  }]);

  return CatalogPopUpSuccess;
}(_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/view/catalog-section-wrapper.js":
/*!********************************************!*\
  !*** ./js/view/catalog-section-wrapper.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogSectionWrapper)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./js/view/abstract.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var createCatalogSectionWrapperElement = function createCatalogSectionWrapperElement() {
  return "<div class=\"catalog__content-wrapper\">\n    </div>";
};

var CatalogSectionWrapper = /*#__PURE__*/function (_AbstractView) {
  _inherits(CatalogSectionWrapper, _AbstractView);

  var _super = _createSuper(CatalogSectionWrapper);

  function CatalogSectionWrapper() {
    _classCallCheck(this, CatalogSectionWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(CatalogSectionWrapper, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createCatalogSectionWrapperElement();
    }
  }]);

  return CatalogSectionWrapper;
}(_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/view/catalog-section.js":
/*!************************************!*\
  !*** ./js/view/catalog-section.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogSection)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./js/view/abstract.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var createCatalogSectionElement = function createCatalogSectionElement() {
  return "<section class=\"catalog\"></section>";
};

var CatalogSection = /*#__PURE__*/function (_AbstractView) {
  _inherits(CatalogSection, _AbstractView);

  var _super = _createSuper(CatalogSection);

  function CatalogSection() {
    _classCallCheck(this, CatalogSection);

    return _super.apply(this, arguments);
  }

  _createClass(CatalogSection, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createCatalogSectionElement();
    }
  }]);

  return CatalogSection;
}(_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/view/catalog-sort.js":
/*!*********************************!*\
  !*** ./js/view/catalog-sort.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogSort)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./js/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./js/const.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var createCatalogSortElement = function createCatalogSortElement(currentSortByCategoryType, currentSortByPriorityType) {
  return "<div class=\"catalog__sort-wrapper\">\n      <span>\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C:</span>\n      <ul class=\"catalog__sort sort\">\n        <li class=\"sort__item ".concat(currentSortByCategoryType === _const_js__WEBPACK_IMPORTED_MODULE_1__.SortByCategoryType.PRICE ? "sort__item--active" : "", "\">\n          <a\n            href=\"#\"\n            data-sort-by-category=\"").concat(_const_js__WEBPACK_IMPORTED_MODULE_1__.SortByCategoryType.PRICE, "\">\u043F\u043E \u0446\u0435\u043D\u0435\n          </a>\n        </li>\n        <li class=\"sort__item ").concat(currentSortByCategoryType === _const_js__WEBPACK_IMPORTED_MODULE_1__.SortByCategoryType.POPULARITY ? "sort__item--active" : "", "\">\n          <a\n            href=\"#\"\n            data-sort-by-category=\"").concat(_const_js__WEBPACK_IMPORTED_MODULE_1__.SortByCategoryType.POPULARITY, "\">\u043F\u043E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0438\n          </a>\n        </li>\n      </ul>\n      <div class=\"catalog__sort-buttons\">\n        <a href=\"#\"\n          class=\"sort-button sort-button--up ").concat(currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_1__.SortByPriorityType.UP ? "sort-button--active" : "", "\"\n          data-sort-by-priority=\"").concat(_const_js__WEBPACK_IMPORTED_MODULE_1__.SortByPriorityType.UP, "\">\n            <span class=\"visually-hidden\">\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u044E</span>\n            <svg width=\"22\" height=\"22\">\n              <use xlink:href=\"img/sprite/sprite.svg#sprite-icon_arrow-up\"></use>\n            </svg>\n        </a>\n        <a href=\"#\"\n          class=\"sort-button sort-button--down ").concat(currentSortByPriorityType === _const_js__WEBPACK_IMPORTED_MODULE_1__.SortByPriorityType.DOWN ? "sort-button--active" : "", "\"\n          data-sort-by-priority=\"").concat(_const_js__WEBPACK_IMPORTED_MODULE_1__.SortByPriorityType.DOWN, "\">\n          <span class=\"visually-hidden\">\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0443\u0431\u044B\u0432\u0430\u043D\u0438\u044E</span>\n          <svg width=\"22\" height=\"22\">\n            <use xlink:href=\"img/sprite/sprite.svg#sprite-icon_arrow-up\"></use>\n          </svg>\n        </a>\n      </div>\n    </div>");
};

var CatalogSort = /*#__PURE__*/function (_AbstractView) {
  _inherits(CatalogSort, _AbstractView);

  var _super = _createSuper(CatalogSort);

  function CatalogSort(sortByCategory, sortByPriority) {
    var _this;

    _classCallCheck(this, CatalogSort);

    _this = _super.call(this);
    _this._currentSortByCategory = sortByCategory;
    _this._currentSortByPriority = sortByPriority;
    _this._sortByCategoryChangeHandler = _this._sortByCategoryChangeHandler.bind(_assertThisInitialized(_this));
    _this._sortByPriorityChangeHandler = _this._sortByPriorityChangeHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CatalogSort, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createCatalogSortElement(this._currentSortByCategory, this._currentSortByPriority);
    }
  }, {
    key: "_sortByCategoryChangeHandler",
    value: function _sortByCategoryChangeHandler(evt) {
      evt.preventDefault();

      this._callback.sortByCategoryChange(evt.target.dataset.sortByCategory);
    }
  }, {
    key: "_sortByPriorityChangeHandler",
    value: function _sortByPriorityChangeHandler(evt) {
      evt.preventDefault();

      this._callback.sortByPriorityChange(evt.target.parentNode.dataset.sortByPriority);
    }
  }, {
    key: "setSortByCategoryChangeHandler",
    value: function setSortByCategoryChangeHandler(callback) {
      this._callback.sortByCategoryChange = callback;
      this.getElement().querySelector(".catalog__sort").addEventListener("click", this._sortByCategoryChangeHandler);
    }
  }, {
    key: "setSortByPriorityChangeHandler",
    value: function setSortByPriorityChangeHandler(callback) {
      this._callback.sortByPriorityChange = callback;
      this.getElement().querySelector(".catalog__sort-buttons").addEventListener("click", this._sortByPriorityChangeHandler, true);
    }
  }]);

  return CatalogSort;
}(_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/view/filters.js":
/*!****************************!*\
  !*** ./js/view/filters.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Filters)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./js/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./js/const.js");
/* harmony import */ var _utils_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/filter.js */ "./js/utils/filter.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var createFiltersElement = function createFiltersElement(currentFilter, goods) {
  var _currentFilter$price = _slicedToArray(currentFilter.price, 2),
      currentFrom = _currentFilter$price[0],
      currentTo = _currentFilter$price[1];

  var filteredGuitarsByType = {};
  var stringAmountAvailableList = []; // let guitarAmountAvailableList = [];
  // let pricesInGoods = [];

  if (currentFilter.type.length === 0) {
    filteredGuitarsByType = goods.filter(function (item) {
      return (0,_utils_filter_js__WEBPACK_IMPORTED_MODULE_2__.filteredGoodsByPrice)(item.type, currentFilter.type);
    });
    stringAmountAvailableList = Array.from(new Set(filteredGuitarsByType.map(function (item) {
      return item.stringAmount;
    })));
  }

  filteredGuitarsByType = currentFilter.type;
  var guitarKeys = Object.keys(_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType);
  var stringKeys = Object.keys(_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterStringAmount);
  var typeGuitarKeys = [];
  var typeGuitarValues = [];
  var typeStringsValues = []; // pricesInGoods = goods
  //     .map((item) => item.price);
  // const minPriceInGoods = Math.min(...pricesInGoods);
  // const maxPriceInGoods = Math.max(...pricesInGoods);
  // if (currentFilter.price.length === 0) {
  //   currentFrom = minPriceInGoods;
  //   currentTo = maxPriceInGoods;
  // }
  // if (currentFrom > currentTo) {
  //   if (currentFrom > maxPriceInGoods) {
  //     console.log(`object`);
  //     currentTo = maxPriceInGoods;
  //   } else {
  //     console.log(`object`);
  //     currentFrom = currentTo;
  //   }
  // }
  // if (currentFrom < minPriceInGoods) {
  //   currentFrom = minPriceInGoods;
  // }
  // if (currentTo < currentFrom) {
  //   if (currentTo < minPriceInGoods) {
  //     currentTo = minPriceInGoods;
  //     console.log(`object`);
  //   } else {
  //     currentTo = currentFrom;
  //   }
  // }
  // const getCurrentFrom = (from) => {
  // if (currentFilter.price.length === 0) {
  //   console.log(`1`);
  //   from = minPriceInGoods;
  //   return from;
  // }
  //   if (currentFilter.price.length === 0 || from < minPriceInGoods || Number.isNaN(from)) {
  //     from = minPriceInGoods;
  //     return from;
  //   }
  //   if (from > currentTo) {
  //     if (from > maxPriceInGoods) {
  //       currentTo = maxPriceInGoods;
  //     } else {
  //       from = currentTo;
  //     }
  //   }
  //   return from;
  // };
  // console.log(getCurrentFrom(currentFrom));
  // console.log(currentFrom);
  // console.log(currentTo);
  // if (currentFrom < minPriceInGoods || Number.isNaN(currentFrom)) {
  //   currentFrom = minPriceInGoods;
  // }
  // if (currentTo > maxPriceInGoods || Number.isNaN(currentTo)) {
  //   currentTo = maxPriceInGoods;
  // }
  // guitarAmountAvailableList = Array.from(new Set(goods
  //     .map((item) => item.type)));
  // stringAmountAvailableList = Array.from(new Set(goods
  //     .map((item) => item.stringAmount)));

  guitarKeys.filter(function (key) {
    return currentFilter.type.forEach(function (type) {
      if (type.includes(_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType[key])) {
        return typeGuitarKeys.push(key);
      } else {
        return false;
      }
    });
  });
  guitarKeys.filter(function (key) {
    return currentFilter.type.forEach(function (type) {
      if (type.includes(_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType[key])) {
        return typeGuitarValues.push(_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType[key]);
      } else {
        return false;
      }
    });
  });
  stringKeys.filter(function (key) {
    return currentFilter.stringAmount.forEach(function (type) {
      if (_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterStringAmount[key] === type) {
        return typeStringsValues.push(_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterStringAmount[key]);
      } else {
        return false;
      }
    });
  });
  typeGuitarKeys.forEach(function (item) {
    var _stringAmountAvailabl;

    (_stringAmountAvailabl = stringAmountAvailableList).push.apply(_stringAmountAvailabl, _toConsumableArray(_const_js__WEBPACK_IMPORTED_MODULE_1__.StringsAmountByType[item]));

    return stringAmountAvailableList;
  });
  stringAmountAvailableList = Array.from(new Set(stringAmountAvailableList));

  var isAvailable = function isAvailable(availableList, data) {
    return availableList.includes(data);
  }; // value="${currentFrom.toLocaleString(`ru-RU`)}"


  return "<div class=\"catalog__filters-column\">\n  <h2>\u0424\u0438\u043B\u044C\u0442\u0440</h2>\n  <form class=\"catalog__filters-form\" action=\"#\" method=\"GET\">\n      <fieldset class=\"catalog__filters-price-change\">\n        <h3>\u0426\u0435\u043D\u0430, \u20BD</h3>\n        <div class=\"catalog__filters-price-wrapper\">\n          <input\n              type=\"text\"\n              name=\"filters-form-price-from\"\n              id=\"filters-form-price-from\"\n              placeholder=\"".concat(currentFrom.toLocaleString("ru-RU"), "\"\n              value=\"").concat(currentFrom.toLocaleString("ru-RU"), "\"\n              min=\"0\"\n              max=\"1000000\"\n              >\n          <label for=\"filters-form-price-from\" class=\"visually-hidden\">\u0426\u0435\u043D\u0430 \u043E\u0442</label>\n          <input\n              type=\"text\"\n              name=\"filters-form-price-to\"\n              id=\"filters-form-price-to\"\n              placeholder=\"").concat(currentTo.toLocaleString("ru-RU"), "\"\n              value=\"").concat(currentTo.toLocaleString("ru-RU"), "\"\n              min=\"0\"\n              max=\"1000000\"\n              >\n          <label for=\"filters-form-price-to\" class=\"visually-hidden\">\u0426\u0435\u043D\u0430 \u0434\u043E</label>\n        </div>\n      </fieldset>\n      <fieldset class=\"catalog__filters-type-guitar\">\n        <h3>\u0422\u0438\u043F \u0433\u0438\u0442\u0430\u0440</h3>\n        <div class=\"catalog__filters-type-wrapper\">\n          <div class=\"catalog__filters-type-content-wrapper\">\n            <input\n                class=\"visually-hidden\"\n                type=\"checkbox\"\n                name=\"filters-form-type\"\n                id=\"filters-form-type-value-1\"\n                data-filter-type-guitar=\"").concat(_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType.ACOUSTIC, "\"\n                ").concat(isAvailable(typeGuitarValues, _const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType.ACOUSTIC) ? "checked" : "", "\n                >\n            <label for=\"filters-form-type-value-1\">\u0410\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0433\u0438\u0442\u0430\u0440\u044B</label>\n          </div>\n          <div class=\"catalog__filters-type-content-wrapper\">\n            <input\n                class=\"visually-hidden\"\n                type=\"checkbox\"\n                name=\"filters-form-type\"\n                id=\"filters-form-type-value-2\"\n                data-filter-type-guitar=\"").concat(_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType.ELECTRIC, "\"\n                ").concat(isAvailable(typeGuitarValues, _const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType.ELECTRIC) ? "checked" : "", "\n                >\n            <label for=\"filters-form-type-value-2\">\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u044B</label>\n          </div>\n          <div class=\"catalog__filters-type-content-wrapper\">\n            <input\n                class=\"visually-hidden\"\n                type=\"checkbox\"\n                name=\"filters-form-type\"\n                id=\"filters-form-type-value-3\"\n                data-filter-type-guitar=\"").concat(_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType.UKULELE, "\"\n                ").concat(isAvailable(typeGuitarValues, _const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType.UKULELE) ? "checked" : "", "\n                >\n            <label for=\"filters-form-type-value-3\">\u0423\u043A\u0443\u043B\u0435\u043B\u0435</label>\n          </div>\n        </div>\n      </fieldset>\n      <fieldset class=\"catalog__filters-string-amount\">\n        <h3>\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u0440\u0443\u043D</h3>\n        <div class=\"catalog__filters-amount-wrapper\">\n          <input\n              class=\"visually-hidden\"\n              type=\"checkbox\"\n              name=\"filters-form-amount\"\n              id=\"4\"\n              data-filter-amount-strings=\"").concat(_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterStringAmount.FOUR, "\"\n              ").concat(isAvailable(typeStringsValues, _const_js__WEBPACK_IMPORTED_MODULE_1__.FilterStringAmount.FOUR) ? "checked" : "", "\n              ").concat(isAvailable(stringAmountAvailableList, _const_js__WEBPACK_IMPORTED_MODULE_1__.FilterStringAmount.FOUR) ? "" : "disabled", "\n              >\n          <label for=\"4\">4</label>\n          <input\n              class=\"visually-hidden\"\n              type=\"checkbox\"\n              name=\"filters-form-amount\"\n              id=\"6\"\n              data-filter-amount-strings=\"").concat(_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterStringAmount.SIX, "\"\n              ").concat(isAvailable(typeStringsValues, _const_js__WEBPACK_IMPORTED_MODULE_1__.FilterStringAmount.SIX) ? "checked" : "", "\n              ").concat(isAvailable(stringAmountAvailableList, _const_js__WEBPACK_IMPORTED_MODULE_1__.FilterStringAmount.SIX) ? "" : "disabled", "\n              >\n          <label for=\"6\">6</label>\n          <input\n              class=\"visually-hidden\"\n              type=\"checkbox\"\n              name=\"filters-form-amount\"\n              id=\"7\"\n              data-filter-amount-strings=\"").concat(_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterStringAmount.SEVEN, "\"\n              ").concat(isAvailable(typeStringsValues, _const_js__WEBPACK_IMPORTED_MODULE_1__.FilterStringAmount.SEVEN) ? "checked" : "", "\n              ").concat(isAvailable(stringAmountAvailableList, _const_js__WEBPACK_IMPORTED_MODULE_1__.FilterStringAmount.SEVEN) ? "" : "disabled", "\n              >\n          <label for=\"7\">7</label>\n          <input\n              class=\"visually-hidden\"\n              type=\"checkbox\"\n              name=\"filters-form-amount\"\n              id=\"12\"\n              data-filter-amount-strings=\"").concat(_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterStringAmount.TWELVE, "\"\n              ").concat(isAvailable(typeStringsValues, _const_js__WEBPACK_IMPORTED_MODULE_1__.FilterStringAmount.TWELVE) ? "checked" : "", "\n              ").concat(isAvailable(stringAmountAvailableList, _const_js__WEBPACK_IMPORTED_MODULE_1__.FilterStringAmount.TWELVE) ? "" : "disabled", "\n              >\n          <label for=\"12\">12</label>\n        </div>\n      </fieldset>\n    </form></div>");
};

var Filters = /*#__PURE__*/function (_AbstractView) {
  _inherits(Filters, _AbstractView);

  var _super = _createSuper(Filters);

  function Filters(currentFilter, goods) {
    var _this;

    _classCallCheck(this, Filters);

    _this = _super.call(this);
    _this._currentFilter = currentFilter;
    _this._goods = goods;
    _this._filterPriceChangeHandler = _this._filterPriceChangeHandler.bind(_assertThisInitialized(_this));
    _this._filterGuitarTypeChangeHandler = _this._filterGuitarTypeChangeHandler.bind(_assertThisInitialized(_this));
    _this._filterStringAmountChangeHandler = _this._filterStringAmountChangeHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Filters, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createFiltersElement(this._currentFilter, this._goods);
    }
  }, {
    key: "_filterGuitarTypeChangeHandler",
    value: function _filterGuitarTypeChangeHandler(evt) {
      evt.preventDefault();
      var optionsGuitarTypeArray = [];
      document.querySelectorAll("input[type='checkbox']").forEach(function (checkbox) {
        return checkbox.checked === true && !checkbox.dataset.filterAmountStrings ? optionsGuitarTypeArray.push(checkbox.dataset.filterTypeGuitar) : null;
      });

      this._callback.filterTypeChange(optionsGuitarTypeArray);
    }
  }, {
    key: "_filterStringAmountChangeHandler",
    value: function _filterStringAmountChangeHandler(evt) {
      evt.preventDefault();
      var optionsStringAmountArray = [];
      document.querySelectorAll("input[type='checkbox']").forEach(function (checkbox) {
        return checkbox.checked === true && !checkbox.dataset.filterTypeGuitar ? optionsStringAmountArray.push(checkbox.dataset.filterAmountStrings) : null;
      });

      this._callback.filterStringChange(optionsStringAmountArray);
    }
  }, {
    key: "_filterPriceChangeHandler",
    value: function _filterPriceChangeHandler(evt) {
      evt.preventDefault();
      var value = parseInt(String(evt.target.value).replace(/\s+/g, ""), 10);

      if (value <= 0 || Number.isNaN(Number(value)) || value === "") {
        return this._callback.filterPriceChange(this._currentFilter.price);
      }

      var optionsPriceChangeArray = [];
      document.querySelectorAll(".catalog__filters-price-wrapper input[type='text']").forEach(function (input) {
        return optionsPriceChangeArray.push(input.value);
      });
      return this._callback.filterPriceChange(optionsPriceChangeArray);
    }
  }, {
    key: "setFilterTypeChangeHandler",
    value: function setFilterTypeChangeHandler(callback) {
      this._callback.filterTypeChange = callback;
      this.getElement().querySelector(".catalog__filters-type-guitar").addEventListener("change", this._filterGuitarTypeChangeHandler);
    }
  }, {
    key: "setFilterStringChangeHandler",
    value: function setFilterStringChangeHandler(callback) {
      this._callback.filterStringChange = callback;
      this.getElement().querySelector(".catalog__filters-string-amount").addEventListener("change", this._filterStringAmountChangeHandler);
    }
  }, {
    key: "setFilterPriceChangeHandler",
    value: function setFilterPriceChangeHandler(callback) {
      this._callback.filterPriceChange = callback;
      this.getElement().querySelector(".catalog__filters-price-change").addEventListener("change", this._filterPriceChangeHandler);
    }
  }]);

  return Filters;
}(_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/view/site-menu.js":
/*!******************************!*\
  !*** ./js/view/site-menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteMenu)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./js/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./js/const.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var createSiteMenuTemplate = function createSiteMenuTemplate(basketModel) {
  var goodsInBasket = basketModel;
  var goodsCount = 0;

  if (goodsInBasket.length !== 0) {
    goodsCount = goodsInBasket.map(function (good) {
      return good.count;
    }).reduce(function (total, count) {
      return total + count;
    });
  }

  return "<nav class=\"main-nav\">\n    <div class=\"container\">\n      <div class=\"main-nav__wrapper\">\n        <a class=\"main-nav__logo\">\n          <span class=\"visually-hidden\">\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u0433\u0438\u0442\u0430\u0440</span>\n          <svg width=\"67\" height=\"70\">\n            <use xlink:href=\"img/sprite/sprite.svg#sprite-logo\"></use>\n          </svg>\n        </a>\n        <ul class=\"main-nav__list site-list\">\n          <li class=\"site-list__item\">\n            <a href=\"#\" data-menu-type=\"".concat(_const_js__WEBPACK_IMPORTED_MODULE_1__.MenuItem.CATALOG, "\">\u041A\u0430\u0442\u0430\u043B\u043E\u0433</a>\n          </li>\n          <li class=\"site-list__item\">\n            <a href=\"#\">\u0413\u0434\u0435 \u043A\u0443\u043F\u0438\u0442\u044C?</a>\n          </li>\n          <li class=\"site-list__item\">\n            <a href=\"#\">\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438</a>\n          </li>\n          <li class=\"site-list__item\">\n            <a href=\"#\">C\u0435\u0440\u0432\u0438\u0441-\u0446\u0435\u043D\u0442\u0440\u044B</a>\n          </li>\n        </ul>\n        <ul class=\"main-nav__list user-list\">\n          <li class=\"user-list__item user-list__item--location\">\n            <a href=\"#\">\n              <span class=\"visually-hidden\">\u041B\u043E\u043A\u0430\u0446\u0438\u044F</span>\n              <svg width=\"14\" height=\"17\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon_location\"></use>\n              </svg>\n            </a>\n          </li>\n          <li class=\"user-list__item user-list__item--search\">\n            <a href=\"#\">\n              <span class=\"visually-hidden\">\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0430\u0439\u0442\u0443</span>\n              <svg width=\"14\" height=\"14\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon_search\"></use>\n              </svg>\n            </a>\n          </li>\n          <li class=\"user-list__item user-list__item--basket\">\n            <a href=\"#\" data-menu-type=\"").concat(_const_js__WEBPACK_IMPORTED_MODULE_1__.MenuItem.BASKET, "\">\n              <span class=\"visually-hidden\">\u041A\u043E\u0440\u0437\u0438\u043D\u0430</span>\n              <svg width=\"16\" height=\"18\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon_basket\"></use>\n              </svg>\n            </a>\n            <span class=\"\" data-title=\"").concat(goodsInBasket.length === 0 ? "" : goodsCount, "\"></span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>");
};

var SiteMenu = /*#__PURE__*/function (_AbstractView) {
  _inherits(SiteMenu, _AbstractView);

  var _super = _createSuper(SiteMenu);

  function SiteMenu(basketModel) {
    var _this;

    _classCallCheck(this, SiteMenu);

    _this = _super.call(this);
    _this._basketModel = basketModel;
    _this._menuClickHandler = _this._menuClickHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SiteMenu, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createSiteMenuTemplate(this._basketModel);
    }
  }, {
    key: "_menuClickHandler",
    value: function _menuClickHandler(evt) {
      evt.preventDefault();

      if (evt.target.tagName !== "A") {
        return this._callback.menuClick(evt.target.parentNode.dataset.menuType);
      }

      return this._callback.menuClick(evt.target.dataset.menuType);
    }
  }, {
    key: "setMenuClickHandler",
    value: function setMenuClickHandler(callback) {
      this._callback.menuClick = callback;
      this.getElement().addEventListener("click", this._menuClickHandler);
    }
  }]);

  return SiteMenu;
}(_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./js/view/smart.js":
/*!**************************!*\
  !*** ./js/view/smart.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Smart)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./js/view/abstract.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Smart = /*#__PURE__*/function (_Abstract) {
  _inherits(Smart, _Abstract);

  var _super = _createSuper(Smart);

  function Smart() {
    var _this;

    _classCallCheck(this, Smart);

    _this = _super.call(this);
    _this._data = {};
    return _this;
  }

  _createClass(Smart, [{
    key: "updateData",
    value: function updateData(update, justDataUpdating) {
      if (!update) {
        return;
      }

      this._data = Object.assign({}, this._data, update);

      if (justDataUpdating) {
        return;
      }

      this.updateElement();
    }
  }, {
    key: "updateElement",
    value: function updateElement() {
      var prevElement = this.getElement();
      var parent = prevElement.parentElement;
      this.removeElement();
      var newElement = this.getElement();
      parent.replaceChild(newElement, prevElement);
      this.restoreHandlers();
    }
  }, {
    key: "restoreHandlers",
    value: function restoreHandlers() {
      throw new Error("Abstract method not implemented: resetHandlers");
    }
  }]);

  return Smart;
}(_abstract__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./assets/sass/main.scss":
/*!*******************************!*\
  !*** ./assets/sass/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n  <meta name=\"Description\" content=\"Интернет-магазин гитар Gitar Shop\">\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Магазин по продаже гитар \"Gitar Shop\"</title>\n</head>\n<body>\n  <div class=\"body-wrapper\">\n    <header class=\"page-header\">\n\n      <div class=\"container\">\n        <div class=\"page-header__image-wrapper\">\n          <picture>\n            <source type=\"image/webp\" srcset=\"img/image_guitar_header@1x.webp 1x, img/image_guitar_header@2x.webp 2x\">\n            <!-- 1х: 825px; 2x: 1650px -->\n            <img src=\"img/image_guitar_header@1x.png\" srcset=\"img/image_guitar_header@1x.png 1x, img/image_guitar_header@2x.png 2x\" width=\"825\" height=\"298\" alt=\"фоновое изображение\">\n          </picture>\n        </div>\n      </div>\n    </header>\n    <main class=\"page-main\">\n      <div class=\"container\">\n        <h1 class=\"visually-hidden\">Интернет-магазин гитар \"Gitar Shop\"</h1>\n\n        </div>\n    </main>\n    <footer class=\"page-footer\">\n      <div class=\"container\">\n        <div class=\"page-footer__image-wrapper\">\n          <picture>\n            <source type=\"image/webp\" srcset=\"img/image_guitar_footer@1x.webp 1x, img/image_guitar_footer@2x.webp 2x\">\n            <!-- 1х: 819px; 2x: 1638px -->\n            <img src=\"img/image_guitar_footer@1x.png\" srcset=\"img/image_guitar_footer@1x.png 1x, img/image_guitar_footer@2x.png 2x\" width=\"825\" height=\"298\" alt=\"фоновое изображение\">\n          </picture>\n        </div>\n      </div>\n      <div class=\"page-footer__content-wrapper\">\n        <div class=\"container\">\n          <div class=\"page-footer__wrapper\">\n            <div class=\"page-footer__column\">\n              <a class=\"page-footer__logo\">\n                <span class=\"visually-hidden\">Логотип магазина гитар</span>\n                <svg width=\"67\" height=\"70\">\n                  <use xlink:href=\"img/sprite/sprite.svg#sprite-logo\"></use>\n                </svg>\n              </a>\n              <ul class=\"page-footer__social social\">\n                <li class=\"social__item\">\n                  <a href=\"#\">\n                    <span class=\"visually-hidden\">facebook</span>\n                    <svg width=\"24\" height=\"24\">\n                      <use xlink:href=\"img/sprite/sprite.svg#sprite-icon_facebook\"></use>\n                    </svg>\n                  </a>\n                </li>\n                <li class=\"social__item\">\n                  <a href=\"#\">\n                    <span class=\"visually-hidden\">instagram</span>\n                    <svg width=\"24\" height=\"24\">\n                      <use xlink:href=\"img/sprite/sprite.svg#sprite-icon_instagram\"></use>\n                    </svg>\n                  </a>\n                </li>\n                <li class=\"social__item\">\n                  <a href=\"#\">\n                    <span class=\"visually-hidden\">twitter</span>\n                    <svg width=\"24\" height=\"24\">\n                      <use xlink:href=\"img/sprite/sprite.svg#sprite-icon_twitter\"></use>\n                    </svg>\n                  </a>\n                </li>\n              </ul>\n            </div>\n            <dl class=\"page-footer__links links\">\n              <div class=\"links__wrapper\">\n                <dt>О нас</dt>\n                <dd>\n                  <ul class=\"links__list links__list--about-us\">\n                    <li class=\"links__item\">\n                      <p>Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</p>\n                    </li>\n                    <li class=\"links__item\">\n                      <p>Все инструменты проверены, отстроены и доведены до идеала!</p>\n                    </li>\n                  </ul>\n                </dd>\n              </div>\n              <div class=\"links__wrapper\">\n                <dt>Каталог</dt>\n                <dd>\n                  <ul class=\"links__list links__list--catalog\">\n                    <li class=\"links__item\">\n                      <a href=\"#\">Акустические гитары</a>\n                    </li>\n                    <li class=\"links__item\">\n                      <a href=\"#\">Классические гитары</a>\n                    </li>\n                    <li class=\"links__item\">\n                      <a href=\"#\">Электрогитары</a>\n                    </li>\n                    <li class=\"links__item\">\n                      <a href=\"#\">Бас-гитары</a>\n                    </li>\n                    <li class=\"links__item\">\n                      <a href=\"#\">Укулеле</a>\n                    </li>\n                  </ul>\n                </dd>\n              </div>\n              <div class=\"links__wrapper\">\n                <dt>Информация</dt>\n                <dd>\n                  <ul class=\"links__list links__list--info\">\n                    <li class=\"links__item\">\n                      <a href=\"#\">Где купить?</a>\n                    </li>\n                    <li class=\"links__item\">\n                      <a href=\"#\">Блог</a>\n                    </li>\n                    <li class=\"links__item\">\n                      <a href=\"#\">Вопрос - ответ</a>\n                    </li>\n                    <li class=\"links__item\">\n                      <a href=\"#\">Возврат</a>\n                    </li>\n                    <li class=\"links__item\">\n                      <a href=\"#\">Сервис-центры</a>\n                    </li>\n                  </ul>\n                </dd>\n              </div>\n              <div class=\"links__wrapper\">\n                <dt>Контакты</dt>\n                <dd>\n                  <ul class=\"links__list links__list--kontakt\">\n                    <li class=\"links__item\">\n                      <p>г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.</p>\n                      <a href=\"tel:+88125005050\">8-812-500-50-50</a>\n                    </li>\n                    <li class=\"links__item\">\n                      <p>Режим работы:</p>\n                      <span>с 11:00 до 20:00,</span>\n                      <p>без выходных.</p>\n                    </li>\n                  </ul>\n                </dd>\n              </div>\n            </dl>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n\n</body>\n</html>\n");

/***/ }),

/***/ "./js/mock/goods.json":
/*!****************************!*\
  !*** ./js/mock/goods.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse("[{\"id\":1,\"identiferNumber\":\"SO757575\",\"name\":\"Честер Bass\",\"type\":\"электрогитара\",\"reviewAmount\":15,\"stringAmount\":7,\"price\":17500,\"starsCount\":3.2},{\"id\":2,\"identiferNumber\":\"TK129049\",\"name\":\"СURT Z300\",\"type\":\"электрогитара\",\"reviewAmount\":9,\"stringAmount\":7,\"price\":29500,\"starsCount\":4.5},{\"id\":3,\"identiferNumber\":\"RO111111\",\"name\":\"Roman LX\",\"type\":\"укулеле\",\"reviewAmount\":21,\"stringAmount\":4,\"price\":6800,\"starsCount\":5},{\"id\":4,\"identiferNumber\":\"TK436457\",\"name\":\"СURT T300\",\"type\":\"электрогитара\",\"reviewAmount\":15,\"stringAmount\":6,\"price\":30000,\"starsCount\":3},{\"id\":5,\"identiferNumber\":\"DI192138\",\"name\":\"Dania Super\",\"type\":\"акустическая гитара\",\"reviewAmount\":5,\"stringAmount\":7,\"price\":3500,\"starsCount\":4.5},{\"id\":6,\"identiferNumber\":\"SO934345\",\"name\":\"Честер WX \",\"type\":\"электрогитара\",\"reviewAmount\":17,\"stringAmount\":6,\"price\":15300,\"starsCount\":4.1},{\"id\":7,\"identiferNumber\":\"DI082347\",\"name\":\"Dania VX\",\"type\":\"укулеле\",\"reviewAmount\":5,\"stringAmount\":4,\"price\":2200,\"starsCount\":3.2},{\"id\":8,\"identiferNumber\":\"SO135646\",\"name\":\"Честер Plus \",\"type\":\"электрогитара\",\"reviewAmount\":27,\"stringAmount\":4,\"price\":30000,\"starsCount\":2.1},{\"id\":9,\"identiferNumber\":\"VO154751\",\"name\":\"Виолана 300\",\"type\":\"акустическая гитара\",\"reviewAmount\":3,\"stringAmount\":7,\"price\":1700,\"starsCount\":3.2},{\"id\":10,\"identiferNumber\":\"TK244556\",\"name\":\"СURT Clasic\",\"type\":\"электрогитара\",\"reviewAmount\":20,\"stringAmount\":4,\"price\":23000,\"starsCount\":4.5},{\"id\":11,\"identiferNumber\":\"TK134663\",\"name\":\"СURT Z250\",\"type\":\"электрогитара\",\"reviewAmount\":19,\"stringAmount\":4,\"price\":18700,\"starsCount\":5},{\"id\":12,\"identiferNumber\":\"SO123212\",\"name\":\"Честер 7X\",\"type\":\"электрогитара\",\"reviewAmount\":30,\"stringAmount\":7,\"price\":35000,\"starsCount\":3},{\"id\":13,\"identiferNumber\":\"SO123234\",\"name\":\"Честер 6V\",\"type\":\"электрогитара\",\"reviewAmount\":28,\"stringAmount\":6,\"price\":14900,\"starsCount\":4.5},{\"id\":14,\"identiferNumber\":\"VO519510\",\"name\":\"Виолана Mix\",\"type\":\"акустическая гитара\",\"reviewAmount\":7,\"stringAmount\":6,\"price\":7600,\"starsCount\":4.1},{\"id\":15,\"identiferNumber\":\"VO457369\",\"name\":\"Виолана 250x\",\"type\":\"акустическая гитара\",\"reviewAmount\":19,\"stringAmount\":6,\"price\":6500,\"starsCount\":3.2},{\"id\":16,\"identiferNumber\":\"FB625903\",\"name\":\"Фабио Лайт\",\"type\":\"акустическая гитара\",\"reviewAmount\":26,\"stringAmount\":7,\"price\":12000,\"starsCount\":2.1},{\"id\":17,\"identiferNumber\":\"FB576948\",\"name\":\"Фабио L100\",\"type\":\"акустическая гитара\",\"reviewAmount\":31,\"stringAmount\":7,\"price\":9900,\"starsCount\":3.2},{\"id\":18,\"identiferNumber\":\"LU012032\",\"name\":\"Liana Z200\",\"type\":\"акустическая гитара\",\"reviewAmount\":28,\"stringAmount\":12,\"price\":8900,\"starsCount\":4.5},{\"id\":19,\"identiferNumber\":\"LU546853\",\"name\":\"Liana Z100\",\"type\":\"акустическая гитара\",\"reviewAmount\":34,\"stringAmount\":12,\"price\":10500,\"starsCount\":5},{\"id\":20,\"identiferNumber\":\"LU458283\",\"name\":\"Liana Z300\",\"type\":\"акустическая гитара\",\"reviewAmount\":9,\"stringAmount\":6,\"price\":13300,\"starsCount\":3},{\"id\":21,\"identiferNumber\":\"RO324341\",\"name\":\"Roman RX\",\"type\":\"укулеле\",\"reviewAmount\":37,\"stringAmount\":4,\"price\":4800,\"starsCount\":4.5},{\"id\":22,\"identiferNumber\":\"RO214235\",\"name\":\"Roman TX\",\"type\":\"укулеле\",\"reviewAmount\":5,\"stringAmount\":4,\"price\":1900,\"starsCount\":4.1},{\"id\":23,\"identiferNumber\":\"DI132414\",\"name\":\"Dania U100\",\"type\":\"укулеле\",\"reviewAmount\":23,\"stringAmount\":4,\"price\":2500,\"starsCount\":3.2},{\"id\":24,\"identiferNumber\":\"DI934754\",\"name\":\"Dania WR\",\"type\":\"укулеле\",\"reviewAmount\":3,\"stringAmount\":4,\"price\":3800,\"starsCount\":2.1},{\"id\":25,\"identiferNumber\":\"DI034292\",\"name\":\"Dania LE\",\"type\":\"укулеле\",\"reviewAmount\":10,\"stringAmount\":4,\"price\":4100,\"starsCount\":3.2},{\"id\":26,\"identiferNumber\":\"MI193214\",\"name\":\"Mirana V10\",\"type\":\"укулеле\",\"reviewAmount\":14,\"stringAmount\":4,\"price\":2700,\"starsCount\":4.5},{\"id\":27,\"identiferNumber\":\"VO043244\",\"name\":\"Виолана Mini\",\"type\":\"укулеле\",\"reviewAmount\":29,\"stringAmount\":4,\"price\":6700,\"starsCount\":5}]");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["../node_modules/@babel/polyfill/lib/index.js","vendors"],
/******/ 			["./index.js","vendors"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=main.js.map