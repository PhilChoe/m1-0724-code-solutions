'use strict';
/* exported drop */
function drop(array, count) {
  let result = [];
  for (let i = count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
