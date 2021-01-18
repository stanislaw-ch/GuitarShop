import Observer from "../utils/observer.js";
// import {FilterType} from "../const.js";

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

  getFilter() {
    return this._activeFilter;
  }

}
