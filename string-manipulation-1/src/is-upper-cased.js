'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word === word.toUpperCase()) return true;
  }
  return false;
}
/*
function isUpperCased(word): boolean {
  return word === word.toUpperCase();
}
*/
