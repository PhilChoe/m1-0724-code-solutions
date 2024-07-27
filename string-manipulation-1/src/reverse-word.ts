/* exported reverseWord */

function reverseWord(word: string): string {
  let reversed = '';

  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

/* you're assigning an empty string to variable reversed
start for loop at the end /nd iterates back to front
then you reassign the result of reversed added to word at index
*/
