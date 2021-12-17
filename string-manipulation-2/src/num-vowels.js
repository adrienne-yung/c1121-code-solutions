/* exported numVowels */

function numVowels(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if ((string[i] === 'A') || (string[i] === 'E') || (string[i] === 'I') || (string[i] === 'O') || (string[i] === 'U') || (string[i] === 'a') || (string[i] === 'e') || (string[i] === 'i') || (string[i] === 'o') || (string[i] === 'u')) {
      count++;
    }
  }
  return count;
}
