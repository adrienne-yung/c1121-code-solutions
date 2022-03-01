/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const firstElement = stack.pop();
  if (firstElement === undefined) {
    return undefined;
  }
  const secondElement = stack.peek();
  stack.push(firstElement);
  return secondElement;
}
