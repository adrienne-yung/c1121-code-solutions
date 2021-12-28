/* exported isAnagram */

// // function isAnagram(firstString, secondString) {
// //   var firstStringItem = firstString.split(' ').join('').split('').sort().join('');
// //   var secondStringItem = secondString.split(' ').join('').split('').sort().join('');
// //   if (firstStringItem !== secondStringItem) {
// //     return false;
// //   } else {
// //     return true;
// //   }
// }

// - Create a storage space to hold the value of your first group of words
// - Create a storage space to hold the value of your second group of words
// - Traverse through the first group of words
// - In the condition the character is not a space, add character into storage space for first group of words
// - Traverse through teh second group of words
// - In the condition the character is not a space, add character into storage space for second group of words
// - Sort the words characters in both storage spaces and join them
// - If the value of the first storage space doesn't equal the value of the second storage space, return false
// - Or else return true

function isAnagram(firstString, secondString) {
  var firstStringItem = [];
  var secondStringItem = [];
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstStringItem.push(firstString[i]);
    }
  }
  for (var e = 0; e < secondString.length; e++) {
    if (secondString[e] !== ' ') {
      secondStringItem.push(secondString[e]);
    }
  }
  firstStringItem = firstStringItem.sort().join();
  secondStringItem = secondStringItem.sort().join();
  if (firstStringItem !== secondStringItem) {
    return false;
  } else {
    return true;
  }
}
