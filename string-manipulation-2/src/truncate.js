/* exported truncate */
/* Create a storage space to hold the value of the string and add "..." after given length is reached for the word
- Return the value of your storage space as your output */

function truncate(length, string) {
  var newString = string.slice(0, length) + '...';
  return newString;
}
