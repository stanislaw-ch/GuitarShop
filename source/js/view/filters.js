import AbstractView from "./abstract.js";
import {FilterType, FilterStringAmount} from "../const.js";

const createFiltersElement = (currentFilter, goods) => {
  let [currentFrom, currentTo] = currentFilter.price;
  // let filteredGuitarsByType = {};
  let stringAmountAvailableList = [];
  let guitarAmountAvailableList = [];
  let pricesInGoods = [];

  const guitarKeys = Object.keys(FilterType);
  const stringKeys = Object.keys(FilterStringAmount);

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

  guitarAmountAvailableList = Array.from(new Set(goods
      .map((item) => item.type)));

  stringAmountAvailableList = Array.from(new Set(goods
      .map((item) => item.stringAmount)));

  guitarKeys.filter((key) => (currentFilter.type.forEach((type) => {
    if (type.includes(FilterType[key])) {
      return typeGuitarKeys.push(key);
    } else {
      return false;
    }
  })));

  guitarKeys.filter((key) => (currentFilter.type.forEach((type) => {
    if (type.includes(FilterType[key])) {
      return typeGuitarValues.push(FilterType[key]);
    } else {
      return false;
    }
  })));

  stringKeys.filter((key) => (currentFilter.stringAmount.forEach((type) => {
    if (FilterStringAmount[key] === type) {
      return typeStringsValues.push(FilterStringAmount[key]);
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
           <label>
              <input
                  class="visually-hidden"
                  type="checkbox"
                  name="filters-form-type"
                  id="filters-form-type-value-1"
                  data-filter-type-guitar="${FilterType.ACOUSTIC}"
                  ${isStringsAvailable(typeGuitarValues, FilterType.ACOUSTIC) ? `checked` : ``}
                  ${isStringsAvailable(guitarAmountAvailableList, FilterType.ACOUSTIC) ? `` : `disabled`}
                  >
              <span>Акустические гитары</span>
           </label>
          </div>
          <div class="catalog__filters-type-content-wrapper">
            <label>
              <input
                  class="visually-hidden"
                  type="checkbox"
                  name="filters-form-type"
                  id="filters-form-type-value-2"
                  data-filter-type-guitar="${FilterType.ELECTRIC}"
                  ${isStringsAvailable(typeGuitarValues, FilterType.ELECTRIC) ? `checked` : ``}
                  ${isStringsAvailable(guitarAmountAvailableList, FilterType.ELECTRIC) ? `` : `disabled`}
                  >
              <span>Электрогитары</span>
            </label>
          </div>
          <div class="catalog__filters-type-content-wrapper">
            <label>
              <input
                  class="visually-hidden"
                  type="checkbox"
                  name="filters-form-type"
                  id="filters-form-type-value-3"
                  data-filter-type-guitar="${FilterType.UKULELE}"
                  ${isStringsAvailable(typeGuitarValues, FilterType.UKULELE) ? `checked` : ``}
                  ${isStringsAvailable(guitarAmountAvailableList, FilterType.UKULELE) ? `` : `disabled`}
                  >
              <span>Укулеле</span>
            </label>
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
                data-filter-amount-strings="${FilterStringAmount.FOUR}"
                ${isStringsAvailable(typeStringsValues, FilterStringAmount.FOUR) ? `checked` : ``}
                ${isStringsAvailable(stringAmountAvailableList, FilterStringAmount.FOUR) ? `` : `disabled`}
                >
            <span>4</span>
          </label>
          <label>
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-amount"
                id="6"
                data-filter-amount-strings="${FilterStringAmount.SIX}"
                ${isStringsAvailable(typeStringsValues, FilterStringAmount.SIX) ? `checked` : ``}
                ${isStringsAvailable(stringAmountAvailableList, FilterStringAmount.SIX) ? `` : `disabled`}
                >
            <span>6</span>
          </label>
          <label>
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-amount"
                id="7"
                data-filter-amount-strings="${FilterStringAmount.SEVEN}"
                ${isStringsAvailable(typeStringsValues, FilterStringAmount.SEVEN) ? `checked` : ``}
                ${isStringsAvailable(stringAmountAvailableList, FilterStringAmount.SEVEN) ? `` : `disabled`}
                >
            <span>7</span>
          </label>
          <label>
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-amount"
                id="12"
                data-filter-amount-strings="${FilterStringAmount.TWELVE}"
                ${isStringsAvailable(typeStringsValues, FilterStringAmount.TWELVE) ? `checked` : ``}
                ${isStringsAvailable(stringAmountAvailableList, FilterStringAmount.TWELVE) ? `` : `disabled`}
                >
            <span>12</span>
          </label>
        </div>
      </fieldset>
    </form></div>`);
};

export default class Filters extends AbstractView {
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
