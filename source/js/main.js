import CatalogSectionView from "./view/catalog-section.js";
import CatalogSectionWrapperView from "./view/catalog-section-wrapper.js";
import SiteMenuPresenter from "./presenter/site-menu.js";
import CatalogPresenter from "./presenter/catalog.js";
import BreadcrumbsPresenter from "./presenter/breadcrumbs.js";
import GoodsModel from "./model/goods.js";
import FilterModel from "./model/filter.js";
import SiteMenuModel from "./model/site-menu.js";
import BasketModel from "./model/basket.js";
import Api from "./api/index.js";
import Store from "./api/store.js";
import Provider from "./api/provider.js";

import goods1 from "./mock/goods.json";
import {render, RenderPosition} from "./utils/render.js";

const AUTHORIZATION = `Basic oovigizsskoktddjjhg`;
const END_POINT = `./mock/goods.json`;
const STORE_PREFIX = `guitarShop-localStorage`;
const STORE_VER = `v01`;
const STORE_NAME = `${STORE_PREFIX}-${STORE_VER}`;

const api = new Api(END_POINT, AUTHORIZATION);
const store = new Store(STORE_NAME, window.localStorage);
const apiWithProvider = new Provider(api, store);

const goodsModel = new GoodsModel();
goodsModel.setGoods(goods1);

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

// apiWithProvider.getPoints()
//     .then((goods) => {
//       goodsModel.setGoods(goods);
//     })
//     .catch(() => {
//       goodsModel.setGoods([]);
//     });

// window.addEventListener(`load`, () => {
//   navigator.serviceWorker.register(`/sw.js`);
// });

// window.addEventListener(`online`, () => {
//   document.title = document.title.replace(` [offline]`, ``);
//   apiWithProvider.sync();
// });

// window.addEventListener(`offline`, () => {
//   document.title += ` [offline]`;
// });
