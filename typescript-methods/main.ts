const heroes = ['superman', 'ironman', 'batman', 'spiderman'];

let randomNumber = Math.random();

randomNumber *= heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log('Random Index value:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('Random hero:', randomHero);

// array methods

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

const lastBook = library.pop();
console.log('Last Book:', lastBook);

const firstBook = library.shift();
console.log('First Book:', firstBook);

const js: any = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css: any = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Updated library:', library);

// string methods

const fullName = 'Philip' + ' ' + 'Choe';
const firstAndLastName = fullName.split(' ');
console.log('First and Last Name:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Say My Name:', sayMyName);

// object methods

const employee = {
  name: 'Hannah',
  age: 20,
  position: 'babysitter',
};

const employeeKeys = Object.keys(employee);
console.log('Employee keys:', employeeKeys);

const employeeValues = Object.values(employee);
console.log('Employee values:', employeeValues);

const employeePairs = Object.entries(employee);
console.log('Employee Pairs:', employeePairs);
