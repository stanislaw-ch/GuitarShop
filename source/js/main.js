import BreadcrumbsView from "./view/breadcrumbs.js";
import CatalogSectionView from "./view/catalog-section.js";
import CatalogSectionWrapperView from "./view/catalog-section-wrapper.js";
import SiteMenuPresenter from "./presenter/site-menu.js";
import CatalogPresenter from "./presenter/catalog.js";
import CardsModel from "./model/cards.js";
import FilterModel from "./model/filter.js";
import SiteMenuModel from "./model/site-menu.js";

import cards from "./mock/json.js";
import {render, RenderPosition} from "./utils/render.js";

const cardsModel = new CardsModel();
cardsModel.setCards(cards);

const filterModel = new FilterModel();
const siteMenuModel = new SiteMenuModel();
const siteCatalogSectionComponent = new CatalogSectionView();
const siteCatalogSectionWrapperComponent = new CatalogSectionWrapperView();

const siteHeaderElement = document.querySelector(`.page-header`);
const siteMainElement = document.querySelector(`.page-main`);
const siteMainContainerElement = siteMainElement.querySelector(`.container`);

render(siteMainContainerElement, new BreadcrumbsView(), RenderPosition.BEFOREEND);
render(siteMainContainerElement, siteCatalogSectionComponent, RenderPosition.BEFOREEND);
render(siteCatalogSectionComponent, siteCatalogSectionWrapperComponent, RenderPosition.BEFOREEND);

const catalogPresenter = new CatalogPresenter(siteCatalogSectionWrapperComponent, cardsModel, filterModel, siteMenuModel);
const siteMenuPresenter = new SiteMenuPresenter(siteHeaderElement, siteMenuModel);

siteMenuPresenter.init();
catalogPresenter.init();
