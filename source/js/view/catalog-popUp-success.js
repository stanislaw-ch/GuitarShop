import AbstractView from "./abstract.js";

const createCatalogPopUpSuccessElement = () => {
  return `<section class="modal">
  <div class="modal__popup">
    <h2 class="modal__title">Товар успешно добавлен в корзину</h2>

    <div class="modal__content">
      <div class="modal__buttons-wrapper">
        <button class="modal__button modal__button--to-basket">Перейти в корзину</button>
        <button class="modal__button modal__button--to-shoping">Продолжить покупки</button>
      </div>
      <button class="modal__close" type="button">
        <span class="visually-hidden">Закрыть</span>
      </button>
    </div>
  </div>
</section>`;
};

export default class CatalogPopUpSuccess extends AbstractView {
  constructor() {
    super();

    this._toBasketClickHandler = this._toBasketClickHandler.bind(this);
    this._toShoppingClickHandler = this._toShoppingClickHandler.bind(this);
    this._closeClickHandler = this._closeClickHandler.bind(this);
  }

  getTemplate() {
    return createCatalogPopUpSuccessElement();
  }

  _toBasketClickHandler(evt) {
    evt.preventDefault();
    this._callback.toBasketClick();
  }

  _toShoppingClickHandler(evt) {
    evt.preventDefault();
    this._callback.toShoppingClick();
  }

  _closeClickHandler(evt) {
    evt.preventDefault();
    this._callback.closeClick();
  }

  setToBasketClickHandler(callback) {
    this._callback.toBasketClick = callback;
    this.getElement().querySelector(`.modal__button--to-basket`).addEventListener(`click`, this._toBasketClickHandler);
  }

  setToShoppingClickHandler(callback) {
    this._callback.toShoppingClick = callback;
    this.getElement().querySelector(`.modal__button--to-shoping`).addEventListener(`click`, this._toShoppingClickHandler);
  }

  setCloseClickHandler(callback) {
    this._callback.closeClick = callback;
    this.getElement().querySelector(`.modal__close`).addEventListener(`click`, this._closeClickHandler);
  }
}
