import FilterView from "../view/filters.js";
import {render, RenderPosition, remove} from "../utils/render.js";
// import {filter} from "../utils/filter.js";
// import {FilterType} from "../const.js";

export default class Filter {
  constructor(filterContainer, filterModel, cardsModel) {
    this._filterContainer = filterContainer;
    this._filterModel = filterModel;
    this._cardsModel = cardsModel;

    this._currentFilter = {
      type: [],
      stringAmount: [],
      price: []
    };
    this._filterComponent = null;

    // this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
    this._handleFilterStringChange = this._handleFilterStringChange.bind(this);
    this._handleFilterPriceChange = this._handleFilterPriceChange.bind(this);
  }

  init() {
    console.log(`init`);
    this._currentFilter = this._filterModel.getFilter();
    this._cards = this._cardsModel.getCards();

    this._prevFilterComponent = this._filterComponent;

    this._filterComponent = new FilterView(this._currentFilter, this._cards);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);
    this._filterComponent.setFilterStringChangeHandler(this._handleFilterStringChange);
    this._filterComponent.setFilterPriceChangeHandler(this._handleFilterPriceChange);


    // if (this._prevFilterComponent === null) {
      render(this._filterContainer, this._filterComponent, RenderPosition.AFTERBEGIN);
    //   return;
    // }

    // this._cardsModel.addObserver(this._handleModelEvent);
    // this._filterModel.addObserver(this._handleModelEvent);
  }

  destroy() {
    remove(this._filterComponent);

    this._filterComponent = null;

    // this._cardsModel.removeObserver(this._handleModelEvent);
    // this._filterModel.removeObserver(this._handleModelEvent);
  }

  // _handleModelEvent() {
  //   console.log(`init`);
  //   this.init();
  // }

  _handleFilterTypeChange(filterGuitarType) {
    if (this._currentFilter.stringAmount.length === filterGuitarType.length && this._currentFilter.stringAmount
        .every((value, index) => value === filterGuitarType[index]) && this._prevFilterComponent === 0) {
      return;
    }

    this.destroy();
    this._filterModel.setFilter(filterGuitarType, `type`);
  }

  _handleFilterStringChange(filterStringType) {
    if (this._currentFilter.stringAmount.length === filterStringType.length && this._currentFilter.stringAmount
        .every((value, index) => value === filterStringType[index]) && this._prevFilterComponent === 0) {
      return;
    }

    this.destroy();
    this._filterModel.setFilter(filterStringType, `stringAmount`);
  }

  _handleFilterPriceChange(filterPriceType) {
    if (this._currentFilter.price.length === filterPriceType.length && this._currentFilter.price
        .every((value, index) => value === filterPriceType[index])) {
      return;
    }

    this.destroy();
    this._filterModel.setFilter(filterPriceType, `price`);
  }

  _getFilters() {
  }
}
