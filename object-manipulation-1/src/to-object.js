/* exported toObject */
/* - Create a storage space for your value
- Create a storage space for your output
- Create a storage space for your property
- Assign your value to your object's property
- Return the value of your output storage space */

function toObject(keyValuePair) {
  var value = keyValuePair[1];
  var object = {};
  var key = keyValuePair[0];
  object[key] = value;
  return object;
}
