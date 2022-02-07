/* exported difference */
// - make a storage space for your output
// - make a storage space for your first list
// - make a storage space for your second list
// - traverse through the first list
//   - if any elements from the second list is not included in the first list,
//     - assign those items into the first list storage space
// - traverse through the second list
//   - if any elements of the first list is not included in the second list
//     - assign second elements into second list storage space
// - join together first storage space and second storage space and assign it to output storage space
// - return output storage space
function difference(first, second) {
  var output = [];
  var firstArray = [];
  var secondArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      firstArray.push(first[i]);
    }
  }
  for (var e = 0; e < second.length; e++) {
    if (!first.includes(second[e])) {
      secondArray.push(second[e]);
    }
  }
  output = [].concat(firstArray, secondArray);
  return output;
}
