/* exported includesSeven */
function includesSeven(array) {
  var arrayValue = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      arrayValue = true;
    }
  }
  return arrayValue;
}
