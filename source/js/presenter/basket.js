import BasketView from "../view/basket.js";
import {render, RenderPosition, remove} from "../utils/render.js";

export default class Basket {
  constructor(basketContainer) {
    this._basketContainer = basketContainer;
    // this._basketModel = basketModel;
    // this._cardsModel = cardsModel;
    this._currentFilter = null;

    this._basketComponent = null;

    // this._handleModelEvent = this._handleModelEvent.bind(this);
    // this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
  }

  init() {
    this._basketComponent = new BasketView();

    render(this._basketContainer, this._basketComponent, RenderPosition.BEFOREEND);

    // this._cardsModel.addObserver(this._handleModelEvent);
    // this._basketModel.addObserver(this._handleModelEvent);
  }

  destroy() {
    remove(this._basketComponent);

    this._basketComponent = null;

    // this._cardsModel.removeObserver(this._handleModelEvent);
    // this._basketModel.removeObserver(this._handleModelEvent);
  }

  _handleModelEvent() {
    this.init();
  }
}
