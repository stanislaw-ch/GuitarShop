import SmartView from "./smart.js";
import {getGuitarType} from "../utils/good.js";

const createBasketItemElement = (data) => {
  const {type, stringAmount, name, price, count} = data;

  return `<li class="product__item">
          <div class="product__image-container">
            <picture>
              <source type="image/webp" srcset="img/guitar-${getGuitarType(type)}@1x.webp 1x, img/guitar-${getGuitarType(type)}@2x.webp 2x">
              <!-- 1х: 68px; 2x: 136px -->
              <img src="img/guitar-${getGuitarType(type)}@1x.png" srcset="img/guitar-${getGuitarType(type)}@1x.png 1x, img/guitar-${getGuitarType(type)}@2x.png 2x" width="68" height="190" alt="Изображение товара">
            </picture>
          </div>
          <ul class="product__description-list">
            <li class="product__name">Электрогитара ${name}</li>
            <li class="product__identifer-number">Артикул: ${count}</li>
            <li class="product__type">Электрогитара, ${stringAmount} струнная </li>
          </ul>
          <div class="product__price"><p>${price.toLocaleString(`ru-RU`)} ₽</p></div>
          <div class="product__quantity">
            <button class="product__quantity-button" id="dec-button" type="button">-</button>
            <input type="text" value="${count}" name="product-quantity">
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
    this._handleProductQuantityChangeHandle = this._handleProductQuantityChangeHandle.bind(this);
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

  _handleProductQuantityChangeHandle(evt) {
    evt.preventDefault();
    if (evt.target.value <= 0 || Number.isNaN(Number(evt.target.value)) || evt.target.value === ``) {
      return this._callback.productQuantityChange(this._currentValueCount);
    }

    this._currentValueCount = Number(evt.target.value);

    return this._callback.productQuantityChange(this._currentValueCount);
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

  setProductQuantityChangeHandle(callback) {
    this._callback.productQuantityChange = callback;
    this.getElement().querySelector(`input[name=product-quantity]`).addEventListener(`change`, this._handleProductQuantityChangeHandle);
  }

  setDeleteClickHandler(callback) {
    this._callback.deleteClick = callback;
    this.getElement().querySelector(`.product__delete`).addEventListener(`click`, this._deleteClickHandler);
  }
}
