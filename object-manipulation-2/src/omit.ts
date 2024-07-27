/* exported omit */

function omit(
  source: Record<string, any>,
  keys: string[]
): Record<string, any> {
  const obj: Record<string, any> = {};

  // Iterate over all properties in the source object
  for (const key in source) {
    // Directly assign the properties to the new object
    obj[key] = source[key];
  }

  // Iterate over the keys to be omitted
  for (const key of keys) {
    // Delete the keys from the new object
    delete obj[key];
  }

  return obj;
}

/* Chat-gpt'd this thing; practice over and over */
