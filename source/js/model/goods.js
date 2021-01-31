
import Observer from "../utils/observer.js";

export default class Goods extends Observer {
  constructor() {
    super();
    this._goods = [];
  }

  setGoods(goods) {
    this._goods = goods.slice();
  }

  getGoods() {
    return this._goods;
  }

  static adaptToClient(point) {
    const adaptedPoint = Object.assign(
        {},
        point
    );

    return adaptedPoint;
  }

  static adaptToServer(point) {
    const adaptedPoint = Object.assign(
        {},
        point
    );

    return adaptedPoint;
  }
}
