/* exported unique */
// - Create storage for output
// - Traverse through each array
//     if anything not wanted in the output is not included, assign it to output
// - return the storage space output
function unique(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
}
