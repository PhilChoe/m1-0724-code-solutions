'use strict';
/* exported getKeys */
function getKeys(obj) {
  const keys = [];
  const keyArr = [];
  for (const key in obj) {
    keyArr.push(key);
  }
  for (let i = 0; i < keyArr.length; i++) {
    keys.push(keyArr[i]);
  }
  return keys;
}
