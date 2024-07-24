/* exported getValues */

function getValues(obj: object): string[] {
  const values: string[] = [];

  for (const key in obj) {
    if (obj[key] !== undefined) {
      values.push(obj[key]);
    }
  }
  return values;
}
