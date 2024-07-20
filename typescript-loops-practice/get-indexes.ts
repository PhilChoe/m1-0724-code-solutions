/* exported getIndexes */

function getIndexes(array: any[]): number[] {
  const indexResult: number[] = [];

  for (let i = 0; i < array.length; i++) {
    indexResult.push(i);
  }
  return indexResult;
}
