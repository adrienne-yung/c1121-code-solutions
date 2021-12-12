/* exported lastChars */
/* - Create a storage space for your output
- From the end of your word, count backwards to the desired length and store that value into your storage space
- Return the value of your storage space as your output */

function lastChars(length, string) {
  var newString = '';
  newString = string.slice(-length, string.length);
  return newString;
}
