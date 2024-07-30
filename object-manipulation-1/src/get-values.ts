/* exported getValues */

function getValues(obj: object): string[] {
  const values: string[] = [];

  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
