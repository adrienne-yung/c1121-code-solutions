/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var word = [];
  for (var i = 0; i < words.length; i++) {
    word[i] = words[i] + suffix;
  }
  return word;
}
