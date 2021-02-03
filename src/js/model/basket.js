
import Observer from "../utils/observer.js";

export default class Basket extends Observer {
  constructor() {
    super();
    this._goodsInBasket = [];
  }

  setBasket(updateType, update) {
    this._goodsInBasket = update;
    this._notify(updateType);
  }

  getBasket() {
    return this._goodsInBasket;
  }

  updateGood(updateType, update) {
    const index = this._goodsInBasket.findIndex((good) => good.identiferNumber === update.identiferNumber);

    if (index === -1) {
      throw new Error(`Can't update unexisting task`);
    }

    this._goodsInBasket = [
      ...this._goodsInBasket.slice(0, index),
      update,
      ...this._goodsInBasket.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  addGood(updateType, update) {
    this._goodsInBasket = [
      update,
      ...this._goodsInBasket
    ];

    this._notify(updateType, update);
  }

  deleteGood(updateType, update) {
    const index = this._goodsInBasket.findIndex((good) => good.identiferNumber === update.identiferNumber);

    if (index === -1) {
      throw new Error(`Can't delete unexisting task`);
    }

    this._goodsInBasket = [
      ...this._goodsInBasket.slice(0, index),
      ...this._goodsInBasket.slice(index + 1)
    ];

    this._notify(updateType);
  }
}
