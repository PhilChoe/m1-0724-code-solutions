/* exported getKeys */

function getKeys(obj: object): string[] {
  const keys: string[] = [];
  const keyArr: string[] = [];

  for (const key in obj) {
    keyArr.push(key);
  }

  for (let i = 0; i < keyArr.length; i++) {
    keys.push(keyArr[i]);
  }
  return keys;
}
