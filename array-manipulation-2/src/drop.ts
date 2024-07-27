/* exported drop */

function drop(array: unknown[], count: number): unknown {
  const result: unknown[] = [];

  for (let i = count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
