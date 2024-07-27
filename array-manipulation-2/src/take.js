'use strict';
/* exported take */
function take(array, count) {
  let x = [];
  for (let i = 0; i < Math.min(count, array.length); i++) {
    x.push(array[i]);
  }
  return x;
}
