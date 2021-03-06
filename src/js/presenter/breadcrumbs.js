import BreadcrumbsView from "../view/breadcrumbs.js";
import {render, RenderPosition, remove} from "../utils/render.js";

export default class Breadcrumbs {
  constructor(breadcrumbsContainer, siteMenuModel) {
    this._breadcrumbsContainer = breadcrumbsContainer;
    this._siteMenuModel = siteMenuModel;

    this._breadcrumbsComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleSiteMenuChange = this._handleSiteMenuChange.bind(this);
  }

  init() {
    this._breadcrumbsComponent = new BreadcrumbsView(this._siteMenuModel.getMenuItem());

    render(this._breadcrumbsContainer, this._breadcrumbsComponent, RenderPosition.AFTERBEGIN);
    this._breadcrumbsComponent.setBreadcrumbsClickHandler(this._handleSiteMenuChange);

    this._siteMenuModel.addObserver(this._handleModelEvent);
  }

  destroy() {
    remove(this._breadcrumbsComponent);

    this._breadcrumbsComponent = null;
    this._siteMenuModel.removeObserver(this._handleModelEvent);
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
