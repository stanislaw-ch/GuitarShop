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

const GOOD_COUNT_PER_STEP = 9;

export default class Board {
  constructor(catalogContainer, goodsModel, filterModel, siteMenuModel, basketModel) {
    this._goodsModel = goodsModel;
    this._filterModel = filterModel;
    this._siteMenuModel = siteMenuModel;
    this._basketModel = basketModel;
    this._catalogContainer = catalogContainer;
    this._renderedCardsCount = GOOD_COUNT_PER_STEP;
    this._currentSortByCategoryType = SortByCategoryType.DEFAULT;
    this._currentSortByPriorityType = SortByPriorityType.DEFAULT;
    this._goods = {};
    this._catalogComponent = new CatalogBoardView();
    this._catalogListComponent = new CatalogListView();
    this._catalogPaginationComponent = new CatalogPaginationView();

    this._filterPresenter = new FilterPresenter(this._catalogContainer, this._filterModel, this._goodsModel);
    this._goodPresenter = new CatalogGoodPresenter(this._siteMenuModel, this._handleViewAction);

    this._handleSortByCategoryChange = this._handleSortByCategoryChange.bind(this);
    this._handleSortByPriorityChange = this._handleSortByPriorityChange.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleMenuModel = this._handleMenuModel.bind(this);
    this._handleViewAction = this._handleViewAction.bind(this);
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
    this._clearCatalog({resetRenderedGoodsCount: true, resetSortByCategoryType: true});

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

    this._clearCatalog({resetRenderedGoodsCount: true});
    this._renderCatalog();
  }

  _handleSortByPriorityChange(sortByPriority) {
    if (this._currentSortByPriorityType === sortByPriority) {
      return;
    }

    this._currentSortByPriorityType = sortByPriority;

    this._clearCatalog({resetRenderedGoodsCount: true});
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
    this._clearCatalog({resetRenderedGoodsCount: true});
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
    render(this._catalogComponent, this._catalogPaginationComponent, RenderPosition.BEFOREEND);
  }

  _clearCatalog({resetRenderedGoodsCount = false, resetSortByCategoryType = false} = {}) {
    const goodCount = this._getGoods().length;

    Object
        .values(this._goods)
        .forEach((presenter) => presenter.destroy());
    this._goods = {};

    this._filterPresenter.destroy();
    remove(this._catalogSortComponent);

    if (resetRenderedGoodsCount) {
      this._renderedGoodsCount = GOOD_COUNT_PER_STEP;
    } else {
      this._renderedGoodsCount = Math.min(goodCount, this._renderedGoodsCount);
    }

    if (resetSortByCategoryType) {
      this._currentSortByCategoryType = SortByCategoryType.DEFAULT;
      this._currentSortByPriorityType = SortByPriorityType.DEFAULT;
    }
  }

  _renderCatalog() {
    const goods = this._getGoods();
    const goodCount = goods.length;

    // if (goodCount === 0) {
    //   this._renderNoCards();
    //   return;
    // }

    if (this._filterPresenter !== null) {
      this._filterPresenter.init();
    }

    this._renderSort();
    this._renderGoods(goods.slice(0, Math.min(goodCount, this._renderedCardsCount)));

    // if (cardCount > this._renderedCardsCount) {
    this._renderPagination();


    // }
  }
}
