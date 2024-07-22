'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  let list = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      list.push(values[i]);
    }
  }
  return list;
}
