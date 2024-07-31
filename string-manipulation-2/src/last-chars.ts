/* exported lastChars */

function lastChars(leng: number, input: string): string {
  return input.slice(input.length - leng >= 0 ? input.length - leng : 0);
}
