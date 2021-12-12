/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  if (array === []) {
    return newArray;
  } else {
    newArray = array.slice(0, -count);
  }
  return newArray;
}
