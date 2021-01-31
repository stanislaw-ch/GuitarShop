import CatalogBoardView from "../view/catalog-board.js";
import CatalogSortView from "../view/catalog-sort.js";
import CatalogListView from "../view/catalog-list.js";
import CatalogPaginationView from "../view/catalog-pagination.js";

import CatalogGoodPresenter from "../presenter/catalog-good.js";
import BasketPresenter from "../presenter/basket.js";
import FilterPresenter from "../presenter/filter.js";

import {render, RenderPosition, remove} from "../utils/render.js";
import {sortPriceUp, sortPriceDown, sortPopularityUp, sortPopularityDown} from "../utils/good.js";
import {SortByCategoryType, SortByPriorityType} from "../const.js";
import {filteredGoodsByType, filteredGoodsByPrice} from "../utils/filter.js";
import {MenuItem, UserAction} from "../const.js";

const GOOD_COUNT_PER_STEP = 2;

export default class Board {
  constructor(catalogContainer, goodsModel, filterModel, siteMenuModel, basketModel) {
    this._goodsModel = goodsModel;
    this._filterModel = filterModel;
    this._siteMenuModel = siteMenuModel;
    this._basketModel = basketModel;
    this._catalogContainer = catalogContainer;
    this._renderedGoodsCount = GOOD_COUNT_PER_STEP;
    this._currentSortByCategoryType = SortByCategoryType.DEFAULT;
    this._currentSortByPriorityType = SortByPriorityType.DEFAULT;
    this._goods = {};
    this._minPaginationStep = 1;
    this._currentPaginationStep = 1;

    this._catalogPaginationComponent = null;
    this._catalogComponent = new CatalogBoardView();
    this._catalogListComponent = new CatalogListView();

    this._filterPresenter = new FilterPresenter(this._catalogContainer, this._filterModel, this._goodsModel);
    this._goodPresenter = new CatalogGoodPresenter(this._siteMenuModel, this._handleViewAction);

    this._handleSortByCategoryChange = this._handleSortByCategoryChange.bind(this);
    this._handleSortByPriorityChange = this._handleSortByPriorityChange.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleMenuModel = this._handleMenuModel.bind(this);
    this._handleViewAction = this._handleViewAction.bind(this);
    this._handlePaginationNextClick = this._handlePaginationNextClick.bind(this);
    this._handlePaginationPreviousClick = this._handlePaginationPreviousClick.bind(this);
    // this._handleModeChange = this._handleModeChange.bind(this);
    this._siteMenuModel.addObserver(this._handleMenuModel);
  }

  init() {
    render(this._catalogContainer, this._catalogComponent, RenderPosition.BEFOREEND);
    render(this._catalogComponent, this._catalogListComponent, RenderPosition.BEFOREEND);

    this._goodsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);

