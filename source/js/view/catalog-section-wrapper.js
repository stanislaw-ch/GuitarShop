import AbstractView from "./abstract.js";

const createCatalogSectionWrapperElement = () => {
  return `<div class="catalog__content-wrapper">
    </div>`;
};

export default class CatalogSectionWrapper extends AbstractView {
  getTemplate() {
    return createCatalogSectionWrapperElement();
  }
}
