import AbstractView from "./abstract.js";

const createcatalogBoardTemplate = () => {
  return `<div class="catalog__catalog-column"></div>`;
};

export default class catalogBoard extends AbstractView {
  getTemplate() {
    return createcatalogBoardTemplate();
  }
}
