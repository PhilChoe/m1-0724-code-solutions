/* exported filterOutStrings */

function filterOutStrings(values: any[]): any[] {
  const noString: any[] = [];

  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noString.push(values[i]);
    }
  }
  return noString;
}
