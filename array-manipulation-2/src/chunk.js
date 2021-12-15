/* exported chunk */
/* - Create a storage space to hold your output
- Traverse through the group of elements, starting from the beginning until the end, and increment for desired size of chunk
- Create a storage space to hold the value of each individual chunk of a group of elements
- Put each chunk into the value of your first storage space
- Return the value of your storage space as your ouput */

function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var chunk = array.slice(i, i + size);
    newArray.push(chunk);
  }
  return newArray;
}
