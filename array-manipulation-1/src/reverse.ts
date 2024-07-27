/* exported reverse */

function reverse(arr: any): any {
  const newRev: any[] = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newRev.push(arr[i]);
  }
  return newRev;
}
