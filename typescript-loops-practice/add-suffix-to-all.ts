/* exported addSuffixToAll */

function addSuffixToAll(words: string[], suffix: string): string[] {
  const suffArray: string[] = [];

  for (let i = 0; i < words.length; i++) {
    suffArray.push(words[i] + suffix);
  }
  return suffArray;
}

// suffArray sets a new empty array to populate, you PUSH into it with the
// condition words at i + the suffix
// you then return suffArray to call the newly populated array
