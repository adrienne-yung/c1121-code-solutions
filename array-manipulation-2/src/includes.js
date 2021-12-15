/* exported includes */
/* - Traverse through the given set
- In the condition that you find desired value, return true
- If not, return false */

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
