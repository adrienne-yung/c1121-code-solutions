/* exported drop */
/* - Create a storage space to store your output
- In the condition that what is given is empty, return an empty storage space
- In the condition that there is something given that isn't empty, store and return the value starting at given amount up until the end of the group given */

function drop(array, count) {
  var newArray = [];
  if (array === []) {
    return newArray;
  } else {
    newArray = array.slice(count, array.length);
  }
  return newArray;
}
