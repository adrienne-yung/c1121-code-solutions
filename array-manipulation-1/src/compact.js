/* exported compact */
/* - Create a storage space for your output
- Traverse through the list of elements, checking each element, moving onto the next after checking
- Set a condition in which you remove values of false, empty lists, undefined, negative numbers, null, or is not a number
- After removing, store the value of everything else into your storage space
- Return the value of your storage space as your ouput */

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
