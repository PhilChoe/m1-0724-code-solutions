/* exported numVowels */

function numVowels(input: string): number {
  let result = 0;
  const vowels = 'aeiouAEIOU';

  for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
      result++;
    }
  }
  return result;
}
