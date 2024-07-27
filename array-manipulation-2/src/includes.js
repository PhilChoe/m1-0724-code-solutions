'use strict';
/* exported includes */
function includes(array, values) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === values) {
      return true;
    }
  }
  return false;
}
