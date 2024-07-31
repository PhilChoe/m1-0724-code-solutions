/* exported swapChars */

function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      result += string[secondIndex];
    } else if (i === secondIndex) {
      result += string[firstIndex];
    } else {
      result += string[i];
    }
  }

  return result;
}

/*
writing to make another PR

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
*/
