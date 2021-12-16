/* exported swapChars */
/* - Create a storage space to hold your output
- Create a storage space to hold the value of A
- Create a storage space to hold the value of B
- Traverse through the group of words
- If your character is A, swap the value of A for B, then store into your output storage space
- If your character is B, swap the value of B for A, then store into your output storage space
- If your character is not A or B, store the character as is into your output storage space
- Return the value of your storage space as your output */

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var firstCharacter = string[firstIndex];
  var secondCharacter = string[secondIndex];
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += secondCharacter;
    } else if (i === secondIndex) {
      newString += firstCharacter;
    } else {
      newString += (string[i]);
    }

  }
  return newString;
}
