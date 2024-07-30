/* exported initial */

function initial(arr: any): any {
  const newArr: any[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
