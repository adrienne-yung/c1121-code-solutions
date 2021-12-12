/* exported take */
/* - Create a storage space to hold your output
- In the condition that what you're given is empty, return an empty storage space as your value
- In the condition that what you're given isn't empty, store the value of what you're given and only take the amount asked, store that value in your storage space, and return that as your output */

function take(array, count) {
  var newArray = [];
  if (array === []) {
    return newArray;
  } else {
    newArray = array.slice(0, count);
  }
  return newArray;
}
