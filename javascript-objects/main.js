var student = {
  firstName: 'Adrienne',
  lastName: 'Yung',
  age: 24
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
console.log('value of student.livesInIrvine:', student.livesInIrvine);

student.previousOccupation = 'Franchise Trainer for Zero Degrees';
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student:', student);

var vehicle = {
  make: 'Subaru',
  model: 'Impreza',
  year: 2017
};

vehicle['color'] = 'white';
console.log('value of vehicle.color', vehicle.color);

vehicle['isConvertible'] = false;
console.log('value of vehicle.isConvertible:', vehicle.isConvertible);

console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Chef',
  type: 'fish'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
