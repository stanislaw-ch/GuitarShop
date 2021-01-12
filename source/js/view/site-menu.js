import AbstractView from "./abstract.js";
import {MenuItem} from "../const.js";

const createSiteMenuTemplate = () => {
  return `<nav class="main-nav">
    <div class="container">
      <div class="main-nav__wrapper">
        <a class="main-nav__logo">
          <svg width="67" height="70">
            <use xlink:href="img/sprite.svg#logo"></use>
          </svg>
        </a>
        <ul class="main-nav__list site-list">
          <li class="site-list__item">
            <a href="#" data-menu-type="${MenuItem.CARDS}">Каталог</a>
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
                <use xlink:href="img/sprite.svg#icon_location"></use>
              </svg>
                <!-- <img src="img/icon_location.svg" width="14" height="17" alt="Локация"> -->
            </a>
          </li>
          <li class="user-list__item user-list__item--search">
            <a href="#">
              <span class="visually-hidden">Поиск по сайту</span>
              <svg width="14" height="14">
                <use xlink:href="img/sprite.svg#icon_search"></use>
              </svg>
              <!-- <img src="img/icon_search.svg" width="14" height="14" alt="Поиск по сайту"> -->
            </a>
          </li>
          <li class="user-list__item user-list__item--basket">
            <a href="#">
              <span class="visually-hidden">Корзина</span>
              <svg width="16" height="18" data-menu-type="${MenuItem.BASKET}">
                <use xlink:href="img/sprite.svg#icon_basket"></use>
              </svg>
              <!-- <img src="img/icon_basket.svg" width="16" height="18" alt="Корзина"> -->
            </a>
            <span class="" data-title="2"></span>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
};

export default class SiteMenu extends AbstractView {
  constructor() {
    super();
    // console.log(currentMenuType);
    // this._currentMenuType = currentMenuType;
    this._menuClickHandler = this._menuClickHandler.bind(this);
  }

  getTemplate() {
    return createSiteMenuTemplate(this._currentMenuType);
  }

  _menuClickHandler(evt) {
    // if (evt.target.tagName === `SVG`) {
    evt.preventDefault();
    this._callback.menuClick(evt.target.dataset.menuType);
    // }
  }

  setMenuClickHandler(callback) {
    this._callback.menuClick = callback;
    this.getElement().addEventListener(`click`, this._menuClickHandler);
  }

  // setMenuItem(menuItem) {
  //   const item = this.getElement().querySelector(`[value=${menuItem}]`);

  //   if (item !== null) {
  //     item.checked = true;
  //   }
  // }
}
