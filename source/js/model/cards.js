
import Observer from "../utils/observer.js";

export default class Cards extends Observer {
  constructor() {
    super();
    this._cards = [];
  }

  setCards(cards) {
    this._cards = cards.slice();
  }

  getCards() {
    return this._cards;
  }

  // updateTask(updateType, update) {
  //   const index = this._cards.findIndex((task) => task.id === update.id);

  //   if (index === -1) {
  //     throw new Error(`Can't update unexisting task`);
  //   }

  //   this._cards = [
  //     ...this._cards.slice(0, index),
  //     update,
  //     ...this._cards.slice(index + 1)
  //   ];

  //   this._notify(updateType, update);
  // }

  // addTask(updateType, update) {
  //   this._cards = [
  //     update,
  //     ...this._cards
  //   ];

  //   this._notify(updateType, update);
  // }

  // deleteTask(updateType, update) {
  //   const index = this._cards.findIndex((task) => task.id === update.id);

  //   if (index === -1) {
  //     throw new Error(`Can't delete unexisting task`);
  //   }

  //   this._cards = [
  //     ...this._cards.slice(0, index),
  //     ...this._cards.slice(index + 1)
  //   ];

  //   this._notify(updateType);
  // }
}
