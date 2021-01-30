export const filteredGoodsByType = (good, filters) => {
  if (!filters.length) {
    return true;
  }
  return filters.includes(good);
};

export const filteredGoodsByPrice = (good, filters) => {
  const keys = [`min`, `max`];
  let PriceRange = {};

  PriceRange = Object.assign(...keys.map((k, i) => ({[k]: filters[i]})));

  if (!filters.length) {
    return true;
  }
  return Number(good) <= PriceRange.max && Number(good) >= PriceRange.min;
};
