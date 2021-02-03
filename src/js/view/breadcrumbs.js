import AbstractView from "./abstract.js";
import {MenuItem, BreadcrumbsItem, BreadcrumbsTitle} from "../const.js";

const createBreadcrumbsTemplate = (siteMenuItem) => {
  const breadcrumbsElement = (element) => {
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

  return `<div><h2 class="page-main__title">${breadcrumbsElement(BreadcrumbsTitle)}</h2>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <a href="#" class="breadcrumbs__link">Главная</a>
    </li>
    <li class="breadcrumbs__item breadcrumbs__item--current">
      <a href="#" class="breadcrumbs__link">${breadcrumbsElement(BreadcrumbsItem)}</a>
    </li>
  </ul></div>`;
};

export default class Breadcrumbs extends AbstractView {
  constructor(siteMenuModel) {
    super();
    this._siteMenuModel = siteMenuModel;
  }

  getTemplate() {
    return createBreadcrumbsTemplate(this._siteMenuModel);
  }
}
