/* exported getKeys */
/* - Create a storage space for your output
- Look for the property inside the space
- Store value grabbed into the storage space
- Return the storage space as your output */

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
