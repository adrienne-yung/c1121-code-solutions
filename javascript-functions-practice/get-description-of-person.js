/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var name = person.name;
  var occupation = person.occupation;
  var birthplace = person.birthPlace;
  return name + ' is a ' + occupation + ' from ' + birthplace + '.';
}
