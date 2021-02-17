import AbstractView from "./abstract.js";
import {MenuItem} from "../const.js";

const createSiteMenuTemplate = (basketModel) => {
  const goodsInBasket = basketModel;

  let goodsCount = 0;
  if (goodsInBasket.length !== 0) {
    goodsCount = goodsInBasket.map((good) => good.count)
        .reduce((total, count) => total + count);
  }
  return `<nav class="main-nav">
    <div class="container">
      <div class="main-nav__wrapper">
        <a href="#" class="main-nav__logo">
          <span class="visually-hidden">Логотип магазина гитар</span>
          <svg width="67" height="70">
            <use xlink:href="img/sprite/sprite.svg#sprite-logo"></use>
          </svg>
        </a>
        <ul class="main-nav__list site-list">
          <li class="site-list__item">
            <a href="#" data-menu-type="${MenuItem.CATALOG}">Каталог</a>
          </li>
          <li class="site-list__item">
            <a href="#">Где купить?</a>
          </li>
          <li class="site-list__item">
            <a href="#">О компании</a>
          </li>
          <li class="site-list__item">
            <a href="#">Cервис-центры</a>
          </li>
        </ul>
        <ul class="main-nav__list user-list">
          <li class="user-list__item user-list__item--location">
            <a href="#">
              <span class="visually-hidden">Локация</span>
              <svg width="14" height="17">
                <use xlink:href="img/sprite/sprite.svg#sprite-icon_location"></use>
              </svg>
            </a>
          </li>
          <li class="user-list__item user-list__item--search">
            <a href="#">
              <span class="visually-hidden">Поиск по сайту</span>
              <svg width="14" height="14">
                <use xlink:href="img/sprite/sprite.svg#sprite-icon_search"></use>
              </svg>
            </a>
          </li>
          <li class="user-list__item user-list__item--basket">
            <a href="#" data-menu-type="${MenuItem.BASKET}">
              <span class="visually-hidden">Корзина</span>
              <svg width="16" height="18">
                <use xlink:href="img/sprite/sprite.svg#sprite-icon_basket"></use>
              </svg>
            </a>
            <span class="" data-title="${goodsInBasket.length === 0 ? `` : goodsCount}"></span>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
};

export default class SiteMenu extends AbstractView {
  constructor(basketModel) {
    super();

    this._basketModel = basketModel;
    this._menuClickHandler = this._menuClickHandler.bind(this);
  }

  getTemplate() {
    return createSiteMenuTemplate(this._basketModel);
  }

  _menuClickHandler(evt) {
    evt.preventDefault();
    if (evt.target.tagName !== `A`) {
      return this._callback.menuClick(evt.target.parentNode.dataset.menuType);
    }
    return this._callback.menuClick(evt.target.dataset.menuType);
  }

  setMenuClickHandler(callback) {
    this._callback.menuClick = callback;
    this.getElement().addEventListener(`click`, this._menuClickHandler);
  }
}
