/* exported reverseWord */
/* - Create a storage space for your new word
- Traverse through the word from the last letter and work your way downward until you get to the first letter of the word
- grab each letter (from end to beginning) and store that value in your storage space
- return the value of your storage space as your output */

function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
