const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

var evenNumbers = numbers.filter(number => {
  return number % 2 === 0;
});
console.log('value of evenNumbers:', evenNumbers);

var overFive = numbers.filter(number => {
  return number > 5;
});
console.log('value of overFive:', overFive);

var startWithE = names.filter(name => {
  return name.startsWith('E', 0);
});
console.log('value of startsWithE', startWithE);

var haveD = names.filter(name => {
  return name.toLowerCase().includes('d');
});
console.log('value of haveD:', haveD);
