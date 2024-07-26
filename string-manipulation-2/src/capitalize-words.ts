/* exported capitalizeWords */

function capitalizeWords(input: string): string {
  const words = input.split(' ');
  let result = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let capitalizeWord = '';

    if (word.length > 0) {
      capitalizeWord = word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
    result += capitalizeWord;

    if (i < words.length - 1) {
      result += ' ';
    }
  }
  return result;
}
