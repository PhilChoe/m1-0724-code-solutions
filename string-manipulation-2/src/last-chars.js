'use strict';
/* exported lastChars */
function lastChars(leng, input) {
  return input.slice(input.length - leng >= 0 ? input.length - leng : 0);
}
