'use strict';
const heroes = ['superman', 'ironman', 'batman', 'spiderman'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
let randomIndex = Math.floor(randomNumber);
console.log('Random Index value:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('Random hero:', randomHero);
//array methods
const library = [
  {
    Title: 'Hello, Panda',
    Author: 'Jimmy John',
  },
  {
    Title: 'I Am Universe',
    Author: 'Michael Who',
  },
  {
    Title: 'Power Over Whelming',
    Author: 'Star Craft',
  },
];
let lastBook = library.pop();
console.log('Last Book:', lastBook);
let firstBook = library.shift();
console.log('First Book:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Updated library:', library);
//string methods
const fullName = 'Philip' + ' ' + 'Choe';
let firstAndLastName = fullName.split(' ');
console.log('First and Last Name:', firstAndLastName);
let firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Say My Name:', sayMyName);
//object methods
const employee = {
  name: 'Hannah',
  age: 20,
  position: 'babysitter',
};
let employeeKeys = Object.keys(employee);
console.log('Employee keys:', employeeKeys);
let employeeValues = Object.values(employee);
console.log('Employee values:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('Employee Pairs:', employeePairs);
