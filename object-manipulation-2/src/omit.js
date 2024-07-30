'use strict';
/* exported omit */
function omit(source, keys) {
  let obj = {};
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      obj[key] = source[key];
    }
  }
  for (const key of keys) {
    delete obj[key];
  }
  return obj;
}
/*Chat-gpt'd this thing; practice over and over*/
