/* exported capitalize */
/* - create a storage space and store the first letter of each word and uppercase them
- create a storage space to store the rest of the other letters
- go through the rest of the remaining letters
- lower case the remaining letters and store them into your storage space for remaining letters
- return the values of each storage space respectively as your output */

function capitalize(word) {
  var firstLetter = word[0].toUpperCase();
  var remainingLetters = '';
  for (var i = 1; i < word.length; i++) {
    remainingLetters += word[i].toLowerCase();
  }
  return firstLetter + remainingLetters;
}
