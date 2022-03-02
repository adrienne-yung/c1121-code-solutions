/* exported takeSmaller */

function takeSmaller(queue) {
  const firstValue = queue.dequeue();
  const secondValue = queue.dequeue();
  if (firstValue === undefined) {
    return undefined;
  }
  if (secondValue === undefined) {
    return firstValue;
  }
  if (firstValue > secondValue) {
    queue.enqueue(firstValue);
    return secondValue;
  }
  if (secondValue > firstValue) {
    queue.enqueue(secondValue);
    return firstValue;
  }
  if (firstValue === secondValue) {
    queue.enqueue(firstValue);
    return secondValue;
  }
}
