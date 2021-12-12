/* exported takeRight */
/* - Create a storage space to hold the value of your group of words counting backwards from the end
- Return the value of your storage place as your output */

function takeRight(array, count) {
  var newArray = array.slice(-count);
  return newArray;
}
