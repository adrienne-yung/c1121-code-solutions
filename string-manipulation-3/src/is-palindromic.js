/* exported isPalindromic */
// function isPalindromic(string) {
//   var reverseString = string.split(' ').join('').string.split('').reverse().join();
//   for (var i = 0; i < reverseString.length; i++) {
//     if (string[i] === reverseString[i]) {
//       return true;
//     }
//   }
// }

function isPalindromic(string) {
  var newString = string.split(' ').join('');
  for (var i = 0; i < newString.length / 2; i++) {
    if (newString[i] !== newString[newString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/* - Create a storage space to hold the value of your group of words without their spaces between them, and set each word as its own entity
- Create a storage space to hold the value of your group of words without their spaces between them, reverse them, then set each word as its own entity
- In the condition that your first storage space value doesn't your second storage space value
- Return false as your output.
function isPalindromic(string) {
  var spacelessString = string.split(' ').join('').split('').join('');
  var reverseString = string.split(' ').join('').split('').reverse().join('');
  if (spacelessString !== reverseString) {
    return false;
  } else {
    return true;
  }
}
*/
