'use strict';
function convertMinutesToSeconds(x) {
  const minToSec = x * 60;
  return minToSec;
}
const totalSec = convertMinutesToSeconds(3);
console.log('value of convertMinutesToSeconds:', totalSec);
//
function greet(name) {
  return 'Hey ' + name;
}
console.log(greet('Philip'));
//
const area = (width, height) => {
  return width * height;
};
console.log('value of area:', area(17, 42));
const getFirstName = (person) => {
  return person.firstName;
};
const person = {
  firstName: 'Philip',
  lastName: 'Choe',
};
console.log('first name is: ', getFirstName(person));
//
const getLastElement = (array) => {
  return array[array.length - 1];
};
console.log(
  'the last element:',
  getLastElement(['hi', 'hello', 'later', 'bye'])
);
//callOtherFunction(otherFunction, params)
function anotherFunction(otherFunction, params) {
  return otherFunction(params);
}
function callOtherFunction(params) {
  return 'Value of callOtherFunction:' + params;
}
anotherFunction(callOtherFunction, 10);
console.log(
  'Example using convertMinutesToSeconds:',
  anotherFunction(convertMinutesToSeconds, 10)
);
console.log(
  'Example using getLastElement:',
  anotherFunction(getLastElement, ['hi, bye', 'hello'])
);
