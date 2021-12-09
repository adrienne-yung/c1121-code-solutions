/* exported countdown */
function countdown(number) {
  var numberCount = [];
  for (var i = number; i >= 0; i--) {
    numberCount.push(i);
  }
  return numberCount;
}
