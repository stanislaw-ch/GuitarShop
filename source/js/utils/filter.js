import {FilterType} from "../const";

export const filter = {
  [FilterType.ALL]: (cards) => cards.filter((card) => card),
  [FilterType.ACOUSTIC]: (cards) => cards.filter((card) => card.type === FilterType.ACOUSTIC),
  [FilterType.ELECTRO]: (cards) => cards.filter((card) => card.type === FilterType.ELECTRO),
  [FilterType.UKULELE]: (cards) => cards.filter((card) => card.type === FilterType.UKULELE),
};

export const filteredCardsByKey = (targetArray, filters) => {
  const filterKeys = Object.keys(filters);
  return targetArray.filter((eachObj) => {
    return filterKeys.every((eachKey) => {
      if (!filters[eachKey].length) {
        return true;
      }
      return filters[eachKey].includes(eachObj[eachKey]);
    });
  });
};
