/* exported reverse */
/* - Create a storage space to hold your output
- Traverse through the group of words, starting from the end of the list of elements and work your way down until you reach the first element of the list of elements
- Add each element into your storage space from the end of the word to the front of the word
- Return the value of the storage space as your output */

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
