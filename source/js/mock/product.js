// import {COLORS} from "../const.js";
// import {getRandomInteger} from "../utils.js";

// const generateDescription = () => {
//   const descriptions = [
//     `Изучить теорию`,
//     `Сделать домашку`,
//     `Пройти интенсив на соточку`
//   ];

//   const randomIndex = getRandomInteger(0, descriptions.length - 1);

//   return descriptions[randomIndex];
// };

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
    identiferNumber: `SO757575`,
    name: `Честер Bass`,
    type: `электрогитара`,
    reviewAmount: `15`,
    stringAmount: `7`,
    price: `17500`,
    image: `img/gitar-electric_1.png`
    // image: `http://picsum.photos/248/152?r=${Math.random()}`
  };
};
