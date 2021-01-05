import CatalogBoardView from "../view/catalog-board.js";
import CatalogSortView from "../view/catalog-sort.js";
import CatalogListView from "../view/catalog-list.js";
import CatalogPaginationView from "../view/catalog-pagination.js";

import CardPresenter from "../presenter/card.js";

import {render, RenderPosition, remove} from "../utils/render.js";
import {sortPriceUp, sortPriceDown} from "../utils/card.js";
import {SortType} from "../const.js";
import {filter} from "../utils/filter.js";

const CARD_COUNT_PER_STEP = 9;

export default class Board {
  constructor(catalogContainer, cardsModel, filterModel) {
    this._cardsModel = cardsModel;
    this._filterModel = filterModel;
    this._catalogContainer = catalogContainer;
    this._renderedCardsCount = CARD_COUNT_PER_STEP;
    this._currentSortType = SortType.DEFAULT;
    this._cardPresenter = {};

    this._catalogComponent = new CatalogBoardView();

    this._cataloglistComponent = new CatalogListView();
    this._catalogPaginationComponent = new CatalogPaginationView();

    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);

    this._cardsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  init() {
    render(this._catalogContainer, this._catalogComponent, RenderPosition.BEFOREEND);
    render(this._catalogComponent, this._cataloglistComponent, RenderPosition.BEFOREEND);

    // this._renderCatalog();
    this._renderBoard();
  }

  _getCards() {
    const filterType = this._filterModel.getFilter();
    const cards = this._cardsModel.getCards();
    const filtredTasks = filter[filterType](cards);

    switch (this._currentSortType) {
      case SortType.PRICE:
        return filtredTasks.sort(sortPriceUp);
      case SortType.POPULARITY:
        return filtredTasks.sort(sortPriceDown);
    }

    // switch (this._currentSortType) {
    //   case SortType.PRICE:
    //     return this._cardsModel.getCards().slice().sort(sortPriceUp);
    //   case SortType.POPULARITY:
    //     return this._cardsModel.getCards().slice().sort(sortPriceDown);
    // }
    console.log(filtredTasks);
    return filtredTasks;
    // return this._cardsModel.getCards();
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._currentSortType = sortType;

    this._clearBoard({resetRenderedCardsCount: true});
    this._renderBoard();
  }

  _handleModelEvent() {
    this._clearBoard({resetRenderedCardsCount: true});
    this._renderBoard();
  }

  _renderSort() {
    if (this._catalogSortComponent !== null) {
      this._catalogSortComponent = null;
    }

    this._catalogSortComponent = new CatalogSortView(this._currentSortType);
    this._catalogSortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);

    render(this._catalogComponent, this._catalogSortComponent, RenderPosition.AFTERBEGIN);
  }

  _renderCard(card) {
    const cardPresenter = new CardPresenter(this._cataloglistComponent);
    cardPresenter.init(card);
    this._cardPresenter[card.id] = cardPresenter;
  }

  _renderCards(cards) {
    cards.forEach((card) => this._renderCard(card));
  }

  _renderPagination() {
    render(this._catalogComponent, this._catalogPaginationComponent, RenderPosition.BEFOREEND);
  }

  _clearBoard({resetRenderedCardsCount = false, resetSortType = false} = {}) {
    const cardCount = this._getCards().length;

    Object
        .values(this._cardPresenter)
        .forEach((presenter) => presenter.destroy());
    this._cardPresenter = {};

    remove(this._catalogSortComponent);

    if (resetRenderedCardsCount) {
      this._renderedCardsCount = CARD_COUNT_PER_STEP;
    } else {
      // На случай, если перерисовка доски вызвана
      // уменьшением количества задач (например, удаление или перенос в архив)
      // нужно скорректировать число показанных задач
      this._renderedCardsCount = Math.min(cardCount, this._renderedCardsCount);
    }

    if (resetSortType) {
      this._currentSortType = SortType.DEFAULT;
    }
  }

  _renderBoard() {
    const cards = this._getCards();
    const cardCount = cards.length;

    // if (cardCount === 0) {
    //   this._renderNoCards();
    //   return;
    // }

    this._renderSort();

    // Теперь, когда _renderBoard рендерит доску не только на старте,
    // но и по ходу работы приложения, нужно заменить
    // константу TASK_COUNT_PER_STEP на свойство _renderedTaskCount,
    // чтобы в случае перерисовки сохранить N-показанных карточек
    this._renderCards(cards.slice(0, Math.min(cardCount, this._renderedCardsCount)));

    // if (cardCount > this._renderedCardsCount) {
    //   this._renderPagination();
    // }
  }
}
