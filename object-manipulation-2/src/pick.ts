/* exported pick */

function pick(
  source: Record<string, any>,
  keys: string[]
): Record<string, any> {
  const obj: Record<string, any> = {};

  for (let i = 0; i < keys.length; i++) {
    const key: string = keys[i];

    if (key in source) {
      obj[key] = source[key];
    }
  }
  return obj;
}
