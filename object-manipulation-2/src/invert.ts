/* exported invert */

function invert(source: Record<string, any>): Record<string, any> {
  const inverted: Record<string, any> = {};

  for (const key in source) {
    // Directly assign the value of source[key] as the key in inverted, and key as the value.
    inverted[source[key]] = key;
  }

  return inverted;
}
