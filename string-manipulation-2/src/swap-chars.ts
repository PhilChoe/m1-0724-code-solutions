/* exported swapChars */

function swapChars(
  firstIndex: number,
  secondIndex: number,
  input: string
): string {
  const chars = input.split('');
  // split at each character because you have to manipulate the characters
  if (
    firstIndex >= 0 &&
    firstIndex < chars.length &&
    secondIndex >= 0 &&
    secondIndex < chars.length
  ) {
    [chars[firstIndex], chars[secondIndex]] = [
      chars[secondIndex],
      chars[firstIndex],
    ];
  }
  return chars.join('');
}
