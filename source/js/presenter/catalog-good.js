import CatalogItemView from "../view/catalog-item.js";
import CatalogPopUpAddView from "../view/catalog-popUp-add.js";
import CatalogPopUpSuccessView from "../view/catalog-popUp-success.js";
import SiteMenuView from "../view/site-menu.js";
import {render, RenderPosition, remove} from "../utils/render.js";
import {UserAction, UpdateType} from "../const.js";

export default class CatalogGood {
  constructor(siteMenuModel, basketModel, changeData) {
    this._changeData = changeData;
    this._catalogPopUpContainer = document.querySelector(`body`);
    this._siteMenuModel = siteMenuModel;
    this._basketModel = basketModel;

    this._catalogItemComponent = null;
    this._catalogPopUpAddComponent = null;
    this._catalogPopUpSuccessComponent = null;


    this._siteMenuComponent = new SiteMenuView();

    this._handleAddToBasketClick = this._handleAddToBasketClick.bind(this);
    this._handleAddToBasketPopUpClick = this._handleAddToBasketPopUpClick.bind(this);
    this._handleAddToBasketPopUpSuccessClick = this._handleAddToBasketPopUpSuccessClick.bind(this);
    this._handleToShoppingPopUpClick = this._handleToShoppingPopUpClick.bind(this);
    this._handleCloseClick = this._handleCloseClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init(catalogListContainer, catalogCard) {
    this._catalogCard = catalogCard;
    // this._goodBasket = {};

    this._catalogItemComponent = new CatalogItemView(catalogCard);
    render(catalogListContainer, this._catalogItemComponent, RenderPosition.BEFOREEND);

    this._catalogItemComponent.setAddClickHandler(this._handleAddToBasketClick);

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

  _handleAddToBasketPopUpClick(data) {
    this._removePopUpAddComponent();
    this._catalogPopUpSuccessComponent = new CatalogPopUpSuccessView();

    this._catalogPopUpSuccessComponent.setCloseClickHandler(this._handleCloseClick);
    this._catalogPopUpSuccessComponent.setToBasketClickHandler(this._handleAddToBasketPopUpSuccessClick);
    this._catalogPopUpSuccessComponent.setToShoppingClickHandler(this._handleToShoppingPopUpClick);
    this._catalogPopUpSuccessComponent.setCloseClickHandler(this._handleCloseClick);

    render(this._catalogPopUpContainer, this._catalogPopUpSuccessComponent, RenderPosition.AFTERBEGIN);
    document.addEventListener(`keydown`, this._escKeyDownHandler);

    this._goods = this._basketModel.getBasket();

    const index = this._goods.findIndex((good) => good.identiferNumber === data.identiferNumber);

    if (index === -1 || this._goods.length === 0) {
      this._basketModel.addGood(UpdateType.MINOR, Object.assign({}, data, {count: 1}));
      return;
    }
    let count = this._goods[index].count;
    count++;

    this._changeData(
        UserAction.UPDATE_POINT,
        Object.assign({}, data, {count})
    );
  }

  _handleAddToBasketPopUpSuccessClick(menuItem) {
    this._currentMenuItem = this._siteMenuModel.getMenuItem();

    // this._siteMenuComponent.getElement()
    //     .querySelector(`[data-menu-type="${this._currentMenuItem}"]`)
    //     .parentElement.classList.remove(`site-list__item--active`);

    // this._siteMenuComponent.getElement()
    //     .querySelector(`[data-menu-type="${menuItem}"]`)
    //     .parentElement.classList.add(`site-list__item--active`);

    this._siteMenuModel.setMenuItem(menuItem);
    this._removePopUpSuccessComponent();
  }

  _handleToShoppingPopUpClick() {
    this._removePopUpSuccessComponent();
  }
}
