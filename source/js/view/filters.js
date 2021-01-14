import AbstractView from "./abstract.js";
import {FilterType, FilterTypeS} from "../const.js";

const createFiltersElement = (currentFilterType) => {
  // console.log(currentFilterType);
  // console.log(JSON.stringify(currentFilterType));
  // console.log(JSON.stringify(FilterType.ELECTRO));
  // console.log(JSON.stringify(currentFilterType) === JSON.stringify(FilterType.ELECTRO));

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
                data-filter-type-gitar="${FilterType.ACOUSTIC}"
                >
            <label for="filters-form-type-value-1">Акустические гитары</label>
          </div>
          <div class="catalog__filters-type-content-wrapper">
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-type"
                id="filters-form-type-value-2"
                data-filter-type-gitar="${FilterType.ELECTRO}"
                >
            <label for="filters-form-type-value-2">Электрогитары</label>
          </div>
          <div class="catalog__filters-type-content-wrapper">
            <input
                class="visually-hidden"
                type="checkbox"
                name="filters-form-type"
                id="filters-form-type-value-3"
                data-filter-type-gitar="${FilterType.UKULELE}"
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
                ${JSON.stringify(currentFilterType) === JSON.stringify(FilterType.ELECTRO) ? `disabled` : ``}
                >
            <span>12</span>
          </label>
        </div>
      </fieldset>
      <button type="submit" disabled="">показать</button>
    </form></div>`);
};

export default class Filters extends AbstractView {
  constructor(currentFilterType) {
    super();
    // this.filters = filters;
    // console.log(currentFilterType);
    this._currentFilterType = currentFilterType;

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createFiltersElement(this._currentFilterType);
  }

  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    let options = {};
    let optionsTypeGuitarArray = [];
    let optionsTypeStringArray = [];

    document.querySelectorAll(`input[type='checkbox']`)
        .forEach((chbx) => chbx.checked === true && !chbx.dataset.filterTypeStrings ? optionsTypeGuitarArray
            .push(chbx.dataset.filterTypeGuitar) : null);
    options.type = optionsTypeGuitarArray;

    document.querySelectorAll(`input[type='checkbox']`)
        .forEach((chbx) => chbx.checked === true && !chbx.dataset.filterTypeGuitar ? optionsTypeStringArray
            .push(chbx.dataset.filterTypeStrings) : null);
    options.stringAmount = optionsTypeStringArray;

    // this._callback.filterTypeChange(evt.target.dataset.filterType);
    this._callback.filterTypeChange(options);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`change`, this._filterTypeChangeHandler);
  }
}
