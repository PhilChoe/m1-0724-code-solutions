/* exported toObject */

function toObject(keyValuePair: [string, any]): any {
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  const result: object = {};

  result[key] = value;
  return result;
}

/* function toObject takes a parameter keyvaluepair with a tuple
consisting of string and number
return is an object
const key, value = deconstructs the tuple key = string, value = any
then empty object result is created
object result is modified, key holds the name of the property
value is the value you want to assign to the property specified by key on the result object
basically, value of 'value' is assigned to the property of 'result'
named by the string or symbol in 'key'
*/
