/* exported zip */
// - make a storage space for your output
// - make a storage space for the length of each list
// - traverse through each list
//     -assign the first two elements of each list into the output storage space
// - return your storage space output
function zip(first, second) {
  var output = [];
  var arrayLength = Math.min(first.length, second.length);
  for (var i = 0; i < arrayLength; i++) {
    output.push([].concat(first[i], second[i]));
  }
  return output;
}
