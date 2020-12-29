import SiteMenuView from "./view/site-menu.js";
import BreadcrumbsView from "./view/breadcrumbs.js";
import FiltersView from "./view/filters.js";
import CatalogSortView from "./view/catalog-sort.js";
import CatalogListView from "./view/catalog-list.js";
import CatalogItemView from "./view/catalog-item.js";
import CatalogPaginationView from "./view/catalog-pagination.js";
import CatalogBoardView from "./view/catalog-board.js";

import {generateProduct} from "./mock/product.js";
import {render, RenderPosition} from "./utils.js";

const PRODUCT_COUNT = 9;
const PRODUCT_COUNT_PER_STEP = 9;

const product = generateProduct();

const siteHeaderElement = document.querySelector(`.page-header`);
const siteCatalogElement = document.querySelector(`.catalog`);
const siteCatalogWrapperElement = document.querySelector(`.catalog__content-wrapper`);
const siteFiltersColumnElement = document.querySelector(`.catalog__filters-column`);

const cataloglistComponent = new CatalogListView();

render(siteHeaderElement, new SiteMenuView().getElement(), RenderPosition.AFTERBEGIN);
render(siteCatalogElement, new BreadcrumbsView().getElement(), RenderPosition.BEFOREBEGIN);
render(siteFiltersColumnElement, new FiltersView().getElement(), RenderPosition.BEFOREEND);

const renderCatalog = (catalogContainer, catalogProducts) => {
  const boardComponent = new CatalogBoardView();

  render(catalogContainer, boardComponent.getElement(), RenderPosition.BEFOREEND);

  render(boardComponent.getElement(), new CatalogSortView().getElement(), RenderPosition.BEFOREEND);
  render(boardComponent.getElement(), cataloglistComponent.getElement(), RenderPosition.BEFOREEND);

  for (let i = 0; i < PRODUCT_COUNT; i++) {
    render(cataloglistComponent.getElement(), new CatalogItemView(catalogProducts).getElement(), RenderPosition.AFTERBEGIN);
  }

  if (PRODUCT_COUNT > PRODUCT_COUNT_PER_STEP) {
    render(boardComponent.getElement(), new CatalogPaginationView().getElement(), RenderPosition.BEFOREEND);
  }
};

renderCatalog(siteCatalogWrapperElement, product);
