import CatalogItemView from "../view/catalog-item.js";
import CatalogPopUpAddView from "../view/catalog-popUp-add.js";
import CatalogPopUpSuccessView from "../view/catalog-popUp-success.js";
import SiteMenuView from "../view/site-menu.js";
import {render, RenderPosition, remove} from "../utils/render.js";

export default class Card {
  constructor(catalogListContainer, siteMenuModel) {
    this._catalogListContainer = catalogListContainer;
    this._catalogPopUpContainer = document.querySelector(`body`);
    this._siteMenuModel = siteMenuModel;

    this._catalogItemComponent = null;
    this._catalogPopUpAddComponent = null;
    this._catalogPopUpSuccessComponent = null;

    this._siteMenuComponent = new SiteMenuView();

    this._handleAddToBasketClick = this._handleAddToBasketClick.bind(this);
    this._handleAddToBasketPopUpClick = this._handleAddToBasketPopUpClick.bind(this);
    this._handleAddToBasketPopUpSuccesClick = this._handleAddToBasketPopUpSuccesClick.bind(this);
    this._handleToShoppingPopUpClick = this._handleToShoppingPopUpClick.bind(this);
    this._handleCloseClick = this._handleCloseClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init(catalogCard) {
    this._catalogCard = catalogCard;
    this._cardBasket = {};

    this._catalogItemComponent = new CatalogItemView(catalogCard);

    this._catalogItemComponent.setAddClickHandler(this._handleAddToBasketClick);

    render(this._catalogListContainer, this._catalogItemComponent, RenderPosition.BEFOREEND);
  }

  destroy() {
    remove(this._catalogItemComponent);
  }

  _removePopUpAddComponent() {
    remove(this._catalogPopUpAddComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }

  _removePopUpSuccessComponent() {
    remove(this._catalogPopUpSuccessComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();

      if (this._catalogPopUpAddComponent !== null) {
        this._removePopUpAddComponent();
      }
      if (this._catalogPopUpSuccessComponent !== null) {
        this._removePopUpSuccessComponent();
      }
    }
  }

  _handleCloseClick() {
    if (this._catalogPopUpAddComponent !== null) {
      this._removePopUpAddComponent();
    }
    if (this._catalogPopUpSuccessComponent !== null) {
      this._removePopUpSuccessComponent();
    }
  }

  _handleAddToBasketClick() {
    this._catalogPopUpAddComponent = new CatalogPopUpAddView(this._catalogCard);

    this._catalogPopUpAddComponent.setCloseClickHandler(this._handleCloseClick);
    this._catalogPopUpAddComponent.setAddClickHandler(this._handleAddToBasketPopUpClick);

    render(this._catalogPopUpContainer, this._catalogPopUpAddComponent, RenderPosition.AFTERBEGIN);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
  }

  _handleAddToBasketPopUpClick() {
    this._removePopUpAddComponent();
    this._catalogPopUpSuccessComponent = new CatalogPopUpSuccessView();

    this._catalogPopUpSuccessComponent.setCloseClickHandler(this._handleCloseClick);
    this._catalogPopUpSuccessComponent.setToBasketClickHandler(this._handleAddToBasketPopUpSuccesClick);
    this._catalogPopUpSuccessComponent.setToShoppingClickHandler(this._handleToShoppingPopUpClick);
    this._catalogPopUpSuccessComponent.setCloseClickHandler(this._handleCloseClick);

    render(this._catalogPopUpContainer, this._catalogPopUpSuccessComponent, RenderPosition.AFTERBEGIN);
    document.addEventListener(`keydown`, this._escKeyDownHandler);

    this._cardBasket = new Array(Object.assign({}, this._catalogCard));
    // console.log(this._cardBasket);
  }

  _handleAddToBasketPopUpSuccesClick(menuItem) {
    this._currentMenuItem = this._siteMenuModel.getMenuItem();

    this._siteMenuModel.setMenuItem(menuItem);
    this._removePopUpSuccessComponent();
  }

  _handleToShoppingPopUpClick() {
    this._removePopUpSuccessComponent();
  }
}
