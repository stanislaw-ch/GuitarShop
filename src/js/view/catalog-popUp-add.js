import AbstractView from "./abstract.js";
import {getGuitarType} from "../utils/good.js";

const createCatalogPopUpAddElement = (data) => {
  const {name, identiferNumber, stringAmount, price, type} = data;

  return `<section class="modal">
    <div class="overlay">
      <div class="modal__popup">
        <h2 class="modal__title">Добавить товар в корзину</h2>

        <div class="modal__content">
          <div class="modal__image-container">
            <picture>
              <source type="image/webp" srcset="img/guitar-${getGuitarType(type)}@1x.webp 1x, img/guitar-${getGuitarType(type)}@2x.webp 2x">
              <!-- 1х: 68px; 2x: 136px -->
              <img src="img/guitar-${getGuitarType(type)}@1x.png" srcset="img/guitar-${getGuitarType(type)}@1x.png 1x, img/guitar-${getGuitarType(type)}@2x.png 2x" width="68" height="190" alt="Изображение товара">
            </picture>
          </div>
          <div class="modal__content-container">
            <ul class="modal__description-list">
              <li class="modal__name">Гитара ${name}</li>
              <li class="modal__identifer-number">Артикул: ${identiferNumber}</li>
              <li class="modal__type">Электрогитара, ${stringAmount} струнная </li>
            </ul>
            <div class="modal__price">Цена: ${price} ₽</div>
          </div>
          <button class="modal__button">Добавить в корзину</button>
          <button class="modal__close" type="button">
            <span class="visually-hidden">Закрыть</span>
          </button>
        </div>
      </div>
    </div>
  </section>`;
};

export default class CatalogPopUpAdd extends AbstractView {
  constructor(data) {
    super();
    this._data = data;

    this._addClickHandler = this._addClickHandler.bind(this);
    this._closeClickHandler = this._closeClickHandler.bind(this);
  }

  getTemplate() {
    return createCatalogPopUpAddElement(this._data);
  }

  _addClickHandler(evt) {
    evt.preventDefault();
    this._callback.addClick(this._data);
  }

  _closeClickHandler(evt) {
    evt.preventDefault();
    this._callback.closeClick();
  }

  setAddClickHandler(callback) {
    this._callback.addClick = callback;
    this.getElement().querySelector(`.modal__button`).addEventListener(`click`, this._addClickHandler);
  }

  setCloseClickHandler(callback) {
    this._callback.closeClick = callback;
    this.getElement().querySelector(`.modal__close`).addEventListener(`click`, this._closeClickHandler);
  }
}
