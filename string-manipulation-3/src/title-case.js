/* exported titleCase */

/* - Create a storage space to hold the title and lowercase everything in the title, then split the phrase into individual words
- Create a storage space to hold the value of the words that need to lowercased
- Traverse through the first storage space to uppercase every letter that is the first letter of the word
- In the situation that the word is "Api", capitalize the all letters into "API", since it's an acronym
- Put back together the words into the phrase
- In the situation that word is a lowercased word AND is not the first word of the title, lowercase the whole word and store
- Return the value of the storage space as your output */

function titleCase(title) {
  title = title.toLowerCase().split(' ');
  var lowerCaseWords = ['In', 'For', 'Of', 'The', 'To', 'On', 'And'];
  for (var i = 0; i < title.length; i++) {
    title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
    if (title[i] === 'Api') {
      title[i] = title[i].toUpperCase();
    }
    for (var e = 0; e < lowerCaseWords.length; e++) {
      if ((lowerCaseWords[e] !== title[i].charAt(0)) && (lowerCaseWords[e] === lowerCaseWords)) {
        title[e] = title[e].toLowerCase;
      }
    }
  }
  return title.join(' ');
}
