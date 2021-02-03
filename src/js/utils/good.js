import {FilterType} from "../const.js";

export const getGuitarType = (type) => {
  const guitarTypeKeys = Object.keys(FilterType);
  const currentGuitarType = guitarTypeKeys.filter((key) => FilterType[key] === type).map((key) => key.toLocaleLowerCase());
  return currentGuitarType;
};

export const sortPriceDown = (pointA, pointB) => Number(pointA.price) > Number(pointB.price) ? -1 : 1;
export const sortPriceUp = (pointA, pointB) => Number(pointA.price) > Number(pointB.price) ? 1 : -1;

export const sortPopularityDown = (pointA, pointB) => Number(pointA.reviewAmount) > Number(pointB.reviewAmount) ? -1 : 1;
export const sortPopularityUp = (pointA, pointB) => Number(pointA.reviewAmount) > Number(pointB.reviewAmount) ? 1 : -1;
