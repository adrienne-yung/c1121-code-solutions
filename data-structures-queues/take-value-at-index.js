/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  for (let i = 0; i < index; i++) {
    const currentValue = queue.dequeue();
    queue.enqueue(currentValue);
  }
  const frontValue = queue.dequeue();
  return frontValue;
}
