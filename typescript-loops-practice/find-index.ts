/* exported findIndex */

function findIndex(array: number[], value: any): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

// if array parameter at input i equals the number at value parameter
// it returns the i, which happens to also be the value parameter
// you return -1 if it is not the case, no else statement bc you
// get i as soon as it returns true, else would have no condition
// so there is basically no point in having the else
