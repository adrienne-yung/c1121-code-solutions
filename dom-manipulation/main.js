var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
var clicksNumber = 0;

$hotButton.addEventListener('click', temperatureOfButton);
function temperatureOfButton(event) {
  clicksNumber++;
  $clickCount.textContent = 'Clicks:' + clicksNumber;
  if (clicksNumber < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clicksNumber < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clicksNumber < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clicksNumber < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clicksNumber < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}
