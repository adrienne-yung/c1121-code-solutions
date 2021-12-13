/* exported last */
/* - Create a storage space to store the value of the current place
- Create a storage space to hold the value of a word's last character
- return the value of my second storage space */

function last(array) {
  var arrayIndex = array.length - 1;
  var lastIndex = array[arrayIndex];
  return lastIndex;
}
