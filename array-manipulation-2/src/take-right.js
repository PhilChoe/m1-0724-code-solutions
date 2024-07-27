'use strict';
/* exported takeRight */
function takeRight(array, count) {
  let result = [];
  for (let i = array.length - count; i < array.length; i++) {
    result.push(array[i]);
  }
  if (count >= array.length) {
    return array.slice();
  }
  return result;
}
