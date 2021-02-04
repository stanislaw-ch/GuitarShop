import AbstractView from "./abstract.js";
import {MenuItem, BreadcrumbsItem, BreadcrumbsTitle} from "../const.js";

const createBreadcrumbsTemplate = (siteMenuItem) => {
  const breadcrumbsElement = (element) => {
    let title = ``;
    switch (siteMenuItem) {
      case MenuItem.CATALOG:
        title = element.CATALOG;
        return `<li class="breadcrumbs__item breadcrumbs__item--current"><a class="breadcrumbs__link">${title}</a></li>`;
      case MenuItem.BASKET:
        title = element.BASKET;
        return `<li class="breadcrumbs__item"><a href="#" class="breadcrumbs__link">${element.CATALOG}</a></li><li class="breadcrumbs__item breadcrumbs__item--current"><a class="breadcrumbs__link">${title}</a></li>`;
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
      <a href="#" class="breadcrumbs__link">Главная</a>
    </li>

      ${breadcrumbsElement(BreadcrumbsItem)}

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
