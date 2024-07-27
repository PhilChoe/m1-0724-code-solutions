'use strict';
/* exported isVowel */
function isVowel(char) {
  const vowels = 'aeiouAEIOU';
  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }
  return false;
}
