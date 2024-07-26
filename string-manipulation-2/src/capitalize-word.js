'use strict';
/* exported capitalizeWord */
/*
I want to get the word, first make them all lower case, then make them uppercase
then i want to create a separate code to make an exception for JavaScript
*/
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  let firstChar = word[0].toUpperCase();
  let otherChar = word.slice(1).toLowerCase();
  return firstChar + otherChar;
}
