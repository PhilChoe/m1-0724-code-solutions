/* exported dropRight */

function dropRight(array: unknown[], count: number): unknown {
  const result: any[] = [];

  for (let i = 0; i < array.length - count; i++) {
    result.push(array[i]);
  }
  if (count >= array.length) {
    return [];
  }

  return result;
}
