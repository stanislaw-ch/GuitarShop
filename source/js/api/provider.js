// import {nanoid} from "nanoid";
import GoodsModel from "../model/goods.js";

const getSyncedPoints = (items) => {
  return items.filter(({success}) => success)
    .map(({payload}) => payload.point);
};

export default class Provider {
  constructor(api, store) {
    this._api = api;
    this._store = store;
  }

  getOffers() {
    if (Provider.isOnline()) {
      return this._api.getOffers()
        .then((offers) => {
          this._store.setOffers(offers);
          return offers;
        });
    }
    const storeOffers = Object.values(this._store.getOffers());

    return Promise.resolve(storeOffers);
  }

  getDestinations() {
    if (Provider.isOnline()) {
      return this._api.getDestinations()
        .then((destinations) => {
          this._store.setDestinations(destinations);
          return destinations;
        });
    }

    const storeDestinations = Object.values(this._store.getDestinations());

    return Promise.resolve(storeDestinations);
  }

  getPoints() {
    if (Provider.isOnline()) {
      return this._api.getPoints()
        .then((points) => {
          const items = points.map(GoodsModel.adaptToServer);
          this._store.setPoints(items);

          return points;
        });
    }

    const storePoints = Object.values(this._store.getPoints());

    return Promise.resolve(storePoints.map(GoodsModel.adaptToClient));
  }

  updatePoint(point) {
    if (Provider.isOnline()) {
      return this._api.updatePoint(point)
        .then((updatedPoint) => {
          this._store.updateItem(updatedPoint.id, GoodsModel.adaptToServer(updatedPoint));
          return updatedPoint;
        });
    }

    this._store.updateItem(point.id, GoodsModel.adaptToServer(Object.assign({}, point)));

    return Promise.resolve(point);
  }

  // addPoint(point) {
  //   if (Provider.isOnline()) {
  //     return this._api.addPoint(point)
  //       .then((newPoint) => {
  //         this._store.setItem(GoodsModel.adaptToServer(newPoint));
  //         return newPoint;
  //       });
  //   }

  //   const localNewPointId = nanoid();
  //   const localNewPoint = Object.assign({}, point, {id: localNewPointId});

  //   this._store.setItem(GoodsModel.adaptToServer(localNewPoint));

  //   return Promise.resolve(localNewPoint);
  // }

  deletePoint(point) {
    if (Provider.isOnline()) {
      return this._api.deletePoint(point)
        .then(() => this._store.leftPoints(point.id));
    }

    this._store.leftPoints(point.id);

    return Promise.resolve();
  }

  sync() {
    if (Provider.isOnline()) {
      const storePoints = this._store.getPoints();

      return this._api.sync(storePoints)
        .then((response) => {
          const createdPoints = response.created;
          const updatedPoints = getSyncedPoints(response.updated);
          const items = [...createdPoints, ...updatedPoints];

          this._store.setPoints(items);
        });
    }

    return Promise.reject(new Error(`Sync data failed`));
  }

  static isOnline() {
    return window.navigator.onLine;
  }
}
