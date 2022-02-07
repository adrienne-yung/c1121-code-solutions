/* exported equal */
// - if the first list does not equal the same length as the second list, return false
// - traverse through the first list
//   - if the index of each element at the first list is not equal to the index of the first list at the second list,
//     return false
// - if nothing returns false, return true
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
