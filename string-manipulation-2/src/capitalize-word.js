/* exported capitalizeWord */
/* - Create a storage space for your output
- Capitalize the first letter of each word and create a storage space to hold that value
- Lowercase the remaining letters (that is not the first letter of the word) and create a storage space to store that value
- Bring back together the capitalized letter and the remaining letters and store the value in your storage space
- In the condition that the word is "Javascript"
      revise the word to be "JavaScript" and store that value as your output instead
- Return the value of your storage space as your output */

function capitalizeWord(word) {
  var newWord = '';
  var firstLetter = word[0].toUpperCase();
  var remainingLetters = '';
  for (var i = 1; i < word.length; i++) {
    remainingLetters += word[i].toLowerCase();
    newWord = firstLetter + remainingLetters;
  }
  if (newWord === 'Javascript') {
    newWord = 'JavaScript';
  }
  return newWord;
}
