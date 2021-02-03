import AbstractView from "./abstract.js";

const createCatalogSectionElement = () => {
  return `<section class="catalog"></section>`;
};

export default class CatalogSection extends AbstractView {
  getTemplate() {
    return createCatalogSectionElement();
  }
}
