import '../assets/sass/main.scss';
import SiteMenuPresenter from "./presenter/site-menu.js";
import CatalogPresenter from "./presenter/catalog.js";
import BreadcrumbsPresenter from "./presenter/breadcrumbs.js";
import GoodsModel from "./model/goods.js";
import FilterModel from "./model/filter.js";
import SiteMenuModel from "./model/site-menu.js";
import BasketModel from "./model/basket.js";

import goods from "./mock/goods.json";

const goodsModel = new GoodsModel();
goodsModel.setGoods(goods);

const filterModel = new FilterModel();
const siteMenuModel = new SiteMenuModel();
const basketModel = new BasketModel();

const siteHeaderElement = document.querySelector(`.page-header`);
const siteMainElement = document.querySelector(`.page-main`);
const siteMainContainerElement = siteMainElement.querySelector(`.container`);

const siteMenuPresenter = new SiteMenuPresenter(siteHeaderElement, siteMenuModel, basketModel);
const breadcrumbsPresenter = new BreadcrumbsPresenter(siteMainContainerElement, siteMenuModel);
const catalogPresenter = new CatalogPresenter(siteMainContainerElement, goodsModel, filterModel, siteMenuModel, basketModel);

siteMenuPresenter.init();
breadcrumbsPresenter.init();
catalogPresenter.init();
