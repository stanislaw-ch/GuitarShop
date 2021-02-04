import AbstractView from "./abstract.js";
import {SortByCategoryType, SortByPriorityType} from "../const.js";

const createCatalogSortElement = (currentSortByCategoryType, currentSortByPriorityType) => {
  return (
    `<div class="catalog__sort-wrapper">
      <span>Сортировать:</span>
      <ul class="catalog__sort sort">
        <li class="sort__item ${currentSortByCategoryType === SortByCategoryType.PRICE ? `sort__item--active` : ``}">
          <a
            href="#"
            data-sort-by-category="${SortByCategoryType.PRICE}">по цене
          </a>
        </li>
        <li class="sort__item ${currentSortByCategoryType === SortByCategoryType.POPULARITY ? `sort__item--active` : ``}">
          <a
            href="#"
            data-sort-by-category="${SortByCategoryType.POPULARITY}">по популярности
          </a>
        </li>
      </ul>
      <div class="catalog__sort-buttons">
        <a href="#"
          class="sort-button sort-button--up ${currentSortByPriorityType === SortByPriorityType.UP ? `sort-button--active` : ``}"
          data-sort-by-priority="${SortByPriorityType.UP}">
            <span class="visually-hidden">Сортировать по возрастанию</span>
            <svg width="22" height="22">
              <use xlink:href="img/sprite/sprite.svg#sprite-icon_arrow-up"></use>
            </svg>
        </a>
        <a href="#"
          class="sort-button sort-button--down ${currentSortByPriorityType === SortByPriorityType.DOWN ? `sort-button--active` : ``}"
          data-sort-by-priority="${SortByPriorityType.DOWN}">
          <span class="visually-hidden">Сортировать по убыванию</span>
          <svg width="22" height="22">
            <use xlink:href="img/sprite/sprite.svg#sprite-icon_arrow-up"></use>
          </svg>
        </a>
      </div>
    </div>`
  );
};
export default class CatalogSort extends AbstractView {
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
    this._callback.sortByCategoryChange(evt.target.dataset.sortByCategory);
  }

  _sortByPriorityChangeHandler(evt) {
    evt.preventDefault();
    this._callback.sortByPriorityChange(evt.target.parentNode.dataset.sortByPriority);
  }

  setSortByCategoryChangeHandler(callback) {
    this._callback.sortByCategoryChange = callback;
    this.getElement().querySelector(`.catalog__sort`).addEventListener(`click`, this._sortByCategoryChangeHandler);
  }

  setSortByPriorityChangeHandler(callback) {
    this._callback.sortByPriorityChange = callback;
    this.getElement().querySelector(`.catalog__sort-buttons`).addEventListener(`click`, this._sortByPriorityChangeHandler, true);
  }
}
