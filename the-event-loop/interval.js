var count = 3;
var timerId = null;

function countdown() {
  if (count === 3) {
    console.log(count);
    count--;
  } else if (count === 2) {
    console.log(count);
    count--;
  } else if (count === 1) {
    console.log(count);
    count--;
  } else {
    console.log('Blastoff!');
    clearInterval(timerId);
  }
}
timerId = setInterval(countdown, 1000);
