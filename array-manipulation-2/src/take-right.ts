/* exported takeRight */

function takeRight(array: unknown[], count: number): unknown {
  const result: any[] = [];

  for (let i = array.length - count; i < array.length; i++) {
    result.push(array[i]);
  }
  if (count >= array.length) {
    return array.slice();
  }

  return result;
}
