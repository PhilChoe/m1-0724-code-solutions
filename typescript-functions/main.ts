function convertMinutesToSeconds(x: number): number {
  const minToSec: number = x * 60;
  return minToSec;
}

const totalSec: number = convertMinutesToSeconds(3);
console.log('value of convertMinutesToSeconds:', totalSec);

//

function greet(name: string): string {
  return 'Hey ' + name;
}
console.log(greet('Philip'));

//

const area = (width: number, height: number): number => {
  return width * height;
};
console.log('value of area:', area(17, 42));

//

interface Person {
  firstName: string;
  lastName: string;
}

const getFirstName = (person: Person): string => {
  return person.firstName;
};

const person: Person = {
  firstName: 'Philip',
  lastName: 'Choe',
};

console.log('first name is: ', getFirstName(person));

//

const getLastElement = (array: any): any => {
  return array[array.length - 1];
};

console.log(
  'the last element:',
  getLastElement(['hi', 'hello', 'later', 'bye'])
);

// callOtherFunction(otherFunction, params)

function anotherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}

function callOtherFunction(params: unknown): any {
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
