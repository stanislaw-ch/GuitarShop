import AbstractView from "./abstract.js";
import {MenuItem, BreadcrumbsItem, BreadcrumbsTitle} from "../const.js";

const createBreadcrumbsTemplate = (siteMenuItem) => {
  const breadcrumbsElement = (element) => {
    let title = ``;
    switch (siteMenuItem) {
      case MenuItem.CATALOG:
        title = element.CATALOG;
        return `<li class="breadcrumbs__item breadcrumbs__item--current">
                  <a class="breadcrumbs__link">${title}</a>
                </li>`;
      case MenuItem.BASKET:
        title = element.BASKET;
        return `<li class="breadcrumbs__item">
                  <a class="breadcrumbs__link" data-breadcrumbs-type="${MenuItem.CATALOG}">${element.CATALOG}</a>
                </li>
                <li class="breadcrumbs__item breadcrumbs__item--current">
                  <a class="breadcrumbs__link">${title}</a>
                </li>`;
    }
    return title;
  };
  const breadcrumbsTitle = (element) => {
    let title = ``;
    switch (siteMenuItem) {
      case MenuItem.CATALOG:
        title = element.CATALOG;
        return title;
      case MenuItem.BASKET:
        title = element.BASKET;
        return title;
    }
    return title;
  };

  return `<div><h2 class="page-main__title">${breadcrumbsTitle(BreadcrumbsTitle)}</h2>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <a class="breadcrumbs__link">Главная</a>
    </li>

      ${breadcrumbsElement(BreadcrumbsItem)}

  </ul></div>`;
};

export default class Breadcrumbs extends AbstractView {
  constructor(siteMenuModel) {
    super();
    this._siteMenuModel = siteMenuModel;
    this._breadcrumbsClickHandler = this._breadcrumbsClickHandler.bind(this);
  }

  getTemplate() {
    return createBreadcrumbsTemplate(this._siteMenuModel);
  }

  _breadcrumbsClickHandler(evt) {
    evt.preventDefault();
    if (evt.target.dataset.breadcrumbsType) {
      this._callback.breadcrumbsClick(evt.target.dataset.breadcrumbsType);
    }
  }

  setBreadcrumbsClickHandler(callback) {
    this._callback.breadcrumbsClick = callback;
    this.getElement().addEventListener(`click`, this._breadcrumbsClickHandler);
  }
}
