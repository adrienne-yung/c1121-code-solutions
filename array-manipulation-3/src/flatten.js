/* exported flatten */
// - make a storage space for your output
// - traverse through the list of items
//    - if any of those items are a list itself,
//        - output storage space will now be equal to items combined in that list,
//        - if they are not, assign those elements to the storage space output
// - return storage space as output
function flatten(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      output = output.concat(array[i]);
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
