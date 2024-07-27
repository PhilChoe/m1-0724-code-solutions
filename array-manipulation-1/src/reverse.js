'use strict';
/* exported reverse */
function reverse(arr) {
  let newRev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newRev.push(arr[i]);
  }
  return newRev;
}
