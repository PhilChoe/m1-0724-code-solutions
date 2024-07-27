/* exported take */

function take(array: any[], count: number): unknown {
  const x: unknown[] = [];

  for (let i = 0; i < Math.min(count, array.length); i++) {
    x.push(array[i]);
  }
  return x;
}
