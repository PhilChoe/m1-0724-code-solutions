'use strict';
/* exported includesSeven */
function includesSeven(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
//I shouldn't use the else condition because that would force the code
//to stop as soon as it doesn't find a 7, I want it to continue through the
//array so I need to place return false outside of the loop
