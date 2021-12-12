/* exported ransomCase */
/* - Create a storage space for your output
- Go through each letter of a word, moving to the next letter after checking for each condition:
- In the condition that the letter is an odd,
    uppercase the word and store that value
- In the condition that the letter is an even,
    lowercase the word and store that value
- Return the value of the storage space */

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
