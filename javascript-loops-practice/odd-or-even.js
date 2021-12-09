/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddOrEvenValue = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEvenValue[i] = 'even';
    } else {
      oddOrEvenValue[i] = 'odd';
    }
  }
  return oddOrEvenValue;

}
