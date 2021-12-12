/* exported capitalizeWords */
/* - Create a storage space to hold the separated words of each group of words
- Create a storage space to hold your output
- Traverse through each word, and move onto the next word until you finish all the words in the group of words
- Capitalize the first letter of each word
- Join together the upperCased letter of each word and lowercase the rest of the other letters in the word and store that value in a new storage space
- Store that new value into your output storage space
- Put back together the words to make it into a group of words and return that value as your output */

function capitalizeWords(string) {
  var groupOfIndividualWords = string.split(' ');
  var newString = [];
  for (var i = 0; i < groupOfIndividualWords.length; i++) {
    var upperCaseLetter = groupOfIndividualWords[i][0].toUpperCase();
    var newWord = upperCaseLetter + groupOfIndividualWords[i].substring(1, groupOfIndividualWords[i].length).toLowerCase();
    newString.push(newWord);
  }
  return newString.join(' ');
}
