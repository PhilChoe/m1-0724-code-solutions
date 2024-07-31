'use strict';
/* exported numVowels */
function numVowels(input) {
  let result = 0;
  let vowels = 'aeiouAEIOU';
  for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
      result++;
    }
  }
  return result;
}
