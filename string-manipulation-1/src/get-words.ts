/* exported getWords */

function getWords(str: string): string[] {
  const wordArray = str.split(' ');
  const words: string[] = [];

  for (let i = 0; i < wordArray.length; i++) {
    const word = wordArray[i];
    if (word.length > 0) {
      words.push(word);
    }
  }
  return words;
}

/* split will split the string by single spaces into an array
of words
the for loop iterates through each wordArray element
word.length > 0 checks if each word is not empty, then it'll add
to words array
*/
