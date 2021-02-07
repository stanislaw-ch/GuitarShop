import SiteMenuView from "../view/site-menu.js";
import {render, RenderPosition, remove} from "../utils/render.js";

export default class SiteMenu {
  constructor(siteMenuContainer, siteMenuModel, basketModel) {
    this._siteMenuContainer = siteMenuContainer;
    this._siteMenuModel = siteMenuModel;
    this._basketModel = basketModel;

    this._handleSiteMenuChange = this._handleSiteMenuChange.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
  }

  init() {
    this._siteMenuComponent = new SiteMenuView(this._basketModel.getBasket());
    render(this._siteMenuContainer, this._siteMenuComponent, RenderPosition.AFTERBEGIN);

    this._siteMenuComponent.setMenuClickHandler(this._handleSiteMenuChange);

    this._siteMenuModel.addObserver(this._handleModelEvent);
    this._basketModel.addObserver(this._handleModelEvent);
  }

  destroy() {
    remove(this._siteMenuComponent);

    this._siteMenuComponent = null;

    this._siteMenuModel.removeObserver(this._handleModelEvent);
    this._basketModel.removeObserver(this._handleModelEvent);
  }

  _handleModelEvent() {
    this.destroy();
    this.init();
  }

  _handleSiteMenuChange(menuItem) {
    this._currentMenuItem = this._siteMenuModel.getMenuItem();

    if (this._currentMenuItem === menuItem || menuItem === null) {
      return;
    }

    this._siteMenuModel.setMenuItem(menuItem);
  }
}
