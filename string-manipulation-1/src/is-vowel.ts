/* exported isVowel */

function isVowel(char: string): boolean {
  const vowels: string = 'aeiouAEIOU';

  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }
  return false;
}
