'use strict';
/* exported tail */
function tail(array) {
  let arrNew = [];
  for (let i = 1; i < array.length; i++) {
    arrNew.push(array[i]);
  }
  return arrNew;
}
