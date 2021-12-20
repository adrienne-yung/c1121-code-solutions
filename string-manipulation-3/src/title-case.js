/* exported titleCase */

/* - Create a storage space to hold the title and lowercase everything in the title, then split the phrase into individual words
- Create a storage space to hold the value of the words that need to lowercased
- Traverse through the first storage space to uppercase every letter that is the first letter of the word
- In the situation that the word is "Api", capitalize the all letters into "API", since it's an acronym
- Put back together the words into the phrase
- In the situation that word is a lowercased word AND is not the first word of the title, lowercase the whole word and store
- Return the value of the storage space as your output */

// function titleCase(title) {
//   title = title.toLowerCase().split(' ');
//   for (var i = 0; i < title.length; i++) {
//     title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
//     if (title[i] === 'Api') {
//       title[i] = title[i].toUpperCase();
//     }
//     if (title[i] === 'Javascript') {
//       title[i] = 'JavaScript';
//     }
//     if (title[i] === 'Javascript:') {
//       title[i] = 'JavaScript:';
//     }
//     if (title[i] === 'In-depth') {
//       title[i] = 'In-Depth';
//     }
//     if ((title[i] === 'In') || (title[i] === 'For') || (title[i] === 'Of') || (title[i] === 'The') || (title[i] === 'To') || (title[i] === 'On') || (title[i] === 'And')) {
//       title[i] = title[i].toLowerCase();
//     }
//     if (title[i].includes(':')) {
//       title[i + 1].charAt(0) = title[i + 1].charAt(0).toUpperCase() title[i + 1].slice(1).toLowerCase();
//     }
//   return title.join(' ');
// }
