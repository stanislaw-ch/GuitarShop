import AbstractView from "./abstract.js";

const createCatalogPaginationElement = (goodsCount, goodsCountPerStep, paginationStep) => {
  const paginationCount = Math.ceil(goodsCount / goodsCountPerStep);
  const paginationRange = 4;

  const renderPagination = () => {
    let paginationItems = [];
    let temp = ``;
    for (let i = 1; i <= paginationCount; i++) {
      temp = `<li class="pagination__item ${i === paginationStep ? `pagination__item--current` : ``}"><a>${i}</a></li>`;
      paginationItems.push(temp);
    }

    if (paginationRange >= paginationCount) {
      return paginationItems.slice(0, paginationCount).join(``);
    }

    if (paginationRange < paginationCount) {
      let paginationDots = [`<li class="pagination__item"><a>...</a></li>`];
      let count = paginationStep - 1;

      if (paginationStep < 2) {
        paginationItems = [
          ...paginationItems.slice(0, paginationStep + 1),
          paginationDots,
          ...paginationItems.slice(paginationCount - 1, paginationCount)
        ].join(``);

        return paginationItems;
      }

      if (paginationStep === 2) {
        paginationItems = [
          ...paginationItems.slice(count - 1, paginationStep),
          paginationDots,
          ...paginationItems.slice(paginationCount - 1, paginationCount)
        ].join(``);

        return paginationItems;
      }

      if (paginationCount - paginationStep < paginationRange - 1) {
        paginationItems = [
          ...paginationItems.slice(paginationCount - paginationRange, paginationCount)
        ].join(``);

        return paginationItems;
      }

      paginationItems = [
        ...paginationItems.slice(count - 1, paginationStep),
        paginationDots,
        ...paginationItems.slice(paginationCount - 1, paginationCount)
      ].join(``);

      return paginationItems;
    }
    return paginationItems.join(``);
  };

  return `<ul class="catalog__pagination pagination">
    <li class="pagination__item pagination__item--button pagination__item--button-previous">
      <a href="#">Назад</a>
    </li>
    ${renderPagination()}
    <li class="pagination__item pagination__item--button pagination__item--button-next">
      <a href="#">Далее</a>
    </li>
  </ul>`;
};

export default class CatalogPagination extends AbstractView {
  constructor(goodsCount, goodsCountPerStep, paginationStep) {
    super();
    this._goodsCount = goodsCount;
    this._goodsCountPerStep = goodsCountPerStep;
    this._paginationStep = paginationStep;

    this._nextClickHandler = this._nextClickHandler.bind(this);
    this._previousClickHandler = this._previousClickHandler.bind(this);
  }

  getTemplate() {
    return createCatalogPaginationElement(this._goodsCount, this._goodsCountPerStep, this._paginationStep);
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
