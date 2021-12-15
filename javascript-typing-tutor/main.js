var $span = document.querySelectorAll('span');
var i = 0;
var $button = document.querySelector('button');
window.addEventListener('keydown', typing);
function typing(event) {
  var letter = $span[i].textContent;
  if (event.key === letter) {
    $span[i].className = 'green';
    i++;
    if (i === $span.length) {
      $button.className = '';
      return;
    } else {
      $button.className = 'hidden';
    }
    $span[i].className = 'current-letter';
  } else if (event.key !== letter) {
    $span[i].className = 'red';
  }
}

$button.addEventListener('click', playAgain);
function playAgain(event) {
  for (var j = 0; j < $span.length; j++) {
    $span[j].className = '';
  }
  i = 0;
  $button.className = 'hidden';
}
