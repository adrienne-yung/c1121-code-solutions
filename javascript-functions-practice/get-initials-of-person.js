/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstName = person.firstName;
  var firstInitial = firstName[0];
  var lastName = person.lastName;
  var lastInitial = lastName[0];
  return firstInitial + lastInitial;
}
