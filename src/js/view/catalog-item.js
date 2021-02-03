import AbstractView from "./abstract.js";
import {getGuitarType} from "../utils/good.js";

const createCatalogItemElement = (data) => {
  const {type, reviewAmount, name, price, starsCount} = data;

  return (
    `<li class="list__item">
      <picture>
        <source type="image/webp" srcset="img/guitar-${getGuitarType(type)}@1x.webp 1x, img/guitar-${getGuitarType(type)}@2x.webp 2x">
        <!-- 1х: 68px; 2x: 136px -->
        <img src="img/guitar-${getGuitarType(type)}@1x.png" srcset="img/guitar-${getGuitarType(type)}@1x.png 1x, img/guitar-${getGuitarType(type)}@2x.png 2x" width="68" height="190" alt="Изображение товара">
      </picture>
      <div class="list__rating rating">
        <div class="list__stars rating__stars">
          <span style="width: ${starsCount * 20}%;"></span>
          <span class="visually-hidden">Rating</span>
        </div>
        <span class="rating__amount">${reviewAmount}</span>
      </div>
      <div class="list__descriotion-wrapper">
        <h3>${name}</h3>
        <p>${price.toLocaleString(`ru-RU`)} ₽</p>
      </div>
      <div class="list__navigation-wrapper">
        <a href="" class="catalog__button--info catalog__button">Подробнее</a>
        <a href="" class="catalog__button--buy catalog__button">Купить</a>
      </div>
    </li>`
  );
};

export default class CatalogItem extends AbstractView {
  constructor(data) {
    super();
    this.data = data;

    this._addClickHandler = this._addClickHandler.bind(this);
  }

  getTemplate() {
    return createCatalogItemElement(this.data);
  }

  _addClickHandler(evt) {
    evt.preventDefault();
    this._callback.addClick();
  }

  setAddClickHandler(callback) {
    this._callback.addClick = callback;
    this.getElement().querySelector(`.catalog__button--buy`).addEventListener(`click`, this._addClickHandler);
  }
}
