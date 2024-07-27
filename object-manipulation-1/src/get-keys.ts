/* exported getKeys */

function getKeys(obj: object): string[] {
  const keys: string[] = [];
  const keyArr: string[] = [];

  for (const key in obj) {
    keyArr.push(key);
  }
  return keys;
}
