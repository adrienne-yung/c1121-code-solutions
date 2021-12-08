var number1 = 1;
var number2 = 2;
var number3 = 3;
var maximumValue = Math.max(number1, number2, number3);
console.log('maximumValue:', maximumValue);

var heroes = ['Thor', 'Batman', 'Canary', 'Iron Man'];
var randomNumber = Math.random(maximumValue);
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R Tolkien'
  },
  {
    title: 'Lord of the Rings: The Two Towers',
    author: 'J.R.R Tolkien'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 0);
console.log('library:', library);

var fullName = 'Adrienne Yung';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
