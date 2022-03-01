/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const firstElement = stack.pop();
  if (firstElement === undefined) {
    return undefined;
  }
  stack.push(value);
  stack.push(firstElement);
}
