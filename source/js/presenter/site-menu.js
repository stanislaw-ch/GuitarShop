import SiteMenuView from "../view/site-menu.js";
import CatalogPopUpSuccessView from "../view/catalog-popUp-success.js";
import {render, RenderPosition} from "../utils/render.js";

export default class SiteMenu {
  constructor(siteMenuContainer, siteMenuModel) {
    this._siteMenuContainer = siteMenuContainer;
    this._siteMenuModel = siteMenuModel;
    this._currentFilter = null;

    this._siteMenuComponent = new SiteMenuView();

    this._catalogPopUpSuccessComponent = new CatalogPopUpSuccessView();

    this._handleSiteMenuChange = this._handleSiteMenuChange.bind(this);
  }

  init() {
    render(this._siteMenuContainer, this._siteMenuComponent, RenderPosition.AFTERBEGIN);

    this._siteMenuComponent.setMenuClickHandler(this._handleSiteMenuChange);
  }

  _handleSiteMenuChange(menuItem) {
    this._currentMenuItem = this._siteMenuModel.getMenuItem();
    if (this._currentMenuItem === menuItem || menuItem === null) {
      return;
    }

    this._siteMenuComponent.getElement()
        .querySelector(`[data-menu-type="${this._currentMenuItem}"]`)
        .parentElement.classList.remove(`site-list__item--active`);

    this._siteMenuComponent.getElement()
        .querySelector(`[data-menu-type="${menuItem}"]`)
        .parentElement.classList.add(`site-list__item--active`);

    this._siteMenuModel.setMenuItem(menuItem);
  }

  // destroy() {
  //   remove(this._siteMenuComponent);

  //   this._siteMenuComponent = null;

  //   this._cardsModel.removeObserver(this._handleModelEvent);
  //   this._siteMenuModel.removeObserver(this._handleModelEvent);
  // }

  // _handleModelEvent() {
  //   this.init();
  // }
}
