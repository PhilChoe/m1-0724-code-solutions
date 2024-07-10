const width: number = 2;
const height: number = 4;

const area: number = width * height;
console.log('value of area:', area);
console.log('type of area:', typeof area);

//

const bill: number = 58;
const payment: number = 100;

const change: number = payment - bill;
console.log('value of change:', change);
console.log('type of value of change:', typeof change);

//

const quizzes: number = 50;
const midterm: number = 100;
const final: number = 80;

const grade: number = (quizzes + midterm + final) / 3;

console.log('value of grade:', grade);
console.log('type of grade value:', typeof grade);

//

const firstName: string = 'Philip';
const lastName: string = 'Choe';

const fullName: string = firstName + ' ' + lastName;
console.log('My name is ' + fullName);
console.log('Type of fullName value:', typeof fullName);

//

const pH: number = 10;
const isAcidic: boolean = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('type of isAcidic:', typeof isAcidic);

//

const headCount: number = 150;
const isSparta: boolean = headCount === 300;

console.log('value of isSparta:', isSparta);
console.log('type of isSparta value:', typeof isSparta);

//

let motto: string = fullName;
motto += ' is the GOAT';

console.log('value of motto:', motto);
console.log('type of motto value:', typeof motto);
