import AbstractView from "./abstract.js";

const createBasketElement = () => {
  return `<section class="shoppingbag">
  <div class="shoppingbag__content">
    <div class="shoppingbag__product product">
      <ul class="product__list">
        <li class="product__item">
          <div class="product__image-container">
            <img src="img/gitar-electric_1.png" width="80" height="202" alt="Изображение товара">
          </div>
          <ul class="product__deckription-list">
            <li class="product__name">Электрогитара Честер bass</li>
            <li class="product__identifer-number">Артикул: SO757575</li>
            <li class="product__type">Электрогитара, 6 струнная </li>
          </ul>
          <div class="product__price">17 500 ₽</div>
          <div class="product__quantity">
            <button class="product__quantity-button" type="button">-</button>
            <input id="product-quantity" type="text" value="1" name="product-quantity">
            <button class="product__quantity-button" type="button">+</button>
          </div>
          <div class="product__price-total">17 500 ₽</div>
          <button class="product__delete" type="button">
            <span class="visually-hidden">Удалить товар</span>
          </button>
        </li>
        <li class="product__item">
          <div class="product__image-container">
            <img src="img/gitar-electric_1.png" width="80" height="202" alt="Изображение товара">
          </div>
          <ul class="product__deckription-list">
            <li class="product__name">Электрогитара Честер bass</li>
            <li class="product__identifer-number">Артикул: SO757575</li>
            <li class="product__type">Электрогитара, 6 струнная </li>
          </ul>
          <div class="product__price">17 500 ₽</div>
          <div class="product__quantity">
            <button class="product__quantity-button" type="button">-</button>
            <input id="product-quantity" type="text" value="2" name="product-quantity">
            <button class="product__quantity-button" type="button">+</button>
          </div>
          <div class="product__price-total">17 500 ₽</div>
          <button class="product__delete" type="button">
            <span class="visually-hidden">Удалить товар</span>
          </button>
        </li>
      </ul>
    </div>
    <div class="shoppingbag__order order">
      <div class="order__discount">
        <div class="order__discount-wrapper">
          <span class="order__discount-title">Промокод на скидку</span>
          <span class="order__discount-subtitle">Введите свой промокод, если он у вас есть.</span>
        </div>
        <div class="order__discount-promo">
          <input type="text" name="order-discount-promo" id="order-discount-promo" placeholder="GITARAHIT" value="GITARAHIT">
          <button type="button">Применить купон</button>
        </div>
      </div>
      <div class="order__to-order">
        <span>Всего: 47 000 ₽</span>
        <button type="button">Оформить заказ</button>
      </div>
    </div>
  </div>
</section>`;
};

export default class Basket extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    return createBasketElement();
  }
}
