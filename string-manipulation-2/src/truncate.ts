/* exported truncate */
/* 1. i want to iterate through the string by each letter
until I get to the 'length'
2. then i want to add '...' after the result of the strings
before the 'length'
3. i want to return the shortened version with the ...
*/

function truncate(maxLength: number, str: string): string {
  // creates empty string
  let result = '';

  /* iterate from 0 to maxLength-1
inside loop: checks if 'i' is less than the length of 'str'.
if true, adds the character at index 'i' to 'result'. If false,
break out of loop.
*/
  for (let i = 0; i < maxLength; i++) {
    if (i < str.length) {
      result += str[i];
    } else {
      break;
    }
  }
  return (result += '...');
}
