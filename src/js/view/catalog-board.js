import AbstractView from "./abstract.js";

const createCatalogBoardTemplate = () => {
  return `<div class="catalog__catalog-column"></div>`;
};

export default class catalogBoard extends AbstractView {
  getTemplate() {
    return createCatalogBoardTemplate();
  }
}
