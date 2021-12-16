/* exported reverseWords */
/* - Split each group of words into one word and reverse the individual letters of word
- Put the word back together and apply the spacing between the words and bring them back together
- Return that value as your output */

function reverseWords(string) {
  return string.split('').reverse().join('').split(' ').reverse().join(' ');
}
