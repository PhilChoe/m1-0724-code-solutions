/* exported defaults */

function defaults(
  target: Record<string, any>,
  source: Record<string, any>
): void {
  for (const key in source) {
    // Iterate over all properties in the source object
    // Check if the property is not already defined on the target object
    if (!(key in target) || target[key] === undefined) {
      target[key] = source[key]; // Assign the property from source to target
    }
  }
}
