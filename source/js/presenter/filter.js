import FilterView from "../view/filters.js";
import {render, RenderPosition, remove} from "../utils/render.js";

export default class Filter {
  constructor(filterContainer, filterModel, cardsModel) {
    this._filterContainer = filterContainer;
    this._filterModel = filterModel;
    this._cardsModel = cardsModel;

    this._filterComponent = null;

    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
    this._handleFilterStringChange = this._handleFilterStringChange.bind(this);
    this._handleFilterPriceChange = this._handleFilterPriceChange.bind(this);
  }

  init() {
    this._currentFilter = this._filterModel.getFilter();
    this._cards = this._cardsModel.getCards();

    this._prevFilterComponent = this._filterComponent;

    this._filterComponent = new FilterView(this._currentFilter, this._cards);
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

    this._filterModel.setFilter(filterStringType, `stringAmount`);
  }

  _handleFilterPriceChange(filterPriceType) {
    if (this._prevFilterComponent === 0) {
      return;
    }

    this._filterModel.setFilter(filterPriceType, `price`);
  }
}
