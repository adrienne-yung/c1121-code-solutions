/* exported intersection */
// - make a storage space for your output
// - make a storage space for the list you want to alter
// - traverse through the first array
// - traverse through the second array
// - check to see if any items in first or second array are the same
//    - if they are, assign to second storage space
// - traverse through the second array
//   - if any of those elements are not included in the output list
//      - assign those items into the output storage space
// - return storage space as output
function intersection(first, second) {
  var array = [];
  var output = [];
  for (var i = 0; i < first.length; i++) {
    for (var e = 0; e < second.length; e++) {
      if (first[i] === second[e]) {
        array.push(first[i], second[e]);
      }
    }
  }
  for (var j = 0; j < array.length; j++) {
    if (!output.includes(array[j])) {
      output.push(array[j]);
    }
  }
  return output;
}
