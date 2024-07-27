'use strict';
/* exported invert */
function invert(source) {
  let inverted = {};
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      inverted[source[key]] = key;
    }
  }
  return inverted;
}
/*
Explanation
Accessing the Value from Source:

source[key]: This part accesses the value associated with the property key in the source object.
For example, if source is { a: 1, b: 2, c: 3 } and key is "a", then source[key] would be 1.
Assigning to the Inverted Object:

inverted[source[key]]: This part uses the value from source[key] as the key in the inverted object.
Continuing with the example, inverted[source[key]] becomes inverted[1].
Setting the New Value:

inverted[source[key]] = key;: This assigns the original key as the value in the inverted object.
So, inverted[1] = "a";.
Full Example
Let's consider a full example to illustrate how the code works:

typescript
Copy code
let source = { a: 1, b: 2, c: 3 };
let inverted: Record<string, any> = {};

for (const key in source) {
  if (source.hasOwnProperty(key)) {
    inverted[source[key]] = key;
  }
}

console.log(inverted); // Output: { '1': 'a', '2': 'b', '3': 'c' }
Iteration Details
First Iteration (key = "a"):

source[key]: source["a"] gives 1.
inverted[source[key]] = key: inverted[1] = "a";.
Second Iteration (key = "b"):

source[key]: source["b"] gives 2.
inverted[source[key]] = key: inverted[2] = "b";.
Third Iteration (key = "c"):

source[key]: source["c"] gives 3.
inverted[source[key]] = key: inverted[3] = "c";.
Summary
Original Object: { a: 1, b: 2, c: 3 }

a maps to 1
b maps to 2
c maps to 3
Inverted Object: { '1': 'a', '2': 'b', '3': 'c' }

1 maps to a
2 maps to b
3 maps to c
Each key-value pair from the source object is swapped, meaning the original value becomes the key in the inverted object, and the original key becomes the value.
*/
