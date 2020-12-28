import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createBreadcrumbsTemplate} from "./view/breadcrumbs.js";
import {createFiltersElement} from "./view/filters.js";
import {createCatalogSortElement} from "./view/catalog-sort.js";
import {createCatalogListElement} from "./view/catalog-list.js";
import {createCatalogItemElement} from "./view/catalog-item.js";
import {createCatalogPaginationElement} from "./view/catalog-pagination.js";

const PRODUCT_COUNT = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.page-header`);
const siteCatalogElement = document.querySelector(`.catalog`);
const siteFiltersColumnElement = document.querySelector(`.catalog__filters-column`);
const siteCatalogColumnElement = document.querySelector(`.catalog__catalog-column`);

render(siteHeaderElement, createSiteMenuTemplate(), `afterbegin`);
render(siteCatalogElement, createBreadcrumbsTemplate(), `beforebegin`);
render(siteFiltersColumnElement, createFiltersElement(), `afterbegin`);
render(siteCatalogColumnElement, createCatalogSortElement(), `beforeend`);
render(siteCatalogColumnElement, createCatalogListElement(), `beforeend`);

const siteCatalogColumnListElement = document.querySelector(`.catalog__list`);

for (let i = 0; i < PRODUCT_COUNT; i++) {
  render(siteCatalogColumnListElement, createCatalogItemElement(), `afterbegin`);
}

render(siteCatalogColumnElement, createCatalogPaginationElement(), `beforeend`);
