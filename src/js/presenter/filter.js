import FilterView from "../view/filters.js";
import {render, RenderPosition, remove} from "../utils/render.js";

export default class Filter {
  constructor(filterContainer, filterModel, goodsModel) {
    this._filterContainer = filterContainer;
    this._filterModel = filterModel;
    this._goodsModel = goodsModel;

    this._filterComponent = null;
    this._prevFilterComponent = null;

    this._pricesInGoods = [];

    this._pricesInGoods = this._goodsModel.getGoods()
    .map((item) => item.price);

    this._minPriceInGoods = Math.min(...this._pricesInGoods);
    this._maxPriceInGoods = Math.max(...this._pricesInGoods);

    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
    this._handleFilterStringChange = this._handleFilterStringChange.bind(this);
    this._handleFilterPriceChange = this._handleFilterPriceChange.bind(this);

    this._filterModel.setFilterByInit([this._minPriceInGoods, this._maxPriceInGoods], `price`);
  }

  init() {
    this._currentFilter = this._filterModel.getFilter();
    this._goods = this._goodsModel.getGoods();

    this._prevFilterComponent = this._filterComponent;

    this._filterComponent = new FilterView(this._currentFilter, this._goods);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);
    this._filterComponent.setFilterStringChangeHandler(this._handleFilterStringChange);
    this._filterComponent.setFilterPriceChangeHandler(this._handleFilterPriceChange);

    render(this._filterContainer, this._filterComponent, RenderPosition.AFTERBEGIN);

  }

  destroy() {
    remove(this._filterComponent);

    this._filterComponent = null;
  }

  _handleFilterTypeChange(filterGuitarType) {
    if (this._prevFilterComponent === 0) {
      return;
    }

    this._filterModel.setFilter(filterGuitarType, `type`);
  }

  _handleFilterStringChange(filterStringType) {
    if (this._prevFilterComponent === 0) {
      return;
    }

    filterStringType = filterStringType.map((string) => Number(string));

    this._filterModel.setFilter(filterStringType, `stringAmount`);
  }

  _handleFilterPriceChange(filterPriceType) {
    if (this._prevFilterComponent === 0) {
      return;
    }

    filterPriceType = filterPriceType.map((filter) => {
      return parseInt(String(filter).replace(/\s+/g, ``), 10);
    });

    const [minCurrent, maxCurrent] = this._currentFilter.price;
    let [min, max] = filterPriceType;

    if (min < this._minPriceInGoods) {
      min = this._minPriceInGoods;
    }

    if (min > this._maxPriceInGoods) {
      min = this._maxPriceInGoods;
    }

    if (min > maxCurrent) {
      min = maxCurrent;
    }

    if (max < this._minPriceInGoods) {
      max = this._minPriceInGoods;
    }

    if (max > this._maxPriceInGoods) {
      max = this._maxPriceInGoods;
    }

    if (max < minCurrent) {
      max = minCurrent;
    }

    this._filterModel.setFilter([min, max], `price`);
  }
}