    this._renderCatalog();
  }

  destroy() {
    this._clearCatalog({resetSortByCategoryType: true});

    remove(this._catalogListComponent);
    remove(this._catalogComponent);

    this._goodsModel.removeObserver(this._handleModelEvent);
    this._filterModel.removeObserver(this._handleModelEvent);
  }

  _getGoods() {
    const filter = this._filterModel.getFilter();
    const goods = this._goodsModel.getGoods();

    let filteredGoods = goods.slice(0)
        .filter((good) => filteredGoodsByType(good.type, filter.type))
        .filter((good) => filteredGoodsByType(good.stringAmount, filter.stringAmount))
        .filter((good) => filteredGoodsByPrice(good.price, filter.price));

    switch (this._currentSortByCategoryType) {
      case SortByCategoryType.DEFAULT:
        if (this._currentSortByPriorityType === SortByPriorityType.UP) {
          this._currentSortByCategoryType = SortByCategoryType.PRICE;
          return filteredGoods.sort(sortPopularityUp);
        }
        if (this._currentSortByPriorityType === SortByPriorityType.DOWN) {
          this._currentSortByCategoryType = SortByCategoryType.PRICE;
          return filteredGoods.sort(sortPopularityDown);
        }
        break;
      case SortByCategoryType.PRICE:
        if (this._currentSortByPriorityType === SortByPriorityType.DEFAULT) {
          this._currentSortByPriorityType = SortByPriorityType.UP;
          return filteredGoods.sort(sortPriceUp);
        }
        if (this._currentSortByPriorityType === SortByPriorityType.UP) {
          return filteredGoods.sort(sortPriceUp);
        }
        if (this._currentSortByPriorityType === SortByPriorityType.DOWN) {
          return filteredGoods.sort(sortPriceDown);
        }
        break;
      case SortByCategoryType.POPULARITY:
        if (this._currentSortByPriorityType === SortByPriorityType.DEFAULT) {
          this._currentSortByPriorityType = SortByPriorityType.UP;
          return filteredGoods.sort(sortPopularityUp);
        }
        if (this._currentSortByPriorityType === SortByPriorityType.UP) {
          return filteredGoods.sort(sortPopularityUp);
        }
        if (this._currentSortByPriorityType === SortByPriorityType.DOWN) {
          return filteredGoods.sort(sortPopularityDown);
        }
        break;
    }

    return filteredGoods;
  }

  _handleSortByCategoryChange(sortByCategory) {
    if (this._currentSortByCategoryType === sortByCategory) {
      return;
    }

    this._currentSortByCategoryType = sortByCategory;

    this._clearCatalog();
    this._renderCatalog();
  }

  _handleSortByPriorityChange(sortByPriority) {
    if (this._currentSortByPriorityType === sortByPriority) {
      return;
    }

    this._currentSortByPriorityType = sortByPriority;

    this._clearCatalog();
    this._renderCatalog();
  }

  _handleViewAction(actionType, update) {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this._basketModel.updateGood(actionType, update);
        break;
      case UserAction.ADD_POINT:
        this._goodPresenter.setSaving();
        // this._api.addPoint(update).then((response) => {
        //   this._pointsModel.addPoint(updateType, response);
        // })
        // .catch(() => {
        //   this._pointNewPresenter.setAborting();
        // });
        break;
      // case UserAction.DELETE_POINT:
      //   this._pointItems[update.id].setViewState(PointPresenterViewState.DELETING);
      //   this._api.deletePoint(update).then(() => {
      //     this._pointsModel.deletePoint(updateType, update);
      //   })
      //   .catch(() => {
      //     this._pointItems[update.id].setViewState(PointPresenterViewState.ABORTING);
      //   });
      //   break;
    }
  }

  _handleModelEvent() {
    this._clearCatalog();
    this._renderCatalog();
  }


  _handleMenuModel(menuItem) {
    switch (menuItem) {
      case MenuItem.CATALOG:
        this.init();
        this._basketPresenter.destroy();
        break;
      case MenuItem.BASKET:
        this.destroy();
        const siteMainElement = document.querySelector(`.page-main`);
        const siteMainContainerElement = siteMainElement.querySelector(`.container`);

        this._basketPresenter = new BasketPresenter(siteMainContainerElement, this._basketModel);

        this._basketPresenter.init();
        break;
    }
  }

  _handlePaginationNextClick() {
    const goodsCount = this._getGoods().length;

    this._currentPaginationStep++;

    const startIndex = GOOD_COUNT_PER_STEP * this._currentPaginationStep - GOOD_COUNT_PER_STEP;
    const endIndex = GOOD_COUNT_PER_STEP * this._currentPaginationStep;

    const goods = this._getGoods().slice(startIndex, endIndex);

    Object
        .values(this._goods)
        .forEach((presenter) => presenter.destroy());
    this._goods = {};

    this._renderGoods(goods);

    if (this._currentPaginationStep > this._minPaginationStep) {
      this._catalogPaginationComponent.getElement()
          .querySelector(`.pagination__item--button-previous`)
          .classList.remove(`pagination__item--hide`);
    }

    if (GOOD_COUNT_PER_STEP > goodsCount) {
      remove(this._catalogPaginationComponent);
    }

    if (this._currentPaginationStep >= Math.ceil(goodsCount / this._currentPaginationStep)) {
      this._catalogPaginationComponent.getElement()
          .querySelector(`.pagination__item--button-next`)
          .classList.add(`pagination__item--hide`);
    }

    remove(this._catalogPaginationComponent);
    this._renderPagination(this._renderedGoodsCount);
  }

  _handlePaginationPreviousClick() {
    const goodsCount = this._getGoods().length;

    this._currentPaginationStep--;

    const startIndex = GOOD_COUNT_PER_STEP * this._currentPaginationStep - GOOD_COUNT_PER_STEP;
    const endIndex = GOOD_COUNT_PER_STEP * this._currentPaginationStep;

    const goods = this._getGoods().slice(startIndex, endIndex);

    Object
        .values(this._goods)
        .forEach((presenter) => presenter.destroy());
    this._goods = {};

    this._renderGoods(goods);

    if (GOOD_COUNT_PER_STEP > goodsCount) {
      remove(this._catalogPaginationComponent);
    }

    if (this._currentPaginationStep === this._minPaginationStep) {
      this._catalogPaginationComponent.getElement()
          .querySelector(`.pagination__item--button-previous`)
          .classList.add(`pagination__item--hide`);
    }

    if (this._currentPaginationStep <= Math.ceil(goodsCount / this._currentPaginationStep)) {
      this._catalogPaginationComponent.getElement()
          .querySelector(`.pagination__item--button-next`)
          .classList.remove(`pagination__item--hide`);
    }

    remove(this._catalogPaginationComponent);
    this._renderPagination(this._renderedGoodsCount);
  }

  _renderSort() {
    if (this._catalogSortComponent !== null) {
      this._catalogSortComponent = null;
    }

    this._catalogSortComponent = new CatalogSortView(this._currentSortByCategoryType, this._currentSortByPriorityType);
    this._catalogSortComponent.setSortByCategoryChangeHandler(this._handleSortByCategoryChange);
    this._catalogSortComponent.setSortByPriorityChangeHandler(this._handleSortByPriorityChange);

    render(this._catalogComponent, this._catalogSortComponent, RenderPosition.AFTERBEGIN);
  }

  _renderGood(good) {
    const goodPresenter = new CatalogGoodPresenter(this._siteMenuModel, this._basketModel, this._handleViewAction);
    goodPresenter.init(this._catalogListComponent, good);
    this._goods[good.id] = goodPresenter;
  }

  _renderGoods(goods) {
    goods.forEach((good) => this._renderGood(good));
  }

  _renderPagination() {
    const goodsCount = this._getGoods().length;
    // if (this._catalogPaginationComponent !== null) {
    //   return;
    // }


    this._catalogPaginationComponent = new CatalogPaginationView(goodsCount, GOOD_COUNT_PER_STEP, this._currentPaginationStep);
    this._catalogPaginationComponent.setNextClickHandler(this._handlePaginationNextClick);
    this._catalogPaginationComponent.setPreviousClickHandler(this._handlePaginationPreviousClick);

    render(this._catalogComponent, this._catalogPaginationComponent, RenderPosition.BEFOREEND);

    if (this._currentPaginationStep <= 1) {
      this._catalogPaginationComponent.getElement()
          .querySelector(`.pagination__item--button-previous`)
          .classList.add(`pagination__item--hide`);
    }

    if (this._currentPaginationStep * GOOD_COUNT_PER_STEP >= goodsCount) {
      this._catalogPaginationComponent.getElement()
          .querySelector(`.pagination__item--button-next`)
          .classList.add(`pagination__item--hide`);
    }
  }

  _clearCatalog({resetSortByCategoryType = false} = {}) {
    // const goodCount = this._getGoods().length;

    Object
        .values(this._goods)
        .forEach((presenter) => presenter.destroy());
    this._goods = {};

    this._filterPresenter.destroy();
    remove(this._catalogSortComponent);

    remove(this._catalogPaginationComponent);
    // this._catalogPaginationComponent = null;

    // if (resetRenderedGoodsCount) {
    //   this._renderedGoodsCount = GOOD_COUNT_PER_STEP;
    // } else {
    //   this._renderedGoodsCount = Math.min(goodCount, this._renderedGoodsCount);
    // }

    if (resetSortByCategoryType) {
      this._currentSortByCategoryType = SortByCategoryType.DEFAULT;
      this._currentSortByPriorityType = SortByPriorityType.DEFAULT;
    }
  }

  _renderCatalog() {
    const goods = this._getGoods();
    const goodCount = goods.length;

    // this._currentPaginationStepCount = Math.floor(goodCount / GOOD_COUNT_PER_STEP);

    if (this._filterPresenter !== null) {
      this._filterPresenter.init();
    }

    this._renderSort();
    this._renderGoods(goods.slice(0, Math.min(goodCount, GOOD_COUNT_PER_STEP)));

    if (goodCount > GOOD_COUNT_PER_STEP) {
      this._renderPagination();
    }
  }
}
