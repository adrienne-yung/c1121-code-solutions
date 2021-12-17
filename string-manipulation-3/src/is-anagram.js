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
