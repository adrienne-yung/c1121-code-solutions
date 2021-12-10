/* exported isVowel */
/* in the condition that a letter is A, E, I, O, U or a, e, i, o, u, return true
if the letters are not the above, return false */

function isVowel(character) {
  if (character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U' || character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    return true;
  } else {
    return false;
  }
}
