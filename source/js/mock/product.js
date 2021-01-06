// import {COLORS} from "../const.js";
import {getRandomInteger} from "../utils/common.js";

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const generatePrice = () => {
  const prices = [
    `17500`,
    `13000`,
    `1000`,
    `11500`,
    `22000`,
    `91000`
  ];

  const randomIndex = getRandomInteger(0, prices.length - 1);

  return prices[randomIndex];
};

const generatePopularity = () => {
  const popularity = [
    `17`,
    `13`,
    `9`,
    `11`,
    `22`,
    `91`
  ];

  const randomIndex = getRandomInteger(0, popularity.length - 1);

  return popularity[randomIndex];
};

const generateStringAmount = () => {
  const stringAmount = [
    `4`,
    `6`,
    `7`,
    `12`
  ];

  const randomIndex = getRandomInteger(0, stringAmount.length - 1);

  return stringAmount[randomIndex];
};

const generateType = () => {
  const type = [
    `электрогитара`,
    `акустическая гитара`,
    `укулеле`
  ];

  const randomIndex = getRandomInteger(0, type.length - 1);

  return type[randomIndex];
};

// const generateDate = () => {
//   const isDate = Boolean(getRandomInteger(0, 1));

//   if (!isDate) {
//     return null;
//   }

//   const maxDaysGap = 7;
//   const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
//   const currentDate = new Date();

//   currentDate.setHours(23, 59, 59, 999);

//   currentDate.setDate(currentDate.getDate() + daysGap);

//   return new Date(currentDate);
// };

// const generateRepeating = () => {
//   return {
//     mo: false,
//     tu: false,
//     we: Boolean(getRandomInteger(0, 1)),
//     th: false,
//     fr: Boolean(getRandomInteger(0, 1)),
//     sa: false,
//     su: false
//   };
// };

// const getRandomColor = () => {
//   const randomIndex = getRandomInteger(0, COLORS.length - 1);

//   return COLORS[randomIndex];
// };

export const generateProduct = () => {
  return {
    id: generateId(),
    identiferNumber: `SO757575`,
    name: `Честер Bass`,
    type: generateType(),
    reviewAmount: generatePopularity(),
    stringAmount: generateStringAmount(),
    price: generatePrice(),
    image: `img/gitar-electric_1.png`
    // image: `http://picsum.photos/248/152?r=${Math.random()}`
  };
};
