import '../assets/sass/main.scss';
import CatalogSectionView from "./view/catalog-section.js";
import CatalogSectionWrapperView from "./view/catalog-section-wrapper.js";
import SiteMenuPresenter from "./presenter/site-menu.js";
import CatalogPresenter from "./presenter/catalog.js";
import BreadcrumbsPresenter from "./presenter/breadcrumbs.js";
import GoodsModel from "./model/goods.js";
import FilterModel from "./model/filter.js";
import SiteMenuModel from "./model/site-menu.js";
import BasketModel from "./model/basket.js";

import goods from "./mock/goods.json";
import {render, RenderPosition} from "./utils/render.js";

const goodsModel = new GoodsModel();
goodsModel.setGoods(goods);

const filterModel = new FilterModel();
const siteMenuModel = new SiteMenuModel();
const basketModel = new BasketModel();
const siteCatalogSectionComponent = new CatalogSectionView();
const siteCatalogSectionWrapperComponent = new CatalogSectionWrapperView();

const siteHeaderElement = document.querySelector(`.page-header`);
const siteMainElement = document.querySelector(`.page-main`);
const siteMainContainerElement = siteMainElement.querySelector(`.container`);

render(siteMainContainerElement, siteCatalogSectionComponent, RenderPosition.BEFOREEND);
render(siteCatalogSectionComponent, siteCatalogSectionWrapperComponent, RenderPosition.BEFOREEND);

const siteMenuPresenter = new SiteMenuPresenter(siteHeaderElement, siteMenuModel, basketModel);
const breadcrumbsPresenter = new BreadcrumbsPresenter(siteMainContainerElement, siteMenuModel);
const catalogPresenter = new CatalogPresenter(siteCatalogSectionWrapperComponent, goodsModel, filterModel, siteMenuModel, basketModel);

siteMenuPresenter.init();
breadcrumbsPresenter.init();
catalogPresenter.init();
