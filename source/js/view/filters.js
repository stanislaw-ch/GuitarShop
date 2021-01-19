import AbstractView from "./abstract.js";
import {FilterType, FilterTypeS, StringsAmount} from "../const.js";
import {filteredCardsByType} from "../utils/filter.js";

const createFiltersElement = (currentFilterType, cards) => {
  let filteredGuitars = {};
  let stringAmountAvailableList = [];
  if (currentFilterType.type.length === 0) {
    filteredGuitars = cards
        .filter((item) => filteredCardsByType(item.type, currentFilterType.type));

    stringAmountAvailableList = Array.from(new Set(filteredGuitars
        .map((item) => item.stringAmount)));
  }

  filteredGuitars = currentFilterType.type;
  const keysGuitar = Object.keys(FilterType);
  const keysStrings = Object.keys(FilterTypeS);
  let typeGuitarKey = [];
  let typeGuitarValue = [];
  let typeStringsValue = [];

  keysGuitar.filter((key) => (currentFilterType.type.forEach((type) => {
    if (type.includes(FilterType[key])) {
      // let arr = [];
      // arr.push(FilterType[key]);
      // typeGuitar[key] = arr;
      return typeGuitarKey.push(key);
    } else {
      return false;
    }
  })));

  keysGuitar.filter((key) => (currentFilterType.type.forEach((type) => {
    if (type.includes(FilterType[key])) {
      // let arr = [];
      // arr.push(FilterType[key]);
      // typeGuitar[key] = arr;
      return typeGuitarValue.push(FilterType[key]);
    } else {
      return false;
    }
  })));

  keysStrings.filter((key) => (currentFilterType.stringAmount.forEach((type) => {
    if (type.includes(FilterTypeS[key])) {
      // let arr = [];
      // arr.push(FilterType[key]);
      // typeGuitar[key] = arr;
      return typeStringsValue.push(FilterTypeS[key]);
    } else {
      return false;
    }
  })));

  console.log(typeStringsValue);
  typeGuitarKey.forEach((item) => {
    stringAmountAvailableList.push(...StringsAmount[item]);
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
                data-filter-type-guitar="${FilterType.ACOUSTIC}"
                ${isStringsAvailable(typeGuitarValue, FilterType.ACOUSTIC) ? `checked` : ``}
                >
            <label for="filters-form-type-value-1">Акустические гитары</label>
          </div>
          <div class="catalog__filters-type-content-wrapper">
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-type"
                id="filters-form-type-value-2"
                data-filter-type-guitar="${FilterType.ELECTRO}"
                ${isStringsAvailable(typeGuitarValue, FilterType.ELECTRO) ? `checked` : ``}
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
                ${isStringsAvailable(typeGuitarValue, FilterType.UKULELE) ? `checked` : ``}
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
          data-filter-type-strings="${FilterTypeS.FOUR}"
          ${isStringsAvailable(typeStringsValue, FilterTypeS.FOUR) ? `checked` : ``}
          ${isStringsAvailable(stringAmountAvailableList, FilterTypeS.FOUR) ? `` : `disabled`}
          >
      <span>4</span>
    </label>
    <label>
      <input
          class="visually-hidden"
          type="checkbox"
          name="filters-form-amount"
          id="6"
          data-filter-type-strings="${FilterTypeS.SIX}"
          ${isStringsAvailable(typeStringsValue, FilterTypeS.SIX) ? `checked` : ``}
          ${isStringsAvailable(stringAmountAvailableList, FilterTypeS.SIX) ? `` : `disabled`}
          >
      <span>6</span>
    </label>
    <label>
      <input
          class="visually-hidden"
          type="checkbox"
          name="filters-form-amount"
          id="7"
          data-filter-type-strings="${FilterTypeS.SEVEN}"
          ${isStringsAvailable(typeStringsValue, FilterTypeS.SEVEN) ? `checked` : ``}
          ${isStringsAvailable(stringAmountAvailableList, FilterTypeS.SEVEN) ? `` : `disabled`}
          >
      <span>7</span>
    </label>
    <label>
      <input
          class="visually-hidden"
          type="checkbox"
          name="filters-form-amount"
          id="12"
          data-filter-type-strings="${FilterTypeS.TWELVE}"
          ${isStringsAvailable(typeStringsValue, FilterTypeS.TWELVE) ? `checked` : ``}
          ${isStringsAvailable(stringAmountAvailableList, FilterTypeS.TWELVE) ? `` : `disabled`}
          >
      <span>12</span>
    </label>
  </div>
</fieldset>

    </form></div>`);
};

export default class Filters extends AbstractView {
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
