/* exported chunk */

function chunk(array: unknown[], size: number): unknown[][] {
  const result: unknown[][] = [];

  for (let i = 0; i < array.length; i += size) {
    const chunked = array.slice(i, i + size);
    result.push(chunked);
  }
  return result;
}

/* basically chat-gpt this thing,
type[][] = returning an array of arrays
iterates over the array with step size of 'size'
with each iteration, slices the array from the index 'i' to 'i + size' to create chunked
pushes each chunked to result
*/
