/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  while (queue.peek() !== undefined) {
    const firstValue = queue.dequeue();
    if (firstValue <= queue.peek()) {
      return firstValue;
    } else if (firstValue > queue.peek()) {
      queue.enqueue(firstValue);
    } else {
      return firstValue;
    }
  }
}
