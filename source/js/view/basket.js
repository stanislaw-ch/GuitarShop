import AbstractView from "./abstract.js";
import {DiscountType} from "../const.js";

const createBasketElement = (goods, discountType, isAvailable) => {
  let totalPrice = 0;

  const DISCOUNT = {
    GITARAHIT_10_PERCENT: 0.9,
    SUPERGITARA: 700,
    GITARA2020: 3500,
    GITARA2020_30_PERCENT: 0.7,
  };

  const getTotalPrice = () => {
    if (goods.length !== 0) {
      let goodPrice = [];

      goods.forEach((good) => {
        return goodPrice.push(good.price * good.count);
      });

      totalPrice = goodPrice.reduce((acc, price) => acc + price);
    }
    return totalPrice;
  };

  const getDiscountPrice = () => {
    switch (discountType) {
      case DiscountType.DEFAULT:
        getTotalPrice();
        break;
      case DiscountType.GITARAHIT:
        getTotalPrice();
        if (totalPrice > 0) {
          return totalPrice * DISCOUNT.GITARAHIT_10_PERCENT;
        }
        break;
      case DiscountType.SUPERGITARA:
        getTotalPrice();
        if (totalPrice > 0) {
          return totalPrice - DISCOUNT.SUPERGITARA;
        }
        break;
      case DiscountType.GITARA2020:
        getTotalPrice();
        if (totalPrice > 0) {
          return (DISCOUNT.GITARA2020) <= totalPrice * DISCOUNT.GITARA2020_30_PERCENT ? totalPrice - DISCOUNT.GITARA2020 : totalPrice * DISCOUNT.GITARA2020_30_PERCENT;
        }
        break;
    }
    return totalPrice;
  };

  return `<section class="shoppingbag">
  <div class="shoppingbag__content">
    <div class="shoppingbag__product product">
      <ul class="product__list">

      </ul>
    </div>
    <div class="shoppingbag__order order">
      <div class="order__discount">
        <div class="order__discount-wrapper">
          <span class="order__discount-title">Промокод на скидку</span>
          <span class="order__discount-subtitle">Введите свой промокод, если он у вас есть.</span>
        </div>
        <div class="order__discount-promo ${!isAvailable ? `order__discount-promo--error` : ``}">
          <input type="text" name="order-discount-promo" id="order-discount-promo" placeholder="" value="">
          <button type="button">Применить купон</button>
        </div>
      </div>
      <div class="order__to-order">
        <span>Всего: ${getDiscountPrice()} ₽</span>
        <button type="button">Оформить заказ</button>
      </div>
    </div>
  </div>
</section>`;
};

export default class Basket extends AbstractView {
  constructor(goods, discountType, isAvailable) {
    super();
    this._goods = goods;
    this._discountType = discountType;
    this._isAvailable = isAvailable;


    this._discountClickHandler = this._discountClickHandler.bind(this);
  }

  getTemplate() {
    return createBasketElement(this._goods, this._discountType, this._isAvailable);
  }

  _discountClickHandler(evt) {
    evt.preventDefault();
    const discountType = this.getElement().querySelector(`input[name=order-discount-promo]`).value;

    this._callback.discountClick(discountType);
  }

  setDiscountClickHandler(callback) {
    this._callback.discountClick = callback;
    this.getElement().querySelector(`.order__discount-promo button`).addEventListener(`click`, this._discountClickHandler);
  }
}
