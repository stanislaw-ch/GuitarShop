import SiteMenuView from "./view/site-menu.js";
import BreadcrumbsView from "./view/breadcrumbs.js";
import CatalogSectionView from "./view/catalog-section.js";
import CatalogSectionWrapperView from "./view/catalog-section-wrapper.js";
import CatalogPresenter from "./presenter/catalog.js";
import FilterPresenter from "./presenter/filter.js";
import CardsModel from "./model/cards.js";
import FilterModel from "./model/filter.js";

import cards from "./mock/json.js";
import {render, RenderPosition, remove} from "./utils/render.js";
import {MenuItem} from "./const.js";

// const PRODUCT_COUNT = 10;
// const cards = new Array(PRODUCT_COUNT).fill().map(generateProduct);

const cardsModel = new CardsModel();
cardsModel.setCards(cards);

const filterModel = new FilterModel();
const siteMenuComponent = new SiteMenuView();
const siteCatalogSectionComponent = new CatalogSectionView();
const siteCatalogSectionWrapperComponent = new CatalogSectionWrapperView();

const siteHeaderElement = document.querySelector(`.page-header`);
const siteMainElement = document.querySelector(`.page-main`);
const siteMainContainerElement = siteMainElement.querySelector(`.container`);

render(siteHeaderElement, siteMenuComponent, RenderPosition.AFTERBEGIN);
render(siteMainContainerElement, new BreadcrumbsView(), RenderPosition.BEFOREEND);
render(siteMainContainerElement, siteCatalogSectionComponent, RenderPosition.BEFOREEND);
render(siteCatalogSectionComponent, siteCatalogSectionWrapperComponent, RenderPosition.BEFOREEND);

const catalogPresenter = new CatalogPresenter(siteCatalogSectionWrapperComponent, cardsModel, filterModel);
const filterPresenter = new FilterPresenter(siteCatalogSectionWrapperComponent, filterModel, cardsModel);

// siteMenuComponent.setMenuItem(MenuItem.CARDS);

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.CARDS:
      render(siteMainContainerElement, siteCatalogSectionComponent, RenderPosition.BEFOREEND);
      render(siteCatalogSectionComponent, siteCatalogSectionWrapperComponent, RenderPosition.BEFOREEND);
      filterPresenter.init();
      catalogPresenter.init();
      // remove(statisticsComponent);
      break;
    case MenuItem.BASKET:
      filterPresenter.destroy();
      catalogPresenter.destroy();
      remove(siteCatalogSectionComponent);
      remove(siteCatalogSectionWrapperComponent);
      // statisticsComponent = new StatisticsView(tasksModel.getTasks());
      // render(siteMainElement, statisticsComponent, RenderPosition.BEFOREEND);
      break;
  }
};

siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);

filterPresenter.init();
catalogPresenter.init();
