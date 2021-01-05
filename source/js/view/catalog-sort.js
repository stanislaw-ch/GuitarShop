import AbstractView from "./abstract.js";
import {SortType} from "../const.js";

const createCatalogSortElement = (currentSortType) => {
  console.log(currentSortType);
  return (
    `<div class="catalog__sort-wrapper">
      <span>Сортировать:</span>
      <ul class="catalog__sort sort">
        <li class="sort__item ${currentSortType === SortType.PRICE ? `sort__item--active` : ``}">
          <a
            href="#"
            data-sort-type="${SortType.PRICE}">по цене
          </a>
        </li>
        <li class="sort__item ${currentSortType === SortType.POPULARITY ? `sort__item--active` : ``}">
          <a
            href="#"
            data-sort-type="${SortType.POPULARITY}">по популярности
          </a>
        </li>
      </ul>
      <div class="catalog__sort-buttons">
        <button
          class="sort-button sort-button--up"
          type="button"
          data-sort-type="${SortType.UP}">
        </button>
        <button
          class="sort-button
          sort-button--down"
          type="button"
          data-sort-type="${SortType.DOWN}">
        </button>
      </div>
    </div>`
  );
};
export default class CatalogSort extends AbstractView {
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
      // this.getElement().querySelectorAll(`.sort__item`).forEach((item) => item.classList.remove(`sort__item--active`));
      // this.getElement().querySelectorAll(`.sort-button`).forEach((item) => item.classList.remove(`sort-button--active`));
      // this.getElement().querySelector(`.sort-button--up`).classList.add(`sort-button--active`);
      // evt.target.parentElement.classList.add(`sort__item--active`);
    }
    if (evt.target.tagName === `BUTTON`) {
      evt.preventDefault();
      this._callback.sortTypeChange(evt.target.dataset.sortType);
      this.getElement().querySelectorAll(`.sort-button`).forEach((item) => item.classList.remove(`sort-button--active`));
      evt.target.classList.add(`sort-button--active`);
    }

    // console.log(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}
