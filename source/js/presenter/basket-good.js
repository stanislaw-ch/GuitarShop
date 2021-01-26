import BasketItemView from "../view/basket-item.js";
import BasketPopUpDeleteView from "../view/basket-popUp-delete.js";
import {render, RenderPosition, remove} from "../utils/render.js";
import {UserAction, UpdateType} from "../const.js";

export default class BasketGoodElement {
  constructor(basketContainer, basketModel, changeData) {
    this._basketContainer = basketContainer;
    this._basketModel = basketModel;
    this._changeData = changeData;

    this._basketPopUpContainer = document.querySelector(`body`);

    this._handleQuantityIncClick = this._handleQuantityIncClick.bind(this);
    this._handleQuantityDecClick = this._handleQuantityDecClick.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);

    this._handleDeletePopUpClick = this._handleDeletePopUpClick.bind(this);
    this._handleToShoppingPopUpClick = this._handleToShoppingPopUpClick.bind(this);
    this._handleCloseClick = this._handleCloseClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init(basketCard) {
    this._basketCard = basketCard;

    this._basketItemComponent = new BasketItemView(this._basketCard);

    const basketListComponent = this._basketContainer.querySelector(`.product__list`);
    render(basketListComponent, this._basketItemComponent, RenderPosition.BEFOREEND);

    this._basketItemComponent.setQuantityIncHandle(this._handleQuantityIncClick);
    this._basketItemComponent.setQuantityDecHandle(this._handleQuantityDecClick);
    this._basketItemComponent.setDeleteClickHandler(this._handleDeleteClick);
  }

  destroy() {
    remove(this._basketItemComponent);
  }

  _handleQuantityIncClick(update) {
    this._changeData(
        UserAction.UPDATE_POINT,
        UpdateType.MINOR,
        Object.assign({}, this._basketCard, {count: update})
    );
  }

  _handleQuantityDecClick(update) {
    if (update < 1) {
      this._handleDeleteClick();
      return;
    }
    this._changeData(
        UserAction.UPDATE_POINT,
        UpdateType.MINOR,
        Object.assign({}, this._basketCard, {count: update})
    );
  }

  _handleDeleteClick() {
    this._basketPopUpDeleteComponent = new BasketPopUpDeleteView(this._basketCard);

    render(this._basketPopUpContainer, this._basketPopUpDeleteComponent, RenderPosition.AFTERBEGIN);
    document.addEventListener(`keydown`, this._escKeyDownHandler);

    this._basketPopUpDeleteComponent.setCloseClickHandler(this._handleCloseClick);
    this._basketPopUpDeleteComponent.setDeleteClickHandler(this._handleDeletePopUpClick);
    this._basketPopUpDeleteComponent.setToShoppingClickHandler(this._handleToShoppingPopUpClick);

  }

  _handleDeletePopUpClick() {
    this._changeData(
        UserAction.DELETE_POINT,
        UpdateType.MINOR,
        Object.assign({}, this._basketCard)
    );
    this._removeBasketPopUpDeleteComponent();
  }

  _removeBasketPopUpDeleteComponent() {
    remove(this._basketPopUpDeleteComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();

      if (this._basketPopUpDeleteComponent !== null) {
        this._removeBasketPopUpDeleteComponent();
      }
    }
  }

  _handleCloseClick() {
    if (this._basketPopUpDeleteComponent !== null) {
      this._basketPopUpDeleteComponent();
    }
  }

  _handleToShoppingPopUpClick() {
    this._removeBasketPopUpDeleteComponent();
  }
}
