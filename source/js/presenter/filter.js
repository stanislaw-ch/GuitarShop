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

    const prevFilterComponent = this._filterComponent;

    this._filterComponent = new FilterView(this._currentFilter, this._cards);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);
    this._filterComponent.setFilterStringChangeHandler(this._handleFilterStringChange);
    this._filterComponent.setFilterPriceChangeHandler(this._handleFilterPriceChange);


    if (prevFilterComponent === null) {
      render(this._filterContainer, this._filterComponent, RenderPosition.AFTERBEGIN);
      return;
    }

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
    // if (filterGuitarType.length === 0) {
    //   return;
    // }
    this._filterModel.setFilter(filterGuitarType, `type`);
  }

  _handleFilterStringChange(filterStringType) {
    // if (filterStringType.length === 0) {
    //   return;
    // }
    this._filterModel.setFilter(filterStringType, `stringAmount`);
  }

  _handleFilterPriceChange(filterPriceType) {
    // if (filterStringType.length === 0) {
    //   return;
    // }
    this._filterModel.setFilter(filterPriceType, `price`);
  }

  _getFilters() {
  }
}
