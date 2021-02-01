
import Observer from "../utils/observer.js";

export default class Goods extends Observer {
  constructor() {
    super();
    this._goods = [];
    this._filteredGoods = [];
  }

  setGoods(goods) {
    this._goods = goods.slice();
  }

  getGoods() {
    return this._goods;
  }

  setFilteredGoods(filteredGoods) {
    this._filteredGoods = filteredGoods.slice();
  }

  getFilteredGoods() {
    return this._filteredGoods;
  }
}
