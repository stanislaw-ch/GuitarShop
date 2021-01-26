import AbstractView from "./abstract.js";

const createCatalogPaginationElement = () => {
  return `<ul class="catalog__pagination pagination">
    <li class="pagination__item pagination__item--button pagination__item--button-previous pagination__item--hide">
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
    <li class="pagination__item pagination__item--button pagination__item--button-next">
      <a href="#">Далее</a>
    </li>
  </ul>`;
};

export default class CatalogPagination extends AbstractView {
  constructor() {
    super();

    this._nextClickHandler = this._nextClickHandler.bind(this);
    this._previousClickHandler = this._previousClickHandler.bind(this);
  }

  getTemplate() {
    return createCatalogPaginationElement();
  }

  _nextClickHandler(evt) {
    evt.preventDefault();
    this._callback.nextClick();
  }

  _previousClickHandler(evt) {
    evt.preventDefault();
    this._callback.previousClick();
  }

  setNextClickHandler(callback) {
    this._callback.nextClick = callback;
    this.getElement().querySelector(`.pagination__item--button-next`).addEventListener(`click`, this._nextClickHandler);
  }

  setPreviousClickHandler(callback) {
    this._callback.previousClick = callback;
    this.getElement().querySelector(`.pagination__item--button-previous`).addEventListener(`click`, this._previousClickHandler);
  }
}
