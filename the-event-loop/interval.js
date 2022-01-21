var count = 3;
var timerId = null;

function countdown() {
  if ((count <= 3) && (count > 0)) {
    console.log(count);
    count--;
  } else {
    console.log('Blastoff!');
    clearInterval(timerId);
  }
}
timerId = setInterval(countdown, 1000);
