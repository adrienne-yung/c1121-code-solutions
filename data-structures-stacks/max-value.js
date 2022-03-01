/* exported maxValue */

function maxValue(stack) {
  let largestValue = -Infinity;
  while (stack.peek() !== undefined) {
    const currentValue = stack.pop();
    if (currentValue >= largestValue) {
      largestValue = currentValue;
    }
  }
  return largestValue;
}
