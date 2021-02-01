import BasketView from "../view/basket.js";
import BasketGoodPresenter from "../presenter/basket-good.js";
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
  }

  init() {
    this._basketComponent = new BasketView(this._basketModel.getBasket(), this._currentDiscountType, this._isAvailable);

    render(this._basketContainer, this._basketComponent, RenderPosition.BEFOREEND);

    this._renderBasket();

    this._basketComponent.setDiscountClickHandler(this._handleDiscountClick);
    this._basketModel.addObserver(this._handleModelEvent);
  }

  destroy() {
    remove(this._basketComponent);

    this._basketComponent = null;
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
      case UserAction.UPDATE_GOOD:
        this._basketModel.updateGood(updateType, update);
        break;
      case UserAction.DELETE_GOOD:
        this._basketModel.deleteGood(updateType, update);
        break;
    }
  }

  _handleModelEvent(updateType) {
    switch (updateType) {
      case UpdateType.INIT:
        this.destroy();
        this.init();
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
  }
}
