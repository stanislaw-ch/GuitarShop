import Observer from "../utils/observer.js";

export default class Filter extends Observer {
  constructor() {
    super();
    this._activeFilter = {
      type: [],
      stringAmount: [],
      price: []
    };
  }

  setFilter(filter, type) {
    this._activeFilter[type] = filter;
    this._notify(filter);
  }

  setFilterByInit(filter, type) {
    this._activeFilter[type] = filter;
  }

  getFilter() {
    return this._activeFilter;
  }

}
