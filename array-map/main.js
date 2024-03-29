const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

var doubled = numbers.map(number => {
  return number * 2;
});
console.log('value of doubled:', doubled);

var prices = numbers.map(number => {
  var changePrice = number.toFixed(2);
  return `$${changePrice}`;
});
console.log('value of prices:', prices);

var upperCased = languages.map(language => {
  return language.toUpperCase();
});
console.log('value of upperCased:', upperCased);

var firstLetters = languages.map(language => {
  return language[0];
});
console.log('value of firstLetters:', firstLetters);
