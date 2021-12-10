/* exported getWords */
/* - Create a storage space and store the value of a word or a group of words with a space between each word.
- if what is given doesn't contain a word, return no words
- if it does contain words, return your storage space as output. */

function getWords(string) {
  var newArray = string.split(' ');
  if (string === '') {
    return [];
  } else {
    return newArray;
  }
}
