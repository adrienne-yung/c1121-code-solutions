/* exported tail */
/* - Create an empty storage space for your output
- Traverse through your group of words starting at the second word until you get to the end of the list of words, moving to the next word after each word.
- put the value of every single word in the list into your storage space except for the first word
- return that storage space as your output */

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
