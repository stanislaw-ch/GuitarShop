import {FilterType} from "../const";

export const filter = {
  [FilterType.ALL]: (cards) => cards.filter((card) => card),
  [FilterType.ACOUSTIC]: (cards) => cards.filter((card) => card.type === FilterType.ACOUSTIC),
  [FilterType.ELECTRO]: (cards) => cards.filter((card) => card.type === FilterType.ELECTRO),
  [FilterType.UKULELE]: (cards) => cards.filter((card) => card.type === FilterType.UKULELE),
};

// export const filteredCardsByKey = (targetArray, filters) => {
//   const filterKeys = Object.keys(filters);
//   return targetArray.filter((eachObj) => {
//     return filterKeys.every((eachKey) => {
//       if (!filters[eachKey].length) {
//         return true;
//       }
//       return filters[eachKey].includes(eachObj[eachKey]);
//     });
//   });
// };

export const filteredCardsByType = (card, filters) => {
  if (!filters.length) {
    return true;
  }
  return filters.includes(card);
};

export const filteredCardsByPrice = (card, filters) => {
  const keys = [`min`, `max`];
  let PriceRange = {};

  PriceRange = Object.assign(...keys.map((k, i) => ({[k]: filters[i]})));

  if (!filters.length) {
    return true;
  }

  return Number(card) <= PriceRange.max && Number(card) >= PriceRange.min;
};
