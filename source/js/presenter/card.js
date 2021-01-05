import CatalogItemView from "../view/catalog-item.js";
import {render, RenderPosition, remove} from "../utils/render.js";

export default class Card {
  constructor(catalogListContainer) {
    this.catalogListContainer = catalogListContainer;

    this.catalogItemComponent = null;
  }

  init(catalogCard) {
    this.catalogCard = catalogCard;

    this.catalogItemComponent = new CatalogItemView(catalogCard);

    render(this.catalogListContainer, this.catalogItemComponent, RenderPosition.AFTERBEGIN);
  }

  destroy() {
    remove(this.catalogItemComponent);
  }
}
