/* exported union */
// - make a storage space for your output
// - make a storage space for the merged lists
// - traverse through each list item
//    - if any of these items from the output are not included in the list, put into output storage space
// - return storage space as output
function union(first, second) {
  var output = [];
  var array = [].concat(first, second);
  for (var i = 0; i < array.length; i++) {
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
}
