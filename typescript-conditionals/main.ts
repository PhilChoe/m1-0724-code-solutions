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

// Start exercise//

// isUnderFive(number)

const isUnderFive = (number: number): boolean => {
  return number < 5;
};

// isEven(number)

const isEven = (number: number): boolean => {
  return (number & 2) === 0;
};

// startWithJ(string)

const startsWithJ = (string: string): boolean => {
  return string.charAt(0) === 'J';
};

// isOldEnoughToDrink(person)

interface Person {
  name: string;
  age: number;
}

const isOldEnoughToDrink = (person: Person): boolean => {
  return person.age >= 21;
};

const isOldEnoughToDrive = (person: Person): boolean => {
  return person.age >= 16;
};

const isOldEnoughToDrinkAndDrive = (person: Person): boolean => {
  return isOldEnoughToDrink(person) && isOldEnoughToDrive(person);
};

// categorizeAcidity(pH)

const categorizeAcidity = (pH: number): any => {
  if (pH < 0 || pH > 14) {
    return 'invalid pH level';
  } else if (pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else {
    return 'base';
  }
};

// introduceWarnerBro(name)

const introduceWarnerBro = (name: string): any => {
  switch (name) {
    case 'yakko':
    case 'wakko':
      console.log("We're the warner brothers!");
      break;
    case 'dot':
      console.log("I'm cute~");
      break;
    default:
      console.log('Goodnight everybody!');
  }
};

// recommendedMovieGenre

const recommendMovie = (genre: string): any => {
  switch (genre) {
    case 'action':
      console.log('Fast and Furious');
      break;
    case 'comedy':
      console.log('White Chicks');
      break;
    case 'horror':
      console.log('It');
      break;
    case 'drama':
      console.log('Inception');
      break;
    case 'musical':
      console.log('La La Land');
      break;
    case 'sci-fi':
      console.log('Star Trek');
      break;
  }
};
