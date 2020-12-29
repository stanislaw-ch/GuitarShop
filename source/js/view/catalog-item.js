import AbstractView from "./abstract.js";

const createCatalogItemElement = (product) => {
  const {image, reviewAmount, name, price} = product;
  return (
    `<li class="list__item">
      <img src="${image}" width="80" height="202" alt="Изображение товара">
      <div class="list__rating rating">
        <div class="list__stars rating__stars">
          <span style="width: 85%;"></span>
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
  constructor(product) {
    super();
    this.product = product;
  }

  getTemplate() {
    return createCatalogItemElement(this.product);
  }
}
