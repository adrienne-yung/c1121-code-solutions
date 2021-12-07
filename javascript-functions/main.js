function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(3);
console.log('Value of convertMinutesToSecondResult:', convertMinutesToSecondsResult);

function greet(name) {
  return 'Hey, ' + name;
}

var greetResult = greet('Adrienne');
console.log('Value of greetResult:', greetResult);

function getArea(width, height) {
  return width * height;
}

var getAreaResult = getArea(5, 20);
console.log('Value of getAreaResult:', getAreaResult);

var person = {
  firstName: 'Adrienne',
  lastName: 'Yung'
};

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName(person);
console.log('Value of getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var lastElementResult = getLastElement(['propane', 'methane', 'accessories']);

console.log('Value of lastElementResult:', lastElementResult);
