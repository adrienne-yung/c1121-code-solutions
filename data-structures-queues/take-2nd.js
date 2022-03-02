/* exported take2nd */

function take2nd(queue) {
  const firstValue = queue.dequeue();
  const secondValue = queue.dequeue();
  if (firstValue === undefined) {
    return undefined;
  } else if (secondValue === undefined) {
    return firstValue;
  }
  queue.enqueue(firstValue);
  return secondValue;
}
