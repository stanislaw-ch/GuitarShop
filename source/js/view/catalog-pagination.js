import AbstractView from "./abstract.js";

const createCatalogPaginationElement = (goodsCount, goodsCountPerStep, paginationStep) => {
  const stepCount = Math.ceil(goodsCount / goodsCountPerStep);
  const delta = stepCount - 1;

  // console.log(stepCount);

  let arr = [];
  let temp = ``;
  for (let i = 1; i < stepCount + 1; i++) {
    temp = `<li class="pagination__item ${i === paginationStep ? `pagination__item--current` : ``}"><a href="#">${i}</a></li>`;
    arr.push(temp);
  }
  // console.log(arr);

  let template1 = ``;
  for (let i = paginationStep; i < paginationStep + 2; i++) {
    template1 += `<li class="pagination__item ${i === paginationStep ? `pagination__item--current` : ``}"><a href="#">${i}</a></li>`;
  }

  let template4 = ``;
  for (let i = stepCount - delta; i <= stepCount; i++) {
    template4 += `<li class="pagination__item ${i === paginationStep ? `pagination__item--current` : ``}"><a href="#">${i}</a></li>`;
  }

  let template2 = `<li class="pagination__item"><a href="#">${`...`}</a></li>`;

  let template3 = `<li class="pagination__item ${stepCount === paginationStep ? `pagination__item--current` : ``}"><a href="#">${stepCount}</a></li>`;

  // let template5 = ``;
  // for (let i = paginationStep - 1; i < paginationStep; i++) {
  //   template5 = `<li class="pagination__item"><a href="#">${i}</a></li>`;
  // }

  // ${paginationStep > 1 ? template5 : ``}
  // ${paginationStep >= stepCount - delta ? template4 : template1}${paginationStep >= stepCount - delta ? `` : template2}${paginationStep >= stepCount - 3 ? `` : template3}
  return `<ul class="catalog__pagination pagination">
    <li class="pagination__item pagination__item--button pagination__item--button-previous">
      <a href="#">Назад</a>
    </li>
   ${arr.slice(paginationStep - 1, paginationStep + 1)}${template2}${arr.slice(stepCount - 1, stepCount)}
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
