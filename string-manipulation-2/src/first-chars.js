/* exported firstChars */
/* - Create a storage space for your output
- Assign the value of your word to the asked length to storage space
- Return the value of your storage space as your output */

function firstChars(length, string) {
  var newString = '';
  newString = string.slice(0, length);
  return newString;
}
