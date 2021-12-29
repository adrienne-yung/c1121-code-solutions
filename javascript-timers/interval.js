var headerOne = document.querySelector('h1');
var seconds = 4;
var timerId = null;

function headerCountdown() {
  seconds--;
  if (seconds > 0) {
    headerOne.textContent = seconds;
  } else {
    headerOne.textContent = ' ~Earth Beeeeloooww Us~';
    clearInterval(timerId);
  }
}
timerId = setInterval(headerCountdown, 1000);
