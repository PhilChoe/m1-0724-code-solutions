'use strict';
/* exported getValues */
function getValues(obj) {
  const values = [];
  for (const key in obj) {
    if (obj[key] !== undefined) {
      values.push(obj[key]);
    }
  }
  return values;
}
