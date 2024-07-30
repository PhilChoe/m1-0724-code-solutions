/* exported tail */

function tail(array: any[]): any {
  const arrNew = [];

  for (let i = 1; i < array.length; i++) {
    arrNew.push(array[i]);
  }
  return arrNew;
}
