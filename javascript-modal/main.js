var $modalButton = document.querySelector('.modal-button');
var $modalWindow = document.querySelector('.modal-window');
var $noButton = document.querySelector('.no-button');

$modalButton.addEventListener('click', openModal);
function openModal(event) {
  if (event.target.matches('.modal-button')) {
    $modalWindow.className = 'modal-window modal-open';
  } else {
    $modalWindow.className = 'modal-window';
  }
}

$noButton.addEventListener('click', noThanks);
function noThanks(event) {
  if (event.target.matches('.no-button')) {
    $modalWindow.className = 'modal-window';
  }
}
