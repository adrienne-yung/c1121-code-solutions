/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var firstStringItem = firstString.split(' ').join('').split('').sort().join('');
  var secondStringItem = secondString.split(' ').join('').split('').sort().join('');
  if (firstStringItem !== secondStringItem) {
    return false;
  } else {
    return true;
  }
}
