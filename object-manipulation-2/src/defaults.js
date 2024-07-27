'use strict';
/* exported defaults */
function defaults(target, source) {
  for (const key in source) {
    // Iterate over all properties in the source object
    if (source.hasOwnProperty(key)) {
      // Check if the property is a direct property of the source object
      if (target[key] === undefined) {
        // Check if the property is not already defined on the target object
        target[key] = source[key]; // Assign the property from source to target
      }
    }
  }
}
