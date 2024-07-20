/* exported oddOrEven */

function oddOrEven(numbers: number[]): string[] {
  const result: string[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push('even');
    } else {
      result.push('odd');
    }
  }
  return result;
}

// you use the else here because you need to push into new array odd returns
// without the else, the code would stop iterating after the first even
// or odd returns would not be added to new array
