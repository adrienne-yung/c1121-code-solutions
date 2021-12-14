/* exported take */
/* - Create a storage space to hold the value of you grabbing the however much desired of elements
- Return the value of your storage space as your output */

function take(array, count) {
  var newArray = array.slice(0, count);
  return newArray;
}
