'use strict';
/* exported countdown */
function countdown(num) {
  let result = [];
  for (let i = num; i >= 0; i--) {
    result.push(i);
  }
  return result;
}
//you set result array to newly populate
//you push results of new inputs (i) into result array
//you return newly populated result array
