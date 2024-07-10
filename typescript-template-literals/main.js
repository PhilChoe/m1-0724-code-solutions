'use strict';
const number = 9200;
const street = 'Irvine Center Drive';
const address = number + ' ' + street;
const interpolatedAddress = `LearningFuze: ${number} ${street}`;
console.log(interpolatedAddress);
const firstName = 'Uzair';
const lastName = 'Ashraf';
const age = 25;
const interpolatedBio = `Bio: My Name is ${firstName} ${lastName} and I am ${age} years old`;
const bio =
  'My name is ' +
  firstName +
  ' ' +
  lastName +
  ' and I am ' +
  age +
  ' years old.';
console.log(interpolatedBio);
const fruit = 'apple';
const item = 'pen';
const applePen = fruit + item;
const interpolatedApplePen = `I have a ${item}
I have an ${fruit}
${applePen}`;
console.log(interpolatedApplePen);
