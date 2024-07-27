'use strict';
/* exported pick */
function pick(source, keys) {
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key in source && source[key] !== undefined) {
      obj[key] = source[key];
    }
  }
  return obj;
}
