/* exported includes */

function includes(array: any[], values: any): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === values) {
      return true;
    }
  }
  return false;
}
