/* exported swapChars */
/* - Create a storage space for your output
- Create a storage space to hold the value of your words split
- Create a storage space to hold the value of your word's first element
- Create a storage space to hold the value of your word's second element
- Switch the value of the first storage space with the second
- Switch the value of the second storage space with the first
- Bring back together the word
- Return the value of the full word's storage space */

// function swapChars(firstIndex, secondIndex, string) {
//   var newString = '';
//   var stringSplit = string.split('');
//   var firstInd = stringSplit[firstIndex];
//   var secondInd = stringSplit[secondIndex];
//   stringSplit[secondIndex] = firstInd;
//   stringSplit[firstIndex] = secondInd;
//   newString = stringSplit.join('');
//   return newString;
// }

function swapChars(firstIndex, secondIndex, string) {
  var stringSplit = string.split('');
  for (let i = 0; i < string.length; i++) {
    if (string[i] === firstIndex) {
      stringSplit.string[i] = secondIndex;
    } else if (string[i] === secondIndex) {
      stringSplit.string[i] = firstIndex;
    }
  }
  return stringSplit.join('');
}
