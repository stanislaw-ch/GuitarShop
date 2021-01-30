import SmartView from "./smart.js";

const createBasketItemElement = (data) => {
  const {image, stringAmount, name, price, count} = data;

  return `<li class="product__item">
          <div class="product__image-container">
            <img src="${image}" width="80" height="202" alt="Изображение товара">
          </div>
          <ul class="product__deckription-list">
            <li class="product__name">Электрогитара ${name}</li>
            <li class="product__identifer-number">Артикул: ${count}</li>
            <li class="product__type">Электрогитара, ${stringAmount} струнная </li>
          </ul>
          <div class="product__price"><p>${price.toLocaleString(`ru-RU`)} ₽</p></div>
          <div class="product__quantity">
            <button class="product__quantity-button" id="dec-button" type="button">-</button>
            <input type="text" value="${count}" name="product-quantity" disabled>
            <button class="product__quantity-button" id="inc-button" type="button">+</button>
          </div>
          <div class="product__price-total">${(price * count).toLocaleString(`ru-RU`)} ₽</div>
          <button class="product__delete" type="button">
            <span class="visually-hidden">Удалить товар</span>
          </button>
        </li>`;
};

export default class BasketItem extends SmartView {
  constructor(data) {
    super();
    this._data = data;

    this._handleQuantityIncClick = this._handleQuantityIncClick.bind(this);
    this._handleQuantityDecClick = this._handleQuantityDecClick.bind(this);
    this._deleteClickHandler = this._deleteClickHandler.bind(this);

    this._currentValueCount = this._data.count;

    this.restoreHandlers();
  }

  getTemplate() {
    return createBasketItemElement(this._data);
  }

  restoreHandlers() {
    this.setQuantityIncHandle();
    this.setQuantityDecHandle();
  }

  _handleQuantityIncClick(evt) {
    evt.preventDefault();
    this._currentValueCount = Number(this.getElement().querySelector(`input[name=product-quantity]`).value);
    this._currentValueCount++;

    this._callback.quantityIncClick(this._currentValueCount);
  }

  _handleQuantityDecClick() {
    this._currentValueCount = Number(this.getElement().querySelector(`input[name=product-quantity]`).value);
    this._currentValueCount--;

    this._callback.quantityDecClick(this._currentValueCount);
  }

  _deleteClickHandler(evt) {
    evt.preventDefault();
    this._callback.deleteClick();
  }

  setQuantityIncHandle(callback) {
    this._callback.quantityIncClick = callback;
    this.getElement().querySelector(`#inc-button`).addEventListener(`click`, this._handleQuantityIncClick);
  }

  setQuantityDecHandle(callback) {
    this._callback.quantityDecClick = callback;
    this.getElement().querySelector(`#dec-button`).addEventListener(`click`, this._handleQuantityDecClick);
  }

  setDeleteClickHandler(callback) {
    this._callback.deleteClick = callback;
    this.getElement().querySelector(`.product__delete`).addEventListener(`click`, this._deleteClickHandler);
  }
}
