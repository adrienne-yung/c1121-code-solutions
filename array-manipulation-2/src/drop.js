/* exported drop */
/* - Create a storage space to store your output to drop however much desired amount
- Return the value of your storage space as your output */

function drop(array, count) {
  var newArray = array.slice(count, array.length);
  return newArray;
}
