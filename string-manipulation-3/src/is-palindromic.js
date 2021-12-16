/* exported isPalindromic */
function isPalindromic(string) {
  var reverseString = string.split('').reverse();
  if (string !== reverseString) {
    return true;
  } else {
    return false;
  }
}
