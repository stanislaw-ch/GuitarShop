import FilterView from "../view/filters.js";
import {render, RenderPosition, remove} from "../utils/render.js";
// import {filter} from "../utils/filter.js";
// import {FilterType} from "../const.js";

export default class Filter {
  constructor(filterContainer, filterModel, cardsModel) {
    this._filterContainer = filterContainer;
    this._filterModel = filterModel;
    this._cardsModel = cardsModel;
    this._currentFilter = null;

    this._filterComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
  }

  init() {
    this._currentFilter = this._filterModel.getFilter();
    // console.log(this._currentFilter);

    // const filters = this._getFilters();
    const prevFilterComponent = this._filterComponent;

    this._filterComponent = new FilterView(this._currentFilter);
    // this._filterComponent = new FilterView(filters, this._currentFilter);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);

    if (prevFilterComponent === null) {
      render(this._filterContainer, this._filterComponent, RenderPosition.AFTERBEGIN);
      return;
    }

    this._cardsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  destroy() {
    remove(this._filterComponent);

    this._filterComponent = null;

    this._cardsModel.removeObserver(this._handleModelEvent);
    this._filterModel.removeObserver(this._handleModelEvent);
  }

  _handleModelEvent() {
    this.init();
  }

  _handleFilterTypeChange(filterType) {
    if (this._currentFilter === filterType) {
      return;
    }

    this._filterModel.setFilter(filterType);
  }

  _getFilters() {
    // const cards = this._cardsModel.getCards();

    // return [
    //   {
    //     type: FilterType.ALL
    //   },
    //   {
    //     type: FilterType.ELECTRO,
    //   },
    //   {
    //     type: FilterType.ACOUSTIC,
    //   },
    //   {
    //     type: FilterType.UKULELE
    //   },
    // {
    //   type: FilterType.REPEATING,
    //   name: `Repeating`,
    //   count: filter[FilterType.REPEATING](cards).length
    // },
    // {
    //   type: FilterType.ARCHIVE,
    //   name: `Archive`,
    //   count: filter[FilterType.ARCHIVE](cards).length
    // }
    // ];
  }
}
