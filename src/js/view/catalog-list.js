import AbstractView from "./abstract.js";

const createCatalogListElement = () => {
  return (
    `<ul class="catalog__list list"></ul>`
  );
};

export default class CatalogList extends AbstractView {
  getTemplate() {
    return createCatalogListElement();
  }
}
