import BasketView from "../view/basket.js";
import BasketGoodPresenter, {State as CardPresenterViewState} from "../presenter/basket-good.js";
import {render, RenderPosition, remove} from "../utils/render.js";
import {UserAction, UpdateType, DiscountType} from "../const.js";

export default class Basket {
  constructor(basketContainer, basketModel) {
    this._basketContainer = basketContainer;
    this._basketModel = basketModel;
    this._currentDiscountType = DiscountType.DEFAULT;
    this._isAvailable = true;
    this._currentFilter = null;

    this._goodPresenter = {};

    this._basketComponent = null;


    this._handleDiscountClick = this._handleDiscountClick.bind(this);
    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    // this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
  }

  init() {
    // console.log(`init`);
    this._basketComponent = new BasketView(this._basketModel.getBasket(), this._currentDiscountType, this._isAvailable);

    render(this._basketContainer, this._basketComponent, RenderPosition.BEFOREEND);
    // this._goodsModel.addObserver(this._handleModelEvent);
    this._renderBasket();
    this._basketComponent.setDiscountClickHandler(this._handleDiscountClick);
    this._basketModel.addObserver(this._handleModelEvent);
  }

  destroy() {
    remove(this._basketComponent);

    // Object
    //     .values(this._goodPresenter)
    //     .forEach((presenter) => presenter.destroy());
    // this._goodPresenter = {};

    this._basketComponent = null;

    // this._goodsModel.removeObserver(this._handleModelEvent);
    this._basketModel.removeObserver(this._handleModelEvent);
  }

  _handleDiscountClick(discountType) {
    if (this._currentDiscountType === discountType) {
      return;
    }
    if (!Object.values(DiscountType).includes(discountType)) {
      this._isAvailable = false;
    } else {
      this._isAvailable = true;
    }

    this._currentDiscountType = discountType;

    this.destroy();
    this.init();
  }

  _handleModelEvent() {
    this.init();
  }

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        // this._goodPresenter[update.id].setViewState(CardPresenterViewState.SAVING);
        // console.log(updateType);
        // console.log(update);
        this._basketModel.updateGood(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this._pointNewPresenter.setSaving();
        this._api.addPoint(update).then((response) => {
          this._pointsModel.addPoint(updateType, response);
        })
            .catch(() => {
              this._pointNewPresenter.setAborting();
            });
        break;
      case UserAction.DELETE_POINT:
        this._basketModel.deleteGood(updateType, update);
        break;
    }
  }

  _handleModelEvent(updateType, update) {
    switch (updateType) {
      case UpdateType.MAJOR:
        this._tripInfoPresenter.destroy();
        // this._pointItems[pointItem.id].init(dayPoint, pointItem, this._getOffers(), this._getDestination());
        this._renderTripInfo();
        break;
      case UpdateType.MINOR:
        this.destroy();
        // this._basketComponent.getElement().innerHTML = ``;
        this.init();
        // this._renderBasket();
        break;
      case UpdateType.INIT:
        this._isLoading = false;
        this._newTripBtnComponent.getElement().disabled = false;
        remove(this._loadingComponent);
        this._renderTripInfo();
        this._renderTrip();
        break;
    }
  }

  _renderGood(good) {
    const goodPresenter = new BasketGoodPresenter(this._basketContainer, this._basketModel, this._handleViewAction);
    goodPresenter.init(good);
    this._goodPresenter[good.id] = goodPresenter;
  }

  _renderGoods(goods) {
    goods.forEach((good) => this._renderGood(good));
  }

  _renderBasket() {
    const goods = this._basketModel.getBasket();
    this._renderGoods(goods);
    // }
  }
}
