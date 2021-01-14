import AbstractView from "./abstract.js";
import {SortType, OrderType} from "../const.js";

const createCatalogSortElement = (currentSortType, currentOrderType) => {
  return (
    `<div class="catalog__sort-wrapper">
      <span>Сортировать:</span>
      <ul class="catalog__sort sort">
        <li class="sort__item ${currentSortType === SortType.PRICE ? `sort__item--active` : ``}">
          <a
            href="#"
            data-sort-type-category="${SortType.PRICE}">по цене
          </a>
        </li>
        <li class="sort__item ${currentSortType === SortType.POPULARITY ? `sort__item--active` : ``}">
          <a
            href="#"
            data-sort-type-category="${SortType.POPULARITY}">по популярности
          </a>
        </li>
      </ul>
      <div class="catalog__sort-buttons">
        <button
          class="sort-button sort-button--up ${currentOrderType === OrderType.UP ? `sort-button--active` : ``}"
          type="button"
          data-sort-type-priority="${OrderType.UP}">
        </button>
        <button
          class="sort-button sort-button--down ${currentOrderType === OrderType.DOWN ? `sort-button--active` : ``}"
          type="button"
          data-sort-type-priority="${OrderType.DOWN}">
        </button>
      </div>
    </div>`
  );
};
export default class CatalogSort extends AbstractView {
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
