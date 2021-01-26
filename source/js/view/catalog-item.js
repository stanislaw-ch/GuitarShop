import AbstractView from "./abstract.js";

const createCatalogItemElement = (data) => {
  const {image, reviewAmount, name, price, starsCount} = data;
  return (
    `<li class="list__item">
      <img src="${image}" width="80" height="202" alt="Изображение товара">
      <div class="list__rating rating">
        <div class="list__stars rating__stars">
          <span style="width: ${starsCount * 20}%;"></span>
          <span class="visually-hidden">Rating</span>
        </div>
        <span class="rating__amount">${reviewAmount}</span>
      </div>
      <div class="list__descriotion-wrapper">
        <h3>${name}</h3>
        <p>${price} ₽</p>
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
