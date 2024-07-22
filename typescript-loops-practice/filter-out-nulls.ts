/* exported filterOutNulls */

function filterOutNulls(values: any[]): any[] {
  const list: any[] = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      list.push(values[i]);
    }
  }
  return list;
}

// if the values parameter input at i does not equal null
// the list array populates with the values at input i
// you push the values into new array then return it
