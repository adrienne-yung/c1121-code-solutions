/* exported dropRight */
/* -Create a storage space to hold the value of your group of words where you count backwards at your first element and drop everything on the right
- Return the value of your storage space as your output */
function dropRight(array, count) {
  var newArray = array.slice(0, -count);
  return newArray;
}
