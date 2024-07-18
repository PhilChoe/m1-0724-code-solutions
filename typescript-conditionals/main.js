'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
//Start exercise//
//isUnderFive(number)
const isUnderFive = (number) => {
  return number < 5;
};
//isEven(number)
const isEven = (number) => {
  return (number & 2) === 0;
};
//startWithJ(string)
const startsWithJ = (string) => {
  return string.charAt(0) === 'J';
};
const isOldEnoughToDrink = (person) => {
  return person.age >= 21;
};
const isOldEnoughToDrive = (person) => {
  return person.age >= 16;
};
const isOldEnoughToDrinkAndDrive = (person) => {
  return false;
};
