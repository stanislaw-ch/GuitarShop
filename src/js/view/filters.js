import AbstractView from "./abstract.js";
import {FilterType, FilterStringAmount, StringsAmountByType} from "../const.js";
import {filteredGoodsByPrice} from "../utils/filter.js";

const createFiltersElement = (currentFilter, goods) => {
  let [currentFrom, currentTo] = currentFilter.price;
  let filteredGuitarsByType = {};
  let stringAmountAvailableList = [];
  // let guitarAmountAvailableList = [];
  // let pricesInGoods = [];

  if (currentFilter.type.length === 0) {
    filteredGuitarsByType = goods
        .filter((item) => filteredGoodsByPrice(item.type, currentFilter.type));

    stringAmountAvailableList = Array.from(new Set(filteredGuitarsByType
        .map((item) => item.stringAmount)));
  }

  filteredGuitarsByType = currentFilter.type;

  const guitarKeys = Object.keys(FilterType);
  const stringKeys = Object.keys(FilterStringAmount);

  let typeGuitarKeys = [];
  let typeGuitarValues = [];
  let typeStringsValues = [];

  // pricesInGoods = goods
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


  typeGuitarKeys.forEach((item) => {
    stringAmountAvailableList.push(...StringsAmountByType[item]);
    return stringAmountAvailableList;
  });

  stringAmountAvailableList = Array.from(new Set(stringAmountAvailableList));

  const isAvailable = (availableList, data) => {
    return availableList.includes(data);
  };
  // value="${currentFrom.toLocaleString(`ru-RU`)}"

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
                data-filter-type-guitar="${FilterType.ACOUSTIC}"
                ${isAvailable(typeGuitarValues, FilterType.ACOUSTIC) ? `checked` : ``}
                >
            <label for="filters-form-type-value-1">Акустические гитары</label>
          </div>
          <div class="catalog__filters-type-content-wrapper">
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-type"
                id="filters-form-type-value-2"
                data-filter-type-guitar="${FilterType.ELECTRIC}"
                ${isAvailable(typeGuitarValues, FilterType.ELECTRIC) ? `checked` : ``}
                >
            <label for="filters-form-type-value-2">Электрогитары</label>
          </div>
          <div class="catalog__filters-type-content-wrapper">
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-type"
                id="filters-form-type-value-3"
                data-filter-type-guitar="${FilterType.UKULELE}"
                ${isAvailable(typeGuitarValues, FilterType.UKULELE) ? `checked` : ``}
                >
            <label for="filters-form-type-value-3">Укулеле</label>
          </div>
        </div>
      </fieldset>
      <fieldset class="catalog__filters-string-amount">
        <h3>Количество струн</h3>
        <div class="catalog__filters-amount-wrapper">
          <input
              class="visually-hidden"
              type="checkbox"
              name="filters-form-amount"
              id="4"
              data-filter-amount-strings="${FilterStringAmount.FOUR}"
              ${isAvailable(typeStringsValues, FilterStringAmount.FOUR) ? `checked` : ``}
              ${isAvailable(stringAmountAvailableList, FilterStringAmount.FOUR) ? `` : `disabled`}
              >
          <label for="4">4</label>
          <input
              class="visually-hidden"
              type="checkbox"
              name="filters-form-amount"
              id="6"
              data-filter-amount-strings="${FilterStringAmount.SIX}"
              ${isAvailable(typeStringsValues, FilterStringAmount.SIX) ? `checked` : ``}
              ${isAvailable(stringAmountAvailableList, FilterStringAmount.SIX) ? `` : `disabled`}
              >
          <label for="6">6</label>
          <input
              class="visually-hidden"
              type="checkbox"
              name="filters-form-amount"
              id="7"
              data-filter-amount-strings="${FilterStringAmount.SEVEN}"
              ${isAvailable(typeStringsValues, FilterStringAmount.SEVEN) ? `checked` : ``}
              ${isAvailable(stringAmountAvailableList, FilterStringAmount.SEVEN) ? `` : `disabled`}
              >
          <label for="7">7</label>
          <input
              class="visually-hidden"
              type="checkbox"
              name="filters-form-amount"
              id="12"
              data-filter-amount-strings="${FilterStringAmount.TWELVE}"
              ${isAvailable(typeStringsValues, FilterStringAmount.TWELVE) ? `checked` : ``}
              ${isAvailable(stringAmountAvailableList, FilterStringAmount.TWELVE) ? `` : `disabled`}
              >
          <label for="12">12</label>
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
    const value = parseInt(String(evt.target.value).replace(/\s+/g, ``), 10);

    if (value <= 0 || Number.isNaN(Number(value)) || value === ``) {
      return this._callback.filterPriceChange(this._currentFilter.price);
    }

    let optionsPriceChangeArray = [];

    document.querySelectorAll(`.catalog__filters-price-wrapper input[type='text']`)
        .forEach((input) => optionsPriceChangeArray
            .push(input.value));

    return this._callback.filterPriceChange(optionsPriceChangeArray);
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
