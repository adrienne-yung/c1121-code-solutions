/* exported getValues */
/* - Create a storage space for your output
- Grab the properties in the given space
- Store the value of the property into the storage space
- Return the value of the storage space as your output */

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
