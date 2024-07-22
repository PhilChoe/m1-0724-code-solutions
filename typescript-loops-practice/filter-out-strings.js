'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  let noString = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noString.push(values[i]);
    }
  }
  return noString;
}
