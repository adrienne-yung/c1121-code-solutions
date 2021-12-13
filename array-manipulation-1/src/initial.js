/* exported initial */
/* - Create an empty storage space for your output
- Traverse through the group of words until the second last word
- Add each word except for the last into your storage space
- Return the value of your storage space as your output */

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
